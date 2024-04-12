<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines"></a>

<a id="the-constructionlines-package"></a>

# The `ConstructionLines` package

<a id="summary"></a>

## Summary

### Subpackages

| [`Edges`](Edges/index.md#module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines.Edges)   | Edges subpackage.   |
|--------------------------------------------------------------------------------------------------------------|---------------------|

### Classes

| [`ConstructionLineHelper`](ConstructionLineHelper.md#ConstructionLineHelper)   | Helper to perform queries and modifications against a ConstructionLine instance.   |
|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`Plane`](Plane.md#Plane)                                                      | A 2D sketching planes in a ConstructionLine instance.                              |
| [`Point`](../../Graphics/Point.md#Point)                                       | A point in a ConstructionLine instance, may have an associated edge vertex.        |

### Enums

| [`PlaneType`](PlaneType.md#PlaneType)   | Enumeration for the possible edge vertex types that can be represented.   |
|-----------------------------------------|---------------------------------------------------------------------------|
| [`PointType`](PointType.md#PointType)   | Enumeration for the possible edge vertex types that can be represented.   |

<a id="description"></a>

## Description

ConstructionLines subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ConstructionLines.ConstructionLineHelper"></a>

### *class* ConstructionLines.ConstructionLineHelper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Helper to perform queries and modifications against a ConstructionLine instance.

> <!-- !! processed by numpydoc !! -->

### Constructors

| [`GetEdgeVerticesById`](#ConstructionLines.GetEdgeVerticesById)                             | GetEdgeVerticesById method.                                                                |
|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`GetEdgesById`](#ConstructionLines.GetEdgesById)                                           | GetEdgesById method.                                                                       |
| [`GetPlanesById`](#ConstructionLines.GetPlanesById)                                         | GetPlanesById method.                                                                      |
| [`GetEdgesUsingPoint`](#ConstructionLines.GetEdgesUsingPoint)                               | Get a list of IEdge that use the given Point.                                              |
| [`GetContainedEdges`](#ConstructionLines.GetContainedEdges)                                 | Get all the edges that have both start and end edge vertices in the given plane.           |
| [`GetRelatedEdges`](#ConstructionLines.GetRelatedEdges)                                     | Get all the edges that have only edge vertex in the given plane.                           |
| [`ExportToXML`](#ConstructionLines.ExportToXML)                                             | Collect all the edges and edge vertices, then export them as global points to an XML file. |
| [`ClearExistingDataAndImportFromXML`](#ConstructionLines.ClearExistingDataAndImportFromXML) | Import global points and connecting edges from an XML file.                                |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines import ConstructionLineHelper
```

<a id="method-detail"></a>

## Method detail

<a id="ConstructionLines.GetEdgeVerticesById"></a>

### *classmethod* ConstructionLines.GetEdgeVerticesById(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine), edgeVertexIdCollection: System.Collections.Generic.IEnumerable[System.Int32])

GetEdgeVerticesById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.GetEdgesById"></a>

### *classmethod* ConstructionLines.GetEdgesById(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine), edgeIdCollection: System.Collections.Generic.IEnumerable[System.Int32])

GetEdgesById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.GetPlanesById"></a>

### *classmethod* ConstructionLines.GetPlanesById(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine), planeIdCollection: System.Collections.Generic.IEnumerable[System.Int32])

GetPlanesById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.GetEdgesUsingPoint"></a>

### *classmethod* ConstructionLines.GetEdgesUsingPoint(point: [Ansys.Mechanical.DataModel.ConstructionLines.Point](Point.md#Point))

Get a list of IEdge that use the given Point.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.GetContainedEdges"></a>

### *classmethod* ConstructionLines.GetContainedEdges(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](Plane.md#Plane))

Get all the edges that have both start and end edge vertices in the given plane.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.GetRelatedEdges"></a>

### *classmethod* ConstructionLines.GetRelatedEdges(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](Plane.md#Plane))

Get all the edges that have only edge vertex in the given plane.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.ExportToXML"></a>

### *classmethod* ConstructionLines.ExportToXML(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine), xmlFilePath: System.String)

Collect all the edges and edge vertices, then export them as global points to an XML file.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.ClearExistingDataAndImportFromXML"></a>

### *classmethod* ConstructionLines.ClearExistingDataAndImportFromXML(constructionLine: [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](../../../ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine), xmlFilePath: System.String)

Import global points and connecting edges from an XML file.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Plane"></a>

### *class* ConstructionLines.Plane

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A 2D sketching planes in a ConstructionLine instance.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Equivalent`](#id9)   | Checks to see if another plane is equivalent to this one.   |
|------------------------|-------------------------------------------------------------|

### Properties

| [`Type`](#id0)                                                        | Type property.                                                         |
|-----------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Definition`](#id5)                                                  | Definition property.                                                   |
| [`Origin`](#ConstructionLines.Origin)                                 | The global location of this plane’s origin.                            |
| [`PrimaryAxisDirection`](#ConstructionLines.PrimaryAxisDirection)     | The orientation of the plane’s primary (X) axis orientation.           |
| [`SecondaryAxisDirection`](#ConstructionLines.SecondaryAxisDirection) | The orientation of the plane’s secondary (Y) axis orientation.         |
| [`Normal`](#ConstructionLines.Normal)                                 | The plane’s normal vector (Z axis orientation) orientation.            |
| [`ObjectId`](#id6)                                                    | Get the ID of the represented entity.                                  |
| [`IsRepresentation`](#id7)                                            | Check to see if there is a valid entity that this instance represents. |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines import Plane
```

<a id="property-detail"></a>

## Property detail

<a id="ConstructionLines.Type"></a>

### *property* ConstructionLines.Type *: [Ansys.Mechanical.DataModel.ConstructionLines.PlaneType](PlaneType.md#PlaneType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Definition"></a>

### *property* ConstructionLines.Definition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Definition property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Origin"></a>

### *property* ConstructionLines.Origin *: Ansys.ACT.Core.Math.Point3D | [None](https://docs.python.org/3/library/constants.html#None)*

The global location of this plane’s origin.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.PrimaryAxisDirection"></a>

### *property* ConstructionLines.PrimaryAxisDirection *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The orientation of the plane’s primary (X) axis orientation.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.SecondaryAxisDirection"></a>

### *property* ConstructionLines.SecondaryAxisDirection *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The orientation of the plane’s secondary (Y) axis orientation.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Normal"></a>

### *property* ConstructionLines.Normal *: Ansys.ACT.Core.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The plane’s normal vector (Z axis orientation) orientation.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.ObjectId"></a>

### *property* ConstructionLines.ObjectId *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ID of the represented entity.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.IsRepresentation"></a>

### *property* ConstructionLines.IsRepresentation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Check to see if there is a valid entity that this instance represents.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

## Method detail

<a id="ConstructionLines.Equivalent"></a>

### ConstructionLines.Equivalent(other: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](Plane.md#Plane))

Checks to see if another plane is equivalent to this one.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Point"></a>

### *class* ConstructionLines.Point

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A point in a ConstructionLine instance, may have an associated edge vertex.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Equivalent`](#id9)   | Checks to see if another point is equivalent to this one.   |
|------------------------|-------------------------------------------------------------|

### Properties

| [`Type`](#id0)                            | Type property.                                                         |
|-------------------------------------------|------------------------------------------------------------------------|
| [`Definition`](#id5)                      | Definition property.                                                   |
| [`Location`](#ConstructionLines.Location) | Get the global location of this point.                                 |
| [`ObjectId`](#id6)                        | Get the ID of the represented entity.                                  |
| [`IsRepresentation`](#id7)                | Check to see if there is a valid entity that this instance represents. |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines import Point
```

<a id="id4"></a>

## Property detail

<a id="id0"></a>

### *property* ConstructionLines.Type *: [Ansys.Mechanical.DataModel.ConstructionLines.PointType](PointType.md#PointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* ConstructionLines.Definition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Definition property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Location"></a>

### *property* ConstructionLines.Location *: Ansys.ACT.Core.Math.Point3D | [None](https://docs.python.org/3/library/constants.html#None)*

Get the global location of this point.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* ConstructionLines.ObjectId *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ID of the represented entity.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* ConstructionLines.IsRepresentation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Check to see if there is a valid entity that this instance represents.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

## Method detail

<a id="id9"></a>

### ConstructionLines.Equivalent(other: [Ansys.Mechanical.DataModel.ConstructionLines.Point](Point.md#Point))

Checks to see if another point is equivalent to this one.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.PlaneType"></a>

### *class* ConstructionLines.PlaneType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Enumeration for the possible edge vertex types that can be represented.

> <!-- !! processed by numpydoc !! -->

<a id="id10"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines import PlaneType
```

<a id="ConstructionLines.PointType"></a>

### *class* ConstructionLines.PointType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Enumeration for the possible edge vertex types that can be represented.

> <!-- !! processed by numpydoc !! -->

<a id="id11"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.ConstructionLines import PointType
```
