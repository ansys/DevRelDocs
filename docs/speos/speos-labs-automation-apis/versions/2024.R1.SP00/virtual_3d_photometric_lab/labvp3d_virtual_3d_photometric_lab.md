# Virtual 3D Photometric Lab 

Automation in Virtual 3D Photometric Lab allows you to access to the data inside XM3 maps.

The installation directory includes:

- The TLB file that describes the Automation interface of the Virtual 3D Photometric Lab,
- Some HTML example files which have VB script Automation instructions.

All examples are given using VB Script language but any other language compatible with Automation can be used.

## How to call the Virtual 3D Photometric Lab 

Before any call to the Virtual 3D Photometric Lab methods you should use the following instruction:

```
Set Viewer = CreateObject("Xm3Viewer.Application")
```

This instruction automatically runs the Virtual 3D Photometric Lab \(creates an instance of the application\). The other uses of the Virtual 3D Photometric Lab should refer to the variable *Viewer* which has been initialized with this instance.

You could notice that there is no reference to the path where the Virtual 3D Photometric Lab is on the disk. As it is an Automation application it has been registered in the Windows registry and Windows understand which application you want to instantiate, with *Xm3Viewer.Application*.

## How to call a method 

To call a method, write *Viewer* followed by a **.** then by the name of the method and parameters between **"** and **"**, each separated by **,**. For example for opening an XM3 map, write the following instructions:

```
Dim MyVar MyVar = Viewer.OpenFile("MyMap.xm3")
```

The *OpenFile* method takes a string as parameter. The variable MyVar holds the result of the method \(success or failure in this case\).

All the available methods match something existing in the graphic user interface of the Virtual 3D Photometric Lab.

## Syntax description 

All the available methods will be described below using the following syntax:

```
[number] return_type Method_Name(parameter 1, parameter 2,...);
```

With:

- \[number\]: ordinal number of the method \(not to be used in most cases\).
- return\_type: type of the return value \(BOOL for Boolean value, short for integer value, double for floating point value, BSTR for string...\).
- Method\_Name: name of the method.
- Parameter n: A keyword for the type of the parameter followed by the parameter name.