# Sherlock Analysis Service- SherlockAnalysisService.proto

[Click here to return to the main index to Sherlock's APIs.](introduction.md
"Index to the Sherlock APIs")

The APIs in this section allow you to run one or more analyses in sequential
order. Results are saved to the project's Saved Results folder on Sherlock's
Project Tree. Clicking on the active links in the table below will take you to
the selected API.

Table 1.2. Index to Sherlock Analysis Service APIs

Method Name| Request Type| Response Type| Description  
---|---|---|---  
For display purposes, the long strings in columns 1 to 3 are broken into multiple lines. The strings should be interpreted as continuous. For example: .GetNaturalFrequencyInputFieldsResponse getPcbModeling InputFields| [.GetPcbModelingInputFieldsRequest](analysis-services.md#sherlock_ug_GetPcbModelingInputFieldsRequest "GetPcbModelingInputFieldsRequest")| [.GetPcbModeling InputFields
Response](analysis-services.md#sherlock_ug_GetPcbModelingInputFieldsResponse "GetPcbModelingInputFieldsResponse")| Returns the list of valid PCB Modeling property field. getHarmonicVibe InputFields| [.GetHarmonicVibeInputFieldsRequest](SherlockAnalysisService.proto.md#sherlock_ug_GetHarmonicVibeInputFieldsRequest "GetHarmonicVibeInputFieldsRequest")| [.GetHarmonicVibe
InputFieldsResponse](ch01s03s02s02.md "GetHarmonicVibeInputFieldsResponse")| Returns the list of valid Harmonic Vibe input fields for the provided model source and user configuration. getICTAnalysis InputFields| [.GetICTAnalysis InputFields Request](SherlockAnalysisService.proto.md#sherlock_ug_GetICTAnalysisInputFieldsRequest "GetICTAnalysisInputFieldsRequest")| [.GetICTAnalysis InputFields Response](SherlockAnalysisService.proto.md "GetICTAnalysisInputFieldsResponse")| Returns the list of valid ICT analysis property fields given the user configuration. getMechanical ShockInputFields| [.GetMechanical ShockInputFields
Request](ch01s03s04.md#sherlock_ug_GetMechanicalShockInputFieldsRequest
"GetMechanicalShockInputFieldsRequest")| [.GetMechanical ShockInputFields
Response](ch01s03s04s02.md "GetMechanicalShockInputFieldsResponse")| Returns
the list of valid Mechanical Shock input fields for the provided model source
and user configuration.  
getNatural FrequencyInput Fields| [.GetNatural Frequency InputFields
Request](ch01s03s05.md#sherlock_ug_GetNaturalFrequencyInputFieldsRequest
"GetNaturalFrequencyInputFieldsRequest")| [.GetNatural Frequency InputFields
Response](ch01s05s14s02.md "GetMountPointsPropertiesResponse")| Returns the
list of valid Natural Frequency property fields given the user configuration.  
getRandomVibe InputFields| [.GetRandom VibeInput
FieldsRequest](ch01s03s06.md#sherlock_ug_GetRandomVibeInputFieldsRequest
"GetRandomVibeInputFieldsRequest")| [.GetRandomVibe InputFields
Response](ch01s03s06s02.md "GetRandomVibeInputFieldsResponse")| Returns the
list of valid Random Vibe input fields for the provided model source and user
configuration.  
getSolderFatigue InputFields| [.GetSolderFatigue
InputFieldsRequest](ch01s03s07.md#sherlock_ug_GetSolderFatigueInputFieldsRequest
"GetSolderFatigueInputFieldsRequest")| [.GetSolderFatigue
InputFieldsResponse](ch01s03s07s02.md
"GetSolderFatigueInputFieldsResponse")| Returns the list of valid Solder
Fatigue property fields given the user configuration.  
runAnalysis| [.RunAnalysis
Request](ch01s03s08.md#sherlock_ug_RunAnalysisRequest "RunAnalysisRequest")|
[.ReturnCode](ch01s04s04.md "Return Code")| Runs one or more Sherlock
analysis.  
runStrainMap Analysis| [.RunStrainMap Analysis
Request](ch01s03s09.md#sherlock_ug_RunStrainMapAnalysisRequest
"RunStrainMapAnalysisRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Run Sherlock strain map analysis.  
updateICT AnalysisProps| [.UpdateICT AnalysisProps
Request](ch01s03s11.md#sherlock_ug_UpdateICTAnalysisPropsRequest
"UpdateICTAnalysisPropsRequest")| [.ReturnCode](ch01s04s04.md "Return
Code")| Updates the analysis properties for ICT analysis.  
updateHarmonic VibeProps| [.UpdateHarmonic
VibePropsRequest](ch01s03s10.md#sherlock_ug_UpdateHarmonicVibePropsRequest
"UpdateHarmonicVibePropsRequest")| [.ReturnCode](ch01s04s04.md "Return
Code")| Updates the analysis properties for Harmonic Vibe analysis.  
updateMechanical ShockProps| [.UpdateMechanical
ShockPropsRequest](ch01s03s12.md#sherlock_ug_UpdateMechanicalShockPropsRequest
"UpdateMechanicalShockPropsRequest")| [.ReturnCode](ch01s04s04.md "Return
Code")| Updates the analysis properties for Mechanical Shock analysis.  
updateNatural FrequencyProps| [.UpdateNatural FrequencyProps
Request](ch01s03s13.md#sherlock_ug_UpdateNaturalFrequencyPropsRequest
"UpdateNaturalFrequencyPropsRequest")| [.ReturnCode](ch01s04s04.md "Return
Code")| Updates the analysis properties for Natural Frequency analysis.  
updatePart ModelingRequest| [.UpdatePart
ModelingRequest](ch01s03s14.md#sherlock_ug_UpdatePartModelingRequest
"UpdatePartModelingRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Updates the part modeling properties for a given project's CCA.  
updatePcb ModelingProps| [.UpdatePcb Modeling
PropsRequest](ch01s03s15.md#sherlock_ug_UpdatePcbModelingPropsRequest
"UpdatePcbModelingPropsRequest")| [.ReturnCode](ch01s04s04.md "Return
Code")| Updates the PCB modeling properties for the provided analysis types.  
updateRandom VibeProps| [.UpdateRandom VibeProps
Request](ch01s03s16.md#sherlock_ug_UpdateRandomVibePropsRequest
"UpdateRandomVibePropsRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Updates the analysis properties for Random Vibe analysis.  
updateSolder FatigueProps| [.UpdateSolder FatigueProps
Request](ch01s03s17.md#sherlock_ug_UpdateSolderFatiguePropsRequest
"UpdateSolderFatiguePropsRequest")| [.ReturnCode](ch01s04s04.md "Return
Code")| Updates the analysis properties for Solder Fatigue analysis.  
updateThermal MechProps| [.UpdateThermal Mech
PropsRequest](ch01s03s18.md#sherlock_ug_UpdateThermalMechPropsRequest
"UpdateThermalMechPropsRequest")| [.ReturnCode](ch01s04s04.md "Return
Code")| Updates the analysis properties for Thermal Mech analysis  
  
  

## Get PCB Modeling Input Fields

Links:

### GetPcbModelingInputFieldsRequest

Request to list the valid PCB Modeling input fields given the user
configuration.

### GetPcbModelingInputFieldsResponse

Table 1.3. GetPcbModelingInputFieldsResponse

Field| Type| Label| Description  
---|---|---|---  
fieldName| [string](scalar-values.md "gRPC Scalar Value Types")| repeated|  
  
  

### Example: Get PCB Modeling Input Fields

#### Proto Request Example:

    
    
    {}

#### Python Example:

For a Python example, refer to the online [PySherlock
Reference](https://sherlock.docs.pyansys.com/version/stable/api/index.md).

* * *

[Prev](introduction.md) |   / [Contents](index.md) / [Home](../../index.htm)|  [Next](ch01s03s02.md)  
---|---|---

