# IDetailsSerializer Interface

**Namespace:** `Phoenix.Optimization`

## Overview

Interface to provide for algorithms to return details report as a file  
 

## Inheritance

![IDetailsSerializer](../../../../graphics/idetailsserializer.png)

## Declaration

```csharp
interface IDetailsSerializer
```

## Description

Interface to provide for algorithms to return details report as a file  
 


## Public Member Functions

|Name|Description|
|-----|-----|
|void |`WriteDetailsReportToFile ()`<br>Write the Details Report to file |

## Properties
|Name|Description|
|-----|-----|
|string | `DetailsReportFileName [get, set]`<br>Sets the details reprot file name. |

## Member Function Documentation

### WriteDetailsReportToFile
```csharp
void WriteDetailsReportToFile ( )
```

Write the Details Report to file

### DetailsReportFileName
```csharp
string DetailsReportFileName
```

Sets the details reprot file name. Underlying string object to be defined and maintained by the implementor throughout its scope. It has no responsibility of the file.

## Property Documentation

### DetailsReportFileName
```csharp
string DetailsReportFileName
```

Sets the details reprot file name. Underlying string object to be defined and maintained by the implementor throughout its scope. It has no responsibility of the file.
