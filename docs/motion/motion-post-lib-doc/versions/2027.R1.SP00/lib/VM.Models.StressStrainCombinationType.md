# Enum StressStrainCombinationType
<div align="right"><a href="/lib/VM.Models.StressStrainCombinationType.md" download="VM.Models.StressStrainCombinationType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
