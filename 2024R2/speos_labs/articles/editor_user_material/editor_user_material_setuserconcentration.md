# SetUserConcentration 

## Description 

Sets the user concentration of the material defined in the User Material Editor. Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetUserConcentration\(double dUserConcentration\) as Integer

- *object*: User Material Editor object

- *dUserConcentration*: User concentration \(double\)


## VB script example

```VB
strMaterialFile = "MyPath\SPEOS input files\Rohm_PLEXIGLAS_8N_65621_green.material"
MyConcentration = 112
Set OPTISMaterialViewer = CreateObject("UserMaterialViewer.Application")
OPTISMaterialViewer.OpenFile(strMaterialFile)
OPTISMaterialViewer.SetUserConcentration(MyConcentration )
OPTISMaterialViewer.SaveFile(strMaterialFile)

```

## IronPython example

```
from System import Type, Activator
type = Type.GetTypeFromProgID("UserMaterialViewer.Application")
MyUserMaterialViewer = Activator.CreateInstance(type)
strMaterialFile = "MyPath\\SPEOS input files\\Rohm_PLEXIGLAS_8N_65621_green.material"
OPTISMaterialViewer.OpenFile(strMaterialFile)
userConcentration = 10
MyConcentration = OPTISMaterialViewer.SetUserConcentration(userConcentration)
OPTISMaterialViewer.SaveFile(strMaterialFile)

```


