# MAPDLSolverData

<a id="MAPDLSolverData"></a>

### *class* MAPDLSolverData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLSolverData class.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|------------------------------------------------------------------|
| [`GetObjectData`](#MAPDLSolverData.GetObjectData)                   | GetObjectData method.                                            |
| [`ElementIdsByMaterialId`](#MAPDLSolverData.ElementIdsByMaterialId) | Returns a list of Element IDs that belong to a given Material ID |
| [`NodeIdsByMaterialId`](#MAPDLSolverData.NodeIdsByMaterialId)       | Returns a list of Node IDs that belong to a given Material ID    |

### Properties

| Name | Description |
|---------------------------------------------------------|------------------------------------------|
| [`MaxElementId`](#MAPDLSolverData.MaxElementId)         | Gets the Maximum Element Id number.      |
| [`MaxNodeId`](#MAPDLSolverData.MaxNodeId)               | Gets the Maximum Node Id number.         |
| [`MaxElementTypeId`](#MAPDLSolverData.MaxElementTypeId) | Gets the Maximum Element Type Id number. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLSolverData
```

<a id="property-detail"></a>

## Property detail

<a id="MAPDLSolverData.MaxElementId"></a>

### *property* MAPDLSolverData.MaxElementId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum Element Id number.

<!-- !! processed by numpydoc !! -->

<a id="MAPDLSolverData.MaxNodeId"></a>

### *property* MAPDLSolverData.MaxNodeId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum Node Id number.

<!-- !! processed by numpydoc !! -->

<a id="MAPDLSolverData.MaxElementTypeId"></a>

### *property* MAPDLSolverData.MaxElementTypeId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum Element Type Id number.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MAPDLSolverData.GetObjectData"></a>

### MAPDLSolverData.GetObjectData(obj: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MAPDLSolverData.ElementIdsByMaterialId"></a>

### MAPDLSolverData.ElementIdsByMaterialId(matId: System.String)

Returns a list of Element IDs that belong to a given Material ID

<!-- !! processed by numpydoc !! -->

<a id="MAPDLSolverData.NodeIdsByMaterialId"></a>

### MAPDLSolverData.NodeIdsByMaterialId(matId: System.String)

Returns a list of Node IDs that belong to a given Material ID

<!-- !! processed by numpydoc !! -->
