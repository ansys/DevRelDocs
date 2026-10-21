# Ray File Editor 

Automation in Ray File Editor allows the user to access to the data inside ray files.

The installation directory includes:

- The TLB file that describes the Automation interface of the Ray File Editor,

- Some HTML example files which have VB script Automation instructions.


Any language compatible with Automation can be used \(VB, C\#, etc.\).

## How to call the Ray File Editor 

Before any call to the Ray File Editor methods you should use the following instruction:

```
Set RayEditor = CreateObject("RayEditor.Application")
```

This instruction automatically runs the Ray File Editor \(creates an instance of the application\). The other uses of the Ray File Editor should refer to the variable *RayEditor* which has been initialized with this instance.

You could notice that there is no reference to the path where the Ray File Editor is on the disk. As it is an Automation application it has been registered in the Windows registry and Windows understand which application you want to instantiate, with *RayEditor.Application*.

## How to call a method 

### VB script language

To call a method, write *RayEditor* followed by a **.** then by the name of the method and parameters \(strings between **"** and **"\)**, each separated by **,**. For example for opening a ray file, write the following instructions:

```
Dim MyVar MyVar = RayEditor.OpenFile("MyFile.ray")
```

The *OpenFile* method takes a string as parameter. The variable MyVar holds the result of the method \(success or failure in this case\).

All the available methods match something existing in the graphic user interface of the Ray File Editor.

### C\# language

In Framework .NET 4.5, add the TLB reference « RayEditor.tlb » to the project.

Add this command: using RayEditor.

Then, the commands can be used as follows:

```
RayEditor.Application testmap = new RayEditor.Application();
       testmap.OpenFile("d:\\filename.ray");  testfile.Show(1);
```

## Syntax description 

All the available methods will be described below using the following syntax:

```
object.Method\_Name \(parameter 1, parameter 2, etc.\) as return\_type
```

With:

- Method\_Name: name of the method.
- Parameter n: a keyword for the type of the parameter followed by the parameter name.
- return\_type: type of the return value \(BOOL for Boolean value, short for integer value, double for floating point value, BSTR for string, etc.\).