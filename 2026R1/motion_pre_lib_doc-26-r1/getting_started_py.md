# Getting Started with the Python language
The Ansys Motion Standalone Preprocessor C# library can be used in the python code by using [Python.NET](https://pythonnet.github.io/) or [IronPython](https://ironpython.net/).

## System requirements
If you are using CPython, you will need to install Python.NET first.
```
pip install pythonnet
```

It's a good idea to add the Motion\bin directory to your PATH environment variable. You can do this in the Python code as follows:
```
import sys
sys.path.append('Ansys installed path/Motion/bin')
```

## The API class
The Ansys Motion Standalone Preprocessor C# library supports the headless application interface. The [API](lib/VM.Managed.DAFUL.Pre.Api.md) class allows you to use it.

```
import clr
clr.AddReference("dfpreAPI")
from VM.Managed.DAFUL.Pre import Api

app = Api.Start()
# Enter your code here.
app.Dispose()
```

## The Session Class
All operations of the Ansys Motion Standalone Preprocessor must be called within the [Session](lib/VM.CAD.Kernel.ISession.md) in the following way:
```
import clr
clr.AddReference("dfpreAPI")
from VM.Managed.DAFUL.Pre import Api

app = Api.Start()
session = app.UseSession("Session name")
# Enter your code here.
session.Dispose()
app.Dispose()
```

## Disable History
It is highly recommended to disable the History Manager when using the headless application interface.
```
import clr
clr.AddReference("VMHist")
from VM.Managed.History import HistoryManager

HistoryManager.UseHistoryManager = False
```

## Example
The following sample code illustrates how to create and analyze a simple free-fall model:
```
# Please ensure that the 'Motion/bin' directory is registered in the PATH environment variable before running this script.
# If doing so in this code, uncomment the following two lines and set the exact location of the Motion installation as your configuration.
# import sys
# sys.path.append('Ansys installed path/Motion/bin')

# Using Pythoh.NET
import clr

# Adding references from Ansys Motion Standalone Preprocessor
clr.AddReference("dfpreAPI")
clr.AddReference("VM")
clr.AddReference("VM.API.Pre")
clr.AddReference("VM.Models.Pre")
clr.AddReference("VMHist")

# Import the appropriate classes from the Ansys Motion Standalone Preprocessor C# library.
from VM import Vector
from VM.API.Pre import SolidBodyAPI, SimulationAPI
from VM.Managed.DAFUL.Pre import Api
from VM.Managed.History import HistoryManager
from VM.Models.Pre import ExpressionValueVariable as ExpVar

# Start the headless application interface
app = Api.Start()

# Disable History Manager
HistoryManager.UseHistoryManager = False

# Start a session to run custom Python code.
session = app.UseSession("Session name")

# Create new subsystem file
doc = app.CreateDocument("free_fall.dfsub")

# Create a solid sphere in the inertial reference frame with a radius of 10.0.
sphere = SolidBodyAPI.CreateSolidSphere(doc, Vector(0, 0, 10), ExpVar(10))

# Running the Solver
SimulationAPI.RunSimulation(doc)

# Save the new subsystem file
app.SaveFile(doc)

# Close session
session.Dispose()

# Shutdown headless application interface
app.Dispose()
```
## See also
* [Python.NET](https://pythonnet.github.io/)
* [IronPython](https://ironpython.net/)
* [Reference](lib/VM.md)
  * [VM](lib/VM.md)
    * [VM.Vector](lib/VM.Vector.md)
  * [VM.API.Pre](lib/VM.API.Pre.md)
    * [VM.API.Pre.SimulationAPI](lib/VM.API.Pre.SimulationAPI.md)
    * [VM.API.Pre.SolidBodyAPI](lib/VM.API.Pre.SolidBodyAPI.md)
  * [VM.Managed](lib/VM.Managed.md)
    * [VM.Managed.DAFUL](lib/VM.Managed.DAFUL.md)
      * [VM.Managed.DAFUL.Pre](lib/VM.Managed.DAFUL.Pre.md)
        * [VM.Managed.DAFUL.Pre.Api](lib/VM.Managed.DAFUL.Pre.Api.md)
    * [VM.Managed.History.md](lib/VM.Managed.History.md)
      * [VM.Managed.History.HistoryManager](lib/VM.Managed.History.HistoryManager.md)
    * [VM.Models](lib/VM.Models.md)
      * [VM.Models.Pre](lib/VM.Models.Pre.md)
        * [VM.Models.Pre.ExpressionValueVariable](lib/VM.Models.Pre.ExpressionValueVariable.md)
