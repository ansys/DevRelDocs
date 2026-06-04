# Virtual Human Vision Lab 

Automation in Virtual Human Vision Lab allows you to access to the data inside XMP maps.

The installation directory includes:

- The TLB file that describes the Automation interface of the Human Vision Lab Viewer,
- Some HTML example files which have VB script Automation instructions.

All examples are given using VB Script language but any other language compatible with Automation can be used.

## How to call the Virtual Human Vision Lab 

Before any call to the Virtual Human Vision Lab methods you should use the following instruction:

```
Set VirtualHumanVisionLab = CreateObject("VisionLabViewer.Application")

```

This instruction automatically runs the Virtual Human Vision Lab \(creates an instance of the application\). The other uses of the Virtual Human Vision Lab should refer to the variable *VirtualHumanVisionLab*which has been initialized with this instance.

You might notice that there is no reference to the path where the Virtual Human Vision Lab is on the disk. As it is an Automation application it has been registered in the Windows registry and Windows understand which application you want to instantiate, with *VisionLabViewer.Application*.

## How to call a method 

To call a method, write *VirtualHumanVisionLab* followed by a **.** then by the name of the method and parameters between **"** and **"**, each separated by **,**. For example for opening an XMP map, write the following instructions:

```
Dim MyVar MyVar = VirtualHumanVisionLab.OpenFile("MyMap.xmp")

```

The *OpenFile* method takes a string as parameter. The variable MyVar olds the result of the method \(success or failure in this case\).

All the available methods match something existing in the graphic user interface of the Virtual Human Vision Lab.

All the available methods will be described below using the following syntax:
```
[number] return\_type Method\_Name\(parameter 1, parameter 2,...\);
```
with:
- \[number\]: ordinal number of the method \(not to be used in most cases\).
- return\_type: type of the return value \(BOOL for Boolean value, short for integer value, double for floating point value, BSTR for string...\).
- Method\_Name: name of the method. Parameter n: A keyword for the type of the parameter followed by the parameter name.
