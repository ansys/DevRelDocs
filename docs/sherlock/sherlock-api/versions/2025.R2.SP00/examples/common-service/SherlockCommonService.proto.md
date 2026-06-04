# SherlockCommonService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

## ExitRequest

Request to exit the gRPC connection.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| closeSherlockClient | [bool](#bool) |  | If set to true, exits the Sherlock client if it is opened. Otherwise, just closes the gRPC connection. |

## GetSoldersRequest

Request for a list of valid solder materials.


## GetSoldersResponse

Represents a list of valid solder materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| solderName | [string](#string) | repeated | List of valid solder materials. |

## HealthCheckRequest

Request to check if the gRPC connection is open.


## HealthCheckResponse

Represents whether the gRPC connection is open.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [HealthCheckResponse.ServingStatus](#healthcheckresponse.servingstatus) |  | Enum representing connection status. |
| port | [int32](#int32) |  | Listening port number on server. |

## IsSherlockClientLoadingRequest

Check if the Sherlock client is still loading.


## ListUnitsRequest

Request for a list of valid units of the provided unit type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unitType | [ListUnitsRequest.UnitType](#listunitsrequest.unittype) |  | Unit type to request valid units of. |

## ListUnitsResponse

Represents a list of valid units for the provided unit type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| units | [string](#string) | repeated | List of valid units for the requested type. |

## Measurement

Represents a common measurement with a value and a unit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  | Numerical value of a measurement. |
| units | [string](#string) |  | Units of the numerical value. |

## ReturnCode

Status response of a message. A value of 0 indicates a successful request.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [int32](#int32) |  | Status code of response. A value of 0 indicates success, -1 indicates error. |
| message | [string](#string) |  | Message indicating the status of response including any error. |

## SherlockInfoRequest

Request to receive Sherlock version and configuration data.


## SherlockInfoResponse

Represents Sherlock version and configuration data.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| releaseVersion | [string](#string) |  | The current version of Sherlock, formatted as: YYYY R# (Ex. "2025 R2") |
| defaultProjectDir | [string](#string) |  | The project directory currently used by Sherlock. |
| isSingleProjectMode | [bool](#bool) |  | When true, indicates that Sherlock is in single-project mode. When false, indicates that Sherlock is in multi-project mode. |


## ServingStatus



| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Indicates an unknown connection status. |
| SERVING | 1 | Indicates the connection is up and server is listening. |
| NOT_SERVING | 2 | Indicates connection with server is closed. |

## UnitType



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

## MatchingMode

Determines how parts in the parts list are matched against parts 
in the AVL or Part Library.

| Name | Number | Description |
| ---- | ------ | ----------- |
| Both | 0 | Matches both part number and manufacturer. |
| Part | 1 | Matches part number only. |

## TableDelimiter

Types of delimiters that can be used for exporting tables

| Name | Number | Description |
| ---- | ------ | ----------- |
| COMMA | 0 | Represents ',' delimiter. |
| SPACE | 1 | Represents ' ' delimiter. |
| TAB | 2 | Represents tab key delimiter. |
| SEMICOLON | 3 | Represents ';' delimiter. |


## SherlockCommonService



| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| check | [.HealthCheckRequest](#healthcheckrequest) | [.HealthCheckResponse](#healthcheckresponse) | Returns health status of gRPC server. |
| exit | [.ExitRequest](#exitrequest) | [.ReturnCode](#returncode) | Signals for gRPC connection to shutdown. |
| isSherlockClientLoading | [.IsSherlockClientLoadingRequest](#issherlockclientloadingrequest) | [.ReturnCode](#returncode) | Check if the Sherlock client is still loading. |
| listUnits | [.ListUnitsRequest](#listunitsrequest) | [.ListUnitsResponse](#listunitsresponse) | Returns a list of valid units of the provided unit type. |
| getSolders | [.GetSoldersRequest](#getsoldersrequest) | [.GetSoldersResponse](#getsoldersresponse) | Returns a list of valid solder materials. |
| getSherlockInfo | [.SherlockInfoRequest](#sherlockinforequest) | [.SherlockInfoResponse](#sherlockinforesponse) | Returns meta data about Sherlock. |


Back to [Top](#table-of-contents)

