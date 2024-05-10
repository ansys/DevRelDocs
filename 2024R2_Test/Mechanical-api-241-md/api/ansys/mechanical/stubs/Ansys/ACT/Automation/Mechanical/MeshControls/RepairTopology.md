<a id="repairtopology"></a>

# RepairTopology

<a id="RepairTopology"></a>

### *class* RepairTopology

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RepairTopology.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`GenerateMesh`](#RepairTopology.GenerateMesh)                       | Generate the Mesh.                                                                |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#RepairTopology.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#RepairTopology.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RepairTopology.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RepairTopology.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RepairTopology.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RepairTopology.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RepairTopology.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RepairTopology.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RepairTopology.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RepairTopology.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RepairTopology.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RepairTopology.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RepairTopology.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RepairTopology.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RepairTopology.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`PinchTolerance`](#RepairTopology.PinchTolerance)                                                                     | Gets or sets the PinchTolerance.                              |
| [`SharpAngle`](#RepairTopology.SharpAngle)                                                                             | Gets or sets the SharpAngle.                                  |
| [`ShortEdgeLength`](#RepairTopology.ShortEdgeLength)                                                                   | Gets or sets the ShortEdgeLength.                             |
| [`ThinFaceWidth`](#RepairTopology.ThinFaceWidth)                                                                       | Gets or sets the ThinFaceWidth.                               |
| [`CollapseShortEdges`](#RepairTopology.CollapseShortEdges)                                                             | Gets or sets the CollapseShortEdges.                          |
| [`FillHole`](#RepairTopology.FillHole)                                                                                 | Gets or sets the FillHole.                                    |
| [`FillHoleGeometryDefineBy`](#RepairTopology.FillHoleGeometryDefineBy)                                                 | Gets or sets the FillHoleGeometryDefineBy.                    |
| [`MergeFaces`](#RepairTopology.MergeFaces)                                                                             | Gets or sets the MergeFaces.                                  |
| [`MergeFacesGeometryDefineBy`](#RepairTopology.MergeFacesGeometryDefineBy)                                             | Gets or sets the MergeFacesGeometryDefineBy.                  |
| [`PinchFaces`](#RepairTopology.PinchFaces)                                                                             | Gets or sets the PinchFaces.                                  |
| [`PinchFacesGeometryDefineBy`](#RepairTopology.PinchFacesGeometryDefineBy)                                             | Gets or sets the PinchFacesGeometryDefineBy.                  |
| [`PinchFacesUseLocalScoping`](#RepairTopology.PinchFacesUseLocalScoping)                                               | Gets or sets the PinchFacesUseLocalScoping.                   |
| [`RemoveSharpAngleFaces`](#RepairTopology.RemoveSharpAngleFaces)                                                       | Gets or sets the RemoveSharpAngleFaces.                       |
| [`RemoveThinFaces`](#RepairTopology.RemoveThinFaces)                                                                   | Gets or sets the RemoveThinFaces.                             |
| [`SharpAngleGeometryDefineBy`](#RepairTopology.SharpAngleGeometryDefineBy)                                             | Gets or sets the SharpAngleGeometryDefineBy.                  |
| [`SharpAngleUseLocalScoping`](#RepairTopology.SharpAngleUseLocalScoping)                                               | Gets or sets the SharpAngleUseLocalScoping.                   |
| [`ShortEdgeGeometryDefineBy`](#RepairTopology.ShortEdgeGeometryDefineBy)                                               | Gets or sets the ShortEdgeGeometryDefineBy.                   |
| [`ShortEdgeUseLocalScoping`](#RepairTopology.ShortEdgeUseLocalScoping)                                                 | Gets or sets the ShortEdgeUseLocalScoping.                    |
| [`SuppressEdgesGeometryDefineBy`](#RepairTopology.SuppressEdgesGeometryDefineBy)                                       | Gets or sets the SuppressEdgesGeometryDefineBy.               |
| [`SuppressEdges`](#RepairTopology.SuppressEdges)                                                                       | Gets or sets the SuppressEdges.                               |
| [`ThinFaceGeometryDefineBy`](#RepairTopology.ThinFaceGeometryDefineBy)                                                 | Gets or sets the ThinFaceGeometryDefineBy.                    |
| [`ThinFacesUseLocalScoping`](#RepairTopology.ThinFacesUseLocalScoping)                                                 | Gets or sets the ThinFacesUseLocalScoping.                    |
| [`FillHoleNamedSelection`](#RepairTopology.FillHoleNamedSelection)                                                     | Gets or sets the FillHoleNamedSelection.                      |
| [`MergeFacesNamedSelection`](#RepairTopology.MergeFacesNamedSelection)                                                 | Gets or sets the MergeFacesNamedSelection.                    |
| [`PinchFacesNamedSelection`](#RepairTopology.PinchFacesNamedSelection)                                                 | Gets or sets the PinchFacesNamedSelection.                    |
| [`SharpAngleNamedSelection`](#RepairTopology.SharpAngleNamedSelection)                                                 | Gets or sets the SharpAngleNamedSelection.                    |
| [`ShortEdgeNamedSelection`](#RepairTopology.ShortEdgeNamedSelection)                                                   | Gets or sets the ShortEdgeNamedSelection.                     |
| [`SuppressEdgesNamedSelection`](#RepairTopology.SuppressEdgesNamedSelection)                                           | Gets or sets the SuppressEdgesNamedSelection.                 |
| [`ThinFaceNamedSelection`](#RepairTopology.ThinFaceNamedSelection)                                                     | Gets or sets the ThinFaceNamedSelection.                      |
| [`FillHoleGeometrySelection`](#RepairTopology.FillHoleGeometrySelection)                                               | Gets or sets the FillHoleGeometrySelection.                   |
| [`MergeFacesGeometrySelection`](#RepairTopology.MergeFacesGeometrySelection)                                           | Gets or sets the MergeFacesGeometrySelection.                 |
| [`PinchFacesGeometrySelection`](#RepairTopology.PinchFacesGeometrySelection)                                           | Gets or sets the PinchFacesGeometrySelection.                 |
| [`SharpAngleGeometrySelection`](#RepairTopology.SharpAngleGeometrySelection)                                           | Gets or sets the SharpAngleGeometrySelection.                 |
| [`ShortEdgeGeometrySelection`](#RepairTopology.ShortEdgeGeometrySelection)                                             | Gets or sets the ShortEdgeGeometrySelection.                  |
| [`SuppressEdgesGeometrySelection`](#RepairTopology.SuppressEdgesGeometrySelection)                                     | Gets or sets the SuppressEdgesGeometrySelection.              |
| [`ThinFaceGeometrySelection`](#RepairTopology.ThinFaceGeometrySelection)                                               | Gets or sets the ThinFaceGeometrySelection.                   |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#RepairTopology.ScopingMethod)                                                                       | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#RepairTopology.Suppressed)                                                                             | Gets or sets the Suppressed.                                  |
| [`Children`](#RepairTopology.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#RepairTopology.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Figures`](#RepairTopology.Figures)                                                                                   | Gets the list of associated figures.                          |
| [`Images`](#RepairTopology.Images)                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RepairTopology.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RepairTopology.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import RepairTopology
```

<a id="property-detail"></a>

## Property detail

<a id="RepairTopology.InternalObject"></a>

### *property* RepairTopology.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchTolerance"></a>

### *property* RepairTopology.PinchTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchTolerance.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SharpAngle"></a>

### *property* RepairTopology.SharpAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngle.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ShortEdgeLength"></a>

### *property* RepairTopology.ShortEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ThinFaceWidth"></a>

### *property* RepairTopology.ThinFaceWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceWidth.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.CollapseShortEdges"></a>

### *property* RepairTopology.CollapseShortEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CollapseShortEdges.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.FillHole"></a>

### *property* RepairTopology.FillHole *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHole.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.FillHoleGeometryDefineBy"></a>

### *property* RepairTopology.FillHoleGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.MergeFaces"></a>

### *property* RepairTopology.MergeFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFaces.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.MergeFacesGeometryDefineBy"></a>

### *property* RepairTopology.MergeFacesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchFaces"></a>

### *property* RepairTopology.PinchFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFaces.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchFacesGeometryDefineBy"></a>

### *property* RepairTopology.PinchFacesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchFacesUseLocalScoping"></a>

### *property* RepairTopology.PinchFacesUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.RemoveSharpAngleFaces"></a>

### *property* RepairTopology.RemoveSharpAngleFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveSharpAngleFaces.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.RemoveThinFaces"></a>

### *property* RepairTopology.RemoveThinFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveThinFaces.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SharpAngleGeometryDefineBy"></a>

### *property* RepairTopology.SharpAngleGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SharpAngleUseLocalScoping"></a>

### *property* RepairTopology.SharpAngleUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ShortEdgeGeometryDefineBy"></a>

### *property* RepairTopology.ShortEdgeGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ShortEdgeUseLocalScoping"></a>

### *property* RepairTopology.ShortEdgeUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SuppressEdgesGeometryDefineBy"></a>

### *property* RepairTopology.SuppressEdgesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SuppressEdges"></a>

### *property* RepairTopology.SuppressEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdges.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ThinFaceGeometryDefineBy"></a>

### *property* RepairTopology.ThinFaceGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ThinFacesUseLocalScoping"></a>

### *property* RepairTopology.ThinFacesUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFacesUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.FillHoleNamedSelection"></a>

### *property* RepairTopology.FillHoleNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.MergeFacesNamedSelection"></a>

### *property* RepairTopology.MergeFacesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchFacesNamedSelection"></a>

### *property* RepairTopology.PinchFacesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SharpAngleNamedSelection"></a>

### *property* RepairTopology.SharpAngleNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ShortEdgeNamedSelection"></a>

### *property* RepairTopology.ShortEdgeNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SuppressEdgesNamedSelection"></a>

### *property* RepairTopology.SuppressEdgesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ThinFaceNamedSelection"></a>

### *property* RepairTopology.ThinFaceNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.FillHoleGeometrySelection"></a>

### *property* RepairTopology.FillHoleGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.MergeFacesGeometrySelection"></a>

### *property* RepairTopology.MergeFacesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchFacesGeometrySelection"></a>

### *property* RepairTopology.PinchFacesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SharpAngleGeometrySelection"></a>

### *property* RepairTopology.SharpAngleGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ShortEdgeGeometrySelection"></a>

### *property* RepairTopology.ShortEdgeGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SuppressEdgesGeometrySelection"></a>

### *property* RepairTopology.SuppressEdgesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ThinFaceGeometrySelection"></a>

### *property* RepairTopology.ThinFaceGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.DataModelObjectCategory"></a>

### *property* RepairTopology.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ScopingMethod"></a>

### *property* RepairTopology.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Suppressed"></a>

### *property* RepairTopology.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Children"></a>

### *property* RepairTopology.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Comments"></a>

### *property* RepairTopology.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Figures"></a>

### *property* RepairTopology.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Images"></a>

### *property* RepairTopology.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RepairTopology.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Properties"></a>

### *property* RepairTopology.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.VisibleProperties"></a>

### *property* RepairTopology.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RepairTopology.GenerateMesh"></a>

### RepairTopology.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.RenameBasedOnDefinition"></a>

### RepairTopology.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Delete"></a>

### RepairTopology.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.GetChildren"></a>

### RepairTopology.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RepairTopology.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.AddComment"></a>

### RepairTopology.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.AddFigure"></a>

### RepairTopology.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.AddImage"></a>

### RepairTopology.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Activate"></a>

### RepairTopology.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.CopyTo"></a>

### RepairTopology.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Duplicate"></a>

### RepairTopology.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.GroupAllSimilarChildren"></a>

### RepairTopology.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.GroupSimilarObjects"></a>

### RepairTopology.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PropertyByName"></a>

### RepairTopology.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PropertyByAPIName"></a>

### RepairTopology.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.CreateParameter"></a>

### RepairTopology.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.GetParameter"></a>

### RepairTopology.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.RemoveParameter"></a>

### RepairTopology.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
