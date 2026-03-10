# File ZemaxService.cs

<a id="_zemax_service_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::IZOSAPI\_Events](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___events.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___events)
* [ZOSAPI::APINetCallback](class_z_o_s_a_p_i_1_1_a_p_i_net_callback.md#class_z_o_s_a_p_i_1_1_a_p_i_net_callback)
* [ZOSAPI::ZOSAPI\_Connection](class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection.md#class_z_o_s_a_p_i_1_1_z_o_s_a_p_i___connection)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Runtime.Remoting;
using System.Text.RegularExpressions;
using ZOSAPI.Analysis;
using ZemaxUI.Common.ViewModels;
using ZemaxUI.ZOSAPI;
using System.Diagnostics;
using System.Text;
using System.Threading;
using ZOSAPI.Common;
using System.Collections.Concurrent;

namespace ZOSAPI      //  Zemax As A Service
{
    [ComVisible(true)]
    [Guid("F8ECF9DA-2251-4A9B-9DB8-89E0B6C0A968")]
    [InterfaceType(ComInterfaceType.InterfaceIsIDispatch)]
    public interface IZOSAPI_Events
    {
        [DispId(1)]
        void SystemStatusChangedEvent(int systemId, string newStatus);
    }

    public abstract class APINetCallback : MarshalByRefObject, IZAPI_BaseObject, IZOSAPI_Callback
    {
        private ConcurrentDictionary<IZAPI_BaseObject, bool> Children;
        public IZAPI_BaseObject Parent { get; private set; }
        public bool IsDisposed { get; private set; }


        public string Name { get; set; }
        public bool IsLocal
        {
            get
            {
                return !System.Runtime.Remoting.RemotingServices.IsTransparentProxy(this);
            }
        }
        public ISettingsData Settings { get; private set; }
        public IZOSAPI_Application TheApp { get; protected set; }


        public APINetCallback()
        {
            Children = new ConcurrentDictionary<IZAPI_BaseObject, bool>();
            TheApp = ZOSAPI_Connection.TheApp;
            if (TheApp == null)
                TheApp = ZOSAPI_Application.TheApp;
            this.Settings = TheApp.CreateSettingsFromParent(this);
        }

        public abstract int Execute();

        public void Dispose()
        {
            Dispose(true);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (IsDisposed)
                return;

            if (disposing)
            {
                ReleaseFromServer();
            }

            IsDisposed = true;
            GC.SuppressFinalize(this);
        }

        public IZOSAPI_Callback LoadInServer(IZOSAPI_Application TheApp)
        {
            Assembly thisAssembly = Assembly.GetCallingAssembly();

            var typeName = this.GetType().Name;
            var callback = TheApp.LoadNETCallback(
                thisAssembly.Location,
                typeName,
                this.Settings);
            callback.Name = typeName;
            return callback;
        }

        private void ReleaseFromServer()
        {
            if (IsLocal)
            {
                Disconnect();
            }
        }

        public override object InitializeLifetimeService()
        {
            return null;
        }

        public void AddChild(IZAPI_BaseObject child)
        {
            Children.TryAdd(child, true);
        }

        public virtual void RemoveChild(IZAPI_BaseObject child)
        {
            try
            {
                bool cv;
                Children.TryRemove(child, out cv);
            }
            catch { }
        }

        public virtual void Disconnect()
        {
            try
            {
                foreach (var child in Children.Keys)
                {
                    try
                    {
                        child.Disconnect();
                    }
                    catch { }
                }

                Children = null;
            }
            catch { }

            try
            {
                if (Parent != null)
                {
                    Parent.RemoveChild(this);
                }
            }
            catch { }

            try
            {
                RemotingServices.Disconnect(this);
            }
            catch { }
        }

        ~APINetCallback()
        {
            Dispose(false);
        }

        public virtual APINetCallback Clone()
        {
            return base.MemberwiseClone() as APINetCallback;
        }

        public IZOSAPI_Callback Copy(IZOSAPI_Application theApp)
        {
            APINetCallback copy = this.Clone();
            SettingsData settings = this.Settings as SettingsData;
            copy.Settings = settings.Copy(this);
            copy.TheApp = theApp;
            return copy;
        }

        public IMessage RegisterUDOCCallback(IZOSAPI_Application TheApp)
        {
            Assembly thisAssembly = Assembly.GetCallingAssembly();

            var typeName = this.GetType().Name;
            return TheApp.RegisterNETOperandCallback(
                thisAssembly.Location,
                typeName,
                this.Settings);
        }
    }

    [ComVisible(true)]
    [Guid("B44B0A5F-7A80-45A5-8BC4-405FF36AEB02")]
    [ProgId("ZOSAPI.ZOSAPI_Connection")]
    [ClassInterface(ClassInterfaceType.None)]
    [ComSourceInterfaces(typeof(IZOSAPI_Events))]
    public sealed class ZOSAPI_Connection : IZOSAPI_Connection
    {
        internal class EventMarshaler : MarshalByRefObject, IAPICallback
        {
            private ZOSAPI_Connection Conn;
            private ZOSAPI_Application App;

            public bool IsValid { get; private set; }

            private string ThisLib1;
            private string ThisLib2;

            public EventMarshaler(ZOSAPI_Application app, ZOSAPI_Connection conn)
            {
                this.Conn = conn;
                this.App = app;

                app.SystemStatusChanged += OnStatusChanged;
                app.ApplicationClosed += OnApplicationClosed;

                string thisLib1 = Path.Combine(MainViewModel.ExecutablePath, "ZOSAPI.dll").ToUpper();
                string thisLib2 = thisLib1.Replace("ZOSAPI.DLL", "ZEMAX.DLL");

                ThisLib1 = thisLib1;
                ThisLib2 = thisLib2;
            }

            public void Execute()
            {
#if ZCL
                try
                {
                    string lastFrame = null;
                    foreach (var frame in GetFrames())
                    {
                        if (String.Compare(frame, ThisLib1, true) == 0 ||
                            String.Compare(frame, ThisLib2, true) == 0)
                        {
                            if (lastFrame == null)
                            {
                                lastFrame = FindAnyLib(MainViewModel.ExecutablePath);
                                IsValid = App.SetLib(lastFrame);
                                return;
                            }
                            else
                            {
                                string libName = Path.GetFileName(lastFrame);
                                if (String.Compare(libName, "mscorlib.dll", true) == 0)
                                {
                                    lastFrame = FindAnyLib(MainViewModel.ExecutablePath);
                                }

                                IsValid = App.SetLib(lastFrame);
                                return;
                            }
                        }

                        lastFrame = frame;
                    }
                }
                catch
                {
                }

                IsValid = false;
#else
                IsValid = true;
#endif
            }

#if ZCL

            private const string SUNK = "Unknown";

            private IEnumerable<string> GetFrames()
            {
                //StackTrace st = new StackTrace();
                //int numFrames = st.FrameCount;
                //if (minFrame >= numFrames)
                //    throw new ArgumentException();
                //for (int i = 0; i < numFrames; ++i)
                //{
                //    var frame = st.GetFrame(i);
                //    string file = GetFile(frame);
                //    yield return file;
                //}
                StackTrace st = new StackTrace();
                int numFrames = st.FrameCount;
                for (int i = numFrames - 1; i >= 0; --i)
                {
                    var frame = st.GetFrame(i);
                    string file = GetFile(frame);
                    yield return file;
                }
            }

            private string FindAnyLib(string executablePath)
            {
                try
                {
                    AppDomain ad = AppDomain.CurrentDomain;
                    foreach (var am in ad.GetAssemblies())
                    {
                        string file = GetFile(am);
                        if (!String.IsNullOrWhiteSpace(file) && file != SUNK &&
                            String.Compare(file, ThisLib1, true) != 0 &&
                            String.Compare(file, ThisLib2, true) != 0)
                        {
                            string fileDir = Path.GetDirectoryName(file);
                            if (String.Compare(fileDir, executablePath, true) == 0)
                            {
                                string baseFile = Path.GetFileNameWithoutExtension(file);
                                string licFile = Path.Combine(fileDir, baseFile + ".zld");
                                if (File.Exists(licFile))
                                    return file;
                            }
                        }
                    }
                }
                catch
                {
                }
                return SUNK;
            }

            private string GetFile(StackFrame sf)
            {
                var ownerMethod = sf.GetMethod();
                if (ownerMethod == null)
                    return SUNK;

                var ownerType = ownerMethod.DeclaringType;
                if (ownerType == null)
                    return SUNK;

                var ownerAssembly = ownerType.Assembly;
                return GetFile(ownerAssembly);
            }

            private static string GetFile(Assembly ownerAssembly)
            {
                if (ownerAssembly != null)
                {
                    string loc = ownerAssembly.Location;
                    if (String.IsNullOrWhiteSpace(loc))
                    {
                        var an = ownerAssembly.GetName();
                        if (an == null || String.IsNullOrWhiteSpace(an.Name))
                            return SUNK;

                        string dir = MainViewModel.ExecutablePath;
                        string baseName = Path.Combine(dir, an.Name);
                        foreach (string ext in new string[] { ".dll", ".exe" })
                        {
                            string comb = baseName + ext;
                            if (System.IO.File.Exists(comb))
                                return comb;
                        }

                        return SUNK;
                    }
                    else
                    {
                        return loc;
                    }
                }

                return SUNK;
            }

#endif

            public override object InitializeLifetimeService()
            {
                return null;
            }

            public void OnApplicationClosed()
            {
                try
                {
                    Conn.OnAppClosed();
                }
                catch { }
                try
                {
                    RemotingServices.Disconnect(this);
                }
                catch { }
            }

            public void OnStatusChanged(int systemId, string status)
            {
                try
                {
                    Conn.OnSystemStatusChanged(systemId, status);
                }
                catch { }
            }
        }

        public static IZOSAPI_Application TheApp { get; internal set; }
        private static string ExeDir;
        private static EventMarshaler EM;
        private static ExtensionConnector Connector;
        private static object Mutex = new object();

        private StringBuilder InitializationLog = new StringBuilder();

        private void LogInfo(string info)
        {
            InitializationLog.AppendLine(info);
        }

        private void LogError(Exception ex)
        {
            LogInfo(GetExceptionMsg(ex));
        }

        private static string GetExceptionMsg(Exception ex)
        {
            string message = ex.GetType().ToString();
            message += Environment.NewLine;
            message += ex.Message;
            if (ex.StackTrace != null)
            {
                message += Environment.NewLine + ex.StackTrace;
            }
            if (ex.InnerException != null)
                message += Environment.NewLine + "Inner Excpetion:" + Environment.NewLine +
                    GetExceptionMsg(ex.InnerException);

            return message;
        }

        public event OpticalSystemStatusChangedHandler SystemStatusChangedEvent;

        public ZOSAPI_Connection()
        {
            Assembly ta = Assembly.GetExecutingAssembly();
            ExeDir = MainViewModel.ExecutablePath;

            AppDomain.CurrentDomain.AssemblyResolve += CurrentDomain_AssemblyResolve;
        }

        private void OnSystemStatusChanged(int systemID, string status)
        {
            var h = SystemStatusChangedEvent;
            if (h != null)
            {
                h(systemID, status);
            }
        }

        private static IEnumerable<string> GetFilters()
        {
            yield return "*.dll";
            yield return "*.exe";
        }

        private Assembly CurrentDomain_AssemblyResolve(object sender, ResolveEventArgs args)
        {
            // TODO - add code to find Zemax directory
            string dir = ExeDir; // Environment.CurrentDirectory;
            AssemblyName desiredAssembly = new AssemblyName(args.Name);
            try
            {
                string desiredFile = GetAssemblyName(desiredAssembly);
                if (!String.IsNullOrWhiteSpace(desiredFile))
                {
                    string[] files = Directory.GetFiles(dir, desiredFile);
                    foreach (string file in files)
                    {
                        try
                        {
                            Assembly fa = Assembly.LoadFrom(file);
                            if (fa != null)
                            {
                                AssemblyName an1 = new AssemblyName(fa.FullName);
                                AssemblyName an2 = new AssemblyName(args.Name);
                                if (an1.Name == an2.Name)
                                    return fa;
                            }
                        }
                        catch { }
                    }
                }
            }
            catch { }

            return null;
        }

        private string GetAssemblyName(AssemblyName desiredAssembly)
        {
            foreach (string dllName in new string[] { "zemax", "zosapi_interfaces", "zosapi" })
            {
                if (String.Compare(desiredAssembly.Name, dllName, true, System.Globalization.CultureInfo.InvariantCulture) == 0)
            {
                    return dllName + ".dll";
                }
            }

            return null;
        }

        public bool IsAlive
        {
            get
            {
                if (TheApp == null)
                    return false;
                try
                {
                    switch (TheApp?.LicenseStatus ?? LicenseStatusType.Unknown)
                    {
                        case LicenseStatusType.PremiumEdition:
                        case LicenseStatusType.ProfessionalEdition:
                        case LicenseStatusType.StandardEdition:
                        case LicenseStatusType.EnterpriseEdition:
                        case LicenseStatusType.OpticStudioHPCEdition:
                        case LicenseStatusType.StudentEdition:
                            return true;
                    }
                }
                catch { }

                return false;
            }
        }

        public IZOSAPI_Application ConnectToApplication()
        {
            CheckAppState();

            lock (Mutex)
            {
                if (TheApp != null)
                    return TheApp;
            }

            string cl = Environment.CommandLine;
            Regex rMatchSrvProc = new Regex(@"-zpid={([^}]+)}", RegexOptions.Compiled | RegexOptions.IgnoreCase);
            Match m = rMatchSrvProc.Match(cl);
            if (m.Success)
            {
                int serverProc = Int32.Parse(m.Groups[1].Value);

                Regex rMatchPluginType = new Regex(@"-zplt={(\w+)}", RegexOptions.Compiled | RegexOptions.IgnoreCase);
                m = rMatchPluginType.Match(cl);
                if (m.Success)
                {
                    string pluginType = m.Groups[1].Value.ToLower();
                    OSInstance.Mode pluginMode = (OSInstance.Mode)Enum.Parse(typeof(OSInstance.Mode), pluginType, true);

                    Regex rMatchReqId = new Regex(@"-zsid={(\d+)}", RegexOptions.Compiled | RegexOptions.IgnoreCase);
                    m = rMatchReqId.Match(cl);
                    if (m.Success)
                    {
                        int reqId = Int32.Parse(m.Groups[1].Value);

                        bool success = true;
                        int? winnum = null;
                        if (pluginMode == OSInstance.Mode.UserAnalysisSettings ||
                            pluginMode == OSInstance.Mode.UserAnalysis)
                        {
                            Regex rMatchUserId = new Regex(@"-zuid={(\d+)}", RegexOptions.Compiled | RegexOptions.IgnoreCase);
                            m = rMatchUserId.Match(cl);
                            if (m.Success)
                                winnum = Int32.Parse(m.Groups[1].Value);
                            else
                                success = false;
                        }

                        if (success)
                        {
                            lock (Mutex)
                            {
                                RegisterServer(serverProc);

                                var appdata = CreateApp(this, serverProc, false, pluginMode, System.Diagnostics.Process.GetCurrentProcess().Id, reqId, winnum);
                                TheApp = appdata.Item1;
                                EM = appdata.Item2;

                                return TheApp;
                            }
                        }
                    }
                }
            }

            throw new ArgumentException("This application was not launched by Optic Studio");
        }

        private static Tuple<IZOSAPI_Application, EventMarshaler> CreateApp(ZOSAPI_Connection connection, int processId, bool wrap, params object[] args)
        {
#if ZCL
            if (wrap)
            {
                var app = (ZOSAPI_Application)Activator.CreateInstance(typeof(ZOSAPI_Application), args, new object[] { new System.Runtime.Remoting.Activation.UrlAttribute(Utils.GetCS(processId)) });
                var em = new EventMarshaler(app, connection);
                ZOSAPI_ServerApp sapp = new ZOSAPI_ServerApp(connection, app);
                sapp.SetCB(em);
                return new Tuple<IZOSAPI_Application, EventMarshaler>(sapp, em);
            }
            else
#endif
            {
                var app = (ZOSAPI_Application)Activator.CreateInstance(typeof(ZOSAPI_Application), args, new object[] { new System.Runtime.Remoting.Activation.UrlAttribute(Utils.GetCS(processId)) });
                var em = new EventMarshaler(app, connection);
                return new Tuple<IZOSAPI_Application, EventMarshaler>(app, em);
            }
        }

        private enum AppExStatus
        {
            Okay,
            ConnectionFailed,
            WrongInstance,
            NotReady,
            NotFound,
        }

        private static Tuple<IZOSAPI_Application, EventMarshaler, ExtensionConnector, AppExStatus> CreateAppEx(ZOSAPI_Connection connection, int process, int? instance, bool wrap = false)
        {
            Utils.CreateClientChannel(process);

            ExtensionConnector tc = null;
            bool success = false;
            try
            {
                tc = (ExtensionConnector)Activator.CreateInstance(typeof(ExtensionConnector), null, new object[] { new System.Runtime.Remoting.Activation.UrlAttribute(Utils.GetCS(process)) });
                int tci = tc.InstanceID;
                if (instance.HasValue)
                {
                    if (tci != instance)
                        return new Tuple<IZOSAPI_Application, EventMarshaler, ExtensionConnector, AppExStatus>(null, null, null, AppExStatus.WrongInstance);
                }
                if (tc.Status != ExtConnectionStatus.Ready)
                {
                    return new Tuple<IZOSAPI_Application, EventMarshaler, ExtensionConnector, AppExStatus>(null, null, null, AppExStatus.NotReady);
                }

                var app = tc.Connect(Process.GetCurrentProcess().Id) as ZOSAPI_Application;
                if (app != null)
                {
                    success = true;
                    var em = new EventMarshaler(app, connection);
#if ZCL
                    ZOSAPI_ServerApp sapp = new ZOSAPI_ServerApp(connection, app);
                    sapp.SetCB(em);
                    return new Tuple<IZOSAPI_Application, EventMarshaler, ExtensionConnector, AppExStatus>(sapp, em, tc, AppExStatus.Okay);
#else
                    return new Tuple<IZOSAPI_Application, EventMarshaler, ExtensionConnector, AppExStatus>(app, em, tc, AppExStatus.Okay);
#endif
                }

                tc.Cleanup();
            }
            catch
            {
            }
            finally
            {
                if (!success)
                {
                    tc?.Cleanup();
                }
            }

            return new Tuple<IZOSAPI_Application, EventMarshaler, ExtensionConnector, AppExStatus>(null, null, null, AppExStatus.ConnectionFailed);
        }

        private static bool ServerIsRegistered = false;
        private static int ServerProcessId;
        private static void RegisterServer(int processId)
        {
            try
            {
                if (!ServerIsRegistered)
                {
                    // create the object in the app server process
                    Utils.CreateClientChannel(processId);
                    //string cs = Utils.GetCS(processId);
                    // Type t = typeof(ZOSAPI_Application);
                    // RemotingConfiguration.RegisterActivatedClientType(t, cs);

                    ServerIsRegistered = true;
                    ServerProcessId = processId;
                }
            }
            catch { }
        }

        private void CheckAppState()
        {
            lock (Mutex)
            {
                if (TheApp != null)
                {
                    if (!TheApp.IsValidLicenseForAPI)
                    {
                        ResetState();
                    }
                }
            }
        }


        private void ResetState()
        {
            lock (Mutex)
            {
                if (ServerIsRegistered)
                {
                    Utils.DestoryClientChannel(ServerProcessId);
                    ServerIsRegistered = false;
                }

                try
                {
                    TheApp?.CloseApplication();
                }
                catch
                {

                }
                TheApp = null;

                InitProgress = new List<int>();
            }
        }

        private IZOSAPI_Application ConnectToAppByInstance(int instance, bool wrap = false)
        {
            int? zid = null;
            if (instance >= 1)
                zid = instance - 1;

            List<int> processIds = new List<int>();
            try
            {
                foreach (var process in Process.GetProcesses())
                {
                    try
                    {
                        if (process.ProcessName.ToLower().Contains("opticstudio"))
                        {
                            processIds.Add(process.Id);
                        }
                    }
                    catch { }
                }
            }
            catch { }

            AppExStatus status = AppExStatus.NotFound;
            bool specificInstance = zid.HasValue;
            StringBuilder errors = new StringBuilder();
            foreach (int process in processIds)
            {
                var appdata = CreateAppEx(this, process, zid, wrap);
                if (appdata != null)
                {
                    AppExStatus pstatus = appdata.Item4;
                    if (pstatus != AppExStatus.Okay)
                    {
                        errors.AppendLine(pstatus.ToString());
                    }
                    if (pstatus == AppExStatus.Okay)
                    {
                        TheApp = appdata.Item1;
                        EM = appdata.Item2;
                        Connector = appdata.Item3;
                        return TheApp;
                    }
                    else if (specificInstance)
                    {
                        if (pstatus == AppExStatus.WrongInstance)
                        {
                            continue;
                        }
                        else
                        {
                            status = pstatus;
                            break;
                        }
                    }
                    else
                    {
                        status = pstatus;
                    }
                }
            }

            LicenseStatusType lc = LicenseStatusType.Timeout;
            switch (status)
            {
                case AppExStatus.ConnectionFailed:
                    lc = LicenseStatusType.Timeout;
                    break;
                case AppExStatus.NotFound:
                    lc = LicenseStatusType.Unknown;
                    break;
                case AppExStatus.NotReady:
                    lc = LicenseStatusType.NotAuthorized;
                    break;
            }
            TheApp = ZOSAPI_Application.CreateUnconnected(lc, errors: errors.ToString(), errorCode: status.ToString());
            return TheApp;
        }

        private IZOSAPI_Application ConnectToAppByProcess(int processId, bool wrap = false)
        {
            RegisterServer(processId);
            var appdata = CreateApp(this, processId, wrap);
            TheApp = appdata.Item1;
            EM = appdata.Item2;

            return TheApp;
        }

        public IZOSAPI_Application ConnectAsExtension(int zemaxInstance)
        {
            lock (Mutex)
            {
                try
                {
                    if (TheApp != null)
                    {
                        try
                        {
                            if (!TheApp.IsValidLicenseForAPI)
                            {
                                TheApp.CloseApplication();
                                TheApp = null;
                            }
                        }
                        catch
                        {
                            TheApp = null;
                        }
                    }
                    if (TheApp != null)
                    {
                        TheApp.ProgressPercent = 0;
                        return TheApp;
                    }
                }
                catch
                {
                    TheApp = null;
                }

                return ConnectToAppByInstance(zemaxInstance);
            }
        }

        public IZOSAPI_Application CreateNewApplication()
        {
            CheckAppState();

            lock (Mutex)
            {
                try
                {
                    if (TheApp != null)
                    {
                        TheApp.ProgressPercent = 0;
                        return TheApp;
                    }
                }
                catch
                {
                    TheApp = null;
                }

                return CreateConnection("OpticStudio.exe", false);
            }
        }

        private IZOSAPI_Application CreateConnection(string exeName, bool wrap, string applicationName = null)
        {
            string settings = InitializationSettings;
            StringBuilder sbOpt = new StringBuilder();
            if (!String.IsNullOrWhiteSpace(settings))
            {
                Match mVer = Regex.Match(settings, @"Version=(\d+)", RegexOptions.IgnoreCase);
                if (mVer.Success)
                {
                    sbOpt.Append(String.Format(" -ver=\"{0}\"", mVer.Groups[1].Value));
                }
            }

            if (_ConfigSettings.Count > 0)
            {
                StringBuilder sbSettings = new StringBuilder();
                foreach (var cs in _ConfigSettings)
                {
                    sbSettings.Append(cs.Key);
                    sbSettings.Append("=");
                    sbSettings.AppendLine(cs.Value);
                }

                string cfgFile = Path.GetTempFileName();
                File.WriteAllText(cfgFile, sbSettings.ToString(), Encoding.UTF8);
                sbOpt.Append(String.Format(" -cfg=\"{0}\"", cfgFile)); 
            }

            // TODO - registry lookup for app location, and optional path as argument?
            //string appPath = MainViewModel.ExecutablePath;
            string appPath = System.IO.Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            string exePath = System.IO.Path.GetDirectoryName(exeName);
            string file;
            if (String.IsNullOrWhiteSpace(exePath) || !System.IO.File.Exists(exeName))
                file = Path.Combine(appPath, exeName);
            else
                file = exeName;
            if (!File.Exists(file))
            {
                appPath = MainViewModel.ExecutablePath;
                file = Path.Combine(appPath, exeName);
            }
            LogInfo("App path: " + appPath);

            var thisProcessId = System.Diagnostics.Process.GetCurrentProcess().Id;
            string cl = String.Format("-server -pid=\"{0}\"", thisProcessId);
            if (applicationName != null)
                cl = String.Format("{0} -aid=\"{1}\"", cl, applicationName);
            if (!String.IsNullOrWhiteSpace(FormattingCulture))
                cl = String.Format("{0} -ci=\"{1}\"", cl, FormattingCulture);
            if (!String.IsNullOrWhiteSpace(PreferencesFile))
                cl = String.Format("{0} -env=\"{1}\"", cl, PreferencesFile);
            cl += sbOpt.ToString();

            System.Diagnostics.ProcessStartInfo pi = new System.Diagnostics.ProcessStartInfo(file, cl);
            pi.RedirectStandardError = true;
            pi.UseShellExecute = false;
            pi.WorkingDirectory = Path.GetDirectoryName(file);

            var p = new System.Diagnostics.Process();
            p.StartInfo = pi;
            p.EnableRaisingEvents = true;

            AutoResetEvent wh = new AutoResetEvent(false);
            Action signalReady = () =>
            {
                try
                {
                    if (wh != null)
                        wh.Set();
                }
                catch { }
            };

            Regex rMatchInitStatus = new Regex(@"ZSS=(\d+)", RegexOptions.Compiled | RegexOptions.IgnoreCase);
            Regex rMatchInitError = new Regex(@"ZSE=(\d+)", RegexOptions.Compiled | RegexOptions.IgnoreCase);
            Regex rMatchSafenetError = new Regex("\\(H(\\d+)\\)", RegexOptions.Compiled | RegexOptions.IgnoreCase);

            System.Diagnostics.DataReceivedEventHandler stdErrorHandler = null;
            EventHandler processExitHandler = null;

            StringBuilder sbErrors = new StringBuilder();
            bool isServerInitialized = false;
            int pError = 0; int sError = 0;
            bool exited = false;

            stdErrorHandler = (object sender, System.Diagnostics.DataReceivedEventArgs e) =>
            {
                string data = e.Data;
                if (String.IsNullOrWhiteSpace(data))
                    return;

                if (data.Contains("server initialized"))
                {
                    isServerInitialized = true;
                    // Should we unhook?  It could still be a useful mechanism...
                    p.ErrorDataReceived -= stdErrorHandler;
                    p.Exited -= processExitHandler;
                    signalReady();
                }
                else
                {
                    Match m;
                    m = rMatchInitStatus.Match(data);
                    if (m.Success)
                    {
                        this.AddInitializationProgress(Int32.Parse(m.Groups[1].Value));
                        return;
                    }

                    bool matched = false;
                    if (!matched)
                    {
                        // Check for internal error
                        m = rMatchInitError.Match(data);
                        if (m.Success)
                        {
                            matched = true;
                            pError = Int32.Parse(m.Groups[1].Value);
                        }
                    }

                    if (!matched)
                    {
                        // check for safenet error
                        m = rMatchSafenetError.Match(data);
                        if (m.Success)
                        {
                            matched = true;
                            sError = Int32.Parse(m.Groups[1].Value);
                        }
                    }

                    if (!matched)
                    {
                        // Other error???
                        sbErrors.AppendLine(data);
                    }

                    if (p.HasExited || exited)
                    {
                        // We may be waiting for an error, so signal
                        signalReady();

                    }
                }
            };
            processExitHandler = (object pes, EventArgs pea) =>
            {
                exited = true;
                p.Exited -= processExitHandler;
                // This event can fire before we get any standard error output, so wait a while.  
                // Note that as soon as an error is logged we will continue.
                Thread.Sleep(5000);
                signalReady();
            };

            p.ErrorDataReceived += stdErrorHandler;
            p.Exited += processExitHandler;
            p.Start();
            p.BeginErrorReadLine();

            double timeoutS = this.ConnectionTimeoutSeconds;
            if (timeoutS > 0.0)
                wh.WaitOne(TimeSpan.FromSeconds(timeoutS));
            else
                wh.WaitOne();

            try
            {
                // Clean up
                var wht = wh;
                wh = null;
                wht.Close();
            }
            catch { }

            try
            {
                p.Exited -= processExitHandler;
                p.ErrorDataReceived -= stdErrorHandler;
            }
            catch { }

            if (!isServerInitialized)
            {
                if (p.HasExited)
                {
                    // OpticStudio shut down -- this usually means there were too many instances
                    string errorCode = null;
                    LicenseStatusType status = LicenseStatusType.Unknown;
                    if (sError != 0)
                    {
                        status = LicenseStatusType.NotAuthorized;
                        errorCode = String.Format("S{0}", sError);
                    }
                    else
                    {
                        status = ZOSAPI_Application.GetLicenseStatusFromError(pError);
                        if (pError > 0)
                        {
                            errorCode = String.Format("Z{0}", pError);
                        }
                    }

                    TheApp = ZOSAPI_Application.CreateUnconnected(
                            status,
                            sbErrors.ToString(),
                            errorCode);
                    return TheApp;
                }
            }

            int id = p.Id;
            var app = ConnectToAppByProcess(id, wrap);

            EnsureShutdown();

            return app;
        }

        internal static bool InProcess { get; set; }

        private List<int> InitProgress = new List<int>();
        public void AddInitializationProgress(int status)
        {
            InitProgress.Add(status);
        }

        public int[] IntializationProgress
        {
            get { return InitProgress.ToArray(); }
        }

        private double _TimeoutSeconds = 10.0 * 60; // default to 10 minutes
        public double ConnectionTimeoutSeconds
        {
            get
            {
                return _TimeoutSeconds;
            }
            set
            {
                if (value >= 0)
                    _TimeoutSeconds = value;
            }
        }

        public string InitializationSettings
        {
            get;
            set;
        }

        public IZOSAPI_Application CreateZemaxServer(string applicationName)
        {
            CheckAppState();

            lock (Mutex)
            {
                try
                {
                    if (TheApp != null)
                    {
                        TheApp.ProgressPercent = 0;
                        return TheApp;
                    }
                }
                catch
                {
                    TheApp = null;
                }

#if DEBUG
                //InProcess = true;
#endif

                bool inProcess = InProcess;
                if (inProcess)
                {
                    try
                    {
                        return CreateLocalApp(applicationName);
                    }
                    catch
                    {
                        // Failed -- likely a 32-bit process
                    }
                }

                try
                {
                    return CreateConnection("ZemaxServer.exe", true, applicationName);
                }
                catch (Exception ex)
                {
                    LogError(ex);

                    TheApp = ZOSAPI_Application.CreateUnconnected(
                        LicenseStatusType.Unknown,
                        errors: InitializationLog.ToString(),
                        errorCode: "Initialization failed");
                    return TheApp;
                }
            }
        }

        public IZOSAPI_Application CreateZemaxServerEx(string applicationName, string libraryPath)
        {
            CheckAppState();

            {
                string procPath = Environment.GetEnvironmentVariable("PATH", EnvironmentVariableTarget.Process);
                string thisPath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
                if (!String.IsNullOrWhiteSpace(libraryPath) && String.Compare(thisPath, libraryPath) != 0)
                    procPath = libraryPath + ";" + procPath;
                if (!String.IsNullOrWhiteSpace(thisPath))
                    procPath = thisPath + ";" + procPath;
                Environment.SetEnvironmentVariable("PATH", procPath, EnvironmentVariableTarget.Process);
            }

            lock (Mutex)
            {
                try
                {
                    if (TheApp != null)
                    {
                        TheApp.ProgressPercent = 0;
                        return TheApp;
                    }
                }
                catch
                {
                    TheApp = null;
                }

#if DEBUG
                //InProcess = true;
#endif

                bool inProcess = InProcess;
                if (inProcess)
                {
                    try
                    {
                        return CreateLocalApp(applicationName);
                    }
                    catch
                    {
                        // Failed -- likely a 32-bit process
                    }
                }

                try
                {
                    string exePath = Path.Combine(libraryPath, "ZemaxServer.exe");
                    return CreateConnection(exePath, true, applicationName);
                }
                catch (Exception ex)
                {
                    LogError(ex);

                    TheApp = ZOSAPI_Application.CreateUnconnected(
                        LicenseStatusType.Unknown,
                        errors: InitializationLog.ToString(),
                        errorCode: "Initialization failed");
                    return TheApp;
                }
            }
        }

        private IZOSAPI_Application CreateLocalApp(string appName)
        {
            Process thisProcess = Process.GetCurrentProcess();
            int thisProcessId = thisProcess.Id;

            DateTime tS = DateTime.UtcNow;

            System.Threading.ManualResetEvent mre = new System.Threading.ManualResetEvent(false);
            MainViewModel.InitHandle = mre;

            bool initialized = false;
            bool serverFailed = false;
            System.Threading.ThreadStart ts = new System.Threading.ThreadStart(() =>
            {
                try
                {
                    ZOSAPI_Application.InitializeServer(thisProcessId, null, appName);
                }
                catch
                {
                    serverFailed = true;
                    if (!initialized)
                    {
                        mre.Set();
                    }
                }
            });

            System.Threading.Thread t = new System.Threading.Thread(ts);
            t.SetApartmentState(System.Threading.ApartmentState.STA);
            t.IsBackground = true;
            t.Start();

            double timeoutS = this.ConnectionTimeoutSeconds;
            if (timeoutS > 0.0)
                mre.WaitOne(TimeSpan.FromSeconds(timeoutS));
            else
                mre.WaitOne();
            initialized = true;

            if (serverFailed)
            {
                // ???
                return ZOSAPI_Application.CreateUnconnected(LicenseStatusType.Unknown);
            }

            var app = new ZOSAPI_Application();
            var em = new EventMarshaler(app, this);
            MainViewModel.CallingAppIsLocal = true;
            return app;
        }

        private void EnsureShutdown()
        {
            //System.Diagnostics.Process.GetCurrentProcess().Exited += (object sender, EventArgs e) =>
            //{
            //    var app = TheApp;
            //    if (app != null)
            //        app.Exit();
            //};
        }

        private void OnAppClosed()
        {
            lock (Mutex)
            {
                TheApp = null;
                EM = null;
                if (Connector != null)
                {
                    try
                    {
                        Connector.Cleanup();
                    }
                    catch { }
                    Connector = null;
                }
            }
        }

        public string FormattingCulture { get; set; }

        public string PreferencesFile { get; set; }

        private ZOSAPI_Application GetApp()
        {
            ZOSAPI_Application app = TheApp as ZOSAPI_Application;
            if (app != null)
                return app;

#if ZCL
            ZOSAPI_ServerApp sapp = TheApp as ZOSAPI_ServerApp;
            return sapp.GetApp() as ZOSAPI_Application;
#endif

            return null;
        }

        public string RunCommand(string command)
        {
            StringBuilder ret = new StringBuilder();
            switch (command)
            {
                case "API_Assembly_Location":
                    return MainViewModel.AssemblyLocation;
                case "API_Application_Path":
                    return MainViewModel.ApplicationPath;
                case "API_Path_Data":
                    ret.Append("AssemblyLocation: ");
                    try
                    {
                        ret.AppendLine(MainViewModel.AssemblyLocation);
                    }
                    catch (Exception ex)
                    {
                        ret.Append("exception - " + ex.Message);
                    }

                    try
                    {
                        ret.Append("ApplicationPath: ");
                        ret.AppendLine(MainViewModel.ApplicationPath);

                        ret.AppendLine("ExectuablePath: " + MainViewModel.ExecutablePath);
                    }
                    catch (Exception ex)
                    {
                        ret.AppendLine(ex.Message);
                    }

                    break;
                case "API_ENABLE_STOP":
                    {
                        var app = GetApp();
                        bool enabled = app?.EnableSTOP() ?? false;
                        ret.Append(enabled.ToString());
                    }
                    break;
                default:
                    return TheApp?.RunCommand(command) ?? String.Empty;
            }

            return ret.ToString();
        }

        private Dictionary<string, string> _ConfigSettings = new Dictionary<string, string>();
        public string GetConfigSetting(string setting)
        {
            setting = setting.ToLower();

            string val;
            if (_ConfigSettings.TryGetValue(setting, out val))
                return val;
            else
                return null;
        }

        public void SetConfigSetting(string setting, string value)
        {
            setting = setting.ToLower();

            if (value == null)
                _ConfigSettings.Remove(setting);
            else
                _ConfigSettings[setting] = value;
        }

        public void SetCreoInstallPath(string path)
        {
            if (!String.IsNullOrWhiteSpace(path))
            {
                SetConfigSetting("creoinstallpath", path);
            }
        }
    }
}


```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)