# SherlockModelService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

## DrillHoleModeling

Drill hole properties used for exporting trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModelingEnabled | [bool](#bool) |  | Determines if drill holes will be included in the exported model. |
| minHoleDiameter | [Measurement](#measurement) |  | All drill holes with a diameter less than this will not be included in the exported model. |
| maxEdgeLength | [Measurement](#measurement) |  | Set this to 0 to include all drill holes.<br><br>Specifies the size of the segments used to represent round drill holes by a polygon. |

## ExportAEDBRequest

Request to export an Electronics Desktop model.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the Electronics Desktop export file. |
| overwrite | [bool](#bool) |  | Overwrite existing file if true. |
| displayModel | [bool](#bool) |  | Display model after export if true. |

## ExportFEAModelRequest

Request to export an FEA model.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the export file. |
| analysis | [ExportFEAModelRequest.ExportAnalysis](#exportfeamodelrequest.exportanalysis) |  | The ExportAnalysis enum representing the type of analysis that is being exported. |
| drillHoleParam | [ExportFEAModelRequest.DrillHoleParam](#exportfeamodelrequest.drillholeparam) |  | Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled. |
| detectLeadModeling | [string](#string) |  | If enabled, automatically enable lead modeling if any part has lead geometry defined, valid values are ENABLED/enabled or DISABLED/disabled. |
| leadModelParam | [ExportFEAModelRequest.LeadModelParam](#exportfeamodelrequest.leadmodelparam) |  | Lead modeling parameter. |
| displayModel | [bool](#bool) |  | Display model after export. |
| clearFEADatabase | [bool](#bool) |  | Clear FEA Database before defining model. |
| useFEAModelID | [bool](#bool) |  | Use FEA Model ID. |
| coordinateUnits | [string](#string) |  | Units of exported model coordinates, valid values are "in", "mm", "m", "mil", "micron", "nm". |

## ExportFEAModelRequest.DrillHoleParam




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModeling | [string](#string) |  | Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| minHoleDiameter | [ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter](#exportfeamodelrequest.drillholeparam.minholediameter) |  | Minimum hole diameter info for a drill hole. |
| maxEdgeLength | [ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength](#exportfeamodelrequest.drillholeparam.maxedgelength) |  | Maximum edge length info for a drill hole. |

## ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Maximum edge length value. |
| unit | [string](#string) |  | Maximum edge length unit. |

## ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Minimum hole diameter value. |
| unit | [string](#string) |  | Minimum hole diameter unit. |

## ExportFEAModelRequest.LeadModelParam




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| leadModeling | [string](#string) |  | Enables or disables lead modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| leadElemOrder | [string](#string) |  | Element order, valid values are "First Order (Linear)", "Second Order (Quadratic)", or "Solid Shell". |
| maxMeshSize | [ExportFEAModelRequest.LeadModelParam.MaxMeshSize](#exportfeamodelrequest.leadmodelparam.maxmeshsize) |  | Max mesh size info for a lead model param. |
| verticalMeshSize | [ExportFEAModelRequest.LeadModelParam.VerticalMeshSize](#exportfeamodelrequest.leadmodelparam.verticalmeshsize) |  | Vertical mesh size info for a lead model param. |
| thicknessCount | [int32](#int32) |  | The number of elements through the lead thickness that will be created per lead. |
| aspectRatio | [int32](#int32) |  | The aspect ratio is multiplied by the lead thickness divided by the through thickness count to give the lead element height. |

## ExportFEAModelRequest.LeadModelParam.MaxMeshSize




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Max mesh size value. |
| unit | [string](#string) |  | Max mesh size unit. |

## ExportFEAModelRequest.LeadModelParam.VerticalMeshSize




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Vertical mesh size value. |
| unit | [string](#string) |  | Vertical mesh size unit. |

## ExportTraceModelRequest

Request to export one or many trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceModelExportParams | [TraceModelExportParams](#tracemodelexportparams) | repeated | Parameters for a single trace model export. |

## ExportTraceReinforcementModelRequest

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
| traceParam | [ExportTraceReinforcementModelRequest.TraceParam](#exporttracereinforcementmodelrequest.traceparam) |  | Trace properties (Diameter Threshold and Minimum Hole Diameter for Shell/Beam). |
| traceDrillHoleParam | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam](#exporttracereinforcementmodelrequest.tracedrillholeparam) |  | **Deprecated.** Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled. |
| drillHoleModeling | [DrillHoleModeling](#drillholemodeling) |  | Properties used for exporting drill holes. |
| coordinateUnits | [string](#string) |  | Units of exported model coordinates, valid values are "in", "mm", "m", "mil", "micron", "nm". |

## ExportTraceReinforcementModelRequest.TraceDrillHoleParam




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModeling | [string](#string) |  | Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| minHoleDiameter | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter](#exporttracereinforcementmodelrequest.tracedrillholeparam.minholediameter) |  | Minimum hole diameter info for a trace drill hole param. |
| maxEdgeLength | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength](#exporttracereinforcementmodelrequest.tracedrillholeparam.maxedgelength) |  | Maximum edge length info for a trace drill hole param. |

## ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Maximum edge length value. |
| unit | [string](#string) |  | Maximum edge length unit. |

## ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Minimum hole diameter value. |
| unit | [string](#string) |  | Minimum hole diameter unit. |

## ExportTraceReinforcementModelRequest.TraceParam




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diameterThreshold | [ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold](#exporttracereinforcementmodelrequest.traceparam.diameterthreshold) |  | Diameter threshold info for a trace parameter. |
| minHoleDiameterForShellOrBeam | [ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam](#exporttracereinforcementmodelrequest.traceparam.minholediameterforshellorbeam) |  | Minimum hole diameter info for Shell or Beam for a trace parameter. |

## ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Diameter threshold value. |
| unit | [string](#string) |  | Diameter threshold unit. |

## ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Min. hole diameter value for Shell/Beam. |
| unit | [string](#string) |  | Min. hole diameter unit for Shell/Beam. |

## GenerateTraceModelRequest

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

## TraceModelExportParams

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
| pcbMeshPropParam | [TraceModelExportParams.PcbMeshPropParam](#tracemodelexportparams.pcbmeshpropparam) |  | Properties used for exporting PCB mesh. |
| tracePropParam | [TraceModelExportParams.TracePropParam](#tracemodelexportparams.tracepropparam) |  | Properties used for exporting the traces. |
| drillHoleModeling | [DrillHoleModeling](#drillholemodeling) |  | Properties used for exporting drill holes. |

## TraceModelExportParams.PcbMeshPropParam

Mesh properties used for exporting trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| meshType | [MeshType](#meshtype) |  | Options of different trace meshing strategies. The options available depend on export file type. |
| isModelingRegionEnabled | [bool](#bool) |  | Determines if pre-defined modeling regions will be applied to the exported trace model. |

## TraceModelExportParams.TracePropParam

Trace properties used for exporting trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceOutputs | [TraceOutputType](#traceoutputtype) |  | Options to select which trace regions to include in the 3D model. |
| elementOrder | [ElementOrder](#elementorder) |  | Type of FEA element to be used when modeling each component (First/linear, Second/quadratic, Solid Shell). |
| maxMeshSize | [Measurement](#measurement) |  | Value passed to FEA meshing tool to indicate the desired element sizes. |
| maxHolesPerTrace | [int32](#int32) |  | Maximum number of holes allowed in a trace before partitioning it into multiple traces. |


## ExportAnalysis



| Name | Number | Description |
| ---- | ------ | ----------- |
| NaturalFreq | 0 | Natural Frequency Analysis. |
| HarmonicVibe | 1 | Harmonic Vibe Analysis. |
| ICTAnalysis | 2 | ICT Analysis. |
| MechanicalShock | 3 | Mechanical Shock Analysis. |
| RandomVibe | 4 | Random Vibe Analysis. |

## MeshType

Different ways meshes are created. The options
 available depend on the export file type.

| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 | Defines only geometric volumes without generating mesh elements. |
| BONDED | 1 | Defines meshed elements generated by Sherlock. |
| SWEEP | 2 | Defines geometric volumes along with commands to mesh the volumes depending on the file type. |

## TraceOutputType

Indicates which trace regions to include in the 3D model.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ALL_REGIONS | 0 | Both Conductor and Dielectric. |
| CONDUCTOR_REGIONS | 1 | The traces themselves. |
| DIELECTRIC_REGIONS | 2 | Regions that surround the conductor regions (Ex. areas filled with resin). |


## SherlockModelService



| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| exportFEAModel | [.ExportFEAModelRequest](#exportfeamodelrequest) | [.ReturnCode](#returncode) | Export an FEA Model. |
| exportTraceReinforcementModel | [.ExportTraceReinforcementModelRequest](#exporttracereinforcementmodelrequest) | [.ReturnCode](#returncode) | Export a trace reinforcement model. |
| generateTraceModel | [.GenerateTraceModelRequest](#generatetracemodelrequest) | [.ReturnCode](#returncode) | Generate a trace model. |
| exportTraceModel | [.ExportTraceModelRequest](#exporttracemodelrequest) | [.ReturnCode](#returncode) | Export a trace model. |
| exportAEDB | [.ExportAEDBRequest](#exportaedbrequest) | [.ReturnCode](#returncode) | Export an Electronics Desktop model. |


Back to [Top](#table-of-contents)

