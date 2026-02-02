# `NodeMergeGroup`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NodeMergeGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NodeMergeGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodeMergeGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#NodeMergeGroup.Activate)                                                     | Activate the current object.                                                                                                       |
| [`AddComment`](#NodeMergeGroup.AddComment)                                                 | Creates a new child Comment.                                                                                                       |
| [`AddContactRegion`](#NodeMergeGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                                                                 |
| [`AddFigure`](#NodeMergeGroup.AddFigure)                                                   | Creates a new child Figure.                                                                                                        |
| [`AddImage`](#NodeMergeGroup.AddImage)                                                     | Creates a new child Image.                                                                                                         |
| [`AddInterStage`](#NodeMergeGroup.AddInterStage)                                           | Creates a new child InterStage.                                                                                                    |
| [`AddJoint`](#NodeMergeGroup.AddJoint)                                                     | Creates a new child Joint.                                                                                                         |
| [`AddNodeMerge`](#NodeMergeGroup.AddNodeMerge)                                             | Creates a new NodeMerge                                                                                                            |
| [`AddSpotWeld`](#NodeMergeGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                                                                      |
| [`CopyTo`](#NodeMergeGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                                                                         |
| [`CreateAutomaticConnections`](#NodeMergeGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                                                                         |
| [`CreateParameter`](#NodeMergeGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                                                                            |
| [`Delete`](#NodeMergeGroup.Delete)                                                         | Run the Delete action.                                                                                                             |
| [`DeleteChildren`](#NodeMergeGroup.DeleteChildren)                                         | Run the DeleteChildren action with optional verification dialog.                                                                   |
| [`Duplicate`](#NodeMergeGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                                                                     |
| [`GenerateNodeMerge`](#NodeMergeGroup.GenerateNodeMerge)                                   | Generate mesh connections for the selected mesh connection objects or groups in the model.                                         |
| [`GetChildren`](#NodeMergeGroup.GetChildren)                                               | Gets the list of children, filtered by type.                                                                                       |
| [`GetParameter`](#NodeMergeGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                                                                            |
| [`GroupAllSimilarChildren`](#NodeMergeGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                                                            |
| [`GroupSimilarObjects`](#NodeMergeGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                                                                |
| [`PropertyByAPIName`](#NodeMergeGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                                                                    |
| [`PropertyByName`](#NodeMergeGroup.PropertyByName)                                         | Get a property by its unique name.                                                                                                 |
| [`RemoveParameter`](#NodeMergeGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.                                                  |
| [`RenameBasedOnChildren`](#NodeMergeGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                                                                 |
| [`RepairOverlappingContactRegions`](#NodeMergeGroup.RepairOverlappingContactRegions)       | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| [`SearchConnectionsForDuplicatePairs`](#NodeMergeGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                                                                 |
| [`SetDefaultAPDLNames`](#NodeMergeGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.                                                            |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ActiveConnections`](#NodeMergeGroup.ActiveConnections)                             | Gets the ActiveConnections.                                   |
| [`AutomaticFixedJoints`](#NodeMergeGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                        |
| [`Children`](#NodeMergeGroup.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#NodeMergeGroup.Comments)                                               | Gets the list of associated comments.                         |
| [`ConnectionType`](#NodeMergeGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                              |
| [`Connections`](#NodeMergeGroup.Connections)                                         | Gets the Connections.                                         |
| [`CylindricalFaces`](#NodeMergeGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                            |
| [`DataModelObjectCategory`](#NodeMergeGroup.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`EdgeEdge`](#NodeMergeGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                    |
| [`EdgeOverlapTolerance`](#NodeMergeGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceAngleTolerance`](#NodeMergeGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                          |
| [`FaceEdge`](#NodeMergeGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                    |
| [`FaceFace`](#NodeMergeGroup.FaceFace)                                               | Gets or sets the FaceFace.                                    |
| [`FaceFaceDetectionAngleTolerence`](#NodeMergeGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceOverlapTolerance`](#NodeMergeGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                        |
| [`Figures`](#NodeMergeGroup.Figures)                                                 | Gets the list of associated figures.                          |
| [`GroupBy`](#NodeMergeGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                     |
| [`Images`](#NodeMergeGroup.Images)                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#NodeMergeGroup.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#NodeMergeGroup.Location)                                               | Gets or sets the Location.                                    |
| [`MinimumDistancePercentage`](#NodeMergeGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                   |
| [`MinimumDistanceValue`](#NodeMergeGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                |
| [`Priority`](#NodeMergeGroup.Priority)                                               | Gets or sets the Priority.                                    |
| [`Properties`](#NodeMergeGroup.Properties)                                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#NodeMergeGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`RevoluteJoints`](#NodeMergeGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                              |
| [`SearchAcross`](#NodeMergeGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                |
| [`Suppressed`](#NodeMergeGroup.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`ThicknessScaleFactor`](#NodeMergeGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](#NodeMergeGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                             |
| [`ToleranceType`](#NodeMergeGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                               |
| [`ToleranceValue`](#NodeMergeGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                              |
| [`UseRange`](#NodeMergeGroup.UseRange)                                               | Gets or sets the UseRange.                                    |
| [`VisibleProperties`](#NodeMergeGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodeMergeGroup.ActiveConnections"></a>

### *property* NodeMergeGroup.ActiveConnections *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AutomaticFixedJoints"></a>

### *property* NodeMergeGroup.AutomaticFixedJoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Children"></a>

### *property* NodeMergeGroup.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Comments"></a>

### *property* NodeMergeGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ConnectionType"></a>

### *property* NodeMergeGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Connections"></a>

### *property* NodeMergeGroup.Connections *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CylindricalFaces"></a>

### *property* NodeMergeGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.DataModelObjectCategory"></a>

### *property* NodeMergeGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.EdgeEdge"></a>

### *property* NodeMergeGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.EdgeOverlapTolerance"></a>

### *property* NodeMergeGroup.EdgeOverlapTolerance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceAngleTolerance"></a>

### *property* NodeMergeGroup.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceEdge"></a>

### *property* NodeMergeGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceFace"></a>

### *property* NodeMergeGroup.FaceFace *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* NodeMergeGroup.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceOverlapTolerance"></a>

### *property* NodeMergeGroup.FaceOverlapTolerance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Figures"></a>

### *property* NodeMergeGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GroupBy"></a>

### *property* NodeMergeGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Images"></a>

### *property* NodeMergeGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.InternalObject"></a>

### *property* NodeMergeGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Location"></a>

### *property* NodeMergeGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.MinimumDistancePercentage"></a>

### *property* NodeMergeGroup.MinimumDistancePercentage *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.MinimumDistanceValue"></a>

### *property* NodeMergeGroup.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Priority"></a>

### *property* NodeMergeGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Properties"></a>

### *property* NodeMergeGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ReadOnly"></a>

### *property* NodeMergeGroup.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RevoluteJoints"></a>

### *property* NodeMergeGroup.RevoluteJoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.SearchAcross"></a>

### *property* NodeMergeGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Suppressed"></a>

### *property* NodeMergeGroup.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ThicknessScaleFactor"></a>

### *property* NodeMergeGroup.ThicknessScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ToleranceSlider"></a>

### *property* NodeMergeGroup.ToleranceSlider *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ToleranceType"></a>

### *property* NodeMergeGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ToleranceValue"></a>

### *property* NodeMergeGroup.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.UseRange"></a>

### *property* NodeMergeGroup.UseRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.VisibleProperties"></a>

### *property* NodeMergeGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodeMergeGroup.Activate"></a>

### NodeMergeGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddComment"></a>

### NodeMergeGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddContactRegion"></a>

### NodeMergeGroup.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddFigure"></a>

### NodeMergeGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddImage"></a>

### NodeMergeGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddInterStage"></a>

### NodeMergeGroup.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddJoint"></a>

### NodeMergeGroup.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddNodeMerge"></a>

### NodeMergeGroup.AddNodeMerge()

Creates a new NodeMerge

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddSpotWeld"></a>

### NodeMergeGroup.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CopyTo"></a>

### NodeMergeGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CreateAutomaticConnections"></a>

### NodeMergeGroup.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CreateParameter"></a>

### NodeMergeGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Delete"></a>

### NodeMergeGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.DeleteChildren"></a>

### NodeMergeGroup.DeleteChildren(verificationDialog: [bool](https://docs.python.org/3/library/functions.html#bool))

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Duplicate"></a>

### NodeMergeGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GenerateNodeMerge"></a>

### NodeMergeGroup.GenerateNodeMerge()

Generate mesh connections for the selected mesh connection objects or groups in the model.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetChildren"></a>

### NodeMergeGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetParameter"></a>

### NodeMergeGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GroupAllSimilarChildren"></a>

### NodeMergeGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GroupSimilarObjects"></a>

### NodeMergeGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.PropertyByAPIName"></a>

### NodeMergeGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.PropertyByName"></a>

### NodeMergeGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RemoveParameter"></a>

### NodeMergeGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RenameBasedOnChildren"></a>

### NodeMergeGroup.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RepairOverlappingContactRegions"></a>

### NodeMergeGroup.RepairOverlappingContactRegions()

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.SearchConnectionsForDuplicatePairs"></a>

### NodeMergeGroup.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.SetDefaultAPDLNames"></a>

### NodeMergeGroup.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

