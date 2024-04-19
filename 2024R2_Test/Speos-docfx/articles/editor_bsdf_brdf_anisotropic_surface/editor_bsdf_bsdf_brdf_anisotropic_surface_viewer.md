# BSDF – BRDF Anisotropic Surface Viewer 

Automation in BSDF - BRDF - Anisotropic Surface Viewer allows you to access to the data inside BSDF, Anisotropic BSDF, BRDF, BSDF180 or unpolished files

The installation directory includes:

- The TLB file that describes the Automation interface of the BSDF - BRDF - Anisotropic Surface Viewer.

- Some HTML example files which have VB script Automation instructions.

Any language compatible with Automation can be used \(VB, C\#, etc.\).

## How to call the BSDF - BRDF - Anisotropic Surface Viewer 

Before any call to the BSDF - BRDF - Anisotropic Surface Viewer methods you should use the following instruction:

```
Set BSDF_BRDF_Anisotropic_Viewer = CreateObject("SimpleBSDFSurfaceViewer.Application")

```

This instruction automatically runs the BSDF - BRDF - Anisotropic Surface Viewer \(creates an instance of the application\). The other uses of the BSDF - BRDF - Anisotropic Surface Viewer should refer to the variable *BSDF\_BRDF\_Anisotropic\_Viewer* which has been initialized with this instance.

You could notice that there is no reference to the path where the BSDF\_BRDF\_Anisotropic\_Viewer is on the disk. As it is an Automation application it has been registered in the Windows registry and Windows understand which application you want to instantiate with *SimpleBSDFSurfaceViewer.Application*.

## How to call a method 

### VB script language

To call a method, write *BSDF\_BRDF\_Anisotropic\_Viewer* followed by a **.** then by the name of the method and parameters \(strings between **"** and **"**\), each separated by a comma. For example for opening an XMP map, write the following instructions:

```
Dim MyVar MyVar = BSDF_BRDF_Anisotropic_Viewer.OpenFile("MyBRDF.brdf")

```

The *OpenFile* method takes a string as parameter. The variable MyVar holds the result of the method \(success or failure in this case\).

All the available methods match something existing in the graphic user interface of the BSDF - BRDF - Anisotropic Viewer.

### C\# language

In Framework .NET 4.5, add the TLB reference « BSDF\_BRDF\_Anisotropic\_Viewer.tlb » to the project.

Add this command: using BSDF\_BRDF\_Anisotropic\_Viewer.

Then, the commands can be used as follows:

```
BSDF_BRDF_Anisotropic_Viewer.Application test = new SimpleBSDFSurfaceViewer.Application(); test.OpenFile("d:\\filename.brdf"); test.Show(1);
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