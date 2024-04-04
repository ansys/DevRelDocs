# IOperations

### *class* IOperations

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a list of available geometry operations.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`CreateExtrudeOperation`](#IOperations.CreateExtrudeOperation)     | CreateExtrudeOperation method.   |
|---------------------------------------------------------------------|----------------------------------|
| [`CreateIntersectOperation`](#IOperations.CreateIntersectOperation) | CreateIntersectOperation method. |
| [`CreateRevolveOperation`](#IOperations.CreateRevolveOperation)     | CreateRevolveOperation method.   |
| [`CreateSubtractOperation`](#IOperations.CreateSubtractOperation)   | CreateSubtractOperation method.  |
| [`CreateUnionOperation`](#IOperations.CreateUnionOperation)         | Creates an “Union” operation.    |

### Properties

| [`Tools`](#IOperations.Tools)     | Gets the list of additional tools to manipulate the geometry.   |
|-----------------------------------|-----------------------------------------------------------------|
| [`Queries`](#IOperations.Queries) | Gets the list of methods to query information on the geometry.  |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IOperations
```

## Property detail

### *property* IOperations.Tools *: [Ansys.ACT.Interfaces.DesignModeler.IOperationTools](IOperationTools.md#IOperationTools) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of additional tools to manipulate the geometry.

<!-- !! processed by numpydoc !! -->

### *property* IOperations.Queries *: [Ansys.ACT.Interfaces.DesignModeler.IQueries](IQueries.md#IQueries) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of methods to query information on the geometry.

<!-- !! processed by numpydoc !! -->

## Method detail

### IOperations.CreateExtrudeOperation(dir: System.Collections.Generic.IEnumerable[System.Double], depth: System.Double)

CreateExtrudeOperation method.

<!-- !! processed by numpydoc !! -->

### IOperations.CreateIntersectOperation(tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

CreateIntersectOperation method.

<!-- !! processed by numpydoc !! -->

### IOperations.CreateRevolveOperation(origin: System.Collections.Generic.IEnumerable[System.Double], axis: System.Collections.Generic.IEnumerable[System.Double])

CreateRevolveOperation method.

<!-- !! processed by numpydoc !! -->

### IOperations.CreateSubtractOperation(tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

CreateSubtractOperation method.

<!-- !! processed by numpydoc !! -->

### IOperations.CreateUnionOperation()

Creates an “Union” operation.

<!-- !! processed by numpydoc !! -->
