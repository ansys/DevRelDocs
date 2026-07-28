<a id="SModelCenterHost_8cs"></a>
# File SModelCenterHost.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/SModelCenterHost.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::SModelCenterHost](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Windows.Forms;
using ComponentPlugIn;
using ModelCenter;
using Phoenix.DotNetUtils;
using Phoenix.ModelCenter.Common;
using Phoenix.SModelCenter;

namespace Phoenix.ModelCenter.PlugIn
{
   //TODO: Document thread safety
   public class SModelCenterHost : AbstractDisposable
   {
      #region --- Private Data ------------------------------------------------

      private const string DATE_EPOCH_SECONDS = "EpSec";
      private const string DATE_YEAR_MONTH_DAY = "YYYY/MM/DD";
      private const string DATE_UTCG = "UTCG";

      private readonly Dictionary<string, IVariable> mcVars = new Dictionary<string, IVariable>();
      private readonly List<PHXVariable> variables = new List<PHXVariable>();

      private IDataCollector _dataCollector = null;

      #endregion

      #region --- Accessors to COM objects ------------------------------------

      public IModelCenter ModelCenter { get; private set; }

      public IDataCollector DataCollector
      {
         get { return _dataCollector; }
         protected set
         {
            if (_dataCollector != value)
            {
               ModelCenterUtils.Release(_dataCollector);
               _dataCollector = value;
            }
         }
      }

      public IAddToModel AddToModel { get; private set; }

      public IComponent MyComponent { get; private set; }

      public IPHXLogger Log { get; private set; }

      #endregion

      #region --- Constructor and Destructor ----------------------------------

      public SModelCenterHost(IModelCenter mc, IAddToModel atm) : this(mc, atm, null)
      {
      }

      public SModelCenterHost(IModelCenter mc, IAddToModel atm, IDataCollector dc)
      {
         if (mc == null)
         {
            ModelCenter = null;
         }
         else if (Marshal.IsComObject(mc))
         {
            ModelCenter = new SModelCenter.SModelCenter(mc);
         }
         else //Probably a mock object used in testing
         {
            ModelCenter = mc;
         }
         if (atm == null)
         {
            AddToModel = null;
         }
         else if (Marshal.IsComObject(atm))
         {
            AddToModel = new SAddToModel(atm);
         }
         else
         {
            AddToModel = atm;
         }
         if (dc == null)
         {
            DataCollector = null;
         }
         else if (Marshal.IsComObject(atm))
         {
            DataCollector = new SDataCollector(dc);
         }
         else
         {
            DataCollector = dc;
         }

         init();
      }

      private void init()
      {
         try
         {
            MyComponent = (IComponent)AddToModel.getComponent();
         }
         catch
         {
            // ignore - just doesn't have a component
         }
         try
         {
            Log = new ModelCenterLogger(ModelCenter);
         }
         catch
         {
            // ignore - earlier MC versions don't have a logger
            Log = new DummyPHXLogger();
         }
      }

      private void releaseMCVars()
      {
         foreach (IVariable v in mcVars.Values)
         {
            ModelCenterUtils.Release(v);
         }
         mcVars.Clear();
      }

      protected override void Dispose(bool disposing)
      {
         if (disposing)
         {
            ModelCenterUtils.Release(Log);

            releaseMCVars();

            DataCollector = null;
            ModelCenterUtils.Release(MyComponent);
            ModelCenterUtils.Release(AddToModel);
            ModelCenterUtils.Release(ModelCenter);
         }
      }

      #endregion

      #region --- DataCollector -----------------------------------------------

      public event DataCollectorCreatedEventHandler DataCollectorCreated;

      public IDataCollector CreateNewDataCollector(string analysisType, string configuration)
      {
         IDataCollector dc = (IDataCollector)ModelCenter.createDataCollector(analysisType, configuration);
         DataCollector = dc;
         DataCollectorCreatedEventHandler h = DataCollectorCreated;
         if (h != null)
         {
            h(this, new DataCollectorCreatedEventArgs(dc));
         }
         return dc;
      }

      #endregion

