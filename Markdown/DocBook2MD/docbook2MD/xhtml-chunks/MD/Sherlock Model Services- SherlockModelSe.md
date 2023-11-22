Sherlock Model Services- SherlockModelServices.proto

Sherlock Model Services- SherlockModelServices.proto

[Prev](ch01s06.xhtml) 

 

 [Next](ch01s08.xhtml)

* * *

Sherlock Model Services- SherlockModelServices.proto
----------------------------------------------------

[Click here to return to the main index to Sherlock's APIs.](ch01s02.xhtml "Index to the Sherlock APIs")

The API in this section allows you to export the 3D model, material definitions, and material assignments from Sherlock so they can be shared with other applications such as Ansys Workbench. Clicking on the active links in the table below will take you to the selected API.

**Table 1.135. Index to Sherlock Model Service APIs**

**Method Name**

**Request Type**

**Response Type**

**Description**

For display purposes, some strings in the first two columns are broken into multiple lines and should be read as continuous. For example, the last entry in column two should be interpreted as: **.ExportTraceReinforcementModelRequest**

exportFEAModel

[.ExportFEAModelRequest](ch01s07.xhtml#sherlock_ug_ExportFEAModelRequest "ExportFEAModelRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Export an FEA Model.

exportTrace ReinforcementModel

[.ExportTrace ReinforcementModelRequest](ch01s07.xhtml#sherlock_ug_ExportTraceReinforcementModelRequest "ExportTraceReinforcementModelRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Export a Trace Reinforcement model.

generateTraceModel

[.GenerateTraceModel Request](ch01s07.xhtml#sherlock_ug_GenerateTraceModelRequest "GenerateTraceModelRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Generate a trace model.

  

### Export FEA Model

In this section:

#### ExportFEAModelRequest

Request to export an FEA model

**Table 1.136. ExportFEAModelRequest**

**Field**

**Type**

**Label**

**Description**

For display purposes, some strings in the first two columns are broken into multiple lines and should be read as continuous. For example, the fourth entry in column two should be interpreted as: **ExportFEAModelRequest.ExportAnalysis**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA name.

exportFile

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Full file path to the export file.

analysis

[ExportFEAModel Request.ExportAnalysis](ch01s07.xhtml#sherlock_ug_ExportFEAModelRequest.ExportAnalysis "ExportFEAModelRequest.ExportAnalysis")

drillHoleParam

[ExportFEAModelRequest. DrillHoleParam](ch01s07.xhtml#sherlock_ug_ExportFEAModelRequest.DrillHoleParam "ExportFEAModelRequest.DrillHoleParam")

Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled.

detectLead Modeling

[string](ch01s11.xhtml "gRPC Scalar Value Types")

If enabled, automatically enable lead modeling if any part has lead geometry defined, valid values are ENABLED/enabled or DISABLED/disabled.

leadModelParam

[ExportFEAModelRequest. LeadModelParam](ch01s07.xhtml#sherlock_ug_ExportFEAModelRequest.LeadModelParam "ExportFEAModelRequest.LeadModelParam")

displayModel

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

Display model after export.

clearFEADatabase

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Clear FEA Database before defining model.

useFEAModelID

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Use FEA Model ID.

coordinateUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Units of exported model coordinates, valid values are "in", "mm", "m", "mil", "micron", "nm".

  

#### Examples: Export FEA Model

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "exportFile": "C:\\\\Temp\\\\test.wbjn",
  "analysis": 2,
  "drillHoleParam": {
    "drillHoleModeling": "Enabled",
    "minHoleDiameter": {
      "value": 5.0,
      "unit": "mm"
    },
    "maxEdgeLength": {
      "value": 5.0,
      "unit": "mm"
    }
  },
  "detectLeadModeling": "Enabled",
  "leadModelParam": {
    "leadModeling": "Enabled",
    "leadElemOrder": "First Order (Linear)",
    "maxMeshSize": {
      "value": 11,
      "unit": "mm"
    },
    "verticalMeshSize": {
      "value": 3,
      "unit": "mm"
    }
  },
  "displayModel": false,
  "clearFEADatabase": true,
  "useFEAModelID": false,
  "coordinateUnits": "nm"
}

##### Python Example:

import SherlockModelService\_pb2
import SherlockModelService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockModelService\_pb2\_grpc.SherlockModelServiceStub(channel)

message = SherlockModelService\_pb2.ExportFEAModelRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.exportFile = os.getenv('USERPROFILE') + "\\\\Downloads\\\\test.wbjn"
message.analysis = SherlockModelService\_pb2.ExportFEAModelRequest.ExportAnalysis.ICTAnalysis
drillHoleParam = SherlockModelService\_pb2.ExportFEAModelRequest().DrillHoleParam()
drillHoleParam.drillHoleModeling = "Enabled"
minHoleDiameter = SherlockModelService\_pb2.ExportFEAModelRequest().DrillHoleParam().MinHoleDiameter()
minHoleDiameter.value = 5.0
minHoleDiameter.unit = "mm"
maxEdgeLength = SherlockModelService\_pb2.ExportFEAModelRequest().DrillHoleParam().MaxEdgeLength()
maxEdgeLength.value = 5.0
maxEdgeLength.unit = "mm"
message.detectLeadModeling = "Enabled"
leadModelParam = SherlockModelService\_pb2.ExportFEAModelRequest().LeadModelParam()
leadModelParam.leadModeling = "Enabled"
leadModelParam.leadElemOrder = "First Order (Linear)"
maxMeshSize = SherlockModelService\_pb2.ExportFEAModelRequest().LeadModelParam().MaxMeshSize()
maxMeshSize.value = 11
maxMeshSize.unit = "mm"
verticalMeshSize = SherlockModelService\_pb2.ExportFEAModelRequest().LeadModelParam().VerticalMeshSize()
verticalMeshSize.value = 3
verticalMeshSize.unit = "mm"
message.displayModel = False
message.clearFEADatabase = True
message.useFEAModelID = False
message.coordinateUnits = "nm"

response = stub.exportFEAModel(message)

print(str(response))

#### ExportFEAModelRequest.DrillHoleParam

**Table 1.137. ExportFEAModelRequest.DrillHoleParam**

**Field**

**Type**

**Label**

**Description**

For display purposes, some strings in the second column are broken into multiple lines and should be read as continuous. For example, the last entry in column two should be interpreted as:

**ExportFEAModel Request.DrillHoleParam.MaxEdgeLength**

drillHoleModeling

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled.

minHoleDiameter

[ExportFEAModel Request.DrillHoleParam. MinHoleDiameter](ch01s07.xhtml#sherlock_ug_ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter "ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter")

maxEdgeLength

[ExportFEAModel Request.DrillHoleParam. MaxEdgeLength](ch01s07.xhtml#sherlock_ug_ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength "ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength")

  

#### ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength

**Table 1.138. ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength**

**Field**

**Type**

**Label**

**Description**

value

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Maximum edge length value.

unit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Maximum edge length unit.

  

#### ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter

**Table 1.139. ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter**

**Field**

**Type**

**Label**

**Description**

value

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Minimum hole diameter value.

unit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Minimum hole diameter unit.

  

#### ExportFEAModelRequest.LeadModelParam

**Table 1.140. ExportFEAModelRequest.LeadModelParam**

**Field**

**Type**

**Label**

**Description**

For display purposes, some strings in the second column are broken into multiple lines and should be read as continuous. For example, the last entry in column two should be interpreted as:

**ExportFEAModelRequest.LeadModelParam.VerticalMeshSize**

leadModeling

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Enables or disables lead modeling, valid values are ENABLED/enabled or DISABLED/disabled.

leadElemOrder

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Element order, valid values are "First Order", "Second Order", or "Solid Shell".

maxMeshSize

[ExportFEAModel Request.LeadModel Param.MaxMeshSize](ch01s07.xhtml#sherlock_ug_ExportFEAModelRequest.LeadModelParam.MaxMeshSize "ExportFEAModelRequest.LeadModelParam.MaxMeshSize")

verticalMeshSize

[ExportFEAModel Request.LeadModel Param.VerticalMeshSize](ch01s07.xhtml#sherlock_ug_ExportFEAModelRequest.LeadModelParam.VerticalMeshSize "ExportFEAModelRequest.LeadModelParam.VerticalMeshSize")

  

#### ExportFEAModelRequest.LeadModelParam.MaxMeshSize

**Table 1.141. ExportFEAModelRequest.LeadModelParam.MaxMeshSize**

**Field**

**Type**

**Label**

**Description**

value

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Max mesh size value.

unit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Max mesh size unit.

  

#### ExportFEAModelRequest.LeadModelParam.VerticalMeshSize

**Table 1.142. ExportFEAModelRequest.LeadModelParam.VerticalMeshSize**

**Field**

**Type**

**Label**

**Description**

value

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Vertical mesh size value.

unit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Vertical mesh size unit.

  

#### ExportFEAModelRequest.ExportAnalysis

**Table 1.143. ExportFEAModelRequest.ExportAnalysis**

**Field**

**Type**

**Description**

NaturalFreq

0

HarmonicVibe

1

ICTAnalysis

2

MechanicalShock

3

RandomVibe

4

  

#### Examples: Export FEA Model

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "exportFile": "C:\\\\Temp\\\\test.wbjn",
  "analysis": 2,
  "drillHoleParam": {
    "drillHoleModeling": "Enabled",
    "minHoleDiameter": {
      "value": 5.0,
      "unit": "mm"
    },
    "maxEdgeLength": {
      "value": 5.0,
      "unit": "mm"
    }
  },
  "detectLeadModeling": "Enabled",
  "leadModelParam": {
    "leadModeling": "Enabled",
    "leadElemOrder": "First Order (Linear)",
    "maxMeshSize": {
      "value": 11,
      "unit": "mm"
    },
    "verticalMeshSize": {
      "value": 3,
      "unit": "mm"
    }
  },
  "displayModel": false,
  "clearFEADatabase": true,
  "useFEAModelID": false
}

##### Python Example

import SherlockModelService\_pb2
import SherlockModelService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockModelService\_pb2\_grpc.SherlockModelServiceStub(channel)

message = SherlockModelService\_pb2.ExportFEAModelRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.exportFile = os.getenv('USERPROFILE') + "\\\\Downloads\\\\test.wbjn"
message.analysis = SherlockModelService\_pb2.ExportFEAModelRequest.ExportAnalysis.ICTAnalysis
drillHoleParam = SherlockModelService\_pb2.ExportFEAModelRequest().DrillHoleParam()
drillHoleParam.drillHoleModeling = "Enabled"
minHoleDiameter = SherlockModelService\_pb2.ExportFEAModelRequest().DrillHoleParam().MinHoleDiameter()
minHoleDiameter.value = 5.0
minHoleDiameter.unit = "mm"
maxEdgeLength = SherlockModelService\_pb2.ExportFEAModelRequest().DrillHoleParam().MaxEdgeLength()
maxEdgeLength.value = 5.0
maxEdgeLength.unit = "mm"
message.detectLeadModeling = "Enabled"
leadModelParam = SherlockModelService\_pb2.ExportFEAModelRequest().LeadModelParam()
leadModelParam.leadModeling = "Enabled"
leadModelParam.leadElemOrder = "First Order (Linear)"
maxMeshSize = SherlockModelService\_pb2.ExportFEAModelRequest().LeadModelParam().MaxMeshSize()
maxMeshSize.value = 11
maxMeshSize.unit = "mm"
verticalMeshSize = SherlockModelService\_pb2.ExportFEAModelRequest().LeadModelParam().VerticalMeshSize()
verticalMeshSize.value = 3
verticalMeshSize.unit = "mm"
message.displayModel = False
message.clearFEADatabase = True
message.useFEAModelID = False

response = stub.exportFEAModel(message)

print(str(response))

### Export Trace Reinforcement Model

In this section:

#### ExportTraceReinforcementModelRequest

**Table 1.144. ExportTraceReinforcementModelRequest**

**Field**

**Type**

**Label**

**Description**

For display purposes, some strings in column one and column two are broken into multiple lines and should be read as continuous. For example, the last entry in column two should be interpreted as:

**ExportTraceReinforcementModelRequest.TraceDrillHoleParam**

overwrite

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

Overwrite existing file if true.

displayModel

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

Display model after export if true.

clearFEADatabase

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

Clear FEA Database before defining model if true.

generateModels ForAllLayers

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

Generate models for all layers.

traceParam

[ExportTraceReinforcement ModelRequest.TraceParam](ch01s07.xhtml#sherlock_ug_ExportTraceReinforcementModelRequest.TraceParam "ExportTraceReinforcementModelRequest.TraceParam")

Trace properties (Diameter Threshold and Minimum Hole Diameter for Shell/Beam).

traceDrillHole Param

[ExportTraceReinforcement ModelRequest. TraceDrillHoleParam](ch01s07.xhtml#sherlock_ug_ExportTraceReinforcementModelRequest.TraceDrillHoleParam "ExportTraceReinforcementModelRequest.TraceDrillHoleParam")

Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled.

coordinateUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Units of exported model coordinates, valid values are "in", "mm", "m", "mil", "micron", "nm".

  

#### ExportTraceReinforcementModelRequest.TraceDrillHoleParam

**Table 1.145. ExportTraceReinforcementModelRequest.TraceDrillHoleParam**

**Field**

**Type**

**Label**

**Description**

For display purposes, some strings in column one and column two are broken into multiple lines and should be read as continuous. For example, the last entry in column two should be interpreted as:

**ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength**

drillHole Modeling

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled.

minHole Diameter

[ExportTraceReinforcementModelRequest .TraceDrillHoleParam.MinHoleDiameter](ch01s07.xhtml#sherlock_ug_ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter "ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter")

maxEdge Length

[ExportTraceReinforcementModelRequest. TraceDrillHoleParam.MaxEdgeLength](ch01s07.xhtml#sherlock_ug_ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter "ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter")

  

#### ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength

**Table 1.146. ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MaxEdgeLength**

**Field**

**Type**

**Label**

**Description**

value

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Maximum edge length value.

unit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Maximum edge length unit.

  

#### ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter

**Table 1.147. ExportTraceReinforcementModelRequest.TraceDrillHoleParam.MinHoleDiameter**

**Field**

**Type**

**Label**

**Description**

value

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Minimum hole diameter value.

unit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Minimum hole diameter unit.

  

#### ExportTraceReinforcementModelRequest.TraceParam

**Table 1.148. ExportTraceReinforcementModelRequest.TraceParam**

**Field**

**Type**

**Label**

**Description**

For display purposes, some strings in column one and column two are broken into multiple lines and should be read as continuous. For example, the last entry in column one should be interpreted as:

**minHoleDiameterForShellOrBeam**

diameterThreshold

[ExportTraceReinforcementModel Request.TraceParam.DiameterThreshold](ch01s07.xhtml#sherlock_ug_ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold "ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold")

minHoleDiameter ForShellOrBeam

[ExportTraceReinforcementModelRequest .TraceParam.MinHoleDiameter ForShellOrBeam](ch01s07.xhtml#sherlock_ug_ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam "ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam")

  

#### ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold

**Table 1.149. ExportTraceReinforcementModelRequest.TraceParam.DiameterThreshold**

**Field**

**Type**

**Label**

**Description**

value

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Diameter threshold value.

unit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Diameter threshold unit.

  

#### ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam

**Table 1.150. ExportTraceReinforcementModelRequest.TraceParam.MinHoleDiameterForShellOrBeam**

**Field**

**Type**

**Label**

**Description**

value

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Min. hole diameter value for Shell/Beam.

unit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Min. hole diameter unit for Shell/Beam.

  

#### Example: SherlockModelService.exportTraceReinforcementModel()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "exportFile": "test.wbjn",
  "overwrite": true,
  "displayModel": true,
  "clearFEADatabase": true,
  "generateModelsForAllLayers": true,
  "traceParam": {
    "diameterThreshold": {
      "value": 0,
      "unit": "mm"
    },
    "minHoleDiameterForShellOrBeam": {
      "value": 5,
      "unit": "mm"
    }
  },
  "traceDrillHoleParam": {
    "drillHoleModeling": "Enabled",
    "minHoleDiameter": {
      "value": 0,
      "unit": "mm"
    },
    "maxEdgeLength": {
      "value": 5,
      "unit": "mm"
    }
  },
  "coordinateUnits": "nm"
}

##### Python Example

import SherlockModelService\_pb2
import SherlockModelService\_pb2\_grpc
import grpc
import os
import time

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockModelService\_pb2\_grpc.SherlockModelServiceStub(channel)

message = SherlockModelService\_pb2.ExportTraceReinforcementModelRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.exportFile = 'test.wbjn'
message.overwrite = True
message.displayModel = True
message.clearFEADatabase = True
message.generateModelsForAllLayers = True
trace = SherlockModelService\_pb2.ExportTraceReinforcementModelRequest().TraceParam()
diamThresh = SherlockModelService\_pb2.ExportTraceReinforcementModelRequest().TraceParam().DiameterThreshold()
diamThresh.value = 0
diamThresh.unit = "mm"
minHoleDSB = SherlockModelService\_pb2.ExportTraceReinforcementModelRequest().TraceParam().MinHoleDiameterForShellOrBeam()
minHoleDSB.value = 5
minHoleDSB.unit = "mm"
trace.diameterThreshold.CopyFrom(diamThresh)
trace.minHoleDiameterForShellOrBeam.CopyFrom(minHoleDSB)
traceDrillHole = SherlockModelService\_pb2.ExportTraceReinforcementModelRequest().TraceDrillHoleParam()
traceDrillHole.drillHoleModeling = "Enabled"
minHoleD = SherlockModelService\_pb2.ExportTraceReinforcementModelRequest().TraceDrillHoleParam().MinHoleDiameter()
minHoleD.value = 0
minHoleD.unit = "mm"
maxEdge = SherlockModelService\_pb2.ExportTraceReinforcementModelRequest().TraceDrillHoleParam().MaxEdgeLength()
maxEdge.value = 5
maxEdge.unit = "mm"
traceDrillHole.minHoleDiameter.CopyFrom(minHoleD)
traceDrillHole.maxEdgeLength.CopyFrom(maxEdge)
message.traceParam.CopyFrom(trace)
message.coordinateUnits = "nm"

response = stub.exportTraceReinforcementModel(message)

print(response)

### GenerateTraceModelRequest

**Table 1.151. GenerateTraceModelRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The CCA name. If left empty, trace models will be generated for all CCAs and all of their copper layers.

copperLayerName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Copper layer from which to generate the trace model. If left empty, trace models will be generated for all copper layers.

maxArcSegment

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Max Arc Segment.

maxArcSegmentUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Max Arc Segment units.

minTraceArea

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Min Trace Area.

minTraceAreaUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Min Trace Area units.

minHoleArea

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Min Hole Area.

minHoleAreaUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Min Hole Area units.

useSnapshotForNonImageLayer

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Use an image to generate the trace model for layers that are not image layers. If a snapshot image exists for the layer, that snapshot is used. Otherwise this creates an image that is identical to creating a snapshot.

  

#### Example: Generate Trace Model

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "copperLayerName": "copper-01",
  "maxArcSegment": 10,
  "maxArcSegmentUnits": "mm",
  "minTraceArea": 2,
  "minTraceAreaUnits": "mm2",
  "minHoleArea": 1,
  "minHoleAreaUnits": "mm2",
  "useSnapshotForNonImageLayer": true
}

##### Python Example:

import SherlockModelService\_pb2
import SherlockModelService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockModelService\_pb2\_grpc.SherlockModelServiceStub(channel)

message = SherlockModelService\_pb2.GenerateTraceModelRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.copperLayerName = "copper-01.odb"
message.maxArcSegment = 10
message.maxArcSegmentUnits = "mm"
message.minTraceArea = 2
message.minTraceAreaUnits = "mm2"
message.minHoleArea = 1
message.minHoleAreaUnits = "mm2"
message.useSnapshotForNonImageLayer = True

response = stub.generateTraceModel(message)

print(str(response))

* * *

[Prev](ch01s06.xhtml) 

 

 [Next](ch01s08.xhtml)

Sherlock Life Cycle Service- SherlockLifeCycleService.proto 

[Home](index.xhtml)

 Sherlock Parts Service- SherlockPartsService.proto