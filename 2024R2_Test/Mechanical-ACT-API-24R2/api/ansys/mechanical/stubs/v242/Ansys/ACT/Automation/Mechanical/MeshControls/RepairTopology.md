# `RepairTopology`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshControls.RepairTopology

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RepairTopology.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `GenerateMesh`            | Generate the Mesh.                                                                |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------|---------------------------------------------------------------|
| `InternalObject`                         | Gets the internal object. For advanced usage only.            |
| `FeatureAngle`                           | Gets or sets the FeatureAngle.                                |
| `PinchTolerance`                         | Gets or sets the PinchTolerance.                              |
| `SharpAngle`                             | Gets or sets the SharpAngle.                                  |
| `ShortEdgeLength`                        | Gets or sets the ShortEdgeLength.                             |
| `ThinFaceWidth`                          | Gets or sets the ThinFaceWidth.                               |
| `CollapseShortEdges`                     | Gets or sets the CollapseShortEdges.                          |
| `FillHole`                               | Gets or sets the FillHole.                                    |
| `FillHoleGeometryDefineBy`               | Gets or sets the FillHoleGeometryDefineBy.                    |
| `MergeFaces`                             | Gets or sets the MergeFaces.                                  |
| `MergeFacesGeometryDefineBy`             | Gets or sets the MergeFacesGeometryDefineBy.                  |
| `PinchFaces`                             | Gets or sets the PinchFaces.                                  |
| `PinchFacesGeometryDefineBy`             | Gets or sets the PinchFacesGeometryDefineBy.                  |
| `PinchFacesUseLocalScoping`              | Gets or sets the PinchFacesUseLocalScoping.                   |
| `RemoveSharpAngleFaces`                  | Gets or sets the RemoveSharpAngleFaces.                       |
| `RemoveThinFaces`                        | Gets or sets the RemoveThinFaces.                             |
| `RepairPartialDefeature`                 | Gets or sets the RepairPartialDefeature.                      |
| `RepairPartialDefeatureGeometryDefineBy` | Gets or sets the RepairPartialDefeatureGeometryDefineBy.      |
| `SharpAngleGeometryDefineBy`             | Gets or sets the SharpAngleGeometryDefineBy.                  |
| `SharpAngleUseLocalScoping`              | Gets or sets the SharpAngleUseLocalScoping.                   |
| `ShortEdgeGeometryDefineBy`              | Gets or sets the ShortEdgeGeometryDefineBy.                   |
| `ShortEdgeUseLocalScoping`               | Gets or sets the ShortEdgeUseLocalScoping.                    |
| `SuppressEdgesGeometryDefineBy`          | Gets or sets the SuppressEdgesGeometryDefineBy.               |
| `SuppressEdges`                          | Gets or sets the SuppressEdges.                               |
| `ThinFaceGeometryDefineBy`               | Gets or sets the ThinFaceGeometryDefineBy.                    |
| `ThinFacesUseLocalScoping`               | Gets or sets the ThinFacesUseLocalScoping.                    |
| `FillHoleNamedSelection`                 | Gets or sets the FillHoleNamedSelection.                      |
| `MergeFacesNamedSelection`               | Gets or sets the MergeFacesNamedSelection.                    |
| `PartialDefeatureNamedSelection`         | Gets or sets the PartialDefeatureNamedSelection.              |
| `PinchFacesNamedSelection`               | Gets or sets the PinchFacesNamedSelection.                    |
| `SharpAngleNamedSelection`               | Gets or sets the SharpAngleNamedSelection.                    |
| `ShortEdgeNamedSelection`                | Gets or sets the ShortEdgeNamedSelection.                     |
| `SuppressEdgesNamedSelection`            | Gets or sets the SuppressEdgesNamedSelection.                 |
| `ThinFaceNamedSelection`                 | Gets or sets the ThinFaceNamedSelection.                      |
| `FillHoleGeometrySelection`              | Gets or sets the FillHoleGeometrySelection.                   |
| `MergeFacesGeometrySelection`            | Gets or sets the MergeFacesGeometrySelection.                 |
| `PartialDefeatureGeometrySelection`      | Gets or sets the PartialDefeatureGeometrySelection.           |
| `PinchFacesGeometrySelection`            | Gets or sets the PinchFacesGeometrySelection.                 |
| `SharpAngleGeometrySelection`            | Gets or sets the SharpAngleGeometrySelection.                 |
| `ShortEdgeGeometrySelection`             | Gets or sets the ShortEdgeGeometrySelection.                  |
| `SuppressEdgesGeometrySelection`         | Gets or sets the SuppressEdgesGeometrySelection.              |
| `ThinFaceGeometrySelection`              | Gets or sets the ThinFaceGeometrySelection.                   |
| `DataModelObjectCategory`                | Gets the current DataModelObject's category.                  |
| `ScopingMethod`                          | Gets or sets the ScopingMethod.                               |
| `Suppressed`                             | Gets or sets the Suppressed.                                  |
| `Children`                               | Gets the list of children.                                    |
| `Comments`                               | Gets the list of associated comments.                         |
| `Figures`                                | Gets the list of associated figures.                          |
| `Images`                                 | Gets the list of associated images.                           |
| `InternalObject`                         | Gets the internal object. For advanced usage only.            |
| `Properties`                             | Gets the list of properties for this object.                  |
| `VisibleProperties`                      | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* RepairTopology.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.FeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FeatureAngle.

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

### *property* RepairTopology.CollapseShortEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CollapseShortEdges.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.FillHole *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHole.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.FillHoleGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.MergeFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFaces.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.MergeFacesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PinchFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFaces.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PinchFacesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PinchFacesUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesUseLocalScoping.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.RemoveSharpAngleFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveSharpAngleFaces.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.RemoveThinFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveThinFaces.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.RepairPartialDefeature *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RepairPartialDefeature.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.RepairPartialDefeatureGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RepairPartialDefeatureGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SharpAngleGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SharpAngleUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleUseLocalScoping.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ShortEdgeGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ShortEdgeUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeUseLocalScoping.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SuppressEdgesGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SuppressEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdges.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ThinFaceGeometryDefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceGeometryDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ThinFacesUseLocalScoping *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFacesUseLocalScoping.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.FillHoleNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.MergeFacesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PartialDefeatureNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartialDefeatureNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PinchFacesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinchFacesNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SharpAngleNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharpAngleNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ShortEdgeNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShortEdgeNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.SuppressEdgesNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SuppressEdgesNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ThinFaceNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThinFaceNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.FillHoleGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillHoleGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.MergeFacesGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFacesGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.PartialDefeatureGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartialDefeatureGeometrySelection.

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

### *property* RepairTopology.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RepairTopology.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### RepairTopology.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RepairTopology.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RepairTopology.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RepairTopology.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