      #region --- Non-Variable Get and Set methods ----------------------------

      public bool IsAddedToModel
      {
         get
         {
            if (AddToModel == null)
            {
               return false;
            }

            object c = AddToModel.getComponent();
            if (c != null)
            {
               if (c is IDisposable)
               {
                  ((IDisposable)c).Dispose();
                  return true;
               }

               try
               {
                  Marshal.ReleaseComObject(c);
               }
               catch (Exception e)
               {
                  Log.Warn(e.Message);
               }

               return true;
            }
            return false;
         }
      }

      public string ModelDirectory { get { return ModelCenter.modelDirectory; } }

      public IEnumerable<string> GetAssociatedFiles()
      {
         object o = MyComponent.AssociatedFiles;
         IEnumerable list = o as IEnumerable;
         if (list != null)
         {
            foreach (object obj in list)
            {
               yield return obj.ToString();
            }
         }
         else if (o != null)
         {
            yield return o.ToString();
         }
      }

      public void SetAssociatedFiles(params string[] files)
      {
         MyComponent.AssociatedFiles = files;
      }

      public void SetAssociatedFiles(ICollection<string> files)
      {
         MyComponent.AssociatedFiles = files.ToArray();
      }

      public string RootName { get { return MyComponent.getName(); } }

      public string ModelCenterDirectory
      {
         get
         {
            return ModelCenter.getModelCenterPath();
         }
      }

      public IFeature CheckOutLicenseFeature(string featureName)
      {
         return (IFeature)ModelCenter.checkout(featureName);
      }

      public IFeature CheckOutLicenseFeature(string featureName, string releaseDate)
      {
         return (IFeature)ModelCenter.checkout2(featureName, releaseDate);
      }

      #endregion

      #region --- Variable Get and Set methods --------------------------------

      public void RefreshFromModelCenter()
      {
         releaseMCVars();
         variables.Clear();
         RetrieveAllVariables("", MyComponent);
      }

      private void RetrieveAllVariables(string prefix, object mcObject)
      {
         IGroups groups = null;
         try
         {
            groups = ModelCenterVariableUtils.GetGroups(mcObject);
            for (int i = 0; i < (int)groups.Count; ++i)
            {
               IGroup group = null;
               try
               {
                  group = (IGroup)groups.Item(i);
                  RetrieveAllVariables(prefix + group.getName() + ".", group);
               }
               finally
               {
                  ModelCenterUtils.Release(group);
               }
            }
         }
         finally
         {
            ModelCenterUtils.Release(groups);
         }

         IVariables vars = null;
         try
         {
            vars = ModelCenterVariableUtils.GetVariables(mcObject);
            for (int i = 0; i < (int)vars.Count; ++i)
            {
               IVariable iv = (IVariable)vars.Item(i);
               PHXVariable lv = new PHXVariable(true);
               ModelCenterVariableUtils.ReadFromIVariable(prefix, iv, lv);
               variables.Add(lv);
               mcVars.Add(lv.Name, iv);
            }
         }
         finally
         {
            ModelCenterUtils.Release(vars);
         }
      }

      public void CommitVariableChanges()
      {
         // As soon as I start adding, I'm writing a fresh slate of variables;
         // this is just how ModelCenter works.  So I don't need to clear the
         // existing variables or look for collisions.

         releaseMCVars();

         string curName = "";
         try
         {
            foreach (PHXVariable var in variables)
            {
               if (var.VarType == PHXVarType.Group)
               {
                  continue;
               }

               curName = var.Name;

               IVariable newVar;
               if (var.VarType == PHXVarType.Input)
               {
                  newVar = (IVariable)AddToModel.addInput(curName, var.DataTypeAsString);
               }
               else
               {
                  newVar = (IVariable)AddToModel.addOutput(curName, var.DataTypeAsString);
               }

               ModelCenterVariableUtils.WriteToIVariable(var, newVar);
               mcVars.Add(var.Name, newVar);
            }
         }
         catch (Exception ex)
         {
            throw new PHXException(
               String.Format(
                  Localizable.MCPlugInStrings.ERR_ADD_VARIABLE,
                  curName,
                  MyComponent.getFullName()),
               ex);
         }
         finally
         {
            // commit the changes - if I don't do this, bad things happen!
            AddToModel.updateComponent();
         }
      }

