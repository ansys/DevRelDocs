# Using RBD commands from the IronPython console

It is possible to use any RBD commands you would use during a
simulation from the IronPython console, outside of the simulation environment.
The following command snippets and instructions provide a demonstration of
this capability:

You can access the IronPython console by clicking the File > Scripting > Open
Command Window menu item.

The following code snippets load the RBD command module into IronPython:

    import clr
    import os
    import Ansys
    import sys
    
    clr.AddReference('Ans.Utilities')
    ver=Ansys.Utilities.ApplicationConfiguration.DefaultConfiguration.VersionInfo.VersionString
    
    awp_root=os.getenv('AWP_ROOT'+ver)
    sys.path.Add(awp_root+r'\aisol\bin\winx64')
    clr.AddReference('Ans.MotionSolver.MSolverLib.CSMotion')
    
    from Ans.MotionSolver.MSolverLib.CSMotion import *

You can read an already-solved rigid body dynamics model using the following
code:

    dbIn=CS_MSolverDB()
    dbIn.SetFileName(GetProjectDirectory()+'/TestRestart_files/dp0/SYS/MECH/file.mbd')
    dbIn.OpenDataBase(0)
    dbIn.ReadDB()
    dbIn.Dispose()

The environment and system objects are accessed in the following way:

    environment=CS_Environment.GetDefault()
    system=environment.System

It is now possible to alter properties of the simulation. For example, you
could modify the end time and restart from 0.5 s:

    environment.AlterSimulationEndTime(2.0)
    environment.RestartTime=0.5
    environment.Solve()

Once you have made your changes, make use the following code snippet to save
the modified database:

    dbOut=CS_MSolverDB()
    dbOut.SetFileName(GetProjectDirectory()+'/TestRestart_files/dp0/SYS/MECH/file.mbd')
    dbOut.OpenDataBase(1)
    dbOut.WriteDB()
    dbOut.Dispose()

**Note**
You cannot restart a Rigid Dynamics analysis using this procedure if the model
has contact or a Point On Curve joint, or if there are multiple load steps.  
