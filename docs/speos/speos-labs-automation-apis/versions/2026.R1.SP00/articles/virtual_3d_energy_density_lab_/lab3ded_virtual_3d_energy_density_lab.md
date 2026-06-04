# 3D Energy Density Lab

Automation in 3D Energy Density Lab allows you to access to the data inside VMP maps.

The installation directory includes:

- The TLB file that describes the Automation interface of the 3D Energy Density Lab,
- Some HTML example files which have VB script Automation instructions.

Any language compatible with Automation can be used \(VB, C\#, etc.\).

## How to call the 3D Energy Density Lab

Before any call to the 3D Energy Density Lab methods you should use the following instruction:

```
Set 3DEnergyDensityLab = CreateObject("VMPViewer.Application")
```

This instruction automatically runs the 3D Energy Density Lab \(creates an instance of the application\). The other uses of the 3D Energy Density Lab should refer to the variable *3DEnergyDensityLab* which has been initialized with this instance.

You could notice that there is no reference to the path where the 3D Energy Density Lab is on the disk. As it is an Automation application it has been registered in the Windows registry and Windows understand which application you want to instantiate, with *VMPViewer.Application*.

## How to call a method

VB Script Language

To call a method, write *3DEnergyDensityLab* followed by a **.** then by the name of the method and parameters \(strings between **"** and **"**\), each separated by **,**. For example for opening an VMP map, write the following instructions:

```
Dim MyVar MyVar = 3DEnergyDensityLab.OpenFile("MyMap.vmp")
```

The *OpenFile* method takes a string as parameter. The variable MyVar holds the result of the method \(success or failure in this case\).

All the available methods match something existing in the graphic user interface of the 3D Energy Density Lab.

C\# Language

In Framework .NET 4.5, add the TLB reference « VMPViewer.tlb » to the project.

Add this command: using VMPViewer.

Then, the commands can be used as follows:

```
VMPViewer.Application testmap = new VMPViewer.Application(); testmap.OpenFile("d:\\filename.vmp");  testmap.Show(1);
```

## Syntax description

All the available methods will be described below using the following syntax:

object.Method\_Name \(parameter 1, parameter 2, etc.\) as return\_type

With:

- Method\_Name: name of the method.
- Parameter n: a keyword for the type of the parameter followed by the parameter name.
- return\_type: type of the return value \(BOOL for Boolean value, short for integer value, double for floating point value, BSTR for string, etc.\).