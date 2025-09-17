# Phoenix.Optimization Namespace Reference
 


## Classes 
|Type|Description|
|-----|-----|
|class  | [`AlgorithmException`](Optimization/AlgorithmException.md) <br>This exception can be thrown by an algorithm when an algorithm specific code is raised. |
|class  | [`BoundsMustBeSpecifiedException`](Optimization/BoundsMustBeSpecifiedException.md) <br>This can be thrown from the algorithm when the algorithm is passed a problem definition that has an open bound upper or lower bound on the constraints or design variables and the algorithm does not support open bounds. |
|class  | [`BoundsNotSupportedException`](Optimization/BoundsNotSupportedException.md) <br>This can be thrown from the algorithm when the algorithm is passed a problem definition that has an open bound upper or lower bound on the constraints or design variables and the algorithm does not support open bounds. |
|class  | [`DesignComparer`](Optimization/DesignComparer.md) <br>Class can be used to compare two designs to each other. |
|class  | [`DesignVariable`](Optimization/DesignVariable.md) <br>Class to hold information about a design variable |
|class  | [`EarlyTerminationException`](Optimization/EarlyTerminationException.md) <br>Represents a class of cases where the solver terminated early due to some maximum option being hit, but the optimum value has probably not been found. |
|class  | [`HaltedException`](Optimization/HaltedException.md) <br>This can be thrown from the algorithm when the algorithm is halted. |
|class  | [`HelpResourceStringAttribute`](Optimization/HelpResourceStringAttribute.md) <br>Attribute used to specify a location in the help for an option. |
|interface  | [`IAlgorithm`](Optimization/IAlgorithm.md) <br>Interface used to define an algorithm for the Optimization Tool infrastructure. |
|interface  | [`IAlgorithmCatalogEntry`](Optimization/IAlgorithmCatalogEntry.md) <br>Implementations of this interface are designed to allow an IDynamicAlgorithmProvider as well as the rest of the optimization tool to load and work with metadata about an optimization algorithm while avoiding having to actually instantiate or even load the corresponding IAlgorithm implementation. |
|interface  | [`IAlgorithmHost`](Optimization/IAlgorithmHost.md) <br>Interface used by the algorithm to communicate with the solver and request model evaluations. |
|interface  | [`IConvergingMultiObjectiveAlgorithm`](Optimization/IConvergingMultiObjectiveAlgorithm.md) <br>Interface used to indicate an algorithm converges even with multiple objectives. |
|interface  | [`IDetailsSerializer`](Optimization/IDetailsSerializer.md) <br>Interface to provide for algorithms to return details report as a file |
|interface  | [`IDynamicAlgorithmProvider`](Optimization/IDynamicAlgorithmProvider.md) <br>This interface is intended to allow extensibility of the way in which the Opt Tool discovers available algorithms, such that IAlgorithm implementations can be generated programatically / dynamically and presented to the Opt Tool as separate algorithms. |
|interface  | [`IEvaluator`](Optimization/IEvaluator.md) <br>Interface used to define model evaluator used by the test problem infrastructure. |
|interface  | [`IFeasibilityProvider`](Optimization/IFeasibilityProvider.md) <br>Implemented by algorithms with custom IsDesignFeasible implementations. |
|interface  | [`ISerializableAlgorithm`](Optimization/ISerializableAlgorithm.md) <br>Interface that serves as a combination of IAlgorithm and IXmlSerializable to define an Optimization Tool algorithm which provides methods for XML serialization. |
|interface  | [`IVariableName`](Optimization/IVariableName.md) <br>Defines an object that has a variable name |
|interface  | [`IWarmStartAlgorithm`](Optimization/IWarmStartAlgorithm.md) <br>Interface used to implement warm start functionality for an algorithm for the Optimization Tool infrastructure. |
|class  | [`MaxFunctionEvaluationsException`](Optimization/MaxFunctionEvaluationsException.md) <br>If a solver hits the maximum number of function evaluations before finding a solution it can throw this exception. |
|class  | [`MaxGenerationsException`](Optimization/MaxGenerationsException.md) <br>The maximum number of generations was reached before an optimimum value was found. |
|class  | [`MaxIterationsException`](Optimization/MaxIterationsException.md) <br>The maximum number of iterations was reached before an optimum was found. |
|class  | [`ModelEvaluation`](Optimization/ModelEvaluation.md) <br>Class to hold the results of a model evaluation. |
|class  | [`NoFeasiblePointFoundException`](Optimization/NoFeasiblePointFoundException.md) <br>This can be thrown from the algorithm when the algorithm is unable to find a feasible optimum. |
|class  | [`Objective`](Optimization/Objective.md) <br>Class to hold information about an objective |
|class  | [`OptConstraint`](Optimization/OptConstraint.md) <br>Class to hold contraint information |
|class  | [`OptimizationException`](Optimization/OptimizationException.md) <br>Represents an exception that happened in the solver. |
|class  | [`ResponseVarArr`](Optimization/ResponseVarArr.md) <br> |
|class  | [`ResponseVariable`](Optimization/ResponseVariable.md) <br>Class to hold information about a design variable |
|class  | [`RunFailureException`](Optimization/RunFailureException.md) <br>This can be thrown from the algorithm when the algorithm receives a failed run and it does not support failed runs. |
 
  


