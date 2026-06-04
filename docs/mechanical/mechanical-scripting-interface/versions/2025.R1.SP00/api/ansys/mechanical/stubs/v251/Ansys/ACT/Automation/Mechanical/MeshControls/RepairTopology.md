# `RepairTopology`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.RepairTopology"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.RepairTopology

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RepairTopology.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RepairTopology.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#RepairTopology.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RepairTopology.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RepairTopology.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#RepairTopology.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RepairTopology.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#RepairTopology.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#RepairTopology.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#RepairTopology.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#RepairTopology.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#RepairTopology.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RepairTopology.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RepairTopology.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#RepairTopology.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#RepairTopology.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RepairTopology.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#RepairTopology.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Children`](#RepairTopology.Children)                                                             | Gets the list of children.                                                                                                                                                            |
| [`CollapseShortEdges`](#RepairTopology.CollapseShortEdges)                                         | Gets or sets the CollapseShortEdges.                                                                                                                                                  |
| [`Comments`](#RepairTopology.Comments)                                                             | Gets the list of associated comments.                                                                                                                                                 |
| [`DataModelObjectCategory`](#RepairTopology.DataModelObjectCategory)                               | Gets the current DataModelObject’s category.                                                                                                                                          |
| [`FeatureAngle`](#RepairTopology.FeatureAngle)                                                     | Gets or sets the FeatureAngle.                                                                                                                                                        |
| [`Figures`](#RepairTopology.Figures)                                                               | Gets the list of associated figures.                                                                                                                                                  |
| [`FillHole`](#RepairTopology.FillHole)                                                             | Gets or sets the FillHole.                                                                                                                                                            |
| [`FillHoleGeometryDefineBy`](#RepairTopology.FillHoleGeometryDefineBy)                             | Gets or sets the FillHoleGeometryDefineBy.                                                                                                                                            |
| [`FillHoleGeometrySelection`](#RepairTopology.FillHoleGeometrySelection)                           | Gets or sets the FillHoleGeometrySelection.                                                                                                                                           |
| [`FillHoleNamedSelection`](#RepairTopology.FillHoleNamedSelection)                                 | Gets or sets the FillHoleNamedSelection.                                                                                                                                              |
| [`Images`](#RepairTopology.Images)                                                                 | Gets the list of associated images.                                                                                                                                                   |
| [`InternalObject`](#RepairTopology.InternalObject)                                                 | Gets the internal object. For advanced usage only.                                                                                                                                    |
| [`MergeFaces`](#RepairTopology.MergeFaces)                                                         | Gets or sets the MergeFaces.                                                                                                                                                          |
| [`MergeFacesGeometryDefineBy`](#RepairTopology.MergeFacesGeometryDefineBy)                         | Gets or sets the MergeFacesGeometryDefineBy.                                                                                                                                          |
| [`MergeFacesGeometrySelection`](#RepairTopology.MergeFacesGeometrySelection)                       | Gets or sets the MergeFacesGeometrySelection.                                                                                                                                         |
| [`MergeFacesNamedSelection`](#RepairTopology.MergeFacesNamedSelection)                             | Gets or sets the MergeFacesNamedSelection.                                                                                                                                            |
| [`PartialDefeatureGeometrySelection`](#RepairTopology.PartialDefeatureGeometrySelection)           | Gets or sets the partial defeature scoping using geometry selections.                                                                                                                 |
| [`PartialDefeatureNamedSelection`](#RepairTopology.PartialDefeatureNamedSelection)                 | Gets or sets the partial defeature scoping using named selections.                                                                                                                    |
| [`PinchFaces`](#RepairTopology.PinchFaces)                                                         | Gets or sets the PinchFaces.                                                                                                                                                          |
| [`PinchFacesGeometryDefineBy`](#RepairTopology.PinchFacesGeometryDefineBy)                         | Gets or sets the PinchFacesGeometryDefineBy.                                                                                                                                          |
| [`PinchFacesGeometrySelection`](#RepairTopology.PinchFacesGeometrySelection)                       | Gets or sets the PinchFacesGeometrySelection.                                                                                                                                         |
| [`PinchFacesNamedSelection`](#RepairTopology.PinchFacesNamedSelection)                             | Gets or sets the PinchFacesNamedSelection.                                                                                                                                            |
| [`PinchFacesUseLocalScoping`](#RepairTopology.PinchFacesUseLocalScoping)                           | Gets or sets the PinchFacesUseLocalScoping.                                                                                                                                           |
| [`PinchTolerance`](#RepairTopology.PinchTolerance)                                                 | Gets or sets the PinchTolerance.                                                                                                                                                      |
| [`Properties`](#RepairTopology.Properties)                                                         | Gets the list of properties for this object.                                                                                                                                          |
| [`RemoveSharpAngleFaces`](#RepairTopology.RemoveSharpAngleFaces)                                   | Gets or sets the RemoveSharpAngleFaces.                                                                                                                                               |
| [`RemoveThinFaces`](#RepairTopology.RemoveThinFaces)                                               | Gets or sets the RemoveThinFaces.                                                                                                                                                     |
| [`RepairPartialDefeature`](#RepairTopology.RepairPartialDefeature)                                 | Gets or sets the use of partial defeature, which partially removes thin faces and sharp angles within provided tolerances, such that only topology impacting mesh quality is removed. |
| [`RepairPartialDefeatureGeometryDefineBy`](#RepairTopology.RepairPartialDefeatureGeometryDefineBy) | Gets or sets the type of scoping selection to be used with Partial Defeature.                                                                                                         |
| [`ScopingMethod`](#RepairTopology.ScopingMethod)                                                   | Gets or sets the ScopingMethod.                                                                                                                                                       |
| [`SharpAngle`](#RepairTopology.SharpAngle)                                                         | Gets or sets the SharpAngle.                                                                                                                                                          |
| [`SharpAngleGeometryDefineBy`](#RepairTopology.SharpAngleGeometryDefineBy)                         | Gets or sets the SharpAngleGeometryDefineBy.                                                                                                                                          |
| [`SharpAngleGeometrySelection`](#RepairTopology.SharpAngleGeometrySelection)                       | Gets or sets the SharpAngleGeometrySelection.                                                                                                                                         |
| [`SharpAngleNamedSelection`](#RepairTopology.SharpAngleNamedSelection)                             | Gets or sets the SharpAngleNamedSelection.                                                                                                                                            |
| [`SharpAngleUseLocalScoping`](#RepairTopology.SharpAngleUseLocalScoping)                           | Gets or sets the SharpAngleUseLocalScoping.                                                                                                                                           |
| [`ShortEdgeGeometryDefineBy`](#RepairTopology.ShortEdgeGeometryDefineBy)                           | Gets or sets the ShortEdgeGeometryDefineBy.                                                                                                                                           |
| [`ShortEdgeGeometrySelection`](#RepairTopology.ShortEdgeGeometrySelection)                         | Gets or sets the ShortEdgeGeometrySelection.                                                                                                                                          |
| [`ShortEdgeLength`](#RepairTopology.ShortEdgeLength)                                               | Gets or sets the ShortEdgeLength.                                                                                                                                                     |
| [`ShortEdgeNamedSelection`](#RepairTopology.ShortEdgeNamedSelection)                               | Gets or sets the ShortEdgeNamedSelection.                                                                                                                                             |
| [`ShortEdgeUseLocalScoping`](#RepairTopology.ShortEdgeUseLocalScoping)                             | Gets or sets the ShortEdgeUseLocalScoping.                                                                                                                                            |
| [`SuppressEdges`](#RepairTopology.SuppressEdges)                                                   | Gets or sets the SuppressEdges.                                                                                                                                                       |
| [`SuppressEdgesGeometryDefineBy`](#RepairTopology.SuppressEdgesGeometryDefineBy)                   | Gets or sets the SuppressEdgesGeometryDefineBy.                                                                                                                                       |
| [`SuppressEdgesGeometrySelection`](#RepairTopology.SuppressEdgesGeometrySelection)                 | Gets or sets the SuppressEdgesGeometrySelection.                                                                                                                                      |
| [`SuppressEdgesNamedSelection`](#RepairTopology.SuppressEdgesNamedSelection)                       | Gets or sets the SuppressEdgesNamedSelection.                                                                                                                                         |
| [`Suppressed`](#RepairTopology.Suppressed)                                                         | Gets or sets the Suppressed.                                                                                                                                                          |
| [`ThinFaceGeometryDefineBy`](#RepairTopology.ThinFaceGeometryDefineBy)                             | Gets or sets the ThinFaceGeometryDefineBy.                                                                                                                                            |
| [`ThinFaceGeometrySelection`](#RepairTopology.ThinFaceGeometrySelection)                           | Gets or sets the ThinFaceGeometrySelection.                                                                                                                                           |
| [`ThinFaceNamedSelection`](#RepairTopology.ThinFaceNamedSelection)                                 | Gets or sets the ThinFaceNamedSelection.                                                                                                                                              |
| [`ThinFaceWidth`](#RepairTopology.ThinFaceWidth)                                                   | Gets or sets the ThinFaceWidth.                                                                                                                                                       |
| [`ThinFacesUseLocalScoping`](#RepairTopology.ThinFacesUseLocalScoping)                             | Gets or sets the ThinFacesUseLocalScoping.                                                                                                                                            |
| [`VisibleProperties`](#RepairTopology.VisibleProperties)                                           | Gets the list of properties that are visible for this object.                                                                                                                         |

<a id="property-detail"></a>

## Property detail

<a id="RepairTopology.Children"></a>

### *property* RepairTopology.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.CollapseShortEdges"></a>

### *property* RepairTopology.CollapseShortEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CollapseShortEdges.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Comments"></a>

### *property* RepairTopology.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.DataModelObjectCategory"></a>

### *property* RepairTopology.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.FeatureAngle"></a>

### *property* RepairTopology.FeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FeatureAngle.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Figures"></a>

### *property* RepairTopology.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.FillHole"></a>

### *property* RepairTopology.FillHole *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHole.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.FillHoleGeometryDefineBy"></a>

### *property* RepairTopology.FillHoleGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.FillHoleGeometrySelection"></a>

### *property* RepairTopology.FillHoleGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.FillHoleNamedSelection"></a>

### *property* RepairTopology.FillHoleNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Images"></a>

### *property* RepairTopology.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.InternalObject"></a>

### *property* RepairTopology.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.MergeFaces"></a>

### *property* RepairTopology.MergeFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFaces.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.MergeFacesGeometryDefineBy"></a>

### *property* RepairTopology.MergeFacesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.MergeFacesGeometrySelection"></a>

### *property* RepairTopology.MergeFacesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.MergeFacesNamedSelection"></a>

### *property* RepairTopology.MergeFacesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PartialDefeatureGeometrySelection"></a>

### *property* RepairTopology.PartialDefeatureGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the partial defeature scoping using geometry selections.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PartialDefeatureNamedSelection"></a>

### *property* RepairTopology.PartialDefeatureNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the partial defeature scoping using named selections.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchFaces"></a>

### *property* RepairTopology.PinchFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFaces.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchFacesGeometryDefineBy"></a>

### *property* RepairTopology.PinchFacesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchFacesGeometrySelection"></a>

### *property* RepairTopology.PinchFacesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchFacesNamedSelection"></a>

### *property* RepairTopology.PinchFacesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchFacesUseLocalScoping"></a>

### *property* RepairTopology.PinchFacesUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PinchTolerance"></a>

### *property* RepairTopology.PinchTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchTolerance.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Properties"></a>

### *property* RepairTopology.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.RemoveSharpAngleFaces"></a>

### *property* RepairTopology.RemoveSharpAngleFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveSharpAngleFaces.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.RemoveThinFaces"></a>

### *property* RepairTopology.RemoveThinFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveThinFaces.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.RepairPartialDefeature"></a>

### *property* RepairTopology.RepairPartialDefeature *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the use of partial defeature, which partially removes thin faces and sharp angles within provided tolerances, such that only topology impacting mesh quality is removed.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.RepairPartialDefeatureGeometryDefineBy"></a>

### *property* RepairTopology.RepairPartialDefeatureGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scoping selection to be used with Partial Defeature.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ScopingMethod"></a>

### *property* RepairTopology.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SharpAngle"></a>

### *property* RepairTopology.SharpAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngle.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SharpAngleGeometryDefineBy"></a>

### *property* RepairTopology.SharpAngleGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SharpAngleGeometrySelection"></a>

### *property* RepairTopology.SharpAngleGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SharpAngleNamedSelection"></a>

### *property* RepairTopology.SharpAngleNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SharpAngleUseLocalScoping"></a>

### *property* RepairTopology.SharpAngleUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ShortEdgeGeometryDefineBy"></a>

### *property* RepairTopology.ShortEdgeGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ShortEdgeGeometrySelection"></a>

### *property* RepairTopology.ShortEdgeGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ShortEdgeLength"></a>

### *property* RepairTopology.ShortEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ShortEdgeNamedSelection"></a>

### *property* RepairTopology.ShortEdgeNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ShortEdgeUseLocalScoping"></a>

### *property* RepairTopology.ShortEdgeUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SuppressEdges"></a>

### *property* RepairTopology.SuppressEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdges.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SuppressEdgesGeometryDefineBy"></a>

### *property* RepairTopology.SuppressEdgesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SuppressEdgesGeometrySelection"></a>

### *property* RepairTopology.SuppressEdgesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.SuppressEdgesNamedSelection"></a>

### *property* RepairTopology.SuppressEdgesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Suppressed"></a>

### *property* RepairTopology.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ThinFaceGeometryDefineBy"></a>

### *property* RepairTopology.ThinFaceGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ThinFaceGeometrySelection"></a>

### *property* RepairTopology.ThinFaceGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ThinFaceNamedSelection"></a>

### *property* RepairTopology.ThinFaceNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ThinFaceWidth"></a>

### *property* RepairTopology.ThinFaceWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceWidth.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.ThinFacesUseLocalScoping"></a>

### *property* RepairTopology.ThinFacesUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFacesUseLocalScoping.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.VisibleProperties"></a>

### *property* RepairTopology.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RepairTopology.Activate"></a>

### RepairTopology.Activate()

Activate the current object.

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

### RepairTopology.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.CopyTo"></a>

### RepairTopology.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.CreateParameter"></a>

### RepairTopology.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Delete"></a>

### RepairTopology.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.Duplicate"></a>

### RepairTopology.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.GenerateMesh"></a>

### RepairTopology.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.GetChildren"></a>

### RepairTopology.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.GetParameter"></a>

### RepairTopology.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.GroupAllSimilarChildren"></a>

### RepairTopology.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.GroupSimilarObjects"></a>

### RepairTopology.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PropertyByAPIName"></a>

### RepairTopology.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.PropertyByName"></a>

### RepairTopology.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.RemoveParameter"></a>

### RepairTopology.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RepairTopology.RenameBasedOnDefinition"></a>

### RepairTopology.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

