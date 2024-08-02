# SherlockModelService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-DrillHoleModeling"></a>

## DrillHoleModeling

Drill hole properties used for exporting trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModelingEnabled | [bool](#bool) |  | Determines if drill holes will be included in the exported model. |
| minHoleDiameter | [Measurement](#Measurement) |  | All drill holes with a diameter less than this will not be included in the exported model. |
| maxEdgeLength | [Measurement](#Measurement) |  | Set this to 0 to include all drill holes.

Specifies the size of the segments used to represent round drill holes by a polygon. |






<a name="-ExportAEDBRequest"></a>

## ExportAEDBRequest

Request to export an Electronics Desktop model.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the Electronics Desktop export file. |
| overwrite | [bool](#bool) |  | Overwrite existing file if true. |
| displayModel | [bool](#bool) |  | Display model after export if true. |






<a name="-ExportFEAModelRequest"></a>

## ExportFEAModelRequest

Request to export an FEA model.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the export file. |
| analysis | [ExportFEAModelRequest.ExportAnalysis](#ExportFEAModelRequest-ExportAnalysis) |  | The ExportAnalysis enum representing the type of analysis that is being exported. |
| drillHoleParam | [ExportFEAModelRequest.DrillHoleParam](#ExportFEAModelRequest-DrillHoleParam) |  | Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled. |
| detectLeadModeling | [string](#string) |  | If enabled, automatically enable lead modeling if any part has lead geometry defined, valid values are ENABLED/enabled or DISABLED/disabled. |
| leadModelParam | [ExportFEAModelRequest.LeadModelParam](#ExportFEAModelRequest-LeadModelParam) |  | Lead modeling parameter. |
| displayModel | [bool](#bool) |  | Display model after export. |
| clearFEADatabase | [bool](#bool) |  | Clear FEA Database before defining model. |
| useFEAModelID | [bool](#bool) |  | Use FEA Model ID. |
| coordinateUnits | [string](#string) |  | Units of exported model coordinates, valid values are &#34;in&#34;, &#34;mm&#34;, &#34;m&#34;, &#34;mil&#34;, &#34;micron&#34;, &#34;nm&#34;. |






<a name="-ExportFEAModelRequest-DrillHoleParam"></a>

## ExportFEAModelRequest.DrillHoleParam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModeling | [string](#string) |  | Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| minHoleDiameter | [ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter](#ExportFEAModelRequest-DrillHoleParam-MinHoleDiameter) |  | Minimum hole diameter info for a drill hole. |
| maxEdgeLength | [ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength](#ExportFEAModelRequest-DrillHoleParam-MaxEdgeLength) |  | Maximum edge length info for a drill hole. |






<a name="-ExportFEAModelRequest-DrillHoleParam-MaxEdgeLength"></a>

## ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Maximum edge length value. |
| unit | [string](#string) |  | Maximum edge length unit. |






<a name="-ExportFEAModelRequest-DrillHoleParam-MinHoleDiameter"></a>

## ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Minimum hole diameter value. |
| unit | [string](#string) |  | Minimum hole diameter unit. |






<a name="-ExportFEAModelRequest-LeadModelParam"></a>

## ExportFEAModelRequest.LeadModelParam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| leadModeling | [string](#string) |  | Enables or disables lead modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| leadElemOrder | [string](#string) |  | Element order, valid values are &#34;First Order (Linear)&#34;, &#34;Second Order (Quadratic)&#34;, or &#34;Solid Shell&#34;. |
| maxMeshSize | [ExportFEAModelRequest.LeadModelParam.MaxMeshSize](#ExportFEAModelRequest-LeadModelParam-MaxMeshSize) |  | Max mesh size info for a lead model param. |
| verticalMeshSize | [ExportFEAModelRequest.LeadModelParam.VerticalMeshSize](#ExportFEAModelRequest-LeadModelParam-VerticalMeshSize) |  | Vertical mesh size info for a lead model param. |
| thicknessCount | [int32](#int32) |  | The number of elements through the lead thickness that will be created per lead. |
| aspectRatio | [int32](#int32) |  | The aspect ratio is multiplied by the lead thickness divided by the through thickness count to give the lead element height. |






<a name="-ExportFEAModelRequest-LeadModelParam-MaxMeshSize"></a>

## ExportFEAModelRequest.LeadModelParam.MaxMeshSize



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Max mesh size value. |
| unit | [string](#string) |  | Max mesh size unit. |






<a name="-ExportFEAModelRequest-LeadModelParam-VerticalMeshSize"></a>

## ExportFEAModelRequest.LeadModelParam.VerticalMeshSize



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Vertical mesh size value. |
| unit | [string](#string) |  | Vertical mesh size unit. |






<a name="-ExportTraceModelRequest"></a>

## ExportTraceModelRequest

Request to export one or many trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceModelExportParams | [TraceModelExportParams](#TraceModelExportParams) | repeated | Parameters for a single trace model export. |






<a name="-ExportTraceReinforcementModelRequest"></a>

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
| traceParam | [ExportTraceReinforcementModelRequest.TraceParam](#ExportTraceReinforcementModelRequest-TraceParam) |  | Trace properties (Diameter Threshold and Minimum Hole Diameter for Shell/Beam). |
| traceDrillHoleParam | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam](#ExportTraceReinforcementModelRequest-TraceDrillHoleParam) |  | **Deprecated.** Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled. |
| drillHoleModeling | [DrillHoleModeling](#DrillHoleModeling) |  | Properties used for exporting drill holes. |
| coordinateUnits | [string](#string) |  | Units of exported model coordinates, valid values are &#34;in&#34;, &#34;mm&#34;, &#34;m&#34;, &#34;mil&#34;, &#34;micron&#34;, &#34;nm&#34;. |






<a name="-ExportTraceReinforcementModelRequest-TraceDrillHoleParam"></a>

## ExportTraceReinforcementModelRequest.TraceDrillHoleParam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| drillHoleModeling | [string](#string) |  | Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled. |
| minHoleDiameter | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter](#ExportTraceReinforcementModelRequest-TraceDrillHoleParam-MinHoleDiameter) |  | Minimum hole diameter info for a trace drill hole param. |
| maxEdgeLength | [ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength](#ExportTraceReinforcementModelRequest-TraceDrillHoleParam-MaxEdgeLength) |  | Maximum edge length info for a trace drill hole param. |






<a name="-ExportTraceReinforcementModelRequest-TraceDrillHoleParam-MaxEdgeLength"></a>

## ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Maximum edge length value. |
| unit | [string](#string) |  | Maximum edge length unit. |






<a name="-ExportTraceReinforcementModelRequest-TraceDrillHoleParam-MinHoleDiameter"></a>

## ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Minimum hole diameter value. |
| unit | [string](#string) |  | Minimum hole diameter unit. |






<a name="-ExportTraceReinforcementModelRequest-TraceParam"></a>

## ExportTraceReinforcementModelRequest.TraceParam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diameterThreshold | [ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold](#ExportTraceReinforcementModelRequest-TraceParam-DiameterThreshold) |  | Diameter threshold info for a trace parameter. |
| minHoleDiameterForShellOrBeam | [ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam](#ExportTraceReinforcementModelRequest-TraceParam-MinHoleDiameterForShellOrBeam) |  | Minimum hole diameter info for Shell or Beam for a trace parameter. |






<a name="-ExportTraceReinforcementModelRequest-TraceParam-DiameterThreshold"></a>

## ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Diameter threshold value. |
| unit | [string](#string) |  | Diameter threshold unit. |






<a name="-ExportTraceReinforcementModelRequest-TraceParam-MinHoleDiameterForShellOrBeam"></a>

## ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Min. hole diameter value for Shell/Beam. |
| unit | [string](#string) |  | Min. hole diameter unit for Shell/Beam. |






<a name="-GenerateTraceModelRequest"></a>

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






<a name="-TraceModelExportParams"></a>

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
| pcbMeshPropParam | [TraceModelExportParams.PcbMeshPropParam](#TraceModelExportParams-PcbMeshPropParam) |  | Properties used for exporting PCB mesh. |
| tracePropParam | [TraceModelExportParams.TracePropParam](#TraceModelExportParams-TracePropParam) |  | Properties used for exporting the traces. |
| drillHoleModeling | [DrillHoleModeling](#DrillHoleModeling) |  | Properties used for exporting drill holes. |






<a name="-TraceModelExportParams-PcbMeshPropParam"></a>

## TraceModelExportParams.PcbMeshPropParam

Mesh properties used for exporting trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| meshType | [MeshType](#MeshType) |  | Options of different trace meshing strategies. The options available depend on export file type. |
| isModelingRegionEnabled | [bool](#bool) |  | Determines if pre-defined modeling regions will be applied to the exported trace model. |






<a name="-TraceModelExportParams-TracePropParam"></a>

## TraceModelExportParams.TracePropParam

Trace properties used for exporting trace models.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceOutputs | [TraceOutputType](#TraceOutputType) |  | Options to select which trace regions to include in the 3D model. |
| elementOrder | [ElementOrder](#ElementOrder) |  | Type of FEA element to be used when modeling each component (First/linear, Second/quadratic, Solid Shell). |
| maxMeshSize | [Measurement](#Measurement) |  | Value passed to FEA meshing tool to indicate the desired element sizes. |
| maxHolesPerTrace | [int32](#int32) |  | Maximum number of holes allowed in a trace before partitioning it into multiple traces. |





 


<a name="-ExportFEAModelRequest-ExportAnalysis"></a>

## ExportFEAModelRequest.ExportAnalysis


| Name | Number | Description |
| ---- | ------ | ----------- |
| NaturalFreq | 0 | Natural Frequency Analysis. |
| HarmonicVibe | 1 | Harmonic Vibe Analysis. |
| ICTAnalysis | 2 | ICT Analysis. |
| MechanicalShock | 3 | Mechanical Shock Analysis. |
| RandomVibe | 4 | Random Vibe Analysis. |



<a name="-MeshType"></a>

## MeshType

Different ways meshes are created. The options
 available depend on the export file type.

| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 | Defines only geometric volumes without generating mesh elements. |
| BONDED | 1 | Defines meshed elements generated by Sherlock. |
| SWEEP | 2 | Defines geometric volumes along with commands to mesh the volumes depending on the file type. |



<a name="-TraceOutputType"></a>

## TraceOutputType

Indicates which trace regions to include in the 3D model.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ALL_REGIONS | 0 | Both Conductor and Dielectric. |
| CONDUCTOR_REGIONS | 1 | The traces themselves. |
| DIELECTRIC_REGIONS | 2 | Regions that surround the conductor regions (Ex. areas filled with resin). |


 

 


<a name="-SherlockModelService"></a>

## SherlockModelService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| exportFEAModel | [.ExportFEAModelRequest](#ExportFEAModelRequest) | [.ReturnCode](#ReturnCode) | Export an FEA Model. |
| exportTraceReinforcementModel | [.ExportTraceReinforcementModelRequest](#ExportTraceReinforcementModelRequest) | [.ReturnCode](#ReturnCode) | Export a trace reinforcement model. |
| generateTraceModel | [.GenerateTraceModelRequest](#GenerateTraceModelRequest) | [.ReturnCode](#ReturnCode) | Generate a trace model. |
| exportTraceModel | [.ExportTraceModelRequest](#ExportTraceModelRequest) | [.ReturnCode](#ReturnCode) | Export a trace model. |
| exportAEDB | [.ExportAEDBRequest](#ExportAEDBRequest) | [.ReturnCode](#ReturnCode) | Export an Electronics Desktop model. |

 



<a name="SherlockPartsService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