## Enumerations 
|Name|Description|
|-----|-----|
|enum  | [`AlgorithmNumModelEvaluations { Small, Moderate, Many, Unspecified }`](#AlgorithmNumModelEvaluations) <br>Enum containing the developer's evaluation of how many model evaluations are required for convergence of the algorithm |
|enum  | [`FuzzyBoolean : int { True = 3, False = 0, Maybe = 2, Unspecified = 1 }`](#FuzzyBoolean) <br>Enum used to capture maybes in boolean values. |
|enum  | [`Goal { Minimize, Maximize, SolveFor, Unspecified }`](#Goal) <br>Enum used to specify the goal of an objective. |
|enum  | [`GoalType { MinMaxOnly, SolveOnly, MinMaxSolve, Unspecified }`](#GoalType) <br>Enum used internally to specify which goals are used in a problem definition. |
|enum  | [`MessageType { Info, Warn, Error, Debug }`](#MessageType) <br>Enum used to specify status messages type. |
|enum  | `StartValueBehaviorEnum { UseExplicitValue = 0, UseModelCenterValue = 1, UseBestDesignFromLastRun = 2 }` <br> |
|enum  | [`WarmStartMethod { AlgorithmControlled = 0, RerunWithCache = 1 }`](#WarmStartMethod) <br>Supported methods for warm-start. |
 
  


## Functions 
|Name|Description|
|-----|-----|
|delegate bool | [`AreDesignsEqual (object[] design1, object[] design2, IEvaluator evaluator)`](#AreDesignsEqual)<br>Compares two designs to see if they are effectively equal. |
 
  

## Enumeration Type Documentation
 
<a id="AlgorithmNumModelEvaluations"></a>

### AlgorithmNumModelEvaluations
```
enum AlgorithmNumModelEvaluations 
```

Enum containing the developer's evaluation of how many model evaluations are required for convergence of the algorithm 


|Enumerator|Description|
|-----|-----|
|`Small`  |Algorithm is able to find an answer with a small number of model evaluations. |
|`Moderate`  |Algorithm requires a moderate number of model evaluations for convergence |
|`Many`  |Algorithm requires a lot of model evaluations for convergence |
|`Unspecified`  |Used interally and should not be used by developers for property values |
 
 
<a id="FuzzyBoolean"></a>

### FuzzyBoolean
```
enum FuzzyBoolean : int 
```

Enum used to capture maybes in boolean values. 

Maybes may not be strictly true, but are true in some sense. `FuzzyBoolean` is used for many algorithm properties, and `FuzzyBoolean.Maybe` is used when an algorithm isn't specifically designed for something, but can be used for it. For example, some algorithms are specificlly designed to work well for problems with constraints, others cannot handle constraints at all, and others can handle constraints but have difficulty finding optima when constraints are present.

|Enumerator|Description|
|-----|-----|
|`True`  |Strictly true. |
|`False`  |Strictly false. |
|`Maybe`  |Neither strictly true nor strictly false. |
|`Unspecified`  |Has not been specified yet. Should not be used for algorithm property values. | 
 
 
<a id="Goal"></a>

### Goal
```
enum Goal 
```

Enum used to specify the goal of an objective. 

|Enumerator|Description|
|-----|-----|
|`Minimize`  |Minimize the value of the objective. |
|`Maximize`  |Maximize the value of the objective. |
|`SolveFor`  |Find a design where the objective value is equal to a specific value. |
|`Unspecified`  |Goal has not been specified. Used interally | 
 
 
<a id="GoalType"></a>

### GoalType
```
enum GoalType 
```

Enum used internally to specify which goals are used in a problem definition. 

|Enumerator|Description|
|-----|-----|
|`MinMaxOnly`  |Only the minimize or maximize objectives are used. |
|`SolveOnly`  |Only the solve for value objective is used. |
|`MinMaxSolve`  |A mixture of minimize/maximize and solve for value are used. |
|`Unspecified`  |All of the goals have not been specified for all objectives. | 
 
 
<a id="MessageType"></a>

### MessageType
```
enum MessageType 
```

Enum used to specify status messages type. 

Status messages can be one of four types: 

|Enumerator|Description|
|-----|-----|
|`Info`  |Informational messages about the progres of the algorithm. |
|`Warn`  |Warnings about non-fatal errors that could affect performance. |
|`Error`  |Fatal errors in the algorithm that halt execution. |
|`Debug`  |Debug messages that can be used to track down problems in the algorithm. | 
 
 
<a id="WarmStartMethod"></a>

### WarmStartMethod
```
enum WarmStartMethod 
```

Supported methods for warm-start. 

|Enumerator|Description|
|-----|-----|
|`AlgorithmControlled`  |The algorithm periodically creates checkpoints in the `DataHistory`. The Opt Tool should use this checkpoints when attempting to warm-start the algorithm. |
|`RerunWithCache`  |The algorithm is dependent on the `DataHistory` cache for warm-start; it should request the same runs in the same order, allowing the cache to substitute for the actual runs. |

## Function Documentation
 
<a id="AreDesignsEqual"></a>

### AreDesignsEqual()


```csharp
delegate bool Phoenix.Optimization.AreDesignsEqual  ( object[]  design1,  
                                                      object[]  design2,  
                                                      IEvaluator  evaluator  
                                                    )   
```

Compares two designs to see if they are effectively equal. 

|Parameter|Description|
|-----|-----|
|`design1` |First design to be compared. |
|`design2` |Second design to be compared. |
|`evaluator` |Evaluator for the comparison. |
|`ReturnsReturns` |`true` if designs are equal. |  
 

