<a id="ioperations"></a>

# IOperations

<a id="IOperations"></a>

### *class* IOperations

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a list of available geometry operations.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IOperations
```

<a id="property-detail"></a>

## Property detail

<a id="IOperations.Tools"></a>

### *property* IOperations.Tools *: [Ansys.ACT.Interfaces.DesignModeler.IOperationTools](IOperationTools.md#IOperationTools) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of additional tools to manipulate the geometry.

<!-- !! processed by numpydoc !! -->

<a id="IOperations.Queries"></a>

### *property* IOperations.Queries *: [Ansys.ACT.Interfaces.DesignModeler.IQueries](IQueries.md#IQueries) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of methods to query information on the geometry.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IOperations.CreateExtrudeOperation"></a>

### IOperations.CreateExtrudeOperation(dir: System.Collections.Generic.IEnumerable[System.Double], depth: System.Double)

CreateExtrudeOperation method.

<!-- !! processed by numpydoc !! -->

<a id="IOperations.CreateIntersectOperation"></a>

### IOperations.CreateIntersectOperation(tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

CreateIntersectOperation method.

<!-- !! processed by numpydoc !! -->

<a id="IOperations.CreateRevolveOperation"></a>

### IOperations.CreateRevolveOperation(origin: System.Collections.Generic.IEnumerable[System.Double], axis: System.Collections.Generic.IEnumerable[System.Double])

CreateRevolveOperation method.

<!-- !! processed by numpydoc !! -->

<a id="IOperations.CreateSubtractOperation"></a>

### IOperations.CreateSubtractOperation(tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

CreateSubtractOperation method.

<!-- !! processed by numpydoc !! -->

<a id="IOperations.CreateUnionOperation"></a>

### IOperations.CreateUnionOperation()

Creates an “Union” operation.

<!-- !! processed by numpydoc !! -->
