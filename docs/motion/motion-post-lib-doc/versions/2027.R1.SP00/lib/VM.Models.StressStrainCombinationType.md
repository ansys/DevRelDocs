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

Description: "Average Principal"

Uses the average of the principal stresses or strains.



`Max_ABS_Principal` 

Description: "Max Abs Principal"

Uses the principal stress or strain with the largest absolute value.



`Max_Principal` 

Description: "1st Principal"

Uses the first principal stress or strain.



`Max_Shear` 

Description: "Max Shear"

Uses the maximum shear stress or strain.



`Min_Principal` 

Description: "3rd Principal"

Uses the third principal stress or strain.



`Signed_Max_Shear` 

Description: "Signed Max Shear"

Uses the signed maximum shear stress or strain.



`Signed_VonMises` 

Description: "Signed VonMises"

Uses the signed Von Mises equivalent stress or strain.



`VonMises` 

Description: "VonMises"

Uses the Von Mises equivalent stress or strain.


