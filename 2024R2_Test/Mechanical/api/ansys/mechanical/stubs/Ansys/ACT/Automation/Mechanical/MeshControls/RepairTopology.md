# RepairTopology

### *class* RepairTopology

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RepairTopology.

> <!-- !! processed by numpydoc !! -->

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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import RepairTopology
```

## Property detail

### *property* RepairTopology.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PinchTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchTolerance.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SharpAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngle.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ShortEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeLength.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ThinFaceWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceWidth.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.CollapseShortEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CollapseShortEdges.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.FillHole *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHole.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.FillHoleGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.MergeFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFaces.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.MergeFacesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PinchFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFaces.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PinchFacesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PinchFacesUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesUseLocalScoping.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.RemoveSharpAngleFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveSharpAngleFaces.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.RemoveThinFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveThinFaces.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SharpAngleGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SharpAngleUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleUseLocalScoping.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ShortEdgeGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ShortEdgeUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeUseLocalScoping.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SuppressEdgesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SuppressEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdges.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ThinFaceGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ThinFacesUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFacesUseLocalScoping.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.FillHoleNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.MergeFacesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PinchFacesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SharpAngleNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ShortEdgeNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SuppressEdgesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ThinFaceNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.FillHoleGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.MergeFacesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PinchFacesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SharpAngleGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ShortEdgeGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SuppressEdgesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ThinFaceGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RepairTopology.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### RepairTopology.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### RepairTopology.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RepairTopology.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RepairTopology.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RepairTopology.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RepairTopology.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RepairTopology.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### RepairTopology.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RepairTopology.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RepairTopology.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RepairTopology.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RepairTopology.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RepairTopology.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RepairTopology.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RepairTopology.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RepairTopology.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RepairTopology.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
