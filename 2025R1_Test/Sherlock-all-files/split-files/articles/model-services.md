# Sherlock Model Services- SherlockModelServices.proto

[Click here to return to the main index to Sherlock's APIs.](introduction.md
"Index to the Sherlock APIs")

The API in this section allows you to export the 3D model, material
definitions, and material assignments from Sherlock so they can be shared with
other applications such as Ansys Workbench. Clicking on the active links in
the table below will take you to the selected API.

Table 1.146. Index to Sherlock Model Service APIs

Method Name| Request Type| Response Type| Description  
---|---|---|---  
For display purposes, some strings in the first two columns are broken into
multiple lines and should be read as continuous. For example, the last entry
in column two should be interpreted as: .ExportTraceReinforcementModelRequest  
exportFEAModel|
[.ExportFEAModelRequest](model-services.md#sherlock_ug_ExportFEAModelRequest
"ExportFEAModelRequest")| [.ReturnCode](ch01s04s04.md "Return Code")| Export
an FEA Model.  
exportTrace ReinforcementModel| [.ExportTrace
ReinforcementModelRequest](ch01s07s02.md#sherlock_ug_ExportTraceReinforcementModelRequest
"ExportTraceReinforcementModelRequest")| [.ReturnCode](ch01s04s04.md "Return
Code")|  Export a Trace Reinforcement model.  
generateTraceModel| [.GenerateTraceModel
Request](ch01s07s03.md#sherlock_ug_GenerateTraceModelRequest
"GenerateTraceModelRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Generate a trace model.  
  
  

## Export FEA Model

Links:

### ExportFEAModelRequest

Request to export an FEA model

Table 1.147. ExportFEAModelRequest

Field| Type| Label| Description  
---|---|---|---  
For display purposes, some strings in the first two columns are broken into
multiple lines and should be read as continuous. For example, the fourth entry
in column two should be interpreted as: ExportFEAModelRequest.ExportAnalysis  
project| [string](scalar-values.md "gRPC Scalar Value Types")|  | Sherlock project name.  
ccaName| [string](scalar-values.md "gRPC Scalar Value Types")|  | The CCA name.  
exportFile| [string](scalar-values.md "gRPC Scalar Value Types")|  | Full file path to the export file.  
analysis| [ExportFEAModel Request.ExportAnalysis](model-services.md#sherlock_ug_ExportFEAModelRequest.ExportAnalysis "ExportFEAModelRequest.ExportAnalysis")|  |   
drillHoleParam| [ExportFEAModelRequest. DrillHoleParam](model-services.md#sherlock_ug_ExportFEAModelRequest.DrillHoleParam "ExportFEAModelRequest.DrillHoleParam")|  | Drill Holes modeling parameters - Min Hole Diameter and Max. Edge Length. If any of this parameter is provided, drill hole modeling will be enabled.  
detectLead Modeling| [string](scalar-values.md "gRPC Scalar Value Types")|  |  If enabled, automatically enable lead modeling if any part has lead geometry defined, valid values are ENABLED/enabled or DISABLED/disabled.  
leadModelParam| [ExportFEAModelRequest. LeadModelParam](model-services.md#sherlock_ug_ExportFEAModelRequest.LeadModelParam "ExportFEAModelRequest.LeadModelParam")|  |   
displayModel| [bool](scalar-values.md "gRPC Scalar Value Types")|  | Display model after export.  
clearFEADatabase| [bool](scalar-values.md "gRPC Scalar Value Types")|  | Clear FEA Database before defining model.  
useFEAModelID| [bool](scalar-values.md "gRPC Scalar Value Types")|  | Use FEA Model ID.  
coordinateUnits| [string](scalar-values.md "gRPC Scalar Value Types")|  | Units of exported model coordinates, valid values are "in", "mm", "m", "mil", "micron", "nm".   
  
  

### Examples: Export FEA Model

#### Proto Request Example:

    
    
    {
      "project": "Tutorial Project",
      "ccaName": "Main Board",
      "exportFile": "C:\\Temp\\test.wbjn",
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

#### Python Example:

For a Python example, refer to the online [PySherlock
Reference](https://sherlock.docs.pyansys.com/version/stable/api/index.md).

### ExportFEAModelRequest.DrillHoleParam

Table 1.148. ExportFEAModelRequest.DrillHoleParam

Field| Type| Label| Description  
---|---|---|---  
For display purposes, some strings in the second column are broken into
multiple lines and should be read as continuous. For example, the last entry
in column two should be interpreted as:  ExportFEAModel
Request.DrillHoleParam.MaxEdgeLength  
drillHoleModeling| [string](scalar-values.md "gRPC Scalar Value Types")|  | Enables or disables drill hole modeling, valid values are ENABLED/enabled or DISABLED/disabled.  
minHoleDiameter| [ExportFEAModel Request.DrillHoleParam. MinHoleDiameter](model-services.md#sherlock_ug_ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter "ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter")|  |   
maxEdgeLength| [ExportFEAModel Request.DrillHoleParam. MaxEdgeLength](model-services.md#sherlock_ug_ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength "ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength")|  |   
  
  

### ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength

Table 1.149. ExportFEAModelRequest.DrillHoleParam.MaxEdgeLength

Field| Type| Label| Description  
---|---|---|---  
value| [double](scalar-values.md "gRPC Scalar Value Types")|  | Maximum edge length value.  
unit| [string](scalar-values.md "gRPC Scalar Value Types")|  | Maximum edge length unit.  
  
  

### ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter

Table 1.150. ExportFEAModelRequest.DrillHoleParam.MinHoleDiameter

Field| Type| Label| Description  
---|---|---|---  
value| [double](scalar-values.md "gRPC Scalar Value Types")|  | Minimum hole diameter value.  
unit| [string](scalar-values.md "gRPC Scalar Value Types")|  | Minimum hole diameter unit.  
  
  

### ExportFEAModelRequest.LeadModelParam

Table 1.151. ExportFEAModelRequest.LeadModelParam

Field| Type| Label| Description  
---|---|---|---  
For display purposes, some strings in the second column are broken into
multiple lines and should be read as continuous. For example, the last entry
in column two should be interpreted as:
ExportFEAModelRequest.LeadModelParam.VerticalMeshSize  
leadModeling| [string](scalar-values.md "gRPC Scalar Value Types")|  | Enables or disables lead modeling, valid values are ENABLED/enabled or DISABLED/disabled.  
leadElemOrder| [string](scalar-values.md "gRPC Scalar Value Types")|  | Element order, valid values are "First Order", "Second Order", or "Solid Shell".  
maxMeshSize| [ExportFEAModel Request.LeadModel Param.MaxMeshSize](model-services.md#sherlock_ug_ExportFEAModelRequest.LeadModelParam.MaxMeshSize "ExportFEAModelRequest.LeadModelParam.MaxMeshSize")|  |   
verticalMeshSize| [ExportFEAModel Request.LeadModel Param.VerticalMeshSize](model-services.md#sherlock_ug_ExportFEAModelRequest.LeadModelParam.VerticalMeshSize "ExportFEAModelRequest.LeadModelParam.VerticalMeshSize")|  |   
  
  

### ExportFEAModelRequest.LeadModelParam.MaxMeshSize

Table 1.152. ExportFEAModelRequest.LeadModelParam.MaxMeshSize

Field| Type| Label| Description  
---|---|---|---  
value| [double](scalar-values.md "gRPC Scalar Value Types")|  | Max mesh size value.  
unit| [string](scalar-values.md "gRPC Scalar Value Types")|  | Max mesh size unit.  
  
  

### ExportFEAModelRequest.LeadModelParam.VerticalMeshSize

Table 1.153. ExportFEAModelRequest.LeadModelParam.VerticalMeshSize

Field| Type| Label| Description  
---|---|---|---  
value| [double](scalar-values.md "gRPC Scalar Value Types")|  | Vertical mesh size value.  
unit| [string](scalar-values.md "gRPC Scalar Value Types")|  | Vertical mesh size unit.  
  
  

### ExportFEAModelRequest.ExportAnalysis

Table 1.154. ExportFEAModelRequest.ExportAnalysis

Field| Type| Description  
---|---|---  
NaturalFreq| 0|  
HarmonicVibe| 1|  
ICTAnalysis| 2|  
MechanicalShock| 3|  
RandomVibe| 4|  
  
  

### Examples: Export FEA Model

#### Proto Request Example

    
    
    {
      "project": "Tutorial Project",
      "ccaName": "Main Board",
      "exportFile": "C:\\Temp\\test.wbjn",
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

#### Python Example

For a Python example, refer to the online [PySherlock
Reference](https://sherlock.docs.pyansys.com/version/stable/api/index.md).

* * *

[Prev](ch01s06s31s04.md) |   / [Contents](index.md) / [Home](../../index.htm)|  [Next](ch01s07s02.md)  
---|---|---

