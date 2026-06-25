<a id="AbstractTradeStudyPlugIn_8cs"></a>
# File AbstractTradeStudyPlugIn.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AbstractTradeStudyPlugIn.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::AbstractTradeStudyPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)
* [TradeStudyPlugIn](namespaceTradeStudyPlugIn.md#namespaceTradeStudyPlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using TradeStudyPlugIn;

namespace Phoenix.ModelCenter.PlugIn
{
   public abstract class AbstractTradeStudyPlugIn<FormClass>
      : AbstractModelCenterPlugIn<FormClass>, ITradeStudyPlugIn, IWindowed
      where FormClass : ModelCenterPlugInForm, new()
   {
      #region --- Properties --------------------------------------------------

      public bool DisposeOnClose { get; set; }

      public ITradeStudyPlugIn TradeStudyObject
      {
         get { return this; }
      }

      #endregion

      #region --- ITradeStudyPlugIn -------------------------------------------

      void ITradeStudyPlugIn.construct(
         object modelCenter, object addToModel, object dataCollector)
      {
         ComObject.construct(modelCenter, addToModel, dataCollector);
      }

      void ITradeStudyPlugIn.fromString(string setupString)
      {
         ComObject.fromString(setupString);
      }

      bool ITradeStudyPlugIn.show()
      {
         return ComObject.show();
      }

      string ITradeStudyPlugIn.toString()
      {
         return ComObject.toString();
      }

      #endregion

      #region --- Overrides ---------------------------------------------------

      protected override void OnInitialized()
      {
         base.OnInitialized();

         // A trade study plug-in may also be a component plug-in.  If it is,
         // disposing on close would kill the plug-in connection for that
         // component.
         if (Host.AddToModel != null && Host.AddToModel.getComponent() != null)
         {
            DisposeOnClose = false;
         }
      }

      protected bool _mainFormClosed = false;

      protected override void OnMainFormClosed()
      {
         _mainFormClosed = true;
         base.OnMainFormClosed();

         // Do we need to dispose when the window closes?
         if (DisposeOnClose)
         {
            Dispose();
         }
      }

      public bool closeWindow()
      {
         _mainFormClosed = false;

         // Close the main window.
         if (MainForm.InvokeRequired)
         {
            MainForm.Invoke(new Action(() => { MainForm.Close(); }));
         }
         else
         {
            MainForm.Close();
         }

         // We don't get feedback from the WinForms close method.
         // However, testing shows that the close operation blocks and is synchronous with any handlers
         // on the window closing and close methods.
         // Therefore, the boolean flag below should reliably indicate whether or not the window
         // was actually allowed to close by the user.
         // If there are concerns about this we can move it onto more specific classes.
         return _mainFormClosed;
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