      public void AddVariable(PHXVariable v)
      {
         if (variables.Contains(v))
         {
            throw new ArgumentException("Variable is already added.");
         }
         variables.Add(v);
      }

      public int NumCurrentVariables { get { return variables.Count; } }

      public IEnumerable<PHXVariable> CurrentVariables
      {
         get
         {
            return variables;
         }
         set
         {
            variables.Clear();
            foreach (PHXVariable v in value)
            {
               AddVariable(v);
            }
            CommitVariableChanges();
         }
      }

      private IVariable getVariableInternal(string name)
      {
         IVariable var;
         if (!mcVars.TryGetValue(name, out var))
         {
            throw new Exception(
               String.Format(Localizable.MCPlugInStrings.VARIABLE_NOT_FOUND, name));
         }
         return var;
      }

      public string GetValue(string name)
      {
         try
         {
            IVariable var = getVariableInternal(name);

            if (var.getType().Equals("double"))
            {
               // check for date/time formats
               IDoubleVariable dv = (IDoubleVariable)var;
               if (dv.format.Equals(DATE_EPOCH_SECONDS) ||
                   dv.format.Equals(DATE_YEAR_MONTH_DAY) ||
                   dv.format.Equals(DATE_UTCG)
                 )
               {
                  return (dv.toFormattedString());
               }
            }

            return var.toString();
         }
         catch (Exception ex)
         {
            throw new PHXException(
               String.Format(Localizable.MCPlugInStrings.ERR_GET_VARIABLE_VALUE, name),
               ex);
         }
      }

      public string GetRawValue(string name)
      {
         try
         {
            IVariable var = getVariableInternal(name);
            return var.toString();
         }
         catch (Exception ex)
         {
            throw new PHXException(
               String.Format(Localizable.MCPlugInStrings.ERR_GET_VARIABLE_VALUE, name),
               ex);
         }
      }

      private void setValueInternal(IVariable var, PHXDataType type, string value)
      {
         // Some libraries don't parse "0" correctly in some locales.
         // This may be a .NET 2.0 issue only, but better safe than sorry.
         if (type == PHXDataType.Double || type == PHXDataType.Integer)
         {
            if (value.Trim() == "0")
            {
               var.fromString("00");
            }
            else if (type == PHXDataType.Double)
            {
               IDoubleVariable dv = (IDoubleVariable)var;
               dv.fromFormattedString(value);
            }
            else
            {
               IIntegerVariable iv = (IIntegerVariable)var;
               iv.fromFormattedString(value);
            }
         }
         else if (type == PHXDataType.File)
         {
            IFileVariable fvar = (IFileVariable)var;
            fvar.fromFile(value);
         }
         else if (type == (PHXDataType.File | PHXDataType.Array))
         {
            IFileArray farr = (IFileArray)var;
            string[] files = value.Split(Path.PathSeparator);
            farr.setDimensions(files.Length);
            for (int i = 0; i < files.Length; ++i)
            {
               farr.fromFile(files[i], i);
            }
         }
         else
         {
            var.fromString(value);
         }
      }

      public void SetValue(PHXVariable v, string value)
      {
         try
         {
            IVariable var = getVariableInternal(v.Name);
            setValueInternal(var, v.DataType, value);
         }
         catch (Exception ex)
         {
            throw new PHXException(
               String.Format(
                  Localizable.MCPlugInStrings.ERR_SET_VARIABLE_VALUE,
                  v.Name,
                  value),
               ex);
         }
      }

      public void SetValue(string name, string value)
      {
         try
         {
            IVariable var = getVariableInternal(name);
            PHXDataType type = ModelCenterUtils.ParseDataType(var.getType());
            setValueInternal(var, type, value);
         }
         catch (Exception ex)
         {
            throw new PHXException(
               String.Format(
                  Localizable.MCPlugInStrings.ERR_SET_VARIABLE_VALUE,
                  name,
                  value),
               ex);
         }
      }

