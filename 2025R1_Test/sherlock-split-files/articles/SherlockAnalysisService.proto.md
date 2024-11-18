# SherlockAnalysisService.proto

@Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-GetHarmonicVibeInputFieldsRequest"></a>

## GetHarmonicVibeInputFieldsRequest

Request to list the valid Harmonic Vibe input fields for the provided model source and user configuration.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modelSource | [ModelSource](#ModelSource) | optional | Optional model source. Default: GENERATED. |






<a name="-GetHarmonicVibeInputFieldsResponse"></a>

## GetHarmonicVibeInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Harmonic Vibe input fields. |






<a name="-GetICTAnalysisInputFieldsRequest"></a>

## GetICTAnalysisInputFieldsRequest

Request to list the valid ICT analysis input fields given the user configuration.






<a name="-GetICTAnalysisInputFieldsResponse"></a>

## GetICTAnalysisInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of ICT Analysis input fields. |






<a name="-GetMechanicalShockInputFieldsRequest"></a>

## GetMechanicalShockInputFieldsRequest

Request to list the valid mechanical shock input fields for the provided model source and user configuration.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modelSource | [ModelSource](#ModelSource) | optional | Optional model source. Default: GENERATED. |






<a name="-GetMechanicalShockInputFieldsResponse"></a>

## GetMechanicalShockInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Mechanical Shock input fields for a model source. |






<a name="-GetNaturalFrequencyInputFieldsRequest"></a>

## GetNaturalFrequencyInputFieldsRequest

Request to list the valid natural frequency input fields given the user configuration.






<a name="-GetNaturalFrequencyInputFieldsResponse"></a>

## GetNaturalFrequencyInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Natural Frequency input fields. |






<a name="-GetPcbModelingInputFieldsRequest"></a>

## GetPcbModelingInputFieldsRequest

Request to list the valid PCB Modeling input fields given the user configuration.






<a name="-GetPcbModelingInputFieldsResponse"></a>

## GetPcbModelingInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Pcb Modeling input fields. |






<a name="-GetRandomVibeInputFieldsRequest"></a>

## GetRandomVibeInputFieldsRequest

Request to list the valid random vibe input fields for the provided model source and user configuration.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modelSource | [ModelSource](#ModelSource) | optional | Optional model source. Default: GENERATED. |






<a name="-GetRandomVibeInputFieldsResponse"></a>

## GetRandomVibeInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Random Vibe input fields. |






<a name="-GetSolderFatigueInputFieldsRequest"></a>

## GetSolderFatigueInputFieldsRequest

Request to list the valid solder fatigue input fields given the user configuration.






<a name="-GetSolderFatigueInputFieldsResponse"></a>

## GetSolderFatigueInputFieldsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Solder Fatigue input fields. |






<a name="-RunAnalysisRequest"></a>

## RunAnalysisRequest

Request to run one or more Sherlock analysis given the project path, CCA name, analyses, lifecycle phases and events.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| analyses | [RunAnalysisRequest.Analysis](#RunAnalysisRequest-Analysis) | repeated | List of Analyses to run. |






<a name="-RunAnalysisRequest-Analysis"></a>

## RunAnalysisRequest.Analysis



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [RunAnalysisRequest.Analysis.AnalysisType](#RunAnalysisRequest-Analysis-AnalysisType) |  | Type of Analysis to run. |
| phases | [RunAnalysisRequest.Analysis.Phase](#RunAnalysisRequest-Analysis-Phase) | repeated | List of Phases for each Analysis to run. |






<a name="-RunAnalysisRequest-Analysis-Phase"></a>

## RunAnalysisRequest.Analysis.Phase



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle phase name. |
| events | [RunAnalysisRequest.Analysis.Phase.Event](#RunAnalysisRequest-Analysis-Phase-Event) | repeated | List of life cycle Events. |






<a name="-RunAnalysisRequest-Analysis-Phase-Event"></a>

## RunAnalysisRequest.Analysis.Phase.Event



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle event name. |






<a name="-RunStrainMapAnalysisRequest"></a>

## RunStrainMapAnalysisRequest

Request to run Sherlock strain map analysis given the project name, CCA name, and strain maps.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name of the main CCA for the analysis. |
| strainMapAnalyses | [RunStrainMapAnalysisRequest.StrainMapAnalysis](#RunStrainMapAnalysisRequest-StrainMapAnalysis) | repeated | List of Strain Map Analyses to run. |






<a name="-RunStrainMapAnalysisRequest-StrainMapAnalysis"></a>

## RunStrainMapAnalysisRequest.StrainMapAnalysis



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType](#RunStrainMapAnalysisRequest-StrainMapAnalysis-AnalysisType) |  | Type of Strain Map analysis to run. |
| eventStrainMaps | [RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap](#RunStrainMapAnalysisRequest-StrainMapAnalysis-EventStrainMap) | repeated | List of Strain Map events to run. |






<a name="-RunStrainMapAnalysisRequest-StrainMapAnalysis-EventStrainMap"></a>

## RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | Life cycle phase name. |
| eventName | [string](#string) |  | Life cycle event name. |
| pcbSide | [string](#string) |  | PCB side for the strain map. Supported values are: TOP, BOTTOM. |
| strainMap | [string](#string) |  | Strain map assigned to the event. |
| subAssemblyName | [string](#string) | optional | The name of the sub-assembly CCA to be assigned the strain map. |






<a name="-UpdateHarmonicVibePropsRequest"></a>

## UpdateHarmonicVibePropsRequest

Request to update the harmonic vibe analysis properties for one or more CCA&#39;s
in the project indicated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| harmonicVibeProperties | [UpdateHarmonicVibePropsRequest.HarmonicVibe](#UpdateHarmonicVibePropsRequest-HarmonicVibe) | repeated | List of HarmonicVibe analysis properties to update. |






<a name="-UpdateHarmonicVibePropsRequest-HarmonicVibe"></a>

## UpdateHarmonicVibePropsRequest.HarmonicVibe



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | CCA name for which the harmonic vibe properties are set. |
| modelSource | [ModelSource](#ModelSource) | optional | Optional model source. Default: GENERATED. |
| harmonicVibeCount | [int32](#int32) | optional | Number of harmonic result layers to generate. |
| harmonicVibeDamping | [string](#string) | optional | Modal Damping Ratio(s). |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Flag indicating if material assignment is required. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are &#34;FORCE&#34; or &#34;AUTO&#34;. |
| filterByEventFrequency | [bool](#bool) | optional | Flag indicating if harmonic results outside selected event range are imported. |
| naturalFreqMin | [uint32](#uint32) | optional | Min Frequency. For NX Nastran analysis only. |
| naturalFreqMinUnits | [string](#string) | optional | Min Frequency units. For NX Nastran analysis only. |
| naturalFreqMax | [uint32](#uint32) | optional | Max Frequency. For NX Nastran analysis only. |
| naturalFreqMaxUnits | [string](#string) | optional | Max Frequency units. For NX Nastran analysis only. |
| reuseModalAnalysis | [bool](#bool) | optional | Reuse Natural Frequency. For NX Nastran analysis only. |






<a name="-UpdateICTAnalysisPropsRequest"></a>

## UpdateICTAnalysisPropsRequest

Request to update ICT Analysis properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| ictAnalysisProperties | [UpdateICTAnalysisPropsRequest.ICTAnalysis](#UpdateICTAnalysisPropsRequest-ICTAnalysis) | repeated | List of ICTAnalysis properties to update for each CCA in a project. |






<a name="-UpdateICTAnalysisPropsRequest-ICTAnalysis"></a>

## UpdateICTAnalysisPropsRequest.ICTAnalysis



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| applicationTime | [double](#double) | optional | Application Time. |
| applicationTimeUnits | [string](#string) | optional | Application Time Units. |
| numberOfEvents | [uint32](#uint32) | optional | Number of Events. |
| partValidationEnabled | [bool](#bool) | optional | Part Validation. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Flag indicating if material assignment is required. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are &#34;FORCE&#34; or &#34;AUTO&#34;. |
| ictResultCount | [int32](#int32) | optional | Number of ICT layers to generate when using thermal analysis. |






<a name="-UpdateMechanicalShockPropsRequest"></a>

## UpdateMechanicalShockPropsRequest

Request to update the mechanical shock analysis properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| mechanicalShockProperties | [UpdateMechanicalShockPropsRequest.MechanicalShock](#UpdateMechanicalShockPropsRequest-MechanicalShock) | repeated | List of MechanicalShock properties to update. |






<a name="-UpdateMechanicalShockPropsRequest-MechanicalShock"></a>

## UpdateMechanicalShockPropsRequest.MechanicalShock



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| modelSource | [ModelSource](#ModelSource) | optional | Default is GENERATED. |
| shockResultCount | [int32](#int32) | optional | Mechanical Shock Result Count. |
| criticalShockStrain | [double](#double) | optional | Critical Shock Strain. |
| criticalShockStrainUnits | [string](#string) | optional | Critical Shock Strain units. |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Flag indicating if material assignment is required. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are &#34;FORCE&#34; or &#34;AUTO&#34;. |
| naturalFreqMin | [uint32](#uint32) | optional | Min Frequency. |
| naturalFreqMinUnits | [string](#string) | optional | Min Frequency units. |
| naturalFreqMax | [uint32](#uint32) | optional | Max Frequency. |
| naturalFreqMaxUnits | [string](#string) | optional | Max Frequency units. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units. |






<a name="-UpdateNaturalFrequencyPropsRequest"></a>

## UpdateNaturalFrequencyPropsRequest

Request to update natural frequency analysis properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| ccaName | [string](#string) |  | CCA name. |
| naturalFreqCount | [int32](#int32) |  | NF Result Count. |
| naturalFreqMin | [double](#double) |  | Min Frequency. |
| naturalFreqMinUnits | [string](#string) |  | Min Frequency units (HZ, KHZ, MHZ, or GHZ). |
| naturalFreqMax | [double](#double) |  | Max Frequency. |
| naturalFreqMaxUnits | [string](#string) |  | Max Frequency units (HZ, KHZ, MHZ, or GHZ). |
| partValidationEnabled | [bool](#bool) |  | Part Validation. |
| requireMaterialAssignmentEnabled | [bool](#bool) |  | Require Material Assignment. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units (C, F, or K). |






<a name="-UpdatePartModelingRequest"></a>

## UpdatePartModelingRequest

Request to update FEA part modeling properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| partEnabled | [bool](#bool) |  | Whether to enable part modeling. Ignores all other fields if part modeling is disabled. |
| partMinSize | [double](#double) | optional | The minimum part size. |
| partMinSizeUnits | [string](#string) | optional | Units for minimum part size. |
| partElemOrder | [string](#string) | optional | Element order. |
| partMaxEdgeLength | [double](#double) | optional | Maximum mesh size. |
| partMaxEdgeLengthUnits | [string](#string) | optional | Units for maximum mesh size. |
| partMaxVertical | [double](#double) | optional | Vertical mesh size. |
| partMaxVerticalUnits | [string](#string) | optional | Units for vertical mesh size. |
| partResultsFiltered | [bool](#bool) | optional | Whether to enable filtered part results. |






<a name="-UpdatePartsListValidationPropsRequest"></a>

## UpdatePartsListValidationPropsRequest

Request to update the Parts List Validation properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| partsListValidationProperties | [UpdatePartsListValidationPropsRequest.PartsListValidation](#UpdatePartsListValidationPropsRequest-PartsListValidation) | repeated | Properties for each CCA in the project. |






<a name="-UpdatePartsListValidationPropsRequest-PartsListValidation"></a>

## UpdatePartsListValidationPropsRequest.PartsListValidation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| partLibrary | [string](#string) | optional | Part library name. |
| processUseAVL | [bool](#bool) | optional | Process option to use AVL. |
| processUseWizard | [bool](#bool) | optional | Process option to use Wizard. |
| processCheckConfirmedProperties | [bool](#bool) | optional | Process option to check confirmed properties. |
| processCheckPartNumbers | [bool](#bool) | optional | Process option to check part numbers. |
| matching | [MatchingMode](#MatchingMode) | optional | Matching type. |
| avlRequireInternalPartNumber | [bool](#bool) | optional | AVL require internal part number. |
| avlRequireApprovedDescription | [bool](#bool) | optional | AVL require approved description. |
| avlRequireApprovedManufacturer | [bool](#bool) | optional | AVL require approved manufacturer. |






<a name="-UpdatePcbModelingPropsRequest"></a>

## UpdatePcbModelingPropsRequest

Request to update FEA analysis PCB Modeling properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaNames | [string](#string) | repeated | The CCA names for which to assign the PCB modeling parameters. |
| analyses | [UpdatePcbModelingPropsRequest.Analysis](#UpdatePcbModelingPropsRequest-Analysis) | repeated | List of Analysis message types. |






<a name="-UpdatePcbModelingPropsRequest-Analysis"></a>

## UpdatePcbModelingPropsRequest.Analysis



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [UpdatePcbModelingPropsRequest.Analysis.AnalysisType](#UpdatePcbModelingPropsRequest-Analysis-AnalysisType) |  | The type of analysis for which PCB modeling properties apply. |
| modelType | [UpdatePcbModelingPropsRequest.Analysis.PcbModelType](#UpdatePcbModelingPropsRequest-Analysis-PcbModelType) |  | The PCB modeling mesh type. |
| modelingRegionEnabled | [bool](#bool) |  | Indicates if modeling regions are enabled. |
| pcbMaterialModel | [UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel](#UpdatePcbModelingPropsRequest-Analysis-PcbMaterialModel) |  | The PCB modeling PCB model type. |
| pcbMaxMaterials | [int32](#int32) | optional | The number of PCB materials for Uniform Elements and Layered Elements PCB model types. |
| pcbElemOrder | [ElementOrder](#ElementOrder) |  | The element order for PCB elements. |
| pcbMaxEdgeLength | [double](#double) |  | The maximum mesh size for PCB elements. |
| pcbMaxEdgeLengthUnits | [string](#string) |  | The length units for the maximum mesh size. |
| pcbMaxVertical | [double](#double) |  | The maximum vertical mesh size for PCB elements. |
| pcbMaxVerticalUnits | [string](#string) |  | The length units for the maximum vertical mesh size. |
| quadsPreferred | [bool](#bool) |  | Indicates that the meshing engine should attempt to generate quad-shaped elements when creating the mesh. |






<a name="-UpdateRandomVibePropsRequest"></a>

## UpdateRandomVibePropsRequest

Request to update random vibe analysis properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| ccaName | [string](#string) |  | CCA name. |
| randomVibeDamping | [string](#string) | optional | Modal Damping Ratio(s). |
| naturalFreqMin | [double](#double) | optional | Min Frequency. For NX Nastran analysis only. |
| naturalFreqMinUnits | [string](#string) | optional | Min Frequency units. For NX Nastran analysis only. |
| naturalFreqMax | [double](#double) | optional | Max Frequency. For NX Nastran analysis only. |
| naturalFreqMaxUnits | [string](#string) | optional | Max Frequency units. For NX Nastran analysis only. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units. |
| partValidationEnabled | [bool](#bool) | optional | Part Validation. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are &#34;FORCE&#34; or &#34;AUTO&#34;. |
| reuseModalAnalysis | [bool](#bool) | optional | Reuse Natural Frequency. For NX Nastran analysis only. |
| performNFFreqRangeCheck | [bool](#bool) | optional | Frequency Range Check. For NX Nastran analysis only. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Require Material Assignment. |
| modelSource | [ModelSource](#ModelSource) | optional | Optional model source. Default: GENERATED. |
| strainMapNaturalFreqs | [string](#string) | optional | Comma-separated list of natural frequencies for strain map analysis. |






<a name="-UpdateSolderFatiguePropsRequest"></a>

## UpdateSolderFatiguePropsRequest

Request to update solder fatigue properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| solderFatigueProperties | [UpdateSolderFatiguePropsRequest.SolderFatigue](#UpdateSolderFatiguePropsRequest-SolderFatigue) | repeated | List of SolderFatigue properties to update for a CCA. |






<a name="-UpdateSolderFatiguePropsRequest-SolderFatigue"></a>

## UpdateSolderFatiguePropsRequest.SolderFatigue



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| solderMaterial | [string](#string) | optional | Name of the solder material. |
| partTemp | [double](#double) | optional | Part temperature rise. |
| partTempUnits | [string](#string) | optional | Part temperature rise units. |
| partTempRiseMinEnabled | [bool](#bool) | optional | Flag indicating if part temperature minimum rise should be enabled. |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |






<a name="-UpdateThermalMechPropsRequest"></a>

## UpdateThermalMechPropsRequest

Request to update thermal mech analysis properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| ccaName | [string](#string) | repeated | CCA names. |
| thermalResultCount | [int32](#int32) |  | Thermal Mech Result Count. |
| partValidationEnabled | [bool](#bool) |  | Part Validation. |
| requireMaterialAssignmentEnabled | [bool](#bool) |  | Require Material Assignment. |





 


<a name="-ElementOrder"></a>

## ElementOrder

Enumeration defining the types of supported element orders.

| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownOrder | 0 | Default enum to catch invalid element order. |
| Linear | 1 | Enum for first order linear elements. |
| Quadratic | 2 | Enum for second order quadratic elements. |
| SolidShell | 3 | Enum for solid shell elements. |



<a name="-ModelSource"></a>

## ModelSource


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Default enum to catch invalid source. |
| GENERATED | 1 | Generated analysis model source. |
| STRAIN_MAP | 2 | Strain map analysis model source. |



<a name="-RunAnalysisRequest-Analysis-AnalysisType"></a>

## RunAnalysisRequest.Analysis.AnalysisType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Default enum to catch invalid analysis. |
| NaturalFreq | 1 | Enum for the Natural Frequency analysis. |
| HarmonicVibe | 2 | Enum for the Harmonic Vibe analysis. |
| ICTAnalysis | 3 | Enum for the ICT analysis. |
| MechanicalShock | 4 | Enum for the Mechanical Shock analysis. |
| RandomVibe | 5 | Enum for the Random Vibe analysis. |
| ComponentFailureMode | 7 | Enum for the Component Failure Mechanism analysis. |
| DFMEAModule | 8 | Enum for the DFMEA analysis. |
| PTHFatigue | 9 | Enum for the PTH Fatigue analysis. |
| PartValidation | 10 | Enum for the Part Validation analysis. |
| SemiconductorWearout | 11 | Enum for the Semiconductor Wearout analysis. |
| SolderJointFatigue | 12 | Enum for the Solder Fatigue analysis. |
| ThermalDerating | 13 | Enum for the Thermal Derating analysis. |
| ThermalMech | 14 | Enum for the Thermal Mech analysis. |



<a name="-RunStrainMapAnalysisRequest-StrainMapAnalysis-AnalysisType"></a>

## RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Default enum to catch invalid analysis. |
| RandomVibe | 1 | Enum for the Random Vibe analysis. |
| MechanicalShock | 2 | Enum for Mechanical Shock analysis. |



<a name="-UpdatePcbModelingPropsRequest-Analysis-AnalysisType"></a>

## UpdatePcbModelingPropsRequest.Analysis.AnalysisType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownAnalysisType | 0 | Default enum to catch invalid analysis. |
| HarmonicVibe | 1 | Enum for the Harmonic Vibe analysis. |
| ICTAnalysis | 2 | Enum for the ICT analysis. |
| MechanicalShock | 3 | Enum for the Mechanical Shock analysis. |
| NaturalFreq | 4 | Enum for the Natural Frequency analysis. |
| RandomVibe | 5 | Enum for the Random Vibe analysis. |
| ThermalMech | 6 | Enum for the Thermal Mech analysis. |



<a name="-UpdatePcbModelingPropsRequest-Analysis-PcbMaterialModel"></a>

## UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel


| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownPcbModel | 0 | Default enum to catch invalid PCB model. |
| Uniform | 1 | Enum for uniform PCB model. |
| Layered | 2 | Enum for layered PCB model. |
| UniformElements | 3 | Enum for uniform elements PCB model. |
| LayeredElements | 4 | Enum for layered elements PCB model. |



<a name="-UpdatePcbModelingPropsRequest-Analysis-PcbModelType"></a>

## UpdatePcbModelingPropsRequest.Analysis.PcbModelType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownMeshType | 0 | Default enum to catch invalid mesh type. |
| Bonded | 1 | Bonded FEA model. |


 

 


<a name="-SherlockAnalysisService"></a>

## SherlockAnalysisService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| runAnalysis | [.RunAnalysisRequest](#RunAnalysisRequest) | [.ReturnCode](#ReturnCode) | Runs one or more Sherlock analysis. |
| runStrainMapAnalysis | [.RunStrainMapAnalysisRequest](#RunStrainMapAnalysisRequest) | [.ReturnCode](#ReturnCode) | Run Sherlock strain map analysis. |
| getHarmonicVibeInputFields | [.GetHarmonicVibeInputFieldsRequest](#GetHarmonicVibeInputFieldsRequest) | [.GetHarmonicVibeInputFieldsResponse](#GetHarmonicVibeInputFieldsResponse) | Returns the list of valid harmonic vibe input fields for the provided model source and user configuration. |
| updateHarmonicVibeProps | [.UpdateHarmonicVibePropsRequest](#UpdateHarmonicVibePropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for harmonic vibe analysis. |
| getRandomVibeInputFields | [.GetRandomVibeInputFieldsRequest](#GetRandomVibeInputFieldsRequest) | [.GetRandomVibeInputFieldsResponse](#GetRandomVibeInputFieldsResponse) | Returns the list of valid Random Vibe input fields for the provided model source and user configuration. |
| updateRandomVibeProps | [.UpdateRandomVibePropsRequest](#UpdateRandomVibePropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for random vibe analysis. |
| getMechanicalShockInputFields | [.GetMechanicalShockInputFieldsRequest](#GetMechanicalShockInputFieldsRequest) | [.GetMechanicalShockInputFieldsResponse](#GetMechanicalShockInputFieldsResponse) | Returns the list of valid mechanical shock input fields for the provided model source and user configuration. |
| updateMechanicalShockProps | [.UpdateMechanicalShockPropsRequest](#UpdateMechanicalShockPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for mechanical shock analysis. |
| updateSolderFatigueProps | [.UpdateSolderFatiguePropsRequest](#UpdateSolderFatiguePropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for solder fatigue analysis. |
| getNaturalFrequencyInputFields | [.GetNaturalFrequencyInputFieldsRequest](#GetNaturalFrequencyInputFieldsRequest) | [.GetNaturalFrequencyInputFieldsResponse](#GetNaturalFrequencyInputFieldsResponse) | Returns the list of valid natural frequency property fields given the user configuration. |
| updateNaturalFrequencyProps | [.UpdateNaturalFrequencyPropsRequest](#UpdateNaturalFrequencyPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for natural frequency analysis. |
| updateThermalMechProps | [.UpdateThermalMechPropsRequest](#UpdateThermalMechPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for thermal mech analysis. |
| getPcbModelingInputFields | [.GetPcbModelingInputFieldsRequest](#GetPcbModelingInputFieldsRequest) | [.GetPcbModelingInputFieldsResponse](#GetPcbModelingInputFieldsResponse) | Returns the list of valid PCB modeling property field. |
| updatePcbModelingProps | [.UpdatePcbModelingPropsRequest](#UpdatePcbModelingPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the PCB modeling properties for the provided analysis types. |
| getSolderFatigueInputFields | [.GetSolderFatigueInputFieldsRequest](#GetSolderFatigueInputFieldsRequest) | [.GetSolderFatigueInputFieldsResponse](#GetSolderFatigueInputFieldsResponse) | Returns the list of valid solder fatigue property fields given the user configuration. |
| updatePartModelingProperties | [.UpdatePartModelingRequest](#UpdatePartModelingRequest) | [.ReturnCode](#ReturnCode) | Updates the part modeling properties for a given project&#39;s CCA. |
| getICTAnalysisInputFields | [.GetICTAnalysisInputFieldsRequest](#GetICTAnalysisInputFieldsRequest) | [.GetICTAnalysisInputFieldsResponse](#GetICTAnalysisInputFieldsResponse) | Returns the list of valid ICT analysis property fields given the user configuration. |
| updateICTAnalysisProps | [.UpdateICTAnalysisPropsRequest](#UpdateICTAnalysisPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for ICT analysis. |
| updatePartsListValidationProps | [.UpdatePartsListValidationPropsRequest](#UpdatePartsListValidationPropsRequest) | [.ReturnCode](#ReturnCode) | Updates the analysis properties for part list validation analysis. |

 



<a name="SherlockCommonService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

