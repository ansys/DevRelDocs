# ISerializableAlgorithm Interface

**Namespace:** `Phoenix.Optimization`

## Overview

Interface that serves as a combination of IAlgorithm and IXmlSerializable to define an Optimization Tool algorithm which provides methods for XML serialization.  
 

## Inheritance

![ISerializableAlgorithm](../../../../graphics/interface_phoenix_1_1_optimization_1_1_i_serializable_algorithm.png)

## Declaration

```csharp
interface ISerializableAlgorithm
```

## Description

Interface that serves as a combination of IAlgorithm and IXmlSerializable to define an Optimization Tool algorithm which provides methods for XML serialization.  
 


## Public Member Functions

|Type|Name|Description|
|-----|-----|-----|
|void |`FromXml (string xml)` |TODO |
|string |`ToXml ()` |TODO |

### Public Member Functions inherited from [IAlgorithm]()
|Type|Name|Description|
|-----|-----|-----|
|void|`RestoreCheckPoint (string saveState)`|Restore a specific state of the analysis.|
|void|`Run ()`|Initiates execution of the solver.|
|void|`SetConstraints (List< OptConstraint > constraints)`|Used by the infrastructure to pass the constraints to the algorithm.|
|void|`SetDesignVariables (List< DesignVariable > designVariables)`|Used by the infrastructure to pass the design variables to the algorithm.|
|void|`SetHost (IAlgorithmHost host)`|Set the host interface to be used for callbacks.|
|void|`SetObjectives (List< Objective > objectives)`|Used by the infrastructure to pass the objectives to the algorithm.|
|bool|`ShowOptionsDialog (IWin32Window owner)`|Called to display the algorithms custom options form.|

## Properties
|Type|Name|Description|
|-----|-----|-----|
|string |`Id [get]` |A unique string to identify this algorithm. |
|bool |`RequiresProxy [get, set]` |Indicates if ProxiedAlgorithm should wrap this upon deserialization. |

### Properties inherited from [IAlgorithm]()
|Type|Name|Description|
|-----|-----|-----|
|string |`Author [get]` |String containing the author of the algorithm. |
|string |`Description [get]` |String containing the description of the algorithm. |
|string |`DetailsReport [get]` |String containing the details report for the problem. |
|string |`HelpFilePath [get]` |String containing the relative path to the algorithm's help file. |
|string |`HelpURL [get]` |String containing a URL that can be used get further help with the algorithm. |
|string |`IconLocation [get]` |String containing the relative path to the algorithm's icon. |
|string |`Keywords [get]` |String containing the keywords associated with the algorithm. |
|string |`LicenseFeature [get]` |String containing the algorithms FlexLM license feature. |
|int |`MaxNumberOfObjectives [get]` |Integer containing the maximum number of objectives supported by the algorithm. |
|string |`Name [get]` |String containing the name of the algorithm. |
|AlgorithmNumModelEvaluations |`NumModelEvaluations [get]` |AlgorithmNumModelEvaluations indicating how many model evaluations are required for convergence. |
|object |`Options [get, set]` |Object containing the options for the algorithm. |
|string |`ReleaseDate [get]` |String containing the release date for the algorithm in the format YYYY.MMDD |
|string |`ResultsReport [get]` |String containing the results report for the problem. |
|FuzzyBoolean |`SupportsConstraints [get]` |FuzzyBoolean stating whether the algorithm supports constraints. |
|FuzzyBoolean |`SupportsDiscreteVariables [get]` |FuzzyBoolean stating whether the algorithm supports discrete variables. |
|bool |`SupportsFailedRuns [get]` |Boolean stating whether the algorithm is able to handle failed model evaluations. |
|FuzzyBoolean |`SupportsMinMax [get]` |FuzzyBoolean stating whether the algorithm supports minimize and maximize objectives. |
|bool |`SupportsMultipleObjectives [get]` |Boolean stating whether or not the algorithm supports multiple objectives. |
|FuzzyBoolean |`SupportsNonSmoothResponses [get]` |FuzzyBoolean stating whether the algorithm supports non-smooth responses (objectives and constraints). |
|FuzzyBoolean |`SupportsSolveFor [get]` |FuzzyBoolean stating whether the algorithm supports the solve for value objective. |
|string |`Version [get]` |String containing the version of the algorithm. |

## Member Function Documentation

### FromXml
```csharp
void FromXml ( string xml)
```

TODO Implemented in MockAlgorithm.

### ToXml
```csharp
string ToXml ( )
```

TODO Implemented in MockAlgorithm.

### Id
```csharp
string Id
```

A unique string to identify this algorithm. Implemented in MockAlgorithm.

### RequiresProxy
```csharp
bool RequiresProxy
```

Indicates if ProxiedAlgorithm should wrap this upon deserialization. Implemented in MockAlgorithm.

## Property Documentation

### Id
```csharp
string Id
```

A unique string to identify this algorithm. Implemented in MockAlgorithm.

### RequiresProxy
```csharp
bool RequiresProxy
```

Indicates if ProxiedAlgorithm should wrap this upon deserialization. Implemented in MockAlgorithm.
