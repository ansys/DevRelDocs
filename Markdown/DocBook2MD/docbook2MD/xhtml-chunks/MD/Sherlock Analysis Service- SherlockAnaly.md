Sherlock Analysis Service- SherlockAnalysisService.proto

Sherlock Analysis Service- SherlockAnalysisService.proto

[Prev](ch01s02.xhtml) 

 

 [Next](ch01s04.xhtml)

* * *

Sherlock Analysis Service- SherlockAnalysisService.proto
--------------------------------------------------------

[Click here to return to the main index to Sherlock's APIs.](ch01s02.xhtml "Index to the Sherlock APIs")

The APIs in this section allow you to run one or more analyses in sequential order. Results are saved to the project's Saved Results folder on Sherlock's Project Tree. Clicking on the active links in the table below will take you to the selected API.

**Table 1.2. Index to Sherlock Analysis Service APIs**

**Method Name**

**Request Type**

**Response Type**

**Description**

_For display purposes, the long strings in columns 1 to 3 are broken into multiple lines. The strings should be interpreted as continuous. For example:_ _**.GetNaturalFrequencyInputFieldsResponse**_

runAnalysis

[.RunAnalysis Request](ch01s03.xhtml#sherlock_ug_RunAnalysisRequest "RunAnalysisRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Runs one or more Sherlock analysis.

runStrainMap Analysis

[.RunStrainMap Analysis Request](ch01s03.xhtml#sherlock_ug_RunStrainMapAnalysisRequest "RunStrainMapAnalysisRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Run Sherlock strain map analysis.

getRandomVibe InputFields

[.GetRandom VibeInput FieldsRequest](ch01s03.xhtml#sherlock_ug_GetRandomVibeInputFieldsRequest "GetRandomVibeInputFieldsRequest")

[.GetRandomVibe InputFields Response](ch01s03.xhtml#sherlock_ug_GetRandomVibeInputFieldsResponse "GetRandomVibeInputFieldsResponse")

Returns the list of valid Random Vibe input fields for the provided model source and user configuration.

updateRandom VibeProps

[.UpdateRandom VibeProps Request](ch01s03.xhtml#sherlock_ug_UpdateRandomVibePropsRequest "UpdateRandomVibePropsRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Updates the analysis properties for Random Vibe analysis.

getNatural FrequencyInput Fields

[.GetNatural Frequency InputFields Request](ch01s03.xhtml#sherlock_ug_GetNaturalFrequencyInputFieldsRequest "GetNaturalFrequencyInputFieldsRequest")

[.GetNatural Frequency InputFields Response](ch01s05.xhtml#sherlock_ug_GetMountPointsPropertiesResponse "GetMountPointsPropertiesResponse")

Returns the list of valid Natural Frequency property fields given the user configuration.

updateNatural FrequencyProps

[.UpdateNatural FrequencyProps Request](ch01s03.xhtml#sherlock_ug_UpdateNaturalFrequencyPropsRequest "UpdateNaturalFrequencyPropsRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Updates the analysis properties for Natural Frequency analysis.

updateThermal MechProps

[.UpdateThermal Mech PropsRequest](ch01s03.xhtml#sherlock_ug_UpdateThermalMechPropsRequest "UpdateThermalMechPropsRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Updates the analysis properties for Thermal Mech analysis

getPcbModeling InputFields

[.GetPcb ModelingInput FieldsRequest](ch01s03.xhtml#sherlock_ug_GetPcbModelingInputFieldsRequest "GetPcbModelingInputFieldsRequest")

[.GetPcbModeling InputFields Response](ch01s03.xhtml#sherlock_ug_GetPcbModelingInputFieldsResponse "GetPcbModelingInputFieldsResponse")

Returns the list of valid PCB MOdeling property field.

updatePcb ModelingProps

[.UpdatePcb Modeling PropsRequest](ch01s03.xhtml#sherlock_ug_UpdatePcbModelingPropsRequest "UpdatePcbModelingPropsRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Updates the PCB modeling properties for the provided analysis types.

  

### Get Natural Frequency Input Fields

#### GetNaturalFrequencyInputFieldsRequest

 

#### GetNaturalFrequencyInputFieldsResponse

**Table 1.3. GetNaturalFrequencyInputFieldsResponse**

**Field**

**Type**

**Label**

**Description**

fieldName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated 

  

#### Example: Get Natural Frequency Input Fields

##### Proto Request Example:

{}

##### Python Example:

import SherlockAnalysisService\_pb2
import SherlockAnalysisService\_pb2\_grpc
import SherlockCommonService\_pb2
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockAnalysisService\_pb2\_grpc.SherlockAnalysisServiceStub(channel)

message = SherlockAnalysisService\_pb2.GetNaturalFrequencyInputFieldsRequest()

response = stub.getNaturalFrequencyInputFields(message)
print(str(response))

### Get PCB Modeling Input Fields

#### GetPcbModelingInputFieldsRequest

 

#### GetPcbModelingInputFieldsResponse

**Table 1.4. GetPcbModelingInputFieldsResponse**

**Field**

**Type**

**Label**

**Description**

fieldName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated 

  

#### Example: Get PCB Modeling Input Fields

##### Proto Request Example:

{}

##### Python Example:

import SherlockAnalysisService\_pb2
import SherlockAnalysisService\_pb2\_grpc
import SherlockCommonService\_pb2
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockAnalysisService\_pb2\_grpc.SherlockAnalysisServiceStub(channel)

message = SherlockAnalysisService\_pb2.GetPcbModelingInputFieldsRequest()

response = stub.getPcbModelingInputFields(message)
print(str(response))

### Get Random Vibe Input Fields

Request to list the valid Random Vibe input fields for the provided model source and user configuration.

#### GetRandomVibeInputFieldsRequest

**Table 1.5. GetRandomVibeInputFieldsRequest**

**Field**

**Type**

**Label**

**Description**

modelSource

[ModelSource](ch01s03.xhtml#sherlock_ug_api_modelsource "ModelSource")

optional

Optional model source. Default: GENERATED

  

#### GetRandomVibeInputFieldsResponse

**Table 1.6. GetRandomVibeInputFieldsResponse**

**Field**

**Type**

**Label**

**Description**

fieldName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated 

  

#### Example: Get Random Vibe Input Fields

##### Proto Request Example:

{}

##### Python Example:

import SherlockAnalysisService\_pb2
import SherlockAnalysisService\_pb2\_grpc
import SherlockCommonService\_pb2
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockAnalysisService\_pb2\_grpc.SherlockAnalysisServiceStub(channel)

message = SherlockAnalysisService\_pb2.GetRandomVibeInputFieldsRequest()

response = stub.getRandomVibeInputFields(message)
print(str(response))

### Run Analysis

In this section:

#### RunAnalysisRequest

Request to run one or more Sherlock analyses given the project path, CCA name, analyses, Life Cycle phases and events.

**Table 1.7. RunAnalysisRequest**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **RunAnalysisRequest.Analysis**_

projectDir

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The full path to the Sherlock project directory.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The CCA name.

analyses

[RunAnalysisRequest .Analysis](ch01s03.xhtml#sherlock_ug_RunAnalysisRequest.Analysis "RunAnalysisRequest.Analysis")

repeated 

  

#### RunAnalysisRequest.Analysis

**Table 1.8. RunAnalysisRequest.Analysis**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **RunAnalysisRequest.Analysis.AnalysisType**_

type

[RunAnalysisRequest.Analysis .AnalysisType](ch01s03.xhtml#sherlock_ug_RunAnalysisRequest.Analysis.AnalysisType "RunAnalysisRequest.Analysis.AnalysisType")

 

 

phases

[RunAnalysisRequest.Analysis.Phase](ch01s03.xhtml#sherlock_ug_RunAnalysisRequest.Analysis.Phase "RunAnalysisRequest.Analysis.Phase")

repeated 

  

#### RunAnalysisRequest.Analysis.Phase

**Table 1.9. RunAnalysisRequest.Analysis.Phase**

**Field**

**Type**

**Label**

**Description**

__For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as:_ **RunAnalysisRequest.Analysis.Phase.Event**_

name

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Life cycle phase name.

events

[RunAnalysisRequest. Analysis.Phase.Event](ch01s03.xhtml#sherlock_ug_RunAnalysisRequest.Analysis.Phase.Event "RunAnalysisRequest.Analysis.Phase.Event")

repeated 

  

#### RunAnalysisRequest.Analysis.Phase.Event

**Table 1.10. RunAnalysisRequest.Analysis.Phase.Event**

**Field**

**Type**

**Label**

**Description**

name

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Life cycle event name.

  

#### Example: Run Part Validation and Mechanical Shock Analysis

##### Proto Request Example

{
  "project": "Tutorial",
  "ccaName": "Main Board",
  "analyses": \[
    {
      "type": 10
    },
    {
      "type": 4,
      "phases": \[
        {
          "name": "On The Road",
          "events": \[
            {
              "name": "2 - Pothole"
            }
          \]
        },
        {
          "name": "Environmental",
          "events": \[
            {
              "name": "3 - Earthquake"
            }
          \]
        }
      \]
    }
  \]
}

##### Python Example

import SherlockAnalysisService\_pb2
import SherlockAnalysisService\_pb2\_grpc
import SherlockCommonService\_pb2
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockAnalysisService\_pb2\_grpc.SherlockAnalysisServiceStub(channel)

message = SherlockAnalysisService\_pb2.RunAnalysisRequest()
message.project = "Tutorial"
message.ccaName = 'Main Board'

shMessage = SherlockAnalysisService\_pb2.RunAnalysisRequest()
shMessage.project = "Tutorial"
shMessage.ccaName = 'Main Board'

analysis = SherlockAnalysisService\_pb2.RunAnalysisRequest().Analysis()
analysis.type = SherlockAnalysisService\_pb2.RunAnalysisRequest.Analysis.AnalysisType.PartValidation

shAnalysis = SherlockAnalysisService\_pb2.RunAnalysisRequest().Analysis()
shAnalysis.type = SherlockAnalysisService\_pb2.RunAnalysisRequest.Analysis.AnalysisType.MechanicalShock

phase1 = SherlockAnalysisService\_pb2.RunAnalysisRequest().Analysis().Phase()
phase1.name = 'On The Road'

event1 = SherlockAnalysisService\_pb2.RunAnalysisRequest().Analysis().Phase().Event()
event1.name = '2 - Pothole'

phase2 = SherlockAnalysisService\_pb2.RunAnalysisRequest().Analysis().Phase()
phase2.name = 'Environmental'

event2 = SherlockAnalysisService\_pb2.RunAnalysisRequest().Analysis().Phase().Event()
event2.name = '3 - Earthquake'

phase1.events.extend(\[event1\])
phase2.events.extend(\[event2\])
shAnalysis.phases.extend(\[phase1, phase2\])

# Part Validation
message.analyses.extend(\[analysis\])
response = stub.runAnalysis(message)
print(str(response))

# Mechanical Shock
shMessage.analyses.extend(\[shAnalysis\])
response = stub.runAnalysis(shMessage)
print(str(response))

### Run Strain Map Analysis

Request to run Sherlock strain map analysis given the project name, CCA name, and strain maps.

#### RunStrainMapAnalysisRequest

**Table 1.11. RunStrainMapAnalysisRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The CCA name of the main CCA for the analysis.

strainMapAnalyses

See below  ⇓

repeated

 

[RunStrainMapAnalysisRequest.StrainMapAnalysis](ch01s03.xhtml#sherlock_ug_RunStrainMapAnalysisRequest.StrainMapAnalysis "RunStrainMapAnalysisRequest.StrainMapAnalysis")

  

#### RunStrainMapAnalysisRequest.StrainMapAnalysis

**Table 1.12. RunStrainMapAnalysisRequest.StrainMapAnalysis**

**Field**

**Type**

**Label**

**Description**

type

See below ⇓

 

 

[RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType](ch01s03.xhtml#sherlock_ug_UpdatePcbModelingPropsRequest.Analysis.AnalysisType "UpdatePcbModelingPropsRequest.Analysis.AnalysisType")

eventStrainMaps

See below ⇓

repeated

 

[RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap](ch01s03.xhtml#sherlock_ug_RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap "RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap")

  

#### RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap

**Table 1.13. RunStrainMapAnalysisRequest.StrainMapAnalysis.EventStrainMap**

**Field**

**Type**

**Label**

**Description**

phaseName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Life cycle phase name.

eventName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Life cycle event name.

pcbSide

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

PCB side for the strain map. Supported values are: TOP, BOTTOM.

strainMap

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Strain map assigned to the event.

subAssemblyName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

optional

The name of the sub-assembly CCA to be assigned the strain map.

  

### Update Natural Frequency Properties

#### UpdateNaturalFrequencyPropsRequest

**Table 1.14. UpdateNaturalFrequencyPropsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

CCA name.

naturalFreqCount

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

 

NF Result Count.

naturalFreqMin

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Min Frequency.

naturalFreqMinUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Min Frequency units (HZ, KHZ, MHZ, or GHZ).

naturalFreqMax

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Max Frequency.

naturalFreqMaxUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Max Frequency units (HZ, KHZ, MHZ, or GHZ).

partValidationEnabled

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Part Validation.

requireMaterialAssignmentEnabled

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Require Material Assignment.

analysisTemp

[double](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Temperature.

analysisTempUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Temperature units (C, F, or K).

  

#### Example: Update Natural Frequency Properties

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "naturalFreqCount": 8,
  "naturalFreqMin": 100,
  "naturalFreqMinUnits": "HZ",
  "naturalFreqMax": 1000,
  "naturalFreqMaxUnits": "HZ",
  "partValidationEnabled": true,
  "requireMaterialAssignmentEnabled": true,
  "analysisTemp": 20,
  "analysisTempUnits": "C"
}

##### Python Example:

import sys
import SherlockAnalysisService\_pb2
import SherlockAnalysisService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockAnalysisService\_pb2\_grpc.SherlockAnalysisServiceStub(channel)

message = SherlockAnalysisService\_pb2.UpdateNaturalFrequencyPropsRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.naturalFreqCount = 8
message.naturalFreqMin = 100
message.naturalFreqMinUnits = "HZ"
message.naturalFreqMax = 1000
message.naturalFreqMaxUnits = "HZ"
message.partValidationEnabled = True
message.requireMaterialAssignmentEnabled = True
message.analysisTemp = 20
message.analysisTempUnits = "C"

# Update NF properties
response = stub.updateNaturalFrequencyProps(message)
print(str(response))

### Update PCB Modeling Properties

#### UpdatePcbModelingPropsRequest

**Table 1.15. UpdatePcbModelingPropsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

ccaNames

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

The CCA names for which to assign the PCB modeling parameters.

analyses

See below ⇓

repeated

 

 

[UpdatePcbModelingPropsRequest.Analysis](ch01s03.xhtml#sherlock_ug_UpdatePcbModelingPropsRequest.Analysis "UpdatePcbModelingPropsRequest.Analysis")

  

#### UpdatePcbModelingPropsRequest.Analysis

**Table 1.16. UpdatePcbModelingPropsRequest.Analysis**

**Field**

**Type**

**Label**

**Description**

type

See below ⇓

 

The type of analysis for which PCB modeling properties apply.

[UpdatePcbModelingPropsRequest.Analysis.AnalysisType](ch01s03.xhtml#sherlock_ug_UpdatePcbModelingPropsRequest.Analysis.AnalysisType "UpdatePcbModelingPropsRequest.Analysis.AnalysisType")

modelType

See below ⇓

 

The PCB modeling mesh type.

[UpdatePcbModelingPropsRequest.Analysis.PcbModelType](ch01s03.xhtml#sherlock_ug_UpdatePcbModelingPropsRequest.Analysis.PcbModelType "UpdatePcbModelingPropsRequest.Analysis.PcbModelType")

modelingRegionEnabled

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Indicates if modeling regions are enabled.

pcbMaterialModel

See below ⇓

 

The PCB modeling PCB model type.

[UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel](ch01s03.xhtml#sherlock_ug_UpdatePcbModelingPropsRequest.Analysis.PcbModelType "UpdatePcbModelingPropsRequest.Analysis.PcbModelType")

pcbMaxMaterials

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

optional

The number of PCB materials for Uniform Elements and Layered Elements PCB model types.

pcbElemOrder

[ElementOrder](ch01s03.xhtml#sherlock_ug_api_elementorder "ElementOrder")

 

The element order for PCB elements.

pcbMaxEdgeLength

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

The maximum mesh size for PCB elements.

pcbMaxEdgeLengthUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The length units for the maximum mesh size.

pcbMaxVertical

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

The maximum vertical mesh size for PCB elements.

pcbMaxVerticalUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The length units for the maximum vertical mesh size.

quadsPreferred

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Indicates that the meshing engine should attempt to generate quad-shaped elements when creating the mesh.

  

#### Example: Update PCB Modeling Properties

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "ccaNames": \[
    "Main Board"
  \],
  "analyses": \[
    {
      "type": 6,
      "modelType": 1,
      "modelingRegionEnabled": true,
      "pcbMaterialModel": 2,
      "pcbMaxMaterials": 5,
      "pcbElemOrder": 1,
      "pcbMaxEdgeLength": 0.5,
      "pcbMaxEdgeLengthUnits": "mm",
      "pcbMaxVertical": 1,
      "pcbMaxVerticalUnits": "mm",
      "quadsPreferred": true
    }
  \]
}

##### Python Example:

import SherlockAnalysisService\_pb2
import SherlockAnalysisService\_pb2\_grpc
import SherlockCommonService\_pb2
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockAnalysisService\_pb2\_grpc.SherlockAnalysisServiceStub(channel)

message = SherlockAnalysisService\_pb2.UpdatePcbModelingPropsRequest()
message.project = "Tutorial Project"
message.ccaNames.extend(\['Main Board'\])
analysis = SherlockAnalysisService\_pb2.UpdatePcbModelingPropsRequest().Analysis()
analysis.type = SherlockAnalysisService\_pb2.UpdatePcbModelingPropsRequest.Analysis.AnalysisType.ThermalMech
analysis.modelType = SherlockAnalysisService\_pb2.UpdatePcbModelingPropsRequest.Analysis.PcbModelType.Bonded
analysis.modelingRegionEnabled = True
analysis.pcbMaterialModel = SherlockAnalysisService\_pb2.UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel.Layered
analysis.pcbMaxMaterials = 5
analysis.pcbElemOrder = 1
analysis.pcbMaxEdgeLength = 0.5
analysis.pcbMaxEdgeLengthUnits = "mm"
analysis.pcbMaxVertical = 1
analysis.pcbMaxVerticalUnits = "mm"
analysis.quadsPreferred = True
message.analyses.extend(\[analysis\])
response = stub.updatePcbModelingProps(message)
print(str(response))

### Update Random Vibe Properties

Update the random vibe properties for a given CCA.

#### UpdateRandomVibePropsRequest

**Table 1.17. UpdateRandomVibePropsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

CCA name.

randomVibeDamping

[string](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Modal Damping Ratio(s).

naturalFreqMin

[double](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Min Frequency. For NX Nastran analysis only.

naturalFreqMinUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Min Frequency units. For NX Nastran analysis only.

naturalFreqMax

[double](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Max Frequency. For NX Nastran analysis only.

naturalFreqMaxUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Max Frequency units. For NX Nastran analysis only.

analysisTemp

[double](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Temperature.

analysisTempUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Temperature units.

partValidationEnabled

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Part Validation.

forceModelRebuild

[string](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Model Creation. Valid values are "FORCE" or "AUTO"

reuseModalAnalysis

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Reuse Natural Frequency. For NX Nastran analysis only.

performNFFreqRangeCheck

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Frequency Range Check. For NX Nastran analysis only.

requireMaterialAssignmentEnabled

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Require Material Assignment.

modelSource

[ModelSource](ch01s03.xhtml#sherlock_ug_api_modelsource "ModelSource")

optional

Optional model source. Default: GENERATED

strainMapNaturalFreqs

[string](ch01s11.xhtml "gRPC Scalar Value Types")

optional

Comma-separated list of natural frequencies for strain map analysis.

  

#### Example: Update Random Vibe Properties

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "randomVibeDamping": "0.01",
  "naturalFreqMin": 0,
  "naturalFreqMinUnits": "HZ",
  "naturalFreqMax": 500,
  "naturalFreqMaxUnits": "HZ",
  "analysisTemp": 0,
  "analysisTempUnits": "C",
  "partValidationEnabled": true,
  "forceModelRebuild": "AUTO",
  "reuseModalAnalysis": true,
  "performNFFreqRangeCheck": true,
  "requireMaterialAssignmentEnabled": true
}

##### Python Example:

import SherlockAnalysisService\_pb2
import SherlockAnalysisService\_pb2\_grpc
import SherlockCommonService\_pb2
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockAnalysisService\_pb2\_grpc.SherlockAnalysisServiceStub(channel)

message = SherlockAnalysisService\_pb2.UpdateRandomVibePropsRequest()
message.project = "Tutorial Project"
message.ccaName = 'Main Board'
message.randomVibeDamping = ".01"
message.naturalFreqMin = 0
message.naturalFreqMinUnits = 'HZ'
message.naturalFreqMax = 500
message.naturalFreqMaxUnits ='HZ'
message.analysisTemp = 0
message.analysisTempUnits = "C"
message.partValidationEnabled = True
message.forceModelRebuild = "AUTO"
message.reuseModalAnalysis = True
message.performNFFreqRangeCheck = True
message.requireMaterialAssignmentEnabled = True

response = stub.updateRandomVibeProps(message)
print(str(response))

### Update Thermal Mech Properties

Allows for Thermal Mech analysis parameters to be updated.

#### UpdateThermalMechPropsRequest

**Table 1.18. UpdateThermalMechPropsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

CCA names.

thermalResultCount

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

 

Thermal Mech Result Count.

partValidationEnabled

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Part Validation.

See below ⇓

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Require Material Assignment.

requireMaterialAssignmentEnabled

  

#### Example: Update Thermal Mech Properties

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "ccaName": \[
    "Main Board"
  \],
  "thermalResultCount": 4,
  "partValidationEnabled": true,
  "requireMaterialAssignmentEnabled": true
}

##### Python Example:

import SherlockAnalysisService\_pb2
import SherlockAnalysisService\_pb2\_grpc
import SherlockCommonService\_pb2
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockAnalysisService\_pb2\_grpc.SherlockAnalysisServiceStub(channel)

message = SherlockAnalysisService\_pb2.UpdateThermalMechPropsRequest()
message.project = "Tutorial Project"
message.ccaName.extend(\['Main Board'\])
message.thermalResultCount = 4
message.partValidationEnabled = True
requireMaterialAssignmentEnabled = True

response = stub.updateThermalMechProps(message)
print(str(response))

### ElementOrder

Enumeration defining the types of suppored element orders.

**Table 1.19. ElementOrder**

**Name**

**Number**

**Description**

UnknownOrder

0

Default enum to catch invalid element order.

Linear

1

Enum for first order linear elements.

Quadratic

2

Enum for second order quadratic elements.

SolidShell

3

Enum for solid shell elements.

  

### ModelSource

**Table 1.20. ModelSource**

**Name**

**Number**

**Description**

UNKNOWN

0

Default enum to catch invalid source

GENERATED

1

Generated analysis model source

STRAIN\_MAP

2

Strain map analysis model source

  

### RunAnalysisRequest.Analysis.AnalysisType

**Table 1.21. RunAnalysisRequest.Analysis.AnalysisType**

**Name**

**Number**

**Description**

UNKNOWN

0

Default enum to catch invalid analysis.

NaturalFreq

1

Enum for the Natural Frequency analysis.

HarmonicVibe

2

Enum for the Harmonic Vibe analysis.

ICTAnalysis

3

Enum for the ICA analysis.

MechanicalShock

4

Enum for the Mechanical Shock analysis.

RandomVibe

5

Enum for the Random Vibe analysis.

ComponentFailureMode

7

Enum for the Component Failure Mechanism analysis.

DFMEAModule

8

Enum for the DFMEA analysis.

PTHFatigue

9

Enum for the PTH Fatigue analysis.

PartValidation

10

Enum for the Part Validation analysis.

SemiconductorWearout

11

Enum for the Semiconductor Wearout analysis.

SolderJointFatigue

12

Enum for the Solder Fatigue analysis.

ThermalDerating

13

Enum for the Thermal Derating analysis.

ThermalMech

14

Enum for the Thermal Mech analysis.

  

### RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType

**Table 1.22. RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType**

**Name**

**Number**

**Description**

UNKNOWN

0

Default enum to catch invalid analysis.

RandomVibe

1

Enum for the Random Vibe analysis.

  

#### Example: Run Strain Map Analysis

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "strainMapAnalyses": \[
    {
      "type": 1,
      "eventStrainMaps": \[
        {
          "phaseName": "On The Road",
          "eventName": "1 - Vibration",
          "pcbSide": "TOP",
          "strainMap": "StrainMap - Top",
          "subAssemblyName": "Main Board"
        }
      \]
    },
    {
      "type": 1,
      "eventStrainMaps": \[
        {
          "phaseName": "On The Road",
          "eventName": "1 - Vibration",
          "pcbSide": "BOTTOM",
          "strainMap": "StrainMap - Bottom",
          "subAssemblyName": "Main Board"
        }
      \]
    }
  \]
}

##### Python Example:

import SherlockAnalysisService\_pb2
import SherlockAnalysisService\_pb2\_grpc
import SherlockCommonService\_pb2
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockAnalysisService\_pb2\_grpc.SherlockAnalysisServiceStub(channel)

message = SherlockAnalysisService\_pb2.RunStrainMapAnalysisRequest()
message.project = "Tutorial Project"
message.ccaName = 'Main Board'
strainMapAnalysis = SherlockAnalysisService\_pb2.RunStrainMapAnalysisRequest().StrainMapAnalysis()
strainMapAnalysis.type = SherlockAnalysisService\_pb2.RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType.RandomVibe
eventStrainMapAnalysis1 = SherlockAnalysisService\_pb2.RunStrainMapAnalysisRequest().StrainMapAnalysis().EventStrainMap()
eventStrainMapAnalysis1.phaseName = "On The Road"
eventStrainMapAnalysis1.eventName = "1 - Vibration"
eventStrainMapAnalysis1.pcbSide = "TOP"
eventStrainMapAnalysis1.strainMap = "StrainMap - Top"
eventStrainMapAnalysis1.subAssemblyName = "Main Board" #optional
eventStrainMapAnalysis2 = SherlockAnalysisService\_pb2.RunStrainMapAnalysisRequest().StrainMapAnalysis().EventStrainMap()
eventStrainMapAnalysis2.phaseName = "On The Road"
eventStrainMapAnalysis2.eventName = "1 - Vibration"
eventStrainMapAnalysis2.pcbSide = "BOTTOM"
eventStrainMapAnalysis2.strainMap = "StrainMap - Bottom"
eventStrainMapAnalysis2.subAssemblyName = "Main Board" #optional
strainMapAnalysis.eventStrainMaps.extend(\[eventStrainMapAnalysis1, eventStrainMapAnalysis2\])
message.strainMapAnalyses.extend(\[strainMapAnalysis\])

response = stub.runStrainMapAnalysis(message)
print(str(response))

### UpdatePcbModelingPropsRequest.Analysis.AnalysisType

**Table 1.23. UpdatePcbModelingPropsRequest.Analysis.AnalysisType**

**Name**

**Number**

**Description**

UnknownAnalysisType

0

Default enum to catch invalid analysis.

HarmonicVibe

1

Enum for the Harmonic Vibe analysis.

ICTAnalysis

2

Enum for the ICT analysis.

MechanicalShock

3

Enum for the Mechanical Shock analysis.

NaturalFreq

4

Enum for the Natural Frequency analysis.

RandomVibe

5

Enum for the Random Vibe analysis.

ThermalMech

6

Enum for the Thermal Mech analysis.

  

### UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel

**Table 1.24. UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel**

**Name**

**Number**

**Description**

UnknownPcbModel

0

Default enum to catch invalid PCB model

Uniform

1

Enum for uniform PCB model

Layered

2

Enum for layered PCB model

UniformElements

3

Enum for uniform elements PCB model

LayeredElements

4

Enum for layered elements PCB model

  

### UpdatePcbModelingPropsRequest.Analysis.PcbModelType

**Table 1.25. UpdatePcbModelingPropsRequest.Analysis.PcbModelType**

**Name**

**Number**

**Description**

UnknownMeshType

0

Default enum to catch invalid mesh type.

Bonded

1

Bonded FEA model.

  

* * *

[Prev](ch01s02.xhtml) 

 

 [Next](ch01s04.xhtml)

Index to the Sherlock APIs 

[Home](index.xhtml)

 Sherlock Common Service- SherlockCommonService.proto