# `MeshConnectionGroup`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshConnectionGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshConnectionGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshConnectionGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#MeshConnectionGroup.Activate)                                                     | Activate the current object.                                                                                                       |
| [`AddComment`](#MeshConnectionGroup.AddComment)                                                 | Creates a new child Comment.                                                                                                       |
| [`AddContactRegion`](#MeshConnectionGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                                                                 |
| [`AddFigure`](#MeshConnectionGroup.AddFigure)                                                   | Creates a new child Figure.                                                                                                        |
| [`AddImage`](#MeshConnectionGroup.AddImage)                                                     | Creates a new child Image.                                                                                                         |
| [`AddInterStage`](#MeshConnectionGroup.AddInterStage)                                           | Creates a new child InterStage.                                                                                                    |
| [`AddJoint`](#MeshConnectionGroup.AddJoint)                                                     | Creates a new child Joint.                                                                                                         |
| [`AddManualMeshConnection`](#MeshConnectionGroup.AddManualMeshConnection)                       | Creates a new MeshConnection                                                                                                       |
| [`AddSpotWeld`](#MeshConnectionGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                                                                      |
| [`CopyTo`](#MeshConnectionGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                                                                         |
| [`CreateAutomaticConnections`](#MeshConnectionGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                                                                         |
| [`CreateParameter`](#MeshConnectionGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                                                                            |
| [`Delete`](#MeshConnectionGroup.Delete)                                                         | Run the Delete action.                                                                                                             |
| [`DeleteChildren`](#MeshConnectionGroup.DeleteChildren)                                         | Run the DeleteChildren action with optional verification dialog.                                                                   |
| [`DetectConnections`](#MeshConnectionGroup.DetectConnections)                                   | Detect mesh connections.                                                                                                           |
| [`Duplicate`](#MeshConnectionGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                                                                     |
| [`Generate`](#MeshConnectionGroup.Generate)                                                     | Generate mesh connections.                                                                                                         |
| [`GetChildren`](#MeshConnectionGroup.GetChildren)                                               | Gets the list of children, filtered by type.                                                                                       |
| [`GetParameter`](#MeshConnectionGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                                                                            |
| [`GroupAllSimilarChildren`](#MeshConnectionGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                                                            |
| [`GroupSimilarObjects`](#MeshConnectionGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                                                                |
| [`PropertyByAPIName`](#MeshConnectionGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                                                                    |
| [`PropertyByName`](#MeshConnectionGroup.PropertyByName)                                         | Get a property by its unique name.                                                                                                 |
| [`RemoveParameter`](#MeshConnectionGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.                                                  |
| [`RenameBasedOnChildren`](#MeshConnectionGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                                                                 |
| [`RepairOverlappingContactRegions`](#MeshConnectionGroup.RepairOverlappingContactRegions)       | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| [`SearchConnectionsForDuplicatePairs`](#MeshConnectionGroup.SearchConnectionsForDuplicatePairs) | SearchConnectionsForDuplicatePairs method.                                                                                         |
| [`SetDefaultAPDLNames`](#MeshConnectionGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.                                                            |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ActiveConnections`](#MeshConnectionGroup.ActiveConnections)                             | Gets the ActiveConnections.                                   |
| [`AutomaticFixedJoints`](#MeshConnectionGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                        |
| [`Children`](#MeshConnectionGroup.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#MeshConnectionGroup.Comments)                                               | Gets the list of associated comments.                         |
| [`ConnectionType`](#MeshConnectionGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                              |
| [`Connections`](#MeshConnectionGroup.Connections)                                         | Gets the Connections.                                         |
| [`CylindricalFaces`](#MeshConnectionGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                            |
| [`DataModelObjectCategory`](#MeshConnectionGroup.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`EdgeEdge`](#MeshConnectionGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                    |
| [`EdgeOverlapTolerance`](#MeshConnectionGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceAngleTolerance`](#MeshConnectionGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                          |
| [`FaceEdge`](#MeshConnectionGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                    |
| [`FaceFace`](#MeshConnectionGroup.FaceFace)                                               | Gets or sets the FaceFace.                                    |
| [`FaceFaceDetectionAngleTolerence`](#MeshConnectionGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceOverlapTolerance`](#MeshConnectionGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                        |
| [`Figures`](#MeshConnectionGroup.Figures)                                                 | Gets the list of associated figures.                          |
| [`GroupBy`](#MeshConnectionGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                     |
| [`Images`](#MeshConnectionGroup.Images)                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshConnectionGroup.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#MeshConnectionGroup.Location)                                               | Gets or sets the Location.                                    |
| [`MinimumDistancePercentage`](#MeshConnectionGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                   |
| [`MinimumDistanceValue`](#MeshConnectionGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                |
| [`Priority`](#MeshConnectionGroup.Priority)                                               | Gets or sets the Priority.                                    |
| [`Properties`](#MeshConnectionGroup.Properties)                                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#MeshConnectionGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`RevoluteJoints`](#MeshConnectionGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                              |
| [`SearchAcross`](#MeshConnectionGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                |
| [`Suppressed`](#MeshConnectionGroup.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`ThicknessScaleFactor`](#MeshConnectionGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](#MeshConnectionGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                             |
| [`ToleranceType`](#MeshConnectionGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                               |
| [`ToleranceValue`](#MeshConnectionGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                              |
| [`UseRange`](#MeshConnectionGroup.UseRange)                                               | Gets or sets the UseRange.                                    |
| [`VisibleProperties`](#MeshConnectionGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshConnectionGroup.ActiveConnections"></a>

### *property* MeshConnectionGroup.ActiveConnections *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AutomaticFixedJoints"></a>

### *property* MeshConnectionGroup.AutomaticFixedJoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Children"></a>

### *property* MeshConnectionGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Comments"></a>

### *property* MeshConnectionGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ConnectionType"></a>

### *property* MeshConnectionGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Connections"></a>

### *property* MeshConnectionGroup.Connections *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CylindricalFaces"></a>

### *property* MeshConnectionGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.DataModelObjectCategory"></a>

### *property* MeshConnectionGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.EdgeEdge"></a>

### *property* MeshConnectionGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.EdgeOverlapTolerance"></a>

### *property* MeshConnectionGroup.EdgeOverlapTolerance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceAngleTolerance"></a>

### *property* MeshConnectionGroup.FaceAngleTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceEdge"></a>

### *property* MeshConnectionGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceFace"></a>

### *property* MeshConnectionGroup.FaceFace *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* MeshConnectionGroup.FaceFaceDetectionAngleTolerence *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceOverlapTolerance"></a>

### *property* MeshConnectionGroup.FaceOverlapTolerance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Figures"></a>

### *property* MeshConnectionGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GroupBy"></a>

### *property* MeshConnectionGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Images"></a>

### *property* MeshConnectionGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.InternalObject"></a>

### *property* MeshConnectionGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Location"></a>

### *property* MeshConnectionGroup.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.MinimumDistancePercentage"></a>

### *property* MeshConnectionGroup.MinimumDistancePercentage *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.MinimumDistanceValue"></a>

### *property* MeshConnectionGroup.MinimumDistanceValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Priority"></a>

### *property* MeshConnectionGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Properties"></a>

### *property* MeshConnectionGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ReadOnly"></a>

### *property* MeshConnectionGroup.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RevoluteJoints"></a>

### *property* MeshConnectionGroup.RevoluteJoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.SearchAcross"></a>

### *property* MeshConnectionGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Suppressed"></a>

### *property* MeshConnectionGroup.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ThicknessScaleFactor"></a>

### *property* MeshConnectionGroup.ThicknessScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ToleranceSlider"></a>

### *property* MeshConnectionGroup.ToleranceSlider *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ToleranceType"></a>

### *property* MeshConnectionGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ToleranceValue"></a>

### *property* MeshConnectionGroup.ToleranceValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.UseRange"></a>

### *property* MeshConnectionGroup.UseRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.VisibleProperties"></a>

### *property* MeshConnectionGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshConnectionGroup.Activate"></a>

### MeshConnectionGroup.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddComment"></a>

### MeshConnectionGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddContactRegion"></a>

### MeshConnectionGroup.AddContactRegion() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddFigure"></a>

### MeshConnectionGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddImage"></a>

### MeshConnectionGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddInterStage"></a>

### MeshConnectionGroup.AddInterStage() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddJoint"></a>

### MeshConnectionGroup.AddJoint() → [Ansys.ACT.Automation.Mechanical.Connections.Joint](Connections/Joint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Joint)

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddManualMeshConnection"></a>

### MeshConnectionGroup.AddManualMeshConnection() → [Ansys.ACT.Automation.Mechanical.MeshConnection](MeshConnection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshConnection)

Creates a new MeshConnection

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddSpotWeld"></a>

### MeshConnectionGroup.AddSpotWeld() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CopyTo"></a>

### MeshConnectionGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CreateAutomaticConnections"></a>

### MeshConnectionGroup.CreateAutomaticConnections() → [None](https://docs.python.org/3/library/constants.html#None)

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CreateParameter"></a>

### MeshConnectionGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Delete"></a>

### MeshConnectionGroup.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.DeleteChildren"></a>

### MeshConnectionGroup.DeleteChildren(verificationDialog: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.DetectConnections"></a>

### MeshConnectionGroup.DetectConnections() → [None](https://docs.python.org/3/library/constants.html#None)

Detect mesh connections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Duplicate"></a>

### MeshConnectionGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Generate"></a>

### MeshConnectionGroup.Generate() → [None](https://docs.python.org/3/library/constants.html#None)

Generate mesh connections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GetChildren"></a>

### MeshConnectionGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GetParameter"></a>

### MeshConnectionGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GroupAllSimilarChildren"></a>

### MeshConnectionGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GroupSimilarObjects"></a>

### MeshConnectionGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.PropertyByAPIName"></a>

### MeshConnectionGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.PropertyByName"></a>

### MeshConnectionGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RemoveParameter"></a>

### MeshConnectionGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RenameBasedOnChildren"></a>

### MeshConnectionGroup.RenameBasedOnChildren() → [bool](https://docs.python.org/3/library/functions.html#bool)

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RepairOverlappingContactRegions"></a>

### MeshConnectionGroup.RepairOverlappingContactRegions() → [None](https://docs.python.org/3/library/constants.html#None)

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.SearchConnectionsForDuplicatePairs"></a>

### MeshConnectionGroup.SearchConnectionsForDuplicatePairs() → [None](https://docs.python.org/3/library/constants.html#None)

SearchConnectionsForDuplicatePairs method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.SetDefaultAPDLNames"></a>

### MeshConnectionGroup.SetDefaultAPDLNames() → [None](https://docs.python.org/3/library/constants.html#None)

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

