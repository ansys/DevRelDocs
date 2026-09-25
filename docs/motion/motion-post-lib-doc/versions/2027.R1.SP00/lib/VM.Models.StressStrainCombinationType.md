# Enum StressStrainCombinationType
<a id="VM_Models_StressStrainCombinationType"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.dll  

Specifies how stress or strain components are combined for fatigue result calculations.

```csharp
public enum StressStrainCombinationType
```

## Fields

`Average_Principal` 

Uses the average of the principal stresses or strains.



`Max_ABS_Principal` 

Uses the principal stress or strain with the largest absolute value.



`Max_Principal` 

Uses the first principal stress or strain.



`Max_Shear` 

Uses the maximum shear stress or strain.



`Min_Principal` 

Uses the third principal stress or strain.



`Signed_Max_Shear` 

Uses the signed maximum shear stress or strain.



`Signed_VonMises` 

Uses the signed Von Mises equivalent stress or strain.



`VonMises` 

Uses the Von Mises equivalent stress or strain.


