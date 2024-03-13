# RunSimulation

## Description

This function allows you to run a simulation.

## Syntax

*object*.RunSimulation\(Int nSimulationIndex, BSTR strCommandLine\) As Int

 - *object*: SPEOSCore
 - *Int nSimulationIndex*: Simulation index, 0 by default
 - *BSTR strCommandLine*: This variable corresponds to the **command lines**
 - Int return: returns 0 if succeeded

## Example

```ironpython
from System import Type, Activator

#Creates SPEOSCore COM server
type = Type.GetTypeFromProgID("SV5.document")
SPEOSCore = Activator.CreateInstance(type)

#Opens sv5 file
fileName = mainPath + "C:\\NewSimulation.sv5"
commandline = ""
retval = SPEOSCore.OpenFile(fileName)

#Runs simulation
retval = SPEOSCore.RunSimulation(0, commandline)
```