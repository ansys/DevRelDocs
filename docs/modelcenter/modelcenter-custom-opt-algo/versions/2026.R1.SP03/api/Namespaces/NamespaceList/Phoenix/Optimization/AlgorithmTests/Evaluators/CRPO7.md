# CRPO7 Class

**Namespace:** `Phoenix.Optimization.AlgorithmTests.Evaluators`

## Overview

Implementation of Constrained Real-Parameter Optimization Fucntion - 01  
 

## Inheritance

![CRPO7](../../../../../../graphics/class_phoenix_1_1_optimization_1_1_algorithm_tests_1_1_evaluators_1_1_c_r_p_o7.png)

## Declaration

```csharp
class CRPO7
```

## Description

Implementation of Constrained Real-Parameter Optimization Fucntion - 01  
 
Source: http://www.ntu.edu.sg/home/EPNSugan/
```
Number of variables: 10 variables. Definition: f(x) = x1^2 + x2^2 + x1x2 − 14x1 − 16x2 + (x3 − 10)^2 + 4(x4 − 5)^2 + (x5 − 3)^2 +2(x6 − 1)^2 + 5x7^2 + 7(x8 − 11)^2 + 2(x9 − 10)^2 + (x10 − 7)^2 + 45 Search domain: -10<= xi <=10, i=1 to 10; Subject to: gi <= 0, i= 1 to 8 ; Number of local minima: no local minima except the global one. The global minima: x* = (2.17199634142692, 2.3636830416034, 8.77392573913157, 5.09598443745173, 0.990654756560493, 1.43057392853463, 1.32164415364306, 9.82872576524495, 8.2800915887356, 8.3759266477347), f(x*) = 24.30620907 
```

## Public Member Functions

|Type|Name|Description|
|-----|-----|-----|
|override void |`addConstraints ()` |Adds constraints. |
|override void |`addDesignVariables ()` |Adds design variables. |
|override void |`addObjectives ()` |Adds objectives. |
| |`CRPO7 ()` |Default constructor, uses the default goal of `minimize` |
| |`CRPO7 (Goal goal)` |Constructor to use custom goal |
|override ModelEvaluation |`EvaluateModel (object[] designVariables)` |Evaluates function. |
|override bool |`IsDesignAcceptable (object[] design, AreDesignsEqual areDesignsEqual)` |Determines whether specified design is a local or global optima. |
|[ModelEvaluation]() |`EvaluateModel (object[] designVariables)` |Evaluates the model at the given design point. |
|bool |`IsDesignAcceptable (object[] design, AreDesignsEqual areDesignsEqual)` |Determines whether design is an acceptable design. |
|void |`SetStartPoint (object[] startValues)` |Sets the starting design for the evaluator. |

### Public Member Functions inherited from [ModelEvaluator]([ModelEvaluator]().md)
|Type|Name|Description|
|-----|-----|-----|
|void |`addConstraint (string name, double `lowerBound`, double upperBound)` |Method used to add a constraint |
|virtual void |`addConstraints ()` |Method called to specifiy the constraints for the evaluator (by default, not constraints are specified) |
|void |`addDesignVariable (string name, object startValue)` |Method used to add design variable |
|void |`addDesignVariable (string name, object `startValue`, DataTable selectedAlphabet)` |Method used to add design variable |
|void |`addDesignVariable (string name, object `startValue`, double `lowerBound`, double upperBound)` |Method used to add design variable |
|void |`addDesignVariable (string name, object `startValue`, double `lowerBound`, double `upperBound`, DataTable selectedAlphabet)` |Method used to add a design variable |
|abstract void |`addDesignVariables ()` |Method called to added design variables |
|void |`addObjective (string name, double solveForValue)` |Method used to add an objective (assumes solve for objective) |
|void |`addObjective (string name, double `solveForValue`, double weight)` |Method used to add an objective (assumes solve for objective) |
|void |`addObjective (string name, Goal goal)` |Method used to add an objective |
|void |`addObjective (string name, Goal goal, double weight, double solveForValue)` |Method used to add an objective |
|abstract void |`addObjectives ()` |Method called to specifiy the objectives for the evaluator |
|void |`Dispose ()` |Called to dispose the object. |
|abstract ModelEvaluation |`EvaluateModel (object[] designVariables)` |Evaluates the model at the given design point |
|virtual double |`getIGD (List< double[]> `bestDesignObjectives`, string filePath)` |Calculates the IGD value for multi-objective problem [The IGD formula is slightly modified to get the nearest possible value to actual IGD] [The actual formula accounts for equal no of optimal & obtained set of objectives, while, we calculate based on the number of objectives obtained] |
|abstract bool |`IsDesignAcceptable (object[] design, AreDesignsEqual areDesignsEqual)` |Determines whether design is an acceptable design. |
|void |`SetStartPoint (object[] startValues)` |Sets the starting design for the evaluator |

