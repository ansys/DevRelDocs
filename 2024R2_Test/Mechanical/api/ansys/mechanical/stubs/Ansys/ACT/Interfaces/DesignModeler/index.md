<a id="module-ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler"></a>

<a id="the-designmodeler-package"></a>

# The `DesignModeler` package

<a id="summary"></a>

## Summary

### Interfaces

| [`IDesignModelerDataModel`](IDesignModelerDataModel.md#IDesignModelerDataModel)             | Defines the DesignModeler data model.                        |
|---------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`IDesignModelerExtAPI`](IDesignModelerExtAPI.md#IDesignModelerExtAPI)                      | Defines the main entry point of all APIs.                    |
| [`IDesignModelerGeoData`](IDesignModelerGeoData.md#IDesignModelerGeoData)                   | Defines the DesignModeler geometry data model.               |
| [`IDesignModelerGeoFeature`](IDesignModelerGeoFeature.md#IDesignModelerGeoFeature)          | Defines a DesignModeler custom feature.                      |
| [`IDesignModelerSelectionInfo`](IDesignModelerSelectionInfo.md#IDesignModelerSelectionInfo) | Defines the DesignModeler selection information.             |
| [`IExtrude`](IExtrude.md#IExtrude)                                                          | Defines an “Extrude” operation.                              |
| [`IGeometryBuilder`](IGeometryBuilder.md#IGeometryBuilder)                                  | Defines the geometry builder.                                |
| [`IIntersect`](IIntersect.md#IIntersect)                                                    | Defines an “Intersect” operation.                            |
| [`IOperations`](IOperations.md#IOperations)                                                 | Defines a list of available geometry operations.             |
| [`IOperationTools`](IOperationTools.md#IOperationTools)                                     | Defines a list of tools to manipulate the geometry.          |
| [`IPrimitives`](IPrimitives.md#IPrimitives)                                                 | Defines the list of creatable primitives.                    |
| [`IPSGeoBody`](IPSGeoBody.md#IPSGeoBody)                                                    | Defines a body.                                              |
| [`IPSGeoEdge`](IPSGeoEdge.md#IPSGeoEdge)                                                    | Defines an edge.                                             |
| [`IPSGeoEntity`](IPSGeoEntity.md#IPSGeoEntity)                                              | Defines a generic geometry entity.                           |
| [`IPSGeoFace`](IPSGeoFace.md#IPSGeoFace)                                                    | Defines a face.                                              |
| [`IPSGeoPart`](IPSGeoPart.md#IPSGeoPart)                                                    | Defines a part.                                              |
| [`IQueries`](IQueries.md#IQueries)                                                          | Defines a list of available queries on the geometry.         |
| [`IRevolve`](IRevolve.md#IRevolve)                                                          | Defines a “Revolve” operation.                               |
| [`ISheetCone`](ISheetCone.md#ISheetCone)                                                    | Defines a sheet cone primitive.                              |
| [`ISheetCylinder`](ISheetCylinder.md#ISheetCylinder)                                        | Defines a sheet cylinder primitive.                          |
| [`ISheetPolygon`](ISheetPolygon.md#ISheetPolygon)                                           | Defines a sheet polygon primitive.                           |
| [`ISheets`](ISheets.md#ISheets)                                                             | Defines the list all creatable sheet geometry primitives.    |
| [`ISheetSphere`](ISheetSphere.md#ISheetSphere)                                              | Defines a sheet sphere primitive.                            |
| [`ISolidBox`](ISolidBox.md#ISolidBox)                                                       | Defines a solid box primitive.                               |
| [`ISolidCone`](ISolidCone.md#ISolidCone)                                                    | Defines a solid cone primitive.                              |
| [`ISolidCylinder`](ISolidCylinder.md#ISolidCylinder)                                        | Defines a solid cylinder primitive.                          |
| [`ISolids`](ISolids.md#ISolids)                                                             | Defines the list of all creatable solid geometry primitives. |
| [`ISolidSphere`](ISolidSphere.md#ISolidSphere)                                              | Defines a solid sphere primitive.                            |
| [`ISubtract`](ISubtract.md#ISubtract)                                                       | Defines a “Subtract” operation.                              |
| [`IUnion`](IUnion.md#IUnion)                                                                | Defines an “Union” operation.                                |
| [`IWireArc`](IWireArc.md#IWireArc)                                                          | Defines a wire arc primitive.                                |
| [`IWireBCurve`](IWireBCurve.md#IWireBCurve)                                                 | Defines awire b-curve primitive.                             |
| [`IWireEllipse`](IWireEllipse.md#IWireEllipse)                                              | Defines a wire ellipse primitive.                            |
| [`IWirePolyline`](IWirePolyline.md#IWirePolyline)                                           | Defines a wire polyline primitive.                           |
| [`IWires`](IWires.md#IWires)                                                                | Defines the list of all creatable wire geometry primitives.  |

<a id="description"></a>

## Description

DesignModeler subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="DesignModeler.IDesignModelerDataModel"></a>

### *class* DesignModeler.IDesignModelerDataModel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the DesignModeler data model.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`CurrentUnitFromQuantityName`](#DesignModeler.CurrentUnitFromQuantityName)   | Returns the current unit assocaited to a quantity name.                         |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`ComponentById`](#DesignModeler.ComponentById)                               | Returns the component (named selection) associated to the specified identifier. |

### Properties

| [`GeoData`](#DesignModeler.GeoData)                 | Gets the geometry data model object.    |
|-----------------------------------------------------|-----------------------------------------|
| [`GeometryBuilder`](#DesignModeler.GeometryBuilder) | Gets the geometry builder object.       |
| [`Queries`](#id19)                                  | Gets the queries object.                |
| [`Components`](#DesignModeler.Components)           | Gets all components (named selections). |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IDesignModelerDataModel
```

<a id="property-detail"></a>

## Property detail

<a id="DesignModeler.GeoData"></a>

### *property* DesignModeler.GeoData *: [Ansys.ACT.Interfaces.DesignModeler.IDesignModelerGeoData](IDesignModelerGeoData.md#IDesignModelerGeoData) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the geometry data model object.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.GeometryBuilder"></a>

### *property* DesignModeler.GeometryBuilder *: [Ansys.ACT.Interfaces.DesignModeler.IGeometryBuilder](IGeometryBuilder.md#IGeometryBuilder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the geometry builder object.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Queries"></a>

### *property* DesignModeler.Queries *: [Ansys.ACT.Interfaces.DesignModeler.IQueries](IQueries.md#IQueries) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the queries object.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Components"></a>

### *property* DesignModeler.Components *: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Common.ISelectionInfo] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets all components (named selections).

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DesignModeler.CurrentUnitFromQuantityName"></a>

### DesignModeler.CurrentUnitFromQuantityName(quantityName: System.String)

Returns the current unit assocaited to a quantity name.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ComponentById"></a>

### DesignModeler.ComponentById(id: System.Int32)

Returns the component (named selection) associated to the specified identifier.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IDesignModelerExtAPI"></a>

### *class* DesignModeler.IDesignModelerExtAPI

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the main entry point of all APIs.

> <!-- !! processed by numpydoc !! -->

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IDesignModelerExtAPI
```

<a id="DesignModeler.IDesignModelerGeoData"></a>

### *class* DesignModeler.IDesignModelerGeoData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the DesignModeler geometry data model.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Bodies`](#id0)                | Gets all bodies.   |
|---------------------------------|--------------------|
| [`Parts`](#DesignModeler.Parts) | Gets all parts.    |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IDesignModelerGeoData
```

<a id="id3"></a>

## Property detail

<a id="DesignModeler.Bodies"></a>

### *property* DesignModeler.Bodies *: System.Collections.Generic.IList[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets all bodies.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Parts"></a>

### *property* DesignModeler.Parts *: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IBaseGeoPart] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets all parts.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IDesignModelerGeoFeature"></a>

### *class* DesignModeler.IDesignModelerGeoFeature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DesignModeler custom feature.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`AddProblematicGeometry`](#DesignModeler.AddProblematicGeometry)   | AddProblematicGeometry method.   |
|---------------------------------------------------------------------|----------------------------------|

### Properties

| [`MaterialType`](#DesignModeler.MaterialType)   | Gets or sets the material type used to generate the feature.       |
|-------------------------------------------------|--------------------------------------------------------------------|
| [`Bodies`](#id0)                                | Gets or sets the list of bodies or parts generated by the feature. |

<a id="id4"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IDesignModelerGeoFeature
```

<a id="id5"></a>

## Property detail

<a id="DesignModeler.MaterialType"></a>

### *property* DesignModeler.MaterialType *: Ansys.ACT.Interfaces.Geometry.MaterialTypeEnum | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the material type used to generate the feature.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DesignModeler.Bodies *: System.Collections.Generic.IEnumerable[Ansys.ACT.Interfaces.Geometry.IBaseGeoBodyOrPart] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the list of bodies or parts generated by the feature.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

## Method detail

<a id="DesignModeler.AddProblematicGeometry"></a>

### DesignModeler.AddProblematicGeometry(entities: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)], message: System.String)

AddProblematicGeometry method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IDesignModelerSelectionInfo"></a>

### *class* DesignModeler.IDesignModelerSelectionInfo

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the DesignModeler selection information.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Entities`](#DesignModeler.Entities)   | Gets the list of selected geometry entities.        |
|-----------------------------------------|-----------------------------------------------------|
| [`Locations`](#DesignModeler.Locations) | Gets the location point for each selected entities. |

<a id="id7"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IDesignModelerSelectionInfo
```

<a id="id8"></a>

## Property detail

<a id="DesignModeler.Entities"></a>

### *property* DesignModeler.Entities *: System.Collections.Generic.IList[Ansys.ACT.Interfaces.Geometry.IBaseGeoEntity] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of selected geometry entities.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Locations"></a>

### *property* DesignModeler.Locations *: System.Collections.Generic.IList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the location point for each selected entities.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IExtrude"></a>

### *class* DesignModeler.IExtrude

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines an “Extrude” operation.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ApplyTo`](#id77)   | Applies the operation to the profile given in argument.   |
|----------------------|-----------------------------------------------------------|

### Properties

| [`Direction`](#id63)            | Gets or Sets the direction of the extrusion.   |
|---------------------------------|------------------------------------------------|
| [`Walled`](#id34)               | Gets or Sets the walled flag.                  |
| [`Depth`](#DesignModeler.Depth) | Gets or Sets the depth of the extrusion.       |

<a id="id9"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IExtrude
```

<a id="id10"></a>

## Property detail

<a id="DesignModeler.Direction"></a>

### *property* DesignModeler.Direction *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the direction of the extrusion.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Walled"></a>

### *property* DesignModeler.Walled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the walled flag.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Depth"></a>

### *property* DesignModeler.Depth *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the depth of the extrusion.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

## Method detail

<a id="DesignModeler.ApplyTo"></a>

### DesignModeler.ApplyTo(profile: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Applies the operation to the profile given in argument.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IGeometryBuilder"></a>

### *class* DesignModeler.IGeometryBuilder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the geometry builder.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Primitives`](#DesignModeler.Primitives)   | Gets the list of creatable primitives.   |
|---------------------------------------------|------------------------------------------|
| [`Operations`](#DesignModeler.Operations)   | Gets the list of creatable operations.   |

<a id="id12"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IGeometryBuilder
```

<a id="id13"></a>

## Property detail

<a id="DesignModeler.Primitives"></a>

### *property* DesignModeler.Primitives *: [Ansys.ACT.Interfaces.DesignModeler.IPrimitives](IPrimitives.md#IPrimitives) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of creatable primitives.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Operations"></a>

### *property* DesignModeler.Operations *: [Ansys.ACT.Interfaces.DesignModeler.IOperations](IOperations.md#IOperations) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of creatable operations.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IIntersect"></a>

### *class* DesignModeler.IIntersect

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines an “Intersect” operation.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ApplyTo`](#id77)   | ApplyTo method.   |
|----------------------|-------------------|

<a id="id14"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IIntersect
```

<a id="id15"></a>

## Method detail

<a id="id16"></a>

### DesignModeler.ApplyTo(bodiesIn: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

ApplyTo method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IOperations"></a>

### *class* DesignModeler.IOperations

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a list of available geometry operations.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`CreateExtrudeOperation`](#DesignModeler.CreateExtrudeOperation)     | CreateExtrudeOperation method.   |
|-----------------------------------------------------------------------|----------------------------------|
| [`CreateIntersectOperation`](#DesignModeler.CreateIntersectOperation) | CreateIntersectOperation method. |
| [`CreateRevolveOperation`](#DesignModeler.CreateRevolveOperation)     | CreateRevolveOperation method.   |
| [`CreateSubtractOperation`](#DesignModeler.CreateSubtractOperation)   | CreateSubtractOperation method.  |
| [`CreateUnionOperation`](#DesignModeler.CreateUnionOperation)         | Creates an “Union” operation.    |

### Properties

| [`Tools`](#DesignModeler.Tools)   | Gets the list of additional tools to manipulate the geometry.   |
|-----------------------------------|-----------------------------------------------------------------|
| [`Queries`](#id19)                | Gets the list of methods to query information on the geometry.  |

<a id="id17"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IOperations
```

<a id="id18"></a>

## Property detail

<a id="DesignModeler.Tools"></a>

### *property* DesignModeler.Tools *: [Ansys.ACT.Interfaces.DesignModeler.IOperationTools](IOperationTools.md#IOperationTools) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of additional tools to manipulate the geometry.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* DesignModeler.Queries *: [Ansys.ACT.Interfaces.DesignModeler.IQueries](IQueries.md#IQueries) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of methods to query information on the geometry.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

## Method detail

<a id="DesignModeler.CreateExtrudeOperation"></a>

### DesignModeler.CreateExtrudeOperation(dir: System.Collections.Generic.IEnumerable[System.Double], depth: System.Double)

CreateExtrudeOperation method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreateIntersectOperation"></a>

### DesignModeler.CreateIntersectOperation(tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

CreateIntersectOperation method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreateRevolveOperation"></a>

### DesignModeler.CreateRevolveOperation(origin: System.Collections.Generic.IEnumerable[System.Double], axis: System.Collections.Generic.IEnumerable[System.Double])

CreateRevolveOperation method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreateSubtractOperation"></a>

### DesignModeler.CreateSubtractOperation(tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

CreateSubtractOperation method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreateUnionOperation"></a>

### DesignModeler.CreateUnionOperation()

Creates an “Union” operation.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IOperationTools"></a>

### *class* DesignModeler.IOperationTools

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a list of tools to manipulate the geometry.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`SimplifyTopology`](#DesignModeler.SimplifyTopology)         | Simplifies the topology of the given entity.   |
|---------------------------------------------------------------|------------------------------------------------|
| [`EdgesToWireBody`](#DesignModeler.EdgesToWireBody)           | EdgesToWireBody method.                        |
| [`FacesToSheetBody`](#DesignModeler.FacesToSheetBody)         | FacesToSheetBody method.                       |
| [`WireToSheetBody`](#DesignModeler.WireToSheetBody)           | Transforms a wire body to a sheet body.        |
| [`SheetBodyToSolidBody`](#DesignModeler.SheetBodyToSolidBody) | Transforms a sheet body to a solid body.       |
| [`Imprint`](#DesignModeler.Imprint)                           | Imprint method.                                |
| [`OffsetFace`](#DesignModeler.OffsetFace)                     | OffsetFace method.                             |
| [`ThickenBody`](#DesignModeler.ThickenBody)                   | ThickenBody method.                            |
| [`CopyBody`](#DesignModeler.CopyBody)                         | Copies a body.                                 |
| [`CreatePart`](#DesignModeler.CreatePart)                     | CreatePart method.                             |
| [`DeleteBody`](#DesignModeler.DeleteBody)                     | Deletes a body.                                |
| [`TransformBody`](#DesignModeler.TransformBody)               | Transform a body.                              |

<a id="id21"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IOperationTools
```

<a id="id22"></a>

## Method detail

<a id="DesignModeler.SimplifyTopology"></a>

### DesignModeler.SimplifyTopology(entity: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Simplifies the topology of the given entity.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.EdgesToWireBody"></a>

### DesignModeler.EdgesToWireBody(edges: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEdge](IPSGeoEdge.md#IPSGeoEdge)])

EdgesToWireBody method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.FacesToSheetBody"></a>

### DesignModeler.FacesToSheetBody(faces: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoFace](IPSGeoFace.md#IPSGeoFace)])

FacesToSheetBody method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.WireToSheetBody"></a>

### DesignModeler.WireToSheetBody(wire: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Transforms a wire body to a sheet body.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.SheetBodyToSolidBody"></a>

### DesignModeler.SheetBodyToSolidBody(sheet: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Transforms a sheet body to a solid body.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Imprint"></a>

### DesignModeler.Imprint(target: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody), tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

Imprint method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.OffsetFace"></a>

### DesignModeler.OffsetFace(faces: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoFace](IPSGeoFace.md#IPSGeoFace)], offset: System.Double)

OffsetFace method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ThickenBody"></a>

### DesignModeler.ThickenBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody), facesToRemove: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoFace](IPSGeoFace.md#IPSGeoFace)], thick1: System.Double, thick2: System.Double)

ThickenBody method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CopyBody"></a>

### DesignModeler.CopyBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Copies a body.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreatePart"></a>

### DesignModeler.CreatePart(bodies: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

CreatePart method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.DeleteBody"></a>

### DesignModeler.DeleteBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Deletes a body.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.TransformBody"></a>

### DesignModeler.TransformBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody), transformation: Ansys.ACT.Math.Matrix4D)

Transform a body.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IPrimitives"></a>

### *class* DesignModeler.IPrimitives

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the list of creatable primitives.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Sheet`](#DesignModeler.Sheet)                       | Gets the list of all creatable sheet geometry primitives.   |
|-------------------------------------------------------|-------------------------------------------------------------|
| [`Solid`](../../Automation/Mechanical/Solid.md#Solid) | Gets the list of all creatable solid geometry primitives.   |
| [`Wire`](#DesignModeler.Wire)                         | Gets the list of all creatable wire geometry primitives.    |

<a id="id23"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IPrimitives
```

<a id="id24"></a>

## Property detail

<a id="DesignModeler.Sheet"></a>

### *property* DesignModeler.Sheet *: [Ansys.ACT.Interfaces.DesignModeler.ISheets](ISheets.md#ISheets) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of all creatable sheet geometry primitives.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Solid"></a>

### *property* DesignModeler.Solid *: [Ansys.ACT.Interfaces.DesignModeler.ISolids](ISolids.md#ISolids) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of all creatable solid geometry primitives.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Wire"></a>

### *property* DesignModeler.Wire *: [Ansys.ACT.Interfaces.DesignModeler.IWires](IWires.md#IWires) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of all creatable wire geometry primitives.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IPSGeoBody"></a>

### *class* DesignModeler.IPSGeoBody

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a body.

> <!-- !! processed by numpydoc !! -->

<a id="id25"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IPSGeoBody
```

<a id="DesignModeler.IPSGeoEdge"></a>

### *class* DesignModeler.IPSGeoEdge

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines an edge.

> <!-- !! processed by numpydoc !! -->

<a id="id26"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IPSGeoEdge
```

<a id="DesignModeler.IPSGeoEntity"></a>

### *class* DesignModeler.IPSGeoEntity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a generic geometry entity.

> <!-- !! processed by numpydoc !! -->

<a id="id27"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IPSGeoEntity
```

<a id="DesignModeler.IPSGeoFace"></a>

### *class* DesignModeler.IPSGeoFace

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a face.

> <!-- !! processed by numpydoc !! -->

<a id="id28"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IPSGeoFace
```

<a id="DesignModeler.IPSGeoPart"></a>

### *class* DesignModeler.IPSGeoPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a part.

> <!-- !! processed by numpydoc !! -->

<a id="id29"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IPSGeoPart
```

<a id="DesignModeler.IQueries"></a>

### *class* DesignModeler.IQueries

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a list of available queries on the geometry.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Clash`](#DesignModeler.Clash)             | Clash method.                                     |
|---------------------------------------------|---------------------------------------------------|
| [`Distance`](#DesignModeler.Distance)       | Distance method.                                  |
| [`Coincidence`](#DesignModeler.Coincidence) | Checks if 2 geometry entities are coincident.     |
| [`Containment`](#DesignModeler.Containment) | Checks if one geometry entity contains one other. |

<a id="id30"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IQueries
```

<a id="id31"></a>

## Method detail

<a id="DesignModeler.Clash"></a>

### DesignModeler.Clash(targets: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)], tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)])

Clash method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Distance"></a>

### DesignModeler.Distance(targets: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)], tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity)])

Distance method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Coincidence"></a>

### DesignModeler.Coincidence(first: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity), second: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Checks if 2 geometry entities are coincident.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Containment"></a>

### DesignModeler.Containment(bigOne: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity), smallOne: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Checks if one geometry entity contains one other.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IRevolve"></a>

### *class* DesignModeler.IRevolve

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a “Revolve” operation.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ApplyTo`](#id77)   | Applies the operation to a profile given in argument.   |
|----------------------|---------------------------------------------------------|

### Properties

| [`Origin`](#DesignModeler.Origin)   | Gets or sets the origin of the revolution (x, y, z).   |
|-------------------------------------|--------------------------------------------------------|
| [`Axis`](#DesignModeler.Axis)       | Gets or sets the axis of the revolution (x, y, z).     |
| [`Walled`](#id34)                   | Gets or sets the walled flag.                          |
| [`Angle`](#DesignModeler.Angle)     | Gets or sets the angle of the revolution.              |

<a id="id32"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IRevolve
```

<a id="id33"></a>

## Property detail

<a id="DesignModeler.Origin"></a>

### *property* DesignModeler.Origin *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the origin of the revolution (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Axis"></a>

### *property* DesignModeler.Axis *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the axis of the revolution (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* DesignModeler.Walled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the walled flag.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Angle"></a>

### *property* DesignModeler.Angle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the angle of the revolution.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

## Method detail

<a id="id36"></a>

### DesignModeler.ApplyTo(profile: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Applies the operation to a profile given in argument.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISheetCone"></a>

### *class* DesignModeler.ISheetCone

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a sheet cone primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Center`](#id87)    | Gets or sets the center of the cone (x, y, z).    |
|----------------------|---------------------------------------------------|
| [`Direction`](#id63) | Gets or sets the direction of the cone (x, y, z). |
| [`Radius1`](#id58)   | Gets or sets the top radius of the cone.          |
| [`Radius2`](#id59)   | Gets or sets the bottom radius of the cone.       |

<a id="id37"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISheetCone
```

<a id="id38"></a>

## Property detail

<a id="DesignModeler.Center"></a>

### *property* DesignModeler.Center *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the center of the cone (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* DesignModeler.Direction *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the direction of the cone (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Radius1"></a>

### *property* DesignModeler.Radius1 *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the top radius of the cone.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Radius2"></a>

### *property* DesignModeler.Radius2 *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the bottom radius of the cone.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISheetCylinder"></a>

### *class* DesignModeler.ISheetCylinder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a sheet cylinder primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Center`](#id87)    | Gets or sets the center of the cylinder.   |
|----------------------|--------------------------------------------|
| [`Direction`](#id63) | Gets or sets the axis of the cylinder.     |
| [`Radius`](#id81)    | Gets or sets the radius of the cylinder.   |

<a id="id40"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISheetCylinder
```

<a id="id41"></a>

## Property detail

<a id="id42"></a>

### *property* DesignModeler.Center *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the center of the cylinder.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* DesignModeler.Direction *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the axis of the cylinder.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Radius"></a>

### *property* DesignModeler.Radius *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the radius of the cylinder.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISheetPolygon"></a>

### *class* DesignModeler.ISheetPolygon

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a sheet polygon primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Points`](#id92)   | Gets or sets the list of points (x1, y1, z1, x2, y2, z2, …)   |
|---------------------|---------------------------------------------------------------|

<a id="id44"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISheetPolygon
```

<a id="id45"></a>

## Property detail

<a id="DesignModeler.Points"></a>

### *property* DesignModeler.Points *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the list of points (x1, y1, z1, x2, y2, z2, …)

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISheets"></a>

### *class* DesignModeler.ISheets

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the list all creatable sheet geometry primitives.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`CreateCylinder`](#id67)                       | CreateCylinder method.   |
|-------------------------------------------------|--------------------------|
| [`CreatePolygon`](#DesignModeler.CreatePolygon) | CreatePolygon method.    |

<a id="id46"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISheets
```

<a id="id47"></a>

## Method detail

<a id="DesignModeler.CreateCylinder"></a>

### DesignModeler.CreateCylinder(center: System.Collections.Generic.IEnumerable[System.Double], direction: System.Collections.Generic.IEnumerable[System.Double], radius: System.Double)

CreateCylinder method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreatePolygon"></a>

### DesignModeler.CreatePolygon(points: System.Collections.Generic.IEnumerable[System.Double])

CreatePolygon method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISheetSphere"></a>

### *class* DesignModeler.ISheetSphere

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a sheet sphere primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Center`](#id87)   | Gets or sets the center of the sphere.   |
|---------------------|------------------------------------------|
| [`Radius`](#id81)   | Gets or sets the radius of the sphere.   |

<a id="id48"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISheetSphere
```

<a id="id49"></a>

## Property detail

<a id="id50"></a>

### *property* DesignModeler.Center *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the center of the sphere.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* DesignModeler.Radius *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the radius of the sphere.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISolidBox"></a>

### *class* DesignModeler.ISolidBox

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a solid box primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Point1`](#DesignModeler.Point1)   | Gets or sets the first point of the box (x, y, z).   |
|-------------------------------------|------------------------------------------------------|
| [`Point2`](#DesignModeler.Point2)   | Gets or sets the second point of the box (x, y, z).  |

<a id="id52"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISolidBox
```

<a id="id53"></a>

## Property detail

<a id="DesignModeler.Point1"></a>

### *property* DesignModeler.Point1 *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the first point of the box (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Point2"></a>

### *property* DesignModeler.Point2 *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the second point of the box (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISolidCone"></a>

### *class* DesignModeler.ISolidCone

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a solid cone primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Center`](#id87)    | Gets or sets the center of the cone (x, y, z).    |
|----------------------|---------------------------------------------------|
| [`Direction`](#id63) | Gets or sets the direction of the cone (x, y, z). |
| [`Radius1`](#id58)   | Gets or sets the top radius of the cone.          |
| [`Radius2`](#id59)   | Gets or sets the bottom radius of the cone.       |

<a id="id54"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISolidCone
```

<a id="id55"></a>

## Property detail

<a id="id56"></a>

### *property* DesignModeler.Center *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the center of the cone (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* DesignModeler.Direction *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the direction of the cone (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* DesignModeler.Radius1 *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the top radius of the cone.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* DesignModeler.Radius2 *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the bottom radius of the cone.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISolidCylinder"></a>

### *class* DesignModeler.ISolidCylinder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a solid cylinder primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Center`](#id87)    | Gets or sets the center of the cylinder (x, y, z).    |
|----------------------|-------------------------------------------------------|
| [`Direction`](#id63) | Gets or sets the direction of the cylinder (x, y, z). |
| [`Radius`](#id81)    | Gets or sets the radius of the cylinder.              |

<a id="id60"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISolidCylinder
```

<a id="id61"></a>

## Property detail

<a id="id62"></a>

### *property* DesignModeler.Center *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the center of the cylinder (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### *property* DesignModeler.Direction *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the direction of the cylinder (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### *property* DesignModeler.Radius *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the radius of the cylinder.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISolids"></a>

### *class* DesignModeler.ISolids

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the list of all creatable solid geometry primitives.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`CreateBox`](#DesignModeler.CreateBox)       | CreateBox method.      |
|-----------------------------------------------|------------------------|
| [`CreateCone`](#DesignModeler.CreateCone)     | CreateCone method.     |
| [`CreateCylinder`](#id67)                     | CreateCylinder method. |
| [`CreateSphere`](#DesignModeler.CreateSphere) | CreateSphere method.   |

<a id="id65"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISolids
```

<a id="id66"></a>

## Method detail

<a id="DesignModeler.CreateBox"></a>

### DesignModeler.CreateBox(pt1: System.Collections.Generic.IEnumerable[System.Double], pt2: System.Collections.Generic.IEnumerable[System.Double])

CreateBox method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreateCone"></a>

### DesignModeler.CreateCone(center: System.Collections.Generic.IEnumerable[System.Double], direction: System.Collections.Generic.IEnumerable[System.Double], radius1: System.Double, radius2: System.Double)

CreateCone method.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### DesignModeler.CreateCylinder(center: System.Collections.Generic.IEnumerable[System.Double], direction: System.Collections.Generic.IEnumerable[System.Double], radius: System.Double)

CreateCylinder method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreateSphere"></a>

### DesignModeler.CreateSphere(center: System.Collections.Generic.IEnumerable[System.Double], radius: System.Double)

CreateSphere method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISolidSphere"></a>

### *class* DesignModeler.ISolidSphere

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a solid sphere primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Center`](#id87)   | Gets or sets the center of the sphere (x, y, z).   |
|---------------------|----------------------------------------------------|
| [`Radius`](#id81)   | Gets or sets the radius of the sphere.             |

<a id="id68"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISolidSphere
```

<a id="id69"></a>

## Property detail

<a id="id70"></a>

### *property* DesignModeler.Center *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the center of the sphere (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### *property* DesignModeler.Radius *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the radius of the sphere.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ISubtract"></a>

### *class* DesignModeler.ISubtract

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a “Subtract” operation.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ApplyTo`](#id77)   | ApplyTo method.   |
|----------------------|-------------------|

<a id="id72"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import ISubtract
```

<a id="id73"></a>

## Method detail

<a id="id74"></a>

### DesignModeler.ApplyTo(bodiesIn: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

ApplyTo method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IUnion"></a>

### *class* DesignModeler.IUnion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines an “Union” operation.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ApplyTo`](#id77)   | ApplyTo method.   |
|----------------------|-------------------|

<a id="id75"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IUnion
```

<a id="id76"></a>

## Method detail

<a id="id77"></a>

### DesignModeler.ApplyTo(bodiesIn: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

ApplyTo method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IWireArc"></a>

### *class* DesignModeler.IWireArc

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a wire arc primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`StartAngle`](#DesignModeler.StartAngle)   | Gets or sets the start angle of the arc.                   |
|---------------------------------------------|------------------------------------------------------------|
| [`EndAngle`](#DesignModeler.EndAngle)       | Gets or sets the end angle of the arc.                     |
| [`Center`](#id87)                           | Gets or sets the center of the arc (x, y, z).              |
| [`XDir`](#id88)                             | Gets or sets the principal dircetion of the arc (x, y, z). |
| [`Normal`](#id89)                           | Gets or sets the normal of the arc (x, y, z).              |
| [`Radius`](#id81)                           | Gets or sets the radius of the arc.                        |

<a id="id78"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IWireArc
```

<a id="id79"></a>

## Property detail

<a id="DesignModeler.StartAngle"></a>

### *property* DesignModeler.StartAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the start angle of the arc.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.EndAngle"></a>

### *property* DesignModeler.EndAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the end angle of the arc.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### *property* DesignModeler.Center *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the center of the arc (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.XDir"></a>

### *property* DesignModeler.XDir *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the principal dircetion of the arc (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Normal"></a>

### *property* DesignModeler.Normal *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the normal of the arc (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* DesignModeler.Radius *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the radius of the arc.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IWireBCurve"></a>

### *class* DesignModeler.IWireBCurve

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines awire b-curve primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Points`](#id92)                 | Gets or sets the list of points (x1, y1, z1, x2, y2, z2, …).   |
|-----------------------------------|----------------------------------------------------------------|
| [`Closed`](#DesignModeler.Closed) | Gets of sets the closed flag.                                  |

<a id="id82"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IWireBCurve
```

<a id="id83"></a>

## Property detail

<a id="id84"></a>

### *property* DesignModeler.Points *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the list of points (x1, y1, z1, x2, y2, z2, …).

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Closed"></a>

### *property* DesignModeler.Closed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets of sets the closed flag.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IWireEllipse"></a>

### *class* DesignModeler.IWireEllipse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a wire ellipse primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Center`](#id87)                           | Gets or sets the center of the ellipse (x, y, z).              |
|---------------------------------------------|----------------------------------------------------------------|
| [`XDir`](#id88)                             | Gets or sets the principal direction of the ellipse (x, y, z). |
| [`Normal`](#id89)                           | Gets or sets the normal direction of the ellipse (x, y, z).    |
| [`LargeRadius`](#DesignModeler.LargeRadius) | Gets or sets the large radius of the ellipse.                  |
| [`SmallRadius`](#DesignModeler.SmallRadius) | Gets or sets the small radius of the ellipse.                  |

<a id="id85"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IWireEllipse
```

<a id="id86"></a>

## Property detail

<a id="id87"></a>

### *property* DesignModeler.Center *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the center of the ellipse (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* DesignModeler.XDir *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the principal direction of the ellipse (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* DesignModeler.Normal *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the normal direction of the ellipse (x, y, z).

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.LargeRadius"></a>

### *property* DesignModeler.LargeRadius *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the large radius of the ellipse.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.SmallRadius"></a>

### *property* DesignModeler.SmallRadius *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the small radius of the ellipse.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IWirePolyline"></a>

### *class* DesignModeler.IWirePolyline

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a wire polyline primitive.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Points`](#id92)   | Gets or sets the list of points (x1, y1, z1, x2, y2, z2, …).   |
|---------------------|----------------------------------------------------------------|

<a id="id90"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IWirePolyline
```

<a id="id91"></a>

## Property detail

<a id="id92"></a>

### *property* DesignModeler.Points *: System.Collections.Generic.IEnumerable[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the list of points (x1, y1, z1, x2, y2, z2, …).

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IWires"></a>

### *class* DesignModeler.IWires

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines the list of all creatable wire geometry primitives.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`CreateArc`](#DesignModeler.CreateArc)           | CreateArc method.      |
|---------------------------------------------------|------------------------|
| [`CreateEllipse`](#DesignModeler.CreateEllipse)   | CreateEllipse method.  |
| [`CreateBCurve`](#DesignModeler.CreateBCurve)     | CreateBCurve method.   |
| [`CreatePolyline`](#DesignModeler.CreatePolyline) | CreatePolyline method. |

<a id="id93"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IWires
```

<a id="id94"></a>

## Method detail

<a id="DesignModeler.CreateArc"></a>

### DesignModeler.CreateArc(radius: System.Double, center: System.Collections.Generic.IEnumerable[System.Double], xDir: System.Collections.Generic.IEnumerable[System.Double], normal: System.Collections.Generic.IEnumerable[System.Double])

CreateArc method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreateEllipse"></a>

### DesignModeler.CreateEllipse(largeRadius: System.Double, smallRadius: System.Double, center: System.Collections.Generic.IEnumerable[System.Double], xDir: System.Collections.Generic.IEnumerable[System.Double], normal: System.Collections.Generic.IEnumerable[System.Double])

CreateEllipse method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreateBCurve"></a>

### DesignModeler.CreateBCurve(points: System.Collections.Generic.IEnumerable[System.Double])

CreateBCurve method.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreatePolyline"></a>

### DesignModeler.CreatePolyline(points: System.Collections.Generic.IEnumerable[System.Double])

CreatePolyline method.

<!-- !! processed by numpydoc !! -->
