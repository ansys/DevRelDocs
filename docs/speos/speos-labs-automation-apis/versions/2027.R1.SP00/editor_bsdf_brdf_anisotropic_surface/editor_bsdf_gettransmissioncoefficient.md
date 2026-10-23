# GetTransmissionCoefficient 

## Description 

Gives the coefficient of transmission in reference, and returns:

- *false*if there is an error in the function \(value is not in the correct interval Theta, Phi or Wavelength\)

- *True*if there is Transmission


## Syntax 

*object*.GetTransmissionCoefficient\(theta,phi,Wavelength,transmission\) *object*: BSDFViewer

## VB script example 

```VB
Sub Test_BSDF_Viewer()
Path = "way of file" ‘example C:\User\nameUser\Documents\
Set BSDFViewer = CreateObject("SimpleBSDFSurfaceViewer.Application")
MyVar = BSDFViewer.Show(True)
'Open Test File
BSDFViewer.OpenFile (Path + "DD8021.anisotropicbsdf")
‘Test function 
Dim reflection As Double
Dim transmission As Double
Dim absorption As Double
Dim Rcheck As Boolean
Dim Tcheck As Boolean
Rcheck = BSDFViewer.GetReflectionCoefficient(90, 0, 464, reflection)
Tcheck = BSDFViewer.GetTransmissionCoefficient(90, 0, 464, transmission)
absorption = 100.0-reflection-transmission
MsgBox reflection & " " & Rcheck
MsgBox transmission & " " & Tcheck
MsgBox absorption 
MsgBox ("Fin du test.")
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
import System
import json
type = Type.GetTypeFromProgID("SimpleBSDFSurfaceViewer.Application")
BSDFViewer = Activator.CreateInstance(type)

Path = "way of file" #example C:\\User\username\\Documents\\File.anisotropicbsdf
BSDFViewer.Show(1)
#Open Test File
BSDFViewer.OpenFile(Path)
#Test function
my_data_r={}
my_data_t={}
test=clr.Reference[System.Double]()
for wl in range(380,780,10):
    my_data_r[str(wl)] =[]
    my_data_t[str(wl)] =[] 
    for theta in range(0,90,1):
        rcheck=BSDFViewer.GetReflectionCoefficient(theta, 0 , wl, test)
        my_data_r[str(wl)].append(test.Value)
        tcheck=BSDFViewer.GetTransmissionCoefficient(theta, 0 , wl, test)
        my_data_t[str(wl)].append(test.Value)
        
with open(r"C:\temp\output_r.json", "w") as file:
    json.dump(my_data_r, file)
    file.close()
with open(r"C:\temp\output_t.json", "w") as file:
    json.dump(my_data_t, file)
    file.close()
```