## Properties
|Type|Name|Description|
|-----|-----|-----|
|override object[,] |`GlobalBestDesigns [get]` |List of the globally best designs for the evaluator. |
|override bool |`HasFailedRuns [get]` |Evaluator does not have failed runs. |
|override bool |`HasNonSmoothResponses [get]` |Evaluator has smooth responses. |
|override string |`Name [get]` |Name of the evaluator. |
|override bool |`UsesConstraints [get]` |Evaluator does not use constraints. |
|override bool |`UsesDiscreteVariables [get]` |Evaluator does not use multiple discrete variables. |
|override bool |`UsesMinMax [get]` |Evaluator does uses minimize/maximize objectives. |
|override bool |`UsesMultipleObjectives [get]` |Evaluator does not use multiple objectives. |
|override bool |`UsesSolveFor [get]` |Evaluator does not use the `solve for` objective. |

### Properties inherited from [ModelEvaluator]([ModelEvaluator]().md)
|Type|Name|Description|
|-----|-----|-----|
|List< OptConstraint > |`Constraints [get]` |Method to get the list of constraints |
|int |`DesignVariableCount [get]` |Number of design variables specificed by the evaluator |
|List< DesignVariable > |`DesignVariables [get]` |Method to get the list of design variables |
|abstract object[,] |`GlobalBestDesigns [get]` |The global best design for the evaluator (a.k.a. "The right answers") |
|abstract bool |`HasFailedRuns [get]` |Does the evalutor have failed runs? |
|abstract bool |`HasNonSmoothResponses [get]` |Does the evaluator have non-smooth responses |
|abstract string |`Name [get]` |Name of the evaluator |
|int |`NumberOfObjectives [get]` |Number of objectives specified |
|List< Objective > |`Objectives [get]` |Method to get the list of objectives |
|abstract bool |`UsesConstraints [get]` |Does the evaluator use constraints? |
|abstract bool |`UsesDiscreteVariables [get]` |Does the evaluator use discrete variables? |
|abstract bool |`UsesMinMax [get]` |Does the evaluator use a `Minimize/Maximize` objective? |
|abstract bool |`UsesMultipleObjectives [get]` |Does the evaluator specify multiple objectives? |
|abstract bool |`UsesSolveFor [get]` |Does the evaluator use the `solve for` objective? |

### Properties inherited from [IEvaluator]([IEvaluator]().md)
|Type|Name|Description|
|-----|-----|-----|
|List< OptConstraint > |`Constraints [get]` |List of constraints defined by the evaluator. |
|int |`DesignVariableCount [get]` |Number of design variables specificed by the evaluator. |
|List< DesignVariable > |`DesignVariables [get]` |List of design variables defined by the evaluator. |
|object[,] |`GlobalBestDesigns [get]` |The global best designs for the evaluator. |
|bool |`HasFailedRuns [get]` |Does the evalutor have failed runs? |
|bool |`HasNonSmoothResponses [get]` |Does the evaluator have non-smooth responses. |
|string |`Name [get]` |Name of the evaluator. |
|int |`NumberOfObjectives [get]` |Number of objectives specified. |
|List< Objective > |`Objectives [get]` |List of objectives defined by the evaluator. |
|bool |`UsesConstraints [get]` |Does the evaluator use constraints? |
|bool |`UsesDiscreteVariables [get]` |Does the evaluator use discrete variables? |
|bool |`UsesMinMax [get]` |Does the evaluator use a `Minimize/Maximize` objective? |
|bool |`UsesMultipleObjectives [get]` |Does the evaluator specify multiple objectives? |
|bool |`UsesSolveFor [get]` |Does the evaluator use the `solve for` objective? |

## Additional Inherited Members 

