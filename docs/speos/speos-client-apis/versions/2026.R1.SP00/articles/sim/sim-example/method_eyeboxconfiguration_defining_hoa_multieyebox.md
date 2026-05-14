# EyeboxConfiguration – Defining a HUD optical analysis with multi-eyebox configuration

This page presents you an example on how to define a Head-Up Display Optical Analysis with a multi-eyebox configuration using the **TiltAngle** method.

```ironpython
multiEyeBoxMirrors = hoaSimulation.Mirrors.GetMultiEyeBoxMirrorPossibleValues() 
            
for multiEyeBoxMirror in multiEyeBoxMirrors:
    if multiEyeBoxMirror.Contains(GetRootPart().Bodies[1].GetName()):
       hoaSimulation.Mirrors.MultiEyeBoxMirror = multiEyeBoxMirror                    
       break
            
hoaSimulation.Mirrors.TiltRotationAxis.Set(GetRootPart().Curves[1])                               
            
ebConfigurations = hoaSimulation.Mirrors.EBMirrorConfigurations  
            
for ebConfig in ebConfigurations:
    if ebConfig.EBConfigName.Contains("Lower"):
       ebConfig.TiltAngle = -2
    elif ebConfig.EBConfigName.Contains("Upper"):
       ebConfig.TiltAngle = 2
```