# IOperationTools

### *class* IOperationTools

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a list of tools to manipulate the geometry.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`SimplifyTopology`](#IOperationTools.SimplifyTopology)         | Simplifies the topology of the given entity.   |
|-----------------------------------------------------------------|------------------------------------------------|
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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.DesignModeler import IOperationTools
```

## Method detail

### IOperationTools.SimplifyTopology(entity: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoEntity](IPSGeoEntity.md#IPSGeoEntity))

Simplifies the topology of the given entity.

<!-- !! processed by numpydoc !! -->

### IOperationTools.EdgesToWireBody(edges: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoEdge](IPSGeoEdge.md#IPSGeoEdge)])

EdgesToWireBody method.

<!-- !! processed by numpydoc !! -->

### IOperationTools.FacesToSheetBody(faces: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoFace](IPSGeoFace.md#IPSGeoFace)])

FacesToSheetBody method.

<!-- !! processed by numpydoc !! -->

### IOperationTools.WireToSheetBody(wire: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Transforms a wire body to a sheet body.

<!-- !! processed by numpydoc !! -->

### IOperationTools.SheetBodyToSolidBody(sheet: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Transforms a sheet body to a solid body.

<!-- !! processed by numpydoc !! -->

### IOperationTools.Imprint(target: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody), tools: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

Imprint method.

<!-- !! processed by numpydoc !! -->

### IOperationTools.OffsetFace(faces: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoFace](IPSGeoFace.md#IPSGeoFace)], offset: System.Double)

OffsetFace method.

<!-- !! processed by numpydoc !! -->

### IOperationTools.ThickenBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody), facesToRemove: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoFace](IPSGeoFace.md#IPSGeoFace)], thick1: System.Double, thick2: System.Double)

ThickenBody method.

<!-- !! processed by numpydoc !! -->

### IOperationTools.CopyBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Copies a body.

<!-- !! processed by numpydoc !! -->

### IOperationTools.CreatePart(bodies: System.Collections.Generic.IEnumerable[[Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody)])

CreatePart method.

<!-- !! processed by numpydoc !! -->

### IOperationTools.DeleteBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody))

Deletes a body.

<!-- !! processed by numpydoc !! -->

### IOperationTools.TransformBody(body: [Ansys.ACT.Interfaces.DesignModeler.IPSGeoBody](IPSGeoBody.md#IPSGeoBody), transformation: Ansys.ACT.Math.Matrix4D)

Transform a body.

<!-- !! processed by numpydoc !! -->
