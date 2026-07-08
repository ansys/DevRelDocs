# SherlockPartsService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

## ExportNetListRequest

Contains the options needed to export a net list to a delimited output file (csv but can have delimiters other than a comma)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| outputFilePath | [string](#string) |  | Full path of the file where the table will be written. |
| overwriteExisting | [bool](#bool) |  | Flag to determine if existing files should be overwritten if they match the outputFilePath. False by default. |
| colDelimiter | [TableDelimiter](#tabledelimiter) |  | Enum that specifies supported delimiter character to be used. Set to COMMA by default. Not applicable to Excel files like xls, xlsx. |
| utf8Enabled | [bool](#bool) |  | Flag that specifies if UTF-8 will be used. False by default. Not applicable to Excel files like xls, xlsx. |

## ExportPartsListRequest

Request to export the parts list for all parts for a project CCA.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| exportFile | [string](#string) |  | Full file path to the export parts list .csv file. |

## GetBoardSidesRequest

Request to list valid board sides.


## GetBoardSidesResponse

Represents a list of valid board sides.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| boardSides | [string](#string) | repeated | Board sides. |

## GetPartLocationRequest

Request to get a part's location.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| refDes | [string](#string) |  | A comma separated list of reference designators for a list of parts, or a Ref Des for one part. |
| locationUnits | [string](#string) |  | Unit of length for the part location. Supported values are IN, MM, M, MIL, MICRON, and NM. |

## GetPartLocationResponse

Represents one or multiple parts' location properties


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| locationData | [GetPartLocationResponse.LocationData](#getpartlocationresponse.locationdata) | repeated | List of location data for a part or list of parts in a specified project and CCA. |

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

## GetPartLocationUnitsRequest

Request to list valid location units.


## GetPartLocationUnitsResponse

Represents a list of valid location units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| units | [string](#string) | repeated | Location units. |

## ImportPartsListRequest

Request to import a parts list for a project CCA.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| importFile | [string](#string) |  | Full file path to the parts list .csv file. |
| importAsUserSrc | [bool](#bool) |  | If true, set the data source of the properties to "User". Otherwise, set the data source to the name of the importFile. |

## ListPartsLibrariesRequest

Request to list the available parts libraries.


## ListPartsLibrariesResponse

Represents a list of available parts libraries.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| partLibrary | [string](#string) | repeated | Parts library name. |

## ListPartsNotUpdatedRequest

Request to get a list of parts not updated from the Sherlock Part Library.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

## ListPartsNotUpdatedResponse

Represents a list of parts not updated from the Sherlock Part Library.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| ccas | [ListPartsNotUpdatedResponse.CCA](#listpartsnotupdatedresponse.cca) | repeated | List of CCAs containing Parts not updated. |

## ListPartsNotUpdatedResponse.CCA




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| parts | [ListPartsNotUpdatedResponse.CCA.Part](#listpartsnotupdatedresponse.cca.part) | repeated | List of Parts not updated for a CCA. |

## ListPartsNotUpdatedResponse.CCA.Part




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) |  | Reference designator for the part. |
| partNumber | [string](#string) |  | Part number. |

## UpdateLeadModelingRequest

Request to enable Lead Modeling for all non LEADLESS parts leads.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

## UpdatePartsListFromAVLRequest

Request to update the parts list from AVL.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| matching | [MatchingMode](#matchingmode) |  | How sherlock matches parts in the AVL |
| duplication | [DuplicationMode](#duplicationmode) |  | How sherlock handles duplicate parts found. |
| avlPartNum | [AVLPartNum](#avlpartnum) |  | Update part number and vendor/manufacturer or part number only. |
| avlDesc | [AVLDescription](#avldescription) |  | Update description or not. |

## UpdatePartsListFromAVLResponse




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| numPartsUpdated | [int32](#int32) |  | Number of parts updated in the parts list. |
| updateErrors | [string](#string) | repeated | Specific errors that occured during update. |

## UpdatePartsListPropertiesRequest

Request to update one or more properties of one or more parts in a parts list.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name for which part properties will be updated. |
| partProperties | [UpdatePartsListPropertiesRequest.PartProperties](#updatepartslistpropertiesrequest.partproperties) | repeated | List of parts with properties to be updated. |

## UpdatePartsListPropertiesRequest.PartProperties




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) | repeated | The reference designator for each part to be updated. If not included, update properties for all parts in the CCA. |
| properties | [UpdatePartsListPropertiesRequest.PartProperties.Property](#updatepartslistpropertiesrequest.partproperties.property) | repeated | Part properties to be updated. |

## UpdatePartsListPropertiesRequest.PartProperties.Property




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Name of property to be updated. |
| value | [string](#string) |  | Value to be applied to the chosen part property. |

## UpdatePartsListPropertiesResponse

Contains the status of the parts properties update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateErrors | [UpdatePartsListPropertiesResponse.PartPropertyError](#updatepartslistpropertiesresponse.partpropertyerror) | repeated | Part property update errors. |

## UpdatePartsListPropertiesResponse.PartPropertyError




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refDes | [string](#string) | optional | The reference designator of the part. Not set for invalid property name errors. |
| message | [string](#string) |  | Error message when updating the part. |

## UpdatePartsListRequest

Request to update a parts list based on matching and duplication preferences provided.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| partLibrary | [string](#string) |  | Parts library name. |
| matching | [MatchingMode](#matchingmode) |  | Designates the matching mode for updates. |
| duplication | [DuplicationMode](#duplicationmode) |  | Designates how to handle duplications during update. |

## UpdatePartsListResponse

Contains the status of the update as well as all of the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts update error messages. |

## UpdatePartsLocationsByFileRequest

Request to update one or more parts' locations using a CSV file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| numericFormat | [string](#string) |  | Numeric format for the file. If not provided, it will default to "English (United States)". |
| filePath | [string](#string) |  | File that contains the components and location properties. |

## UpdatePartsLocationsByFileResponse

Contains the status of the parts locations update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts locations update error messages. |

## UpdatePartsLocationsRequest

Request to set a part's location.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| partLoc | [UpdatePartsLocationsRequest.PartLocation](#updatepartslocationsrequest.partlocation) | repeated | List of part locations to be updated for a specified project and CCA. |

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

## UpdatePartsLocationsResponse

Contains the status of the parts locations update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Parts locations update error messages. |


## AVLDescription

Determines if the part description in the parts list 
will be updated by the AVL.

| Name | Number | Description |
| ---- | ------ | ----------- |
| AssignApprovedDescription | 0 | Assign approved description. |
| DoNotChangeDescription | 1 | Do not change description. |

## AVLPartNum

Determines what fields in the part list will get updated by the AVL.

| Name | Number | Description |
| ---- | ------ | ----------- |
| AssignInternalPartNum | 0 | Assign internal part number. |
| AssignVendorAndPartNum | 1 | Assign vendor & part number. |
| DoNotChangeVendorOrPartNum | 2 | Do not change vendor / part number. |

## DuplicationMode

Determines what happens when there are duplicate matches for parts in the part list
against parts in the AVL or Part Library.

| Name | Number | Description |
| ---- | ------ | ----------- |
| First | 0 | Uses first matched when there is duplication. |
| Error | 1 | Generates an error when there is duplication. |
| Ignore | 2 | Ignore the matches when there is duplication. |


## SherlockPartsService



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
| getPartLocation | [.GetPartLocationRequest](#getpartlocationrequest) | [.GetPartLocationResponse](#getpartlocationresponse) | Get the location properties for a part. |
| exportNetList | [.ExportNetListRequest](#exportnetlistrequest) | [.ReturnCode](#returncode) | Export the net list to a file |


Back to [Top](#table-of-contents)

