# ShowWindow

## Description

This function allows you to display the Speos Core window.

## Syntax

*object*.ShowWindow(Int nShowWindow) As Int

- *object*: SPEOSCore
- *Int nShowWindow*: 1 to show the window, 0 to hide it
- Int return: returns 0 if succeeded

## Example

```ironpython
from System import Type, Activator

#Creates SPEOSCore COM server
type = Type.GetTypeFromProgID("speos.document")
SPEOSCore = Activator.CreateInstance(type)

#Shows SPEOSCore interface
retval = SPEOSCore.ShowWindow(1)
