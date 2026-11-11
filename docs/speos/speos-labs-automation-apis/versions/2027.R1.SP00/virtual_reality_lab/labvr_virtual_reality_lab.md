# Virtual Reality Lab 

With Automation in Virtual Reality Lab, you can interact with Speos360 files.

The installation directory includes a TLB file that describes the Automation interface of the Virtual Reality Lab.

All examples are given using VB Script language but any other language compatible with Automation can be used.

## How to call the Virtual Reality Lab 

Before any call to the Virtual Reality Lab methods you should use the following instruction:

```
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")

```

This instruction automatically runs the Virtual Reality Lab \(creates an instance of the application\). The other uses of the Virtual Reality Lab should refer to the variable VirtualRealityLab which has been initialized with this instance.

You could notice that there is no reference to the path where the Virtual Reality Lab is on the disk. As it is an Automation application it has been registered in the Windows registry and Windows understand which application you want to instantiate, with *HDRIViewer.Application*.

## How to call a method 

To call a method, write *VirtualRealityLab*followed by a "." then by the name of the method and parameters between " and ", each separated by "," and encompassed by "\(\)". For example for opening an Speos360 file, write the following instructions:

```
Dim MyVar
MyVar = VirtualRealityLab.OpenFile("C:\InteriorCar.speos360")

```

The *OpenFile*method takes a string as parameter. The variable MyVar holds the result of the method \(success or failure in this case\).

All the available methods match something existing in the graphic user interface of the Virtual Reality Lab.

## Syntax description 

All the available methods will be described below using the following syntax:

\[number\] return\_type Method\_Name\(parameter 1, parameter 2,...\);

With:

- \[number\]: ordinal number of the method \(not to be used in most cases\).
- return\_type: type of the return value \(BOOL for Boolean value, short for integer value, double for floating point value, BSTR for string...\).
- Method\_Name: name of the method.
- Parameter n: A keyword for the type of the parameter followed by the parameter name.