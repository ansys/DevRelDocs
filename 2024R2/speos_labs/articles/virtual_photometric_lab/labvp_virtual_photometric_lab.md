# Virtual Photometric Lab 

Automation in Virtual Photometric Lab allows you to access to the data inside XMP maps.

The installation directory includes:

- The TLB file that describes the Automation interface of the Virtual Photometric Lab,
- Some HTML example files which have VB script Automation instructions.

Any language compatible with Automation can be used \(VB, C\#, etc.\).

## How to call the Virtual Photometric Lab 

Before any call to the Virtual Photometric Lab methods you should use the following instruction:

```
Set VirtualPhotometricLab = CreateObject("XmpViewer.Application")
```

This instruction automatically runs the Virtual Photometric Lab \(creates an instance of the application\). The other uses of the Virtual Photometric Lab should refer to the variable *VirtualPhotometricLab* which has been initialized with this instance.

You could notice that there is no reference to the path where the Virtual Photometric Lab is on the disk. As it is an Automation application it has been registered in the Windows registry and Windows understand which application you want to instantiate, with *XmpViewer.Application*.

## How to call a method 

VB Script Language

To call a method, write *VirtualPhotometricLab* followed by a **.** then by the name of the method and parameters \(strings between **"** and **"**\), each separated by **,**. For example for opening an XMP map, write the following instructions:

```
Dim MyVar MyVar = VirtualPhotometricLab.OpenFile("MyMap.xmp")
```

The *OpenFile* method takes a string as parameter. The variable MyVar holds the result of the method \(success or failure in this case\).

All the available methods match something existing in the graphic user interface of the Virtual Photometric Lab.

C\# Language

In Framework .NET 4.5, add the TLB reference « XMPViewer.tlb » to the project.

Add this command: using XmpViewer.

Then, the commands can be used as follows:

```
XmpViewer.Application testmap = new XmpViewer.Application(); testmap.OpenFile("d:\\filename.xmp");  testmap.Show(1);
```

## Syntax description 

All the available methods will be described below using the following syntax:

object.Method\_Name \(parameter 1, parameter 2, etc.\) as return\_type

With:

- Method\_Name: name of the method.
- Parameter n: a keyword for the type of the parameter followed by the parameter name.
- return\_type: type of the return value \(BOOL for Boolean value, short for integer value, double for floating point value, BSTR for string, etc.\).