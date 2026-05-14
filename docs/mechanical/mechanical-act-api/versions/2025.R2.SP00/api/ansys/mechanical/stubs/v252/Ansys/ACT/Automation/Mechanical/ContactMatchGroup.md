# `ContactMatchGroup`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ContactMatchGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ContactMatchGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactMatchGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#ContactMatchGroup.Activate)                                                     | Activate the current object.                                                                                                       |
| [`AddComment`](#ContactMatchGroup.AddComment)                                                 | Creates a new child Comment.                                                                                                       |
| [`AddContactRegion`](#ContactMatchGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                                                                 |
| [`AddFigure`](#ContactMatchGroup.AddFigure)                                                   | Creates a new child Figure.                                                                                                        |
| [`AddImage`](#ContactMatchGroup.AddImage)                                                     | Creates a new child Image.                                                                                                         |
| [`AddInterStage`](#ContactMatchGroup.AddInterStage)                                           | Creates a new child InterStage.                                                                                                    |
| [`AddJoint`](#ContactMatchGroup.AddJoint)                                                     | Creates a new child Joint.                                                                                                         |
| [`AddSpotWeld`](#ContactMatchGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                                                                      |
| [`CopyTo`](#ContactMatchGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                                                                         |
| [`CreateAutomaticConnections`](#ContactMatchGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                                                                         |
| [`CreateParameter`](#ContactMatchGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                                                                            |
| [`Delete`](#ContactMatchGroup.Delete)                                                         | Run the Delete action.                                                                                                             |
| [`DeleteChildren`](#ContactMatchGroup.DeleteChildren)                                         | Run the DeleteChildren action with optional verification dialog.                                                                   |
| [`Duplicate`](#ContactMatchGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                                                                     |
| [`GetChildren`](#ContactMatchGroup.GetChildren)                                               | Gets the list of children, filtered by type.                                                                                       |
| [`GetParameter`](#ContactMatchGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                                                                            |
| [`GroupAllSimilarChildren`](#ContactMatchGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                                                            |
| [`GroupSimilarObjects`](#ContactMatchGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                                                                |
| [`PropertyByAPIName`](#ContactMatchGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                                                                    |
| [`PropertyByName`](#ContactMatchGroup.PropertyByName)                                         | Get a property by its unique name.                                                                                                 |
| [`RemoveParameter`](#ContactMatchGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.                                                  |
| [`RenameBasedOnChildren`](#ContactMatchGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                                                                 |
| [`RepairOverlappingContactRegions`](#ContactMatchGroup.RepairOverlappingContactRegions)       | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| [`SearchConnectionsForDuplicatePairs`](#ContactMatchGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                                                                 |
| [`SetDefaultAPDLNames`](#ContactMatchGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.                                                            |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ActiveConnections`](#ContactMatchGroup.ActiveConnections)                             | Gets the ActiveConnections.                                   |
| [`AutomaticFixedJoints`](#ContactMatchGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                        |
| [`Children`](#ContactMatchGroup.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#ContactMatchGroup.Comments)                                               | Gets the list of associated comments.                         |
| [`ConnectionType`](#ContactMatchGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                              |
| [`Connections`](#ContactMatchGroup.Connections)                                         | Gets the Connections.                                         |
| [`CylindricalFaces`](#ContactMatchGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                            |
| [`DataModelObjectCategory`](#ContactMatchGroup.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`EdgeEdge`](#ContactMatchGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                    |
| [`EdgeOverlapTolerance`](#ContactMatchGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceAngleTolerance`](#ContactMatchGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                          |
| [`FaceEdge`](#ContactMatchGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                    |
| [`FaceFace`](#ContactMatchGroup.FaceFace)                                               | Gets or sets the FaceFace.                                    |
| [`FaceFaceDetectionAngleTolerence`](#ContactMatchGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceOverlapTolerance`](#ContactMatchGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                        |
| [`Figures`](#ContactMatchGroup.Figures)                                                 | Gets the list of associated figures.                          |
| [`GroupBy`](#ContactMatchGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                     |
| [`Images`](#ContactMatchGroup.Images)                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactMatchGroup.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ContactMatchGroup.Location)                                               | Gets or sets the Location.                                    |
| [`MinimumDistancePercentage`](#ContactMatchGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                   |
| [`MinimumDistanceValue`](#ContactMatchGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                |
| [`Priority`](#ContactMatchGroup.Priority)                                               | Gets or sets the Priority.                                    |
| [`Properties`](#ContactMatchGroup.Properties)                                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ContactMatchGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`RevoluteJoints`](#ContactMatchGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                              |
| [`SearchAcross`](#ContactMatchGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                |
| [`Suppressed`](#ContactMatchGroup.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`ThicknessScaleFactor`](#ContactMatchGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](#ContactMatchGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                             |
| [`ToleranceType`](#ContactMatchGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                               |
| [`ToleranceValue`](#ContactMatchGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                              |
| [`UseRange`](#ContactMatchGroup.UseRange)                                               | Gets or sets the UseRange.                                    |
| [`VisibleProperties`](#ContactMatchGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactMatchGroup.ActiveConnections"></a>

### *property* ContactMatchGroup.ActiveConnections *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AutomaticFixedJoints"></a>

### *property* ContactMatchGroup.AutomaticFixedJoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Children"></a>

### *property* ContactMatchGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Comments"></a>

### *property* ContactMatchGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ConnectionType"></a>

### *property* ContactMatchGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Connections"></a>

### *property* ContactMatchGroup.Connections *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.CylindricalFaces"></a>

### *property* ContactMatchGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.DataModelObjectCategory"></a>

### *property* ContactMatchGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.EdgeEdge"></a>

### *property* ContactMatchGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.EdgeOverlapTolerance"></a>

### *property* ContactMatchGroup.EdgeOverlapTolerance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceAngleTolerance"></a>

### *property* ContactMatchGroup.FaceAngleTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceEdge"></a>

### *property* ContactMatchGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceFace"></a>

### *property* ContactMatchGroup.FaceFace *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* ContactMatchGroup.FaceFaceDetectionAngleTolerence *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceOverlapTolerance"></a>

### *property* ContactMatchGroup.FaceOverlapTolerance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Figures"></a>

### *property* ContactMatchGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GroupBy"></a>

### *property* ContactMatchGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Images"></a>

### *property* ContactMatchGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.InternalObject"></a>

### *property* ContactMatchGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Location"></a>

### *property* ContactMatchGroup.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.MinimumDistancePercentage"></a>

### *property* ContactMatchGroup.MinimumDistancePercentage *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.MinimumDistanceValue"></a>

### *property* ContactMatchGroup.MinimumDistanceValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Priority"></a>

### *property* ContactMatchGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Properties"></a>

### *property* ContactMatchGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ReadOnly"></a>

### *property* ContactMatchGroup.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.RevoluteJoints"></a>

### *property* ContactMatchGroup.RevoluteJoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.SearchAcross"></a>

### *property* ContactMatchGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Suppressed"></a>

### *property* ContactMatchGroup.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ThicknessScaleFactor"></a>

### *property* ContactMatchGroup.ThicknessScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ToleranceSlider"></a>

### *property* ContactMatchGroup.ToleranceSlider *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ToleranceType"></a>

### *property* ContactMatchGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ToleranceValue"></a>

### *property* ContactMatchGroup.ToleranceValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.UseRange"></a>

### *property* ContactMatchGroup.UseRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.VisibleProperties"></a>

### *property* ContactMatchGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMatchGroup.Activate"></a>

### ContactMatchGroup.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddComment"></a>

### ContactMatchGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddContactRegion"></a>

### ContactMatchGroup.AddContactRegion() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddFigure"></a>

### ContactMatchGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddImage"></a>

### ContactMatchGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddInterStage"></a>

### ContactMatchGroup.AddInterStage() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddJoint"></a>

### ContactMatchGroup.AddJoint() → [Ansys.ACT.Automation.Mechanical.Connections.Joint](Connections/Joint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Joint)

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddSpotWeld"></a>

### ContactMatchGroup.AddSpotWeld() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.CopyTo"></a>

### ContactMatchGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.CreateAutomaticConnections"></a>

### ContactMatchGroup.CreateAutomaticConnections() → [None](https://docs.python.org/3/library/constants.html#None)

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.CreateParameter"></a>

### ContactMatchGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Delete"></a>

### ContactMatchGroup.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.DeleteChildren"></a>

### ContactMatchGroup.DeleteChildren(verificationDialog: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Duplicate"></a>

### ContactMatchGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GetChildren"></a>

### ContactMatchGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GetParameter"></a>

### ContactMatchGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GroupAllSimilarChildren"></a>

### ContactMatchGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GroupSimilarObjects"></a>

### ContactMatchGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.PropertyByAPIName"></a>

### ContactMatchGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.PropertyByName"></a>

### ContactMatchGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.RemoveParameter"></a>

### ContactMatchGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.RenameBasedOnChildren"></a>

### ContactMatchGroup.RenameBasedOnChildren() → [bool](https://docs.python.org/3/library/functions.html#bool)

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.RepairOverlappingContactRegions"></a>

### ContactMatchGroup.RepairOverlappingContactRegions() → [None](https://docs.python.org/3/library/constants.html#None)

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.SearchConnectionsForDuplicatePairs"></a>

### ContactMatchGroup.SearchConnectionsForDuplicatePairs() → [None](https://docs.python.org/3/library/constants.html#None)

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.SetDefaultAPDLNames"></a>

### ContactMatchGroup.SetDefaultAPDLNames() → [None](https://docs.python.org/3/library/constants.html#None)

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

