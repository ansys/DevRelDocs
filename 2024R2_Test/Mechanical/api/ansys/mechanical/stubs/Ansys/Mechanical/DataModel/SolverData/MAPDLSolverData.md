# MAPDLSolverData

### *class* MAPDLSolverData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLSolverData class.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetObjectData`](#MAPDLSolverData.GetObjectData)                   | GetObjectData method.                                            |
|---------------------------------------------------------------------|------------------------------------------------------------------|
| [`ElementIdsByMaterialId`](#MAPDLSolverData.ElementIdsByMaterialId) | Returns a list of Element IDs that belong to a given Material ID |
| [`NodeIdsByMaterialId`](#MAPDLSolverData.NodeIdsByMaterialId)       | Returns a list of Node IDs that belong to a given Material ID    |

### Properties

| [`MaxElementId`](#MAPDLSolverData.MaxElementId)         | Gets the Maximum Element Id number.      |
|---------------------------------------------------------|------------------------------------------|
| [`MaxNodeId`](#MAPDLSolverData.MaxNodeId)               | Gets the Maximum Node Id number.         |
| [`MaxElementTypeId`](#MAPDLSolverData.MaxElementTypeId) | Gets the Maximum Element Type Id number. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLSolverData
```

## Property detail

### *property* MAPDLSolverData.MaxElementId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum Element Id number.

<!-- !! processed by numpydoc !! -->

### *property* MAPDLSolverData.MaxNodeId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum Node Id number.

<!-- !! processed by numpydoc !! -->

### *property* MAPDLSolverData.MaxElementTypeId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum Element Type Id number.

<!-- !! processed by numpydoc !! -->

## Method detail

### MAPDLSolverData.GetObjectData(obj: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

### MAPDLSolverData.ElementIdsByMaterialId(matId: System.String)

Returns a list of Element IDs that belong to a given Material ID

<!-- !! processed by numpydoc !! -->

### MAPDLSolverData.NodeIdsByMaterialId(matId: System.String)

Returns a list of Node IDs that belong to a given Material ID

<!-- !! processed by numpydoc !! -->
