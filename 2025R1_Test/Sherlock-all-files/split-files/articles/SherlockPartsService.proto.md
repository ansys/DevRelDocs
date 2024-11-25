# SherlockPartsService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-ExportNetListRequest"></a>

## ExportNetListRequest

Contains the options needed to export a net list to a delimited output file (csv but can have delimiters other than a comma)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| outputFilePath | [string](#string) |  | Full path of the file where the table will be written. |
| overwriteExisting | [bool](#bool) |  | Flag to determine if existing files should be overwritten if they match the outputFilePath. False by default. |
| colDelimiter | [TableDelimiter](#TableDelimiter) |  | Enum that specifies supported delimiter character to be used. Set to COMMA by default. Not applicable to Excel files like xls, xlsx. |
| utf8Enabled | [bool](#bool) |  | Flag that specifies if UTF-8 will be used. False by default. Not applicable to Excel files like xls, xlsx. |






<a name="-ExportPartsListRequest"></a>

## ExportPartsListRequest

Request to export the parts list for all parts for a project CCA.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the export parts list .csv file. |






<a name="-GetBoardSidesRequest"></a>

## GetBoardSidesRequest

Request to list valid board sides.






<a name="-GetBoardSidesResponse"></a>

## GetBoardSidesResponse

Represents a list of valid board sides.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| boardSides | [string](#string) | repeated | Board sides. |






<a name="-GetPartLocationRequest"></a>

## GetPartLocationRequest

Request to get a part&#39;s location.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| refDes | [string](#string) |  | A comma separated list of reference designators for a list of parts, or a Ref Des for one part. |
| locationUnits | [string](#string) |  | Unit of length for the part location. Supported values are IN, MM, M, MIL, MICRON, and NM. |






<a name="-GetPartLocationResponse"></a>

## GetPartLocationResponse

Represents one or multiple parts&#39; location properties


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| locationData | [GetPartLocationResponse.LocationData](#GetPartLocationResponse-LocationData) | repeated | List of location data for a part or list of parts in a specified project and CCA. |






<a name="-GetPartLocationResponse-LocationData"></a>

## GetPartLocationResponse.LocationData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  | Location of the part along the X axis. |
| y | [double](#double) |  | Location of the part along the Y axis. |
| rotation | [double](#double) |  | Rotation of the part on the board in degrees. |
| locationUnits | [string](#string) |  | Unit of length for the part location. |
| boardSide | [string](#string) |  | Side of board on which the component exists. |
| mirrored | [bool](#bool) |  | Indicates if the component is mirrored across the Y-axis. |
| refDes | [string](#string) |  | Ref Des for the corresponding part. |






<a name="-GetPartLocationUnitsRequest"></a>

## GetPartLocationUnitsRequest

Request to list valid location units.






<a name="-GetPartLocationUnitsResponse"></a>

## GetPartLocationUnitsResponse

Represents a list of valid location units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| units | [string](#string) | repeated | Location units. |






<a name="-ImportPartsListRequest"></a>

## ImportPartsListRequest

Request to import a parts list for a project CCA.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| importFile | [string](#string) |  | Full file path to the parts list .csv file. |
| importAsUserSrc | [bool](#bool) |  | If true, set the data source of the properties to &#34;User&#34;. Otherwise, set the data source to the name of the importFile. |






<a name="-ListPartsLibrariesRequest"></a>

## ListPartsLibrariesRequest

Request to list the available parts libraries.






<a name="-ListPartsLibrariesResponse"></a>

## ListPartsLibrariesResponse

Represents a list of available parts libraries.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| partLibrary | [string](#string) | repeated | Parts library name. |






<a name="-ListPartsNotUpdatedRequest"></a>

## ListPartsNotUpdatedRequest

Request to get a list of parts not updated from the Sherlock Part Library.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListPartsNotUpdatedResponse"></a>

## ListPartsNotUpdatedResponse

Represents a list of parts not updated from the Sherlock Part Library.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| ccas | [ListPartsNotUpdatedResponse.CCA](#ListPartsNotUpdatedResponse-CCA) | repeated | List of CCAs containing Parts not updated. |






<a name="-ListPartsNotUpdatedResponse-CCA"></a>

## ListPartsNotUpdatedResponse.CCA



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| parts | [ListPartsNotUpdatedResponse.CCA.Part](#ListPartsNotUpdatedResponse-CCA-Part) | repeated | List of Parts not updated for a CCA. |






<a name="-ListPartsNotUpdatedResponse-CCA-Part"></a>

## ListPartsNotUpdatedResponse.CCA.Part



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) |  | Reference designator for the part. |
| partNumber | [string](#string) |  | Part number. |






<a name="-UpdateLeadModelingRequest"></a>

## UpdateLeadModelingRequest

Request to enable Lead Modeling for all non LEADLESS parts leads.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-UpdatePartsListFromAVLRequest"></a>

## UpdatePartsListFromAVLRequest

Request to update the parts list from AVL.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| matching | [MatchingMode](#MatchingMode) |  | How sherlock matches parts in the AVL |
| duplication | [DuplicationMode](#DuplicationMode) |  | How sherlock handles duplicate parts found. |
| avlPartNum | [AVLPartNum](#AVLPartNum) |  | Update part number and vendor/manufacturer or part number only. |
| avlDesc | [AVLDescription](#AVLDescription) |  | Update description or not. |






<a name="-UpdatePartsListFromAVLResponse"></a>

## UpdatePartsListFromAVLResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| numPartsUpdated | [int32](#int32) |  | Number of parts updated in the parts list. |
| updateErrors | [string](#string) | repeated | Specific errors that occured during update. |






<a name="-UpdatePartsListPropertiesRequest"></a>

## UpdatePartsListPropertiesRequest

Request to update one or more properties of one or more parts in a parts list.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name for which part properties will be updated. |
| partProperties | [UpdatePartsListPropertiesRequest.PartProperties](#UpdatePartsListPropertiesRequest-PartProperties) | repeated | List of parts with properties to be updated. |






<a name="-UpdatePartsListPropertiesRequest-PartProperties"></a>

## UpdatePartsListPropertiesRequest.PartProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) | repeated | The reference designator for each part to be updated. If not included, update properties for all parts in the CCA. |
| properties | [UpdatePartsListPropertiesRequest.PartProperties.Property](#UpdatePartsListPropertiesRequest-PartProperties-Property) | repeated | Part properties to be updated. |






<a name="-UpdatePartsListPropertiesRequest-PartProperties-Property"></a>

## UpdatePartsListPropertiesRequest.PartProperties.Property



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Name of property to be updated. |
| value | [string](#string) |  | Value to be applied to the chosen part property. |






<a name="-UpdatePartsListPropertiesResponse"></a>

## UpdatePartsListPropertiesResponse

Contains the status of the parts properties update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateErrors | [UpdatePartsListPropertiesResponse.PartPropertyError](#UpdatePartsListPropertiesResponse-PartPropertyError) | repeated | Part property update errors. |






<a name="-UpdatePartsListPropertiesResponse-PartPropertyError"></a>

## UpdatePartsListPropertiesResponse.PartPropertyError



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) | optional | The reference designator of the part. Not set for invalid property name errors. |
| message | [string](#string) |  | Error message when updating the part. |






<a name="-UpdatePartsListRequest"></a>

## UpdatePartsListRequest

Request to update a parts list based on matching and duplication preferences provided.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| partLibrary | [string](#string) |  | Parts library name. |
| matching | [MatchingMode](#MatchingMode) |  | Designates the matching mode for updates. |
| duplication | [DuplicationMode](#DuplicationMode) |  | Designates how to handle duplications during update. |






<a name="-UpdatePartsListResponse"></a>

## UpdatePartsListResponse

Contains the status of the update as well as all of the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts update error messages. |






<a name="-UpdatePartsLocationsByFileRequest"></a>

## UpdatePartsLocationsByFileRequest

Request to update one or more parts&#39; locations using a CSV file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| numericFormat | [string](#string) |  | Numeric format for the file. If not provided, it will default to &#34;English (United States)&#34;. |
| filePath | [string](#string) |  | File that contains the components and location properties. |






<a name="-UpdatePartsLocationsByFileResponse"></a>

## UpdatePartsLocationsByFileResponse

Contains the status of the parts locations update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts locations update error messages. |






<a name="-UpdatePartsLocationsRequest"></a>

## UpdatePartsLocationsRequest

Request to set a part&#39;s location.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| partLoc | [UpdatePartsLocationsRequest.PartLocation](#UpdatePartsLocationsRequest-PartLocation) | repeated | List of part locations to be updated for a specified project and CCA. |






<a name="-UpdatePartsLocationsRequest-PartLocation"></a>

## UpdatePartsLocationsRequest.PartLocation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) |  | Reference designator of the part. |
| x | [string](#string) |  | Location of the part along the X axis. |
| y | [string](#string) |  | Location of the part along the Y axis. |
| rotation | [string](#string) |  | Rotation of the part on the board in degrees. |
| locationUnits | [string](#string) |  | Unit of length for the part location. Supported values are IN, MM, M, MIL, MICRON, and NM. |
| boardSide | [string](#string) |  | Side of board on which the component exists. Supported values are TOP and BOTTOM. |
| mirrored | [string](#string) |  | Indicates if the component is mirrored across the Y-axis. Supported values are Y, and N. |






<a name="-UpdatePartsLocationsResponse"></a>

## UpdatePartsLocationsResponse

Contains the status of the parts locations update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts locations update error messages. |





 


<a name="-AVLDescription"></a>

## AVLDescription

Determines if the part description in the parts list 
will be updated by the AVL.

| Name | Number | Description |
| ---- | ------ | ----------- |
| AssignApprovedDescription | 0 | Assign approved description. |
| DoNotChangeDescription | 1 | Do not change description. |



<a name="-AVLPartNum"></a>

## AVLPartNum

Determines what fields in the part list will get updated by the AVL.

| Name | Number | Description |
| ---- | ------ | ----------- |
| AssignInternalPartNum | 0 | Assign internal part number. |
| AssignVendorAndPartNum | 1 | Assign vendor &amp; part number. |
| DoNotChangeVendorOrPartNum | 2 | Do not change vendor / part number. |



<a name="-DuplicationMode"></a>

## DuplicationMode

Determines what happens when there are duplicate matches for parts in the part list
against parts in the AVL or Part Library.

| Name | Number | Description |
| ---- | ------ | ----------- |
| First | 0 | Uses first matched when there is duplication. |
| Error | 1 | Generates an error when there is duplication. |
| Ignore | 2 | Ignore the matches when there is duplication. |


 

 


<a name="-SherlockPartsService"></a>

## SherlockPartsService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| listPartsLibraries | [.ListPartsLibrariesRequest](#ListPartsLibrariesRequest) | [.ListPartsLibrariesResponse](#ListPartsLibrariesResponse) | List the available parts libraries. |
| updatePartsList | [.UpdatePartsListRequest](#UpdatePartsListRequest) | [.UpdatePartsListResponse](#UpdatePartsListResponse) | Update the parts list for a project&#39;s CCA. |
| updatePartsListFromAVL | [.UpdatePartsListFromAVLRequest](#UpdatePartsListFromAVLRequest) | [.UpdatePartsListFromAVLResponse](#UpdatePartsListFromAVLResponse) | Update the parts list from the AVL. |
| updatePartsListProperties | [.UpdatePartsListPropertiesRequest](#UpdatePartsListPropertiesRequest) | [.UpdatePartsListPropertiesResponse](#UpdatePartsListPropertiesResponse) | Update the values of given parts. |
| listPartsNotUpdated | [.ListPartsNotUpdatedRequest](#ListPartsNotUpdatedRequest) | [.ListPartsNotUpdatedResponse](#ListPartsNotUpdatedResponse) | List the parts that have not been updated from the Sherlock Part Library. |
| updateLeadModeling | [.UpdateLeadModelingRequest](#UpdateLeadModelingRequest) | [.ReturnCode](#ReturnCode) | Enable lead modeling for all non LEADLESS parts leads in a project&#39;s CCA. |
| exportPartsList | [.ExportPartsListRequest](#ExportPartsListRequest) | [.ReturnCode](#ReturnCode) | Export parts list for all parts given a project&#39;s CCA. |
| importPartsList | [.ImportPartsListRequest](#ImportPartsListRequest) | [.ReturnCode](#ReturnCode) | Import a parts list for a given a project&#39;s CCA. |
| updatePartsLocations | [.UpdatePartsLocationsRequest](#UpdatePartsLocationsRequest) | [.UpdatePartsLocationsResponse](#UpdatePartsLocationsResponse) | Update one or more parts&#39; locations. |
| updatePartsLocationsByFile | [.UpdatePartsLocationsByFileRequest](#UpdatePartsLocationsByFileRequest) | [.UpdatePartsLocationsByFileResponse](#UpdatePartsLocationsByFileResponse) | Update one or more parts&#39; locations using a CSV file. |
| getPartLocationUnits | [.GetPartLocationUnitsRequest](#GetPartLocationUnitsRequest) | [.GetPartLocationUnitsResponse](#GetPartLocationUnitsResponse) | Get a list of valid part location units. |
| getBoardSides | [.GetBoardSidesRequest](#GetBoardSidesRequest) | [.GetBoardSidesResponse](#GetBoardSidesResponse) | Get a list of valid board side values. |
| getPartLocation | [.GetPartLocationRequest](#GetPartLocationRequest) | [.GetPartLocationResponse](#GetPartLocationResponse) | Get the location properties for a part. |
| exportNetList | [.ExportNetListRequest](#ExportNetListRequest) | [.ReturnCode](#ReturnCode) | Export the net list to a file |

 



<a name="SherlockProjectService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

