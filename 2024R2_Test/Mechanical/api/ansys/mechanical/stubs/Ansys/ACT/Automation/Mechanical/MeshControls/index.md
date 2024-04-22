<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls"></a>

<a id="the-meshcontrols-package"></a>

# The `MeshControls` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|------------------------------------------------------------|-----------------------------|
| [`Deviation`](Deviation.md#Deviation)                      | Defines a Deviation.        |
| [`RepairTopology`](RepairTopology.md#RepairTopology)       | Defines a RepairTopology.   |
| [`Washer`](Washer.md#Washer)                               | Defines a Washer.           |
| [`Weld`](Weld.md#Weld)                                     | Defines a Weld.             |
| [`Sizing`](Sizing.md#Sizing)                               | Defines a Sizing.           |
| [`AutomaticMethod`](AutomaticMethod.md#AutomaticMethod)    | Defines a AutomaticMethod.  |
| [`Inflation`](Inflation.md#Inflation)                      | Defines a Inflation.        |
| [`Mesh`](Mesh.md#Mesh)                                     | Defines a Mesh.             |
| [`MeshControl`](MeshControl.md#MeshControl)                | Defines a MeshControl.      |
| [`Connect`](Connect.md#Connect)                            | Defines a Connect.          |
| [`ContactSizing`](ContactSizing.md#ContactSizing)          | Defines a ContactSizing.    |
| [`FaceMeshing`](FaceMeshing.md#FaceMeshing)                | Defines a FaceMeshing.      |
| [`FeatureSuppress`](FeatureSuppress.md#FeatureSuppress)    | Defines a FeatureSuppress.  |
| [`GeometryFidelity`](GeometryFidelity.md#GeometryFidelity) | Defines a GeometryFidelity. |
| [`MatchControl`](MatchControl.md#MatchControl)             | Defines a MatchControl.     |
| [`MeshCopy`](MeshCopy.md#MeshCopy)                         | Defines a MeshCopy.         |
| [`Pinch`](Pinch.md#Pinch)                                  | Defines a Pinch.            |
| [`Refinement`](Refinement.md#Refinement)                   | Defines a Refinement.       |
| [`Relevance`](Relevance.md#Relevance)                      | Defines a Relevance.        |

<a id="description"></a>

## Description

MeshControls subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="MeshControls.Deviation"></a>

### *class* MeshControls.Deviation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Deviation.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Tolerance`](#id546)                                                                                                  | Tolerance property.                                           |
| [`MeshSize`](#MeshControls.MeshSize)                                                                                   | MeshSize property.                                            |
| [`NumberOfDivisions`](#id105)                                                                                          | NumberOfDivisions property.                                   |
| [`ControlType`](../../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ControlType)              | Gets or sets the SagControlType.                              |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Deviation
```

<a id="property-detail"></a>

## Property detail

<a id="MeshControls.Tolerance"></a>

### *property* MeshControls.Tolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Tolerance property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MeshSize"></a>

### *property* MeshControls.MeshSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MeshSize property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NumberOfDivisions"></a>

### *property* MeshControls.NumberOfDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ControlType"></a>

### *property* MeshControls.ControlType *: Ansys.Mechanical.DataModel.Enums.DeviationControlType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SagControlType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.InternalObject"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NamedSelection"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Location"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DataModelObjectCategory"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ScopingMethod"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Suppressed"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Children"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Comments"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Figures"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Images"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Properties"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.VisibleProperties"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshControls.GenerateMesh"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RenameBasedOnDefinition"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Delete"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetChildren"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddComment"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddFigure"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddImage"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Activate"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CopyTo"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Duplicate"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GroupAllSimilarChildren"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GroupSimilarObjects"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PropertyByName"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PropertyByAPIName"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CreateParameter"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetParameter"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RemoveParameter"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RepairTopology"></a>

### *class* MeshControls.RepairTopology

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RepairTopology.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`PinchTolerance`](#id228)                                                                                             | Gets or sets the PinchTolerance.                              |
| [`SharpAngle`](#id71)                                                                                                  | Gets or sets the SharpAngle.                                  |
| [`ShortEdgeLength`](#MeshControls.ShortEdgeLength)                                                                     | Gets or sets the ShortEdgeLength.                             |
| [`ThinFaceWidth`](#MeshControls.ThinFaceWidth)                                                                         | Gets or sets the ThinFaceWidth.                               |
| [`CollapseShortEdges`](#MeshControls.CollapseShortEdges)                                                               | Gets or sets the CollapseShortEdges.                          |
| [`FillHole`](#MeshControls.FillHole)                                                                                   | Gets or sets the FillHole.                                    |
| [`FillHoleGeometryDefineBy`](#MeshControls.FillHoleGeometryDefineBy)                                                   | Gets or sets the FillHoleGeometryDefineBy.                    |
| [`MergeFaces`](#MeshControls.MergeFaces)                                                                               | Gets or sets the MergeFaces.                                  |
| [`MergeFacesGeometryDefineBy`](#MeshControls.MergeFacesGeometryDefineBy)                                               | Gets or sets the MergeFacesGeometryDefineBy.                  |
| [`PinchFaces`](#MeshControls.PinchFaces)                                                                               | Gets or sets the PinchFaces.                                  |
| [`PinchFacesGeometryDefineBy`](#MeshControls.PinchFacesGeometryDefineBy)                                               | Gets or sets the PinchFacesGeometryDefineBy.                  |
| [`PinchFacesUseLocalScoping`](#MeshControls.PinchFacesUseLocalScoping)                                                 | Gets or sets the PinchFacesUseLocalScoping.                   |
| [`RemoveSharpAngleFaces`](#MeshControls.RemoveSharpAngleFaces)                                                         | Gets or sets the RemoveSharpAngleFaces.                       |
| [`RemoveThinFaces`](#MeshControls.RemoveThinFaces)                                                                     | Gets or sets the RemoveThinFaces.                             |
| [`SharpAngleGeometryDefineBy`](#MeshControls.SharpAngleGeometryDefineBy)                                               | Gets or sets the SharpAngleGeometryDefineBy.                  |
| [`SharpAngleUseLocalScoping`](#MeshControls.SharpAngleUseLocalScoping)                                                 | Gets or sets the SharpAngleUseLocalScoping.                   |
| [`ShortEdgeGeometryDefineBy`](#MeshControls.ShortEdgeGeometryDefineBy)                                                 | Gets or sets the ShortEdgeGeometryDefineBy.                   |
| [`ShortEdgeUseLocalScoping`](#MeshControls.ShortEdgeUseLocalScoping)                                                   | Gets or sets the ShortEdgeUseLocalScoping.                    |
| [`SuppressEdgesGeometryDefineBy`](#MeshControls.SuppressEdgesGeometryDefineBy)                                         | Gets or sets the SuppressEdgesGeometryDefineBy.               |
| [`SuppressEdges`](#MeshControls.SuppressEdges)                                                                         | Gets or sets the SuppressEdges.                               |
| [`ThinFaceGeometryDefineBy`](#MeshControls.ThinFaceGeometryDefineBy)                                                   | Gets or sets the ThinFaceGeometryDefineBy.                    |
| [`ThinFacesUseLocalScoping`](#MeshControls.ThinFacesUseLocalScoping)                                                   | Gets or sets the ThinFacesUseLocalScoping.                    |
| [`FillHoleNamedSelection`](#MeshControls.FillHoleNamedSelection)                                                       | Gets or sets the FillHoleNamedSelection.                      |
| [`MergeFacesNamedSelection`](#MeshControls.MergeFacesNamedSelection)                                                   | Gets or sets the MergeFacesNamedSelection.                    |
| [`PinchFacesNamedSelection`](#MeshControls.PinchFacesNamedSelection)                                                   | Gets or sets the PinchFacesNamedSelection.                    |
| [`SharpAngleNamedSelection`](#MeshControls.SharpAngleNamedSelection)                                                   | Gets or sets the SharpAngleNamedSelection.                    |
| [`ShortEdgeNamedSelection`](#MeshControls.ShortEdgeNamedSelection)                                                     | Gets or sets the ShortEdgeNamedSelection.                     |
| [`SuppressEdgesNamedSelection`](#MeshControls.SuppressEdgesNamedSelection)                                             | Gets or sets the SuppressEdgesNamedSelection.                 |
| [`ThinFaceNamedSelection`](#MeshControls.ThinFaceNamedSelection)                                                       | Gets or sets the ThinFaceNamedSelection.                      |
| [`FillHoleGeometrySelection`](#MeshControls.FillHoleGeometrySelection)                                                 | Gets or sets the FillHoleGeometrySelection.                   |
| [`MergeFacesGeometrySelection`](#MeshControls.MergeFacesGeometrySelection)                                             | Gets or sets the MergeFacesGeometrySelection.                 |
| [`PinchFacesGeometrySelection`](#MeshControls.PinchFacesGeometrySelection)                                             | Gets or sets the PinchFacesGeometrySelection.                 |
| [`SharpAngleGeometrySelection`](#MeshControls.SharpAngleGeometrySelection)                                             | Gets or sets the SharpAngleGeometrySelection.                 |
| [`ShortEdgeGeometrySelection`](#MeshControls.ShortEdgeGeometrySelection)                                               | Gets or sets the ShortEdgeGeometrySelection.                  |
| [`SuppressEdgesGeometrySelection`](#MeshControls.SuppressEdgesGeometrySelection)                                       | Gets or sets the SuppressEdgesGeometrySelection.              |
| [`ThinFaceGeometrySelection`](#MeshControls.ThinFaceGeometrySelection)                                                 | Gets or sets the ThinFaceGeometrySelection.                   |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import RepairTopology
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PinchTolerance"></a>

### *property* MeshControls.PinchTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SharpAngle"></a>

### *property* MeshControls.SharpAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngle.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShortEdgeLength"></a>

### *property* MeshControls.ShortEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ThinFaceWidth"></a>

### *property* MeshControls.ThinFaceWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceWidth.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CollapseShortEdges"></a>

### *property* MeshControls.CollapseShortEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CollapseShortEdges.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FillHole"></a>

### *property* MeshControls.FillHole *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHole.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FillHoleGeometryDefineBy"></a>

### *property* MeshControls.FillHoleGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MergeFaces"></a>

### *property* MeshControls.MergeFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFaces.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MergeFacesGeometryDefineBy"></a>

### *property* MeshControls.MergeFacesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PinchFaces"></a>

### *property* MeshControls.PinchFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFaces.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PinchFacesGeometryDefineBy"></a>

### *property* MeshControls.PinchFacesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PinchFacesUseLocalScoping"></a>

### *property* MeshControls.PinchFacesUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RemoveSharpAngleFaces"></a>

### *property* MeshControls.RemoveSharpAngleFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveSharpAngleFaces.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RemoveThinFaces"></a>

### *property* MeshControls.RemoveThinFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveThinFaces.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SharpAngleGeometryDefineBy"></a>

### *property* MeshControls.SharpAngleGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SharpAngleUseLocalScoping"></a>

### *property* MeshControls.SharpAngleUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShortEdgeGeometryDefineBy"></a>

### *property* MeshControls.ShortEdgeGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShortEdgeUseLocalScoping"></a>

### *property* MeshControls.ShortEdgeUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SuppressEdgesGeometryDefineBy"></a>

### *property* MeshControls.SuppressEdgesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SuppressEdges"></a>

### *property* MeshControls.SuppressEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdges.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ThinFaceGeometryDefineBy"></a>

### *property* MeshControls.ThinFaceGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ThinFacesUseLocalScoping"></a>

### *property* MeshControls.ThinFacesUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFacesUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FillHoleNamedSelection"></a>

### *property* MeshControls.FillHoleNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MergeFacesNamedSelection"></a>

### *property* MeshControls.MergeFacesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PinchFacesNamedSelection"></a>

### *property* MeshControls.PinchFacesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SharpAngleNamedSelection"></a>

### *property* MeshControls.SharpAngleNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShortEdgeNamedSelection"></a>

### *property* MeshControls.ShortEdgeNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SuppressEdgesNamedSelection"></a>

### *property* MeshControls.SuppressEdgesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ThinFaceNamedSelection"></a>

### *property* MeshControls.ThinFaceNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FillHoleGeometrySelection"></a>

### *property* MeshControls.FillHoleGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MergeFacesGeometrySelection"></a>

### *property* MeshControls.MergeFacesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PinchFacesGeometrySelection"></a>

### *property* MeshControls.PinchFacesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SharpAngleGeometrySelection"></a>

### *property* MeshControls.SharpAngleGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShortEdgeGeometrySelection"></a>

### *property* MeshControls.ShortEdgeGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SuppressEdgesGeometrySelection"></a>

### *property* MeshControls.SuppressEdgesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ThinFaceGeometrySelection"></a>

### *property* MeshControls.ThinFaceGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

## Method detail

<a id="id16"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Washer"></a>

### *class* MeshControls.Washer

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Washer.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfWasherLayers`](#MeshControls.NumberOfWasherLayers)                                                           | NumberOfWasherLayers property.                                |
| [`WasherMethod`](#MeshControls.WasherMethod)                                                                           | WasherMethod property.                                        |
| [`WasherType`](#MeshControls.WasherType)                                                                               | WasherType property.                                          |
| [`NumberOfWasherDivisions`](#MeshControls.NumberOfWasherDivisions)                                                     | NumberOfWasherDivisions property.                             |
| [`MinimumNumberOfWasherDivisions`](#MeshControls.MinimumNumberOfWasherDivisions)                                       | MinimumNumberOfWasherDivisions property.                      |
| [`FactorOfDiameter`](#MeshControls.FactorOfDiameter)                                                                   | FactorOfDiameter property.                                    |
| [`WasherLayerHeight`](#MeshControls.WasherLayerHeight)                                                                 | WasherLayerHeight property.                                   |
| [`GrowthRate`](#id217)                                                                                                 | GrowthRate property.                                          |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id34"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Washer
```

<a id="id35"></a>

## Property detail

<a id="MeshControls.NumberOfWasherLayers"></a>

### *property* MeshControls.NumberOfWasherLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfWasherLayers property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WasherMethod"></a>

### *property* MeshControls.WasherMethod *: Ansys.Mechanical.DataModel.Enums.WasherMethod | [None](https://docs.python.org/3/library/constants.html#None)*

WasherMethod property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WasherType"></a>

### *property* MeshControls.WasherType *: Ansys.Mechanical.DataModel.Enums.WasherType | [None](https://docs.python.org/3/library/constants.html#None)*

WasherType property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NumberOfWasherDivisions"></a>

### *property* MeshControls.NumberOfWasherDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfWasherDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MinimumNumberOfWasherDivisions"></a>

### *property* MeshControls.MinimumNumberOfWasherDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

MinimumNumberOfWasherDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FactorOfDiameter"></a>

### *property* MeshControls.FactorOfDiameter *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

FactorOfDiameter property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WasherLayerHeight"></a>

### *property* MeshControls.WasherLayerHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

WasherLayerHeight property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GrowthRate"></a>

### *property* MeshControls.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

GrowthRate property.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

## Method detail

<a id="id50"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Weld"></a>

### *class* MeshControls.Weld

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Weld.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearWeldControlIntersectionTag`](#MeshControls.ClearWeldControlIntersectionTag)                   | clear the WeldControlIntersectionTag                                              |
| [`AppendWeldControlIntersectionTag`](#MeshControls.AppendWeldControlIntersectionTag)                 | append the WeldControlIntersectionTag                                             |
| [`GenerateWeldIntersectionTag`](#MeshControls.GenerateWeldIntersectionTag)                           | Auto detect Intersection Tags within specified tolerance                          |
| [`ClearAutoWeldIntersectionTag`](#MeshControls.ClearAutoWeldIntersectionTag)                         | Clear Auto Intersection Tags                                                      |
| [`WeldWorksheetStatus`](#MeshControls.WeldWorksheetStatus)                                           | Get state of a given row                                                          |
| [`GetWeldWorksheetNumWarning`](#MeshControls.GetWeldWorksheetNumWarning)                             | Get Number of rows with warnings                                                  |
| [`GetWeldWorksheetNumError`](#MeshControls.GetWeldWorksheetNumError)                                 | Get Number of Errored rows                                                        |
| [`ActivateAllWorksheetEntries`](#MeshControls.ActivateAllWorksheetEntries)                           | set the ActivateAllWorksheetEntries                                               |
| [`DeactivateAllWorksheetEntries`](#MeshControls.DeactivateAllWorksheetEntries)                       | set the DeactivateAllWorksheetEntries                                             |
| [`SetWeldWorksheetActive`](#MeshControls.SetWeldWorksheetActive)                                     | SetWeldWorksheetActive method.                                                    |
| [`GetWeldWorksheetActive`](#MeshControls.GetWeldWorksheetActive)                                     | get the WeldWorksheetActive                                                       |
| [`SetWeldWorksheetEdgeMeshSize`](#MeshControls.SetWeldWorksheetEdgeMeshSize)                         | SetWeldWorksheetEdgeMeshSize method.                                              |
| [`GetWeldWorksheetEdgeMeshSize`](#MeshControls.GetWeldWorksheetEdgeMeshSize)                         | get the WeldControlWorksheetEdgeMeshSize                                          |
| [`SetWeldWorksheetWeldAngle`](#MeshControls.SetWeldWorksheetWeldAngle)                               | SetWeldWorksheetWeldAngle method.                                                 |
| [`GetWeldWorksheetWeldAngle`](#MeshControls.GetWeldWorksheetWeldAngle)                               | get the WeldControlWorksheetWeldAngle                                             |
| [`GetWeldWorksheetHAZDistance`](#MeshControls.GetWeldWorksheetHAZDistance)                           | get the WeldControlWorksheetHAZDistance                                           |
| [`SetWeldWorksheetHAZDistance`](#MeshControls.SetWeldWorksheetHAZDistance)                           | SetWeldWorksheetHAZDistance method.                                               |
| [`GetWeldWorksheetSharpAngle`](#MeshControls.GetWeldWorksheetSharpAngle)                             | get the WeldControlWorksheetSharpAngle                                            |
| [`SetWeldWorksheetSharpAngle`](#MeshControls.SetWeldWorksheetSharpAngle)                             | SetWeldWorksheetSharpAngle method.                                                |
| [`GetWeldWorksheetHeight`](#MeshControls.GetWeldWorksheetHeight)                                     | get the WeldControlWorksheetHeight                                                |
| [`SetWeldWorksheetHeight`](#MeshControls.SetWeldWorksheetHeight)                                     | SetWeldWorksheetHeight method.                                                    |
| [`GetWeldWorksheetLength`](#MeshControls.GetWeldWorksheetLength)                                     | get the WeldControlWorksheetLength                                                |
| [`SetWeldWorksheetLength`](#MeshControls.SetWeldWorksheetLength)                                     | SetWeldWorksheetLength method.                                                    |
| [`GetWeldWorksheetWidth`](#MeshControls.GetWeldWorksheetWidth)                                       | get the WeldControlWorksheetWidth                                                 |
| [`SetWeldWorksheetWidth`](#MeshControls.SetWeldWorksheetWidth)                                       | SetWeldWorksheetWidth method.                                                     |
| [`WeldWorksheetNumEntries`](#MeshControls.WeldWorksheetNumEntries)                                   | Get total number of entries in worksheet                                          |
| [`GetWeldWorksheetPitch`](#MeshControls.GetWeldWorksheetPitch)                                       | get the WeldControlWorksheetPitch                                                 |
| [`SetWeldWorksheetPitch`](#MeshControls.SetWeldWorksheetPitch)                                       | SetWeldWorksheetPitch method.                                                     |
| [`GetWeldWorksheetThickness`](#MeshControls.GetWeldWorksheetThickness)                               | get the WeldControlWorksheetThickness                                             |
| [`SetWeldWorksheetThickness`](#MeshControls.SetWeldWorksheetThickness)                               | SetWeldWorksheetThickness method.                                                 |
| [`GetWeldWorksheetAbsTol`](#MeshControls.GetWeldWorksheetAbsTol)                                     | get the WeldControlWorksheetAbsTol                                                |
| [`SetWeldWorksheetAbsTol`](#MeshControls.SetWeldWorksheetAbsTol)                                     | SetWeldWorksheetAbsTol method.                                                    |
| [`GetWeldWorksheetNumWelds`](#MeshControls.GetWeldWorksheetNumWelds)                                 | get the WeldControlWorksheetNumWelds                                              |
| [`SetWeldWorksheetNumWelds`](#MeshControls.SetWeldWorksheetNumWelds)                                 | SetWeldWorksheetNumWelds method.                                                  |
| [`GetWeldWorksheetOffset1`](#MeshControls.GetWeldWorksheetOffset1)                                   | get the WeldControlWorksheetOffset1                                               |
| [`SetWeldWorksheetOffset1`](#MeshControls.SetWeldWorksheetOffset1)                                   | SetWeldWorksheetOffset1 method.                                                   |
| [`GetWeldWorksheetOffset2`](#MeshControls.GetWeldWorksheetOffset2)                                   | get the WeldControlWorksheetOffset2                                               |
| [`SetWeldWorksheetOffset2`](#MeshControls.SetWeldWorksheetOffset2)                                   | SetWeldWorksheetOffset2 method.                                                   |
| [`GetWeldWorksheetSmoothing`](#MeshControls.GetWeldWorksheetSmoothing)                               | get the WeldControlWorksheetSmoothing option                                      |
| [`SetWeldWorksheetSmoothing`](#MeshControls.SetWeldWorksheetSmoothing)                               | SetWeldWorksheetSmoothing method.                                                 |
| [`GetWeldWorksheetLapAngleTol`](#MeshControls.GetWeldWorksheetLapAngleTol)                           | get the WeldControlWorksheetLapAngleTol                                           |
| [`SetWeldWorksheetLapAngleTol`](#MeshControls.SetWeldWorksheetLapAngleTol)                           | SetWeldWorksheetLapAngleTol method.                                               |
| [`GetWeldWorksheetGenerateEndCaps`](#MeshControls.GetWeldWorksheetGenerateEndCaps)                   | get the WeldControlWorksheetGenerateEndCaps                                       |
| [`SetWeldWorksheetGenerateEndCaps`](#MeshControls.SetWeldWorksheetGenerateEndCaps)                   | SetWeldWorksheetGenerateEndCaps method.                                           |
| [`GetWeldWorksheetHAZGrowthRate`](#MeshControls.GetWeldWorksheetHAZGrowthRate)                       | get the WeldControlWorksheetHAZGrowthRate                                         |
| [`SetWeldWorksheetNumLayers`](#MeshControls.SetWeldWorksheetNumLayers)                               | SetWeldWorksheetNumLayers method.                                                 |
| [`GetWeldWorksheetNumLayers`](#MeshControls.GetWeldWorksheetNumLayers)                               | get the WeldControlWorksheetNumLayers                                             |
| [`SetWeldWorksheetHAZGrowthRate`](#MeshControls.SetWeldWorksheetHAZGrowthRate)                       | SetWeldWorksheetHAZGrowthRate method.                                             |
| [`GetWeldWorksheetMaxThicknessFactor`](#MeshControls.GetWeldWorksheetMaxThicknessFactor)             | get the WeldControlWorksheetMaxThicknessFactor                                    |
| [`SetWeldWorksheetMaxThicknessFactor`](#MeshControls.SetWeldWorksheetMaxThicknessFactor)             | SetWeldWorksheetMaxThicknessFactor method.                                        |
| [`GetWeldWorksheetMinThicknessFactor`](#MeshControls.GetWeldWorksheetMinThicknessFactor)             | get the WeldControlWorksheetMinThicknessFactor                                    |
| [`SetWeldWorksheetMinThicknessFactor`](#MeshControls.SetWeldWorksheetMinThicknessFactor)             | SetWeldWorksheetMinThicknessFactor method.                                        |
| [`GetWeldWorksheetThicknessExpression`](#MeshControls.GetWeldWorksheetThicknessExpression)           | get the WeldControlWorksheetThicknessExpression                                   |
| [`SetWeldWorksheetThicknessExpression`](#MeshControls.SetWeldWorksheetThicknessExpression)           | SetWeldWorksheetThicknessExpression method.                                       |
| [`GetWeldWorksheetEdgeMeshSizeExpression`](#MeshControls.GetWeldWorksheetEdgeMeshSizeExpression)     | get the WeldControlWorksheetEdgeMeshSizeExpression                                |
| [`SetWeldWorksheetEdgeMeshSizeExpression`](#MeshControls.SetWeldWorksheetEdgeMeshSizeExpression)     | SetWeldWorksheetEdgeMeshSizeExpression method.                                    |
| [`GetWeldWorksheetWeldWidthExpression`](#MeshControls.GetWeldWorksheetWeldWidthExpression)           | get the WeldControlWorksheetWeldWidth                                             |
| [`SetWeldWorksheetWeldWidthExpression`](#MeshControls.SetWeldWorksheetWeldWidthExpression)           | SetWeldWorksheetWeldWidthExpression method.                                       |
| [`GetWeldWorksheetWeldHeightExpression`](#MeshControls.GetWeldWorksheetWeldHeightExpression)         | get the WeldControlWorksheetWeldHeight                                            |
| [`SetWeldWorksheetWeldHeightExpression`](#MeshControls.SetWeldWorksheetWeldHeightExpression)         | SetWeldWorksheetWeldHeightExpression method.                                      |
| [`GetWeldWorksheetHAZDistanceExpression`](#MeshControls.GetWeldWorksheetHAZDistanceExpression)       | get the WeldControlWorksheetHAZDistanceExpression                                 |
| [`SetWeldWorksheetHAZDistanceExpression`](#MeshControls.SetWeldWorksheetHAZDistanceExpression)       | SetWeldWorksheetHAZDistanceExpression method.                                     |
| [`GetWeldWorksheetWeldCurve`](#MeshControls.GetWeldWorksheetWeldCurve)                               | get the WeldControlWorksheetWeldCurve                                             |
| [`SetWeldWorksheetWeldCurve`](#MeshControls.SetWeldWorksheetWeldCurve)                               | SetWeldWorksheetWeldCurve method.                                                 |
| [`DeactivateProblematicWorksheetEntries`](#MeshControls.DeactivateProblematicWorksheetEntries)       | Deactivate Problematic Worksheet Entries                                          |
| [`GetWeldWorksheetEdges`](#MeshControls.GetWeldWorksheetEdges)                                       | get the WeldControlWorksheetEdges                                                 |
| [`SetWeldWorksheetEdges`](#MeshControls.SetWeldWorksheetEdges)                                       | SetWeldWorksheetEdges method.                                                     |
| [`GetWeldWorksheetBottomEntities`](#MeshControls.GetWeldWorksheetBottomEntities)                     | get the WeldControlWorksheetBottomEntities                                        |
| [`SetWeldWorksheetBottomEntities`](#MeshControls.SetWeldWorksheetBottomEntities)                     | SetWeldWorksheetBottomEntities method.                                            |
| [`GetWeldWorksheetIntersectionTag`](#MeshControls.GetWeldWorksheetIntersectionTag)                   | get the WeldControlWorksheetIntersectionTag                                       |
| [`SetWeldWorksheetIntersectionTag`](#MeshControls.SetWeldWorksheetIntersectionTag)                   | SetWeldWorksheetIntersectionTag method.                                           |
| [`ClearWeldWorksheetIntersectionTag`](#MeshControls.ClearWeldWorksheetIntersectionTag)               | ClearWeldWorksheetIntersectionTag method.                                         |
| [`AppendWeldWorksheetIntersectionTag`](#MeshControls.AppendWeldWorksheetIntersectionTag)             | AppendWeldWorksheetIntersectionTag method.                                        |
| [`GetWeldWorksheetTopEntities`](#MeshControls.GetWeldWorksheetTopEntities)                           | get the WeldControlWorksheetTopEntities                                           |
| [`SetWeldWorksheetTopEntities`](#MeshControls.SetWeldWorksheetTopEntities)                           | SetWeldWorksheetTopEntities method.                                               |
| [`GetCrossSectionIds`](#MeshControls.GetCrossSectionIds)                                             | get CrossSection Ids                                                              |
| [`GetMaterialIds`](#MeshControls.GetMaterialIds)                                                     | get Material Ids                                                                  |
| [`WeldWorksheetAddEntry`](#MeshControls.WeldWorksheetAddEntry)                                       | add an entry to WeldWorksheet                                                     |
| [`WeldWorksheetDeleteEntry`](#MeshControls.WeldWorksheetDeleteEntry)                                 | WeldWorksheetDeleteEntry method.                                                  |
| [`WeldWorksheetImport`](#MeshControls.WeldWorksheetImport)                                           | import WeldWorksheet                                                              |
| [`WeldWorksheetExport`](#MeshControls.WeldWorksheetExport)                                           | export WeldWorksheet                                                              |
| [`WeldWorksheetCreateControlForCurveBodies`](#MeshControls.WeldWorksheetCreateControlForCurveBodies) | Create worksheet entries for all curve bodies                                     |
| [`AddWeldWorksheetScopeToSelection`](#MeshControls.AddWeldWorksheetScopeToSelection)                 | Create worksheet entry scope to selection                                         |
| [`PromoteToWeldControl`](#MeshControls.PromoteToWeldControl)                                         | PromoteToWeldControl method.                                                      |
| [`PreviewMeshOnWeldWorksheet`](#id251)                                                               | PreviewMeshOnWeldWorksheet method.                                                |
| [`GenerateMesh`](#id628)                                                                             | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629)                                                                  | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                                                                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id632)                                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)                                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)                                                                               | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)                                                                                | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                                                                                 | Creates a new child Image.                                                        |
| [`Activate`](#id636)                                                                                 | Activate the current object.                                                      |
| [`CopyTo`](#id637)                                                                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)                                                                                | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639)                                                                  | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)                                                                      | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)                                                                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)                                                                        | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)                                                                          | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)                                                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)                                                                          | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`BottomEntities`](#MeshControls.BottomEntities)                                                                       | Gets or sets the Bottom Entities (Bodies / Faces ) or Extension.   |
| [`TopEntities`](#MeshControls.TopEntities)                                                                             | Gets or sets the Top Entities (Bodies / Faces ) or Extension.      |
| [`WeldCurves`](#MeshControls.WeldCurves)                                                                               | Gets or sets the Weld Curves.                                      |
| [`WeldCurvesBody`](#MeshControls.WeldCurvesBody)                                                                       | WeldCurvesBody property.                                           |
| [`EdgeSelection`](#MeshControls.EdgeSelection)                                                                         | Gets or sets the Edges.                                            |
| [`ControlType`](../../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ControlType)              | Gets or sets the WeldControlType.                                  |
| [`Source`](#MeshControls.Source)                                                                                       | Gets or sets the WeldControlSource.                                |
| [`ModeledAs`](#MeshControls.ModeledAs)                                                                                 | Gets or sets the WeldControlModeledAs.                             |
| [`WeldElementRows`](#MeshControls.WeldElementRows)                                                                     | Gets or sets the WeldControlElementRows.                           |
| [`Relaxation`](#MeshControls.Relaxation)                                                                               | Gets or sets the WeldControlRelaxation.                            |
| [`WeldTargetShellFace`](#MeshControls.WeldTargetShellFace)                                                             | Gets or sets the WeldTargetShellFace.                              |
| [`WeldFormulation`](#MeshControls.WeldFormulation)                                                                     | Gets or sets the WeldFormulation.                                  |
| [`WeldPinballRadius`](#MeshControls.WeldPinballRadius)                                                                 | Gets or sets the WeldPinballRadius                                 |
| [`AngledDirection`](#MeshControls.AngledDirection)                                                                     | Gets or sets the WeldControlAngledDirection.                       |
| [`CreateUsing`](#MeshControls.CreateUsing)                                                                             | Gets or sets the WeldControlCreateUsing.                           |
| [`UseWorksheet`](#MeshControls.UseWorksheet)                                                                           | Gets or sets the WeldControlUseWorksheet.                          |
| [`CurveScoping`](#MeshControls.CurveScoping)                                                                           | Gets or sets the WeldControlCurveScoping.                          |
| [`CreationCriteria`](#MeshControls.CreationCriteria)                                                                   | Gets or sets the WeldControlCreationCriteria.                      |
| [`ThicknessAssignment`](#MeshControls.ThicknessAssignment)                                                             | Gets or sets the WeldControlThicknessAssignment.                   |
| [`WeldWidthAssignment`](#MeshControls.WeldWidthAssignment)                                                             | Gets or sets the WeldControlWeldWidthAssignment.                   |
| [`EdgeMeshSizeAssignment`](#MeshControls.EdgeMeshSizeAssignment)                                                       | Gets or sets the WeldControlEdgeMeshSizeAssignment.                |
| [`WeldHeightAssignment`](#MeshControls.WeldHeightAssignment)                                                           | Gets or sets the WeldControlWeldHeightAssignment.                  |
| [`HAZDistanceAssignment`](#MeshControls.HAZDistanceAssignment)                                                         | Gets or sets the WeldControlHAZDistanceAssignment.                 |
| [`WeldThicknessExpression`](#MeshControls.WeldThicknessExpression)                                                     | Gets or sets the WeldControlThicknessExpression Value.             |
| [`EdgeMeshSizeExpression`](#MeshControls.EdgeMeshSizeExpression)                                                       | Gets or sets the WeldControlEdgeMeshSizeExpression Value.          |
| [`WeldWidthExpression`](#MeshControls.WeldWidthExpression)                                                             | Gets or sets the WeldControlWeldWidthExpression Value.             |
| [`WeldHeightExpression`](#MeshControls.WeldHeightExpression)                                                           | Gets or sets the WeldControlWeldHeightExpression Value.            |
| [`HAZDistanceExpression`](#MeshControls.HAZDistanceExpression)                                                         | Gets or sets the WeldControlHAZDistanceExpression Value.           |
| [`MaxThicknessFactor`](#MeshControls.MaxThicknessFactor)                                                               | Gets or sets the WeldControlMaxThicknessFactor                     |
| [`MinThicknessFactor`](#MeshControls.MinThicknessFactor)                                                               | Gets or sets the WeldControlMinThicknessFactor                     |
| [`Thickness`](../Thickness.md#Thickness)                                                                               | Gets or sets the WeldControlThickness                              |
| [`AdjustWeldHeight`](#MeshControls.AdjustWeldHeight)                                                                   | Gets or sets the WeldControlAdjustWeldHeight.                      |
| [`CreateHAZLayer`](#MeshControls.CreateHAZLayer)                                                                       | Gets or sets the WeldControlCreateHAZLayer.                        |
| [`WeldHeight`](#MeshControls.WeldHeight)                                                                               | Gets or sets the WeldControlOffsetLayerHeight                      |
| [`WeldAngle`](#MeshControls.WeldAngle)                                                                                 | Gets or sets the WeldAngle.                                        |
| [`SharpAngle`](#id71)                                                                                                  | Gets or sets the WeldSharpAngle.                                   |
| [`LapWeldAngleTolerance`](#MeshControls.LapWeldAngleTolerance)                                                         | Gets or sets the LapWeldAngleTolerance.                            |
| [`EdgeMeshSize`](#MeshControls.EdgeMeshSize)                                                                           | Gets or sets the WeldControlEdgeMeshSize                           |
| [`WeldControlWeldWidth`](#MeshControls.WeldControlWeldWidth)                                                           | Gets or sets the WeldControlWeldWidth                              |
| [`HAZDistance`](#MeshControls.HAZDistance)                                                                             | Gets or sets the WeldControlHAZDistance                            |
| [`WeldLength`](#MeshControls.WeldLength)                                                                               | Gets or sets the WeldControlOffsetLayerHeight                      |
| [`WeldPitch`](#MeshControls.WeldPitch)                                                                                 | Gets or sets the WeldControlOffsetLayerHeight                      |
| [`NumberOfWelds`](#MeshControls.NumberOfWelds)                                                                         | Gets or sets WeldControlNumberOfLayers                             |
| [`Offset1`](#MeshControls.Offset1)                                                                                     | Gets or sets the WeldControlOffsetLayerHeight                      |
| [`Offset2`](#MeshControls.Offset2)                                                                                     | Gets or sets the WeldControlOffsetLayerHeight                      |
| [`HAZGrowthRate`](#MeshControls.HAZGrowthRate)                                                                         | Gets or sets the WeldControlHAZGrowthRate                          |
| [`ConnectionTolerance`](#id304)                                                                                        | Gets or sets the WeldControlConnectionTolerance                    |
| [`NumberOfLayers`](#id178)                                                                                             | Gets or sets WeldControlNumberOfLayers                             |
| [`GenerateNamedSelection`](#MeshControls.GenerateNamedSelection)                                                       | Gets or sets the WeldControlGenerateNamedSelection.                |
| [`GenerateEndCaps`](#MeshControls.GenerateEndCaps)                                                                     | Gets or sets the WeldControlSmoothing.                             |
| [`WriteDefinitionFile`](#MeshControls.WriteDefinitionFile)                                                             | Gets or sets the WeldControlSmoothing.                             |
| [`WeldDefinitionFileLocation`](#MeshControls.WeldDefinitionFileLocation)                                               | Gets or sets the WeldDefinitionFile Location.                      |
| [`WeldIntersectionTag`](#MeshControls.WeldIntersectionTag)                                                             | Gets or sets the WeldControlIntersectionTag Value.                 |
| [`WeldIntersectionTolerance`](#MeshControls.WeldIntersectionTolerance)                                                 | Gets or sets the WeldControlIntersectionTolerance Value.           |
| [`Smoothing`](../Results/Smoothing.md#Smoothing)                                                                       | Gets or sets the WeldControlSmoothing.                             |
| [`CrossSectionId`](#MeshControls.CrossSectionId)                                                                       | Gets or sets the WeldControlCrossSectionId.                        |
| [`MaterialId`](#MeshControls.MaterialId)                                                                               | Gets or sets the WeldControlMaterialId.                            |
| [`NameFilter`](#MeshControls.NameFilter)                                                                               | Gets or sets the NameFilter.                                       |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.                 |
| [`WeldEdgesNamedSelection`](#MeshControls.WeldEdgesNamedSelection)                                                     | Gets or sets the WeldEdgesNamedSelection.                          |
| [`BottomEntitiesNamedSelection`](#MeshControls.BottomEntitiesNamedSelection)                                           | Gets or sets the BottomEntitiesNamedSelection.                     |
| [`TopEntitiesNamedSelection`](#MeshControls.TopEntitiesNamedSelection)                                                 | Gets or sets the TopEntitiesNamedSelection.                        |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                       |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                                    |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                       |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                         |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                              |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                               |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                                |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.                 |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                       |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object.      |

<a id="id68"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Weld
```

<a id="id69"></a>

## Property detail

<a id="MeshControls.BottomEntities"></a>

### *property* MeshControls.BottomEntities *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Bottom Entities (Bodies / Faces ) or Extension.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TopEntities"></a>

### *property* MeshControls.TopEntities *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Top Entities (Bodies / Faces ) or Extension.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldCurves"></a>

### *property* MeshControls.WeldCurves *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Weld Curves.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldCurvesBody"></a>

### *property* MeshControls.WeldCurvesBody *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

WeldCurvesBody property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.EdgeSelection"></a>

### *property* MeshControls.EdgeSelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Edges.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### *property* MeshControls.ControlType *: Ansys.Mechanical.DataModel.Enums.WeldType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Source"></a>

### *property* MeshControls.Source *: Ansys.Mechanical.DataModel.Enums.WeldSource | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSource.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ModeledAs"></a>

### *property* MeshControls.ModeledAs *: Ansys.Mechanical.DataModel.Enums.WeldModeledAs | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlModeledAs.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldElementRows"></a>

### *property* MeshControls.WeldElementRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlElementRows.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Relaxation"></a>

### *property* MeshControls.Relaxation *: Ansys.Mechanical.DataModel.Enums.WeldRelaxation | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlRelaxation.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldTargetShellFace"></a>

### *property* MeshControls.WeldTargetShellFace *: Ansys.Mechanical.DataModel.Enums.WeldTargetShellFaceType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldTargetShellFace.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldFormulation"></a>

### *property* MeshControls.WeldFormulation *: [Ansys.Mechanical.DataModel.Enums.ContactFormulation](../../../../Mechanical/DataModel/Enums/ContactFormulation.md#ContactFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldFormulation.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldPinballRadius"></a>

### *property* MeshControls.WeldPinballRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldPinballRadius

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AngledDirection"></a>

### *property* MeshControls.AngledDirection *: Ansys.Mechanical.DataModel.Enums.WeldAngledDirection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlAngledDirection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CreateUsing"></a>

### *property* MeshControls.CreateUsing *: Ansys.Mechanical.DataModel.Enums.WeldCreateUsing | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCreateUsing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.UseWorksheet"></a>

### *property* MeshControls.UseWorksheet *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlUseWorksheet.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CurveScoping"></a>

### *property* MeshControls.CurveScoping *: Ansys.Mechanical.DataModel.Enums.WeldCurveScoping | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCurveScoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CreationCriteria"></a>

### *property* MeshControls.CreationCriteria *: Ansys.Mechanical.DataModel.Enums.WeldCreationCriteria | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCreationCriteria.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ThicknessAssignment"></a>

### *property* MeshControls.ThicknessAssignment *: Ansys.Mechanical.DataModel.Enums.WeldThickness | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlThicknessAssignment.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldWidthAssignment"></a>

### *property* MeshControls.WeldWidthAssignment *: Ansys.Mechanical.DataModel.Enums.WeldWidthAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldWidthAssignment.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.EdgeMeshSizeAssignment"></a>

### *property* MeshControls.EdgeMeshSizeAssignment *: Ansys.Mechanical.DataModel.Enums.WeldEdgeMeshSizeAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlEdgeMeshSizeAssignment.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldHeightAssignment"></a>

### *property* MeshControls.WeldHeightAssignment *: Ansys.Mechanical.DataModel.Enums.WeldHeightAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldHeightAssignment.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.HAZDistanceAssignment"></a>

### *property* MeshControls.HAZDistanceAssignment *: Ansys.Mechanical.DataModel.Enums.WeldHAZDistanceAssignment | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZDistanceAssignment.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldThicknessExpression"></a>

### *property* MeshControls.WeldThicknessExpression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlThicknessExpression Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.EdgeMeshSizeExpression"></a>

### *property* MeshControls.EdgeMeshSizeExpression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlEdgeMeshSizeExpression Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldWidthExpression"></a>

### *property* MeshControls.WeldWidthExpression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldWidthExpression Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldHeightExpression"></a>

### *property* MeshControls.WeldHeightExpression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldHeightExpression Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.HAZDistanceExpression"></a>

### *property* MeshControls.HAZDistanceExpression *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZDistanceExpression Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MaxThicknessFactor"></a>

### *property* MeshControls.MaxThicknessFactor *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlMaxThicknessFactor

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MinThicknessFactor"></a>

### *property* MeshControls.MinThicknessFactor *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlMinThicknessFactor

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Thickness"></a>

### *property* MeshControls.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlThickness

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AdjustWeldHeight"></a>

### *property* MeshControls.AdjustWeldHeight *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlAdjustWeldHeight.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CreateHAZLayer"></a>

### *property* MeshControls.CreateHAZLayer *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCreateHAZLayer.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldHeight"></a>

### *property* MeshControls.WeldHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldAngle"></a>

### *property* MeshControls.WeldAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldAngle.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### *property* MeshControls.SharpAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldSharpAngle.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.LapWeldAngleTolerance"></a>

### *property* MeshControls.LapWeldAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LapWeldAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.EdgeMeshSize"></a>

### *property* MeshControls.EdgeMeshSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlEdgeMeshSize

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldControlWeldWidth"></a>

### *property* MeshControls.WeldControlWeldWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlWeldWidth

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.HAZDistance"></a>

### *property* MeshControls.HAZDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZDistance

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldLength"></a>

### *property* MeshControls.WeldLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldPitch"></a>

### *property* MeshControls.WeldPitch *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NumberOfWelds"></a>

### *property* MeshControls.NumberOfWelds *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets WeldControlNumberOfLayers

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Offset1"></a>

### *property* MeshControls.Offset1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Offset2"></a>

### *property* MeshControls.Offset2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlOffsetLayerHeight

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.HAZGrowthRate"></a>

### *property* MeshControls.HAZGrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlHAZGrowthRate

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ConnectionTolerance"></a>

### *property* MeshControls.ConnectionTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlConnectionTolerance

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NumberOfLayers"></a>

### *property* MeshControls.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets WeldControlNumberOfLayers

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GenerateNamedSelection"></a>

### *property* MeshControls.GenerateNamedSelection *: Ansys.Mechanical.DataModel.Enums.WeldGeneratedNamedSelection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlGenerateNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GenerateEndCaps"></a>

### *property* MeshControls.GenerateEndCaps *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WriteDefinitionFile"></a>

### *property* MeshControls.WriteDefinitionFile *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldDefinitionFileLocation"></a>

### *property* MeshControls.WeldDefinitionFileLocation *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldDefinitionFile Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldIntersectionTag"></a>

### *property* MeshControls.WeldIntersectionTag *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlIntersectionTag Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldIntersectionTolerance"></a>

### *property* MeshControls.WeldIntersectionTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlIntersectionTolerance Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Smoothing"></a>

### *property* MeshControls.Smoothing *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CrossSectionId"></a>

### *property* MeshControls.CrossSectionId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlCrossSectionId.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MaterialId"></a>

### *property* MeshControls.MaterialId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldControlMaterialId.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NameFilter"></a>

### *property* MeshControls.NameFilter *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NameFilter.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldEdgesNamedSelection"></a>

### *property* MeshControls.WeldEdgesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldEdgesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.BottomEntitiesNamedSelection"></a>

### *property* MeshControls.BottomEntitiesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomEntitiesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TopEntitiesNamedSelection"></a>

### *property* MeshControls.TopEntitiesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopEntitiesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

## Method detail

<a id="MeshControls.ClearWeldControlIntersectionTag"></a>

### MeshControls.ClearWeldControlIntersectionTag()

clear the WeldControlIntersectionTag

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AppendWeldControlIntersectionTag"></a>

### MeshControls.AppendWeldControlIntersectionTag(val: System.String)

append the WeldControlIntersectionTag

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GenerateWeldIntersectionTag"></a>

### MeshControls.GenerateWeldIntersectionTag()

Auto detect Intersection Tags within specified tolerance

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ClearAutoWeldIntersectionTag"></a>

### MeshControls.ClearAutoWeldIntersectionTag(includeInactive: System.Boolean)

Clear Auto Intersection Tags

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldWorksheetStatus"></a>

### MeshControls.WeldWorksheetStatus(rowIndex: System.Int32)

Get state of a given row

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetNumWarning"></a>

### MeshControls.GetWeldWorksheetNumWarning()

Get Number of rows with warnings

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetNumError"></a>

### MeshControls.GetWeldWorksheetNumError()

Get Number of Errored rows

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ActivateAllWorksheetEntries"></a>

### MeshControls.ActivateAllWorksheetEntries()

set the ActivateAllWorksheetEntries

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DeactivateAllWorksheetEntries"></a>

### MeshControls.DeactivateAllWorksheetEntries()

set the DeactivateAllWorksheetEntries

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetActive"></a>

### MeshControls.SetWeldWorksheetActive(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Boolean)

SetWeldWorksheetActive method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetActive"></a>

### MeshControls.GetWeldWorksheetActive(rowIndex: System.Int32)

get the WeldWorksheetActive

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetEdgeMeshSize"></a>

### MeshControls.SetWeldWorksheetEdgeMeshSize(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetEdgeMeshSize method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetEdgeMeshSize"></a>

### MeshControls.GetWeldWorksheetEdgeMeshSize(rowIndex: System.Int32)

get the WeldControlWorksheetEdgeMeshSize

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetWeldAngle"></a>

### MeshControls.SetWeldWorksheetWeldAngle(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetWeldAngle method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetWeldAngle"></a>

### MeshControls.GetWeldWorksheetWeldAngle(rowIndex: System.Int32)

get the WeldControlWorksheetWeldAngle

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetHAZDistance"></a>

### MeshControls.GetWeldWorksheetHAZDistance(rowIndex: System.Int32)

get the WeldControlWorksheetHAZDistance

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetHAZDistance"></a>

### MeshControls.SetWeldWorksheetHAZDistance(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetHAZDistance method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetSharpAngle"></a>

### MeshControls.GetWeldWorksheetSharpAngle(rowIndex: System.Int32)

get the WeldControlWorksheetSharpAngle

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetSharpAngle"></a>

### MeshControls.SetWeldWorksheetSharpAngle(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetSharpAngle method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetHeight"></a>

### MeshControls.GetWeldWorksheetHeight(rowIndex: System.Int32)

get the WeldControlWorksheetHeight

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetHeight"></a>

### MeshControls.SetWeldWorksheetHeight(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetHeight method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetLength"></a>

### MeshControls.GetWeldWorksheetLength(rowIndex: System.Int32)

get the WeldControlWorksheetLength

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetLength"></a>

### MeshControls.SetWeldWorksheetLength(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetLength method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetWidth"></a>

### MeshControls.GetWeldWorksheetWidth(rowIndex: System.Int32)

get the WeldControlWorksheetWidth

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetWidth"></a>

### MeshControls.SetWeldWorksheetWidth(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetWidth method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldWorksheetNumEntries"></a>

### MeshControls.WeldWorksheetNumEntries()

Get total number of entries in worksheet

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetPitch"></a>

### MeshControls.GetWeldWorksheetPitch(rowIndex: System.Int32)

get the WeldControlWorksheetPitch

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetPitch"></a>

### MeshControls.SetWeldWorksheetPitch(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetPitch method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetThickness"></a>

### MeshControls.GetWeldWorksheetThickness(rowIndex: System.Int32)

get the WeldControlWorksheetThickness

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetThickness"></a>

### MeshControls.SetWeldWorksheetThickness(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetThickness method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetAbsTol"></a>

### MeshControls.GetWeldWorksheetAbsTol(rowIndex: System.Int32)

get the WeldControlWorksheetAbsTol

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetAbsTol"></a>

### MeshControls.SetWeldWorksheetAbsTol(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetAbsTol method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetNumWelds"></a>

### MeshControls.GetWeldWorksheetNumWelds(rowIndex: System.Int32)

get the WeldControlWorksheetNumWelds

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetNumWelds"></a>

### MeshControls.SetWeldWorksheetNumWelds(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Int32)

SetWeldWorksheetNumWelds method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetOffset1"></a>

### MeshControls.GetWeldWorksheetOffset1(rowIndex: System.Int32)

get the WeldControlWorksheetOffset1

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetOffset1"></a>

### MeshControls.SetWeldWorksheetOffset1(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetOffset1 method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetOffset2"></a>

### MeshControls.GetWeldWorksheetOffset2(rowIndex: System.Int32)

get the WeldControlWorksheetOffset2

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetOffset2"></a>

### MeshControls.SetWeldWorksheetOffset2(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetOffset2 method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetSmoothing"></a>

### MeshControls.GetWeldWorksheetSmoothing(rowIndex: System.Int32)

get the WeldControlWorksheetSmoothing option

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetSmoothing"></a>

### MeshControls.SetWeldWorksheetSmoothing(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Boolean)

SetWeldWorksheetSmoothing method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetLapAngleTol"></a>

### MeshControls.GetWeldWorksheetLapAngleTol(rowIndex: System.Int32)

get the WeldControlWorksheetLapAngleTol

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetLapAngleTol"></a>

### MeshControls.SetWeldWorksheetLapAngleTol(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetLapAngleTol method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetGenerateEndCaps"></a>

### MeshControls.GetWeldWorksheetGenerateEndCaps(rowIndex: System.Int32)

get the WeldControlWorksheetGenerateEndCaps

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetGenerateEndCaps"></a>

### MeshControls.SetWeldWorksheetGenerateEndCaps(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Boolean)

SetWeldWorksheetGenerateEndCaps method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetHAZGrowthRate"></a>

### MeshControls.GetWeldWorksheetHAZGrowthRate(rowIndex: System.Int32)

get the WeldControlWorksheetHAZGrowthRate

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetNumLayers"></a>

### MeshControls.SetWeldWorksheetNumLayers(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Int32)

SetWeldWorksheetNumLayers method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetNumLayers"></a>

### MeshControls.GetWeldWorksheetNumLayers(rowIndex: System.Int32)

get the WeldControlWorksheetNumLayers

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetHAZGrowthRate"></a>

### MeshControls.SetWeldWorksheetHAZGrowthRate(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetHAZGrowthRate method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetMaxThicknessFactor"></a>

### MeshControls.GetWeldWorksheetMaxThicknessFactor(rowIndex: System.Int32)

get the WeldControlWorksheetMaxThicknessFactor

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetMaxThicknessFactor"></a>

### MeshControls.SetWeldWorksheetMaxThicknessFactor(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetMaxThicknessFactor method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetMinThicknessFactor"></a>

### MeshControls.GetWeldWorksheetMinThicknessFactor(rowIndex: System.Int32)

get the WeldControlWorksheetMinThicknessFactor

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetMinThicknessFactor"></a>

### MeshControls.SetWeldWorksheetMinThicknessFactor(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.Double)

SetWeldWorksheetMinThicknessFactor method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetThicknessExpression"></a>

### MeshControls.GetWeldWorksheetThicknessExpression(rowIndex: System.Int32)

get the WeldControlWorksheetThicknessExpression

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetThicknessExpression"></a>

### MeshControls.SetWeldWorksheetThicknessExpression(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetThicknessExpression method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetEdgeMeshSizeExpression"></a>

### MeshControls.GetWeldWorksheetEdgeMeshSizeExpression(rowIndex: System.Int32)

get the WeldControlWorksheetEdgeMeshSizeExpression

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetEdgeMeshSizeExpression"></a>

### MeshControls.SetWeldWorksheetEdgeMeshSizeExpression(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetEdgeMeshSizeExpression method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetWeldWidthExpression"></a>

### MeshControls.GetWeldWorksheetWeldWidthExpression(rowIndex: System.Int32)

get the WeldControlWorksheetWeldWidth

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetWeldWidthExpression"></a>

### MeshControls.SetWeldWorksheetWeldWidthExpression(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetWeldWidthExpression method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetWeldHeightExpression"></a>

### MeshControls.GetWeldWorksheetWeldHeightExpression(rowIndex: System.Int32)

get the WeldControlWorksheetWeldHeight

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetWeldHeightExpression"></a>

### MeshControls.SetWeldWorksheetWeldHeightExpression(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetWeldHeightExpression method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetHAZDistanceExpression"></a>

### MeshControls.GetWeldWorksheetHAZDistanceExpression(rowIndex: System.Int32)

get the WeldControlWorksheetHAZDistanceExpression

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetHAZDistanceExpression"></a>

### MeshControls.SetWeldWorksheetHAZDistanceExpression(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetHAZDistanceExpression method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetWeldCurve"></a>

### MeshControls.GetWeldWorksheetWeldCurve(rowIndex: System.Int32)

get the WeldControlWorksheetWeldCurve

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetWeldCurve"></a>

### MeshControls.SetWeldWorksheetWeldCurve(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.UInt32)

SetWeldWorksheetWeldCurve method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DeactivateProblematicWorksheetEntries"></a>

### MeshControls.DeactivateProblematicWorksheetEntries()

Deactivate Problematic Worksheet Entries

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetEdges"></a>

### MeshControls.GetWeldWorksheetEdges(rowIndex: System.Int32)

get the WeldControlWorksheetEdges

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetEdges"></a>

### MeshControls.SetWeldWorksheetEdges(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.UInt32)

SetWeldWorksheetEdges method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetBottomEntities"></a>

### MeshControls.GetWeldWorksheetBottomEntities(rowIndex: System.Int32)

get the WeldControlWorksheetBottomEntities

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetBottomEntities"></a>

### MeshControls.SetWeldWorksheetBottomEntities(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.UInt32)

SetWeldWorksheetBottomEntities method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetIntersectionTag"></a>

### MeshControls.GetWeldWorksheetIntersectionTag(rowIndex: System.Int32)

get the WeldControlWorksheetIntersectionTag

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetIntersectionTag"></a>

### MeshControls.SetWeldWorksheetIntersectionTag(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

SetWeldWorksheetIntersectionTag method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ClearWeldWorksheetIntersectionTag"></a>

### MeshControls.ClearWeldWorksheetIntersectionTag(rowIndices: System.Collections.Generic.IEnumerable[System.Int32])

ClearWeldWorksheetIntersectionTag method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AppendWeldWorksheetIntersectionTag"></a>

### MeshControls.AppendWeldWorksheetIntersectionTag(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.String)

AppendWeldWorksheetIntersectionTag method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetWeldWorksheetTopEntities"></a>

### MeshControls.GetWeldWorksheetTopEntities(rowIndex: System.Int32)

get the WeldControlWorksheetTopEntities

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetWeldWorksheetTopEntities"></a>

### MeshControls.SetWeldWorksheetTopEntities(rowIndices: System.Collections.Generic.IEnumerable[System.Int32], val: System.UInt32)

SetWeldWorksheetTopEntities method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetCrossSectionIds"></a>

### MeshControls.GetCrossSectionIds(rowIndex: System.Int32)

get CrossSection Ids

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetMaterialIds"></a>

### MeshControls.GetMaterialIds(rowIndex: System.Int32)

get Material Ids

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldWorksheetAddEntry"></a>

### MeshControls.WeldWorksheetAddEntry()

add an entry to WeldWorksheet

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldWorksheetDeleteEntry"></a>

### MeshControls.WeldWorksheetDeleteEntry(indices: System.Collections.Generic.IEnumerable[System.Int32])

WeldWorksheetDeleteEntry method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldWorksheetImport"></a>

### MeshControls.WeldWorksheetImport(fileName: System.String)

import WeldWorksheet

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldWorksheetExport"></a>

### MeshControls.WeldWorksheetExport(fileName: System.String)

export WeldWorksheet

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WeldWorksheetCreateControlForCurveBodies"></a>

### MeshControls.WeldWorksheetCreateControlForCurveBodies()

Create worksheet entries for all curve bodies

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddWeldWorksheetScopeToSelection"></a>

### MeshControls.AddWeldWorksheetScopeToSelection(index: System.Int32, subset: System.Int32)

Create worksheet entry scope to selection

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PromoteToWeldControl"></a>

### MeshControls.PromoteToWeldControl(indices: System.Collections.Generic.IEnumerable[System.Int32])

PromoteToWeldControl method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PreviewMeshOnWeldWorksheet"></a>

### MeshControls.PreviewMeshOnWeldWorksheet(rowIndices: System.Collections.Generic.IEnumerable[System.Int32])

PreviewMeshOnWeldWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Sizing"></a>

### *class* MeshControls.Sizing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Sizing.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BodyOfInfluence`](#MeshControls.BodyOfInfluence)                                                                     | Gets the BodyOfInfluence.                                     |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`BiasGrowthRate`](#MeshControls.BiasGrowthRate)                                                                       | Gets or sets the BiasGrowthRate.                              |
| [`NumberOfDivisions`](#id105)                                                                                          | Gets or sets the NumberOfDivisions.                           |
| [`GrowthRate`](#id217)                                                                                                 | Gets or sets the GrowthRate.                                  |
| [`BiasFactor`](#MeshControls.BiasFactor)                                                                               | Gets or sets the BiasFactor.                                  |
| [`ElementSize`](#id342)                                                                                                | Gets or sets the ElementSize.                                 |
| [`SphereRadius`](#MeshControls.SphereRadius)                                                                           | Gets or sets the SphereRadius.                                |
| [`DefeatureSize`](#MeshControls.DefeatureSize)                                                                         | Gets or sets the DefeatureSize.                               |
| [`LocalMinimumSize`](#MeshControls.LocalMinimumSize)                                                                   | Gets or sets the LocalMinimumSize.                            |
| [`ProximityGapFactor`](#id222)                                                                                         | Gets or sets the ProximityGapFactor.                          |
| [`ProximityMinimumSize`](#id229)                                                                                       | Gets or sets the ProximityMinimumSize.                        |
| [`CurvatureNormalAngle`](#id230)                                                                                       | Gets or sets the CurvatureNormalAngle.                        |
| [`OriginX`](#MeshControls.OriginX)                                                                                     | Gets the OriginX.                                             |
| [`OriginY`](#MeshControls.OriginY)                                                                                     | Gets the OriginY.                                             |
| [`OriginZ`](#MeshControls.OriginZ)                                                                                     | Gets the OriginZ.                                             |
| [`BiasOption`](#MeshControls.BiasOption)                                                                               | Gets or sets the BiasOption.                                  |
| [`ProximitySizeSources`](#id232)                                                                                       | Gets or sets the ProximitySizeSources.                        |
| [`Behavior`](#MeshControls.Behavior)                                                                                   | Gets or sets the Behavior.                                    |
| [`Type`](#id341)                                                                                                       | Gets or sets the Type.                                        |
| [`BiasType`](#MeshControls.BiasType)                                                                                   | Gets or sets the BiasType.                                    |
| [`Active`](#id377)                                                                                                     | Gets the Active.                                              |
| [`CaptureCurvature`](#id233)                                                                                           | Gets or sets the CaptureCurvature.                            |
| [`CaptureProximity`](#id234)                                                                                           | Gets or sets the CaptureProximity.                            |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`SphereCenter`](#MeshControls.SphereCenter)                                                                           | Gets or sets the SphereCenter.                                |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                    |
| [`ReverseBias`](#MeshControls.ReverseBias)                                                                             | Gets or sets the ReverseBias.                                 |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id102"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Sizing
```

<a id="id103"></a>

## Property detail

<a id="MeshControls.BodyOfInfluence"></a>

### *property* MeshControls.BodyOfInfluence *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BodyOfInfluence.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.BiasGrowthRate"></a>

### *property* MeshControls.BiasGrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasGrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* MeshControls.NumberOfDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* MeshControls.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.BiasFactor"></a>

### *property* MeshControls.BiasFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ElementSize"></a>

### *property* MeshControls.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SphereRadius"></a>

### *property* MeshControls.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DefeatureSize"></a>

### *property* MeshControls.DefeatureSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.LocalMinimumSize"></a>

### *property* MeshControls.LocalMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocalMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ProximityGapFactor"></a>

### *property* MeshControls.ProximityGapFactor *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityGapFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ProximityMinimumSize"></a>

### *property* MeshControls.ProximityMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CurvatureNormalAngle"></a>

### *property* MeshControls.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.OriginX"></a>

### *property* MeshControls.OriginX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginX.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.OriginY"></a>

### *property* MeshControls.OriginY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginY.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.OriginZ"></a>

### *property* MeshControls.OriginZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OriginZ.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.BiasOption"></a>

### *property* MeshControls.BiasOption *: Ansys.Mechanical.DataModel.Enums.BiasOptionType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ProximitySizeSources"></a>

### *property* MeshControls.ProximitySizeSources *: [Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType](../../../../Mechanical/DataModel/Enums/ProximitySFSourcesType.md#ProximitySFSourcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximitySizeSources.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Behavior"></a>

### *property* MeshControls.Behavior *: [Ansys.Mechanical.DataModel.Enums.SizingBehavior](../../../../Mechanical/DataModel/Enums/SizingBehavior.md#SizingBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Type"></a>

### *property* MeshControls.Type *: [Ansys.Mechanical.DataModel.Enums.SizingType](../../../../Mechanical/DataModel/Enums/SizingType.md#SizingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.BiasType"></a>

### *property* MeshControls.BiasType *: Ansys.Mechanical.DataModel.Enums.BiasType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BiasType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Active"></a>

### *property* MeshControls.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CaptureCurvature"></a>

### *property* MeshControls.CaptureCurvature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureCurvature.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CaptureProximity"></a>

### *property* MeshControls.CaptureProximity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureProximity.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SphereCenter"></a>

### *property* MeshControls.SphereCenter *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereCenter.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ReverseBias"></a>

### *property* MeshControls.ReverseBias *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseBias.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

## Method detail

<a id="id120"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AutomaticMethod"></a>

### *class* MeshControls.AutomaticMethod

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AutomaticMethod.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`AggressiveInflateOption`](#MeshControls.AggressiveInflateOption)                                                     | Gets or sets the AggressiveInflateOption.                                                        |
| [`AggressiveTetImprovement`](#MeshControls.AggressiveTetImprovement)                                                   | Gets or sets the AggressiveTetImprovement.                                                       |
| [`ControlMessages`](#id481)                                                                                            | Gets the ControlMessages.                                                                        |
| [`CornerAngle`](#MeshControls.CornerAngle)                                                                             | Gets or sets the CornerAngle.                                                                    |
| [`DefeatureLayerVolume`](#MeshControls.DefeatureLayerVolume)                                                           | Gets or sets the DefeatureLayerVolume.                                                           |
| [`ElementMidsideNodes`](#MeshControls.ElementMidsideNodes)                                                             | Gets or sets the ElementMidsideNodes.                                                            |
| [`ElementOrder`](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ElementOrder)                                  | Gets or sets the ElementOrder.                                                                   |
| [`GenerateLayersUsingFacets`](#MeshControls.GenerateLayersUsingFacets)                                                 | Gets or sets the GenerateLayersUsingFacets.                                                      |
| [`InflateRelativeTolerance`](#MeshControls.InflateRelativeTolerance)                                                   | Gets or sets the InflateRelativeTolerance.                                                       |
| [`LayerHeight`](#MeshControls.LayerHeight)                                                                             | Gets or sets the LayerHeight.                                                                    |
| [`LayerStart`](#MeshControls.LayerStart)                                                                               | Gets or sets the LayerStart.                                                                     |
| [`MeshInCenter`](#MeshControls.MeshInCenter)                                                                           | Gets or sets the MeshInCenter.                                                                   |
| [`Method`](#id376)                                                                                                     | Gets or sets the Method.                                                                         |
| [`OverlappingAngle`](#MeshControls.OverlappingAngle)                                                                   | Gets or sets the OverlappingAngle.                                                               |
| [`ProjectCornersToTop`](#MeshControls.ProjectCornersToTop)                                                             | Gets or sets the ProjectCornersToTop.                                                            |
| [`RelativeTolerance`](#MeshControls.RelativeTolerance)                                                                 | Gets or sets the PrimeRelativeTolerance.                                                         |
| [`RepairFacets`](#MeshControls.RepairFacets)                                                                           | Gets or sets the RepairFacets.                                                                   |
| [`SlicerFeatureAngle`](#MeshControls.SlicerFeatureAngle)                                                               | Gets or sets the SlicerFeatureAngle.                                                             |
| [`SliverTriangleHeight`](#MeshControls.SliverTriangleHeight)                                                           | Gets or sets the SliverTriangleHeight.                                                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.                                               |
| [`ProjectionFactor`](#MeshControls.ProjectionFactor)                                                                   | Gets or sets the ProjectionFactor.                                                               |
| [`StretchFactorX`](#MeshControls.StretchFactorX)                                                                       | Gets or sets the StretchFactorX.                                                                 |
| [`StretchFactorY`](#MeshControls.StretchFactorY)                                                                       | Gets or sets the StretchFactorY.                                                                 |
| [`StretchFactorZ`](#MeshControls.StretchFactorZ)                                                                       | Gets or sets the StretchFactorZ.                                                                 |
| [`SpacingOption`](#MeshControls.SpacingOption)                                                                         | Gets or sets the SpacingOption.                                                                  |
| [`SubsampleRate`](#MeshControls.SubsampleRate)                                                                         | Gets or sets the SubsampleRate.                                                                  |
| [`BFCartSubType`](#MeshControls.BFCartSubType)                                                                         | Gets the BFCartSubType.                                                                          |
| [`Refinement`](Refinement.md#Refinement)                                                                               | Gets or sets the Refinement.                                                                     |
| [`ApproximativeNumberOfElementsPerPart`](#MeshControls.ApproximativeNumberOfElementsPerPart)                           | Gets or sets the ApproximativeNumberOfElementsPerPart.                                           |
| [`DecompositionType`](#MeshControls.DecompositionType)                                                                 | Gets or sets the MZDecompositionType in Multizone ( 0 = Standard, 1 = ThinSweep, 2 = CartSweep). |
| [`CartSweepSpacingOption`](#MeshControls.CartSweepSpacingOption)                                                       | Gets or sets the  CartSweep SpacingOption in Multizone ( 0 = Uniform, 1 = Key-Points).           |
| [`SurfaceMeshMethod`](#MeshControls.SurfaceMeshMethod)                                                                 | Gets or sets the SurfaceMeshMethod.                                                              |
| [`SweepNumberDivisions`](#MeshControls.SweepNumberDivisions)                                                           | Gets or sets the SweepNumberDivisions.                                                           |
| [`NumberOfCellsAcrossGap`](#MeshControls.NumberOfCellsAcrossGap)                                                       | Gets or sets the NumberOfCellsAcrossGap.                                                         |
| [`FilletCollapse`](#MeshControls.FilletCollapse)                                                                       | Gets or sets the FilletCollapse for AutoNodeMove under PCTet ( 0 = No, 1 = ProgramControlled ).  |
| [`ImprovementIterations`](#MeshControls.ImprovementIterations)                                                         | Gets or sets the ImprovementIterations for AutoNodeMove under PCTet.                             |
| [`TetraGrowthRate`](#MeshControls.TetraGrowthRate)                                                                     | Gets or sets the TetraGrowthRate.                                                                |
| [`PreserveBoundaries`](#MeshControls.PreserveBoundaries)                                                               | Gets or sets the PreserveBoundaries.                                                             |
| [`SourceTargetSelection`](#MeshControls.SourceTargetSelection)                                                         | Gets or sets the SourceTargetSelection.                                                          |
| [`LateralDefeatureSize`](#MeshControls.LateralDefeatureSize)                                                           | Gets or sets the LateralDefeatureSize.                                                           |
| [`StackingDefeatureSize`](#MeshControls.StackingDefeatureSize)                                                         | Gets or sets the StackingDefeatureSize.                                                          |
| [`FreeMeshType`](#MeshControls.FreeMeshType)                                                                           | Gets or sets the FreeMeshType.                                                                   |
| [`MappedSweptType`](#MeshControls.MappedSweptType)                                                                     | Gets or sets the MappedSweptType.                                                                |
| [`SweepBiasValue`](#MeshControls.SweepBiasValue)                                                                       | Gets or sets the SweepBiasValue.                                                                 |
| [`SweepESizeType`](#MeshControls.SweepESizeType)                                                                       | Gets or sets the SweepESizeType.                                                                 |
| [`FreeFaceMeshType`](#MeshControls.FreeFaceMeshType)                                                                   | Gets or sets the FreeFaceMeshType.                                                               |
| [`SweepSizeBehavior`](#MeshControls.SweepSizeBehavior)                                                                 | Gets or sets the SweepSizeBehavior.                                                              |
| [`WallThickness`](#MeshControls.WallThickness)                                                                         | Gets or sets the WallThickness.                                                                  |
| [`BFCartTolerance`](#MeshControls.BFCartTolerance)                                                                     | Gets the BFCartTolerance.                                                                        |
| [`CartesianSize`](#MeshControls.CartesianSize)                                                                         | Gets or sets the CartesianSize in Multizone.                                                     |
| [`CurvatureNormalAngle`](#id230)                                                                                       | Gets or sets the CurvatureNormalAngle.                                                           |
| [`SweepElementSize`](#MeshControls.SweepElementSize)                                                                   | Gets or sets the SweepElementSize.                                                               |
| [`MaximumElementSize`](#MeshControls.MaximumElementSize)                                                               | Gets or sets the MaximumElementSize.                                                             |
| [`MinimumSizeLimit`](#MeshControls.MinimumSizeLimit)                                                                   | Gets or sets the MinimumSizeLimit.                                                               |
| [`KeyPointsTolerance`](#MeshControls.KeyPointsTolerance)                                                               | Gets or sets the KeyPoints Tolerance in Multizone.                                               |
| [`MinimumEdgeLength`](#id227)                                                                                          | Gets the MinimumEdgeLength.                                                                      |
| [`DefeaturingTolerance`](#MeshControls.DefeaturingTolerance)                                                           | Gets or sets the DefeaturingTolerance.                                                           |
| [`ParticleDiameter`](#MeshControls.ParticleDiameter)                                                                   | Gets or sets the ParticleDiameter.                                                               |
| [`FeatureProtectionAngle`](#MeshControls.FeatureProtectionAngle)                                                       | Gets or sets the DihedralAngle for AutoNodeMove under PCTet.                                     |
| [`FeatureAngle`](#MeshControls.FeatureAngle)                                                                           | Gets or sets the FeatureAngle.                                                                   |
| [`SplitAngle`](#MeshControls.SplitAngle)                                                                               | Gets or sets the SplitAngle in Multizone.                                                        |
| [`SweepThickness`](#MeshControls.SweepThickness)                                                                       | Gets or sets the SweepThickness in Multizone.                                                    |
| [`KeyPointsSelection`](#MeshControls.KeyPointsSelection)                                                               | Gets or sets the KeyPointsSelection.                                                             |
| [`DefinedBy`](#MeshControls.DefinedBy)                                                                                 | Gets or sets the DefinedBy.                                                                      |
| [`ElementOption`](#MeshControls.ElementOption)                                                                         | Gets or sets the ElementOption.                                                                  |
| [`AutomaticNodeMovement`](#MeshControls.AutomaticNodeMovement)                                                         | Gets or sets the AutomaticNodeMovement method under PCTet.                                       |
| [`MeshType`](#MeshControls.MeshType)                                                                                   | Gets or sets the MeshType.                                                                       |
| [`TriangleReduction`](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#TriangleReduction)                   | Gets or sets the TriangleReduction.                                                              |
| [`StackingAxis`](#MeshControls.StackingAxis)                                                                           | Gets or sets the StackingAxis.                                                                   |
| [`StackerFreeFaceMeshType`](#MeshControls.StackerFreeFaceMeshType)                                                     | Gets or sets the StackerFreeFaceMeshType.                                                        |
| [`StackerTriangleReduction`](#MeshControls.StackerTriangleReduction)                                                   | Gets or sets the StackerTriangleReduction.                                                       |
| [`Algorithm`](#MeshControls.Algorithm)                                                                                 | Gets or sets the Algorithm.                                                                      |
| [`SweepBiasType`](#MeshControls.SweepBiasType)                                                                         | Gets or sets the SweepBiasType.                                                                  |
| [`Active`](#id377)                                                                                                     | Gets the Active.                                                                                 |
| [`ProjectInConstantZPlane`](#MeshControls.ProjectInConstantZPlane)                                                     | Gets or sets the ProjectInConstantZPlane.                                                        |
| [`MeshUsingVoxelization`](#MeshControls.MeshUsingVoxelization)                                                         | Gets or sets the MeshUsingVoxelization.                                                          |
| [`ConstrainBoundary`](#id375)                                                                                          | Gets or sets the ConstrainBoundary.                                                              |
| [`MeshBasedDefeaturing`](#MeshControls.MeshBasedDefeaturing)                                                           | Gets or sets the MeshBasedDefeaturing.                                                           |
| [`MatchMeshWherePossible`](#MeshControls.MatchMeshWherePossible)                                                       | Gets or sets the MatchMeshWherePossible.                                                         |
| [`SmoothMeshSpacing`](#MeshControls.SmoothMeshSpacing)                                                                 | Gets or sets the SmoothMeshSpacing in Multizone.                                                 |
| [`RestrictNodeMovementsToSurface`](#MeshControls.RestrictNodeMovementsToSurface)                                       | Gets or sets the RestrictNodeMovementsToSurface for AutoNodeMove under PCTet.                    |
| [`ShowAdvancedImproveOptions`](#MeshControls.ShowAdvancedImproveOptions)                                               | Gets or sets the ShowAdvancedImproveOptions for AutoNodeMove under PCTet.                        |
| [`SmoothTransition`](#MeshControls.SmoothTransition)                                                                   | Gets or sets the SmoothTransition.                                                               |
| [`ReuseBlocking`](#MeshControls.ReuseBlocking)                                                                         | Gets or sets the ReuseBlocking.                                                                  |
| [`UseSplitAngle`](#MeshControls.UseSplitAngle)                                                                         | Gets or sets the UseSplitAngle in Multizone.                                                     |
| [`WriteICEMCFDFiles`](#MeshControls.WriteICEMCFDFiles)                                                                 | Gets or sets the WriteICEMCFDFiles.                                                              |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                                                               |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                                                                 |
| [`StackerCoordinateSystem`](#MeshControls.StackerCoordinateSystem)                                                     | Gets or sets the StackerCoordinateSystem.                                                        |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                                                       |
| [`SourceLocation`](#id413)                                                                                             | Gets or sets the SourceLocation.                                                                 |
| [`SweepEdges`](#MeshControls.SweepEdges)                                                                               | Gets or sets the SweepEdges.                                                                     |
| [`TargetLocation`](#MeshControls.TargetLocation)                                                                       | Gets or sets the TargetLocation.                                                                 |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                                                                  |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                                                     |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                                                       |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                                                            |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                                                             |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                                                              |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object.                                    |

<a id="id138"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import AutomaticMethod
```

<a id="id139"></a>

## Property detail

<a id="MeshControls.AggressiveInflateOption"></a>

### *property* MeshControls.AggressiveInflateOption *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveInflateOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AggressiveTetImprovement"></a>

### *property* MeshControls.AggressiveTetImprovement *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveTetImprovement.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ControlMessages"></a>

### *property* MeshControls.ControlMessages *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ControlMessages.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CornerAngle"></a>

### *property* MeshControls.CornerAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CornerAngle.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DefeatureLayerVolume"></a>

### *property* MeshControls.DefeatureLayerVolume *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureLayerVolume.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ElementMidsideNodes"></a>

### *property* MeshControls.ElementMidsideNodes *: [Ansys.Mechanical.DataModel.Enums.ElementMidsideNodesType](../../../../Mechanical/DataModel/Enums/ElementMidsideNodesType.md#ElementMidsideNodesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementMidsideNodes.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ElementOrder"></a>

### *property* MeshControls.ElementOrder *: [Ansys.Mechanical.DataModel.Enums.ElementOrder](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ElementOrder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOrder.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GenerateLayersUsingFacets"></a>

### *property* MeshControls.GenerateLayersUsingFacets *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateLayersUsingFacets.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.InflateRelativeTolerance"></a>

### *property* MeshControls.InflateRelativeTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflateRelativeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.LayerHeight"></a>

### *property* MeshControls.LayerHeight *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.LayerStart"></a>

### *property* MeshControls.LayerStart *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerStart.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MeshInCenter"></a>

### *property* MeshControls.MeshInCenter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshInCenter.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Method"></a>

### *property* MeshControls.Method *: [Ansys.Mechanical.DataModel.Enums.MethodType](../../../../Mechanical/DataModel/Enums/MethodType.md#MethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.OverlappingAngle"></a>

### *property* MeshControls.OverlappingAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OverlappingAngle.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ProjectCornersToTop"></a>

### *property* MeshControls.ProjectCornersToTop *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectCornersToTop.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RelativeTolerance"></a>

### *property* MeshControls.RelativeTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimeRelativeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RepairFacets"></a>

### *property* MeshControls.RepairFacets *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RepairFacets.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SlicerFeatureAngle"></a>

### *property* MeshControls.SlicerFeatureAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlicerFeatureAngle.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SliverTriangleHeight"></a>

### *property* MeshControls.SliverTriangleHeight *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SliverTriangleHeight.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ProjectionFactor"></a>

### *property* MeshControls.ProjectionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectionFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.StretchFactorX"></a>

### *property* MeshControls.StretchFactorX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorX.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.StretchFactorY"></a>

### *property* MeshControls.StretchFactorY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorY.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.StretchFactorZ"></a>

### *property* MeshControls.StretchFactorZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorZ.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SpacingOption"></a>

### *property* MeshControls.SpacingOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpacingOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SubsampleRate"></a>

### *property* MeshControls.SubsampleRate *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.BFCartSubType"></a>

### *property* MeshControls.BFCartSubType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BFCartSubType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Refinement"></a>

### *property* MeshControls.Refinement *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Refinement.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ApproximativeNumberOfElementsPerPart"></a>

### *property* MeshControls.ApproximativeNumberOfElementsPerPart *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApproximativeNumberOfElementsPerPart.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DecompositionType"></a>

### *property* MeshControls.DecompositionType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MZDecompositionType in Multizone ( 0 = Standard, 1 = ThinSweep, 2 = CartSweep).

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CartSweepSpacingOption"></a>

### *property* MeshControls.CartSweepSpacingOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  CartSweep SpacingOption in Multizone ( 0 = Uniform, 1 = Key-Points).

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SurfaceMeshMethod"></a>

### *property* MeshControls.SurfaceMeshMethod *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SurfaceMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SweepNumberDivisions"></a>

### *property* MeshControls.SweepNumberDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepNumberDivisions.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NumberOfCellsAcrossGap"></a>

### *property* MeshControls.NumberOfCellsAcrossGap *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfCellsAcrossGap.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FilletCollapse"></a>

### *property* MeshControls.FilletCollapse *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilletCollapse for AutoNodeMove under PCTet ( 0 = No, 1 = ProgramControlled ).

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ImprovementIterations"></a>

### *property* MeshControls.ImprovementIterations *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImprovementIterations for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TetraGrowthRate"></a>

### *property* MeshControls.TetraGrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TetraGrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PreserveBoundaries"></a>

### *property* MeshControls.PreserveBoundaries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreserveBoundaries.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SourceTargetSelection"></a>

### *property* MeshControls.SourceTargetSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceTargetSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.LateralDefeatureSize"></a>

### *property* MeshControls.LateralDefeatureSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LateralDefeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.StackingDefeatureSize"></a>

### *property* MeshControls.StackingDefeatureSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackingDefeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FreeMeshType"></a>

### *property* MeshControls.FreeMeshType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeMeshType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MappedSweptType"></a>

### *property* MeshControls.MappedSweptType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MappedSweptType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SweepBiasValue"></a>

### *property* MeshControls.SweepBiasValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepBiasValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SweepESizeType"></a>

### *property* MeshControls.SweepESizeType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepESizeType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FreeFaceMeshType"></a>

### *property* MeshControls.FreeFaceMeshType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeFaceMeshType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SweepSizeBehavior"></a>

### *property* MeshControls.SweepSizeBehavior *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepSizeBehavior.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WallThickness"></a>

### *property* MeshControls.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.BFCartTolerance"></a>

### *property* MeshControls.BFCartTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BFCartTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CartesianSize"></a>

### *property* MeshControls.CartesianSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CartesianSize in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* MeshControls.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SweepElementSize"></a>

### *property* MeshControls.SweepElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepElementSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MaximumElementSize"></a>

### *property* MeshControls.MaximumElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumElementSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MinimumSizeLimit"></a>

### *property* MeshControls.MinimumSizeLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSizeLimit.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.KeyPointsTolerance"></a>

### *property* MeshControls.KeyPointsTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeyPoints Tolerance in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MinimumEdgeLength"></a>

### *property* MeshControls.MinimumEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DefeaturingTolerance"></a>

### *property* MeshControls.DefeaturingTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeaturingTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ParticleDiameter"></a>

### *property* MeshControls.ParticleDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticleDiameter.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FeatureProtectionAngle"></a>

### *property* MeshControls.FeatureProtectionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DihedralAngle for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FeatureAngle"></a>

### *property* MeshControls.FeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FeatureAngle.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SplitAngle"></a>

### *property* MeshControls.SplitAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SplitAngle in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SweepThickness"></a>

### *property* MeshControls.SweepThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepThickness in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.KeyPointsSelection"></a>

### *property* MeshControls.KeyPointsSelection *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeyPointsSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DefinedBy"></a>

### *property* MeshControls.DefinedBy *: [Ansys.Mechanical.DataModel.Enums.PatchIndependentDefineType](../../../../Mechanical/DataModel/Enums/PatchIndependentDefineType.md#PatchIndependentDefineType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefinedBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ElementOption"></a>

### *property* MeshControls.ElementOption *: [Ansys.Mechanical.DataModel.Enums.SweepElementOptionType](../../../../Mechanical/DataModel/Enums/SweepElementOptionType.md#SweepElementOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AutomaticNodeMovement"></a>

### *property* MeshControls.AutomaticNodeMovement *: [Ansys.Mechanical.DataModel.Enums.AutomaticNodeMovementMethod](../../../../Mechanical/DataModel/Enums/AutomaticNodeMovementMethod.md#AutomaticNodeMovementMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticNodeMovement method under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MeshType"></a>

### *property* MeshControls.MeshType *: [Ansys.Mechanical.DataModel.Enums.MethodMeshType](../../../../Mechanical/DataModel/Enums/MethodMeshType.md#MethodMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TriangleReduction"></a>

### *property* MeshControls.TriangleReduction *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleReduction.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.StackingAxis"></a>

### *property* MeshControls.StackingAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackingAxis.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.StackerFreeFaceMeshType"></a>

### *property* MeshControls.StackerFreeFaceMeshType *: [Ansys.Mechanical.DataModel.Enums.StackerMethodMeshType](../../../../Mechanical/DataModel/Enums/StackerMethodMeshType.md#StackerMethodMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerFreeFaceMeshType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.StackerTriangleReduction"></a>

### *property* MeshControls.StackerTriangleReduction *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerTriangleReduction.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Algorithm"></a>

### *property* MeshControls.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MeshMethodAlgorithm](../../../../Mechanical/DataModel/Enums/MeshMethodAlgorithm.md#MeshMethodAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Algorithm.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SweepBiasType"></a>

### *property* MeshControls.SweepBiasType *: Ansys.Mechanical.DataModel.Enums.BiasType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepBiasType.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* MeshControls.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ProjectInConstantZPlane"></a>

### *property* MeshControls.ProjectInConstantZPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectInConstantZPlane.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MeshUsingVoxelization"></a>

### *property* MeshControls.MeshUsingVoxelization *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshUsingVoxelization.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ConstrainBoundary"></a>

### *property* MeshControls.ConstrainBoundary *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstrainBoundary.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MeshBasedDefeaturing"></a>

### *property* MeshControls.MeshBasedDefeaturing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshBasedDefeaturing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MatchMeshWherePossible"></a>

### *property* MeshControls.MatchMeshWherePossible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MatchMeshWherePossible.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SmoothMeshSpacing"></a>

### *property* MeshControls.SmoothMeshSpacing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothMeshSpacing in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RestrictNodeMovementsToSurface"></a>

### *property* MeshControls.RestrictNodeMovementsToSurface *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestrictNodeMovementsToSurface for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShowAdvancedImproveOptions"></a>

### *property* MeshControls.ShowAdvancedImproveOptions *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAdvancedImproveOptions for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SmoothTransition"></a>

### *property* MeshControls.SmoothTransition *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothTransition.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ReuseBlocking"></a>

### *property* MeshControls.ReuseBlocking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReuseBlocking.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.UseSplitAngle"></a>

### *property* MeshControls.UseSplitAngle *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseSplitAngle in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.WriteICEMCFDFiles"></a>

### *property* MeshControls.WriteICEMCFDFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WriteICEMCFDFiles.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CoordinateSystem"></a>

### *property* MeshControls.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.StackerCoordinateSystem"></a>

### *property* MeshControls.StackerCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SourceLocation"></a>

### *property* MeshControls.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SweepEdges"></a>

### *property* MeshControls.SweepEdges *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepEdges.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TargetLocation"></a>

### *property* MeshControls.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

## Method detail

<a id="id156"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Inflation"></a>

### *class* MeshControls.Inflation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Inflation.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryLocation`](#MeshControls.BoundaryLocation)                                                                   | Gets or sets the BoundaryLocation.                            |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`GrowthRate`](#id217)                                                                                                 | Gets or sets the GrowthRate.                                  |
| [`InflationAlgorithm`](#id218)                                                                                         | Gets or sets the InflationAlgorithm.                          |
| [`InflationOption`](#id219)                                                                                            | Gets or sets the InflationOption.                             |
| [`AspectRatio`](#id220)                                                                                                | Gets or sets the AspectRatio.                                 |
| [`MaximumLayers`](#id221)                                                                                              | Gets or sets the MaximumLayers.                               |
| [`NumberOfLayers`](#id178)                                                                                             | Gets or sets the NumberOfLayers.                              |
| [`TransitionRatio`](#id224)                                                                                            | Gets or sets the TransitionRatio.                             |
| [`FirstLayerHeight`](#id225)                                                                                           | Gets or sets the FirstLayerHeight.                            |
| [`MaximumThickness`](#id226)                                                                                           | Gets or sets the MaximumThickness.                            |
| [`Active`](#id377)                                                                                                     | Gets the Active.                                              |
| [`BoundaryNamedSelection`](#MeshControls.BoundaryNamedSelection)                                                       | Gets or sets the BoundaryNamedSelection.                      |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id174"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Inflation
```

<a id="id175"></a>

## Property detail

<a id="MeshControls.BoundaryLocation"></a>

### *property* MeshControls.BoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* MeshControls.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.InflationAlgorithm"></a>

### *property* MeshControls.InflationAlgorithm *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.InflationOption"></a>

### *property* MeshControls.InflationOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AspectRatio"></a>

### *property* MeshControls.AspectRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MaximumLayers"></a>

### *property* MeshControls.MaximumLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumLayers.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* MeshControls.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TransitionRatio"></a>

### *property* MeshControls.TransitionRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionRatio.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FirstLayerHeight"></a>

### *property* MeshControls.FirstLayerHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FirstLayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MaximumThickness"></a>

### *property* MeshControls.MaximumThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumThickness.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* MeshControls.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.BoundaryNamedSelection"></a>

### *property* MeshControls.BoundaryNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

## Method detail

<a id="id193"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Mesh"></a>

### *class* MeshControls.Mesh

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Mesh.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddContactSizing`](#MeshControls.AddContactSizing)                                                                         | Creates a new ContactSizing                                                       |
| [`AddFaceMeshing`](#MeshControls.AddFaceMeshing)                                                                             | Creates a new FaceMeshing                                                         |
| [`AddInflation`](#MeshControls.AddInflation)                                                                                 | Creates a new Inflation                                                           |
| [`AddMatchControl`](#MeshControls.AddMatchControl)                                                                           | Creates a new MatchControl                                                        |
| [`AddPinch`](#MeshControls.AddPinch)                                                                                         | Creates a new Pinch                                                               |
| [`AddRefinement`](#MeshControls.AddRefinement)                                                                               | Creates a new Refinement                                                          |
| [`AddSizing`](#MeshControls.AddSizing)                                                                                       | Creates a new Sizing                                                              |
| [`CreatePinchControls`](#MeshControls.CreatePinchControls)                                                                   | Run the CreatePinchControls action.                                               |
| [`GenerateMesh`](#id628)                                                                                                     | Run the GenerateMesh action.                                                      |
| [`PreviewInflation`](#MeshControls.PreviewInflation)                                                                         | Run the PreviewInflation action.                                                  |
| [`PreviewSurfaceMesh`](#MeshControls.PreviewSurfaceMesh)                                                                     | Run the PreviewSurfaceMesh action.                                                |
| [`ShowFeatureSuppressibleFaces`](#MeshControls.ShowFeatureSuppressibleFaces)                                                 | Run the ShowFeatureSuppressibleFaces action.                                      |
| [`ShowMappableBodies`](#MeshControls.ShowMappableBodies)                                                                     | Run the ShowMappableBodies action.                                                |
| [`ShowSweepableBodies`](#MeshControls.ShowSweepableBodies)                                                                   | Run the ShowSweepableBodies action.                                               |
| [`Update`](#MeshControls.Update)                                                                                             | Run the Update action.                                                            |
| [`GetChildren`](#id632)                                                                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)                                                                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)                                                                                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)                                                                                                        | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                                                                                                         | Creates a new child Image.                                                        |
| [`PreviewWelds`](#MeshControls.PreviewWelds)                                                                                 | Preview Welds.                                                                    |
| [`PreviewMeshOnWelds`](#MeshControls.PreviewMeshOnWelds)                                                                     | PreviewMeshOnWelds method.                                                        |
| [`PreviewMeshOnWeld`](#MeshControls.PreviewMeshOnWeld)                                                                       | Preview model mesh on one weld control provided.                                  |
| [`PreviewMeshOnAllWelds`](#MeshControls.PreviewMeshOnAllWelds)                                                               | Preview model mesh on all weld controls of the Mesh.                              |
| [`ShowOverlappingFaces`](#MeshControls.ShowOverlappingFaces)                                                                 | Run the ShowOverlappingFaces action.                                              |
| [`ShowUnconnectedFacesNearEdges`](#MeshControls.ShowUnconnectedFacesNearEdges)                                               | Run the  ShowUnconnectedFreeEdges action.                                         |
| [`PreviewMeshOnWeldWorksheet`](#id251)                                                                                       | PreviewMeshOnWeldWorksheet method.                                                |
| [`PreviewMeshOnWeldCurve`](#MeshControls.PreviewMeshOnWeldCurve)                                                             | Preview model mesh on a given single weld curve.                                  |
| [`ClearGeneratedData`](#MeshControls.ClearGeneratedData)                                                                     | Run the ClearGeneratedData action.                                                |
| [`CleanPartOrBody`](#MeshControls.CleanPartOrBody)                                                                           | Clear generated data for parts and/or bodies provided.                            |
| [`AddNodeMergeGroup`](#MeshControls.AddNodeMergeGroup)                                                                       | Add a new NodeMergeGroup.                                                         |
| [`AddNodeMerge`](#MeshControls.AddNodeMerge)                                                                                 | Add a new NodeMerge.                                                              |
| [`AddAutomaticMethod`](#MeshControls.AddAutomaticMethod)                                                                     | Creates a new AutomaticMethod                                                     |
| [`AddMeshConnectionGroup`](#MeshControls.AddMeshConnectionGroup)                                                             | Add a new MeshConnectionGroup.                                                    |
| [`AddContactMatchGroup`](#MeshControls.AddContactMatchGroup)                                                                 | Add a new AddContactMatchGroup.                                                   |
| [`AddManualMeshConnection`](#MeshControls.AddManualMeshConnection)                                                           | Add a new ManualMeshConnection                                                    |
| [`AddPullExtrude`](#MeshControls.AddPullExtrude)                                                                             | Add a new Pull (Extrude).                                                         |
| [`AddPullRevolve`](#MeshControls.AddPullRevolve)                                                                             | Add a new Pull (Revolve).                                                         |
| [`AddPullSurfaceCoating`](#MeshControls.AddPullSurfaceCoating)                                                               | Add a new Pull (Surface Coating)).                                                |
| [`AddDirectMorph`](#MeshControls.AddDirectMorph)                                                                             | Add a new DirectMorph.                                                            |
| [`AddDeviation`](#MeshControls.AddDeviation)                                                                                 | Creates a new SagControl                                                          |
| [`AddWasher`](#MeshControls.AddWasher)                                                                                       | Creates a new SagControl                                                          |
| [`AddWeld`](#MeshControls.AddWeld)                                                                                           | Creates a new WeldControl                                                         |
| [`AddRepairTopology`](#MeshControls.AddRepairTopology)                                                                       | Creates a new RepairTopology                                                      |
| [`AddConnect`](#MeshControls.AddConnect)                                                                                     | Creates a new Connect Control                                                     |
| [`AddFeatureSuppress`](#MeshControls.AddFeatureSuppress)                                                                     | Creates a new FeatureSuppress                                                     |
| [`AddGeometryFidelity`](#MeshControls.AddGeometryFidelity)                                                                   | Creates a new GeometryFidelity                                                    |
| [`AddMeshCopy`](#MeshControls.AddMeshCopy)                                                                                   | Creates a new MeshCopy                                                            |
| [`PinchControlGeomtry`](#MeshControls.PinchControlGeomtry)                                                                   | Set the geometry type for the Pinch Control.                                      |
| [`IsMeshMetricVisible`](#MeshControls.IsMeshMetricVisible)                                                                   | IsMeshMetricVisible method.                                                       |
| [`GetIsShellTargetMetric`](#MeshControls.GetIsShellTargetMetric)                                                             | Get Shell Target Metric                                                           |
| [`GetActiveSurfaceMeshQuality`](#MeshControls.GetActiveSurfaceMeshQuality)                                                   | Get Active User Mesh Quality                                                      |
| [`GetSurfaceMeshQualityName`](#MeshControls.GetSurfaceMeshQualityName)                                                       | Get Mesh Quality Name                                                             |
| [`GetSurfaceMeshQualityWarningLimit`](#MeshControls.GetSurfaceMeshQualityWarningLimit)                                       | Get User Mesh Quality Warning Limit                                               |
| [`GetSurfaceMeshQualityErrorLimit`](#MeshControls.GetSurfaceMeshQualityErrorLimit)                                           | Get User Mesh Quality Error Limit                                                 |
| [`GetSurfaceMeshQualityPercentageFailed`](#MeshControls.GetSurfaceMeshQualityPercentageFailed)                               | Get Mesh Quality Percentage Failed                                                |
| [`GetSurfaceMeshQualityCountFailed`](#MeshControls.GetSurfaceMeshQualityCountFailed)                                         | Get Mesh Quality Count Failed                                                     |
| [`GetSurfaceMeshQualityWarningPercentageFailed`](#MeshControls.GetSurfaceMeshQualityWarningPercentageFailed)                 | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetSurfaceMeshQualityWarningCountFailed`](#MeshControls.GetSurfaceMeshQualityWarningCountFailed)                           | Get Mesh Quality Warning Count Failed                                             |
| [`GetSurfaceMeshQualityWorstMetricValue`](#MeshControls.GetSurfaceMeshQualityWorstMetricValue)                               | Get Mesh Quality Worst Metric Value                                               |
| [`GetSurfaceMeshQualityAverageMetricValue`](#MeshControls.GetSurfaceMeshQualityAverageMetricValue)                           | Get Mesh Quality Average Metric Value                                             |
| [`SetActiveSurfaceMeshQuality`](#MeshControls.SetActiveSurfaceMeshQuality)                                                   | Set Active Mesh Quality                                                           |
| [`SetSurfaceMeshQualityWarningLimit`](#id252)                                                                                | Set Mesh Quality Warning Limit                                                    |
| [`SetSurfaceMeshQualityWarningLimit`](#id252)                                                                                | Set Mesh Quality Warning Limit                                                    |
| [`SetSurfaceMeshQualityErrorLimit`](#id253)                                                                                  | Set Mesh Quality Error Level                                                      |
| [`SetSurfaceMeshQualityErrorLimit`](#id253)                                                                                  | Set Mesh Quality Error Level                                                      |
| [`CreateMQSurfaceElementsNamedSelection`](#MeshControls.CreateMQSurfaceElementsNamedSelection)                               | Create Mesh Quality Surface Element Named Selection                               |
| [`GetIsSolidTargetMetric`](#MeshControls.GetIsSolidTargetMetric)                                                             | Get Solid Target Metric                                                           |
| [`GetVolumeMeshQualityName`](#MeshControls.GetVolumeMeshQualityName)                                                         | Get Mesh Quality Name                                                             |
| [`GetVolumeMeshQualityWarningLimit`](#MeshControls.GetVolumeMeshQualityWarningLimit)                                         | Get Mesh Quality Warning Limit                                                    |
| [`GetVolumeMeshQualityErrorLimit`](#MeshControls.GetVolumeMeshQualityErrorLimit)                                             | Get Mesh Quality Error Limit                                                      |
| [`GetVolumeMeshQualityPercentageFailed`](#MeshControls.GetVolumeMeshQualityPercentageFailed)                                 | Get Mesh Quality Percentage Failed                                                |
| [`GetVolumeMeshQualityCountFailed`](#MeshControls.GetVolumeMeshQualityCountFailed)                                           | Get Mesh Quality Count Failed                                                     |
| [`GetVolumeMeshQualityWarningPercentageFailed`](#MeshControls.GetVolumeMeshQualityWarningPercentageFailed)                   | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetVolumeMeshQualityWarningCountFailed`](#MeshControls.GetVolumeMeshQualityWarningCountFailed)                             | Get Mesh Quality Warning Count Failed                                             |
| [`GetVolumeMeshQualityWorstMetricValue`](#MeshControls.GetVolumeMeshQualityWorstMetricValue)                                 | Get Mesh Quality Worst Metric Value                                               |
| [`GetVolumeMeshQualityAverageMetricValue`](#MeshControls.GetVolumeMeshQualityAverageMetricValue)                             | Get Mesh Quality Average Metric Value                                             |
| [`GetVolumeMeshQualityWorstMetricBackgroundColor`](#MeshControls.GetVolumeMeshQualityWorstMetricBackgroundColor)             | Get Mesh Quality Worst Metric BackgroundColor                                     |
| [`SetActiveVolumeMeshQuality`](#MeshControls.SetActiveVolumeMeshQuality)                                                     | Set Active Mesh Quality                                                           |
| [`SetVolumeMeshQualityWarningLimit`](#id254)                                                                                 | Set Mesh Quality Warning Limit                                                    |
| [`SetVolumeMeshQualityWarningLimit`](#id254)                                                                                 | Set Mesh Quality Warning Limit                                                    |
| [`SetVolumeMeshQualityErrorLimit`](#id255)                                                                                   | Set Mesh Quality Error Limit                                                      |
| [`SetVolumeMeshQualityErrorLimit`](#id255)                                                                                   | Set Mesh Quality Error Limit                                                      |
| [`CreateMQVolumeElementsNamedSelection`](#MeshControls.CreateMQVolumeElementsNamedSelection)                                 | Create Mesh Quality Volume Element Name Selection                                 |
| [`GetIsSolidSurfaceTargetMetric`](#MeshControls.GetIsSolidSurfaceTargetMetric)                                               | Get SolidSurface Target Metric                                                    |
| [`GetSolidSurfaceMeshQualityName`](#MeshControls.GetSolidSurfaceMeshQualityName)                                             | Get Mesh Quality Name                                                             |
| [`GetSolidSurfaceMeshQualityWarningLimit`](#MeshControls.GetSolidSurfaceMeshQualityWarningLimit)                             | Get Mesh Quality Warning Limit                                                    |
| [`GetSolidSurfaceMeshQualityErrorLimit`](#MeshControls.GetSolidSurfaceMeshQualityErrorLimit)                                 | Get Mesh Quality Error Limit                                                      |
| [`GetSolidSurfaceMeshQualityPercentageFailed`](#MeshControls.GetSolidSurfaceMeshQualityPercentageFailed)                     | Get Mesh Quality Percentage Failed                                                |
| [`GetSolidSurfaceMeshQualityCountFailed`](#MeshControls.GetSolidSurfaceMeshQualityCountFailed)                               | Get Mesh Quality Count Failed                                                     |
| [`GetSolidSurfaceMeshQualityWarningPercentageFailed`](#MeshControls.GetSolidSurfaceMeshQualityWarningPercentageFailed)       | Get Mesh Quality Warning Percentage Failed                                        |
| [`GetSolidSurfaceMeshQualityWarningCountFailed`](#MeshControls.GetSolidSurfaceMeshQualityWarningCountFailed)                 | Get Mesh Quality Warning Count Failed                                             |
| [`GetSolidSurfaceMeshQualityWorstMetricValue`](#MeshControls.GetSolidSurfaceMeshQualityWorstMetricValue)                     | Get Mesh Quality Worst Metric Value                                               |
| [`GetSolidSurfaceMeshQualityAverageMetricValue`](#MeshControls.GetSolidSurfaceMeshQualityAverageMetricValue)                 | Get Mesh Quality Average Metric Value                                             |
| [`GetSolidSurfaceMeshQualityWorstMetricBackgroundColor`](#MeshControls.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor) | Get Mesh Quality Worst Metric BackgroundColor                                     |
| [`SetActiveSolidSurfaceMeshQuality`](#MeshControls.SetActiveSolidSurfaceMeshQuality)                                         | Set Active Mesh Quality                                                           |
| [`SetSolidSurfaceMeshQualityWarningLimit`](#id256)                                                                           | Set Mesh Quality Warning Limit                                                    |
| [`SetSolidSurfaceMeshQualityWarningLimit`](#id256)                                                                           | Set Mesh Quality Warning Limit                                                    |
| [`SetSolidSurfaceMeshQualityErrorLimit`](#id257)                                                                             | Set Mesh Quality Error Limit                                                      |
| [`SetSolidSurfaceMeshQualityErrorLimit`](#id257)                                                                             | Set Mesh Quality Error Limit                                                      |
| [`CreateMQSolidSurfaceElementsNamedSelection`](#MeshControls.CreateMQSolidSurfaceElementsNamedSelection)                     | Create Mesh Quality SolidSurface Element Name Selection                           |
| [`LoadMQWorksheetFile`](#MeshControls.LoadMQWorksheetFile)                                                                   | LoadMQWorksheetFile method.                                                       |
| [`SaveMQWorksheetFile`](#MeshControls.SaveMQWorksheetFile)                                                                   | SaveMQWorksheetFile method.                                                       |
| [`GetVolumeMeshMetrics`](#MeshControls.GetVolumeMeshMetrics)                                                                 | GetVolumeMeshMetrics method.                                                      |
| [`GetSolidSurfaceMeshMetrics`](#MeshControls.GetSolidSurfaceMeshMetrics)                                                     | GetSolidSurfaceMeshMetrics method.                                                |
| [`SetSurfaceMeshMetricLimits`](#MeshControls.SetSurfaceMeshMetricLimits)                                                     | SetSurfaceMeshMetricLimits method.                                                |
| [`SetSolidMeshMetricLimits`](#MeshControls.SetSolidMeshMetricLimits)                                                         | SetSolidMeshMetricLimits method.                                                  |
| [`SetSolidSurfaceMeshMetricLimits`](#MeshControls.SetSolidSurfaceMeshMetricLimits)                                           | SetSolidSurfaceMeshMetricLimits method.                                           |
| [`ActivateAllSurfaceWorksheetRows`](#MeshControls.ActivateAllSurfaceWorksheetRows)                                           | ActivateAllSurfaceWorksheetRows method.                                           |
| [`ActivateAllVolumeWorksheetRows`](#MeshControls.ActivateAllVolumeWorksheetRows)                                             | ActivateAllVolumeWorksheetRows method.                                            |
| [`ActivateAllSolidSurfaceWorksheetRows`](#MeshControls.ActivateAllSolidSurfaceWorksheetRows)                                 | ActivateAllSolidSurfaceWorksheetRows method.                                      |
| [`DeactivateAllSurfaceWorksheetRows`](#MeshControls.DeactivateAllSurfaceWorksheetRows)                                       | DeactivateAllSurfaceWorksheetRows method.                                         |
| [`DeactivateAllVolumeWorksheetRows`](#MeshControls.DeactivateAllVolumeWorksheetRows)                                         | DeactivateAllVolumeWorksheetRows method.                                          |
| [`DeactivateAllSolidSurfaceWorksheetRows`](#MeshControls.DeactivateAllSolidSurfaceWorksheetRows)                             | DeactivateAllSolidSurfaceWorksheetRows method.                                    |
| [`SetMeshMetricOptions`](#MeshControls.SetMeshMetricOptions)                                                                 | SetMeshMetricOptions method.                                                      |
| [`GetMeshMetricOptions`](#MeshControls.GetMeshMetricOptions)                                                                 | GetMeshMetricOptions method.                                                      |
| [`Activate`](#id636)                                                                                                         | Activate the current object.                                                      |
| [`CopyTo`](#id637)                                                                                                           | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)                                                                                                        | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639)                                                                                          | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)                                                                                              | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)                                                                                                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)                                                                                                | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)                                                                                                  | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)                                                                                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)                                                                                                  | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`Worksheet`](../Worksheet.md#Worksheet)                                                                               | Get the MeshControlWorksheet action.                             |
| [`ElementSize`](#id342)                                                                                                | Gets or sets the ElementSize.                                    |
| [`RigidBodyFaceMeshType`](#MeshControls.RigidBodyFaceMeshType)                                                         | Gets or sets the RigidBodyFaceMeshType.                          |
| [`RigidBodyBehavior`](#MeshControls.RigidBodyBehavior)                                                                 | Gets or sets the BoundaryCondition.                              |
| [`CurrentConfiguration`](#MeshControls.CurrentConfiguration)                                                           | Gets the Assembly Mesh’s current configuration Id.               |
| [`MinimizeNumTriangles`](#MeshControls.MinimizeNumTriangles)                                                           | Gets or sets the TriangleReduction option for Batch Connections. |
| [`NumberOfShellMeshQualityMetrics`](#MeshControls.NumberOfShellMeshQualityMetrics)                                     | Gets the number of Mesh Quality Metrics                          |
| [`GlobalUseCustomTargetLimit`](#MeshControls.GlobalUseCustomTargetLimit)                                               | Gets or sets the GlobalUseCustomTargetLimit.                     |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.               |
| [`ConnectionTolerance`](#id304)                                                                                        | Gets or sets the ConnectionTolerance.                            |
| [`ConnectionToleranceList`](#id303)                                                                                    | Gets or sets the ConnectionToleranceList.                        |
| [`UseAdvancedSizeFunction`](#MeshControls.UseAdvancedSizeFunction)                                                     | Gets or sets the UseAdvancedSizeFunction.                        |
| [`Method`](#id376)                                                                                                     | Gets or sets the Method.                                         |
| [`UseAutomaticInflation`](#MeshControls.UseAutomaticInflation)                                                         | Gets or sets the UseAutomaticInflation.                          |
| [`AutomaticMeshBasedDefeaturing`](#MeshControls.AutomaticMeshBasedDefeaturing)                                         | Gets or sets the AutomaticMeshBasedDefeaturing.                  |
| [`Beam3`](#MeshControls.Beam3)                                                                                         | Gets the Beam3.                                                  |
| [`Beam4`](#MeshControls.Beam4)                                                                                         | Gets the Beam4.                                                  |
| [`BeamElements`](#MeshControls.BeamElements)                                                                           | Gets the BeamElements.                                           |
| [`CheckMeshQuality`](#MeshControls.CheckMeshQuality)                                                                   | Gets or sets the CheckMeshQuality.                               |
| [`CollisionAvoidance`](#MeshControls.CollisionAvoidance)                                                               | Gets or sets the CollisionAvoidance.                             |
| [`ConnectionSize`](#id305)                                                                                             | Gets or sets the ConnectionSize.                                 |
| [`CornerNodes`](#MeshControls.CornerNodes)                                                                             | Gets the CornerNodes.                                            |
| [`Elements`](#MeshControls.Elements)                                                                                   | Gets the Elements.                                               |
| [`GrowthRate`](#id217)                                                                                                 | Gets or sets the GrowthRate.                                     |
| [`GrowthRateType`](#MeshControls.GrowthRateType)                                                                       | Gets or sets the GrowthRateType.                                 |
| [`Hex20`](#MeshControls.Hex20)                                                                                         | Gets the Hex20.                                                  |
| [`Hex8`](#MeshControls.Hex8)                                                                                           | Gets the Hex8.                                                   |
| [`HoleRemovalTolerance`](#MeshControls.HoleRemovalTolerance)                                                           | Gets or sets the HoleRemovalTolerance.                           |
| [`InflationAlgorithm`](#id218)                                                                                         | Gets or sets the InflationAlgorithm.                             |
| [`MaximumHeightOverBase`](#MeshControls.MaximumHeightOverBase)                                                         | Gets or sets the MaximumHeightOverBase.                          |
| [`FilletRatio`](#MeshControls.FilletRatio)                                                                             | Gets or sets the FilletRatio.                                    |
| [`InflationOption`](#id219)                                                                                            | Gets or sets the InflationOption.                                |
| [`InitialSizeSeed`](#MeshControls.InitialSizeSeed)                                                                     | Gets or sets the InitialSizeSeed.                                |
| [`AspectRatio`](#id220)                                                                                                | Gets or sets the AspectRatio.                                    |
| [`Line2`](#MeshControls.Line2)                                                                                         | Gets the Line2.                                                  |
| [`Line3`](#MeshControls.Line3)                                                                                         | Gets the Line3.                                                  |
| [`MaximumLayers`](#id221)                                                                                              | Gets or sets the MaximumLayers.                                  |
| [`MidNodes`](#MeshControls.MidNodes)                                                                                   | Gets the MidNodes.                                               |
| [`Nodes`](#MeshControls.Nodes)                                                                                         | Gets the Nodes.                                                  |
| [`NumberOfRetries`](#MeshControls.NumberOfRetries)                                                                     | Gets or sets the NumberOfRetries.                                |
| [`ProximityGapFactor`](#id222)                                                                                         | Gets or sets the ProximityGapFactor.                             |
| [`NumberOfCPUsForParallelPartMeshing`](#MeshControls.NumberOfCPUsForParallelPartMeshing)                               | Gets or sets the NumberOfCPUsForParallelPartMeshing.             |
| [`OrientationNodes`](#MeshControls.OrientationNodes)                                                                   | Gets the OrientationNodes.                                       |
| [`GeneratePinchOnRefresh`](#MeshControls.GeneratePinchOnRefresh)                                                       | Gets or sets the GeneratePinchOnRefresh.                         |
| [`Pyramid13`](#MeshControls.Pyramid13)                                                                                 | Gets the Pyramid13.                                              |
| [`Pyramid5`](#MeshControls.Pyramid5)                                                                                   | Gets the Pyramid5.                                               |
| [`Quad4`](#MeshControls.Quad4)                                                                                         | Gets the Quad4.                                                  |
| [`Quad8`](#MeshControls.Quad8)                                                                                         | Gets the Quad8.                                                  |
| [`Relevance`](Relevance.md#Relevance)                                                                                  | Gets or sets the Relevance.                                      |
| [`RelevanceCenter`](#MeshControls.RelevanceCenter)                                                                     | Gets or sets the RelevanceCenter.                                |
| [`Resolution`](#MeshControls.Resolution)                                                                               | Gets or sets the Resolution.                                     |
| [`ShapeChecking`](#MeshControls.ShapeChecking)                                                                         | Gets or sets the ShapeChecking.                                  |
| [`SharedNodes`](#MeshControls.SharedNodes)                                                                             | Gets the SharedNodes.                                            |
| [`ShellElements`](#MeshControls.ShellElements)                                                                         | Gets the ShellElements.                                          |
| [`SmoothingIterations`](#MeshControls.SmoothingIterations)                                                             | Gets or sets the SmoothingIterations.                            |
| [`Smoothing`](../Results/Smoothing.md#Smoothing)                                                                       | Gets or sets the Smoothing.                                      |
| [`SolidElements`](#MeshControls.SolidElements)                                                                         | Gets the SolidElements.                                          |
| [`SpanAngleCenter`](#MeshControls.SpanAngleCenter)                                                                     | Gets or sets the SpanAngleCenter.                                |
| [`TargetExplicitAspectRatio`](#MeshControls.TargetExplicitAspectRatio)                                                 | Gets or sets the TargetExplicitAspectRatio.                      |
| [`TargetQuality`](#MeshControls.TargetQuality)                                                                         | Gets or sets the TargetQuality.                                  |
| [`Tet10`](#MeshControls.Tet10)                                                                                         | Gets the Tet10.                                                  |
| [`Tet4`](#MeshControls.Tet4)                                                                                           | Gets the Tet4.                                                   |
| [`TransitionOption`](#MeshControls.TransitionOption)                                                                   | Gets or sets the TransitionOption.                               |
| [`TransitionRatio`](#id224)                                                                                            | Gets or sets the TransitionRatio.                                |
| [`GrowthRateSF`](#MeshControls.GrowthRateSF)                                                                           | Gets or sets the GrowthRateSF.                                   |
| [`Tri3`](#MeshControls.Tri3)                                                                                           | Gets the Tri3.                                                   |
| [`Tri6`](#MeshControls.Tri6)                                                                                           | Gets the Tri6.                                                   |
| [`TriangleSurfaceMesher`](#MeshControls.TriangleSurfaceMesher)                                                         | Gets or sets the TriangleSurfaceMesher.                          |
| [`UsePostSmoothing`](#MeshControls.UsePostSmoothing)                                                                   | Gets or sets the UsePostSmoothing.                               |
| [`Wedge15`](#MeshControls.Wedge15)                                                                                     | Gets the Wedge15.                                                |
| [`Wedge6`](#MeshControls.Wedge6)                                                                                       | Gets the Wedge6.                                                 |
| [`CoplanarAngleTol`](#MeshControls.CoplanarAngleTol)                                                                   | Gets or sets the CoplanarAngleTol.                               |
| [`FirstLayerHeight`](#id225)                                                                                           | Gets or sets the FirstLayerHeight.                               |
| [`MaximumAngle`](#MeshControls.MaximumAngle)                                                                           | Gets or sets the MaximumAngle.                                   |
| [`MaximumThickness`](#id226)                                                                                           | Gets or sets the MaximumThickness.                               |
| [`MaximumSize`](#MeshControls.MaximumSize)                                                                             | Gets or sets the MaximumSize.                                    |
| [`DefeatureTolerance`](#MeshControls.DefeatureTolerance)                                                               | Gets or sets the DefeatureTolerance.                             |
| [`Average`](#MeshControls.Average)                                                                                     | Gets the Average.                                                |
| [`Maximum`](#MeshControls.Maximum)                                                                                     | Gets the Maximum.                                                |
| [`Minimum`](#MeshControls.Minimum)                                                                                     | Gets the Minimum.                                                |
| [`StandardDeviation`](#MeshControls.StandardDeviation)                                                                 | Gets the StandardDeviation.                                      |
| [`MinimumEdgeLength`](#id227)                                                                                          | Gets the MinimumEdgeLength.                                      |
| [`MinimumSize`](#MeshControls.MinimumSize)                                                                             | Gets or sets the MinimumSize.                                    |
| [`PinchTolerance`](#id228)                                                                                             | Gets or sets the PinchTolerance.                                 |
| [`ProximityMinimumSize`](#id229)                                                                                       | Gets or sets the ProximityMinimumSize.                           |
| [`CurvatureNormalAngle`](#id230)                                                                                       | Gets or sets the CurvatureNormalAngle.                           |
| [`TargetCharacteristicLength`](#MeshControls.TargetCharacteristicLength)                                               | Gets or sets the TargetCharacteristicLength.                     |
| [`TargetSkewness`](#MeshControls.TargetSkewness)                                                                       | Gets or sets the TargetSkewness.                                 |
| [`DisplayStyle`](#MeshControls.DisplayStyle)                                                                           | Gets or sets the DisplayStyle.                                   |
| [`ElementOrder`](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ElementOrder)                                  | Gets or sets the ElementOrder.                                   |
| [`ExportFormat`](#MeshControls.ExportFormat)                                                                           | Gets or sets the ExportFormat.                                   |
| [`MeshMetric`](#MeshControls.MeshMetric)                                                                               | Gets or sets the MeshMetric.                                     |
| [`PhysicsPreference`](#MeshControls.PhysicsPreference)                                                                 | Gets or sets the PhysicsPreference.                              |
| [`ExportUnit`](#MeshControls.ExportUnit)                                                                               | Gets or sets the ExportUnit.                                     |
| [`ProximitySizeSources`](#id232)                                                                                       | Gets or sets the ProximitySizeSources.                           |
| [`SolverPreference`](#MeshControls.SolverPreference)                                                                   | Gets or sets the SolverPreference.                               |
| [`ViewAdvancedOptions`](#MeshControls.ViewAdvancedOptions)                                                             | Gets or sets the ViewAdvancedOptions.                            |
| [`CaptureCurvature`](#id233)                                                                                           | Gets or sets the CaptureCurvature.                               |
| [`CaptureProximity`](#id234)                                                                                           | Gets or sets the CaptureProximity.                               |
| [`CreateInflatedTets`](#MeshControls.CreateInflatedTets)                                                               | Gets or Sets the CreateInflatedTets                              |
| [`ExtraRetriesForAssembly`](#MeshControls.ExtraRetriesForAssembly)                                                     | Gets or sets the ExtraRetriesForAssembly.                        |
| [`MeshMorphing`](#MeshControls.MeshMorphing)                                                                           | Gets or sets the MeshMorphing.                                   |
| [`MultiConnectionSteps`](#MeshControls.MultiConnectionSteps)                                                           | Gets or sets the MultiConnectionSteps.                           |
| [`UseSheetThicknessForPinch`](#MeshControls.UseSheetThicknessForPinch)                                                 | Gets or sets the UseSheetThicknessForPinch.                      |
| [`ReadOnly`](#MeshControls.ReadOnly)                                                                                   | Gets the ReadOnly.                                               |
| [`SheetLoopRemoval`](#MeshControls.SheetLoopRemoval)                                                                   | Gets or sets the SheetLoopRemoval.                               |
| [`ShowDetailedStatistics`](#MeshControls.ShowDetailedStatistics)                                                       | Gets or sets the ShowDetailedStatistics.                         |
| [`StraightSidedElements`](#MeshControls.StraightSidedElements)                                                         | Gets or sets the StraightSidedElements.                          |
| [`TopologyChecking`](#MeshControls.TopologyChecking)                                                                   | Gets or sets the TopologyChecking.                               |
| [`UseAdaptiveSizing`](#MeshControls.UseAdaptiveSizing)                                                                 | Gets or sets the UseAdaptiveSizing.                              |
| [`UseFixedSizeFunctionForSheets`](#MeshControls.UseFixedSizeFunctionForSheets)                                         | Gets or sets the UseFixedSizeFunctionForSheets.                  |
| [`QuadMesh`](#MeshControls.QuadMesh)                                                                                   | Gets or sets the QuadMesh.                                       |
| [`MeshBasedConnection`](#MeshControls.MeshBasedConnection)                                                             | Gets or sets the MeshBasedConnection.                            |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                                 |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                     |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                       |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                            |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                             |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                              |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.               |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                     |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object.    |

<a id="id211"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Mesh
```

<a id="id212"></a>

## Property detail

<a id="MeshControls.Worksheet"></a>

### *property* MeshControls.Worksheet *: Ansys.ACT.Interfaces.Common.IWorksheet | [None](https://docs.python.org/3/library/constants.html#None)*

Get the MeshControlWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* MeshControls.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RigidBodyFaceMeshType"></a>

### *property* MeshControls.RigidBodyFaceMeshType *: [Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyFaceMeshType](../../../../Mechanical/DataModel/Enums/MeshControlGroupRigidBodyFaceMeshType.md#MeshControlGroupRigidBodyFaceMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidBodyFaceMeshType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RigidBodyBehavior"></a>

### *property* MeshControls.RigidBodyBehavior *: [Ansys.Mechanical.DataModel.Enums.MeshControlGroupRigidBodyBehaviorType](../../../../Mechanical/DataModel/Enums/MeshControlGroupRigidBodyBehaviorType.md#MeshControlGroupRigidBodyBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CurrentConfiguration"></a>

### *property* MeshControls.CurrentConfiguration *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Assembly Mesh’s current configuration Id.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MinimizeNumTriangles"></a>

### *property* MeshControls.MinimizeNumTriangles *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleReduction option for Batch Connections.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NumberOfShellMeshQualityMetrics"></a>

### *property* MeshControls.NumberOfShellMeshQualityMetrics *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of Mesh Quality Metrics

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GlobalUseCustomTargetLimit"></a>

### *property* MeshControls.GlobalUseCustomTargetLimit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalUseCustomTargetLimit.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* MeshControls.ConnectionTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ConnectionToleranceList"></a>

### *property* MeshControls.ConnectionToleranceList *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionToleranceList.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.UseAdvancedSizeFunction"></a>

### *property* MeshControls.UseAdvancedSizeFunction *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAdvancedSizeFunction.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* MeshControls.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.UseAutomaticInflation"></a>

### *property* MeshControls.UseAutomaticInflation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAutomaticInflation.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AutomaticMeshBasedDefeaturing"></a>

### *property* MeshControls.AutomaticMeshBasedDefeaturing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticMeshBasedDefeaturing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Beam3"></a>

### *property* MeshControls.Beam3 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Beam3.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Beam4"></a>

### *property* MeshControls.Beam4 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Beam4.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.BeamElements"></a>

### *property* MeshControls.BeamElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BeamElements.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CheckMeshQuality"></a>

### *property* MeshControls.CheckMeshQuality *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckMeshQuality.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CollisionAvoidance"></a>

### *property* MeshControls.CollisionAvoidance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CollisionAvoidance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ConnectionSize"></a>

### *property* MeshControls.ConnectionSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CornerNodes"></a>

### *property* MeshControls.CornerNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CornerNodes.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Elements"></a>

### *property* MeshControls.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* MeshControls.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GrowthRateType"></a>

### *property* MeshControls.GrowthRateType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRateType.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Hex20"></a>

### *property* MeshControls.Hex20 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Hex20.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Hex8"></a>

### *property* MeshControls.Hex8 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Hex8.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.HoleRemovalTolerance"></a>

### *property* MeshControls.HoleRemovalTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HoleRemovalTolerance.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* MeshControls.InflationAlgorithm *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MaximumHeightOverBase"></a>

### *property* MeshControls.MaximumHeightOverBase *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumHeightOverBase.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FilletRatio"></a>

### *property* MeshControls.FilletRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilletRatio.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* MeshControls.InflationOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflationOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.InitialSizeSeed"></a>

### *property* MeshControls.InitialSizeSeed *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialSizeSeed.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* MeshControls.AspectRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Line2"></a>

### *property* MeshControls.Line2 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Line2.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Line3"></a>

### *property* MeshControls.Line3 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Line3.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* MeshControls.MaximumLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumLayers.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MidNodes"></a>

### *property* MeshControls.MidNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MidNodes.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Nodes"></a>

### *property* MeshControls.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NumberOfRetries"></a>

### *property* MeshControls.NumberOfRetries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRetries.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* MeshControls.ProximityGapFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityGapFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NumberOfCPUsForParallelPartMeshing"></a>

### *property* MeshControls.NumberOfCPUsForParallelPartMeshing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfCPUsForParallelPartMeshing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.OrientationNodes"></a>

### *property* MeshControls.OrientationNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the OrientationNodes.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GeneratePinchOnRefresh"></a>

### *property* MeshControls.GeneratePinchOnRefresh *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneratePinchOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Pyramid13"></a>

### *property* MeshControls.Pyramid13 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Pyramid13.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Pyramid5"></a>

### *property* MeshControls.Pyramid5 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Pyramid5.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Quad4"></a>

### *property* MeshControls.Quad4 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Quad4.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Quad8"></a>

### *property* MeshControls.Quad8 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Quad8.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Relevance"></a>

### *property* MeshControls.Relevance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Relevance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RelevanceCenter"></a>

### *property* MeshControls.RelevanceCenter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelevanceCenter.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Resolution"></a>

### *property* MeshControls.Resolution *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Resolution.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShapeChecking"></a>

### *property* MeshControls.ShapeChecking *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShapeChecking.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SharedNodes"></a>

### *property* MeshControls.SharedNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SharedNodes.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShellElements"></a>

### *property* MeshControls.ShellElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShellElements.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SmoothingIterations"></a>

### *property* MeshControls.SmoothingIterations *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothingIterations.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* MeshControls.Smoothing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Smoothing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SolidElements"></a>

### *property* MeshControls.SolidElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolidElements.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SpanAngleCenter"></a>

### *property* MeshControls.SpanAngleCenter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpanAngleCenter.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TargetExplicitAspectRatio"></a>

### *property* MeshControls.TargetExplicitAspectRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetExplicitAspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TargetQuality"></a>

### *property* MeshControls.TargetQuality *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetQuality.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Tet10"></a>

### *property* MeshControls.Tet10 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tet10.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Tet4"></a>

### *property* MeshControls.Tet4 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tet4.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TransitionOption"></a>

### *property* MeshControls.TransitionOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionOption.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* MeshControls.TransitionRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransitionRatio.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GrowthRateSF"></a>

### *property* MeshControls.GrowthRateSF *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRateSF.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Tri3"></a>

### *property* MeshControls.Tri3 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tri3.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Tri6"></a>

### *property* MeshControls.Tri6 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Tri6.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TriangleSurfaceMesher"></a>

### *property* MeshControls.TriangleSurfaceMesher *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleSurfaceMesher.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.UsePostSmoothing"></a>

### *property* MeshControls.UsePostSmoothing *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UsePostSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Wedge15"></a>

### *property* MeshControls.Wedge15 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Wedge15.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Wedge6"></a>

### *property* MeshControls.Wedge6 *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Wedge6.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CoplanarAngleTol"></a>

### *property* MeshControls.CoplanarAngleTol *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoplanarAngleTol.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* MeshControls.FirstLayerHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FirstLayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MaximumAngle"></a>

### *property* MeshControls.MaximumAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumAngle.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* MeshControls.MaximumThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumThickness.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MaximumSize"></a>

### *property* MeshControls.MaximumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DefeatureTolerance"></a>

### *property* MeshControls.DefeatureTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Average"></a>

### *property* MeshControls.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Maximum"></a>

### *property* MeshControls.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Minimum"></a>

### *property* MeshControls.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.StandardDeviation"></a>

### *property* MeshControls.StandardDeviation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* MeshControls.MinimumEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MinimumSize"></a>

### *property* MeshControls.MinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* MeshControls.PinchTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchTolerance.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* MeshControls.ProximityMinimumSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximityMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* MeshControls.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TargetCharacteristicLength"></a>

### *property* MeshControls.TargetCharacteristicLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCharacteristicLength.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TargetSkewness"></a>

### *property* MeshControls.TargetSkewness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetSkewness.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DisplayStyle"></a>

### *property* MeshControls.DisplayStyle *: [Ansys.Mechanical.DataModel.Enums.MeshDisplayStyle](../../../../Mechanical/DataModel/Enums/MeshDisplayStyle.md#MeshDisplayStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayStyle.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* MeshControls.ElementOrder *: [Ansys.Mechanical.DataModel.Enums.ElementOrder](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ElementOrder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOrder.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ExportFormat"></a>

### *property* MeshControls.ExportFormat *: [Ansys.Mechanical.DataModel.Enums.FluentExportMeshType](../../../../Mechanical/DataModel/Enums/FluentExportMeshType.md#FluentExportMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportFormat.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MeshMetric"></a>

### *property* MeshControls.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshMetric.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PhysicsPreference"></a>

### *property* MeshControls.PhysicsPreference *: [Ansys.Mechanical.DataModel.Enums.MeshPhysicsPreferenceType](../../../../Mechanical/DataModel/Enums/MeshPhysicsPreferenceType.md#MeshPhysicsPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhysicsPreference.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ExportUnit"></a>

### *property* MeshControls.ExportUnit *: [Ansys.Mechanical.DataModel.Enums.PolyflowExportUnit](../../../../Mechanical/DataModel/Enums/PolyflowExportUnit.md#PolyflowExportUnit) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportUnit.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* MeshControls.ProximitySizeSources *: [Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType](../../../../Mechanical/DataModel/Enums/ProximitySFSourcesType.md#ProximitySFSourcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProximitySizeSources.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SolverPreference"></a>

### *property* MeshControls.SolverPreference *: [Ansys.Mechanical.DataModel.Enums.MeshSolverPreferenceType](../../../../Mechanical/DataModel/Enums/MeshSolverPreferenceType.md#MeshSolverPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverPreference.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ViewAdvancedOptions"></a>

### *property* MeshControls.ViewAdvancedOptions *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViewAdvancedOptions.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* MeshControls.CaptureCurvature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureCurvature.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* MeshControls.CaptureProximity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CaptureProximity.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CreateInflatedTets"></a>

### *property* MeshControls.CreateInflatedTets *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the CreateInflatedTets

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ExtraRetriesForAssembly"></a>

### *property* MeshControls.ExtraRetriesForAssembly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExtraRetriesForAssembly.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MeshMorphing"></a>

### *property* MeshControls.MeshMorphing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshMorphing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MultiConnectionSteps"></a>

### *property* MeshControls.MultiConnectionSteps *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiConnectionSteps.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.UseSheetThicknessForPinch"></a>

### *property* MeshControls.UseSheetThicknessForPinch *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseSheetThicknessForPinch.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ReadOnly"></a>

### *property* MeshControls.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SheetLoopRemoval"></a>

### *property* MeshControls.SheetLoopRemoval *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SheetLoopRemoval.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShowDetailedStatistics"></a>

### *property* MeshControls.ShowDetailedStatistics *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowDetailedStatistics.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.StraightSidedElements"></a>

### *property* MeshControls.StraightSidedElements *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StraightSidedElements.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TopologyChecking"></a>

### *property* MeshControls.TopologyChecking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopologyChecking.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.UseAdaptiveSizing"></a>

### *property* MeshControls.UseAdaptiveSizing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseAdaptiveSizing.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.UseFixedSizeFunctionForSheets"></a>

### *property* MeshControls.UseFixedSizeFunctionForSheets *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseFixedSizeFunctionForSheets.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.QuadMesh"></a>

### *property* MeshControls.QuadMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuadMesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MeshBasedConnection"></a>

### *property* MeshControls.MeshBasedConnection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshBasedConnection.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

## Method detail

<a id="MeshControls.AddContactSizing"></a>

### MeshControls.AddContactSizing()

Creates a new ContactSizing

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddFaceMeshing"></a>

### MeshControls.AddFaceMeshing()

Creates a new FaceMeshing

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddInflation"></a>

### MeshControls.AddInflation()

Creates a new Inflation

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddMatchControl"></a>

### MeshControls.AddMatchControl()

Creates a new MatchControl

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddPinch"></a>

### MeshControls.AddPinch()

Creates a new Pinch

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddRefinement"></a>

### MeshControls.AddRefinement()

Creates a new Refinement

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddSizing"></a>

### MeshControls.AddSizing()

Creates a new Sizing

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CreatePinchControls"></a>

### MeshControls.CreatePinchControls()

Run the CreatePinchControls action.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### MeshControls.GenerateMesh()

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PreviewInflation"></a>

### MeshControls.PreviewInflation()

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PreviewSurfaceMesh"></a>

### MeshControls.PreviewSurfaceMesh()

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShowFeatureSuppressibleFaces"></a>

### MeshControls.ShowFeatureSuppressibleFaces()

Run the ShowFeatureSuppressibleFaces action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShowMappableBodies"></a>

### MeshControls.ShowMappableBodies()

Run the ShowMappableBodies action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShowSweepableBodies"></a>

### MeshControls.ShowSweepableBodies()

Run the ShowSweepableBodies action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Update"></a>

### MeshControls.Update()

Run the Update action.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PreviewWelds"></a>

### MeshControls.PreviewWelds()

Preview Welds.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PreviewMeshOnWelds"></a>

### MeshControls.PreviewMeshOnWelds(dataModelObjects: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

PreviewMeshOnWelds method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PreviewMeshOnWeld"></a>

### MeshControls.PreviewMeshOnWeld(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Preview model mesh on one weld control provided.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PreviewMeshOnAllWelds"></a>

### MeshControls.PreviewMeshOnAllWelds()

Preview model mesh on all weld controls of the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShowOverlappingFaces"></a>

### MeshControls.ShowOverlappingFaces()

Run the ShowOverlappingFaces action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ShowUnconnectedFacesNearEdges"></a>

### MeshControls.ShowUnconnectedFacesNearEdges()

Run the  ShowUnconnectedFreeEdges action.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### MeshControls.PreviewMeshOnWeldWorksheet(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject, indices: System.Collections.Generic.IEnumerable[System.Int32])

PreviewMeshOnWeldWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PreviewMeshOnWeldCurve"></a>

### MeshControls.PreviewMeshOnWeldCurve(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Preview model mesh on a given single weld curve.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ClearGeneratedData"></a>

### MeshControls.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CleanPartOrBody"></a>

### MeshControls.CleanPartOrBody(dataModelObjects: System.Collections.IEnumerable)

Clear generated data for parts and/or bodies provided.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddNodeMergeGroup"></a>

### MeshControls.AddNodeMergeGroup()

Add a new NodeMergeGroup.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddNodeMerge"></a>

### MeshControls.AddNodeMerge()

Add a new NodeMerge.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddAutomaticMethod"></a>

### MeshControls.AddAutomaticMethod()

Creates a new AutomaticMethod

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddMeshConnectionGroup"></a>

### MeshControls.AddMeshConnectionGroup()

Add a new MeshConnectionGroup.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddContactMatchGroup"></a>

### MeshControls.AddContactMatchGroup()

Add a new AddContactMatchGroup.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddManualMeshConnection"></a>

### MeshControls.AddManualMeshConnection()

Add a new ManualMeshConnection

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddPullExtrude"></a>

### MeshControls.AddPullExtrude()

Add a new Pull (Extrude).

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddPullRevolve"></a>

### MeshControls.AddPullRevolve()

Add a new Pull (Revolve).

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddPullSurfaceCoating"></a>

### MeshControls.AddPullSurfaceCoating()

Add a new Pull (Surface Coating)).

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddDirectMorph"></a>

### MeshControls.AddDirectMorph()

Add a new DirectMorph.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddDeviation"></a>

### MeshControls.AddDeviation()

Creates a new SagControl

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddWasher"></a>

### MeshControls.AddWasher()

Creates a new SagControl

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddWeld"></a>

### MeshControls.AddWeld()

Creates a new WeldControl

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddRepairTopology"></a>

### MeshControls.AddRepairTopology()

Creates a new RepairTopology

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddConnect"></a>

### MeshControls.AddConnect()

Creates a new Connect Control

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddFeatureSuppress"></a>

### MeshControls.AddFeatureSuppress()

Creates a new FeatureSuppress

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddGeometryFidelity"></a>

### MeshControls.AddGeometryFidelity()

Creates a new GeometryFidelity

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AddMeshCopy"></a>

### MeshControls.AddMeshCopy()

Creates a new MeshCopy

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PinchControlGeomtry"></a>

### MeshControls.PinchControlGeomtry(geomType: [Ansys.Mechanical.DataModel.Enums.MeshControlPinchGeomtryType](../../../../Mechanical/DataModel/Enums/MeshControlPinchGeomtryType.md#MeshControlPinchGeomtryType))

Set the geometry type for the Pinch Control.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.IsMeshMetricVisible"></a>

### MeshControls.IsMeshMetricVisible(index: System.UInt32)

IsMeshMetricVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetIsShellTargetMetric"></a>

### MeshControls.GetIsShellTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Shell Target Metric

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetActiveSurfaceMeshQuality"></a>

### MeshControls.GetActiveSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Active User Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSurfaceMeshQualityName"></a>

### MeshControls.GetSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSurfaceMeshQualityWarningLimit"></a>

### MeshControls.GetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get User Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSurfaceMeshQualityErrorLimit"></a>

### MeshControls.GetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get User Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSurfaceMeshQualityPercentageFailed"></a>

### MeshControls.GetSurfaceMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSurfaceMeshQualityCountFailed"></a>

### MeshControls.GetSurfaceMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSurfaceMeshQualityWarningPercentageFailed"></a>

### MeshControls.GetSurfaceMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSurfaceMeshQualityWarningCountFailed"></a>

### MeshControls.GetSurfaceMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSurfaceMeshQualityWorstMetricValue"></a>

### MeshControls.GetSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSurfaceMeshQualityAverageMetricValue"></a>

### MeshControls.GetSurfaceMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetActiveSurfaceMeshQuality"></a>

### MeshControls.SetActiveSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), activeMetric: System.Double)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetSurfaceMeshQualityWarningLimit"></a>

### MeshControls.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: System.Double)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### MeshControls.SetSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetSurfaceMeshQualityErrorLimit"></a>

### MeshControls.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: System.Double)

Set Mesh Quality Error Level

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### MeshControls.SetSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Error Level

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CreateMQSurfaceElementsNamedSelection"></a>

### MeshControls.CreateMQSurfaceElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), failCode: System.UInt32)

Create Mesh Quality Surface Element Named Selection

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetIsSolidTargetMetric"></a>

### MeshControls.GetIsSolidTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Solid Target Metric

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshQualityName"></a>

### MeshControls.GetVolumeMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshQualityWarningLimit"></a>

### MeshControls.GetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshQualityErrorLimit"></a>

### MeshControls.GetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshQualityPercentageFailed"></a>

### MeshControls.GetVolumeMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshQualityCountFailed"></a>

### MeshControls.GetVolumeMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshQualityWarningPercentageFailed"></a>

### MeshControls.GetVolumeMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshQualityWarningCountFailed"></a>

### MeshControls.GetVolumeMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshQualityWorstMetricValue"></a>

### MeshControls.GetVolumeMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshQualityAverageMetricValue"></a>

### MeshControls.GetVolumeMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshQualityWorstMetricBackgroundColor"></a>

### MeshControls.GetVolumeMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetActiveVolumeMeshQuality"></a>

### MeshControls.SetActiveVolumeMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), activeMetric: System.Double)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetVolumeMeshQualityWarningLimit"></a>

### MeshControls.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: System.Double)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### MeshControls.SetVolumeMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetVolumeMeshQualityErrorLimit"></a>

### MeshControls.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: System.Double)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### MeshControls.SetVolumeMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CreateMQVolumeElementsNamedSelection"></a>

### MeshControls.CreateMQVolumeElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), failCode: System.UInt32)

Create Mesh Quality Volume Element Name Selection

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetIsSolidSurfaceTargetMetric"></a>

### MeshControls.GetIsSolidSurfaceTargetMetric(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get SolidSurface Target Metric

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshQualityName"></a>

### MeshControls.GetSolidSurfaceMeshQualityName(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Name

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshQualityWarningLimit"></a>

### MeshControls.GetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshQualityErrorLimit"></a>

### MeshControls.GetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshQualityPercentageFailed"></a>

### MeshControls.GetSolidSurfaceMeshQualityPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshQualityCountFailed"></a>

### MeshControls.GetSolidSurfaceMeshQualityCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Count Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshQualityWarningPercentageFailed"></a>

### MeshControls.GetSolidSurfaceMeshQualityWarningPercentageFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Percentage Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshQualityWarningCountFailed"></a>

### MeshControls.GetSolidSurfaceMeshQualityWarningCountFailed(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Warning Count Failed

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshQualityWorstMetricValue"></a>

### MeshControls.GetSolidSurfaceMeshQualityWorstMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Worst Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshQualityAverageMetricValue"></a>

### MeshControls.GetSolidSurfaceMeshQualityAverageMetricValue(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Average Metric Value

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor"></a>

### MeshControls.GetSolidSurfaceMeshQualityWorstMetricBackgroundColor(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

Get Mesh Quality Worst Metric BackgroundColor

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetActiveSolidSurfaceMeshQuality"></a>

### MeshControls.SetActiveSolidSurfaceMeshQuality(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), activeMetric: System.Double)

Set Active Mesh Quality

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetSolidSurfaceMeshQualityWarningLimit"></a>

### MeshControls.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: System.Double)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### MeshControls.SetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetSolidSurfaceMeshQualityErrorLimit"></a>

### MeshControls.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: System.Double)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### MeshControls.SetSolidSurfaceMeshQualityErrorLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), errorLevel: Ansys.Core.Units.Quantity)

Set Mesh Quality Error Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CreateMQSolidSurfaceElementsNamedSelection"></a>

### MeshControls.CreateMQSolidSurfaceElementsNamedSelection(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), failCode: System.UInt32)

Create Mesh Quality SolidSurface Element Name Selection

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.LoadMQWorksheetFile"></a>

### MeshControls.LoadMQWorksheetFile(filePath: System.String)

LoadMQWorksheetFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SaveMQWorksheetFile"></a>

### MeshControls.SaveMQWorksheetFile(filePath: System.String)

SaveMQWorksheetFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetVolumeMeshMetrics"></a>

### MeshControls.GetVolumeMeshMetrics()

GetVolumeMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetSolidSurfaceMeshMetrics"></a>

### MeshControls.GetSolidSurfaceMeshMetrics()

GetSolidSurfaceMeshMetrics method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetSurfaceMeshMetricLimits"></a>

### MeshControls.SetSurfaceMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLimit: Ansys.Core.Units.Quantity, ErrorLimit: Ansys.Core.Units.Quantity)

SetSurfaceMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetSolidMeshMetricLimits"></a>

### MeshControls.SetSolidMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLimit: Ansys.Core.Units.Quantity, ErrorLimit: Ansys.Core.Units.Quantity)

SetSolidMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetSolidSurfaceMeshMetricLimits"></a>

### MeshControls.SetSolidSurfaceMeshMetricLimits(metricType: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), warningLimit: Ansys.Core.Units.Quantity, ErrorLimit: Ansys.Core.Units.Quantity)

SetSolidSurfaceMeshMetricLimits method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ActivateAllSurfaceWorksheetRows"></a>

### MeshControls.ActivateAllSurfaceWorksheetRows()

ActivateAllSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ActivateAllVolumeWorksheetRows"></a>

### MeshControls.ActivateAllVolumeWorksheetRows()

ActivateAllVolumeWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ActivateAllSolidSurfaceWorksheetRows"></a>

### MeshControls.ActivateAllSolidSurfaceWorksheetRows()

ActivateAllSolidSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DeactivateAllSurfaceWorksheetRows"></a>

### MeshControls.DeactivateAllSurfaceWorksheetRows()

DeactivateAllSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DeactivateAllVolumeWorksheetRows"></a>

### MeshControls.DeactivateAllVolumeWorksheetRows()

DeactivateAllVolumeWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.DeactivateAllSolidSurfaceWorksheetRows"></a>

### MeshControls.DeactivateAllSolidSurfaceWorksheetRows()

DeactivateAllSolidSurfaceWorksheetRows method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SetMeshMetricOptions"></a>

### MeshControls.SetMeshMetricOptions(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType), prefValue: Ansys.Mechanical.DataModel.Enums.MetricPreference)

SetMeshMetricOptions method.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GetMeshMetricOptions"></a>

### MeshControls.GetMeshMetricOptions(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../Mechanical/DataModel/Enums/MeshMetricType.md#MeshMetricType))

GetMeshMetricOptions method.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MeshControl"></a>

### *class* MeshControls.MeshControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MeshControl.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id268"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import MeshControl
```

<a id="id269"></a>

## Property detail

<a id="id270"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

## Method detail

<a id="id282"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Connect"></a>

### *class* MeshControls.Connect

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Connect.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`ConnectionToleranceList`](#id303)                                                                                    | Gets or sets the ConnectionToleranceList.                     |
| [`ConnectionTolerance`](#id304)                                                                                        | Gets or sets the ConnectionTolerance.                         |
| [`ConnectionSize`](#id305)                                                                                             | Gets or sets the ConnectionSize.                              |
| [`CoplanarAngleTolerance`](#MeshControls.CoplanarAngleTolerance)                                                       | Gets or sets the CoplanarAngleTolerance.                      |
| [`ConnectionOption`](#MeshControls.ConnectionOption)                                                                   | Gets or sets the ConnectionOption.                            |
| [`MultipleConnectionStep`](#MeshControls.MultipleConnectionStep)                                                       | Gets or sets the MultipleConnectionStep.                      |
| [`PerformIntersections`](#MeshControls.PerformIntersections)                                                           | Gets or sets the PerformIntersections.                        |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id300"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Connect
```

<a id="id301"></a>

## Property detail

<a id="id302"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* MeshControls.ConnectionToleranceList *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionToleranceList.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* MeshControls.ConnectionTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionTolerance.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* MeshControls.ConnectionSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.CoplanarAngleTolerance"></a>

### *property* MeshControls.CoplanarAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoplanarAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ConnectionOption"></a>

### *property* MeshControls.ConnectionOption *: [Ansys.Mechanical.DataModel.Enums.ConnectionOptions](../../../../Mechanical/DataModel/Enums/ConnectionOptions.md#ConnectionOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MultipleConnectionStep"></a>

### *property* MeshControls.MultipleConnectionStep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultipleConnectionStep.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PerformIntersections"></a>

### *property* MeshControls.PerformIntersections *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PerformIntersections.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

## Method detail

<a id="id319"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ContactSizing"></a>

### *class* MeshControls.ContactSizing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactSizing.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Relevance`](Relevance.md#Relevance)                                                                                  | Gets or sets the Relevance.                                   |
| [`Type`](#id341)                                                                                                       | Gets or sets the Type.                                        |
| [`ElementSize`](#id342)                                                                                                | Gets or sets the ElementSize.                                 |
| [`ContactRegion`](../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id337"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import ContactSizing
```

<a id="id338"></a>

## Property detail

<a id="id339"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* MeshControls.Relevance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Relevance.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* MeshControls.Type *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* MeshControls.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.ContactRegion"></a>

### *property* MeshControls.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

## Method detail

<a id="id354"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FaceMeshing"></a>

### *class* MeshControls.FaceMeshing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FaceMeshing.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`ConstrainBoundary`](#id375)                                                                                          | Gets or sets the ConstrainBoundary.                           |
| [`InternalNumberOfDivisions`](#MeshControls.InternalNumberOfDivisions)                                                 | Gets or sets the InternalNumberOfDivisions.                   |
| [`Method`](#id376)                                                                                                     | Gets or sets the Method.                                      |
| [`Active`](#id377)                                                                                                     | Gets the Active.                                              |
| [`MappedMesh`](#MeshControls.MappedMesh)                                                                               | Gets or sets the MappedMesh.                                  |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                    |
| [`SpecifiedCorners`](#MeshControls.SpecifiedCorners)                                                                   | Gets or sets the SpecifiedCorners.                            |
| [`SpecifiedEnds`](#MeshControls.SpecifiedEnds)                                                                         | Gets or sets the SpecifiedEnds.                               |
| [`SpecifiedSides`](#MeshControls.SpecifiedSides)                                                                       | Gets or sets the SpecifiedSides.                              |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id372"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import FaceMeshing
```

<a id="id373"></a>

## Property detail

<a id="id374"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* MeshControls.ConstrainBoundary *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstrainBoundary.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.InternalNumberOfDivisions"></a>

### *property* MeshControls.InternalNumberOfDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InternalNumberOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* MeshControls.Method *: [Ansys.Mechanical.DataModel.Enums.FaceMeshingMethod](../../../../Mechanical/DataModel/Enums/FaceMeshingMethod.md#FaceMeshingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* MeshControls.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MappedMesh"></a>

### *property* MeshControls.MappedMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MappedMesh.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SpecifiedCorners"></a>

### *property* MeshControls.SpecifiedCorners *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpecifiedCorners.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SpecifiedEnds"></a>

### *property* MeshControls.SpecifiedEnds *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpecifiedEnds.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SpecifiedSides"></a>

### *property* MeshControls.SpecifiedSides *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpecifiedSides.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

## Method detail

<a id="id391"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FeatureSuppress"></a>

### *class* MeshControls.FeatureSuppress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FeatureSuppress.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.                              |
| [`FeatureHeight`](#MeshControls.FeatureHeight)                                                                         | To specify the Feature Height.                                                  |
| [`SourceSelection`](#MeshControls.SourceSelection)                                                                     | To select the FeatureSuppress method.                                           |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                                                |
| [`SourceNamedSelection`](#MeshControls.SourceNamedSelection)                                                           | Gets or sets the SourceNamedSelection.                                          |
| [`SourceLocation`](#id413)                                                                                             | To specify the face selections for the method: Defeature Faces or Parent Faces. |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                                      |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                    |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                                                 |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                                    |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                                      |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                                           |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                                            |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                                             |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.                              |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                                    |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object.                   |

<a id="id409"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import FeatureSuppress
```

<a id="id410"></a>

## Property detail

<a id="id411"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.FeatureHeight"></a>

### *property* MeshControls.FeatureHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the Feature Height.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SourceSelection"></a>

### *property* MeshControls.SourceSelection *: [Ansys.Mechanical.DataModel.Enums.FeatureSuppressMethod](../../../../Mechanical/DataModel/Enums/FeatureSuppressMethod.md#FeatureSuppressMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

To select the FeatureSuppress method.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SourceNamedSelection"></a>

### *property* MeshControls.SourceNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* MeshControls.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the face selections for the method: Defeature Faces or Parent Faces.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

## Method detail

<a id="id426"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.GeometryFidelity"></a>

### *class* MeshControls.GeometryFidelity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GeometryFidelity.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id444"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import GeometryFidelity
```

<a id="id445"></a>

## Property detail

<a id="id446"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

## Method detail

<a id="id460"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MatchControl"></a>

### *class* MeshControls.MatchControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MatchControl.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Transformation`](#MeshControls.Transformation)                                                                       | Gets or sets the Transformation.                              |
| [`ControlMessages`](#id481)                                                                                            | Gets the ControlMessages.                                     |
| [`HighNamedSelection`](#MeshControls.HighNamedSelection)                                                               | Gets or sets the HighNamedSelection.                          |
| [`LowNamedSelection`](#MeshControls.LowNamedSelection)                                                                 | Gets or sets the LowNamedSelection.                           |
| [`RotationAxis`](#MeshControls.RotationAxis)                                                                           | Gets or sets the RotationAxis.                                |
| [`HighCoordinateSystem`](#MeshControls.HighCoordinateSystem)                                                           | Gets or sets the HighCoordinateSystem.                        |
| [`LowCoordinateSystem`](#MeshControls.LowCoordinateSystem)                                                             | Gets or sets the LowCoordinateSystem.                         |
| [`HighGeometrySelection`](#MeshControls.HighGeometrySelection)                                                         | Gets or sets the HighGeometrySelection.                       |
| [`LowGeometrySelection`](#MeshControls.LowGeometrySelection)                                                           | Gets or sets the LowGeometrySelection.                        |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id478"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import MatchControl
```

<a id="id479"></a>

## Property detail

<a id="id480"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Transformation"></a>

### *property* MeshControls.Transformation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Transformation.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### *property* MeshControls.ControlMessages *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ControlMessages.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.HighNamedSelection"></a>

### *property* MeshControls.HighNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.LowNamedSelection"></a>

### *property* MeshControls.LowNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.RotationAxis"></a>

### *property* MeshControls.RotationAxis *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationAxis.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.HighCoordinateSystem"></a>

### *property* MeshControls.HighCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.LowCoordinateSystem"></a>

### *property* MeshControls.LowCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.HighGeometrySelection"></a>

### *property* MeshControls.HighGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.LowGeometrySelection"></a>

### *property* MeshControls.LowGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

## Method detail

<a id="id493"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id500"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id501"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id502"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MeshCopy"></a>

### *class* MeshControls.MeshCopy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MeshCopy.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`TargetScoping`](#MeshControls.TargetScoping)                                                                         | Gets or sets the TargetScoping.                               |
| [`SourceAnchorsNamedSelection`](#MeshControls.SourceAnchorsNamedSelection)                                             | Gets or sets the SourceAnchorsNamedSelection.                 |
| [`TargetAnchorsNamedSelection`](#MeshControls.TargetAnchorsNamedSelection)                                             | Gets or sets the TargetAnchorsNamedSelection.                 |
| [`SourceAnchors`](#MeshControls.SourceAnchors)                                                                         | Gets or sets the SourceAnchors.                               |
| [`TargetAnchors`](#MeshControls.TargetAnchors)                                                                         | Gets or sets the TargetAnchors.                               |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id511"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import MeshCopy
```

<a id="id512"></a>

## Property detail

<a id="id513"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TargetScoping"></a>

### *property* MeshControls.TargetScoping *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetScoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SourceAnchorsNamedSelection"></a>

### *property* MeshControls.SourceAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TargetAnchorsNamedSelection"></a>

### *property* MeshControls.TargetAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SourceAnchors"></a>

### *property* MeshControls.SourceAnchors *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceAnchors.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.TargetAnchors"></a>

### *property* MeshControls.TargetAnchors *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAnchors.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

## Method detail

<a id="id525"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.Pinch"></a>

### *class* MeshControls.Pinch

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Pinch.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`AutoManualMode`](#MeshControls.AutoManualMode)                                                                       | Gets the AutoManualMode.                                      |
| [`Tolerance`](#id546)                                                                                                  | Gets or sets the Tolerance.                                   |
| [`MasterGeometry`](#MeshControls.MasterGeometry)                                                                       | Gets or sets the MasterGeometry.                              |
| [`SlaveGeometry`](#MeshControls.SlaveGeometry)                                                                         | Gets or sets the SlaveGeometry.                               |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id543"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Pinch
```

<a id="id544"></a>

## Property detail

<a id="id545"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.AutoManualMode"></a>

### *property* MeshControls.AutoManualMode *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AutoManualMode.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* MeshControls.Tolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.MasterGeometry"></a>

### *property* MeshControls.MasterGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterGeometry.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.SlaveGeometry"></a>

### *property* MeshControls.SlaveGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveGeometry.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id556"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

## Method detail

<a id="id558"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### *class* MeshControls.Refinement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Refinement.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`NumberOfRefinements`](#MeshControls.NumberOfRefinements)                                                             | Gets or sets the NumberOfRefinements.                         |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id577"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Refinement
```

<a id="id578"></a>

## Property detail

<a id="id579"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.NumberOfRefinements"></a>

### *property* MeshControls.NumberOfRefinements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRefinements.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id583"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id584"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id585"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

## Method detail

<a id="id593"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### *class* MeshControls.Relevance

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Relevance.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateMesh`](#id628)            | Generate the Mesh.                                                                |
| [`RenameBasedOnDefinition`](#id629) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id630)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id632)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id633)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id634)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id635)                | Creates a new child Image.                                                        |
| [`Activate`](#id636)                | Activate the current object.                                                      |
| [`CopyTo`](#id637)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id638)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id639) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id640)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id641)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id642)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id643)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id644)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id645)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`PartRelavance`](#MeshControls.PartRelavance)                                                                         | Gets the PartRelavance.                                       |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#id616)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#id618)                                                                                              | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id619)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#id620)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id621)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id622)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id623)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id624)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id625)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id626)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id612"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Relevance
```

<a id="id613"></a>

## Property detail

<a id="id614"></a>

### *property* MeshControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControls.PartRelavance"></a>

### *property* MeshControls.PartRelavance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PartRelavance.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### *property* MeshControls.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### *property* MeshControls.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### *property* MeshControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### *property* MeshControls.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### *property* MeshControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### *property* MeshControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### *property* MeshControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### *property* MeshControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### *property* MeshControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### *property* MeshControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### *property* MeshControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### *property* MeshControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

## Method detail

<a id="id628"></a>

### MeshControls.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### MeshControls.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### MeshControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### MeshControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### MeshControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### MeshControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### MeshControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### MeshControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### MeshControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### MeshControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

### MeshControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id639"></a>

### MeshControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### MeshControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### MeshControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### MeshControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### MeshControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### MeshControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### MeshControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
