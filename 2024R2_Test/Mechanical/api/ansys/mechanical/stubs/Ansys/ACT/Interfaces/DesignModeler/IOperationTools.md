<a id="ioperationtools"></a>

# IOperationTools

<a id="IOperationTools"></a>

### *class* IOperationTools

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a list of tools to manipulate the geometry.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-----------------------------------------------------------------|------------------------------------------------|
| [`SimplifyTopology`](#IOperationTools.SimplifyTopology)         | Simplifies the topology of the given entity.   |
| [`EdgesToWireBody`](#IOperationTools.EdgesToWireBody)           | EdgesToWireBody method.                        |
| [`FacesToSheetBody`](#IOperationTools.FacesToSheetBody)         | FacesToSheetBody method.                       |
| [`WireToSheetBody`](#IOperationTools.WireToSheetBody)           | Transforms a wire body to a sheet body.        |
| [`SheetBodyToSolidBody`](#IOperationTools.SheetBodyToSolidBody) | Transforms a sheet body to a solid body.       |
| [`Imprint`](#IOperationTools.Imprint)                           | Imprint method.                                |
| [`OffsetFace`](#IOperationTools.OffsetFace)                     | OffsetFace method.                             |
| [`ThickenBody`](#IOperationTools.ThickenBody)                   | ThickenBody method.                            |
| [`CopyBody`](#IOperationTools.CopyBody)                         | Copies a body.                                 |
| [`CreatePart`](#IOperationTools.CreatePart)                     | CreatePart method.                             |
| [`DeleteBody`](#IOperationTools.DeleteBody)                     | Deletes a body.                                |
| [`TransformBody`](#IOperationTools.TransformBody)               | Transform a body.                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IOperationTools
```

<a id="method-detail"></a>

## Method detail

<a id="IOperationTools.SimplifyTopology"></a>

### IOperationTools.SimplifyTopology(entity: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Simplifies the topology of the given entity.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.EdgesToWireBody"></a>

### IOperationTools.EdgesToWireBody(edges: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEdge](IPSGeoEdge.md#IPSGeoEdge)])

EdgesToWireBody method.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.FacesToSheetBody"></a>

### IOperationTools.FacesToSheetBody(faces: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoFace](IPSGeoFace.md#IPSGeoFace)])

FacesToSheetBody method.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.WireToSheetBody"></a>

### IOperationTools.WireToSheetBody(wire: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Transforms a wire body to a sheet body.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.SheetBodyToSolidBody"></a>

### IOperationTools.SheetBodyToSolidBody(sheet: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Transforms a sheet body to a solid body.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.Imprint"></a>

### IOperationTools.Imprint(target: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody), tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

Imprint method.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.OffsetFace"></a>

### IOperationTools.OffsetFace(faces: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoFace](IPSGeoFace.md#IPSGeoFace)], offset: System.Double)

OffsetFace method.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.ThickenBody"></a>

### IOperationTools.ThickenBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody), facesToRemove: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoFace](IPSGeoFace.md#IPSGeoFace)], thick1: System.Double, thick2: System.Double)

ThickenBody method.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.CopyBody"></a>

### IOperationTools.CopyBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Copies a body.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.CreatePart"></a>

### IOperationTools.CreatePart(bodies: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

CreatePart method.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.DeleteBody"></a>

### IOperationTools.DeleteBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Deletes a body.

<!-- !! processed by numpydoc !! -->

<a id="IOperationTools.TransformBody"></a>

### IOperationTools.TransformBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody), transformation: Ansys.ACT.Math.Matrix4D)

Transform a body.

<!-- !! processed by numpydoc !! -->
