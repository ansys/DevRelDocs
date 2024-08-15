# `NodeMergeGroup`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.NodeMergeGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodeMergeGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `AddNodeMerge`                       | Creates a new NodeMerge                                                                                                            |
| `GenerateNodeMerge`                  | Generate mesh connections for the selected mesh connection objects or groups in the model.                                         |
| `AddContactRegion`                   | Creates a new child ContactRegion.                                                                                                 |
| `AddJoint`                           | Creates a new child Joint.                                                                                                         |
| `SearchConnectionsForDuplicatePairs` | Run the SearchConnectionsForDuplicatePairs action.                                                                                 |
| `AddSpotWeld`                        | Creates a new child SpotWeld.                                                                                                      |
| `AddInterStage`                      | Creates a new child InterStage.                                                                                                    |
| `CreateAutomaticConnections`         | Run the CreateAutomaticConnections action.                                                                                         |
| `DeleteChildren`                     | Run the DeleteChildren action.                                                                                                     |
| `DeleteChildren`                     | Run the DeleteChildren action with optional verification dialog.                                                                   |
| `RenameBasedOnChildren`              | Rename the Connection group based on the children.                                                                                 |
| `SetDefaultAPDLNames`                | Loop over all the valid contact regions and set the default APDL names.                                                            |
| `RepairOverlappingContactRegions`    | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| `Delete`                             | Run the Delete action.                                                                                                             |
| `GetChildren`                        | Gets the list of children, filtered by type.                                                                                       |
| `GetChildren`                        | Gets the list of children, filtered by type.                                                                                       |
| `AddComment`                         | Creates a new child Comment.                                                                                                       |
| `AddFigure`                          | Creates a new child Figure.                                                                                                        |
| `AddImage`                           | Creates a new child Image.                                                                                                         |
| `Activate`                           | Activate the current object.                                                                                                       |
| `CopyTo`                             | Copies all visible properties from this object to another.                                                                         |
| `Duplicate`                          | Creates a copy of the current DataModelObject.                                                                                     |
| `GroupAllSimilarChildren`            | Run the GroupAllSimilarChildren action.                                                                                            |
| `GroupSimilarObjects`                | Run the GroupSimilarObjects action.                                                                                                |
| `PropertyByName`                     | Get a property by its unique name.                                                                                                 |
| `PropertyByAPIName`                  | Get a property by its API name.                                                                                                    |
| `CreateParameter`                    | Creates a new parameter for a Property.                                                                                            |
| `GetParameter`                       | Gets the parameter corresponding to the given property.                                                                            |
| `RemoveParameter`                    | Removes the parameter from the parameter set corresponding to the given property.                                                  |

### Properties

| Name | Description |
|-----------------------------------|---------------------------------------------------------------|
| `InternalObject`                  | Gets the internal object. For advanced usage only.            |
| `DataModelObjectCategory`         | Gets the current DataModelObject's category.                  |
| `ConnectionType`                  | Gets or sets the ConnectionType.                              |
| `ActiveConnections`               | Gets the ActiveConnections.                                   |
| `Connections`                     | Gets the Connections.                                         |
| `EdgeOverlapTolerance`            | Gets or sets the EdgeOverlapTolerance.                        |
| `FaceOverlapTolerance`            | Gets or sets the FaceOverlapTolerance.                        |
| `MinimumDistancePercentage`       | Gets or sets the MinimumDistancePercentage.                   |
| `ThicknessScaleFactor`            | Gets or sets the ThicknessScaleFactor.                        |
| `ToleranceSlider`                 | Gets or sets the ToleranceSlider.                             |
| `FaceFaceDetectionAngleTolerence` | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| `FaceAngleTolerance`              | Gets or sets the FaceAngleTolerance.                          |
| `MinimumDistanceValue`            | Gets the MinimumDistanceValue.                                |
| `ToleranceValue`                  | Gets or sets the ToleranceValue.                              |
| `CylindricalFaces`                | Gets or sets the CylindricalFaces.                            |
| `Priority`                        | Gets or sets the Priority.                                    |
| `GroupBy`                         | Gets or sets the GroupBy.                                     |
| `SearchAcross`                    | Gets or sets the SearchAcross.                                |
| `ToleranceType`                   | Gets or sets the ToleranceType.                               |
| `EdgeEdge`                        | Gets or sets the EdgeEdge.                                    |
| `FaceEdge`                        | Gets or sets the FaceEdge.                                    |
| `AutomaticFixedJoints`            | Gets or sets the AutomaticFixedJoints.                        |
| `RevoluteJoints`                  | Gets or sets the RevoluteJoints.                              |
| `Suppressed`                      | Gets or sets the Suppressed.                                  |
| `FaceFace`                        | Gets or sets the FaceFace.                                    |
| `UseRange`                        | Gets or sets the UseRange.                                    |
| `Location`                        | Gets or sets the Location.                                    |
| `Children`                        | Gets the list of children.                                    |
| `Comments`                        | Gets the list of associated comments.                         |
| `Figures`                         | Gets the list of associated figures.                          |
| `Images`                          | Gets the list of associated images.                           |
| `ReadOnly`                        | Gets or sets the ReadOnly.                                    |
| `InternalObject`                  | Gets the internal object. For advanced usage only.            |
| `Properties`                      | Gets the list of properties for this object.                  |
| `VisibleProperties`               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* NodeMergeGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.ActiveConnections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.Connections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.EdgeOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.FaceOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.MinimumDistancePercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.AutomaticFixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.RevoluteJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.FaceFace *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.UseRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NodeMergeGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### NodeMergeGroup.AddNodeMerge()

Creates a new NodeMerge

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.GenerateNodeMerge()

Generate mesh connections for the selected mesh connection objects or groups in the model.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.DeleteChildren()

Run the DeleteChildren action.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.DeleteChildren(b_Verify: System.Boolean)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.RepairOverlappingContactRegions()

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NodeMergeGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

