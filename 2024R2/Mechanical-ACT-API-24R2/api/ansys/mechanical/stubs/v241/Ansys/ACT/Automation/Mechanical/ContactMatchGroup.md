# `ContactMatchGroup`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ContactMatchGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactMatchGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddContactRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                |
| [`AddJoint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.AddJoint)                                                     | Creates a new child Joint.                                                        |
| [`SearchConnectionsForDuplicatePairs`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`AddSpotWeld`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                     |
| [`AddInterStage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.AddInterStage)                                           | Creates a new child InterStage.                                                   |
| [`CreateAutomaticConnections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                        |
| [`DeleteChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#id1)                                                                      | Run the DeleteChildren action.                                                    |
| [`DeleteChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#id1)                                                                      | Run the DeleteChildren action with optional verification dialog.                  |
| [`RenameBasedOnChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                |
| [`SetDefaultAPDLNames`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.           |
| [`RepairOverlappingContactRegions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.RepairOverlappingContactRegions)       | Run the RepairOverlappingContactRegions action.                                   |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Delete)                                                         | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#id2)                                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#id2)                                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#id0)                                                                | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                  |
| [`ConnectionType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                              |
| [`ActiveConnections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.ActiveConnections)                             | Gets the ActiveConnections.                                   |
| [`Connections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Connections)                                         | Gets the Connections.                                         |
| [`EdgeOverlapTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceOverlapTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                        |
| [`MinimumDistancePercentage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                   |
| [`ThicknessScaleFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                             |
| [`FaceFaceDetectionAngleTolerence`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceAngleTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                          |
| [`MinimumDistanceValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                |
| [`ToleranceValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                              |
| [`CylindricalFaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                            |
| [`Priority`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Priority)                                               | Gets or sets the Priority.                                    |
| [`GroupBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                     |
| [`SearchAcross`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                |
| [`ToleranceType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                               |
| [`EdgeEdge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                    |
| [`FaceEdge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                    |
| [`AutomaticFixedJoints`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                        |
| [`RevoluteJoints`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                              |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`FaceFace`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.FaceFace)                                               | Gets or sets the FaceFace.                                    |
| [`UseRange`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.UseRange)                                               | Gets or sets the UseRange.                                    |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Location)                                               | Gets or sets the Location.                                    |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Children)                                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Comments)                                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Figures)                                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Images)                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#id0)                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.Properties)                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ContactMatchGroup.md#ContactMatchGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactMatchGroup.InternalObject"></a>

### *property* ContactMatchGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.DataModelObjectCategory"></a>

### *property* ContactMatchGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ConnectionType"></a>

### *property* ContactMatchGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ActiveConnections"></a>

### *property* ContactMatchGroup.ActiveConnections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Connections"></a>

### *property* ContactMatchGroup.Connections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.EdgeOverlapTolerance"></a>

### *property* ContactMatchGroup.EdgeOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceOverlapTolerance"></a>

### *property* ContactMatchGroup.FaceOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.MinimumDistancePercentage"></a>

### *property* ContactMatchGroup.MinimumDistancePercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ThicknessScaleFactor"></a>

### *property* ContactMatchGroup.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ToleranceSlider"></a>

### *property* ContactMatchGroup.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* ContactMatchGroup.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceAngleTolerance"></a>

### *property* ContactMatchGroup.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.MinimumDistanceValue"></a>

### *property* ContactMatchGroup.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ToleranceValue"></a>

### *property* ContactMatchGroup.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.CylindricalFaces"></a>

### *property* ContactMatchGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Priority"></a>

### *property* ContactMatchGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GroupBy"></a>

### *property* ContactMatchGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.SearchAcross"></a>

### *property* ContactMatchGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ToleranceType"></a>

### *property* ContactMatchGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.EdgeEdge"></a>

### *property* ContactMatchGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceEdge"></a>

### *property* ContactMatchGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AutomaticFixedJoints"></a>

### *property* ContactMatchGroup.AutomaticFixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.RevoluteJoints"></a>

### *property* ContactMatchGroup.RevoluteJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Suppressed"></a>

### *property* ContactMatchGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceFace"></a>

### *property* ContactMatchGroup.FaceFace *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.UseRange"></a>

### *property* ContactMatchGroup.UseRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Location"></a>

### *property* ContactMatchGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Children"></a>

### *property* ContactMatchGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Comments"></a>

### *property* ContactMatchGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Figures"></a>

### *property* ContactMatchGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Images"></a>

### *property* ContactMatchGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ReadOnly"></a>

### *property* ContactMatchGroup.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactMatchGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Properties"></a>

### *property* ContactMatchGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.VisibleProperties"></a>

### *property* ContactMatchGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMatchGroup.AddContactRegion"></a>

### ContactMatchGroup.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddJoint"></a>

### ContactMatchGroup.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.SearchConnectionsForDuplicatePairs"></a>

### ContactMatchGroup.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddSpotWeld"></a>

### ContactMatchGroup.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddInterStage"></a>

### ContactMatchGroup.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.CreateAutomaticConnections"></a>

### ContactMatchGroup.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.DeleteChildren"></a>

### ContactMatchGroup.DeleteChildren()

Run the DeleteChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactMatchGroup.DeleteChildren(b_Verify: System.Boolean)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.RenameBasedOnChildren"></a>

### ContactMatchGroup.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.SetDefaultAPDLNames"></a>

### ContactMatchGroup.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.RepairOverlappingContactRegions"></a>

### ContactMatchGroup.RepairOverlappingContactRegions()

Run the RepairOverlappingContactRegions action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Delete"></a>

### ContactMatchGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GetChildren"></a>

### ContactMatchGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### ContactMatchGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddComment"></a>

### ContactMatchGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddFigure"></a>

### ContactMatchGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.AddImage"></a>

### ContactMatchGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Activate"></a>

### ContactMatchGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.CopyTo"></a>

### ContactMatchGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Duplicate"></a>

### ContactMatchGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GroupAllSimilarChildren"></a>

### ContactMatchGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GroupSimilarObjects"></a>

### ContactMatchGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.PropertyByName"></a>

### ContactMatchGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.PropertyByAPIName"></a>

### ContactMatchGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.CreateParameter"></a>

### ContactMatchGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GetParameter"></a>

### ContactMatchGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.RemoveParameter"></a>

### ContactMatchGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