      public bool GetHasChanged(string name, bool reset = false)
      {
         try
         {
            IVariable var = getVariableInternal(name);
            if (var.hasChanged)
            {
               if (reset)
               {
                  var.hasChanged = false;
               }
               return true;
            }
            return false;
         }
         catch (Exception ex)
         {
            throw new PHXException(
               String.Format(Localizable.MCPlugInStrings.VARIABLE_NOT_FOUND, name),
               ex);
         }
      }

      public void ResetHasChanged(string name)
      {
         try
         {
            IVariable var = getVariableInternal(name);
            var.hasChanged = false;
         }
         catch (Exception ex)
         {
            throw new PHXException(
               String.Format(Localizable.MCPlugInStrings.VARIABLE_NOT_FOUND, name),
               ex);
         }
      }

      #endregion

      #region --- Windows, Frames, and Icons ----------------------------------

      public IntPtr ModelCenterWindowHandle
      {
         get
         {
            try
            {
               return new IntPtr(ModelCenter.getHWND());
            }
            catch
            {
               return IntPtr.Zero;
            }
         }
      }

      public IWin32Window ModelCenterWindow
      {
         get
         {
            IntPtr hwnd = ModelCenterWindowHandle;
            return hwnd == IntPtr.Zero ? null : new HwndWrapper(hwnd);
         }
      }

      [DllImport("User32.dll", SetLastError = true)]
      [return: MarshalAs(UnmanagedType.Bool)]
      public static extern bool BringWindowToTop(IntPtr hWnd);

      public void BringModelCenterToTop()
      {
         IntPtr handle = ModelCenterWindowHandle;
         if (handle != IntPtr.Zero)
         {
            BringWindowToTop(handle);
         }
      }

      public short AddIconToModelCenter(Icon icon)
      {
         string iconFile = Path.GetTempFileName();
         try
         {
            using (Stream stream = new FileStream(iconFile, FileMode.Create))
            {
               icon.Save(stream);
            }
            return ModelCenter.addIcon(iconFile);
         }
         finally
         {
            File.Delete(iconFile);
         }
      }

      public void SetGroupIcon(string groupName, short iconID)
      {
         string[] names = groupName.Split('.');

         dynamic found = ModelCenterVariableUtils.Find(MyComponent, groupName);
         IGroup group = found as IGroup;
         if (group != null)
         {
            group.iconID = iconID;
         }
         else
         {
            throw new PHXException(
               Localizable.MCPlugInStrings.ERR_SET_GROUP_ICON,
               String.Format(Localizable.MCPlugInStrings.GROUP_NOT_FOUND, groupName));
         }
      }

      private IntPtr createPlugInFrame2(
         string name, string title, object plugin, bool showFavorites, Size initialSize, Size minSize)
      {
         return new IntPtr(
            ModelCenter.createPlugInFrame2(
               name, title, "", plugin, showFavorites,
               initialSize.Height, initialSize.Width, minSize.Height, minSize.Width));
      }

      private IntPtr createPlugInFrame(
         string name, string title, object plugin, bool showFavorites, Size initialSize)
      {
         return new IntPtr(
            ModelCenter.createPlugInFrame(
               name, title, "", plugin, showFavorites,
               initialSize.Height, initialSize.Width));
      }

      public IntPtr CreatePlugInFrame(
         string name, string title, bool showFavorites, IComponentPlugIn plugin, Size initialSize, Size minSize)
      {
         try
         {
            return createPlugInFrame2(
               name, title, plugin, showFavorites, initialSize, minSize);
         }
         catch
         {
            return createPlugInFrame(
               name, title, plugin, showFavorites, initialSize);
         }
      }

      public void ShowPlugInFrame(IntPtr hwnd)
      {
         ModelCenter.showPlugInFrame(hwnd.ToInt32());
      }

      public void ReleasePlugInFrame(IntPtr hWnd)
      {
         ModelCenter.destroyPlugInFrame(hWnd.ToInt32());
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
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)