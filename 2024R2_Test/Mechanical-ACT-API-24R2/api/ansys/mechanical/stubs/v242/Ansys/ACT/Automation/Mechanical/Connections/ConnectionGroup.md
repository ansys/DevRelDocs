# `ConnectionGroup`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Connections.ConnectionGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ConnectionGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [`AddContactRegion`](#ConnectionGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                                                                 |
| [`AddJoint`](#ConnectionGroup.AddJoint)                                                     | Creates a new child Joint.                                                                                                         |
| [`SearchConnectionsForDuplicatePairs`](#ConnectionGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                                                                 |
| [`AddSpotWeld`](#ConnectionGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                                                                      |
| [`AddInterStage`](#ConnectionGroup.AddInterStage)                                           | Creates a new child InterStage.                                                                                                    |
| [`CreateAutomaticConnections`](#ConnectionGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                                                                         |
| [`DeleteChildren`](#id1)                                                                    | Run the DeleteChildren action.                                                                                                     |
| [`DeleteChildren`](#id1)                                                                    | Run the DeleteChildren action with optional verification dialog.                                                                   |
| [`RenameBasedOnChildren`](#ConnectionGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                                                                 |
| [`SetDefaultAPDLNames`](#ConnectionGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.                                                            |
| [`RepairOverlappingContactRegions`](#ConnectionGroup.RepairOverlappingContactRegions)       | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| [`Delete`](#ConnectionGroup.Delete)                                                         | Run the Delete action.                                                                                                             |
| [`GetChildren`](#id2)                                                                       | Gets the list of children, filtered by type.                                                                                       |
| [`GetChildren`](#id2)                                                                       | Gets the list of children, filtered by type.                                                                                       |
| [`AddComment`](#ConnectionGroup.AddComment)                                                 | Creates a new child Comment.                                                                                                       |
| [`AddFigure`](#ConnectionGroup.AddFigure)                                                   | Creates a new child Figure.                                                                                                        |
| [`AddImage`](#ConnectionGroup.AddImage)                                                     | Creates a new child Image.                                                                                                         |
| [`Activate`](#ConnectionGroup.Activate)                                                     | Activate the current object.                                                                                                       |
| [`CopyTo`](#ConnectionGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                                                                         |
| [`Duplicate`](#ConnectionGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                                                                     |
| [`GroupAllSimilarChildren`](#ConnectionGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                                                            |
| [`GroupSimilarObjects`](#ConnectionGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                                                                |
| [`PropertyByName`](#ConnectionGroup.PropertyByName)                                         | Get a property by its unique name.                                                                                                 |
| [`PropertyByAPIName`](#ConnectionGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                                                                    |
| [`CreateParameter`](#ConnectionGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                                                                            |
| [`GetParameter`](#ConnectionGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                                                                            |
| [`RemoveParameter`](#ConnectionGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.                                                  |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ConnectionType`](#ConnectionGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                              |
| [`InternalObject`](#id0)                                                              | Gets the internal object. For advanced usage only.            |
| [`ActiveConnections`](#ConnectionGroup.ActiveConnections)                             | Gets the ActiveConnections.                                   |
| [`Connections`](#ConnectionGroup.Connections)                                         | Gets the Connections.                                         |
| [`EdgeOverlapTolerance`](#ConnectionGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceOverlapTolerance`](#ConnectionGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                        |
| [`MinimumDistancePercentage`](#ConnectionGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                   |
| [`ThicknessScaleFactor`](#ConnectionGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](#ConnectionGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                             |
| [`FaceFaceDetectionAngleTolerence`](#ConnectionGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceAngleTolerance`](#ConnectionGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                          |
| [`MinimumDistanceValue`](#ConnectionGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                |
| [`ToleranceValue`](#ConnectionGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                              |
| [`CylindricalFaces`](#ConnectionGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                            |
| [`Priority`](#ConnectionGroup.Priority)                                               | Gets or sets the Priority.                                    |
| [`GroupBy`](#ConnectionGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                     |
| [`SearchAcross`](#ConnectionGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                |
| [`ToleranceType`](#ConnectionGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                               |
| [`EdgeEdge`](#ConnectionGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                    |
| [`FaceEdge`](#ConnectionGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                    |
| [`AutomaticFixedJoints`](#ConnectionGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                        |
| [`RevoluteJoints`](#ConnectionGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                              |
| [`Suppressed`](#ConnectionGroup.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`FaceFace`](#ConnectionGroup.FaceFace)                                               | Gets or sets the FaceFace.                                    |
| [`UseRange`](#ConnectionGroup.UseRange)                                               | Gets or sets the UseRange.                                    |
| [`Location`](#ConnectionGroup.Location)                                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#ConnectionGroup.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`Children`](#ConnectionGroup.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#ConnectionGroup.Comments)                                               | Gets the list of associated comments.                         |
| [`Figures`](#ConnectionGroup.Figures)                                                 | Gets the list of associated figures.                          |
| [`Images`](#ConnectionGroup.Images)                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ConnectionGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ConnectionGroup.Properties)                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ConnectionGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ConnectionGroup.ConnectionType"></a>

### *property* ConnectionGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.InternalObject"></a>

### *property* ConnectionGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ActiveConnections"></a>

### *property* ConnectionGroup.ActiveConnections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Connections"></a>

### *property* ConnectionGroup.Connections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.EdgeOverlapTolerance"></a>

### *property* ConnectionGroup.EdgeOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceOverlapTolerance"></a>

### *property* ConnectionGroup.FaceOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.MinimumDistancePercentage"></a>

### *property* ConnectionGroup.MinimumDistancePercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ThicknessScaleFactor"></a>

### *property* ConnectionGroup.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ToleranceSlider"></a>

### *property* ConnectionGroup.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* ConnectionGroup.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceAngleTolerance"></a>

### *property* ConnectionGroup.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.MinimumDistanceValue"></a>

### *property* ConnectionGroup.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ToleranceValue"></a>

### *property* ConnectionGroup.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CylindricalFaces"></a>

### *property* ConnectionGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Priority"></a>

### *property* ConnectionGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupBy"></a>

### *property* ConnectionGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.SearchAcross"></a>

### *property* ConnectionGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ToleranceType"></a>

### *property* ConnectionGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.EdgeEdge"></a>

### *property* ConnectionGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceEdge"></a>

### *property* ConnectionGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AutomaticFixedJoints"></a>

### *property* ConnectionGroup.AutomaticFixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RevoluteJoints"></a>

### *property* ConnectionGroup.RevoluteJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Suppressed"></a>

### *property* ConnectionGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceFace"></a>

### *property* ConnectionGroup.FaceFace *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.UseRange"></a>

### *property* ConnectionGroup.UseRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Location"></a>

### *property* ConnectionGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.DataModelObjectCategory"></a>

### *property* ConnectionGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Children"></a>

### *property* ConnectionGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Comments"></a>

### *property* ConnectionGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Figures"></a>

### *property* ConnectionGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Images"></a>

### *property* ConnectionGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ReadOnly"></a>

### *property* ConnectionGroup.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ConnectionGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Properties"></a>

### *property* ConnectionGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.VisibleProperties"></a>

### *property* ConnectionGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConnectionGroup.AddContactRegion"></a>

### ConnectionGroup.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddJoint"></a>

### ConnectionGroup.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.SearchConnectionsForDuplicatePairs"></a>

### ConnectionGroup.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddSpotWeld"></a>

### ConnectionGroup.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddInterStage"></a>

### ConnectionGroup.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CreateAutomaticConnections"></a>

### ConnectionGroup.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.DeleteChildren"></a>

### ConnectionGroup.DeleteChildren()

Run the DeleteChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ConnectionGroup.DeleteChildren(b_Verify: System.Boolean)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RenameBasedOnChildren"></a>

### ConnectionGroup.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.SetDefaultAPDLNames"></a>

### ConnectionGroup.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RepairOverlappingContactRegions"></a>

### ConnectionGroup.RepairOverlappingContactRegions()

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Delete"></a>

### ConnectionGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetChildren"></a>

### ConnectionGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### ConnectionGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddComment"></a>

### ConnectionGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddFigure"></a>

### ConnectionGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddImage"></a>

### ConnectionGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Activate"></a>

### ConnectionGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CopyTo"></a>

### ConnectionGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Duplicate"></a>

### ConnectionGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupAllSimilarChildren"></a>

### ConnectionGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupSimilarObjects"></a>

### ConnectionGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.PropertyByName"></a>

### ConnectionGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.PropertyByAPIName"></a>

### ConnectionGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CreateParameter"></a>

### ConnectionGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetParameter"></a>

### ConnectionGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RemoveParameter"></a>

### ConnectionGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

