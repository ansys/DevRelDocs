# Sherlock Parts Service- SherlockPartsService.proto

[Click here to return to the main index to Sherlock's APIs.](introduction.md
"Index to the Sherlock APIs")

In this section you will find APIs that allow you to import and export parts
lists, see the user-configured part libraries, to see a list of parts with
properties different than those in the Sherlock Part Library, and to update
the Parts List for a given project. Clicking on the active links in the table
below will take you to the selected API.

Table 1.163. Index to Sherlock Parts Service APIs

Method Name| Request Type| Response Type| Description  
---|---|---|---  
For display purposes, strings in the first three columns are broken into
multiple lines and should be read as continuous. For example, the first string
in column two should be interpreted as: .ListPartsLibrariesRequest  
exportPartsList| [.ExportParts
ListRequest](ch01s08s08.md#sherlock_ug_updateleadmodelingrequest
"UpdateLeadModelingRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Export parts list for all parts given a project's CCA.  
getBoardSides| [.GetBoard SidesRequest](ch01s08s02s03.md "Examples: Get
Board Sides")| [.GetBoard SidesResponse](ch01s08s02s02.md
"GetBoardSidesResponse")| Get a list of valid board side values.  
importPartsList| [.ImportParts
ListRequest](ch01s08s03.md#sherlock_ug_importpartslistrequest
"ImportPartsListRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Import a parts list for a given a project's CCA.  
getPart Location| [.GetPart LocationRequest](ch01s08s04s02.md
"GetPartLocationResponse")| [.GetPart LocationResponse](ch01s08s04s02.md
"GetPartLocationResponse")| Get the location properties for a part.  
getPart LocationUnits| [GetPartLocation
UnitsRequest](ch01s08s05.md#sherlock_ug_GetPartLocationUnitsRequest
"GetPartLocationUnitsRequest")| [.GetPartLocation
UnitsResponse](ch01s08s05s02.md "GetPartLocationUnitsResponse")| Get a list
of valid part location units.  
listParts Libraries| [.ListParts
LibrariesRequest](ch01s08s06.md#sherlock_ug_ListPartsLibrariesRequest
"ListPartsLibrariesRequest")| [.ListParts
LibrariesResponse](ch01s08s02s03.md "Examples: Get Board Sides")| List the
available parts libraries.  
listParts NotUpdated| [.ListPartsNot
UpdatedRequest](ch01s08s07.md#sherlock_ug_ListPartsNotUpdatedRequest
"ListPartsNotUpdatedRequest")| [.ListPartsNot
UpdatedResponse](ch01s08s07s02.md "ListPartsNotUpdatedResponse")| List the
parts that have not been updated from the Sherlock Part Library.  
updatePartsList| [.Update
PartsListRequest](ch01s08s09.md#sherlock_ug_UpdatePartsListRequest
"UpdatePartsListRequest")| [.UpdateParts ListResponse](ch01s08s09s04.md
"UpdatePartsListResponse")| Update the parts list for a project's CCA.  
updatePartsList FromAVL| [.UpdatePartsList
FromAVLRequest](ch01s08s10.md#sherlock_ug_UpdatePartsListFromAVLRequest
"UpdatePartsListFromAVLRequest")| .UpdatePartsList FromAVLResponse| Update the
parts list from the AVL  
updateParts Locations| [.UpdateParts
LocationsRequest](ch01s08s12.md#sherlock_ug_UpdatePartsLocationsRequest
"UpdatePartsLocationsRequest")| [.UpdateParts
LocationsResponse](ch01s08s12s03.md "UpdatePartsLocationsResponse")| Upate
one or more parts' locations using a .csv file.  
updateParts LocationsByFile| [.UpdatePartsLocations
ByFileRequest](ch01s08s11s02.md "UpdatePartsLocationsByFileResponse")|
[.UpdatePartsLocations ByFileResponse](ch01s08s11s02.md
"UpdatePartsLocationsByFileResponse")| Update one or more parts' locations
using a CSV file.  
update LeadModeling| [.UpdateLead
ModelingRequest](ch01s08s08.md#sherlock_ug_updateleadmodelingrequest
"UpdateLeadModelingRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Enable lead modeling for all non LEADLESS parts leads in a project's CCA.  
  
  

## Export/Import Parts List

Links:

### ExportPartsListRequest

Request to export the parts list for all parts for a project CCA.

Table 1.164. ExportPartsListRequest

Field| Type| Label| Description  
---|---|---|---  
project| [string](scalar-values.md "gRPC Scalar Value Types")|  | Sherlock project name.  
ccaName| [string](scalar-values.md "gRPC Scalar Value Types")|  | The CCA name.  
exportFile| [string](scalar-values.md "gRPC Scalar Value Types")|  | Full file path to the export parts list .csv file.  
  
  

### Examples: Export Parts List

#### Proto Request Example

    
    
    {
      "project": "Tutorial Project",
      "ccaName": "Main Board",
      "exportFile": "C:\\temp\\test.csv"
    }

#### Python Example

For a Python example, refer to the online [PySherlock
Reference](https://sherlock.docs.pyansys.com/version/stable/api/index.md).

* * *

[Prev](ch01s07s03s02.md) |   / [Contents](index.md) / [Home](../../index.htm)|  [Next](ch01s08s02.md)  
---|---|---

