# MockOptions Class

**Namespace:** `Phoenix.Optimization.AlgorithmTests.MockObjects`

## Overview

Mock options to facilitate testing  
 
## Declaration

```csharp
class MockOptions
```

## Description

Mock options to facilitate testing  

## Properties
|Type|Name|Description|
|-----|-----|-----|
|string |`DetailsReportPostRun [get, set]` |Detials report that is set during `MockAlgorithm.Run` |
|string |`finalMessage [get, set]` |A string that should be null prior to `MockAlgorithm.Run` being called |
|string |`modiferMessage [get, set]` |A string that will be used to the set the finalMessage during `MockAlgorithm.Run` |
|string |`ResultsReportPostRun [get, set]` |Results report that is set during `MockAlgorithm.Run` |

## Property Documentation

### DetailsReportPostRun
```csharp
string DetailsReportPostRun
```

Detials report that is set during `MockAlgorithm.Run`

### finalMessage
```csharp
string finalMessage
```

A string that should be null prior to `MockAlgorithm.Run` being called

### modiferMessage
```csharp
string modiferMessage
```

A string that will be used to set the `finalMessage` during `MockAlgorithm.Run`

### ResultsReportPostRun
```csharp
string ResultsReportPostRun
```

Results report that is set during `MockAlgorithm.Run`
