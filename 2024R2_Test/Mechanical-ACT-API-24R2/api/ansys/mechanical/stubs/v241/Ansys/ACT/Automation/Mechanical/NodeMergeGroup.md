# `NodeMergeGroup`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NodeMergeGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodeMergeGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddNodeMerge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.AddNodeMerge)                                             | Creates a new NodeMerge                                                           |
| [`GenerateNodeMerge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.GenerateNodeMerge)                                   | Run the GenerateNodeMerge action.                                                 |
| [`AddContactRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                |
| [`AddJoint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.AddJoint)                                                     | Creates a new child Joint.                                                        |
| [`SearchConnectionsForDuplicatePairs`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`AddSpotWeld`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                     |
| [`AddInterStage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.AddInterStage)                                           | Creates a new child InterStage.                                                   |
| [`CreateAutomaticConnections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                        |
| [`DeleteChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#id1)                                                                   | Run the DeleteChildren action.                                                    |
| [`DeleteChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#id1)                                                                   | Run the DeleteChildren action with optional verification dialog.                  |
| [`RenameBasedOnChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                |
| [`SetDefaultAPDLNames`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.           |
| [`RepairOverlappingContactRegions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.RepairOverlappingContactRegions)       | Run the RepairOverlappingContactRegions action.                                   |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Delete)                                                         | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#id2)                                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#id2)                                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#id0)                                                             | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.DataModelObjectCategory)                 | Gets the current DataModelObjectâ€™s category.                  |
| [`ConnectionType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                              |
| [`ActiveConnections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.ActiveConnections)                             | Gets the ActiveConnections.                                   |
| [`Connections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Connections)                                         | Gets the Connections.                                         |
| [`EdgeOverlapTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceOverlapTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                        |
| [`MinimumDistancePercentage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                   |
| [`ThicknessScaleFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                             |
| [`FaceFaceDetectionAngleTolerence`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceAngleTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                          |
| [`MinimumDistanceValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                |
| [`ToleranceValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                              |
| [`CylindricalFaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                            |
| [`Priority`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Priority)                                               | Gets or sets the Priority.                                    |
| [`GroupBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                     |
| [`SearchAcross`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                |
| [`ToleranceType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                               |
| [`EdgeEdge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                    |
| [`FaceEdge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                    |
| [`AutomaticFixedJoints`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                        |
| [`RevoluteJoints`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                              |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`FaceFace`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.FaceFace)                                               | Gets or sets the FaceFace.                                    |
| [`UseRange`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.UseRange)                                               | Gets or sets the UseRange.                                    |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Location)                                               | Gets or sets the Location.                                    |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Children)                                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Comments)                                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Figures)                                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Images)                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#id0)                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.Properties)                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMergeGroup.md#NodeMergeGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodeMergeGroup.InternalObject"></a>

### *property* NodeMergeGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.DataModelObjectCategory"></a>

### *property* NodeMergeGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ConnectionType"></a>

### *property* NodeMergeGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ActiveConnections"></a>

### *property* NodeMergeGroup.ActiveConnections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Connections"></a>

### *property* NodeMergeGroup.Connections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.EdgeOverlapTolerance"></a>

### *property* NodeMergeGroup.EdgeOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceOverlapTolerance"></a>

### *property* NodeMergeGroup.FaceOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.MinimumDistancePercentage"></a>

### *property* NodeMergeGroup.MinimumDistancePercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ThicknessScaleFactor"></a>

### *property* NodeMergeGroup.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ToleranceSlider"></a>

### *property* NodeMergeGroup.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* NodeMergeGroup.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceAngleTolerance"></a>

### *property* NodeMergeGroup.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.MinimumDistanceValue"></a>

### *property* NodeMergeGroup.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ToleranceValue"></a>

### *property* NodeMergeGroup.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CylindricalFaces"></a>

### *property* NodeMergeGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Priority"></a>

### *property* NodeMergeGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GroupBy"></a>

### *property* NodeMergeGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.SearchAcross"></a>

### *property* NodeMergeGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ToleranceType"></a>

### *property* NodeMergeGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.EdgeEdge"></a>

### *property* NodeMergeGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceEdge"></a>

### *property* NodeMergeGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AutomaticFixedJoints"></a>

### *property* NodeMergeGroup.AutomaticFixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RevoluteJoints"></a>

### *property* NodeMergeGroup.RevoluteJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Suppressed"></a>

### *property* NodeMergeGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceFace"></a>

### *property* NodeMergeGroup.FaceFace *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.UseRange"></a>

### *property* NodeMergeGroup.UseRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Location"></a>

### *property* NodeMergeGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Children"></a>

### *property* NodeMergeGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Comments"></a>

### *property* NodeMergeGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Figures"></a>

### *property* NodeMergeGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Images"></a>

### *property* NodeMergeGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ReadOnly"></a>

### *property* NodeMergeGroup.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodeMergeGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Properties"></a>

### *property* NodeMergeGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.VisibleProperties"></a>

### *property* NodeMergeGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodeMergeGroup.AddNodeMerge"></a>

### NodeMergeGroup.AddNodeMerge()

Creates a new NodeMerge

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GenerateNodeMerge"></a>

### NodeMergeGroup.GenerateNodeMerge()

Run the GenerateNodeMerge action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddContactRegion"></a>

### NodeMergeGroup.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddJoint"></a>

### NodeMergeGroup.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.SearchConnectionsForDuplicatePairs"></a>

### NodeMergeGroup.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddSpotWeld"></a>

### NodeMergeGroup.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddInterStage"></a>

### NodeMergeGroup.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CreateAutomaticConnections"></a>

### NodeMergeGroup.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.DeleteChildren"></a>

### NodeMergeGroup.DeleteChildren()

Run the DeleteChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodeMergeGroup.DeleteChildren(b_Verify: System.Boolean)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RenameBasedOnChildren"></a>

### NodeMergeGroup.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.SetDefaultAPDLNames"></a>

### NodeMergeGroup.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RepairOverlappingContactRegions"></a>

### NodeMergeGroup.RepairOverlappingContactRegions()

Run the RepairOverlappingContactRegions action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Delete"></a>

### NodeMergeGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetChildren"></a>

### NodeMergeGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### NodeMergeGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddComment"></a>

### NodeMergeGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddFigure"></a>

### NodeMergeGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddImage"></a>

### NodeMergeGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Activate"></a>

### NodeMergeGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CopyTo"></a>

### NodeMergeGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Duplicate"></a>

### NodeMergeGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GroupAllSimilarChildren"></a>

### NodeMergeGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GroupSimilarObjects"></a>

### NodeMergeGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.PropertyByName"></a>

### NodeMergeGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.PropertyByAPIName"></a>

### NodeMergeGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CreateParameter"></a>

### NodeMergeGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetParameter"></a>

### NodeMergeGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RemoveParameter"></a>

### NodeMergeGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

