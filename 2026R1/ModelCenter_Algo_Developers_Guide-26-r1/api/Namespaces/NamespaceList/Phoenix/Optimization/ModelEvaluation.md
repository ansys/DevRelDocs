# ModelEvaluation Class

**Namespace:** `Phoenix.Optimization`

## Overview

Class to hold the results of a model evaluation.  
 

## Inheritance

![ModelEvaluation](../../../../graphics/modelevaluation.png)

## Declaration

```csharp
class ModelEvaluation
```

## Description

Class to hold the results of a model evaluation.  
 


## Public Member Functions

|Name|Description|
|-----|-----|
| |`ModelEvaluation ()`<br>Constructor |
| |`ModelEvaluation (double[] objectiveValues)`<br>Constructor |
| |`ModelEvaluation (double[] objectiveValues, bool runFailure)`<br>Constructor |
| |`ModelEvaluation (double[] objectiveValues, double[] constraintValues, bool runFailure)`<br>Constructor |
| |`ModelEvaluation (ModelEvaluation eval)`<br>Copy constructor |

## Properties
|Name|Description|
|-----|-----|
|double[] | `ConstraintValues [get]`<br>Double array containing the values of the constraints. |
|double[] | `ObjectiveValues [get]`<br>Double array containing the values of the objectives |
|bool | `RunFailure [get]`<br>Boolean contain stating whether the model evaluation was successful. |

## Constructor & Destructor Documentation

### ModelEvaluation()
```csharp
ModelEvaluation ( )
```

Constructor Constructs a failed model evaluation. This constructor primarily exists to allow ModelEvaluation to be serialized.

### ModelEvaluation()
```csharp
ModelEvaluation ( double[] objectiveValues)
```

Constructor Assumes that there are no constraints. If objectiveValues is not null then the Run is assumed to not be failed, otherwise the Run is assumed to be failed.

**Parameters:**

- `objectiveValues` - double array of objective values

### ModelEvaluation()
```csharp
ModelEvaluation ( double[] objectiveValues, bool runFailure )
```

Constructor Assumes that there are no constraints. If objectiveValues is not null, then the runFailure value is used, otherwise the Run is assumed to be failed.

**Parameters:**

- `objectiveValues` - double array of objective values
- `runFailure` - boolean Run failure value

### ModelEvaluation()
```csharp
ModelEvaluation ( double[] objectiveValues, double[] constraintValues, bool runFailure )
```

Constructor If objectiveValues is not null, then the runFailure value is used, otherwise the Run is assumed to be failed.

**Parameters:**

- `objectiveValues` - double array of objective values
- `constraintValues` - double array of constraint values
- `runFailure` - boolean Run failure value

### ModelEvaluation()
```csharp
ModelEvaluation ( ModelEvaluation eval)
```

Copy constructor

**Parameters:**

- `eval` - ModelEvaluation to be copied

## Member Function Documentation

### ConstraintValues
```csharp
double [] ConstraintValues
```

Double array containing the values of the constraints.

### ObjectiveValues
```csharp
double [] ObjectiveValues
```

Double array containing the values of the objectives

### RunFailure
```csharp
bool RunFailure
```

Boolean contain stating whether the model evaluation was successful. The value will be true if there was an error evaluating the model, and false otherwise.

## Property Documentation

### ConstraintValues
```csharp
double [] ConstraintValues
```

Double array containing the values of the constraints.

### ObjectiveValues
```csharp
double [] ObjectiveValues
```

Double array containing the values of the objectives

### RunFailure
```csharp
bool RunFailure
```

Boolean contain stating whether the model evaluation was successful. The value will be true if there was an error evaluating the model, and false otherwise.
