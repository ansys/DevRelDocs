# Sherlock Project Service- SherlockProjectService.proto

[Click here to return to the main index to Sherlock's APIs.](introduction.md
"Index to the Sherlock APIs")

The APIs in this section perform project level functions such as generating
reports and importing ECAD files. Clicking on the active links in the table
below will take you to the selected API.

Table 1.191. Index to Sherlock Project Service APIs

Method Name| Request Type| Response Type| Description  
---|---|---|---  
For display purposes, the long strings in columns two and three are broken
into multiple lines. For example, the first string in column two should be
interpreted as: .GenReportRequest  
genReport| [.GenReport Request](ch01s09s07.md#sherlock_ug_GenReportRequest
"GenReportRequest")| [.GenReport Response](ch01s09s07s02.md
"GenReportResponse") stream| Generates the project report and return it via
streaming.  
genCCAReport|
[.GenCCAReportRequest](ch01s09s06.md#sherlock_ug_GenCCAReportRequest
"GenCCAReportRequest")| [.GenCCAReportResponse](ch01s09s06s02.md
"GenCCAReportResponse") stream| Generates the project CCA report and return it
via streaming.  
importODBArchive| [.ImportODB Request](ch01s09s09.md "Import ODB")|
[ReturnCode](ch01s04s04.md "Return Code")| Imports an ODB++ archive.  
importIPC2581 Archive| [.ImportIPC2581 Request](ch01s09s08.md "Import
IPC2581")| [ReturnCode](ch01s04s04.md "Return Code")| Imports an ODB++
archive.  
deleteProject| [.DeleteProjectRequest](ch01s09s05.md
"DeleteProjectRequest")| [.ReturnCode](ch01s04s04.md "Return Code")| Delete
a project from Sherlock  
addStrainMap|
[.AddStrainMapRequest](ch01s09s03.md#sherlock_ug_AddStrainMapRequest
"AddStrainMapRequest")| [.AddStrainMapResponse](ch01s09s03s03.md
"AddStrainMapResponse")| Add a strain map to a Sherlock project.  
listStrainMaps|
[.ListStrainMapsRequest](ch01s09s11.md#sherlock_ug_ListStrainMapsRequest
"ListStrainMapsRequest")| [.ListStrainMapsResponse](ch01s09s11s02.md
"ListStrainMapsResponse")| Returns a list of circuit cards and their assigned
strain maps for a given Sherlock project.  
listCCAs| [.ListCCAsRequest](ch01s09s10.md#sherlock_ug_ListCCAsRequest
"ListCCAsRequest")| [.ListCCAsResponse](ch01s09s10s02.md
"ListCCAsResponse.CCA")| Returns a list of circuit cards, their properties,
and sub-assemblies for a given Sherlock project.  
addProject| [.AddProjectRequest](ch01s09s02.md#sherlock_ug_AddProjectRequest
"AddProjectRequest")| [ReturnCode](ch01s04s04.md "Return Code")| Add a
project to Sherlock.  
addCCA| [.AddCcaRequest](project-services.md#sherlock_ug_AddCcaRequest
"AddCcaRequest")| [ReturnCode](ch01s04s04.md "Return Code")| Creates a new
circuit card assembly.  
  
  

## Add CCA

Links:

### AddCcaRequest

Table 1.192. AddCcaRequest

Field| Type| Label| Description  
---|---|---|---  
project| [string](scalar-values.md "gRPC Scalar Value Types")|  | Name of the project.   
CCAs| [CCA](ch01s09s04.md "CCA")| repeated| CCAs to add.  
  
  

### Example: AddCcaRequest

#### Proto Request Example

    
    
    {
      "project": "Tutorial",
      "CCAs": [
        {
          "ccaName": "Test CCA",
          "description": "Added from GRPC",
          "defaultSolderType": "SAC305",
          "defaultStencilThickness": 0.135,
          "defaultStencilThicknessUnits": "mm",
          "defaultPartTempRise": 10.53,
          "defaultPartTempRiseUnits": "F",
          "guessPartPropertiesEnabled": false
        }
      ]
    }

#### Python Example:

For a Python example, refer to the online [PySherlock
Reference](https://sherlock.docs.pyansys.com/version/stable/api/index.md).

* * *

[Prev](ch01s08s16.md) |   / [Contents](index.md) / [Home](../../index.htm)|  [Next](ch01s09s02.md)  
---|---|---

