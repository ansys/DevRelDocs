<a id="ModelCenterPlugInForm_8cs"></a>
# File ModelCenterPlugInForm.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterPlugInForm.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::ModelCenterPlugInForm](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using Phoenix.DotNetUtils;
using System;
using System.ComponentModel;
using System.Windows.Forms;

namespace Phoenix.ModelCenter.PlugIn
{
   public class ModelCenterPlugInForm : Form
   {
      private bool busyFlag = false;
      private bool shift = false;

      [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
      [Browsable(false)]
      public bool IsBusy
      {
         set
         {
            if (value != busyFlag)
            {
               busyFlag = value;
               EnableControls();
            }
         }
         get
         {
            return busyFlag;
         }
      }

      protected virtual void EnableControlsInternal()
      {
         // nothing for now
      }

      protected void EnableControls()
      {
         if (InvokeRequired)
         {
            Invoke(new Action(EnableControlsInternal));
         }
         else
         {
            EnableControlsInternal();
         }
      }

      [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
      [Browsable(false)]
      public IDotNetPlugIn PlugIn { get; set; }

      protected bool InDesignMode
      {
         get
         {
            return (Site != null && Site.DesignMode);
         }
      }

      protected override void OnLoad(EventArgs e)
      {
         if (!DesignMode)
         {
            if (PlugIn == null)
            {
               throw new InvalidOperationException(
                  "Must set PlugIn member before attempting to display the form.");
            }
         }

         base.OnLoad(e);
      }

      protected virtual bool PassTabToCurrentControl
      {
         get
         {
            return false;
         }
      }

      protected override bool ProcessKeyPreview(ref Message m)
      {
         // Handle TAB key.
         int wParam = m.WParam.ToInt32();
         if (wParam == 0x09 && !PassTabToCurrentControl)
         {
            // Catch WM_KEYDOWN event:
            if (m.Msg == 0x0100)
            {
               ProcessTabKey(!shift);
            }
            return true;
         }
         else
         {
            if (wParam == 0x10)
            {
               if (m.Msg == 0x0100)
               {
                  shift = true;
               }
               else if (m.Msg == 0x0101)
               {
                  shift = false;
               }
            } 
            return base.ProcessKeyPreview(ref m);
         }
      }

      protected override void OnClosed(EventArgs e)
      {
         try
         {
            base.OnClosed(e);
            SModelCenterHost host = PlugIn.Host;
            if (host != null)
            {
               host.BringModelCenterToTop();
            }
         }
         catch
         {
            // ignore errors
         }
      }

      public void ShowAboutBox()
      {
         if (InvokeRequired)
         {
            BeginInvoke(new Action(ShowAboutBox));
            return;
         }

         using (PlugInAboutForm frm = new PlugInAboutForm(PlugIn))
         {
            frm.ShowDialogAndFixSynchronizationContext(this);
         }
      }
   }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)