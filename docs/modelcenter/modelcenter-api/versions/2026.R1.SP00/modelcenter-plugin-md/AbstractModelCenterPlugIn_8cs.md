<a id="AbstractModelCenterPlugIn_8cs"></a>
# File AbstractModelCenterPlugIn.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::AbstractModelCenterPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)
* [ComponentPlugIn](namespaceComponentPlugIn.md#namespaceComponentPlugIn)
* [ModelCenter](namespaceModelCenter.md#namespaceModelCenter)
* [Phoenix::DotNetUtils](namespacePhoenix_1_1DotNetUtils.md#namespacePhoenix_1_1DotNetUtils)
* [PlugInMetaData](namespacePlugInMetaData.md#namespacePlugInMetaData)
* [System](namespaceSystem.md#namespaceSystem)
* [System::ComponentModel](namespaceSystem_1_1ComponentModel.md#namespaceSystem_1_1ComponentModel)
* [System::Drawing](namespaceSystem_1_1Drawing.md#namespaceSystem_1_1Drawing)
* [System::IO](namespaceSystem_1_1IO.md#namespaceSystem_1_1IO)
* [System::Reflection](namespaceSystem_1_1Reflection.md#namespaceSystem_1_1Reflection)
* [System::Windows::Forms](namespaceSystem_1_1Windows_1_1Forms.md#namespaceSystem_1_1Windows_1_1Forms)
* [System::Windows::Forms::VisualStyles](namespaceSystem_1_1Windows_1_1Forms_1_1VisualStyles.md#namespaceSystem_1_1Windows_1_1Forms_1_1VisualStyles)
* [System::Xml](namespaceSystem_1_1Xml.md#namespaceSystem_1_1Xml)
* [WinFormsApplication](namespaceWinFormsApplication.md#namespaceWinFormsApplication)

## Typedefs

<a id="AbstractModelCenterPlugIn_8cs_1abc46dc30beab3573acf2b3e210d6a0c6"></a>
### Typedef WinFormsApplication

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractModelCenterPlugIn.cs` (line 15)


```csharp
using WinFormsApplication =  System.Windows.Forms.Application
```








**Return type**: System.Windows.Forms.Application

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using ComponentPlugIn;
using ModelCenter;
using Phoenix.DotNetUtils;
using Phoenix.ModelCenter.Common;
using PlugInMetaData;
using System;
using System.ComponentModel;
using System.Drawing;
using System.IO;
using System.Reflection;
using System.Windows.Forms;
using System.Windows.Forms.VisualStyles;
using System.Xml;
using WinFormsApplication = System.Windows.Forms.Application;

namespace Phoenix.ModelCenter.PlugIn
{
   public abstract class AbstractModelCenterPlugIn<FormClass>
      : AbstractDisposable, IDotNetPlugIn, IComponentPlugIn
      where FormClass : ModelCenterPlugInForm, new()
   {
      #region --- Private Data ------------------------------------------------

      private Icon icon = null;
      private Image image = null;
      private IPlugInMetaData metadata;
      private IFeature licenseFeature;
      private bool running = false;
      private Exception lastRunError = null;
      private bool closing = false;
      private DispatchThreadHandle dtHandle = null;
      private readonly object mainFormLock = new object();

      #endregion

      #region --- Properties --------------------------------------------------

      public FormClass MainForm { get; private set; }

      public virtual SModelCenterHost Host { get; protected set; }

      public IPlugInMetaData Metadata
      {
         get
         {
            return metadata;
         }
      }

      public IComponentPlugIn ComObject
      {
         get
         {
            return this;
         }
      }

      public virtual string LicenseFeatureName
      {
         get
         {
            return null;
         }
      }

      public virtual string FeatureReleaseDate
      {
         get
         {
            return null;
         }
      }

      #endregion

      #region --- Constructor and Destructor ----------------------------------

      protected AbstractModelCenterPlugIn()
      {
         Type myType = GetType();
         string fullName = myType.FullName;
         fullName += "Info";
         Type metaType = myType.Assembly.GetType(fullName);
         if (metaType == null)
         {
            throw new InvalidOperationException(String.Format(
               "Could not find plug-in metadata class; expected \"{0}\"",
               fullName));
         }
         ConstructorInfo constructor = metaType.GetConstructor(Type.EmptyTypes);
         if (constructor == null)
         {
            throw new InvalidOperationException(String.Format(
               "No default constructor for plug-in metadata class \"{0}\"",
               metaType.FullName));
         }
         metadata = constructor.Invoke(new object[0]) as IPlugInMetaData;
      }

      protected override void Dispose(bool disposing)
      {
         closing = true;
         try
         {
            if (disposing)
            {
               lock (mainFormLock)
               {
                  if (MainForm != null)
                  {
                     MainForm.Disposed -= MainForm_Disposed;
                     if (!MainForm.IsDisposed)
                     {
                        if (MainForm.InvokeRequired)
                        {
                           MainForm.Invoke(new Action(() => { MainForm.Close(); }));
                        }
                        else
                        {
                           MainForm.Close();
                        }
                        MainForm.Dispose();
                     }
                     MainForm = null;
                  }
               }

               if (icon != null)
               {
                  icon.Dispose();
                  icon = null;
               }

               if (image != null)
               {
                  image.Dispose();
                  image = null;
               }

               if (licenseFeature != null)
               {
                  try
                  {
                     licenseFeature.checkin();
                  }
                  catch
                  {
                     // Ignore exceptions here so that the rest of Dispose can run.
                  }
                  if (licenseFeature is IDisposable)
                  {
                     ((IDisposable)licenseFeature).Dispose();
                  }
                  licenseFeature = null;
               }

               if (Host != null)
               {
                  Host.DataCollectorCreated -= Host_DataCollectorCreated;
                  Host.Dispose();
                  Host = null;
               }

               if (dtHandle != null)
               {
                  dtHandle.Dispose();
                  dtHandle = null;
               }
            }
         }
         finally
         {
            base.Dispose(disposing);
         }
      }

      #endregion

      #region --- IComponentPlugIn --------------------------------------------

      private void Host_DataCollectorCreated(object sender, DataCollectorCreatedEventArgs e)
      {
         OnDataCollectorCretaed(e.DataCollector);
      }

      void IComponentPlugIn.construct(object modelCenter, object addToModel, object dataCollector)
      {
         Host = new SModelCenterHost((IModelCenter)modelCenter, (IAddToModel)addToModel, (IDataCollector)dataCollector);
         Host.DataCollectorCreated += new DataCollectorCreatedEventHandler(Host_DataCollectorCreated);
         OnInitialized();

         // Check out a license as soon as the plug-in is started, if necessary.
         _checkoutLicense();
      }

      void IComponentPlugIn.fromString(string setupString)
      {
         using (StringReader sr = new StringReader(setupString))
         {
            using (XmlTextReader reader = new XmlTextReader(sr))
            {
               reader.WhitespaceHandling = WhitespaceHandling.Significant;
               if (!SerializationUtils.FastForward(reader, false))
               {
                  return;
               }

               int initialDepth = reader.Depth;
               string name = null;
               string version = null;
               if (reader.LocalName == "configuration")
               {
                  if (reader.MoveToAttribute("plugin"))
                  {
                     name = reader.Value;
                  }

                  if (reader.MoveToAttribute("version"))
                  {
                     version = reader.Value;
                  }

                  reader.MoveToElement();
               }

               if (!OnConfigurationLoading(name, version, reader))
               {
                  reader.MoveToElement();
                  reader.Read();
                  if (SerializationUtils.FastForward(reader, false) && Configuration != null)
                  {
                     SerializationUtils.Deserialize(Configuration, reader);
                  }

                  // The reader should now be placed after the end of the
                  // inner element; we should make sure to read to past the
                  // end of the element tag.
                  while (!reader.EOF && (reader.Depth > initialDepth ||
                          (reader.Depth == initialDepth && reader.NodeType == XmlNodeType.EndElement)))
                  {
                     reader.Read();
                  }

                  // The reader should now be placed after the end of the root
                  // node; if this was part of a larger document, we're still
                  // good to continue reading.
               }
            }
         }

         OnConfigurationLoaded();
      }

      void IComponentPlugIn.onEnd()
      {
         Dispose();
      }

      private void run_DoWork(object sender, DoWorkEventArgs e)
      {
         try
         {
            Run();
         }
         catch (Exception ex)
         {
            lastRunError = ex;
         }
      }

      private void _checkoutLicense()
      {
         if (!string.IsNullOrEmpty(LicenseFeatureName) &&
            !string.IsNullOrEmpty(FeatureReleaseDate) &&
            licenseFeature == null)
         {
            try
            {
               licenseFeature = Host.CheckOutLicenseFeature(
                  LicenseFeatureName, FeatureReleaseDate);
            }
            catch (Exception e)
            {
               string msg = string.Format(
                  Localizable.MCPlugInStrings.ERR_NO_LICENSE,
                  Name,
                  LicenseFeatureName);
               Host.Log.Error(msg, e);
               throw new PHXException(msg, e);
            }
         }
         else if (!string.IsNullOrEmpty(LicenseFeatureName) &&
            licenseFeature == null)
         {
            try
            {
               licenseFeature = Host.CheckOutLicenseFeature(LicenseFeatureName);
            }
            catch (Exception e)
            {
               string msg = string.Format(
                  Localizable.MCPlugInStrings.ERR_NO_LICENSE,
                  Name,
                  LicenseFeatureName);
               Host.Log.Error(msg, e);
               throw new PHXException(msg, e);
            }
         }
      }

      void IComponentPlugIn.run()
      {
         // do the work
         running = true;
         try
         {
            if (MainForm != null && !MainForm.IsDisposed)
            {
               MainForm.IsBusy = true;
            }

            if (RunInBackground)
            {
               LocalizedBackgroundWorker bw = new LocalizedBackgroundWorker();
               lastRunError = null;
               bw.DoWork += run_DoWork;
               bw.RunWorkerAsync();
               BackgroundMessagePump.Wait(bw);
               if (lastRunError != null)
               {
                  throw lastRunError;
               }
            }
            else
            {
               Run();
            }
         }
         catch (Exception ex)
         {
            Host.Log.Error("Run failed: " + ex.Message, ex);
            throw;
         }
         finally
         {
            running = false;
            if (MainForm != null && !MainForm.IsDisposed)
            {
               MainForm.IsBusy = false;
            }
         }
      }

      private void createAndShowMainForm()
      {
         bool created = false;

         lock (mainFormLock)
         {
            if (MainForm == null || MainForm.IsDisposed)
            {
               // Ensure that visual styles are enabled.
               if ((WinFormsApplication.VisualStyleState & VisualStyleState.ClientAreaEnabled) ==
                   VisualStyleState.NoneEnabled)
               {
                  WinFormsApplication.EnableVisualStyles();
               }

               MainForm = new FormClass();
               if (Icon == null)
               {
                  MainForm.ShowIcon = false;
               }
               else
               {
                  MainForm.Icon = Icon;
               }

               MainForm.PlugIn = this;
               MainForm.IsBusy = running;
               MainForm.Disposed += MainForm_Disposed;
               created = true;
            }
         }

         if (created)
         {
            OnMainFormCreated();
         }

         if (!MainForm.Visible)
         {
            IWin32Window parent = Host.ModelCenterWindow;

            // Show(null) results in the active window being the parent, which is not what we want.
            // The parent window should be the ModelCenter window; if that does not exist, then we
            // have no parent.
            if (parent != null)
            {
               MainForm.Show(Host.ModelCenterWindow);
            }
            else
            {
               // window has no parent
               MainForm.Show();
            }
         }

         // Force the plugin window to the fore.
         MainForm.Activate();
         MainForm.BringToFront();
      }

      private void MainForm_Disposed(object sender, EventArgs e)
      {
         lock (mainFormLock)
         {
            if (MainForm != null)
            {
               MainForm.Disposed -= MainForm_Disposed;
               MainForm = null;
               OnMainFormClosed();
            }
         }
      }

      bool IComponentPlugIn.show()
      {
         FormClass mainForm = MainForm;
         if (mainForm != null && mainForm.InvokeRequired)
         {
            // the form already has a message loop, but we're on the wrong thread
            mainForm.Invoke(new Action(createAndShowMainForm));
         }
         else if (DispatchThread.CurrentThreadHasDispatcher)
         {
            // we're on the thread with the form's message loop, or it doesn't
            // yet have one and we're on a thread that does
            createAndShowMainForm();
         }
         else
         {
            // we're not on a thread with a message loop; marshal over to a
            // known pump and show the form there
            if (dtHandle == null)
            {
               dtHandle = DispatchThreadManager.Acquire();
            }
            dtHandle.Invoke(new Action(createAndShowMainForm));
         }

         return false;
      }

      string IComponentPlugIn.toString()
      {
         OnConfigurationSaving();
         using (StringWriter sw = new StringWriter())
         {
            using (XmlTextWriter writer = new XmlTextWriter(sw))
            {
               writer.WriteStartElement("configuration");
               writer.WriteAttributeString("plugin", Name);
               writer.WriteAttributeString("version", Version);
               if (!OnConfigurationSerializing(writer) && Configuration != null)
               {
                  SerializationUtils.Serialize(Configuration, writer);
               }

               writer.WriteEndElement();
            }

            sw.Flush();
            return sw.ToString();
         }
      }

      #endregion

      #region --- IDotNetPlugIn -----------------------------------------------

      public virtual bool RunInBackground
      {
         get
         {
            return true;
         }
      }

      public abstract object Configuration
      {
         get;
      }

      public abstract void Run();

      protected virtual void OnInitialized()
      {
      }

      protected virtual bool OnConfigurationLoading(
         string pluginName, string version, XmlReader reader)
      {
         // by default we have not done custom deserialization
         // return false to indicate that we have not handled the event
         return false;
      }

      protected virtual void OnConfigurationLoaded()
      {
      }

      protected virtual void OnConfigurationSaving()
      {
      }

      protected virtual void OnMainFormCreated()
      {
      }

      protected virtual void OnMainFormClosed()
      {
      }

      protected virtual void OnDataCollectorCretaed(IDataCollector dataCollector)
      {
      }

      protected virtual bool OnConfigurationSerializing(XmlWriter writer)
      {
         // by default we have not done custom serialization
         // return false to indicate that we have not handled the event
         return false;
      }

      public bool IsClosing { get { return closing; } }

      public abstract string Name { get; }

      public string Author
      {
         get
         {
            return Metadata.getAuthor();
         }
      }

      public string Description
      {
         get
         {
            return Metadata.getDescription();
         }
      }

      public string HelpUrl
      {
         get
         {
            return Metadata.getHelpURL();
         }
      }

      public virtual string HelpPath
      {
         get
         {
            return Path.Combine(Host.ModelCenterDirectory, "ModelCenter.chm");
         }
      }

      public string Keywords
      {
         get
         {
            return Metadata.getKeywords();
         }
      }

      public string Version
      {
         get
         {
            return Metadata.getVersion();
         }
      }

      public virtual string ToolName
      {
         get
         {
            return null;
         }
      }

      public virtual string ToolProvider
      {
         get
         {
            return null;
         }
      }

      public virtual Icon Icon
      {
         get
         {
            if (icon == null)
            {
               string path = Metadata.getIconLocation();
               if (!PHXUtils.IsNullOrWhiteSpace(path))
               {
                  try
                  {
                     if (!Path.IsPathRooted(path))
                     {
                        string root = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
                        path = root +
                               Path.DirectorySeparatorChar +
                               path.TrimStart(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
                     }

                     icon = new Icon(path);
                  }
                  catch
                  {
                     // ignore errors
                  }
               }
            }

            return icon;
         }
      }

      public Image IconImage
      {
         get
         {
            if (image == null)
            {
               Icon icon = Icon;
               if (icon != null)
               {
                  image = icon.ToBitmap();
               }
            }

            return image;
         }
      }

      #endregion
   }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)