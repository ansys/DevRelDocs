# GetUserConcentration 

## Description 

Gets the user concentration of the material defined in the User Material Editor.

## Syntax 

*object*.GetUserConcentration\(\) As Double

- *object*: User Material Editor object

- *Returned value*: User concentration \(double\)


## VB script example

```VB
strMaterialFile = "MyPath\SPEOS input files\Rohm_PLEXIGLAS_8N_65621_green.material"
Set OPTISMaterialViewer = CreateObject("UserMaterialViewer.Application")
OPTISMaterialViewer.OpenFile(strMaterialFile)
MyConcentration = OPTISMaterialViewer.GetUserConcentration()
OPTISMaterialViewer.SaveFile(strMaterialFile)

```

## IronPython example

```
from System import Type, Activator
type = Type.GetTypeFromProgID("UserMaterialViewer.Application")
MyUserMaterialViewer = Activator.CreateInstance(type)
strMaterialFile = "MyPath\\SPEOS input files\\Rohm_PLEXIGLAS_8N_65621_green.material"
OPTISMaterialViewer.OpenFile(strMaterialFile)
MyConcentration = OPTISMaterialViewer.GetUserConcentration()
OPTISMaterialViewer.SaveFile(strMaterialFile)

```


