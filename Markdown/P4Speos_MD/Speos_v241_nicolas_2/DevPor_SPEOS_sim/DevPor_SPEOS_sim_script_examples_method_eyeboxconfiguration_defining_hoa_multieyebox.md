# EyeboxConfiguration – Defining a HUD Optical Analysis with Multi-Eyebox Configuration

This page presents you an example on how to define a Head-Up Display Optical Analysis with a multi-eyebox configuration using the **TiltAngle** method.

```
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