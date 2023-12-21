# OpenFile

## Description

This function allows you to open a \*.sv5 or \*.speos file.

## Syntax

*object*.OpenFile\(BSTR strFileName\) As Int

 - *object*: SPEOSCore
 - *BSTR strFileName*: This variable is composed of the path, the filename and the extension
 - Int return: returns 0 if succeeded

## Example

```
from System import Type, Activator
 
#Creates SPEOSCore COM server
type = Type.GetTypeFromProgID("SV5.document")
SPEOSCore = Activator.CreateInstance(type)
 
#Opens sv5 file
fileName = mainPath + "C:\\NewSimulation.sv5"
commandline = ""
retval = SPEOSCore.OpenFile(fileName)
```