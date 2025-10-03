# IFeasibilityProvider Interface

**Namespace:** `Phoenix.Optimization`

## Overview

Implemented by algorithms with custom IsDesignFeasible implementations.  
 

## Inheritance

![IFeasibilityProvider](../../../../graphics/ifeasibilityprovider.png)

## Declaration

```csharp
interface IFeasibilityProvider
```

## Description

Implemented by algorithms with custom IsDesignFeasible implementations.  
 


## Public Member Functions

|Name|Description|
|-----|-----|
|FuzzyBoolean |`IsDesignFeasible (double[] objectiveValues, double[] constraintValues, object[] designVariableValues)`<br>Tests whether the given design is feasible. |

## Member Function Documentation

### IsDesignFeasible
```csharp
FuzzyBoolean IsDesignFeasible ( double[] objectiveValues, double[] constraintValues, object[] designVariableValues )
```

Tests whether the given design is feasible. Algorithms that wish to mark designs as marginally feasible must implement this interface. Implementation must not depend on anything except current settings and specified design. <br />Default implementation used by the Optimization Tool is listed here for reference:

**Parameters:**

- `objectiveValues` - The values of the objectives for the design.
- `constraintValues` - The values of the constraints for the design.
- `designVariableValues` - The values of the design variables for the design.

**Returns:**

- True if the design is feasible, Maybe if the design is marginally feasible, and False if the design is infeasible.

## Property Documentation

### IsDesignFeasible()
```csharp
FuzzyBoolean IsDesignFeasible ( double[] objectiveValues, double[] constraintValues, object[] designVariableValues )
```

Tests whether the given design is feasible. Algorithms that wish to mark designs as marginally feasible must implement this interface. Implementation must not depend on anything except current settings and specified design. <br />Default implementation used by the Optimization Tool is listed here for reference:
