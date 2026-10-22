# Enum StressStrainCombinationType
<a id="VM_Models_StressStrainCombinationType"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.dll  

Specifies how stress or strain components are combined for fatigue result calculations.

```csharp
public enum StressStrainCombinationType
```

## Fields

`Average_Principal = 7` 

Description: "Average Principal"

Uses the average of the principal stresses or strains.



`Max_ABS_Principal = 4` 

Description: "Max Abs Principal"

Uses the principal stress or strain with the largest absolute value.



`Max_Principal = 2` 

Description: "1st Principal"

Uses the first principal stress or strain.



`Max_Shear = 5` 

Description: "Max Shear"

Uses the maximum shear stress or strain.



`Min_Principal = 3` 

Description: "3rd Principal"

Uses the third principal stress or strain.



`Signed_Max_Shear = 6` 

Description: "Signed Max Shear"

Uses the signed maximum shear stress or strain.



`Signed_VonMises = 1` 

Description: "Signed VonMises"

Uses the signed Von Mises equivalent stress or strain.



`VonMises = 0` 

Description: "VonMises"

Uses the Von Mises equivalent stress or strain.

<a href="/lib/VM.Models.StressStrainCombinationType.md" download="VM.Models.StressStrainCombinationType.md">Download this page as Markdown</a>
