# User Material Editor 

Automation in User Material Editor allows you to access to the data inside material files.

The installation directory includes:

- The TLB file that describes the Automation interface of the User Material Editor,
- Some HTML example files which have VB script Automation instructions.

All examples are given using VB Script language but any other language compatible with Automation can be used.

## How to call the User Material Editor

Before any call to the User Material Editor methods you should use the following instruction:

```
Set Viewer = CreateObject("UserMaterialViewer.Application")
```

This instruction automatically runs the User Material Editor \(creates an instance of the application\). The other uses of the User Material Editor should refer to the variable *Viewer* which has been initialized with this instance.

You could notice that there is no reference to the path where the User Material Editor is on the disk. As it is an Automation application it has been registered in the Windows registry and Windows understand which application you want to instantiate, with *UserMaterialEditor.Application*.

## How to call a method 

To call a method, write *Viewer* followed by a **.** then by the name of the method and parameters between **"** and **"**, each separated by **,**. For example for opening a material file, write the following instructions:

```
Dim MyVar MyVar = Viewer.OpenFile("MyMaterial.material")
```

The *OpenFile* method takes a string as parameter. The variable MyVar olds the result of the method \(success or failure in this case\).

All the available methods match something existing in the graphic user interface of the User Material Editor.

All the available methods will be described below using the following syntax:

```
\[number\] return\_type Method\_Name\(parameter 1, parameter 2,...\) ;
```

with:

- \[number\]: ordinal number of the method \(not to be used in most cases\).
- return\_type: type of the return value \(BOOL for Boolean value, short for integer value, double for floating point value, BSTR for string...\).
- Method\_Name: name of the method.
- Parameter n: A keyword for the type of the parameter followed by the parameter name.