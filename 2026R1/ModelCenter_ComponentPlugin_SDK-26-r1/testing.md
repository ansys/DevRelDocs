# Testing the Plug-In

## Test with TestUI

1. Build the plug-in project.
1. Copy the Debug folder (from `[PlugIn Dir]/bin`) to the Plug-Ins folder of the TestUI App.
1. Run the TestUI.
1. Select "New Component", then `Plug-Ins / Debug / [Name]`.<br>You will now get the same new component wizard as you would in MCD. Note that unlike in MCD, you can cancel out of this and it will generate a completely in-memory instance backed with temp folders. This enables you to debug without building up piles of files.
1. After making changes to the project, rebuild and replace the directory in the TestUI App, then rerun the TestUI App.<br>An advanced user may want to use `mklink` to create a soft link from the TestUI Plug-Ins folder to project compile output so that they do not need manually copy after each build.

By default, TestUI runs the plug-in in process. This is advantageous because you can attach a debugger before you launch your plug-in. However, MCD always runs the plug-in out of process. Simulate this in TestUI by running it with the `-oop` command line option.

## Test with ModelCenter 14.5+

1. Install ModelCenter version 14.5 or higher.
1. Copy the Debug folder (from `[PlugIn Dir]/bin`) to the Plug-Ins folder of the ModelCenter  installation, typically located in `[C:\Program Files\Phoenix Integration\ModelCenter {version}\Plug-Ins]` (prior to 2025R2) or `[C:\Program Files\Ansys {version}\ModelCenter {version}\Plug-Ins]` (2025R2 and later).
1. Open ModelCenter. Save the workflow to allow use of CAM components.
1. Locate your plugin from **Server Browser > component plug-in > {your plug-in's name}**.
1. Drag the plug-in icon into the workflow to launch the new component wizard.