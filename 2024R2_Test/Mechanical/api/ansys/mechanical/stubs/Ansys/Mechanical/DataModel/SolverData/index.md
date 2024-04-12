<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData"></a>

<a id="the-solverdata-package"></a>

# The `SolverData` package

<a id="summary"></a>

## Summary

### Classes

| [`MAPDLAMSupportData`](MAPDLAMSupportData.md#MAPDLAMSupportData)                               | MAPDLAMSupportData class.           |
|------------------------------------------------------------------------------------------------|-------------------------------------|
| [`MAPDLBeamData`](MAPDLBeamData.md#MAPDLBeamData)                                              | MAPDLBeamData class.                |
| [`MAPDLBearingData`](MAPDLBearingData.md#MAPDLBearingData)                                     | MAPDLBearingData class.             |
| [`MAPDLBodyData`](MAPDLBodyData.md#MAPDLBodyData)                                              | MAPDLBodyData class.                |
| [`MAPDLBoltPretensionData`](MAPDLBoltPretensionData.md#MAPDLBoltPretensionData)                | MAPDLBoltPretensionData class.      |
| [`MAPDLContactData`](MAPDLContactData.md#MAPDLContactData)                                     | MAPDLContactData class.             |
| [`MAPDLCoordinateSystemData`](MAPDLCoordinateSystemData.md#MAPDLCoordinateSystemData)          | MAPDLCoordinateSystemData class.    |
| [`MAPDLImportedSurfaceLoadData`](MAPDLImportedSurfaceLoadData.md#MAPDLImportedSurfaceLoadData) | MAPDLImportedSurfaceLoadData class. |
| [`MAPDLJointData`](MAPDLJointData.md#MAPDLJointData)                                           | MAPDLJointData class.               |
| [`MAPDLLayeredSectionData`](MAPDLLayeredSectionData.md#MAPDLLayeredSectionData)                | MAPDLLayeredSectionData class.      |
| [`MAPDLRemotePointData`](MAPDLRemotePointData.md#MAPDLRemotePointData)                         | MAPDLRemotePointData class.         |
| [`MAPDLSolverData`](MAPDLSolverData.md#MAPDLSolverData)                                        | MAPDLSolverData class.              |
| [`MAPDLSpringData`](MAPDLSpringData.md#MAPDLSpringData)                                        | MAPDLSpringData class.              |
| [`MAPDLSurfaceCoatingData`](MAPDLSurfaceCoatingData.md#MAPDLSurfaceCoatingData)                | MAPDLSurfaceCoatingData class.      |
| [`MAPDLSurfaceLoadData`](MAPDLSurfaceLoadData.md#MAPDLSurfaceLoadData)                         | MAPDLSurfaceLoadData class.         |
| [`SolverData`](SolverData.md#SolverData)                                                       | SolverData class.                   |

<a id="description"></a>

## Description

SolverData subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="SolverData.MAPDLAMSupportData"></a>

### *class* SolverData.MAPDLAMSupportData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLAMSupportData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`RealConstantId`](#id33)   | Gets the Real Constant Id for the AM Support.   |
|-----------------------------|-------------------------------------------------|
| [`MaterialIds`](#id9)       | Gets the Material Ids for the AM Support.       |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLAMSupportData
```

<a id="property-detail"></a>

## Property detail

<a id="SolverData.RealConstantId"></a>

### *property* SolverData.RealConstantId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Real Constant Id for the AM Support.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MaterialIds"></a>

### *property* SolverData.MaterialIds *: System.Collections.Generic.IEnumerable[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Material Ids for the AM Support.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLBeamData"></a>

### *class* SolverData.MAPDLBeamData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLBeamData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`MaterialId`](#id36)     | Gets the Material Id number for the beam connection.   |
|---------------------------|--------------------------------------------------------|
| [`ElementId`](#id32)      | Gets the Element number for the object.                |
| [`RealConstantId`](#id33) | Gets the Real Constant Id number for the object.       |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLBeamData
```

<a id="id2"></a>

## Property detail

<a id="SolverData.MaterialId"></a>

### *property* SolverData.MaterialId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Material Id number for the beam connection.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.ElementId"></a>

### *property* SolverData.ElementId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Element number for the object.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SolverData.RealConstantId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Real Constant Id number for the object.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLBearingData"></a>

### *class* SolverData.MAPDLBearingData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLBearingData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`ElementId`](#id32)      | Gets the Element number for the object.          |
|---------------------------|--------------------------------------------------|
| [`RealConstantId`](#id33) | Gets the Real Constant Id number for the object. |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLBearingData
```

<a id="id4"></a>

## Property detail

<a id="id5"></a>

### *property* SolverData.ElementId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Element number for the object.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* SolverData.RealConstantId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Real Constant Id number for the object.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLBodyData"></a>

### *class* SolverData.MAPDLBodyData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLBodyData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`ElementTypeIds`](#SolverData.ElementTypeIds)   | Gets the Element Type Ids for the body.   |
|--------------------------------------------------|-------------------------------------------|
| [`MaterialIds`](#id9)                            | Gets the Material Ids for the body.       |
| [`RealConstantId`](#id33)                        | Gets the Real Constant Id for the body.   |

<a id="id7"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLBodyData
```

<a id="id8"></a>

## Property detail

<a id="SolverData.ElementTypeIds"></a>

### *property* SolverData.ElementTypeIds *: System.Collections.Generic.IEnumerable[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Element Type Ids for the body.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* SolverData.MaterialIds *: System.Collections.Generic.IEnumerable[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Material Ids for the body.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* SolverData.RealConstantId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Real Constant Id for the body.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLBoltPretensionData"></a>

### *class* SolverData.MAPDLBoltPretensionData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLBoltPretensionData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`PretensionNodeIds`](#SolverData.PretensionNodeIds)   | Gets the Pretension Node Ids for the bolt pretension.   |
|--------------------------------------------------------|---------------------------------------------------------|
| [`RealConstantIds`](#SolverData.RealConstantIds)       | Gets the Real Constant Ids for the bolt pretension.     |

<a id="id11"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLBoltPretensionData
```

<a id="id12"></a>

## Property detail

<a id="SolverData.PretensionNodeIds"></a>

### *property* SolverData.PretensionNodeIds *: System.Collections.Generic.IEnumerable[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Pretension Node Ids for the bolt pretension.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.RealConstantIds"></a>

### *property* SolverData.RealConstantIds *: System.Collections.Generic.IEnumerable[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Real Constant Ids for the bolt pretension.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLContactData"></a>

### *class* SolverData.MAPDLContactData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLContactData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`SourceId`](#SolverData.SourceId)   | Gets the Source Id of the Contact region.   |
|--------------------------------------|---------------------------------------------|
| [`TargetId`](#SolverData.TargetId)   | Gets the Target Id of the Contact region.   |

<a id="id13"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLContactData
```

<a id="id14"></a>

## Property detail

<a id="SolverData.SourceId"></a>

### *property* SolverData.SourceId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Source Id of the Contact region.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.TargetId"></a>

### *property* SolverData.TargetId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Target Id of the Contact region.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLCoordinateSystemData"></a>

### *class* SolverData.MAPDLCoordinateSystemData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLCoordinateSystemData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`SystemId`](#SolverData.SystemId)   | Gets the System Id for the coordinate system.   |
|--------------------------------------|-------------------------------------------------|

<a id="id15"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLCoordinateSystemData
```

<a id="id16"></a>

## Property detail

<a id="SolverData.SystemId"></a>

### *property* SolverData.SystemId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the System Id for the coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLImportedSurfaceLoadData"></a>

### *class* SolverData.MAPDLImportedSurfaceLoadData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLImportedSurfaceLoadData class.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetSurfaceEffectElementTypeId`](#SolverData.GetSurfaceEffectElementTypeId)   | Gets the SurfaceEffectElementTypeId for the requested load type present in the row   |
|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|

### Properties

| [`LoadTypes`](#SolverData.LoadTypes)   | Gets the load types present in the row.   |
|----------------------------------------|-------------------------------------------|

<a id="id17"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLImportedSurfaceLoadData
```

<a id="id18"></a>

## Property detail

<a id="SolverData.LoadTypes"></a>

### *property* SolverData.LoadTypes *: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.Enums.ExternalModel.ImportedSurfaceLoadType](../Enums/ExternalModel/ImportedSurfaceLoadType.md#ImportedSurfaceLoadType)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the load types present in the row.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SolverData.GetSurfaceEffectElementTypeId"></a>

### SolverData.GetSurfaceEffectElementTypeId(eType: [Ansys.Mechanical.DataModel.Enums.ExternalModel.ImportedSurfaceLoadType](../Enums/ExternalModel/ImportedSurfaceLoadType.md#ImportedSurfaceLoadType))

Gets the SurfaceEffectElementTypeId for the requested load type present in the row

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLJointData"></a>

### *class* SolverData.MAPDLJointData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLJointData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`ElementId`](#id32)      | Gets the Element number for the object.          |
|---------------------------|--------------------------------------------------|
| [`RealConstantId`](#id33) | Gets the Real Constant Id number for the object. |

<a id="id19"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLJointData
```

<a id="id20"></a>

## Property detail

<a id="id21"></a>

### *property* SolverData.ElementId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Element number for the object.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* SolverData.RealConstantId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Real Constant Id number for the object.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLLayeredSectionData"></a>

### *class* SolverData.MAPDLLayeredSectionData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLLayeredSectionData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`SectionId`](#SolverData.SectionId)   | Gets the section Id for the layered section.   |
|----------------------------------------|------------------------------------------------|

<a id="id23"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLLayeredSectionData
```

<a id="id24"></a>

## Property detail

<a id="SolverData.SectionId"></a>

### *property* SolverData.SectionId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the section Id for the layered section.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLRemotePointData"></a>

### *class* SolverData.MAPDLRemotePointData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLRemotePointData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`NodeId`](#SolverData.NodeId)   | Gets the Pilot Node Id number for the remote point.   |
|----------------------------------|-------------------------------------------------------|

<a id="id25"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLRemotePointData
```

<a id="id26"></a>

## Property detail

<a id="SolverData.NodeId"></a>

### *property* SolverData.NodeId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Pilot Node Id number for the remote point.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLSolverData"></a>

### *class* SolverData.MAPDLSolverData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLSolverData class.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetObjectData`](#id41)                                       | GetObjectData method.                                            |
|----------------------------------------------------------------|------------------------------------------------------------------|
| [`ElementIdsByMaterialId`](#SolverData.ElementIdsByMaterialId) | Returns a list of Element IDs that belong to a given Material ID |
| [`NodeIdsByMaterialId`](#SolverData.NodeIdsByMaterialId)       | Returns a list of Node IDs that belong to a given Material ID    |

### Properties

| [`MaxElementId`](#SolverData.MaxElementId)         | Gets the Maximum Element Id number.      |
|----------------------------------------------------|------------------------------------------|
| [`MaxNodeId`](#SolverData.MaxNodeId)               | Gets the Maximum Node Id number.         |
| [`MaxElementTypeId`](#SolverData.MaxElementTypeId) | Gets the Maximum Element Type Id number. |

<a id="id27"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLSolverData
```

<a id="id28"></a>

## Property detail

<a id="SolverData.MaxElementId"></a>

### *property* SolverData.MaxElementId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum Element Id number.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MaxNodeId"></a>

### *property* SolverData.MaxNodeId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum Node Id number.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MaxElementTypeId"></a>

### *property* SolverData.MaxElementTypeId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum Element Type Id number.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

## Method detail

<a id="SolverData.GetObjectData"></a>

### SolverData.GetObjectData(obj: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.ElementIdsByMaterialId"></a>

### SolverData.ElementIdsByMaterialId(matId: System.String)

Returns a list of Element IDs that belong to a given Material ID

<!-- !! processed by numpydoc !! -->

<a id="SolverData.NodeIdsByMaterialId"></a>

### SolverData.NodeIdsByMaterialId(matId: System.String)

Returns a list of Node IDs that belong to a given Material ID

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLSpringData"></a>

### *class* SolverData.MAPDLSpringData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLSpringData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`ElementId`](#id32)      | Gets the Element number for the object.          |
|---------------------------|--------------------------------------------------|
| [`RealConstantId`](#id33) | Gets the Real Constant Id number for the object. |

<a id="id30"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLSpringData
```

<a id="id31"></a>

## Property detail

<a id="id32"></a>

### *property* SolverData.ElementId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Element number for the object.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* SolverData.RealConstantId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Real Constant Id number for the object.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLSurfaceCoatingData"></a>

### *class* SolverData.MAPDLSurfaceCoatingData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLSurfaceCoatingData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`MaterialId`](#id36)   | Gets the Material Id number for the surface coating.   |
|-------------------------|--------------------------------------------------------|

<a id="id34"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLSurfaceCoatingData
```

<a id="id35"></a>

## Property detail

<a id="id36"></a>

### *property* SolverData.MaterialId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Material Id number for the surface coating.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.MAPDLSurfaceLoadData"></a>

### *class* SolverData.MAPDLSurfaceLoadData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> MAPDLSurfaceLoadData class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`SurfaceEffectElementTypeId`](#SolverData.SurfaceEffectElementTypeId)   | Gets the Surface Effect Element Type Id used by the load.   |
|--------------------------------------------------------------------------|-------------------------------------------------------------|

<a id="id37"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import MAPDLSurfaceLoadData
```

<a id="id38"></a>

## Property detail

<a id="SolverData.SurfaceEffectElementTypeId"></a>

### *property* SolverData.SurfaceEffectElementTypeId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Surface Effect Element Type Id used by the load.

<!-- !! processed by numpydoc !! -->

<a id="SolverData.SolverData"></a>

### *class* SolverData.SolverData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> SolverData class.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetObjectData`](#id41)   | Gets the object data.   |
|----------------------------|-------------------------|

<a id="id39"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.SolverData import SolverData
```

<a id="id40"></a>

## Method detail

<a id="id41"></a>

### SolverData.GetObjectData(obj: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Gets the object data.

<!-- !! processed by numpydoc !! -->
