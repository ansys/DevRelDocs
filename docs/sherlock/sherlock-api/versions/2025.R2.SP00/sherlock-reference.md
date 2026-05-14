# Reference documentation



Back to [Top](#table-of-contents)
 
## SherlockAnalysisService.proto
 
@Copyright 2023-2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

### GetHarmonicVibeInputFieldsRequest
 
Request to list the valid harmonic vibe input fields for the provided model source and user configuration.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modelSource | [ModelSource](#modelsource) | optional | Optional model source. Default: GENERATED. |

### GetHarmonicVibeInputFieldsResponse
 
Response that includes the valid harmonic vibe input fields.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Harmonic Vibe input fields. |

### GetICTAnalysisInputFieldsRequest
 
Request to list the valid ICT analysis input fields given the user configuration.
 

### GetICTAnalysisInputFieldsResponse
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of ICT Analysis input fields. |

### GetMechanicalShockInputFieldsRequest
 
Request to list the valid mechanical shock input fields for the provided model source and user configuration.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modelSource | [ModelSource](#modelsource) | optional | Optional model source. Default: GENERATED. |

### GetMechanicalShockInputFieldsResponse
 
Response that includes the valid mechanical shock input fields.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Mechanical Shock input fields for a model source. |

### GetNaturalFrequencyInputFieldsRequest
 
Request to list the valid natural frequency input fields given the user configuration.
 

### GetNaturalFrequencyInputFieldsResponse
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Natural Frequency input fields. |

### GetPartsListValidationPropsRequest
 
Request to retrieve the parts list validation properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| ccaName | [string](#string) |  | The CCA name. |

### GetPcbModelingInputFieldsRequest
 
Request to list the valid PCB Modeling input fields given the user configuration.
 

### GetPcbModelingInputFieldsResponse
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Pcb Modeling input fields. |

### GetRandomVibeInputFieldsRequest
 
Request to list the valid random vibe input fields for the provided model source and user configuration.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modelSource | [ModelSource](#modelsource) | optional | Optional model source. Default: GENERATED. |

### GetRandomVibeInputFieldsResponse
 
Response that includes the valid random vibe input fields.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Random Vibe input fields. |

### GetSolderFatigueInputFieldsRequest
 
Request to list the valid solder fatigue input fields given the user configuration.
 

### GetSolderFatigueInputFieldsResponse
 
Response that includes the valid solder fatigue input fields.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fieldName | [string](#string) | repeated | List of Solder Fatigue input fields. |

### PartsListValidationPropsResponse
 
Response that includes parts list validation properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| partLibrary | [string](#string) |  | Part library name. |
| processUseAVL | [bool](#bool) |  | Process option to use AVL. |
| processUseWizard | [bool](#bool) |  | Process option to use wizard. |
| processCheckConfirmedProperties | [bool](#bool) |  | Process option to check confirmed properties. |
| processCheckPartNumbers | [bool](#bool) |  | Process option to check part numbers. |
| matching | [MatchingMode](#matchingmode) |  | Matching type. |
| avlRequireInternalPartNumber | [bool](#bool) |  | AVL option to require internal part number. |
| avlRequireApprovedDescription | [bool](#bool) |  | AVL option to require approved description. |
| avlRequireApprovedManufacturer | [bool](#bool) |  | AVL option to require approved manufacturer. |

### RunAnalysisRequest
 
Request to run one or more Sherlock analysis given the project path, CCA name, analyses, lifecycle phases and events.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| analyses | [RunAnalysisRequest.Analysis](#runanalysisrequestanalysis) | repeated | List of Analyses to run. |

### RunAnalysisRequest.Analysis
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [RunAnalysisRequest.Analysis.AnalysisType](#runanalysisrequestanalysisanalysistype) |  | Type of Analysis to run. |
| phases | [RunAnalysisRequest.Analysis.Phase](#runanalysisrequestanalysisphase) | repeated | List of Phases for each Analysis to run. |

### RunAnalysisRequest.Analysis.Phase
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle phase name. |
| events | [RunAnalysisRequest.Analysis.Phase.Event](#runanalysisrequestanalysisphaseevent) | repeated | List of life cycle Events. |

### RunAnalysisRequest.Analysis.Phase.Event
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle event name. |

### RunStrainMapAnalysisRequest
 
Request to run Sherlock strain map analysis given the project name, CCA name, and strain maps.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name of the main CCA for the analysis. |
| strainMapAnalyses | [RunStrainMapAnalysisRequest.StrainMapAnalysis](#runstrainmapanalysisrequeststrainmapanalysis) | repeated | List of Strain Map Analyses to run. |

### RunStrainMapAnalysisRequest.StrainMapAnalysis
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType](#runstrainmapanalysisrequeststrainmapanalysisanalysistype) |  | Type of Strain Map analysis to run. |
| eventStrainMaps | [RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap](#runstrainmapanalysisrequeststrainmapanalysiseventstrainmap) | repeated | List of Strain Map events to run. |

### RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | Life cycle phase name. |
| eventName | [string](#string) |  | Life cycle event name. |
| pcbSide | [string](#string) |  | PCB side for the strain map. Supported values are: TOP, BOTTOM. |
| strainMap | [string](#string) |  | Strain map assigned to the event. |
| subAssemblyName | [string](#string) | optional | The name of the sub-assembly CCA to be assigned the strain map. |

### UpdateComponentFailureMechanismPropsRequest
 
Request to update the component failure mechanism properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| componentFailureMechanismProperties | [UpdateComponentFailureMechanismPropsRequest.ComponentFailureMechanism](#updatecomponentfailuremechanismpropsrequestcomponentfailuremechanism) | repeated | Properties for each CCA in the project. |

### UpdateComponentFailureMechanismPropsRequest.ComponentFailureMechanism
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| defaultPartTempRise | [double](#double) | optional | Default part temperature rise. |
| defaultPartTempRiseUnits | [string](#string) | optional | Default part temperature rise units. |
| partTempRiseMinEnabled | [bool](#bool) | optional | Whether part temperature rise value is applied to the minimum temperature defined in the thermal cycle. |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |

### UpdateHarmonicVibePropsRequest
 
Request to update the harmonic vibe analysis properties for one or more CCA's
in the project indicated.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| harmonicVibeProperties | [UpdateHarmonicVibePropsRequest.HarmonicVibe](#updateharmonicvibepropsrequestharmonicvibe) | repeated | List of HarmonicVibe analysis properties to update. |

### UpdateHarmonicVibePropsRequest.HarmonicVibe
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | CCA name for which the harmonic vibe properties are set. |
| modelSource | [ModelSource](#modelsource) | optional | Optional model source. Default: GENERATED. |
| harmonicVibeCount | [int32](#int32) | optional | Number of harmonic result layers to generate. |
| harmonicVibeDamping | [string](#string) | optional | Modal Damping Ratio(s). |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Flag indicating if material assignment is required. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are "FORCE" or "AUTO". |
| filterByEventFrequency | [bool](#bool) | optional | Flag indicating if harmonic results outside selected event range are imported. |
| naturalFreqMin | [uint32](#uint32) | optional | Min Frequency. For NX Nastran analysis only. |
| naturalFreqMinUnits | [string](#string) | optional | Min Frequency units. For NX Nastran analysis only. |
| naturalFreqMax | [uint32](#uint32) | optional | Max Frequency. For NX Nastran analysis only. |
| naturalFreqMaxUnits | [string](#string) | optional | Max Frequency units. For NX Nastran analysis only. |
| reuseModalAnalysis | [bool](#bool) | optional | Reuse Natural Frequency. For NX Nastran analysis only. |
| strainMapNaturalFreq | [double](#double) | optional | Maximum Natural Frequency used for strain map analysis. |

### UpdateICTAnalysisPropsRequest
 
Request to update ICT Analysis properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| ictAnalysisProperties | [UpdateICTAnalysisPropsRequest.ICTAnalysis](#updateictanalysispropsrequestictanalysis) | repeated | List of ICTAnalysis properties to update for each CCA in a project. |

### UpdateICTAnalysisPropsRequest.ICTAnalysis
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| applicationTime | [double](#double) | optional | Application Time. |
| applicationTimeUnits | [string](#string) | optional | Application Time Units. |
| numberOfEvents | [uint32](#uint32) | optional | Number of Events. |
| partValidationEnabled | [bool](#bool) | optional | Part Validation. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Flag indicating if material assignment is required. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are "FORCE" or "AUTO". |
| ictResultCount | [int32](#int32) | optional | Number of ICT layers to generate when using thermal analysis. |

### UpdateMechanicalShockPropsRequest
 
Request to update the mechanical shock analysis properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| mechanicalShockProperties | [UpdateMechanicalShockPropsRequest.MechanicalShock](#updatemechanicalshockpropsrequestmechanicalshock) | repeated | List of MechanicalShock properties to update. |

### UpdateMechanicalShockPropsRequest.MechanicalShock
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| modelSource | [ModelSource](#modelsource) | optional | Default is GENERATED. |
| shockResultCount | [int32](#int32) | optional | Mechanical Shock Result Count. |
| criticalShockStrain | [double](#double) | optional | Critical Shock Strain. |
| criticalShockStrainUnits | [string](#string) | optional | Critical Shock Strain units. |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Flag indicating if material assignment is required. |
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are "FORCE" or "AUTO". |
| naturalFreqMin | [uint32](#uint32) | optional | Min Frequency. |
| naturalFreqMinUnits | [string](#string) | optional | Min Frequency units. |
| naturalFreqMax | [uint32](#uint32) | optional | Max Frequency. |
| naturalFreqMaxUnits | [string](#string) | optional | Max Frequency units. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units. |

### UpdateNaturalFrequencyPropsRequest
 
Request to update natural frequency analysis properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| ccaName | [string](#string) |  | CCA name. |
| naturalFreqCount | [int32](#int32) |  | NF Result Count. |
| naturalFreqMin | [double](#double) |  | Min Frequency. IMPORTANT: Only Integer values will be accepted for this field. Decimal values will be rejected in the API. |
| naturalFreqMinUnits | [string](#string) |  | Min Frequency units (HZ, KHZ, MHZ, or GHZ). |
| naturalFreqMax | [double](#double) |  | Max Frequency. IMPORTANT: Only Integer values will be accepted for this field. Decimal values will be rejected in the API. |
| naturalFreqMaxUnits | [string](#string) |  | Max Frequency units (HZ, KHZ, MHZ, or GHZ). |
| partValidationEnabled | [bool](#bool) |  | Part Validation. |
| requireMaterialAssignmentEnabled | [bool](#bool) |  | Require Material Assignment. |
| analysisTemp | [double](#double) | optional | Temperature. |
| analysisTempUnits | [string](#string) | optional | Temperature units (C, F, or K). |

### UpdatePTHFatiguePropsRequest
 
Request to update Plated Through Hole Analysis properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| pthFatigueAnalysisProperties | [UpdatePTHFatiguePropsRequest.PTHFatigueAnalysis](#updatepthfatiguepropsrequestpthfatigueanalysis) | repeated | List of PTHFatigueAnalysis properties to update for each CCA in a project. |

### UpdatePTHFatiguePropsRequest.PTHFatigueAnalysis
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| qualification | [UpdatePTHFatiguePropsRequest.PTHFatigueAnalysis.Qualification](#updatepthfatiguepropsrequestpthfatigueanalysisqualification) | optional | Qualification choice for IST/HATS. |
| pthQualityFactor | [string](#string) | optional | Quality factor for PTH. |
| pthWallThickness | [double](#double) | optional | Wall thickness of PTH. |
| pthWallThicknessUnits | [string](#string) | optional | Units for PTH wall thickness. |
| minHoleSize | [double](#double) | optional | Minimum hole size. |
| minHoleSizeUnits | [string](#string) | optional | Units for minimum hole size. |
| maxHoleSize | [double](#double) | optional | Maximum hole size. |
| maxHoleSizeUnits | [string](#string) | optional | Units for maximum hole size. |

### UpdatePartModelingRequest
 
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

### UpdatePartsListValidationPropsRequest
 
Request to update the parts list validation properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| partsListValidationProperties | [UpdatePartsListValidationPropsRequest.PartsListValidation](#updatepartslistvalidationpropsrequestpartslistvalidation) | repeated | Properties for each CCA in the project. |

### UpdatePartsListValidationPropsRequest.PartsListValidation
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| partLibrary | [string](#string) | optional | Part library name. |
| processUseAVL | [bool](#bool) | optional | Process option to use AVL. |
| processUseWizard | [bool](#bool) | optional | Process option to use wizard. |
| processCheckConfirmedProperties | [bool](#bool) | optional | Process option to check confirmed properties. |
| processCheckPartNumbers | [bool](#bool) | optional | Process option to check part numbers. |
| matching | [MatchingMode](#matchingmode) | optional | Matching type. |
| avlRequireInternalPartNumber | [bool](#bool) | optional | AVL require internal part number. |
| avlRequireApprovedDescription | [bool](#bool) | optional | AVL require approved description. |
| avlRequireApprovedManufacturer | [bool](#bool) | optional | AVL require approved manufacturer. |

### UpdatePcbModelingPropsRequest
 
Request to update FEA analysis PCB Modeling properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaNames | [string](#string) | repeated | The CCA names for which to assign the PCB modeling parameters. |
| analyses | [UpdatePcbModelingPropsRequest.Analysis](#updatepcbmodelingpropsrequestanalysis) | repeated | List of Analysis message types. |

### UpdatePcbModelingPropsRequest.Analysis
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [UpdatePcbModelingPropsRequest.Analysis.AnalysisType](#updatepcbmodelingpropsrequestanalysisanalysistype) |  | The type of analysis for which PCB modeling properties apply. |
| modelType | [UpdatePcbModelingPropsRequest.Analysis.PcbModelType](#updatepcbmodelingpropsrequestanalysispcbmodeltype) |  | The PCB modeling mesh type. |
| modelingRegionEnabled | [bool](#bool) |  | Indicates if modeling regions are enabled. |
| pcbMaterialModel | [UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel](#updatepcbmodelingpropsrequestanalysispcbmaterialmodel) |  | The PCB modeling PCB model type. |
| pcbMaxMaterials | [int32](#int32) | optional | The number of PCB materials for Uniform Elements and Layered Elements PCB model types. |
| pcbElemOrder | [ElementOrder](#elementorder) |  | The element order for PCB elements. |
| pcbMaxEdgeLength | [double](#double) |  | The maximum mesh size for PCB elements. |
| pcbMaxEdgeLengthUnits | [string](#string) |  | The length units for the maximum mesh size. |
| pcbMaxVertical | [double](#double) |  | The maximum vertical mesh size for PCB elements. |
| pcbMaxVerticalUnits | [string](#string) |  | The length units for the maximum vertical mesh size. |
| quadsPreferred | [bool](#bool) |  | Indicates that the meshing engine should attempt to generate quad-shaped elements when creating the mesh. |

### UpdateRandomVibePropsRequest
 
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
| forceModelRebuild | [string](#string) | optional | Model Creation. Valid values are "FORCE" or "AUTO". |
| reuseModalAnalysis | [bool](#bool) | optional | Reuse Natural Frequency. For NX Nastran analysis only. |
| performNFFreqRangeCheck | [bool](#bool) | optional | Frequency Range Check. For NX Nastran analysis only. |
| requireMaterialAssignmentEnabled | [bool](#bool) | optional | Require Material Assignment. |
| modelSource | [ModelSource](#modelsource) | optional | Optional model source. Default: GENERATED. |
| strainMapNaturalFreqs | [string](#string) | optional | Comma-separated list of natural frequencies for strain map analysis. |

### UpdateSemiconductorWearoutAnalysisPropsRequest
 
Request to update Semiconductor Wearout Analysis properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| semiconductorWearoutAnalysisProperties | [UpdateSemiconductorWearoutAnalysisPropsRequest.SemiconductorWearoutAnalysis](#updatesemiconductorwearoutanalysispropsrequestsemiconductorwearoutanalysis) | repeated | List of SemiconductorWearoutAnalysis properties to update for each CCA in a project. |

### UpdateSemiconductorWearoutAnalysisPropsRequest.SemiconductorWearoutAnalysis
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| maxFeatureSize | [double](#double) | optional | Maximum feature size. |
| maxFeatureSizeUnits | [string](#string) | optional | Maximum feature size units. |
| partTempRise | [double](#double) | optional | Part temperature rise. |
| partTempRiseUnits | [string](#string) | optional | Part temperature rise units. |
| partTempRiseMinEnabled | [bool](#bool) | optional | Whether part temperature rise value is applied to the minimum temperature defined in the thermal cycle. |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |

### UpdateSolderFatiguePropsRequest
 
Request to update solder fatigue properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock Project name. |
| solderFatigueProperties | [UpdateSolderFatiguePropsRequest.SolderFatigue](#updatesolderfatiguepropsrequestsolderfatigue) | repeated | List of SolderFatigue properties to update for a CCA. |

### UpdateSolderFatiguePropsRequest.SolderFatigue
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| solderMaterial | [string](#string) | optional | Name of the solder material. |
| partTemp | [double](#double) | optional | Part temperature rise. |
| partTempUnits | [string](#string) | optional | Part temperature rise units. |
| partTempRiseMinEnabled | [bool](#bool) | optional | Whether part temperature rise value is applied to the minimum temperature defined in the thermal cycle. |
| partValidationEnabled | [bool](#bool) | optional | Flag indicating if part validation should be performed. |

### UpdateThermalMechPropsRequest
 
Request to update thermal mech analysis properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name. |
| ccaName | [string](#string) | repeated | CCA names. |
| thermalResultCount | [int32](#int32) |  | Thermal Mech Result Count. |
| partValidationEnabled | [bool](#bool) |  | Part Validation. |
| requireMaterialAssignmentEnabled | [bool](#bool) |  | Require Material Assignment. |


### ElementOrder
 
Enumeration defining the types of supported element orders.
 
| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownOrder | 0 | Default enum to catch invalid element order. |
| Linear | 1 | Enum for first order linear elements. |
| Quadratic | 2 | Enum for second order quadratic elements. |
| SolidShell | 3 | Enum for solid shell elements. |

### ModelSource
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Default enum to catch invalid source. |
| GENERATED | 1 | Generated analysis model source. |
| STRAIN_MAP | 2 | Strain map analysis model source. |

### RunAnalysisRequest.Analysis.AnalysisType
 

 
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

### RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Default enum to catch invalid analysis. |
| RandomVibe | 1 | Enum for the Random Vibe analysis. |
| MechanicalShock | 2 | Enum for Mechanical Shock analysis. |
| HarmonicVibe | 3 | Enum for the Harmonic Vibe analysis. |

### UpdatePTHFatiguePropsRequest.PTHFatigueAnalysis.Qualification
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 | No qualification. |
| PER_LOT | 1 | Qualification per lot. |
| PRODUCT | 2 | Qualification by product. |
| SUPPLIER | 3 | Qualification by supplier. |

### UpdatePcbModelingPropsRequest.Analysis.AnalysisType
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownAnalysisType | 0 | Default enum to catch invalid analysis. |
| HarmonicVibe | 1 | Enum for the Harmonic Vibe analysis. |
| ICTAnalysis | 2 | Enum for the ICT analysis. |
| MechanicalShock | 3 | Enum for the Mechanical Shock analysis. |
| NaturalFreq | 4 | Enum for the Natural Frequency analysis. |
| RandomVibe | 5 | Enum for the Random Vibe analysis. |
| ThermalMech | 6 | Enum for the Thermal Mech analysis. |

### UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownPcbModel | 0 | Default enum to catch invalid PCB model. |
| Uniform | 1 | Enum for uniform PCB model. |
| Layered | 2 | Enum for layered PCB model. |
| UniformElements | 3 | Enum for uniform elements PCB model. |
| LayeredElements | 4 | Enum for layered elements PCB model. |

### UpdatePcbModelingPropsRequest.Analysis.PcbModelType
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| UnknownMeshType | 0 | Default enum to catch invalid mesh type. |
| Bonded | 1 | Bonded FEA model. |


### SherlockAnalysisService
 

 
| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| runAnalysis | [.RunAnalysisRequest](#runanalysisrequest) | [.ReturnCode](#returncode) | Runs one or more Sherlock analysis. |
| runStrainMapAnalysis | [.RunStrainMapAnalysisRequest](#runstrainmapanalysisrequest) | [.ReturnCode](#returncode) | Run Sherlock strain map analysis. |
| getHarmonicVibeInputFields | [.GetHarmonicVibeInputFieldsRequest](#getharmonicvibeinputfieldsrequest) | [.GetHarmonicVibeInputFieldsResponse](#getharmonicvibeinputfieldsresponse) | Returns the list of valid harmonic vibe input fields for the provided model source and user configuration. |
| updateHarmonicVibeProps | [.UpdateHarmonicVibePropsRequest](#updateharmonicvibepropsrequest) | [.ReturnCode](#returncode) | Updates the analysis properties for harmonic vibe analysis. |
| getRandomVibeInputFields | [.GetRandomVibeInputFieldsRequest](#getrandomvibeinputfieldsrequest) | [.GetRandomVibeInputFieldsResponse](#getrandomvibeinputfieldsresponse) | Returns the list of valid Random Vibe input fields for the provided model source and user configuration. |
| updateRandomVibeProps | [.UpdateRandomVibePropsRequest](#updaterandomvibepropsrequest) | [.ReturnCode](#returncode) | Updates the analysis properties for random vibe analysis. |
| getMechanicalShockInputFields | [.GetMechanicalShockInputFieldsRequest](#getmechanicalshockinputfieldsrequest) | [.GetMechanicalShockInputFieldsResponse](#getmechanicalshockinputfieldsresponse) | Returns the list of valid mechanical shock input fields for the provided model source and user configuration. |
| updateMechanicalShockProps | [.UpdateMechanicalShockPropsRequest](#updatemechanicalshockpropsrequest) | [.ReturnCode](#returncode) | Updates the analysis properties for mechanical shock analysis. |
| updateSolderFatigueProps | [.UpdateSolderFatiguePropsRequest](#updatesolderfatiguepropsrequest) | [.ReturnCode](#returncode) | Updates the analysis properties for solder fatigue analysis. |
| getNaturalFrequencyInputFields | [.GetNaturalFrequencyInputFieldsRequest](#getnaturalfrequencyinputfieldsrequest) | [.GetNaturalFrequencyInputFieldsResponse](#getnaturalfrequencyinputfieldsresponse) | Returns the list of valid natural frequency property fields given the user configuration. |
| updateNaturalFrequencyProps | [.UpdateNaturalFrequencyPropsRequest](#updatenaturalfrequencypropsrequest) | [.ReturnCode](#returncode) | Updates the analysis properties for natural frequency analysis. |
| updateThermalMechProps | [.UpdateThermalMechPropsRequest](#updatethermalmechpropsrequest) | [.ReturnCode](#returncode) | Updates the analysis properties for thermal mech analysis. |
| getPcbModelingInputFields | [.GetPcbModelingInputFieldsRequest](#getpcbmodelinginputfieldsrequest) | [.GetPcbModelingInputFieldsResponse](#getpcbmodelinginputfieldsresponse) | Returns the list of valid PCB modeling property field. |
| updatePcbModelingProps | [.UpdatePcbModelingPropsRequest](#updatepcbmodelingpropsrequest) | [.ReturnCode](#returncode) | Updates the PCB modeling properties for the provided analysis types. |
| getSolderFatigueInputFields | [.GetSolderFatigueInputFieldsRequest](#getsolderfatigueinputfieldsrequest) | [.GetSolderFatigueInputFieldsResponse](#getsolderfatigueinputfieldsresponse) | Returns the list of valid solder fatigue property fields given the user configuration. |
| updatePartModelingProperties | [.UpdatePartModelingRequest](#updatepartmodelingrequest) | [.ReturnCode](#returncode) | Updates the part modeling properties for a given project's CCA. |
| getICTAnalysisInputFields | [.GetICTAnalysisInputFieldsRequest](#getictanalysisinputfieldsrequest) | [.GetICTAnalysisInputFieldsResponse](#getictanalysisinputfieldsresponse) | Returns the list of valid ICT analysis property fields given the user configuration. |
| updateICTAnalysisProps | [.UpdateICTAnalysisPropsRequest](#updateictanalysispropsrequest) | [.ReturnCode](#returncode) | Updates the analysis properties for ICT analysis. |
| updatePartsListValidationProps | [.UpdatePartsListValidationPropsRequest](#updatepartslistvalidationpropsrequest) | [.ReturnCode](#returncode) | Updates the analysis properties for parts list validation analysis. |
| getPartsListValidationProps | [.GetPartsListValidationPropsRequest](#getpartslistvalidationpropsrequest) | [.PartsListValidationPropsResponse](#partslistvalidationpropsresponse) | Returns the parts list validation properties. |
| updateComponentFailureMechanismProps | [.UpdateComponentFailureMechanismPropsRequest](#updatecomponentfailuremechanismpropsrequest) | [.ReturnCode](#returncode) stream | Updates the analysis properties for component failure mechanism analysis. |
| updateSemiconductorWearoutAnalysisProps | [.UpdateSemiconductorWearoutAnalysisPropsRequest](#updatesemiconductorwearoutanalysispropsrequest) | [.ReturnCode](#returncode) stream | Updates the analysis properties for semiconductor wearout analysis. |
| updatePTHFatigueProps | [.UpdatePTHFatiguePropsRequest](#updatepthfatiguepropsrequest) | [.ReturnCode](#returncode) stream | Updates the analysis properties for plated through hole fatigue analysis. |


Back to [Top](#table-of-contents)
 
## SherlockCommonService.proto
 
Copyright 2023-2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

### ExitRequest
 
Request to exit the gRPC connection.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| closeSherlockClient | [bool](#bool) |  | If set to true, exits the Sherlock client if it is opened. Otherwise, just closes the gRPC connection. |

### GetSoldersRequest
 
Request for a list of valid solder materials.
 

### GetSoldersResponse
 
Represents a list of valid solder materials.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| solderName | [string](#string) | repeated | List of valid solder materials. |

### HealthCheckRequest
 
Request to check if the gRPC connection is open.
 

### HealthCheckResponse
 
Represents whether the gRPC connection is open.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [HealthCheckResponse.ServingStatus](#healthcheckresponseservingstatus) |  | Enum representing connection status. |
| port | [int32](#int32) |  | Listening port number on server. |

### IsSherlockClientLoadingRequest
 
Check if the Sherlock client is still loading.
 

### ListUnitsRequest
 
Request for a list of valid units of the provided unit type.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unitType | [ListUnitsRequest.UnitType](#listunitsrequestunittype) |  | Unit type to request valid units of. |

### ListUnitsResponse
 
Represents a list of valid units for the provided unit type.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| units | [string](#string) | repeated | List of valid units for the requested type. |

### Measurement
 
Represents a common measurement with a value and a unit.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Numerical value of a measurement. |
| units | [string](#string) |  | Units of the numerical value. |

### ReturnCode
 
Status response of a message. A value of 0 indicates a successful request.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [int32](#int32) |  | Status code of response. A value of 0 indicates success, -1 indicates error. |
| message | [string](#string) |  | Message indicating the status of response including any error. |

### SherlockInfoRequest
 
Request to receive Sherlock version and configuration data.
 

### SherlockInfoResponse
 
Represents Sherlock version and configuration data.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| releaseVersion | [string](#string) |  | The current version of Sherlock, formatted as: YYYY R# (Ex. "2025 R2"). |
| defaultProjectDir | [string](#string) |  | The project directory currently used by Sherlock. |
| isSingleProjectMode | [bool](#bool) |  | When true, indicates that Sherlock is in single-project mode. When false, indicates that Sherlock is in multi-project mode. |

### SolderInfo
 
Represents solder information given to the client.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| activationEnergy | [string](#string) |  | Activation energy. |
| ccCalibrationFactor | [string](#string) |  | CC Calibration factor. |
| correctionFactors | [string](#string) |  | Correction factors. |
| createdBy | [string](#string) |  | Who created this solder. |
| criticalDwellTime | [string](#string) |  | Critical dwell time. |
| criticalDwellTimeUnits | [string](#string) |  | Critical dwell time units. |
| criticalMaxTemp | [string](#string) |  | Critical max temperature. |
| criticalMaxTempUnits | [string](#string) |  | Critical max temperature units. |
| criticalStrain | [string](#string) |  | Critical strain. |
| cte | [string](#string) |  | CTE. |
| cteUnits | [string](#string) |  | CTE units. |
| density | [string](#string) |  | Solder density. |
| densityUnits | [string](#string) |  | Solder density units. |
| elasticModulus | [string](#string) |  | Elastic Modulus, may be a single value or a curve. |
| elasticModulusUnits | [string](#string) |  | Elastic Modulus units. |
| feaPower | [string](#string) |  | FEA power. |
| leadedCalibrationFactor | [string](#string) |  | Leaded calibration factor. |
| materialFatigueCoefficient | [string](#string) |  | Fatigue coefficient. |
| materialFatigueExponent | [string](#string) |  | Fatigue exponent. |
| modifiedBy | [string](#string) |  | Who last modified this solder. |
| poissonRatio | [string](#string) |  | Poisson ratio. |
| secantModulus | [string](#string) |  | Secant modulus. |
| secantModulusUnits | [string](#string) |  | Secant modulus units. |
| secantFatigueCoefficient | [string](#string) |  | Secant fatigue coefficient. |
| secantFatigueExponent | [string](#string) |  | Secant fatigue exponent. |
| shockStrain | [string](#string) |  | Shock strain. |
| solderName | [string](#string) |  | Name of solder. |
| solderType | [string](#string) |  | Type of solder. |
| strainEnergyCoefficient | [string](#string) |  | Strain energy coefficient. |
| thermalConductivity | [string](#string) |  | Solder thermal conductivity. |
| thermalConductivityUnits | [string](#string) |  | Solder thermal conductivity units. |
| thermalShockFactorBGA | [string](#string) |  | Thermal shock factor for BGA. |
| thermalShockFactorCC | [string](#string) |  | Thermal shock factor for CC. |
| thermalShockFactorDEFAULT | [string](#string) |  | Thermal shock factor default. |
| thermalShockFactorLCCC | [string](#string) |  | Thermal shock factor for LCCC. |
| thermalShockFactorLeaded | [string](#string) |  | Thermal shock factor for Leaded. |
| thermalShockFactorQFN | [string](#string) |  | Thermal shock factor for QFN. |
| thermalShockFactorThruHole | [string](#string) |  | Thermal shock factor for Through hole. |
| userNotes | [string](#string) |  | Notes written by the user. |
| weibullBetaBGA | [string](#string) |  | Weibull for BGA. |
| weibullBetaCBGA | [string](#string) |  | Weibull fpr CBGA. |
| weibullBetaCC | [string](#string) |  | Weibull for CC. |
| weibullBetaLCCC | [string](#string) |  | Weibull for LCCC. |
| weibullBetaLeaded | [string](#string) |  | Weibull for Leaded. |
| weibullBetaQFN | [string](#string) |  | Weibull for QFN. |
| weibullBetaThruHole | [string](#string) |  | Weibull for through hole. |
| cgaCalibrationFactor | [string](#string) |  | CGA calibration factor. |
| bgaCalibrationFactor | [string](#string) |  | BGA calibration factor. |

### SolderInfoRequest
 
Request for a list of valid solder materials.
 

### SolderInfoResponse
 
Represents a list of valid solder materials.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| solders | [SolderInfo](#solderinfo) | repeated | Solder information. |


### HealthCheckResponse.ServingStatus
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Indicates an unknown connection status. |
| SERVING | 1 | Indicates the connection is up and server is listening. |
| NOT_SERVING | 2 | Indicates connection with server is closed. |

### ListUnitsRequest.UnitType
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Indicates an unknown unit type. |
| ACCEL_DENSITY | 1 | Units used for acceleration density. |
| ACCELERATION | 2 | Units used for acceleration. |
| AREA | 3 | Units used for area. |
| BANDWIDTH | 4 | Units used for bandwidth. |
| CAPACITANCE | 5 | Units used for electrical capacitance. |
| CTE | 6 | Units used for material CTE. |
| CURRENT | 7 | Units used for electrical current. |
| DENSITY | 8 | Units used for density. |
| DISP_DENSITY | 9 | Units used for displacement density. |
| FORCE | 10 | Units used for force. |
| FREQUENCY | 11 | Units used for frequency. |
| INDUCTANCE | 12 | Units used for inductance. |
| LENGTH | 13 | Units used for length. |
| POWER | 14 | Units used for electrical power. |
| RESISTANCE | 15 | Units used for electrical resistance. |
| SIZE | 16 | Units used for size. |
| SPECIFIC_HEAT | 17 | Units used for specific heat. |
| STRAIN | 18 | Units used for strain. |
| STRESS | 19 | Units used for stress. |
| TEMPERATURE | 20 | Units used for temperature. |
| THERMAL_CONDUCTIVITY | 21 | Units used for thermal conductivity. |
| THERMAL_RESISTANCE | 22 | Units used for thermal resistance. |
| TIME | 23 | Units used for time. |
| VELOCITY | 24 | Units used for velocity. |
| VELOCITY_DENSITY | 25 | Units used for velocity density. |
| VOLTAGE | 26 | Units used for electrical voltage. |
| VOLUME | 27 | Units used for volume. |
| WEIGHT | 28 | Units used for weight. |

### MatchingMode
 
Determines how parts in the parts list are matched against parts 
in the AVL or Part Library.
 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Both | 0 | Matches both part number and manufacturer. |
| Part | 1 | Matches part number only. |

### TableDelimiter
 
Types of delimiters that can be used for exporting tables.
 
| Name | Number | Description |
| ---- | ------ | ----------- |
| COMMA | 0 | Represents ',' delimiter. |
| SPACE | 1 | Represents ' ' delimiter. |
| TAB | 2 | Represents tab key delimiter. |
| SEMICOLON | 3 | Represents ';' delimiter. |


### SherlockCommonService
 

 
| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| check | [.HealthCheckRequest](#healthcheckrequest) | [.HealthCheckResponse](#healthcheckresponse) | Returns health status of gRPC server. |
| exit | [.ExitRequest](#exitrequest) | [.ReturnCode](#returncode) | Signals for gRPC connection to shutdown. |
| isSherlockClientLoading | [.IsSherlockClientLoadingRequest](#issherlockclientloadingrequest) | [.ReturnCode](#returncode) | Check if the Sherlock client is still loading. |
| listUnits | [.ListUnitsRequest](#listunitsrequest) | [.ListUnitsResponse](#listunitsresponse) | Returns a list of valid units of the provided unit type. |
| getSolders | [.GetSoldersRequest](#getsoldersrequest) | [.GetSoldersResponse](#getsoldersresponse) | Returns a list of valid solder materials. This is deprecated as of 25R2. |
| getSolderInfo | [.SolderInfoRequest](#solderinforequest) | [.SolderInfoResponse](#solderinforesponse) | Returns a list of valid solder material information. |
| getSherlockInfo | [.SherlockInfoRequest](#sherlockinforequest) | [.SherlockInfoResponse](#sherlockinforesponse) | Returns meta data about Sherlock. |


Back to [Top](#table-of-contents)
 
## SherlockLayerService.proto
 
Copyright 2023-2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

### AddModelingRegionRequest
 
Request to add one or more modeling regions to a specific project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project to add the modeling regions to. |
| modelingRegions | [ModelingRegion](#modelingregion) | repeated | List of modeling regions to add to the project. |

### AddPottingRegionRequest
 
Request to add a potting region.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project to add the potting regions to. |
| pottingRegions | [AddPottingRegionRequest.PottingRegion](#addpottingregionrequestpottingregion) | repeated | The potting regions to add. |

### AddPottingRegionRequest.PottingRegion
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The name of the CCA. |
| pottingID | [string](#string) | optional | The potting ID. |
| pottingSide | [string](#string) | optional | The potting side, options are "TOP", "BOT", or "BOTTOM". |
| pottingMaterial | [string](#string) | optional | The potting material. |
| pottingUnits | [string](#string) | optional | The units to use for the potting region. |
| pottingThickness | [double](#double) | optional | The potting thickness. |
| pottingStandoff | [double](#double) | optional | The potting standoff. |
| polygonalShape | [PolygonalShape](#polygonalshape) |  | Used to add a region with a polygonal shape. |
| rectangularShape | [RectangularShape](#rectangularshape) |  | Used to add a region with a rectangular shape. |
| slotShape | [SlotShape](#slotshape) |  | Used to add a region with a slot shape. |
| circularShape | [CircularShape](#circularshape) |  | Used to add a region with a circular shape. |
| pCBShape | [PCBShape](#pcbshape) |  | Used to add a region with a PCB shape. |

### CircularShape
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diameter | [double](#double) | optional | The diameter of the circle. |
| nodeCount | [uint32](#uint32) | optional | The number of nodes. |
| centerX | [double](#double) | optional | The x coordinate of the center of the circle. |
| centerY | [double](#double) | optional | The x coordinate of the center of the circle. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |

### CopyModelingRegionRequest
 
Request to copy one or more modeling regions in a specific project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| copyRegions | [CopyModelingRegionRequest.CopyModelingRegionInfo](#copymodelingregionrequestcopymodelingregioninfo) | repeated | List of modeling regions to copy along with their corresponding "copy to" parameters. |

### CopyModelingRegionRequest.CopyModelingRegionInfo
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| regionId | [string](#string) |  | Region ID of the existing modeling region to copy. |
| regionIdCopy | [string](#string) |  | Region ID of the modeling region copy. Must be unique. |
| centerX | [double](#double) |  | The center x coordinate of the modeling region copy -- used for location placement in the Layer Viewer. |
| centerY | [double](#double) |  | The center y coordinate of the modeling region copy -- used for location placement in the Layer Viewer. |

### CopyPottingRegionRequest
 
Request to copy 1 or more potting regions.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project that contains the potting region(s) to copy. |
| pottingRegionCopyData | [CopyPottingRegionRequest.PottingRegionCopyData](#copypottingregionrequestpottingregioncopydata) | repeated | List of information needed to copy a specific Potting Region. |

### CopyPottingRegionRequest.PottingRegionCopyData
 
Potting region data used to identify a single pre-existing potting region which should be copied.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The name of the CCA. |
| pottingID | [string](#string) |  | The potting ID to copy from. |
| copyPottingID | [string](#string) |  | The potting ID to be used for the new copy. |
| centerX | [double](#double) | optional | The x coordinate for the center of the copied potting region. |
| centerY | [double](#double) | optional | The y coordinate for the center of the copied potting region. |

### DeleteAllICTFixturesRequest
 
Request to delete all ICT fixtures in specific CCA of specific project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

### DeleteAllMountPointsRequest
 
Request to delete all mount points in specific CCA of specific project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

### DeleteAllTestPointsRequest
 
Request to delete all ICT fixtures in specific CCA of specific project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

### DeleteModelingRegionRequest
 
Request to delete one or more modeling regions for a specific project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| deleteRegions | [DeleteModelingRegionRequest.DeleteModelingRegionInfo](#deletemodelingregionrequestdeletemodelingregioninfo) | repeated | List of modeling regions to delete in the project. |

### DeleteModelingRegionRequest.DeleteModelingRegionInfo
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| regionId | [string](#string) |  | Unique region ID of the modeling region to delete. |

### DeletePottingRegionRequest
 
Request to delete 1 or more potting regions.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project that contains the potting region(s) to delete. |
| pottingRegionDeleteData | [DeletePottingRegionRequest.PottingRegionDeleteData](#deletepottingregionrequestpottingregiondeletedata) | repeated | List of information needed to delete a specific Potting Region. |

### DeletePottingRegionRequest.PottingRegionDeleteData
 
Potting region data used to identify a single pre-existing potting region which should be deleted.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The name of the CCA. |
| pottingID | [string](#string) |  | The potting ID. |

### ExportAllICTFixturesRequest
 
Request to export all ICT fixtures and their properties into a CSV formatted file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| units | [string](#string) |  | Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |

### ExportAllMountPointsRequest
 
Request to export all mount points and their properties into a CSV formatted file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| units | [string](#string) |  | Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |

### ExportAllTestPointsRequest
 
Request to export all test points and their properties into a CSV formatted file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| lengthUnits | [string](#string) |  | Length Units used in exporting. |
| displacementUnits | [string](#string) |  | Displacement Units used in exporting. |
| forceUnits | [string](#string) |  | Force Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |

### ExportLayerImageRequest
 
Request to export one or more 2D Layer Viewer images from a project CCA.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportLayers | [ExportLayerImageRequest.ExportLayerImageInfo](#exportlayerimagerequestexportlayerimageinfo) | repeated | List of layer images to export along with their export parameters. |

### ExportLayerImageRequest.ExportLayerImageInfo
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| componentsEnabled | [bool](#bool) | optional | Displays the components in the export image. Default to true when not provided. |
| labelsEnabled | [bool](#bool) | optional | Displays the component reference designators in the export image. Default to true when not provided. |
| leadsEnabled | [bool](#bool) | optional | Displays the component leads and solder balls in the export image. Default to true when not provided. |
| axesEnabled | [bool](#bool) |  | Displays the x and y axes in the export image. |
| gridEnabled | [bool](#bool) |  | Displays a grid in the export image. |
| layerInfos | [LayerInfo](#layerinfo) | repeated | List of layers to be exported. This cannot be empty. |
| filePath | [string](#string) |  | Full file path of the export image. |
| imageHeight | [int32](#int32) |  | The export image height. |
| imageWidth | [int32](#int32) |  | The export image width. |
| overwriteExistingFile | [bool](#bool) |  | If the file path already exists, overwrite the file if this is set to true. |

### ExportLayerImageResponse
 
Contains the status of the export as well as all the export error and informational messages.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| exportMessages | [string](#string) | repeated | Informational and error messages about the export. |

### GetMountPointBoundariesRequest
 
Request to list the valid mount point boundaries.
 

### GetMountPointBoundariesResponse
 
Represents a list of valid mount point boundaries.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| boundary | [string](#string) | repeated | Mount Point boundary. |

### GetMountPointChassisMaterialsRequest
 
Request to list the valid mount point chassis materials.
 

### GetMountPointChassisMaterialsResponse
 
Represents a list of valid mount point chassis materials.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| chassisMaterial | [string](#string) | repeated | Mount Point chassis material. |

### GetMountPointShapeTypesRequest
 
Request to list the valid mount point shape types.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mountPointType | [string](#string) |  | Mount Point Type. Supported values are: Mount Hole, Mount Pad, Standoff, and Support Pin. |

### GetMountPointShapeTypesResponse
 
Represents a list of valid mount point shape types.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| type | [string](#string) | repeated | Mount Point Shape Type. |

### GetMountPointSidesRequest
 
Request to list the valid mount point sides.
 

### GetMountPointSidesResponse
 
Represents a list of valid mount point sides.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| side | [string](#string) | repeated | Mount Point side. |

### GetMountPointTypesRequest
 
Request to list the valid mount point types.
 

### GetMountPointTypesResponse
 
Represents a list of valid mount point types.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| type | [string](#string) | repeated | Mount Point Type. |

### GetMountPointUnitsRequest
 
Request to list the valid mount point units.
 

### GetMountPointUnitsResponse
 
Represents a list of valid mount point units.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| units | [string](#string) | repeated | Mount Point units. |

### GetMountPointsPropertiesRequest
 
Request to list the valid mount point chassis materials.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| mountPointIDs | [string](#string) |  | A comma separated list of mount point id for a list of mount point, or a mount id for one part. |

### GetMountPointsPropertiesResponse
 
Represents a list of valid mount point properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| mountPointsProperties | [MountPointProperties](#mountpointproperties) | repeated | Mount point properties. |

### GetTestPointPropertiesRequest
 
Request to return the properties for each test point given a comma-separated list of test point ids.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| testPointIDs | [string](#string) | optional | A comma-separated list of test point ids representing one or more test points. If a list is not included then the entire list of test points for a given CCA will have their properties returned. |

### GetTestPointPropertiesResponse
 
Represents the test point properties for a specific test point id.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| testPointProperties | [TestPointProperties](#testpointproperties) |  | The test point properties for a given test point id. |

### LayerInfo
 
Format of a layer viewer folder and layer names within the folder.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layerFolder | [LayerInfo.LayerFolder](#layerinfolayerfolder) |  |  |
| layers | [string](#string) | repeated |  |

### ListLayersRequest
 
Request to list all layers in a specific project CCA.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

### ListLayersResponse
 
Contains the list of layers.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| layerInfos | [LayerInfo](#layerinfo) | repeated | List of layer information. |

### ModelingRegion
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) | optional | Name of the CCA. |
| regionId | [string](#string) | optional | Unique modeling region ID. |
| regionUnits | [string](#string) | optional | Modeling region units. |
| modelMode | [ModelingRegion.ModelingMode](#modelingregionmodelingmode) | optional | Mode that specified how the region is used. |
| polygonalShape | [PolygonalShape](#polygonalshape) |  | Defined by N points that form a convex polygon. |
| rectangularShape | [RectangularShape](#rectangularshape) |  | Defined by 4 points that form a rectangle. |
| slotShape | [SlotShape](#slotshape) |  | Defined by 8 points that form a rectangle with rounded ends. |
| circularShape | [CircularShape](#circularshape) |  | Defined by N points that form a circle. |
| pcbModelProps | [ModelingRegion.PCBModelingProperties](#modelingregionpcbmodelingproperties) | optional | Mesh properties for the modeling region. |
| traceModelProps | [ModelingRegion.TraceModelingProperties](#modelingregiontracemodelingproperties) | optional | Trace modeling properties for the region. |
| regionIdReplacement | [string](#string) | optional | Represents a unique region id that will replace the existing regionId value during |

### ModelingRegion.PCBModelingProperties
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exportModelType | [ModelingRegion.PCBModelingProperties.ExportModelType](#modelingregionpcbmodelingpropertiesexportmodeltype) |  | The type of model to be generated for a given modeling region. |
| elemOrder | [ModelingRegion.ElementOrder](#modelingregionelementorder) |  | The type of 3D elements to be created for the PCB in the modeling region. |
| maxMeshSize | [double](#double) |  | The maximum size of the mesh to be used in the region. |
| maxMeshSizeUnits | [string](#string) |  | Units for the maximum mesh size. |
| quadsPreferred | [bool](#bool) |  | If true, then the meshing engine should attempt to generate quad-shaped elements when creating the mesh. |

### ModelingRegion.TraceModelingProperties
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceModelType | [ModelingRegion.TraceModelingProperties.TraceModelingType](#modelingregiontracemodelingpropertiestracemodelingtype) |  | Specifies if trace modeling should be performed inside of the region. |
| elemOrder | [ModelingRegion.ElementOrder](#modelingregionelementorder) | optional | The type of 3D elements to be created for traces in the region when trace modeling is enabled. |
| traceMeshSize | [double](#double) | optional | The maximum mesh size to be used in the region when trace modeling is enabled. |
| traceMeshSizeUnits | [string](#string) | optional | Units for the maximum mesh size when trace modeling is enabled. |

### MountPointProperties
 
Properties of mount point, the properties may varies from the mount point type and mount point shape.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ID | [string](#string) |  | Mount point ID. |
| type | [string](#string) |  | Mount point type. |
| shape | [string](#string) |  | Shape type. |
| units | [string](#string) |  | Mount point units. |
| x | [string](#string) |  | Center X. |
| y | [string](#string) |  | Center Y. |
| length | [string](#string) |  | Length. |
| width | [string](#string) |  | Width. |
| diameter | [string](#string) |  | Diameter. |
| nodes | [string](#string) |  | # of nodes. |
| rotation | [string](#string) |  | Rotation in degrees. |
| side | [string](#string) |  | Mount point side. |
| height | [string](#string) |  | Mount point height. |
| material | [string](#string) |  | Mount point material. |
| boundary | [string](#string) |  | Boundary Pt(s). |
| constraints | [string](#string) |  | FEA constraints. |
| polygon | [string](#string) |  | Coordinates of points. |
| state | [string](#string) |  | Mount point state. |
| chassisMaterial | [string](#string) |  | Chassis material. |

### PCBShape
 

 

### PolygonalShape
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| points | [PolygonalShape.Point](#polygonalshapepoint) | repeated | The points used to define the polygonal shape, must be >= 3. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |

### PolygonalShape.Point
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  | The x coordinate of the point. |
| y | [double](#double) |  | The y coordinate of the point. |

### PottingRegion
 
Data that fully describes a potting region.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The name of the CCA. |
| pottingID | [string](#string) | optional | The potting ID. |
| pottingSide | [string](#string) | optional | The potting side, options are "TOP", "BOT", or "BOTTOM". |
| pottingMaterial | [string](#string) | optional | The potting material. |
| pottingUnits | [string](#string) | optional | The units to use for the potting region. |
| pottingThickness | [double](#double) | optional | The potting thickness. |
| pottingStandoff | [double](#double) | optional | The potting standoff. |
| polygonalShape | [PolygonalShape](#polygonalshape) |  | Used to add a region with a polygonal shape. |
| rectangularShape | [RectangularShape](#rectangularshape) |  | Used to add a region with a rectangular shape. |
| slotShape | [SlotShape](#slotshape) |  | Used to add a region with a slot shape. |
| circularShape | [CircularShape](#circularshape) |  | Used to add a region with a circular shape. |
| pCBShape | [PCBShape](#pcbshape) |  | Used to add a region with a PCB shape. |

### RectangularShape
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| length | [double](#double) | optional | The length of the rectangle. |
| width | [double](#double) | optional | The width of the rectangle. |
| centerX | [double](#double) | optional | The x coordinate of the center of the rectangle. |
| centerY | [double](#double) | optional | The y coordinate of the center of the rectangle. |
| rotation | [double](#double) | optional | The rotation of the rectangle in degrees. |

### SlotShape
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| length | [double](#double) | optional | The length of the slot shape. |
| width | [double](#double) | optional | The width of the slot shape. |
| nodeCount | [uint32](#uint32) | optional | The number of nodes. |
| centerX | [double](#double) | optional | The x coordinate of the center of the slot shape. |
| centerY | [double](#double) | optional | The x coordinate of the center of the slot shape. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |

### TestPointProperties
 
Properties of a test point.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ID | [string](#string) |  | Test point ID. |
| side | [string](#string) |  | Test point side, i.e., Top or Bottom. |
| units | [string](#string) |  | Test point units. |
| centerX | [double](#double) |  | Center X. |
| centerY | [double](#double) |  | Center Y. |
| radius | [double](#double) |  | Radius. |
| loadType | [TestPointProperties.LoadType](#testpointpropertiesloadtype) |  | Load Type enum with acceptable values being either Force or Displacement. |
| loadValue | [double](#double) |  | Load value. |
| loadUnits | [string](#string) |  | Load units. |

### UpdateICTFixturesByFileRequest
 
Request to update ICT fixtures properties of a CCA from a CSV formatted file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the ICT fixtures properties. |

### UpdateICTFixturesResponse
 
Contains the status of the update as well as all the update error messages.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | ICT fixtures update error messages. |

### UpdateModelingRegionRequest
 
Request to update one or more modeling regions for a specific project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| modelingRegions | [ModelingRegion](#modelingregion) | repeated | List of modeling regions to update in the project. The regionId for |

### UpdateMountPointsByFileRequest
 
Request to update mount points properties of a CCA from a CSV formatted file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the mount points properties. |

### UpdateMountPointsRequest
 
Request to update mount points properties of a CCA from a CSV formatted file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| mountPointsProperties | [MountPointProperties](#mountpointproperties) | repeated | Mount point properties. |

### UpdateMountPointsResponse
 
Contains the status of the update as well as all the update error messages.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Mount Points update error messages. |

### UpdatePottingRegionRequest
 
Request to update 1 or more potting regions in a single CCA.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project that contains the potting region(s) to update. |
| updatePottingRegions | [UpdatePottingRegionRequest.PottingRegionUpdateData](#updatepottingregionrequestpottingregionupdatedata) | repeated | List of data needed to update each potting region. |

### UpdatePottingRegionRequest.PottingRegionUpdateData
 
Potting region data used to describe a single potting region and identify which one should be updated.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pottingRegionIDToUpdate | [string](#string) |  | Data that uniquely identifies the potting region being updated. |
| pottingRegion | [PottingRegion](#pottingregion) |  | Data that describes a potting region. |

### UpdateTestPointsByFileRequest
 
Request to update test points properties of a CCA from a CSV formatted file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the test points properties. |

### UpdateTestPointsResponse
 
Contains the status of the update as well as all the update error messages.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Test Points update error messages. |


### LayerInfo.LayerFolder
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Unknown | 0 |  |
| Components | 1 |  |
| Copper_Layers | 2 |  |
| DFMEA_Bot | 3 |  |
| DFMEA_Top | 4 |  |
| Drill_Holes | 5 |  |
| Harmonic_Vibe | 6 |  |
| Heat_Sinks | 7 |  |
| Icepak_Thermal_Maps | 8 |  |
| ICT | 9 |  |
| Laminate_Layers | 10 |  |
| Mechanical_Parts | 11 |  |
| Mechanical_Shock | 12 |  |
| Mechanical | 13 |  |
| Natural_Freq | 14 |  |
| Other_Layers | 15 |  |
| Potting_Regions | 16 |  |
| PTH_Fatigue | 17 |  |
| Random_Vibe | 18 |  |
| Semiconductor_Wearout_Top | 19 |  |
| Silk_Screens | 20 |  |
| Solder_Fatigue_Bot | 21 |  |
| Solder_Fatigue_Top | 22 |  |
| Solder_Masks | 23 |  |
| Strain_Maps | 24 |  |
| Test_Points | 25 |  |
| Thermal_Derating_Bot | 26 |  |
| Thermal_Derating_Top | 27 |  |
| Thermal_Maps | 28 |  |
| Thermal_Mech | 29 |  |

### ModelingRegion.ElementOrder
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| First_Order | 0 | First order (Linear) 3D elements should be created for the PCB in the modeling region. |
| Second_Order | 1 | Second order (Quadratic) 3D elements should be created for the PCB in the modeling region. |
| Solid_Shell | 2 | Used for relatively flat elements, like those found in a PCB layer to reduce modeling generation time. |

### ModelingRegion.ModelingMode
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Enabled | 0 | Use the modeling region. |
| Disabled | 1 | Ignore the modeling region. |
| Excluded | 2 | Don't generate any elements for the region. |

### ModelingRegion.PCBModelingProperties.ExportModelType
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Default | 0 | Region type is based on the Mesh Type property defined in the PCB Modeling tab in the FEA Model Export dialog. |
| Sherlock | 1 | Use mesh elements generated by Sherlock to model the region. |
| Sweep | 2 | Use mesh elements generated by the FEA tool to model the region. |
| None | 3 | Define only geometric volumes for the region, without generating mesh elements. |

### ModelingRegion.TraceModelingProperties.TraceModelingType
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Default | 0 | Trace modeling type is based on the Trace Modeling property defined in the Trace Modeling tab in the FEA Model Export dialog. |
| Enabled | 1 | Trace modeling is enabled for this region. |
| Disabled | 2 | Trace modeling is disabled for this region. |

### TestPointProperties.LoadType
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Force | 0 | Numeric load value and associated units represents force. |
| Displacement | 1 | Numeric load value and associated units represents displacement. |


### SherlockLayerService
 

 
| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| addPottingRegion | [.AddPottingRegionRequest](#addpottingregionrequest) | [.ReturnCode](#returncode) | Add a potting region with the specified shape and properties. |
| updatePottingRegion | [.UpdatePottingRegionRequest](#updatepottingregionrequest) | [.ReturnCode](#returncode) stream | Updates a potting region with the specified shape and properties. |
| deletePottingRegion | [.DeletePottingRegionRequest](#deletepottingregionrequest) | [.ReturnCode](#returncode) stream | Deletes a potting region based on given identification properties. |
| copyPottingRegion | [.CopyPottingRegionRequest](#copypottingregionrequest) | [.ReturnCode](#returncode) stream | Copies a potting region based on given identification properties. |
| deleteAllICTFixtures | [.DeleteAllICTFixturesRequest](#deleteallictfixturesrequest) | [.ReturnCode](#returncode) | Delete all ICT fixtures in specific CCA of specific project. |
| deleteAllMountPoints | [.DeleteAllMountPointsRequest](#deleteallmountpointsrequest) | [.ReturnCode](#returncode) | Delete all mount points in specific CCA of specific project. |
| deleteAllTestPoints | [.DeleteAllTestPointsRequest](#deletealltestpointsrequest) | [.ReturnCode](#returncode) | Delete all test points in specific CCA of specific project. |
| exportAllMountPoints | [.ExportAllMountPointsRequest](#exportallmountpointsrequest) | [.ReturnCode](#returncode) | Export all mount points and their properties into a CSV formatted file. |
| exportAllICTFixtures | [.ExportAllICTFixturesRequest](#exportallictfixturesrequest) | [.ReturnCode](#returncode) | Export all ICT fixtures and their properties into a CSV formatted file. |
| exportAllTestPoints | [.ExportAllTestPointsRequest](#exportalltestpointsrequest) | [.ReturnCode](#returncode) | Export all test points and their properties into a CSV formatted file. |
| getMountPointBoundaries | [.GetMountPointBoundariesRequest](#getmountpointboundariesrequest) | [.GetMountPointBoundariesResponse](#getmountpointboundariesresponse) | Get a list of valid mount point boundaries. |
| getMountPointChassisMaterials | [.GetMountPointChassisMaterialsRequest](#getmountpointchassismaterialsrequest) | [.GetMountPointChassisMaterialsResponse](#getmountpointchassismaterialsresponse) | Get a list of valid mount point chassis materials. |
| getMountPointsProperties | [.GetMountPointsPropertiesRequest](#getmountpointspropertiesrequest) | [.GetMountPointsPropertiesResponse](#getmountpointspropertiesresponse) | Get a list of valid mount point properties. |
| getMountPointShapeTypes | [.GetMountPointShapeTypesRequest](#getmountpointshapetypesrequest) | [.GetMountPointShapeTypesResponse](#getmountpointshapetypesresponse) | Get a list of valid mount point shape type values. |
| getMountPointSides | [.GetMountPointSidesRequest](#getmountpointsidesrequest) | [.GetMountPointSidesResponse](#getmountpointsidesresponse) | Get a list of valid mount point sides. |
| getMountPointTypes | [.GetMountPointTypesRequest](#getmountpointtypesrequest) | [.GetMountPointTypesResponse](#getmountpointtypesresponse) | Get a list of valid mount point type values. |
| getMountPointUnits | [.GetMountPointUnitsRequest](#getmountpointunitsrequest) | [.GetMountPointUnitsResponse](#getmountpointunitsresponse) | Get a list of valid mount point units. |
| getTestPointProperties | [.GetTestPointPropertiesRequest](#gettestpointpropertiesrequest) | [.GetTestPointPropertiesResponse](#gettestpointpropertiesresponse) stream | Get a series of valid test point properties. |
| updateICTFixturesByFile | [.UpdateICTFixturesByFileRequest](#updateictfixturesbyfilerequest) | [.UpdateICTFixturesResponse](#updateictfixturesresponse) | Update the ICT fixtures properties of a CCA from a CSV formatted file. This API could be used to add new ICT fixtures or update existing ones depending on the file contents.<br>If the ID specified already exists, then the properties for that ICT fixture will be updated.<br>If the ID specified does not already exist, or if the field is empty, then a new ICT fixture will be added with the specified properties.<br>The file format should be the same as the one produced from CCA -> Export ICT Fixtures. |
| updateMountPoints | [.UpdateMountPointsRequest](#updatemountpointsrequest) | [.UpdateMountPointsResponse](#updatemountpointsresponse) | Update mount points with specified properties. |
| updateMountPointsByFile | [.UpdateMountPointsByFileRequest](#updatemountpointsbyfilerequest) | [.UpdateMountPointsResponse](#updatemountpointsresponse) | Update the mount points properties of a CCA from a CSV formatted file. This API could be used to add new mount points or update existing ones depending on the file contents.<br>If the ID specified already exists, then the properties for that mount point will be updated.<br>If the ID specified does not already exist, or if the field is empty, then a new mount point will be added with the specified properties.<br>The file format should be the same as the one produced from CCA -> Export Mount Points. |
| updateTestPointsByFile | [.UpdateTestPointsByFileRequest](#updatetestpointsbyfilerequest) | [.UpdateTestPointsResponse](#updatetestpointsresponse) | Update the test points properties of a CCA from a CSV formatted file. This API could be used to add new test points or update existing ones depending on the file contents.<br>If the ID specified already exists, then the properties for that test point will be updated.<br>If the ID specified does not already exist, or if the field is empty, then a new test point will be added with the specified properties.<br>The file format should be the same as the one produced from CCA -> Export Test Points. |
| addModelingRegion | [.AddModelingRegionRequest](#addmodelingregionrequest) | [.ReturnCode](#returncode) | Add one or more modeling regions with the specified shapes and properties. |
| updateModelingRegion | [.UpdateModelingRegionRequest](#updatemodelingregionrequest) | [.ReturnCode](#returncode) | Update one or more modeling regions with the specified shapes and properties. |
| deleteModelingRegion | [.DeleteModelingRegionRequest](#deletemodelingregionrequest) | [.ReturnCode](#returncode) | Delete one or more existing modeling regions. |
| copyModelingRegion | [.CopyModelingRegionRequest](#copymodelingregionrequest) | [.ReturnCode](#returncode) | Copy one or more existing modeling regions. |
| listLayers | [.ListLayersRequest](#listlayersrequest) | [.ListLayersResponse](#listlayersresponse) | List all the available layers as seen in the layer viewer for a project CCA. |
| exportLayerImage | [.ExportLayerImageRequest](#exportlayerimagerequest) | [.ExportLayerImageResponse](#exportlayerimageresponse) stream | Export one or more 2D Layer Viewer images from a project CCA. |


Back to [Top](#table-of-contents)
 
## SherlockLifeCycleService.proto
 
Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

### AddHarmonicEventRequest
 
Request to define and add a new harmonic vibe life cycle event.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the harmonic event. |
| description | [string](#string) |  | Description of the harmonic event. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this harmonic event. |
| cycleType | [string](#string) |  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |
| sweepRate | [double](#double) |  | Sweep rate for the harmonic event |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: "30,15". |
| profileType | [string](#string) |  | Harmonic load profile types. Example valid values are "Uniaxial" and "Triaxial". |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: "0,0,1". |

### AddHarmonicEventResponse
 
Response from adding a harmonic vibe life cycle event.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### AddHarmonicVibeProfilesRequest
 
Request to define and add new harmonic vibe life cycle event profiles.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| harmonicVibeProfiles | [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile](#addharmonicvibeprofilesrequestharmonicvibeprofile) | repeated | List of harmonic vibe life cycle event profiles for a specified project. |

### AddHarmonicVibeProfilesRequest.HarmonicVibeProfile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the harmonic event. |
| profileName | [string](#string) |  | Name of the harmonic profile. |
| freqUnits | [string](#string) |  | Frequency units. |
| loadUnits | [string](#string) |  | Load units. |
| harmonicVibeProfileEntries | [AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry](#addharmonicvibeprofilesrequestharmonicvibeprofileentry) | repeated | List of frequency and load values for a harmonic vibe life cycle phase. |
| triaxialAxis | [string](#string) |  | If the harmonic profile type is "Triaxial", the axis this profile should be assigned to. Valid values are: x, y, z. |

### AddHarmonicVibeProfilesRequest.HarmonicVibeProfile.Entry
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| freq | [double](#double) |  | Frequency. |
| load | [double](#double) |  | Load. |

### AddHarmonicVibeProfilesResponse
 
Response from adding harmonic vibe life cycle event profiles.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### AddRandomVibeEventRequest
 
Request to define and add a new random vibe life cycle event.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the random vibe event. |
| description | [string](#string) |  | Description of the random vibe event. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this random vibe event. |
| cycleType | [string](#string) |  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: "30,15". |
| profileType | [string](#string) |  | Random load profile type. Example valid value is "Uniaxial". |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: "0,0,1". |

### AddRandomVibeEventResponse
 
Response from adding a random vibe life cycle event.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### AddRandomVibeProfilesRequest
 
Request to define and add new random vibe life cycle event profiles.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| randomVibeProfiles | [AddRandomVibeProfilesRequest.RandomVibeProfile](#addrandomvibeprofilesrequestrandomvibeprofile) | repeated | List of random vibe life cycle event profiles for a specified project. |

### AddRandomVibeProfilesRequest.RandomVibeProfile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the random vibe event. |
| profileName | [string](#string) |  | Name of the random vibe profile. |
| freqUnits | [string](#string) |  | Frequency units. |
| amplUnits | [string](#string) |  | Amplitude units. |
| randomVibeProfileEntries | [AddRandomVibeProfilesRequest.RandomVibeProfile.Entry](#addrandomvibeprofilesrequestrandomvibeprofileentry) | repeated | List of frequency and amplitude values for a random vibe life cycle event. |

### AddRandomVibeProfilesRequest.RandomVibeProfile.Entry
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| freq | [double](#double) |  | Frequency. |
| ampl | [double](#double) |  | Amplitude. |

### AddRandomVibeProfilesResponse
 
Response from adding random vibe profiles.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### AddShockEventRequest
 
Request to define and add a new shock life cycle event.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the shock event. |
| description | [string](#string) |  | Description of the shock event. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this shock event. |
| cycleType | [string](#string) |  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |
| orientation | [string](#string) |  | PCB orientation in the format of azimuth, elevation. Example: 30,15 |
| loadDirection | [string](#string) |  | Load direction in the format of x,y,z. Example: 0,0,1 |

### AddShockEventResponse
 
Response from adding a shock life cycle event.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### AddShockProfilesRequest
 
Request to define and add new shock life cycle event profiles.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| shockProfiles | [AddShockProfilesRequest.ShockProfile](#addshockprofilesrequestshockprofile) | repeated | List of shock life cycle event profiles for a specified project. |

### AddShockProfilesRequest.ShockProfile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the shock event. |
| profileName | [string](#string) |  | Name of the shock profile. |
| duration | [double](#double) |  | Pulse duration. |
| durationUnits | [string](#string) |  | Pulse duration unit. |
| sampleRate | [double](#double) |  | Sample rate. |
| sampleRateUnits | [string](#string) |  | Sample rate unit. |
| loadUnits | [string](#string) |  | Load unit. |
| freqUnits | [string](#string) |  | Frequency unit. |
| shockProfileEntries | [AddShockProfilesRequest.ShockProfile.Entry](#addshockprofilesrequestshockprofileentry) | repeated | Primary shape entry for the shock profile. |

### AddShockProfilesRequest.ShockProfile.Entry
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shape | [string](#string) |  | Shape of the shock profile. |
| load | [double](#double) |  | Load. |
| freq | [double](#double) |  | Frequency rate. |
| decay | [double](#double) |  | Decay rate. |

### AddShockProfilesResponse
 
Response from adding shock life cycle event profiles.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### AddThermalEventRequest
 
Request to define and add a new thermal life cycle event.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase to add this event to. |
| eventName | [string](#string) |  | Name of the thermal event. |
| description | [string](#string) |  | Description of the thermal event. |
| numOfCycles | [double](#double) |  | Number of cycles defined for this thermal event. |
| cycleType | [string](#string) |  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |
| cycleState | [string](#string) |  | The life cycle state. For example: "OPERATING", "STORAGE". |

### AddThermalEventResponse
 
Response from adding a thermal life cycle event.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### AddThermalProfilesRequest
 
Request to define and add a new thermal life cycle event profiles.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalProfiles | [AddThermalProfilesRequest.ThermalProfile](#addthermalprofilesrequestthermalprofile) | repeated | List of thermal life cycle event profiles for a specified project. |

### AddThermalProfilesRequest.ThermalProfile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Name of the thermal event. |
| profileName | [string](#string) |  | Name of the thermal profile. |
| timeUnits | [string](#string) |  | Time units. |
| tempUnits | [string](#string) |  | Temperature units. |
| thermalProfileEntries | [AddThermalProfilesRequest.ThermalProfile.Entry](#addthermalprofilesrequestthermalprofileentry) | repeated | List of step entries for a life cycle event and/or phase. |

### AddThermalProfilesRequest.ThermalProfile.Entry
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step | [string](#string) |  | Name of the step. |
| type | [string](#string) |  | Profile step type. "HOLD" or "RAMP". |
| time | [double](#double) |  | Time duration of the step. |
| temp | [double](#double) |  | Temperature of the step. |

### AddThermalProfilesResponse
 
Response from adding thermal profiles.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### CreateLifePhaseRequest
 
Request for creating a life phase.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of new life phase. |
| description | [string](#string) |  | Description of new life phase. |
| duration | [double](#double) |  | Event duration length. |
| durationUnits | [string](#string) |  | Event duration length units. |
| numOfCycles | [double](#double) |  | Number of cycles defined for new life phase. |
| cycleType | [string](#string) |  | The cycle type. For example: "COUNT", "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |

### CreateLifePhaseResponse
 
Response from creating a life phase.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of error messages. |

### DeleteEventRequest
 
Request to delete a life cycle event in a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase from which to delete this event. |
| eventName | [string](#string) |  | Name of the event to be deleted. |

### DeleteLifePhaseResponse
 
Response for deleting a life phase
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |

### DeletePhaseRequest
 
Request for deleting a life phase
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | Sherlock life phase name. |

### Events
 
Represents an event.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Event name. |

### ListAmplUnitsRequest
 
Request for a list of amplitude units.
 

### ListAmplUnitsResponse
 
Represents a list of amplitude units.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| amplUnits | [string](#string) | repeated | List of amplitude units. |

### ListDurationUnitsRequest
 
Request for a list of duration units for event settings.
 

### ListDurationUnitsResponse
 
Represents a list of duration units for event settings in life cycle.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| durationUnits | [string](#string) | repeated | List of duration units. |

### ListFreqUnitsRequest
 
Request for a list of frequency units.
 

### ListFreqUnitsResponse
 
Represents a list of frequency units.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| freqUnits | [string](#string) | repeated | List of frequency units. For example: "HZ", "KHZ", "MHZ", "GHZ". |

### ListHarmonicEventsRequest
 
Request for a list of harmonic events defined for a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

### ListHarmonicEventsResponse
 
Represents a list of harmonic events defined for a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| event | [Events](#events) | repeated | List of harmonic events. |

### ListHarmonicProfileTypesRequest
 
Request for a list of harmonic load profile types.
 

### ListHarmonicProfileTypesResponse
 
Represents a list of harmonic load profile types.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| types | [string](#string) | repeated | List of harmonic load profile types. "Uniaxial", "Triaxial". |

### ListLCEventsRequest
 
Request for a list of life cycle phases and events for a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

### ListLCEventsResponse
 
Represents the life cycle phases and events for a Sherlock project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| lcPhases | [ListLCEventsResponse.LifeCyclePhase](#listlceventsresponselifecyclephase) | repeated | List of LifeCyclePhases for a specified project. |

### ListLCEventsResponse.LifeCyclePhase
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle phase name. |
| description | [string](#string) |  | Life cycle phase description. |
| lcEvents | [ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent](#listlceventsresponselifecyclephaselifecycleevent) | repeated | List of LifeCycleEvents for a project phase. |

### ListLCEventsResponse.LifeCyclePhase.LifeCycleEvent
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Life cycle event name. |
| description | [string](#string) |  | Life cycle event description. |
| type | [string](#string) |  | Life cycle type. For example: "Thermal Event", "Shock Event", "Random Vibe", "Harmonic Vibe". |

### ListLCStatesRequest
 
Request for a list of life cycle states.
 

### ListLCStatesResponse
 
Represents a list of life cycle states.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| states | [string](#string) | repeated | List of life cycle states. For example: "Operating", "Storage". |

### ListLCTypesRequest
 
Request for a list of life cycle types.
 

### ListLCTypesResponse
 
Represents a list of life cycle types.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| types | [string](#string) | repeated | List of life cycle types. For example, "DUTY CYCLE", "PER YEAR", "PER HOUR", etc. |

### ListRandomVibeEventsRequest
 
Request for a list of random vibe events defined for a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

### ListRandomVibeEventsResponse
 
Represents a list of random vibe events defined for a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| event | [Events](#events) | repeated | List of random vibe events. |

### ListRandomVibeProfileTypesRequest
 
Request for a list of random vibe profile types.
 

### ListRandomVibeProfileTypesResponse
 
Represents a list of random vibe profile types.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| types | [string](#string) | repeated | List of random vibe profile types. Currently there is only one: "Uniaxial". |

### ListShockEventsRequest
 
Request for a list of shock events defined for a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

### ListShockEventsResponse
 
Represents a list of shock events defined for a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| event | [Events](#events) | repeated | List of shock events. |

### ListShockLoadUnitsRequest
 
Request for a list of shock load units.
 

### ListShockLoadUnitsResponse
 
Represents a list of shock load units.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| units | [string](#string) | repeated | List of shock load units. For example: "G", "m/s2", "mm/s2". |

### ListShockPulsesRequest
 
Request for a list of shock Pulses.
 

### ListShockPulsesResponse
 
Represents a list of shock Pulses.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| shockPulse | [string](#string) | repeated | List of shock pulses. For example: "FullSine", "HalfSine", "Triangle", "Sawtooth", "FullSquare". |

### ListTempUnitsRequest
 
Request for a list of temperature units.
 

### ListTempUnitsResponse
 
Represents a list of temperature units.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| tempUnits | [string](#string) | repeated | List of temperature units. For example: "C", "F", "K". |

### LoadHarmonicProfileRequest
 
Request to load a harmonic life cycle event profile from a .dat or .csv file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Harmonic event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| harmonicCsvProps | [LoadHarmonicProfileRequest.CSVProps](#loadharmonicprofilerequestcsvprops) |  | Properties for a .csv file load. |
| triaxialAxis | [string](#string) |  | If the harmonic profile type is "Triaxial", the axis this profile should be assigned to. Valid values are: x, y, z. |

### LoadHarmonicProfileRequest.CSVProps
 
.csv file properties. This is only required for a .csv file load.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the harmonic profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| freqColumn | [string](#string) |  | Frequency column name. |
| freqUnits | [string](#string) |  | Frequency units. |
| loadColumn | [string](#string) |  | Load column name. |
| loadUnits | [string](#string) |  | Load units. |

### LoadHarmonicProfileResponse
 
Response from loading a harmonic vibe life cycle event profile from a .dat or .csv file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### LoadRandomVibeProfileRequest
 
Request to load a random vibe life cycle event profile from a .dat or .csv file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Random vibe event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| randomVibeCsvProps | [LoadRandomVibeProfileRequest.CSVProps](#loadrandomvibeprofilerequestcsvprops) |  | Properties for a .csv file load. |

### LoadRandomVibeProfileRequest.CSVProps
 
.csv file properties. This is only required for a .csv file load.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the random vibe profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| freqColumn | [string](#string) |  | Frequency column name. |
| freqUnits | [string](#string) |  | Frequency units. |
| amplColumn | [string](#string) |  | Amplitude column name. |
| amplUnits | [string](#string) |  | Amplitude units. |

### LoadRandomVibeProfileResponse
 
Response from loading a random vibe life cycle event profile from a .dat or .csv file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### LoadShockProfileDatasetRequest
 
Request to load a shock life cycle event profile using the dataset (time and load) from a .dat or .csv file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Shock event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| shockDsCsvProps | [LoadShockProfileDatasetRequest.CSVProps](#loadshockprofiledatasetrequestcsvprops) |  | Properties for a .csv file load. |

### LoadShockProfileDatasetRequest.CSVProps
 
.csv file properties. This is only required for a .csv file load.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the shock profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| timeColumn | [string](#string) |  | Time column name. |
| timeUnits | [string](#string) |  | Time units. |
| loadColumn | [string](#string) |  | Load column name. |
| loadUnits | [string](#string) |  | Load units. |

### LoadShockProfileDatasetResponse
 
Response from loading a shock profile using the dataset from a .dat or .csv file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### LoadShockProfilePulsesRequest
 
Request to load a shock life cycle event profile using pulses from a .dat or .csv file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Shock event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| shockPulsesCsvProps | [LoadShockProfilePulsesRequest.CSVProps](#loadshockprofilepulsesrequestcsvprops) |  | Properties for a .csv file load. |

### LoadShockProfilePulsesRequest.CSVProps
 
.csv file properties. This is only required for a .csv file load.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the shock profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| duration | [double](#double) |  | Pulse duration length. |
| durationUnits | [string](#string) |  | Pulse duration time units. |
| sampleRate | [double](#double) |  | Sample rate. |
| sampleRateUnits | [string](#string) |  | Sample rate units. |
| shapeColumn | [string](#string) |  | Pulse shape column name. |
| loadColumn | [string](#string) |  | Load column name. |
| loadUnits | [string](#string) |  | Load units. |
| freqColumn | [string](#string) |  | Frequency column name. |
| freqUnits | [string](#string) |  | Frequency units. |
| decayColumn | [string](#string) |  | Decay column name. |

### LoadShockProfilePulsesResponse
 
Response from loading a shock profile using pulses from a .dat or .csv file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### LoadThermalProfileRequest
 
Request to load a thermal life cycle event profile from a .dat or .csv file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| phaseName | [string](#string) |  | The name of the life cycle phase this event is associated. |
| eventName | [string](#string) |  | Thermal event name. |
| filePath | [string](#string) |  | The full path for the .dat or .csv file. |
| csvProps | [LoadThermalProfileRequest.CSVProps](#loadthermalprofilerequestcsvprops) |  | Properties for a .csv file load. |

### LoadThermalProfileRequest.CSVProps
 
.csv file properties. This is only required for .csv file load.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| profileName | [string](#string) |  | Name of the thermal profile. |
| headerRowNumber | [int32](#int32) |  | Header row number in the .csv file. |
| columnDelim | [string](#string) |  | Delimiter to separate the columns. |
| numericFormat | [string](#string) |  | Numeric format. |
| stepColumn | [string](#string) |  | Step column name. |
| typeColumn | [string](#string) |  | Step type column name. |
| timeColumn | [string](#string) |  | Time duration column name. |
| timeUnits | [string](#string) |  | Time units column name. |
| tempColumn | [string](#string) |  | Temperature column name. |
| tempUnits | [string](#string) |  | Temperature units column name. |

### LoadThermalProfileResponse
 
Response from loading a thermal profile from a .dat or .csv file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |



### SherlockLifeCycleService
 

 
| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| addHarmonicEvent | [.AddHarmonicEventRequest](#addharmoniceventrequest) | [.AddHarmonicEventResponse](#addharmoniceventresponse) | Define and add a new harmonic vibe life cycle event. |
| addHarmonicVibeProfiles | [.AddHarmonicVibeProfilesRequest](#addharmonicvibeprofilesrequest) | [.AddHarmonicVibeProfilesResponse](#addharmonicvibeprofilesresponse) | Define and add new harmonic vibe life cycle event profiles. |
| addRandomVibeProfiles | [.AddRandomVibeProfilesRequest](#addrandomvibeprofilesrequest) | [.AddRandomVibeProfilesResponse](#addrandomvibeprofilesresponse) | Define and add new random vibe life cycle event profiles. |
| addRandomVibeEvent | [.AddRandomVibeEventRequest](#addrandomvibeeventrequest) | [.AddRandomVibeEventResponse](#addrandomvibeeventresponse) | Define and add a new random vibe life cycle event. |
| addShockEvent | [.AddShockEventRequest](#addshockeventrequest) | [.AddShockEventResponse](#addshockeventresponse) | Define and add a new shock life cycle event. |
| addShockProfiles | [.AddShockProfilesRequest](#addshockprofilesrequest) | [.AddShockProfilesResponse](#addshockprofilesresponse) | Define and add new shock life cycle event profiles.<br>Keep in mind, the pulse duration and load values defined in the Shock Profile Editor<br>are relative values used solely within the editor to define the profile shape. <br>A combination of all the primary pulse shapes is then used to define the pulse profile. |
| addThermalEvent | [.AddThermalEventRequest](#addthermaleventrequest) | [.AddThermalEventResponse](#addthermaleventresponse) | Define and add a new thermal life cycle event. |
| addThermalProfiles | [.AddThermalProfilesRequest](#addthermalprofilesrequest) | [.AddThermalProfilesResponse](#addthermalprofilesresponse) | Define and add new thermal life cycle event profiles. |
| createLifePhase | [.CreateLifePhaseRequest](#createlifephaserequest) | [.CreateLifePhaseResponse](#createlifephaseresponse) | Define and add a new life phase. |
| deleteEvent | [.DeleteEventRequest](#deleteeventrequest) | [.ReturnCode](#returncode) | Delete a life cycle event. |
| listAmplUnits | [.ListAmplUnitsRequest](#listamplunitsrequest) | [.ListAmplUnitsResponse](#listamplunitsresponse) | Returns a list of amplitude units when adding a random vibe profile. |
| listDurationUnits | [.ListDurationUnitsRequest](#listdurationunitsrequest) | [.ListDurationUnitsResponse](#listdurationunitsresponse) | Returns a list of duration units when adding a life cycle event. |
| listFreqUnits | [.ListFreqUnitsRequest](#listfrequnitsrequest) | [.ListFreqUnitsResponse](#listfrequnitsresponse) | Returns a list of frequency units. |
| listHarmonicEvents | [.ListHarmonicEventsRequest](#listharmoniceventsrequest) | [.ListHarmonicEventsResponse](#listharmoniceventsresponse) | Returns a list of harmonic events defined for a project. |
| listHarmonicProfileTypes | [.ListHarmonicProfileTypesRequest](#listharmonicprofiletypesrequest) | [.ListHarmonicProfileTypesResponse](#listharmonicprofiletypesresponse) | Returns a list of harmonic load Profile types. |
| listLifeCycleEvents | [.ListLCEventsRequest](#listlceventsrequest) | [.ListLCEventsResponse](#listlceventsresponse) | Returns a list of life cycle phases and their events given a Sherlock project directory. |
| listLifeCycleStates | [.ListLCStatesRequest](#listlcstatesrequest) | [.ListLCStatesResponse](#listlcstatesresponse) | Returns a list of life cycle states. |
| listLifeCycleTypes | [.ListLCTypesRequest](#listlctypesrequest) | [.ListLCTypesResponse](#listlctypesresponse) | Returns a list of life cycle types. |
| listRandomVibeProfileTypes | [.ListRandomVibeProfileTypesRequest](#listrandomvibeprofiletypesrequest) | [.ListRandomVibeProfileTypesResponse](#listrandomvibeprofiletypesresponse) | Returns a list of random vibe profile types. |
| listRandomVibeEvents | [.ListRandomVibeEventsRequest](#listrandomvibeeventsrequest) | [.ListRandomVibeEventsResponse](#listrandomvibeeventsresponse) | Returns a list of random vibe events defined for a project. |
| listShockEvents | [.ListShockEventsRequest](#listshockeventsrequest) | [.ListShockEventsResponse](#listshockeventsresponse) | Returns a list of shock events defined for a project. |
| listShockLoadUnits | [.ListShockLoadUnitsRequest](#listshockloadunitsrequest) | [.ListShockLoadUnitsResponse](#listshockloadunitsresponse) | Returns a list of shock load units. |
| listShockPulses | [.ListShockPulsesRequest](#listshockpulsesrequest) | [.ListShockPulsesResponse](#listshockpulsesresponse) | Returns a list of shock pulses. |
| listTempUnits | [.ListTempUnitsRequest](#listtempunitsrequest) | [.ListTempUnitsResponse](#listtempunitsresponse) | Returns a list of temperature units. |
| loadHarmonicProfile | [.LoadHarmonicProfileRequest](#loadharmonicprofilerequest) | [.LoadHarmonicProfileResponse](#loadharmonicprofileresponse) | Loads a harmonic profile from a .dat or .csv file. |
| loadRandomVibeProfile | [.LoadRandomVibeProfileRequest](#loadrandomvibeprofilerequest) | [.LoadRandomVibeProfileResponse](#loadrandomvibeprofileresponse) | Loads a random vibe profile from a .dat or .csv file. |
| loadShockProfileDataset | [.LoadShockProfileDatasetRequest](#loadshockprofiledatasetrequest) | [.LoadShockProfileDatasetResponse](#loadshockprofiledatasetresponse) | Loads a shock profile using dataset from a .dat or .csv file. |
| loadShockProfilePulses | [.LoadShockProfilePulsesRequest](#loadshockprofilepulsesrequest) | [.LoadShockProfilePulsesResponse](#loadshockprofilepulsesresponse) | Loads a shock profile using pulses from a .dat or .csv file. |
| loadThermalProfile | [.LoadThermalProfileRequest](#loadthermalprofilerequest) | [.LoadThermalProfileResponse](#loadthermalprofileresponse) | Loads a thermal profile from a .dat or .csv file. |
| deletePhase | [.DeletePhaseRequest](#deletephaserequest) | [.ReturnCode](#returncode) | Delete a life phase for a project. |


Back to [Top](#table-of-contents)
 
## SherlockModelService.proto
 
Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

### DrillHoleModeling
 
Drill hole properties used for exporting trace models.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModelingEnabled | [bool](#bool) |  | Determines if drill holes will be included in the exported model. |
| minHoleDiameter | [Measurement](#measurement) |  | All drill holes with a diameter less than this will not be included in the exported model. |
| maxEdgeLength | [Measurement](#measurement) |  | Set this to 0 to include all drill holes.<br><br>Specifies the size of the segments used to represent round drill holes by a polygon. |

### ExportAEDBRequest
 
Request to export an Electronics Desktop model.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the Electronics Desktop export file. |
| overwrite | [bool](#bool) |  | Overwrite existing file if true. |
| displayModel | [bool](#bool) |  | Display model after export if true. |

### ExportFEAModelRequest
 
Request to export an FEA model.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the export file. |
| analysis | [ExportFEAModelRequest.ExportAnalysis](#exportfeamodelrequestexportanalysis) |  | The ExportAnalysis enum representing the type of analysis that is being exported. |
| drillHoleParam | [ExportFEAModelRequest.DrillHoleParam](#exportfeamodelrequestdrillholeparam) |  | Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled. |
| detectLeadModeling | [string](#string) |  | If enabled, automatically enable lead modeling if any part has lead geometry defined, valid values are ENABLED/enabled or DISABLED/disabled. |
| leadModelParam | [ExportFEAModelRequest.LeadModelParam](#exportfeamodelrequestleadmodelparam) |  | Lead modeling parameter. |
| displayModel | [bool](#bool) |  | Display model after export. |
| clearFEADatabase | [bool](#bool) |  | Clear FEA Database before defining model. |
| useFEAModelID | [bool](#bool) |  | Use FEA Model ID. |
| coordinateUnits | [string](#string) |  | Units of exported model coordinates, valid values are "in", "mm", "m", "mil", "micron", "nm". |

### ExportFEAModelRequest.DrillHoleParam
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModeling | [string](#string) |  | Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| minHoleDiameter | [ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter](#exportfeamodelrequestdrillholeparamminholediameter) |  | Minimum hole diameter info for a drill hole. |
| maxEdgeLength | [ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength](#exportfeamodelrequestdrillholeparammaxedgelength) |  | Maximum edge length info for a drill hole. |

### ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Maximum edge length value. |
| unit | [string](#string) |  | Maximum edge length unit. |

### ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Minimum hole diameter value. |
| unit | [string](#string) |  | Minimum hole diameter unit. |

### ExportFEAModelRequest.LeadModelParam
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| leadModeling | [string](#string) |  | Enables or disables lead modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| leadElemOrder | [string](#string) |  | Element order, valid values are "First Order (Linear)", "Second Order (Quadratic)", or "Solid Shell". |
| maxMeshSize | [ExportFEAModelRequest.LeadModelParam.MaxMeshSize](#exportfeamodelrequestleadmodelparammaxmeshsize) |  | Max mesh size info for a lead model param. |
| verticalMeshSize | [ExportFEAModelRequest.LeadModelParam.VerticalMeshSize](#exportfeamodelrequestleadmodelparamverticalmeshsize) |  | Vertical mesh size info for a lead model param. |
| thicknessCount | [int32](#int32) |  | The number of elements through the lead thickness that will be created per lead. |
| aspectRatio | [int32](#int32) |  | The aspect ratio is multiplied by the lead thickness divided by the through thickness count to give the lead element height. |

### ExportFEAModelRequest.LeadModelParam.MaxMeshSize
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Max mesh size value. |
| unit | [string](#string) |  | Max mesh size unit. |

### ExportFEAModelRequest.LeadModelParam.VerticalMeshSize
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Vertical mesh size value. |
| unit | [string](#string) |  | Vertical mesh size unit. |

### ExportTraceModelRequest
 
Request to export one or many trace models.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceModelExportParams | [TraceModelExportParams](#tracemodelexportparams) | repeated | Parameters for a single trace model export. |

### ExportTraceReinforcementModelRequest
 
Request to export a trace reinforcement model.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the trace reinforcement export file. |
| overwrite | [bool](#bool) |  | Overwrite existing file if true. |
| displayModel | [bool](#bool) |  | Display model after export if true. |
| clearFEADatabase | [bool](#bool) |  | Clear FEA Database before defining model if true. |
| generateModelsForAllLayers | [bool](#bool) |  | Generate models for all layers. |
| traceParam | [ExportTraceReinforcementModelRequest.TraceParam](#exporttracereinforcementmodelrequesttraceparam) |  | Trace properties (Diameter Threshold and Minimum Hole Diameter for Shell/Beam). |
| traceDrillHoleParam | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam](#exporttracereinforcementmodelrequesttracedrillholeparam) |  | **Deprecated.** Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled. |
| drillHoleModeling | [DrillHoleModeling](#drillholemodeling) |  | Properties used for exporting drill holes. |
| coordinateUnits | [string](#string) |  | Units of exported model coordinates, valid values are "in", "mm", "m", "mil", "micron", "nm". |

### ExportTraceReinforcementModelRequest.TraceDrillHoleParam
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModeling | [string](#string) |  | Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| minHoleDiameter | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter](#exporttracereinforcementmodelrequesttracedrillholeparamminholediameter) |  | Minimum hole diameter info for a trace drill hole param. |
| maxEdgeLength | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength](#exporttracereinforcementmodelrequesttracedrillholeparammaxedgelength) |  | Maximum edge length info for a trace drill hole param. |

### ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Maximum edge length value. |
| unit | [string](#string) |  | Maximum edge length unit. |

### ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Minimum hole diameter value. |
| unit | [string](#string) |  | Minimum hole diameter unit. |

### ExportTraceReinforcementModelRequest.TraceParam
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diameterThreshold | [ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold](#exporttracereinforcementmodelrequesttraceparamdiameterthreshold) |  | Diameter threshold info for a trace parameter. |
| minHoleDiameterForShellOrBeam | [ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam](#exporttracereinforcementmodelrequesttraceparamminholediameterforshellorbeam) |  | Minimum hole diameter info for Shell or Beam for a trace parameter. |

### ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Diameter threshold value. |
| unit | [string](#string) |  | Diameter threshold unit. |

### ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Min. hole diameter value for Shell/Beam. |
| unit | [string](#string) |  | Min. hole diameter unit for Shell/Beam. |

### GenerateTraceModelRequest
 
Request to generate a trace model.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. If left empty, trace models will be generated for all CCAs and all of their copper layers. |
| copperLayerName | [string](#string) |  | Copper layer from which to generate the trace model. If left empty, trace models will be generated for all copper layers. |
| maxArcSegment | [double](#double) |  | Max arc segment. |
| maxArcSegmentUnits | [string](#string) |  | Max arc segment units. |
| minTraceArea | [double](#double) |  | Min trace area. |
| minTraceAreaUnits | [string](#string) |  | Min trace area units. |
| minHoleArea | [double](#double) |  | Min hole area. |
| minHoleAreaUnits | [string](#string) |  | Min hole area units. |
| useSnapshotForNonImageLayer | [bool](#bool) |  | Use an image to generate the trace model for layers that are not image layers. If a snapshot image exists for the layer, that snapshot is used. Otherwise this creates an image that is identical to creating a snapshot. |

### TraceModelExportParams
 
All parameters required to export a trace model.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | Sherlock CCA name. |
| filePath | [string](#string) |  | Full file path to the trace export file. |
| copperLayerName | [string](#string) |  | Name of the layer in the CCA to export. |
| overwriteExistingFile | [bool](#bool) |  | Option that determines if any existing files get overwritten. |
| displayModelAfterExport | [bool](#bool) |  | Option to display the model after the export is done. |
| clearFEADatabase | [bool](#bool) | optional | Clears FEA Database. Applicable for .apdl, and .cdb. This will be set to false if it is omitted for applicable file types. |
| useFEAModelID | [bool](#bool) |  | Use FEA Model ID. |
| coordUnits | [string](#string) | optional | Units of the coordinate system. Applicable to .py .wbjn, and .stp/.step. This will be set to mm if omitted for applicable file types. |
| pcbMeshPropParam | [TraceModelExportParams.PcbMeshPropParam](#tracemodelexportparamspcbmeshpropparam) |  | Properties used for exporting PCB mesh. |
| tracePropParam | [TraceModelExportParams.TracePropParam](#tracemodelexportparamstracepropparam) |  | Properties used for exporting the traces. |
| drillHoleModeling | [DrillHoleModeling](#drillholemodeling) |  | Properties used for exporting drill holes. |

### TraceModelExportParams.PcbMeshPropParam
 
Mesh properties used for exporting trace models.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| meshType | [MeshType](#meshtype) |  | Options of different trace meshing strategies. The options available depend on export file type. |
| isModelingRegionEnabled | [bool](#bool) |  | Determines if pre-defined modeling regions will be applied to the exported trace model. |

### TraceModelExportParams.TracePropParam
 
Trace properties used for exporting trace models.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceOutputs | [TraceOutputType](#traceoutputtype) |  | Options to select which trace regions to include in the 3D model. |
| elementOrder | [ElementOrder](#elementorder) |  | Type of FEA element to be used when modeling each component (First/linear, Second/quadratic, Solid Shell). |
| maxMeshSize | [Measurement](#measurement) |  | Value passed to FEA meshing tool to indicate the desired element sizes. |
| maxHolesPerTrace | [int32](#int32) |  | Maximum number of holes allowed in a trace before partitioning it into multiple traces. |


### ExportFEAModelRequest.ExportAnalysis
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| NaturalFreq | 0 | Natural Frequency Analysis. |
| HarmonicVibe | 1 | Harmonic Vibe Analysis. |
| ICTAnalysis | 2 | ICT Analysis. |
| MechanicalShock | 3 | Mechanical Shock Analysis. |
| RandomVibe | 4 | Random Vibe Analysis. |

### MeshType
 
Different ways meshes are created. The options
 available depend on the export file type.
 
| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 | Defines only geometric volumes without generating mesh elements. |
| BONDED | 1 | Defines meshed elements generated by Sherlock. |
| SWEEP | 2 | Defines geometric volumes along with commands to mesh the volumes depending on the file type. |

### TraceOutputType
 
Indicates which trace regions to include in the 3D model.
 
| Name | Number | Description |
| ---- | ------ | ----------- |
| ALL_REGIONS | 0 | Both Conductor and Dielectric. |
| CONDUCTOR_REGIONS | 1 | The traces themselves. |
| DIELECTRIC_REGIONS | 2 | Regions that surround the conductor regions (Ex. areas filled with resin). |


### SherlockModelService
 

 
| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| exportFEAModel | [.ExportFEAModelRequest](#exportfeamodelrequest) | [.ReturnCode](#returncode) | Export an FEA Model. |
| exportTraceReinforcementModel | [.ExportTraceReinforcementModelRequest](#exporttracereinforcementmodelrequest) | [.ReturnCode](#returncode) | Export a trace reinforcement model. |
| generateTraceModel | [.GenerateTraceModelRequest](#generatetracemodelrequest) | [.ReturnCode](#returncode) | Generate a trace model. |
| exportTraceModel | [.ExportTraceModelRequest](#exporttracemodelrequest) | [.ReturnCode](#returncode) | Export a trace model. |
| exportAEDB | [.ExportAEDBRequest](#exportaedbrequest) | [.ReturnCode](#returncode) | Export an Electronics Desktop model. |


Back to [Top](#table-of-contents)
 
## SherlockPartsService.proto
 
Copyright 2023-2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

### DeletePartsFromPartsListRequest
 
Request to delete parts from the parts list for a given project's CCA.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name for which parts will be deleted. |
| refDes | [string](#string) | repeated | The reference designator of the associated part to be deleted. |

### DeletePartsFromPartsListResponse
 
Contains the status of the delete parts operation as well as all the delete error messages.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| refDes | [string](#string) |  | The reference designator of the associated part. |

### ExportNetListRequest
 
Contains the options needed to export a net list to a delimited output file (csv but can have delimiters other than a comma).
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| outputFilePath | [string](#string) |  | Full path of the file where the table will be written. |
| overwriteExisting | [bool](#bool) |  | Flag to determine if existing files should be overwritten if they match the outputFilePath. False by default. |
| colDelimiter | [TableDelimiter](#tabledelimiter) |  | Enum that specifies supported delimiter character to be used. Set to COMMA by default. Not applicable to Excel files like xls, xlsx. |
| utf8Enabled | [bool](#bool) |  | Flag that specifies if UTF-8 will be used. False by default. Not applicable to Excel files like xls, xlsx. |

### ExportPartsListRequest
 
Request to export the parts list for all parts for a project CCA.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the export parts list .csv file. |

### GetBoardSidesRequest
 
Request to list valid board sides.
 

### GetBoardSidesResponse
 
Represents a list of valid board sides.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| boardSides | [string](#string) | repeated | Board sides. |

### GetPartLocationRequest
 
Request to get a part's location.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| refDes | [string](#string) |  | A comma separated list of reference designators for a list of parts, or a Ref Des for one part. |
| locationUnits | [string](#string) |  | Unit of length for the part location. Supported values are IN, MM, M, MIL, MICRON, and NM. |

### GetPartLocationResponse
 
Represents one or multiple parts' location properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| locationData | [GetPartLocationResponse.LocationData](#getpartlocationresponselocationdata) | repeated | List of location data for a part or list of parts in a specified project and CCA. |

### GetPartLocationResponse.LocationData
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  | Location of the part along the X axis. |
| y | [double](#double) |  | Location of the part along the Y axis. |
| rotation | [double](#double) |  | Rotation of the part on the board in degrees. |
| locationUnits | [string](#string) |  | Unit of length for the part location. |
| boardSide | [string](#string) |  | Side of board on which the component exists. |
| mirrored | [bool](#bool) |  | Indicates if the component is mirrored across the Y-axis. |
| refDes | [string](#string) |  | Ref Des for the corresponding part. |

### GetPartLocationUnitsRequest
 
Request to list valid location units.
 

### GetPartLocationUnitsResponse
 
Represents a list of valid location units.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| units | [string](#string) | repeated | Location units. |

### GetPartsListPropertiesRequest
 
Request to get the properties for a list of parts.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| refDes | [string](#string) | repeated | The reference designator for each part to get properties for. If not included, get properties for all parts in the CCA. |

### GetPartsListPropertiesResponse
 
Represents the properties for a part.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| refDes | [string](#string) |  | The reference designator of the part. |
| properties | [GetPartsListPropertiesResponse.Property](#getpartslistpropertiesresponseproperty) | repeated | All properties applicable to the part. |

### GetPartsListPropertiesResponse.Property
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Name of the property. |
| value | [string](#string) |  | Value of the property. |

### ImportPartsListRequest
 
Request to import a parts list for a project CCA.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| importFile | [string](#string) |  | Full file path to the parts list .csv file. |
| importAsUserSrc | [bool](#bool) |  | If true, set the data source of the properties to "User". Otherwise, set the data source to the name of the importFile. |

### ListPartsLibrariesRequest
 
Request to list the available parts libraries.
 

### ListPartsLibrariesResponse
 
Represents a list of available parts libraries.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| partLibrary | [string](#string) | repeated | Parts library name. |

### ListPartsNotUpdatedRequest
 
Request to get a list of parts not updated from the Sherlock Part Library.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

### ListPartsNotUpdatedResponse
 
Represents a list of parts not updated from the Sherlock Part Library.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| ccas | [ListPartsNotUpdatedResponse.CCA](#listpartsnotupdatedresponsecca) | repeated | List of CCAs containing Parts not updated. |

### ListPartsNotUpdatedResponse.CCA
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| parts | [ListPartsNotUpdatedResponse.CCA.Part](#listpartsnotupdatedresponseccapart) | repeated | List of Parts not updated for a CCA. |

### ListPartsNotUpdatedResponse.CCA.Part
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) |  | Reference designator for the part. |
| partNumber | [string](#string) |  | Part number. |

### UpdateLeadModelingRequest
 
Request to enable Lead Modeling for all non LEADLESS parts leads.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

### UpdatePadPropertiesRequest
 
Request to update one or more pad properties of one or more parts in a parts list.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name for which pad properties will be updated. |
| refDes | [string](#string) | repeated | The reference designator of the associated part to be updated. |

### UpdatePadPropertiesResponse
 
Contains the status of the pad properties update as well as all the update error messages.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| refDes | [string](#string) |  | The reference designator of the associated part. |

### UpdatePartsListFromAVLRequest
 
Request to update the parts list from AVL.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| matching | [MatchingMode](#matchingmode) |  | How sherlock matches parts in the AVL |
| duplication | [DuplicationMode](#duplicationmode) |  | How sherlock handles duplicate parts found. |
| avlPartNum | [AVLPartNum](#avlpartnum) |  | Update part number and vendor/manufacturer or part number only. |
| avlDesc | [AVLDescription](#avldescription) |  | Update description or not. |

### UpdatePartsListFromAVLResponse
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| numPartsUpdated | [int32](#int32) |  | Number of parts updated in the parts list. |
| updateErrors | [string](#string) | repeated | Specific errors that occured during update. |

### UpdatePartsListPropertiesRequest
 
Request to update one or more properties of one or more parts in a parts list.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name for which part properties will be updated. |
| partProperties | [UpdatePartsListPropertiesRequest.PartProperties](#updatepartslistpropertiesrequestpartproperties) | repeated | List of parts with properties to be updated. |

### UpdatePartsListPropertiesRequest.PartProperties
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) | repeated | The reference designator for each part to be updated. If not included, update properties for all parts in the CCA. |
| properties | [UpdatePartsListPropertiesRequest.PartProperties.Property](#updatepartslistpropertiesrequestpartpropertiesproperty) | repeated | Part properties to be updated. |

### UpdatePartsListPropertiesRequest.PartProperties.Property
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Name of property to be updated. |
| value | [string](#string) |  | Value to be applied to the chosen part property. |

### UpdatePartsListPropertiesResponse
 
Contains the status of the parts properties update as well as all the update error messages.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateErrors | [UpdatePartsListPropertiesResponse.PartPropertyError](#updatepartslistpropertiesresponsepartpropertyerror) | repeated | Part property update errors. |

### UpdatePartsListPropertiesResponse.PartPropertyError
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) | optional | The reference designator of the part. Not set for invalid property name errors. |
| message | [string](#string) |  | Error message when updating the part. |

### UpdatePartsListRequest
 
Request to update a parts list based on matching and duplication preferences provided.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| partLibrary | [string](#string) |  | Parts library name. |
| matching | [MatchingMode](#matchingmode) |  | Designates the matching mode for updates. |
| duplication | [DuplicationMode](#duplicationmode) |  | Designates how to handle duplications during update. |

### UpdatePartsListResponse
 
Contains the status of the update as well as all of the update error messages.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts update error messages. |

### UpdatePartsLocationsByFileRequest
 
Request to update one or more parts' locations using a CSV file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| numericFormat | [string](#string) |  | Numeric format for the file. If not provided, it will default to "English (United States)". |
| filePath | [string](#string) |  | File that contains the components and location properties. |

### UpdatePartsLocationsByFileResponse
 
Contains the status of the parts locations update as well as all the update error messages.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts locations update error messages. |

### UpdatePartsLocationsRequest
 
Request to set a part's location.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| partLoc | [UpdatePartsLocationsRequest.PartLocation](#updatepartslocationsrequestpartlocation) | repeated | List of part locations to be updated for a specified project and CCA. |

### UpdatePartsLocationsRequest.PartLocation
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) |  | Reference designator of the part. |
| x | [string](#string) |  | Location of the part along the X axis. |
| y | [string](#string) |  | Location of the part along the Y axis. |
| rotation | [string](#string) |  | Rotation of the part on the board in degrees. |
| locationUnits | [string](#string) |  | Unit of length for the part location. Supported values are IN, MM, M, MIL, MICRON, and NM. |
| boardSide | [string](#string) |  | Side of board on which the component exists. Supported values are TOP and BOTTOM. |
| mirrored | [string](#string) |  | Indicates if the component is mirrored across the Y-axis. Supported values are Y, and N. |

### UpdatePartsLocationsResponse
 
Contains the status of the parts locations update as well as all the update error messages.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts locations update error messages. |


### AVLDescription
 
Determines if the part description in the parts list 
will be updated by the AVL.
 
| Name | Number | Description |
| ---- | ------ | ----------- |
| AssignApprovedDescription | 0 | Assign approved description. |
| DoNotChangeDescription | 1 | Do not change description. |

### AVLPartNum
 
Determines what fields in the part list will get updated by the AVL.
 
| Name | Number | Description |
| ---- | ------ | ----------- |
| AssignInternalPartNum | 0 | Assign internal part number. |
| AssignVendorAndPartNum | 1 | Assign vendor & part number. |
| DoNotChangeVendorOrPartNum | 2 | Do not change vendor / part number. |

### DuplicationMode
 
Determines what happens when there are duplicate matches for parts in the part list
against parts in the AVL or Part Library.
 
| Name | Number | Description |
| ---- | ------ | ----------- |
| First | 0 | Uses first matched when there is duplication. |
| Error | 1 | Generates an error when there is duplication. |
| Ignore | 2 | Ignore the matches when there is duplication. |


### SherlockPartsService
 

 
| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| listPartsLibraries | [.ListPartsLibrariesRequest](#listpartslibrariesrequest) | [.ListPartsLibrariesResponse](#listpartslibrariesresponse) | List the available parts libraries. |
| updatePartsList | [.UpdatePartsListRequest](#updatepartslistrequest) | [.UpdatePartsListResponse](#updatepartslistresponse) | Update the parts list for a project's CCA. |
| updatePartsListFromAVL | [.UpdatePartsListFromAVLRequest](#updatepartslistfromavlrequest) | [.UpdatePartsListFromAVLResponse](#updatepartslistfromavlresponse) | Update the parts list from the AVL. |
| updatePartsListProperties | [.UpdatePartsListPropertiesRequest](#updatepartslistpropertiesrequest) | [.UpdatePartsListPropertiesResponse](#updatepartslistpropertiesresponse) | Update the values of given parts. |
| listPartsNotUpdated | [.ListPartsNotUpdatedRequest](#listpartsnotupdatedrequest) | [.ListPartsNotUpdatedResponse](#listpartsnotupdatedresponse) | List the parts that have not been updated from the Sherlock Part Library. |
| updateLeadModeling | [.UpdateLeadModelingRequest](#updateleadmodelingrequest) | [.ReturnCode](#returncode) | Enable lead modeling for all non LEADLESS parts leads in a project's CCA. |
| exportPartsList | [.ExportPartsListRequest](#exportpartslistrequest) | [.ReturnCode](#returncode) | Export parts list for all parts given a project's CCA. |
| importPartsList | [.ImportPartsListRequest](#importpartslistrequest) | [.ReturnCode](#returncode) | Import a parts list for a given a project's CCA. |
| updatePartsLocations | [.UpdatePartsLocationsRequest](#updatepartslocationsrequest) | [.UpdatePartsLocationsResponse](#updatepartslocationsresponse) | Update one or more parts' locations. |
| updatePartsLocationsByFile | [.UpdatePartsLocationsByFileRequest](#updatepartslocationsbyfilerequest) | [.UpdatePartsLocationsByFileResponse](#updatepartslocationsbyfileresponse) | Update one or more parts' locations using a CSV file. |
| getPartLocationUnits | [.GetPartLocationUnitsRequest](#getpartlocationunitsrequest) | [.GetPartLocationUnitsResponse](#getpartlocationunitsresponse) | Get a list of valid part location units. |
| getBoardSides | [.GetBoardSidesRequest](#getboardsidesrequest) | [.GetBoardSidesResponse](#getboardsidesresponse) | Get a list of valid board side values. |
| getPartLocation | [.GetPartLocationRequest](#getpartlocationrequest) | [.GetPartLocationResponse](#getpartlocationresponse) | Get the location properties for a part. This is deprecated as of 25R2. |
| getPartsListProperties | [.GetPartsListPropertiesRequest](#getpartslistpropertiesrequest) | [.GetPartsListPropertiesResponse](#getpartslistpropertiesresponse) stream | Get the properties for a list of parts |
| exportNetList | [.ExportNetListRequest](#exportnetlistrequest) | [.ReturnCode](#returncode) | Export the net list to a file |
| updatePadProperties | [.UpdatePadPropertiesRequest](#updatepadpropertiesrequest) | [.UpdatePadPropertiesResponse](#updatepadpropertiesresponse) stream | Updates the pad properties for one or more parts for a given project's CCA. |
| deletePartsFromPartsList | [.DeletePartsFromPartsListRequest](#deletepartsfrompartslistrequest) | [.DeletePartsFromPartsListResponse](#deletepartsfrompartslistresponse) stream | Delete parts from the parts list for a given project's CCA. |


Back to [Top](#table-of-contents)
 
## SherlockProjectService.proto
 
Copyright 2024-2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

### AddCcaRequest
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Name of the project. |
| CCAs | [CCA](#cca) | repeated | CCAs to add. |

### AddOutlineFileRequest
 
Request to add outline files to a Sherlock project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| outlineFiles | [OutlineFile](#outlinefile) | repeated | Outline files and properties to add to a Sherlock project. |

### AddProjectRequest
 
Request to add a project to Sherlock.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| category | [string](#string) |  | Project category. |
| description | [string](#string) |  | Project description. |

### AddStrainMapRequest
 
Request to add strain map files to CCAs in a Sherlock project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| strainMapFiles | [AddStrainMapRequest.StrainMapFile](#addstrainmaprequeststrainmapfile) | repeated | Strain map files and associated properties to be added. |

### AddStrainMapRequest.StrainMapFile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| strainMapFile | [string](#string) |  | Full path to the strain map file to be added. |
| fileComment | [string](#string) |  | File comment text. |
| headerRowCount | [int32](#int32) |  | Number of rows before the column header in the file. |
| referenceIDColumn | [string](#string) |  | Reference ID column name. |
| strainColumn | [string](#string) |  | Strain column name. |
| strainUnits | [string](#string) |  | Strain units used in the strain map file. Valid units: µε, ε. |
| cca | [string](#string) | repeated | Project CCA names to add the file to. |
| numericFormat | [string](#string) |  | Numeric format for values. |
| fileType | [AddStrainMapRequest.StrainMapFile.FileType](#addstrainmaprequeststrainmapfilefiletype) |  | Type of the strain map file. |
| imageFile | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile](#addstrainmaprequeststrainmapfilestrainmapimagefile) |  | Image strain map file properties. |

### AddStrainMapRequest.StrainMapFile.StrainMapImageFile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| coordinateUnits | [string](#string) |  | Coordinate units used for board, lengend and image boundaries. |
| boardBounds | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.NodeCoordinate](#addstrainmaprequeststrainmapfilestrainmapimagefilenodecoordinate) | repeated | Coordinates of the nodes which make up the board outline. |
| imageBounds | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.ImageCoordinate](#addstrainmaprequeststrainmapfilestrainmapimagefileimagecoordinate) |  | Coordinates of the board bounds within the image. |
| legendBounds | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendCoordinate](#addstrainmaprequeststrainmapfilestrainmapimagefilelegendcoordinate) |  | Coordinates of the bounds of legend within the image. |
| legendOrientation | [AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendOrientation](#addstrainmaprequeststrainmapfilestrainmapimagefilelegendorientation) |  | Specify the legend orientation. |
| minStrain | [double](#double) |  | Minimum strain value. |
| maxStrain | [double](#double) |  | Maximum strain value. |
| strainUnits | [string](#string) |  | Units for minimum and maximum strain values. |

### AddStrainMapRequest.StrainMapFile.StrainMapImageFile.ImageCoordinate
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| imageX | [double](#double) |  | X-coordinate of the upper left corner. |
| imageY | [double](#double) |  | Y-coordinate of the upper left corner. |
| imageH | [double](#double) |  | Height of the image. |
| imageW | [double](#double) |  | Width of the image. |

### AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendCoordinate
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| legendX | [double](#double) |  | X-coordinate of the upper left corner. |
| legendY | [double](#double) |  | Y-coordinate of the upper left corner. |
| legendH | [double](#double) |  | Height of the legend. |
| legendW | [double](#double) |  | Width of the legend. |

### AddStrainMapRequest.StrainMapFile.StrainMapImageFile.NodeCoordinate
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertexX | [double](#double) |  | X-coordinate of the node. |
| vertexY | [double](#double) |  | Y-coordinate of the node. |

### AddStrainMapResponse
 
Response from adding strain map files.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### AddThermalMapRequest
 
Request to add thermal map files to a Sherlock project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalMapFiles | [AddThermalMapRequest.AddThermalMap](#addthermalmaprequestaddthermalmap) | repeated | Thermal map files and associated properties to be added. |

### AddThermalMapRequest.AddThermalMap
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| thermalMapFile | [string](#string) |  | Full path to the thermal map file to be added. |
| thermalMapFileProperties | [ThermalMapFile](#thermalmapfile) |  | Thermal map file properties. |

### AddThermalMapResponse
 
Response from adding thermal map files.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |

### CCA
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the circuit card. |
| description | [string](#string) | optional | Description of the circuit card. |
| defaultSolderType | [string](#string) | optional | Default solder type. |
| defaultStencilThickness | [double](#double) | optional | Default stencil thickness. |
| defaultStencilThicknessUnits | [string](#string) | optional | Default stencil thickness units. |
| defaultPartTempRise | [double](#double) | optional | Default part temp rise. |
| defaultPartTempRiseUnits | [string](#string) | optional | Default part temp rise units. |
| guessPartPropertiesEnabled | [bool](#bool) | optional | Whether to enable guess part properties. |

### CreateCcaFromModelingRegionRequest
 
Request for creating CCA from a specified modeling region.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cCAsFromModelingRegions | [CreateCcaFromModelingRegionRequest.CCAFromModelingRegion](#createccafrommodelingregionrequestccafrommodelingregion) | repeated | CCAs from modeling regions to add. |

### CreateCcaFromModelingRegionRequest.CCAFromModelingRegion
 
Request for each individual property of cca
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Project CCA name. |
| modelingRegionID | [string](#string) |  | ID of CCA's modeling region used to create new CCA. |
| description | [string](#string) |  | CCA's description. |
| defaultSolderType | [string](#string) | optional | Default solder type. |
| defaultStencilThickness | [double](#double) | optional | Default stencil thickness. |
| defaultStencilThicknessUnits | [string](#string) | optional | Default stencil thickness units. |
| defaultPartTempRise | [double](#double) | optional | Default part temp rise. |
| defaultPartTempRiseUnits | [string](#string) | optional | Default part temp rise units. |
| guessPartProperties | [bool](#bool) | optional | Whether to enable guess part properties. |
| generateImageLayers | [bool](#bool) | optional | Whether to generate image layers |

### DeleteProjectRequest
 
Request for deleting project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Project name of project to be deleted. |

### ExportProjectRequest
 
Request for exporting the designated Sherlock project as a .zip file.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| exportDesignFiles | [bool](#bool) |  | If true, export all design files assigned to the project. |
| exportResultFiles | [bool](#bool) |  | If true, export all analysis module results. |
| exportArchivedResults | [bool](#bool) |  | If true, export all archived result files. |
| exportUserFiles | [bool](#bool) |  | If true, export all user properties and custom data files. |
| exportLogFiles | [bool](#bool) |  | If true, export all Sherlock console and application logs. |
| exportSystemData | [bool](#bool) |  | If true, export all system technical data. |
| exportFileDirectory | [string](#string) |  | Full path of the directory where the .zip file is to be exported. |
| exportFileName | [string](#string) |  | Name of the zip file containing the project's exported data. |
| overwriteExistingFile | [bool](#bool) |  | If true, an existing file will be overwritten. |

### GenCCAReportRequest
 
Request for project CCA report.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) |  | Project CCA name. |
| author | [string](#string) |  | Name of the author who generates the report. |
| company | [string](#string) |  | Name of author's company. |

### GenCCAReportResponse
 
Streams the project CCA report in chunks.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [bytes](#bytes) |  | A chunk of the project CCA report being returned in increments. |
| size | [int32](#int32) |  | Size of the chunk returned. |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |

### GenReportRequest
 
Request for project report.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| author | [string](#string) |  | Name of the author who generates the report. |
| company | [string](#string) |  | Name of author's company. |

### GenReportResponse
 
Streams the project report in chunks.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [bytes](#bytes) |  | A chunk of the project report being returned in increments. |
| size | [int32](#int32) |  | Size of the chunk returned. |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |

### ImportGDSIIRequest
 
Request for importing a GDSII project file and any optional config files.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gdsiiFile | [string](#string) |  | Full path to the GDSII file (.gds, .sf, or .strm) to be imported. |
| technologyFile | [string](#string) |  | Full path to the optional technology file (.xml, .tech. or .layermap) to be imported. A file with a .tech extension also requires a valid layer map file (.map) to be imported. |
| layerMapFile | [string](#string) |  | Full path to the optional layer map file (.map) to be imported. |
| project | [string](#string) |  | Sherlock project name. If empty, the filename will be used for the project name. |
| ccaName | [string](#string) |  | Project CCA name. If empty, the filename will be used for the CCA name. |
| guessPartProperties | [bool](#bool) |  | Option to guess part properties. |
| polylineSimplificationEnabled | [bool](#bool) |  | Option to enable polyline simplification. |
| polylineTolerance | [double](#double) |  | Polyline simplification tolerance, if enabled. |
| polylineToleranceUnits | [string](#string) |  | Polyline simplification tolerance units, if enabled. |

### ImportIPC2581Request
 
Request for importing an IPC-2581 archive.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| archiveFile | [string](#string) |  | Full path to the IPC-2581 archive file to be imported. |
| project | [string](#string) |  | Sherlock project name. If empty, the filename will be used for the project name. |
| ccaName | [string](#string) |  | Project CCA name. If empty, the filename will be used for the CCA name. |
| includeOtherLayers | [bool](#bool) |  | Option to include other layers. |
| guessPartProperties | [bool](#bool) |  | Option to guess part properties. |
| polylineSimplification | [bool](#bool) |  | Option to enable polyline simplification. |
| polylineTolerance | [double](#double) |  | Polyline simplification tolerance. |
| polylineToleranceUnits | [string](#string) |  | Polyline simplification tolerance units. |

### ImportODBRequest
 
Request for importing an ODB++ archive.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| archiveFile | [string](#string) |  | Full path to the ODB++ archive file to be imported. |
| project | [string](#string) |  | Sherlock project name. If empty, the filename will be used for the project name. |
| ccaName | [string](#string) |  | Project CCA name. If empty, the filename will be used for the CCA name. |
| processLayerThickness | [bool](#bool) |  | Option to assign stackup thickness. |
| includeOtherLayers | [bool](#bool) |  | Option to include other layers. |
| processCutoutFile | [bool](#bool) |  | Option to process cutouts. |
| guessPartProperties | [bool](#bool) |  | Option to guess part properties. |
| imsStackup | [bool](#bool) |  | Option to generate IMS stackup. |
| polylineSimplification | [bool](#bool) |  | Option to enable polyline simplification. |
| polylineTolerance | [double](#double) |  | Polyline simplification tolerance. |
| polylineToleranceUnits | [string](#string) |  | Polyline simplification tolerance units. |

### ImportProjectZipRequest
 
Request for importing a .zip project archive when Sherlock is in multiple project mode.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| category | [string](#string) |  | Sherlock project category. |
| archiveFile | [string](#string) |  | Full path to the .zip archive file containing the project data. |

### ImportProjectZipSingleModeRequest
 
Request for importing a .zip project archive when Sherlock is in single project mode.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| projZipRequest | [ImportProjectZipRequest](#importprojectziprequest) |  | Encapsulates project name, category and full path to project .zip archive. |
| destFileDir | [string](#string) |  | Directory in which the Sherlock project folder will be created. |

### ListCCAsRequest
 
Request to list CCA's and sub-assembly CCA's for a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to return. |

### ListCCAsResponse
 
Represents the circuit cards, their properties, and sub-assemblies for a Sherlock project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| ccas | [ListCCAsResponse.CCA](#listccasresponsecca) | repeated | CCA's assigned to the project. |

### ListCCAsResponse.CCA
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| subAssemblies | [ListCCAsResponse.CCA](#listccasresponsecca) | repeated | Sub-assemblies assigned to the CCA. |

### ListStrainMapsRequest
 
Request to list CCA strain maps for a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to list strain maps for. |

### ListStrainMapsResponse
 
Lists the strain maps assigned to the project CCA's.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of errors encountered. |
| ccaStrainMaps | [ListStrainMapsResponse.CcaStrainMap](#liststrainmapsresponseccastrainmap) | repeated | CCA strain maps assigned to the project. |

### ListStrainMapsResponse.CcaStrainMap
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| strainMaps | [string](#string) | repeated | Strain map names assigned to the CCA. |

### ListThermalMapsRequest
 
Request to list Thermal map files and their types for a project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| cca | [string](#string) | repeated | Optional project CCA names to list thermal maps for. |

### ListThermalMapsResponse
 
Represents the thermal map files and their types for a Sherlock project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of errors encountered. |
| ccaThermalMaps | [ListThermalMapsResponse.CcaThermalMap](#listthermalmapsresponseccathermalmap) | repeated | CCA thermal map files assigned to the project. |

### ListThermalMapsResponse.CcaThermalMap
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Project CCA name. |
| thermalMaps | [ListThermalMapsResponse.CcaThermalMap.ThermalMap](#listthermalmapsresponseccathermalmapthermalmap) | repeated | Thermal map files assigned to the CCA. |

### ListThermalMapsResponse.CcaThermalMap.ThermalMap
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileName | [string](#string) |  | Name of the Thermal Map file. |
| fileType | [string](#string) |  | Thermal map file type. Possible values are: "Icepak Thermal Map (TMAP)", "Thermal Map (CSV)", "Thermal Map (Excel)", "Thermal Map (Image)". |

### OutlineFile
 
Defines an outline file and its properties to add to a Sherlock project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileName | [string](#string) |  | The name of the outline file to add. |
| fileComment | [string](#string) |  | Comment or description for the file. |
| fileType | [OutlineFile.FileType](#outlinefilefiletype) |  | Type of outline file. |
| csvExcelFile | [OutlineFile.CsvExcelOutlineFile](#outlinefilecsvexceloutlinefile) |  | Used to add CSV and Excel outline files. |
| gerberFile | [OutlineFile.GerberOutlineFile](#outlinefilegerberoutlinefile) |  | Used to add Gerber outline files. |
| cca | [string](#string) | repeated | List of CCA names to add the file to. |

### OutlineFile.CsvExcelOutlineFile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| headerRowCount | [int32](#int32) |  | Number of rows before the column header in the file. |
| xLocationColumn | [string](#string) |  | X location column name. |
| yLocationColumn | [string](#string) |  | Y location column name. |
| locationUnits | [string](#string) |  | Units for location values. |

### OutlineFile.GerberOutlineFile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| parseDecimalFirst | [bool](#bool) |  | Option to parse decimals based on the length of the format specifier. |

### ThermalMapFile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileName | [string](#string) |  | The name of the thermal file to update. |
| fileType | [ThermalMapFile.FileType](#thermalmapfilefiletype) |  | Thermal file type. |
| fileComment | [string](#string) |  | Include a comment or description for the file. |
| thermalBoardSide | [ThermalMapFile.ThermalBoardSide](#thermalmapfilethermalboardside) |  | Thermal board side. |
| csvExcelFile | [ThermalMapFile.CsvExcelFile](#thermalmapfilecsvexcelfile) |  | Used to CSV and Excel files. |
| imageFile | [ThermalMapFile.ImageFile](#thermalmapfileimagefile) |  | Used to add properties to Image files. |
| icepakFile | [ThermalMapFile.IcepakFile](#thermalmapfileicepakfile) |  | Used to add properties to Icepak TMAP files. |
| thermalProfiles | [string](#string) | repeated | List of thermal profiles. |
| cca | [string](#string) | repeated | Project CCA Name. |

### ThermalMapFile.CsvExcelFile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| headerRowCount | [int32](#int32) |  | Number of rows before the column header in the file. |
| referenceIDColumn | [string](#string) |  | Reference ID column. |
| temperatureColumn | [string](#string) |  | Temperature column. |
| temperatureUnits | [string](#string) |  | Units for temperature values. |
| numericFormat | [string](#string) |  | Numeric format for values. |

### ThermalMapFile.IcepakFile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| temperatureOffset | [double](#double) |  | Temperature offset. |
| temperatureOffsetUnits | [string](#string) |  | Units for temperature offset values. |

### ThermalMapFile.ImageFile
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| coordinateUnits | [string](#string) |  | Coordinate units used for board, lengend and image boundaries. |
| boardBounds | [ThermalMapFile.ImageFile.NodeCoordinate](#thermalmapfileimagefilenodecoordinate) | repeated | Coordinates of the nodes which make up the board outline. |
| imageBounds | [ThermalMapFile.ImageFile.ImageCoordinate](#thermalmapfileimagefileimagecoordinate) |  | Coordinates of the board bounds within the image. |
| legendBounds | [ThermalMapFile.ImageFile.LegendCoordinate](#thermalmapfileimagefilelegendcoordinate) |  | Coordinates of the bounds of legend within the image. |
| legendOrientation | [ThermalMapFile.ImageFile.LegendOrientation](#thermalmapfileimagefilelegendorientation) |  | Specify the legend orientation. |
| minTemperature | [double](#double) |  | Minimum temperature value. |
| minTemperatureUnits | [string](#string) |  | Units for minimum temperature value. |
| maxTemperature | [double](#double) |  | Maximum temperature value. |
| maxTemperatureUnits | [string](#string) |  | Units for maximum temperature value. |

### ThermalMapFile.ImageFile.ImageCoordinate
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| imageX | [double](#double) |  | X-coordinate of the upper left corner. |
| imageY | [double](#double) |  | Y-coordinate of the upper left corner. |
| imageH | [double](#double) |  | Height of the image. |
| imageW | [double](#double) |  | Width of the image. |

### ThermalMapFile.ImageFile.LegendCoordinate
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| legendX | [double](#double) |  | X-coordinate of the upper left corner. |
| legendY | [double](#double) |  | Y-coordinate of the upper left corner. |
| legendH | [double](#double) |  | Height of the legend. |
| legendW | [double](#double) |  | Width of the legend. |

### ThermalMapFile.ImageFile.NodeCoordinate
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertexX | [double](#double) |  | X-coordinate of the node. |
| vertexY | [double](#double) |  | Y-coordinate of the node. |

### UpdateThermalMapRequest
 
Request to update thermal map files to a Sherlock project.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| thermalMapFiles | [ThermalMapFile](#thermalmapfile) | repeated | Thermal Map files. |

### UpdateThermalMapsResponse
 
Response from updating thermal map files.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| errors | [string](#string) | repeated | List of validation errors. |


### AddStrainMapRequest.StrainMapFile.FileType
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| CSV | 0 | Csv file. |
| Excel | 1 | Excel file. |
| Image | 2 | Image file. |

### AddStrainMapRequest.StrainMapFile.StrainMapImageFile.LegendOrientation
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Horizontal | 0 | Horizontal legend orientation. |
| Vertical | 1 | Vertical legend orientation. |

### OutlineFile.FileType
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Default enum to catch invalid file type. |
| CsvExcel | 1 | CSV or Excel outline file. |
| Gerber | 2 | Gerber outline file. |
| IPC2581 | 3 | IPC2581 outline file. |

### ThermalMapFile.FileType
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| CSV | 0 | Csv file. |
| Excel | 1 | Excel file. |
| Image | 2 | Image file. |
| TMAP | 3 | Icepack file. |

### ThermalMapFile.ImageFile.LegendOrientation
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Horizontal | 0 | Horizontal legend orientation. |
| Vertical | 1 | Vertical legend orientation. |

### ThermalMapFile.ThermalBoardSide
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Bottom | 0 | Bottom side of the board. |
| Both | 1 | Both sides of the board. |
| Top | 2 | Top side of the board. |


### SherlockProjectService
 

 
| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| genReport | [.GenReportRequest](#genreportrequest) | [.GenReportResponse](#genreportresponse) stream | Generates the project report and return it via streaming. |
| genCCAReport | [.GenCCAReportRequest](#genccareportrequest) | [.GenCCAReportResponse](#genccareportresponse) stream | Generates the project CCA report and return it via streaming. |
| importODBArchive | [.ImportODBRequest](#importodbrequest) | [.ReturnCode](#returncode) | Imports an ODB++ archive. |
| importIPC2581Archive | [.ImportIPC2581Request](#importipc2581request) | [.ReturnCode](#returncode) | Imports an IPC-2581 archive. |
| importProjectZipArchive | [.ImportProjectZipRequest](#importprojectziprequest) | [.ReturnCode](#returncode) | Imports a zipped project archive -- multiple project mode. |
| importProjectZipArchiveSingleMode | [.ImportProjectZipSingleModeRequest](#importprojectzipsinglemoderequest) | [.ReturnCode](#returncode) | Imports a zipped project archive -- single project mode. |
| importGDSIIFile | [.ImportGDSIIRequest](#importgdsiirequest) | [.ReturnCode](#returncode) | Imports a GDSII project file and any optional config file. |
| deleteProject | [.DeleteProjectRequest](#deleteprojectrequest) | [.ReturnCode](#returncode) | Delete a project from Sherlock. |
| addStrainMap | [.AddStrainMapRequest](#addstrainmaprequest) | [.AddStrainMapResponse](#addstrainmapresponse) | Add a strain map files to a Sherlock project. |
| listStrainMaps | [.ListStrainMapsRequest](#liststrainmapsrequest) | [.ListStrainMapsResponse](#liststrainmapsresponse) | Returns a list of circuit cards and their assigned strain maps for a given Sherlock project. |
| listCCAs | [.ListCCAsRequest](#listccasrequest) | [.ListCCAsResponse](#listccasresponse) | Returns a list of circuit cards, their properties, and sub-assemblies for a given Sherlock project. |
| addProject | [.AddProjectRequest](#addprojectrequest) | [.ReturnCode](#returncode) | Add a project to Sherlock. |
| addCCA | [.AddCcaRequest](#addccarequest) | [.ReturnCode](#returncode) | Creates a new circuit card assembly. |
| listThermalMaps | [.ListThermalMapsRequest](#listthermalmapsrequest) | [.ListThermalMapsResponse](#listthermalmapsresponse) | Returns a list of thermal map files and their types for a given Sherlock project. |
| updateThermalMaps | [.UpdateThermalMapRequest](#updatethermalmaprequest) | [.UpdateThermalMapsResponse](#updatethermalmapsresponse) | Update thermal map files to a Sherlock project. |
| addThermalMaps | [.AddThermalMapRequest](#addthermalmaprequest) | [.AddThermalMapResponse](#addthermalmapresponse) | Add a thermal map to a Sherlock project. |
| exportProject | [.ExportProjectRequest](#exportprojectrequest) | [.ReturnCode](#returncode) | Exports project to a zipped archive file. |
| createCCAFromModelingRegion | [.CreateCcaFromModelingRegionRequest](#createccafrommodelingregionrequest) | [.ReturnCode](#returncode) | Creates a CCA from a given modeling region |
| addOutlineFiles | [.AddOutlineFileRequest](#addoutlinefilerequest) | [.ReturnCode](#returncode) stream | Add outline files to Sherlock project CCA's. |


Back to [Top](#table-of-contents)
 
## SherlockService.proto
 
Copyright 2020-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

The APIs in this service should only be used for Sherlock integration with Workbench.

### ClientMessage
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| clientMessage | [string](#string) |  | Incoming message from Workbench in bi-directional stream. |

### ExportRequest
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exportCcaName | [string](#string) |  | CCA name. |
| destGeometryFile | [string](#string) |  | Destination directory for exported geometry and materials. |
| systemName | [string](#string) |  | gRPC system name. |
| componentName | [string](#string) |  | gRPC component name. |
| analysis | [ExportRequest.ExportAnalysis](#exportrequestexportanalysis) |  | Type of analysis to export. |

### ExportTraceReinforcementRequest
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exportCcaName | [string](#string) |  | Name of CCA. |
| destGeometryFile | [string](#string) |  | Destination directory for geometry files. |
| systemName | [string](#string) |  | gRPC system name. |
| componentName | [string](#string) |  | gRPC component name. |

### GetCCARequest
 

 

### GetCCAResponse
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| ccaNames | [string](#string) | repeated | List of CCA names for a specified project. |

### ImportRequest
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resultFile | [string](#string) |  | Name of result file (.rst) to import. |
| projectName | [string](#string) |  | Name of project associated with the result file. |
| ccaName | [string](#string) |  | Name of CCA associated with the result file. |
| analysis | [ImportRequest.ImportAnalysis](#importrequestimportanalysis) |  | Type of analysis result. |
| modalResultFile | [string](#string) |  | File name of modal result. |
| phaseName | [string](#string) |  | The life cycle phase of the event associated with the results file. |
| eventName | [string](#string) |  | The life cycle event associated with the results file. |
| modelTransform | [ImportRequest.ModelTransform](#importrequestmodeltransform) |  | Model transformation info associated with the results. |
| analysisImports | [ImportRequest.AnalysisImport](#importrequestanalysisimport) | repeated | List of various analysis results to import and the associated files. |

### ImportRequest.AnalysisImport
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of CCA. |
| analysis | [ImportRequest.ImportAnalysis](#importrequestimportanalysis) |  | Type of analysis result. |
| rsts | [ImportRequest.AnalysisImport.rst](#importrequestanalysisimportrst) | repeated | List of results file to import. |
| modelTransform | [ImportRequest.ModelTransform](#importrequestmodeltransform) |  | Model transformation info for the imported analysis results. |

### ImportRequest.AnalysisImport.rst
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resultFile | [string](#string) |  | Results file to import. |
| modalResultFile | [string](#string) |  | Modal results file to import. |
| phaseName | [string](#string) |  | The life cycle phase of the event associated with the results file. |
| eventName | [string](#string) |  | The life cycle event associated with the results file. |

### ImportRequest.ModelTransform
 
Indicate the model transform detection to use.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| detectTransform | [ImportRequest.ModelTransform.DetectTransform](#importrequestmodeltransformdetecttransform) |  | Type of model transformation detection to use. |
| transformX | [double](#double) |  | Model translation applied in X direction. |
| transformY | [double](#double) |  | Model translation applied in Y direction. |
| transformZ | [double](#double) |  | Model translation applied in Z direction. |
| transformRotX | [double](#double) |  | Model rotation (in degrees) applied in X direction. |
| transformRotY | [double](#double) |  | Model rotation (in degrees) applied in Y direction. |
| transformRotZ | [double](#double) |  | Model rotation (in degrees) applied in Z direction. |

### OpenProjectRequest
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directory | [string](#string) |  | Directory location of the project to open. |

### SaveProjectRequest
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directory | [string](#string) |  | Directory location where the project is to be saved. |

### ServerMessage
 
This is the message that is sent to Workbench whenever a relevant addition/update/deletion is made within Sherlock 
that would affect the same project that is open in WB.

Note that the enum Item refers to Workbench module terminology for the request changes.
These items are in a hierarchy and any changes or modifications flow downstream:
Project -> Setup -> Life Prediction

If the Project item needs to be updated then that automatically means that
Setup and Life Prediction will be updated at well. Therefore, only one ServerMessage needs to
be sent to Workbench with Item = Project.

States are all inclusive based on the states that are recognized in Workbench.  Some of these may never need to be used
in ServerMessage but the enum contains the complete set just in case they are needed in the future, i.e., if the granularity
of the Sherlock changes become more finely-grained. For now we are using just the Modified state when constructing a 
ServerMessage and sending it to WB.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| newState | [ServerMessage.State](#servermessagestate) |  | The enum represents the states that are recognized in Workbench, inclusive. For now, Sherlock is just returning State.Modified. |
| updatedItem | [ServerMessage.Item](#servermessageitem) |  | Represents the first module in Workbench that is affected by the Sherlock change. |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |

### SetWorkingDirRequest
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directory | [string](#string) |  | Path to set as working directory location for Sherlock projects. |


### ExportRequest.ExportAnalysis
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| NF | 0 | Natural Frequency analysis type. |
| HV | 1 | Harmonic Vibe analysis type. |
| ICT | 2 | ICT Analysis type. |
| SH | 3 | Mechanical Shock analysis type.` |
| RV | 4 | Random Vibe analysis type. |

### ImportRequest.ImportAnalysis
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| NaturalFreq | 0 | Natural Frequency result type. |
| HarmonicVibe | 1 | Harmonic Vibe result type. |
| ICTAnalysis | 2 | ICT Analysis result type. |
| MechanicalShock | 3 | Mechanical Shock result type. |
| RandomVibe | 4 | Random Vibe result type. |

### ImportRequest.ModelTransform.DetectTransform
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| DISABLED | 0 | No model transformation is performed. |
| ENABLED | 1 | Sherlock automatically detects the model transformation. |
| MANUAL | 2 | User provides model transformation parameters. |

### ServerMessage.Item
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Project | 0 | Project = WB/Mech Model Change. |
| Setup | 1 | Setup = Sherlock Pre. |
| LifePrediction | 2 | Life Prediction = Sherlock Post Change. |

### ServerMessage.State
 

 
| Name | Number | Description |
| ---- | ------ | ----------- |
| Disabled | 0 | Workbench state -- not currently used. |
| EditRequired | 1 | Workbench state -- not currently used. |
| Incomplete | 2 | Workbench state -- not currently used. |
| InputChangesPending | 3 | Workbench state -- not currently used. |
| InternalError | 4 | Workbench state -- not currently used. |
| Interrupted | 5 | Workbench state -- not currently used. |
| Modified | 6 | A change occurred in Sherlock for which Workbench is to be notified. Only state currently used in Sherlock for Workbench notification. |
| OutOfDate | 7 | Workbench state -- not currently used. |
| Unfulfilled | 8 | Workbench state -- not currently used. |
| UpToDate | 9 | Workbench state -- not currently used. |


### SherlockService
 

 
| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| openProject | [.OpenProjectRequest](#openprojectrequest) | [.ReturnCode](#returncode) | Opens specific Sherlock project given the full path. |
| saveProject | [.SaveProjectRequest](#saveprojectrequest) | [.ReturnCode](#returncode) | Saves all Sherlock project files given the destination path. |
| export | [.ExportRequest](#exportrequest) | [.ReturnCode](#returncode) | Export request for geometry and materials given the full destination directory and file names. |
| importRst | [.ImportRequest](#importrequest) | [.ReturnCode](#returncode) | Request for Sherlock to import the given .rst file. |
| getCCA | [.GetCCARequest](#getccarequest) | [.GetCCAResponse](#getccaresponse) | Returns a list of circuit board names given a project name. |
| exportTraceReinforcement | [.ExportTraceReinforcementRequest](#exporttracereinforcementrequest) | [.ReturnCode](#returncode) | Export Trace Reinforcement model request given the full destination directory and file names. |
| isSherlockClientLoading | [.IsSherlockClientLoadingRequest](#issherlockclientloadingrequest) | [.ReturnCode](#returncode) | Check if SherlockClient is still loading. |
| setWorkingDir | [.SetWorkingDirRequest](#setworkingdirrequest) | [.ReturnCode](#returncode) | Set working directory. <br>In the case where there is not already a project loaded in Sherlock, this API sets the default project directory for any new project created.<br>In the case where there is already a project loaded in Sherlock, this API reloads the project from the new directory provided and refreshes the Sherlock UI. |
| eventCommunication | [.ClientMessage](#clientmessage) stream | [.ServerMessage](#servermessage) stream | Bi-directional stream between Sherlock and Workbench that notifies Workbench of specific changes/updates made within <br>Sherlock that would affect the same project open in Workbench. |


Back to [Top](#table-of-contents)
 
## SherlockStackupService.proto
 
Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

### GenStackupRequest
 
Request to generate stackup layers for a CCA.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| boardThickness | [double](#double) |  | Board thickness. |
| boardThicknessUnit | [string](#string) |  | Board thickness unit. |
| pcbMaterialManufacturer | [string](#string) |  | PCB material manufacturer. |
| pcbMaterialGrade | [string](#string) |  | PCB material grade. |
| pcbMaterial | [string](#string) |  | PCB material. |
| conductorLayersCnt | [int32](#int32) |  | Number of conductor layers. |
| signalLayerThickness | [double](#double) |  | Signal layer thickness. |
| signalLayerThicknessUnit | [string](#string) |  | Signal layer thickness unit. |
| minLaminateThickness | [double](#double) |  | Minimum laminate layer thickness. |
| minLaminateThicknessUnit | [string](#string) |  | Minimum laminate layer thickness unit. |
| maintainSymmetry | [bool](#bool) |  | If set to true, maintain symmetry. |
| powerLayerThickness | [double](#double) |  | Power layer thickness. |
| powerLayerThicknessUnit | [string](#string) |  | Power layer thickness unit. |

### GetLayerCountRequest
 
Request the number of layers in the stackup.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

### GetLayerCountResponse
 
Represents the number of layers in the stackup.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| count | [int32](#int32) |  | Number of stackup layers. |

### GetStackupPropsRequest
 
Request a summary of the stackup properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

### GetStackupPropsResponse
 
Represents a summary of the stackup properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| boardDimension | [string](#string) |  | Board dimension. |
| boardThickness | [string](#string) |  | Board thickness. |
| density | [string](#string) |  | Board density. |
| conductorLayersCnt | [string](#string) |  | Number of conductor layers. |
| ctExy | [string](#string) |  | CTExy. |
| ctEz | [string](#string) |  | CTEz. |
| exy | [string](#string) |  | Exy. |
| ez | [string](#string) |  | Ez. |

### GetTotalConductorThicknessRequest
 
Request the total thickness on all conductor layers in a stackup.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| thicknessUnit | [string](#string) |  | Conductor layer thickness unit. |

### GetTotalConductorThicknessResponse
 
Represents the number of layers in the stackup.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| totalThickness | [double](#double) |  | Total thickness. |

### ListConductorLayersRequest
 
Request for a list of conductor layers.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

### ListConductorLayersResponse
 
Represents the properties for all CCAs and their corresponding conductor layers.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| ccaConductorLayerProps | [ListConductorLayersResponse.CCAConductorLayerProp](#listconductorlayersresponseccaconductorlayerprop) | repeated | List of CCAs and their associated conductor layers for a specified project. |

### ListConductorLayersResponse.CCAConductorLayerProp
 
Represents a CCA and its conductor layers.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| conductorLayerProps | [ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp](#listconductorlayersresponseccaconductorlayerpropconductorlayerprop) | repeated | List of conductor layers and their associated properties for a specified CCA. |

### ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp
 
Represents a conductor layer and its properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layer | [string](#string) |  | An internal layer ID associated with this conductor layer. |
| type | [string](#string) |  | Layer type (i.e. SIGNAL, POWER, SUBSTRATE). |
| material | [string](#string) |  | Name of this conductor material. |
| thickness | [double](#double) |  | Conductor layer thickness. |
| thicknessUnit | [string](#string) |  | Conductor layer thickness unit. |
| conductorPercent | [string](#string) |  | Conductor percentage. |
| resinMaterial | [string](#string) |  | Resin material. |
| density | [double](#double) |  | Layer density. |
| CTExy | [double](#double) |  | CTExy. |
| CTEz | [double](#double) |  | CTEz. |
| Exy | [double](#double) |  | Exy. |
| Ez | [double](#double) |  | Ez. |

### ListConductorMaterialsRequest
 
Request to list valid conductor materials.
 

### ListConductorMaterialsResponse
 
Represents a list of valid conductor materials.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| conductorMaterial | [string](#string) | repeated | Conductor material name. |

### ListConstructionStylesRequest
 
Request to list valid construction styles.
 

### ListConstructionStylesResponse
 
Represents a list of valid construction styles.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| constructionStyle | [string](#string) | repeated | Construction style. |

### ListFiberMaterialsRequest
 
Request to list valid fiber materials.
 

### ListFiberMaterialsResponse
 
Represents a list of valid fiber materials.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| fiberMaterial | [string](#string) | repeated | Fiber material name. |

### ListLaminateMaterialsManufacturersRequest
 
Request to list valid names of materials manufacturers.
 

### ListLaminateMaterialsManufacturersResponse
 
Represents a list of valid names of materials manufacturers.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| manufacturer | [string](#string) | repeated | Manufacturer name. |

### ListLaminateMaterialsRequest
 
Request to list materials from a given manufacturer.
If manufacturer is empty, all manufacturers and their materials will be returned.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| manufacturer | [string](#string) |  | Manufacturer name. |

### ListLaminateMaterialsResponse
 
Represents a list of materials from a given manufacturer.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| manufacturerMaterials | [ListLaminateMaterialsResponse.ManufacturerMaterials](#listlaminatematerialsresponsemanufacturermaterials) | repeated | List of manufacturers and their associated grades and materials. |

### ListLaminateMaterialsResponse.ManufacturerMaterials
 

 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| manufacturer | [string](#string) |  | Manufacturer name. |
| gradeMaterials | [ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials](#listlaminatematerialsresponsemanufacturermaterialsgradematerials) | repeated | List of Grades and their associated materials. |

### ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials
 
Represents a grade and the materials with this grade.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grade | [string](#string) |  | Grade. |
| laminateMaterial | [string](#string) | repeated | Material name. |

### ListLaminateThicknessUnitsRequest
 
Request to list valid laminate thickness units.
 

### ListLaminateThicknessUnitsResponse
 
Represents a list of valid laminate thickness units.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| unit | [string](#string) | repeated | Thickness unit. |

### ListLaminatesRequest
 
Request for a list of laminates.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

### ListLaminatesResponse
 
Represents the properties for all CCAs and their corresponding laminates.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| ccaLaminateProps | [ListLaminatesResponse.CCALaminateProp](#listlaminatesresponseccalaminateprop) | repeated | List of CCAs and their corresponding laminate layers. |

### ListLaminatesResponse.CCALaminateProp
 
Represents a CCA and its laminates.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| laminateProps | [ListLaminatesResponse.CCALaminateProp.LaminateProp](#listlaminatesresponseccalaminateproplaminateprop) | repeated | List of laminate layers with associated properties for a specified CCA. |

### ListLaminatesResponse.CCALaminateProp.LaminateProp
 
Represents a laminate layer and its properties.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layer | [string](#string) |  | An internal layer ID associated with this laminate layer. |
| manufacturer | [string](#string) |  | Manufacturer name of this material. |
| grade | [string](#string) |  | Grade of this material. |
| material | [string](#string) |  | Name of this material. |
| thickness | [double](#double) |  | Laminate thickness. |
| thicknessUnit | [string](#string) |  | Laminate thickness unit. |
| constructionStyle | [string](#string) |  | Construction style. |
| glassConstructions | [ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction](#listlaminatesresponseccalaminateproplaminatepropglassconstruction) | repeated | List of Glass Construction info for a laminate layer. |
| fiberMaterial | [string](#string) |  | Fiber material if the construction style is glass. |
| conductorMaterial | [string](#string) |  | Conductor material. |
| conductorPercent | [string](#string) |  | Conductor percentage. |
| density | [double](#double) |  | Layer density. |
| CTExy | [double](#double) |  | CTExy. |
| CTEz | [double](#double) |  | CTEz. |
| Exy | [double](#double) |  | Exy. |
| Ez | [double](#double) |  | Ez. |

### ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction
 
Represents the layers with a glass construction.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| style | [string](#string) |  | Glass construction style. |
| resinPercentage | [double](#double) |  | Glass construction resin percentage. |
| thickness | [double](#double) |  | Glass construction thickness. |
| thicknessUnit | [string](#string) |  | Glass construction thickness unit. |

### UpdateConductorLayerRequest
 
Represents the conductor layer properties requested to be updated.
To update a thickness, a thickness unit must be provided.
Any property left out or set to "" or 0.0 will not be updated.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| layer | [string](#string) |  | The layer ID associated with this conductor layer. |
| type | [string](#string) |  | Layer type (i.e. SIGNAL, POWER, SUBSTRATE). |
| material | [string](#string) |  | Name of this conductor material. |
| thickness | [double](#double) |  | Conductor layer thickness. |
| thicknessUnit | [string](#string) |  | Conductor layer thickness unit. |
| conductorPercent | [string](#string) |  | Conductor percentage. |
| resinMaterial | [string](#string) |  | Resin material. |

### UpdateLaminateRequest
 
Represents the laminate properties requested to be updated.
To update the material, valid values must be provided for manufacturer, grade, and material.
To update a thickness, a thickness unit must be provided.
Glass construction should only be set when the construction style is not the "DEFAULT" value.
Any property left out or set to "" or 0.0 will not be updated.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| layer | [string](#string) |  | The internal layer ID associated with this laminate layer. |
| manufacturer | [string](#string) |  | Manufacturer name of this material. Must be provided along with grade and material name. |
| grade | [string](#string) |  | Grade of this material. |
| material | [string](#string) |  | Name of this material. |
| thickness | [double](#double) |  | Laminate thickness. |
| thicknessUnit | [string](#string) |  | Laminate thickness unit. |
| constructionStyle | [string](#string) |  | Construction style. |
| glassConstruction | [UpdateLaminateRequest.GlassConstruction](#updatelaminaterequestglassconstruction) | repeated | List of Glass Construction info for a laminate layer. |
| fiberMaterial | [string](#string) |  | Fiber material. Only updated if glass construction is selected. |
| conductorMaterial | [string](#string) |  | Conductor material. |
| conductorPercent | [string](#string) |  | Conductor percentage. |

### UpdateLaminateRequest.GlassConstruction
 
Represents the layers with a glass construction.
 

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| style | [string](#string) |  | Glass construction style. |
| resinPercentage | [double](#double) |  | Glass construction resin percentage. |
| thickness | [double](#double) |  | Glass construction thickness. |
| thicknessUnit | [string](#string) |  | Glass construction thickness unit. |



### SherlockStackupService
 

 
| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| listLaminates | [.ListLaminatesRequest](#listlaminatesrequest) | [.ListLaminatesResponse](#listlaminatesresponse) | Returns a list of project's CCAs and their laminates. |
| updateLaminate | [.UpdateLaminateRequest](#updatelaminaterequest) | [.ReturnCode](#returncode) | Update properties for a given laminate layer. |
| listLaminateThicknessUnits | [.ListLaminateThicknessUnitsRequest](#listlaminatethicknessunitsrequest) | [.ListLaminateThicknessUnitsResponse](#listlaminatethicknessunitsresponse) | List all the supported laminate layer thickness units. |
| listConductorMaterials | [.ListConductorMaterialsRequest](#listconductormaterialsrequest) | [.ListConductorMaterialsResponse](#listconductormaterialsresponse) | List all conductor materials. |
| listFiberMaterials | [.ListFiberMaterialsRequest](#listfibermaterialsrequest) | [.ListFiberMaterialsResponse](#listfibermaterialsresponse) | List all fiber materials. |
| listLaminateMaterialsManufacturers | [.ListLaminateMaterialsManufacturersRequest](#listlaminatematerialsmanufacturersrequest) | [.ListLaminateMaterialsManufacturersResponse](#listlaminatematerialsmanufacturersresponse) | List all laminate materials manufacturers. |
| listLaminateMaterials | [.ListLaminateMaterialsRequest](#listlaminatematerialsrequest) | [.ListLaminateMaterialsResponse](#listlaminatematerialsresponse) | List all laminate materials (both based on manufacturer specified or without).<br>If manufacturer is empty or not provided, then all manufacturers and their laminate materials will be returned.<br>If a manufacturer is provided, then only that manufacturer's laminate materials will be returned. |
| listConstructionStyles | [.ListConstructionStylesRequest](#listconstructionstylesrequest) | [.ListConstructionStylesResponse](#listconstructionstylesresponse) | List all construction styles. |
| listConductorLayers | [.ListConductorLayersRequest](#listconductorlayersrequest) | [.ListConductorLayersResponse](#listconductorlayersresponse) | Returns a list of project's CCAs and their conductor layers. |
| updateConductorLayer | [.UpdateConductorLayerRequest](#updateconductorlayerrequest) | [.ReturnCode](#returncode) | Update properties for a given conductor layer. |
| getLayerCount | [.GetLayerCountRequest](#getlayercountrequest) | [.GetLayerCountResponse](#getlayercountresponse) | Returns the number of stackup layers. |
| getTotalConductorThickness | [.GetTotalConductorThicknessRequest](#gettotalconductorthicknessrequest) | [.GetTotalConductorThicknessResponse](#gettotalconductorthicknessresponse) | Returns the total thickness for all conductor layers. |
| getStackupProps | [.GetStackupPropsRequest](#getstackuppropsrequest) | [.GetStackupPropsResponse](#getstackuppropsresponse) | Returns a summary of the stackup properties. |
| genStackup | [.GenStackupRequest](#genstackuprequest) | [.ReturnCode](#returncode) | Generate stackup layers. |

## Scalar Value Types
 
| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <div><h4 id="double" /></div><a name="double" /> double |  |  | double | double | float | float64 | double | float | Float |
| <div><h4 id="float" /></div><a name="float" /> float |  |  | float | float | float | float32 | float | float | Float |
| <div><h4 id="int32" /></div><a name="int32" /> int32 |  | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <div><h4 id="int64" /></div><a name="int64" /> int64 |  | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <div><h4 id="uint32" /></div><a name="uint32" /> uint32 |  | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <div><h4 id="uint64" /></div><a name="uint64" /> uint64 |  | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <div><h4 id="sint32" /></div><a name="sint32" /> sint32 |  | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <div><h4 id="sint64" /></div><a name="sint64" /> sint64 |  | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <div><h4 id="fixed32" /></div><a name="fixed32" /> fixed32 |  | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <div><h4 id="fixed64" /></div><a name="fixed64" /> fixed64 |  | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <div><h4 id="sfixed32" /></div><a name="sfixed32" /> sfixed32 |  | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <div><h4 id="sfixed64" /></div><a name="sfixed64" /> sfixed64 |  | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <div><h4 id="bool" /></div><a name="bool" /> bool |  |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <div><h4 id="string" /></div><a name="string" /> string |  | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <div><h4 id="bytes" /></div><a name="bytes" /> bytes |  | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |
 