# Appendix B: Using OpenTD with Python

While it is not feasible for us to maintain separate "Getting Started with OpenTD" guides for every programming language, we would still like to help you get started with OpenTD, even if you are not using C#. The following .py script is a MATLAB port of the program in the [Create and run a case](working-with-case-sets.md#create-and-run-a-case) section. This can be used as a sort of "Rosetta Stone" to help you translate other C# examples to Python. It uses the pythonnet module, found at: [http://pythonnet.github.io/](http://pythonnet.github.io/).

```python
#### Using OpenTD with Python ####
# CRTech
# Feb, 2022
# Created with Python 2.7.15 and pythonnet 2.3.0

# OpenTD is an Application Programming Interface (API) for Thermal Desktop
# (TD) that allows you to automate many of the tasks currently performed
# interactively using TD's Graphical User Interface (GUI). OpenTD gives you
# the tools to programmatically create, query, edit, delete, and run
# models. You can use any .NET language to interact with OpenTD (C#,
# VB.NET, F#, etc.) or any system that can load .NET assemblies such as
# MATLAB or Python.

# Regardless of how you interact with OpenTD, you'll need to have at least
# an intermediate understanding of .NET object-oriented programming. If you
# are starting from scratch, we recommend learning C#, since it is the
# language that we support. However, we understand that there might be
# compelling reasons for you to connect to OpenTD via Python. It is
# possible using the pythonnet module:

# http://pythonnet.github.io/

# To get started with OpenTD, read "Getting Started with OpenTD.pdf",
# which can be found in your TD v241 installation directory under "Manual".
# The Getting Started guide explains the fundamental concepts of OpenTD,
# using several C# examples. We've ported one of those examples to Python
# below.

#### The "Create and Run a Case" example ported to Python ####
# See "Getting Started with OpenTD.pdf" in your TD v241 installation
# directory under "Manual" for an explanation of this script.

# Note: Please contact us at crtech.support@ansys.com if you think there are
# better ways to use OpenTD with Python, especially with regard to setting
# dimensional values.

# REQUIREMENT: You must install the pythonnet module to use this script.

import sys
import clr

# Need to add explicit path to sys.path so clr.AddReference
# can find OpenTD.dll. Note the use of forward slashes in the path:
sys.path.append("C:/Windows/Microsoft.NET/assembly/GAC_MSIL/OpenTD/ReplaceMe")
clr.AddReference("OpenTD")
from OpenTD import *

# We'll want to use .NET System types and generic Lists:
from System import *
from System.Collections.Generic import List

# To access dimensional quantities in OpenTD, we need to use Dimensionals.
# These are cast to/from doubles implicitly in C#, but here we'll need to
# refer to them explicitly. (See setting InitialTemp, below.)
from OpenTD import Dimension
from OpenTD.Dimension import *

td = ThermalDesktop()
td.Connect()

# *** Create a simple model of a heated bar ***
barNodes = List[Node]()
for i in range(10):
    n = td.CreateNode()
    n.Submodel = SubmodelNameData("bar")
    n.Id = i + 1
    n.MassVol = 10.0
    n.Origin = Point3d(0.01 * i, 1.0, 0.0)
    n.InitialTemp = Dimensional[Dimension.Temp](300.0)
    n.Update()
    barNodes.Add(n)
for i in range(9):
    c = td.CreateConductor(Connection(barNodes[i]), Connection(barNodes[i+1]))
    c.Submodel = SubmodelNameData("bar")
    c.Value = 0.1
    c.Update()

roomAir = td.CreateNode()
roomAir.Submodel = SubmodelNameData('room')
roomAir.NodeType = RcNodeData.NodeTypes.BOUNDARY
roomAir.Origin = Point3d(0.055, 1.1, 0.0)
roomAir.InitialTemp = Dimensional[Dimension.Temp](300.0)
roomAir.Update()

barConnections = List[Connection]()
for n in barNodes:
    barConnections.Add(Connection(n))
convection = td.CreateConductor(Connection(roomAir), barConnections)
convection.Value = 1.0
convection.Submodel = SubmodelNameData("room")
convection.Update()

qTorch = td.CreateSymbol("qTorch", "80")
heatLoadConnections = List[Connection]()
heatLoadConnections.Add(Connection(barNodes[0]))
torch = td.CreateHeatLoad(heatLoadConnections)
torch.ValueExp.Value = qTorch.Name
torch.Submodel = SubmodelNameData("torch")
torch.Update()

td.ZoomExtents()
# *** End simple model creation ***

# Create a transient case and run it:
nominal = td.CreateCaseSet("transient with nominal torch", "", "torchNom")
nominal.SteadyState = 0
nominal.Transient = 1
nominal.SindaControl.timend = Dimensional[Dimension.Time](600.0)
nominal.Update()
nominal.Run()

# Create a cold case by overriding a symbol, and run it:
cold = td.CreateCaseSet("transient with cold torch", "", "torchCold")
cold.SteadyState = 0
cold.Transient = 1
cold.SindaControl.timend = Dimensional[Dimension.Time](1200.0)
cold.SaveQ = 1
cold.SymbolNames.Add(qTorch.Name)
cold.SymbolValues.Add("50")
cold.SymbolComments.Add("cold torch heat input")
cold.SaveAll = 1
cold.Update()
cold.Run()

#### Acknowledgements
# Thank you to James Etchells with the European Space Agency (ESA) for
# performing some of the early work to determine how to use OpenTD with
# Python.
```
