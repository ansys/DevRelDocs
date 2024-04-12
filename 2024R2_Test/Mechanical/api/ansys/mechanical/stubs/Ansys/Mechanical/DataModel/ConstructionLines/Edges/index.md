<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines.Edges"></a>

<a id="the-edges-package"></a>

# The `Edges` package

<a id="summary"></a>

## Summary

### Interfaces

| Name | Summary |
|-----------------------------|----------------------------------------------------|
| [`IEdge`](IEdge.md#IEdge)   | Interface for edges created by ConstructionLine.   |

### Classes

| Name | Summary |
|--------------------------------------------------------------|--------------------------------------------------------------------|
| [`StraightLineEdge`](StraightLineEdge.md#StraightLineEdge)   | Representation of a straight line edge between to edge vertices.   |

<a id="description"></a>

## Description

Edges subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Edges.StraightLineEdge"></a>

### *class* Edges.StraightLineEdge

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Representation of a straight line edge between to edge vertices.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|-----------------------------------------------|------------------------------------------------------------------------|
| [`Length`](#id0)                              | Length property.                                                       |
| [`EndPoint`](#Edges.EndPoint)                 | A Point representing the end vertex of the edge.                       |
| [`StartPoint`](#Edges.StartPoint)             | A Point representing the start vertex of an edge.                      |
| [`ObjectId`](#Edges.ObjectId)                 | Get the ID of the represented entity.                                  |
| [`IsRepresentation`](#Edges.IsRepresentation) | Check to see if there is a valid entity that this instance represents. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines.Edges import StraightLineEdge
```

<a id="property-detail"></a>

## Property detail

<a id="Edges.Length"></a>

### *property* Edges.Length *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Length property.

<!-- !! processed by numpydoc !! -->

<a id="Edges.EndPoint"></a>

### *property* Edges.EndPoint *: [Ansys.Mechanical.DataModel.ConstructionLines.Point](../Point.md#Point) | [None](https://docs.python.org/3/library/constants.html#None)*

A Point representing the end vertex of the edge.

<!-- !! processed by numpydoc !! -->

<a id="Edges.StartPoint"></a>

### *property* Edges.StartPoint *: [Ansys.Mechanical.DataModel.ConstructionLines.Point](../Point.md#Point) | [None](https://docs.python.org/3/library/constants.html#None)*

A Point representing the start vertex of an edge.

<!-- !! processed by numpydoc !! -->

<a id="Edges.ObjectId"></a>

### *property* Edges.ObjectId *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ID of the represented entity.

<!-- !! processed by numpydoc !! -->

<a id="Edges.IsRepresentation"></a>

### *property* Edges.IsRepresentation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Check to see if there is a valid entity that this instance represents.

<!-- !! processed by numpydoc !! -->

<a id="Edges.IEdge"></a>

### *class* Edges.IEdge

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Interface for edges created by ConstructionLine.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|--------------------|--------------------------------|
| [`Length`](#id0)   | Get the length of this edge.   |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines.Edges import IEdge
```

<a id="id2"></a>

## Property detail

<a id="id0"></a>

### *property* Edges.Length *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the length of this edge.

<!-- !! processed by numpydoc !! -->