### Protected Member Functions inherited from [ModelEvaluator]([ModelEvaluator]().md) 
|Type|Name|Description|
|-----|-----|-----|
|virtual void |`Dispose (bool disposing)` |Standard disposal. |

## Constructor & Destructor Documentation

### CRPO7()
```csharp
CRPO7 ( )
```

Default constructor, uses the default goal of `minimize`

### CRPO7()
```csharp
CRPO7 ( Goal goal)
```

Constructor to use custom goal Matyas does not support the solve for goal.

**Parameters:**

- `goal` - Specifies the goal of the optimization.

## Member Function Documentation

### addConstraints
```csharp
override void `addConstraints` ( )
```

Adds constraints. Reimplemented from [ModelEvaluator]().

### addDesignVariables
```csharp
override void `addDesignVariables` ( )
```

Adds design variables.

Implements [ModelEvaluator]().

### addObjectives
```csharp
override void `addObjectives` ( )
```

Adds objectives.

Implements [ModelEvaluator]().

### EvaluateModel
```csharp
override ModelEvaluation `EvaluateModel` ( object[] designVariables)
```

Evaluates function.

**Parameters:**

- `designVariables` - Design used to evaluate function.

**Returns:** 
- Design results

Implements [ModelEvaluator]().

### IsDesignAcceptable
```csharp
override bool `IsDesignAcceptable` ( object[] design, AreDesignsEqual areDesignsEqual )
```

Determines whether specified design is a local or global optima.

**Parameters:**

- `design` - Design to be tested.
- `areDesignsEqual` - Function delegate to be be used to determine whether two designs are equal.

**Returns:** 
- Returns `true` if the design is a local or global optima; `false` otherwise.

Implements [ModelEvaluator]().

### GlobalBestDesigns
```csharp
override object [,] GlobalBestDesigns
```

List of the globally best designs for the evaluator.

Implements [IEvaluator]().

### HasFailedRuns
```csharp
override bool HasFailedRuns
```

Evaluator does not have failed runs.

Implements [IEvaluator]().

### HasNonSmoothResponses
```csharp
override bool HasNonSmoothResponses
```

Evaluator has smooth responses.

Implements [IEvaluator]().

### Name
```csharp
override string Name
```

Name of the evaluator.

Implements [IEvaluator]().

### UsesConstraints
```csharp
override bool UsesConstraints
```

Evaluator does not use constraints.

Implements [IEvaluator]().

### UsesDiscreteVariables
```csharp
override bool UsesDiscreteVariables
```

Evaluator does not use multiple discrete variables.

Implements [IEvaluator]().

### UsesMinMax
```csharp
override bool UsesMinMax
```

Evaluator does uses minimize/maximize objectives.

Implements [IEvaluator]().

### UsesMultipleObjectives
```csharp
override bool UsesMultipleObjectives
```

Evaluator does not use multiple objectives.

Implements [IEvaluator]().

### UsesSolveFor
```csharp
override bool UsesSolveFor
```

Evaluator does not use the `solve for` objective.

Implements [IEvaluator]().

## Property Documentation

### GlobalBestDesigns
```csharp
override object [,] GlobalBestDesigns
```

List of the globally best designs for the evaluator.

Implements [IEvaluator]().

### HasFailedRuns
```csharp
override bool HasFailedRuns
```

Evaluator does not have failed runs.

Implements [IEvaluator]().

### HasNonSmoothResponses
```csharp
override bool HasNonSmoothResponses
```

Evaluator has smooth responses.

Implements [IEvaluator]().

### Name
```csharp
override string Name
```

Name of the evaluator.

Implements [IEvaluator]().

### UsesConstraints
```csharp
override bool UsesConstraints
```

Evaluator does not use constraints.

Implements [IEvaluator]().

### UsesDiscreteVariables
```csharp
override bool UsesDiscreteVariables
```

Evaluator does not use multiple discrete variables.

Implements [IEvaluator]().

### UsesMinMax
```csharp
override bool UsesMinMax
```

Evaluator does uses minimize/maximize objectives.

Implements [IEvaluator]().

### UsesMultipleObjectives
```csharp
override bool UsesMultipleObjectives
```

Evaluator does not use multiple objectives.

Implements [IEvaluator]().

### UsesSolveFor
```csharp
override bool UsesSolveFor
```

Evaluator does not use the `solve for` objective.

Implements [IEvaluator]().
