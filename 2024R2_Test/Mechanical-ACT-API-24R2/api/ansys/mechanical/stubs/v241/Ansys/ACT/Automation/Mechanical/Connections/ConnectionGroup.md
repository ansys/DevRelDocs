# `ConnectionGroup`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ConnectionGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ConnectionGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddContactRegion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                |
| [`AddJoint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.AddJoint)                                                     | Creates a new child Joint.                                                        |
| [`SearchConnectionsForDuplicatePairs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`AddSpotWeld`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                     |
| [`AddInterStage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.AddInterStage)                                           | Creates a new child InterStage.                                                   |
| [`CreateAutomaticConnections`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                        |
| [`DeleteChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#id1)                                                                    | Run the DeleteChildren action.                                                    |
| [`DeleteChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#id1)                                                                    | Run the DeleteChildren action with optional verification dialog.                  |
| [`RenameBasedOnChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                |
| [`SetDefaultAPDLNames`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.           |
| [`RepairOverlappingContactRegions`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.RepairOverlappingContactRegions)       | Run the RepairOverlappingContactRegions action.                                   |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Delete)                                                         | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#id2)                                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#id2)                                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ConnectionType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                              |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#id0)                                                              | Gets the internal object. For advanced usage only.            |
| [`ActiveConnections`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.ActiveConnections)                             | Gets the ActiveConnections.                                   |
| [`Connections`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Connections)                                         | Gets the Connections.                                         |
| [`EdgeOverlapTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceOverlapTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                        |
| [`MinimumDistancePercentage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                   |
| [`ThicknessScaleFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                             |
| [`FaceFaceDetectionAngleTolerence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceAngleTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                          |
| [`MinimumDistanceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                |
| [`ToleranceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                              |
| [`CylindricalFaces`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                            |
| [`Priority`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Priority)                                               | Gets or sets the Priority.                                    |
| [`GroupBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                     |
| [`SearchAcross`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                |
| [`ToleranceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                               |
| [`EdgeEdge`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                    |
| [`FaceEdge`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                    |
| [`AutomaticFixedJoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                        |
| [`RevoluteJoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                              |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`FaceFace`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.FaceFace)                                               | Gets or sets the FaceFace.                                    |
| [`UseRange`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.UseRange)                                               | Gets or sets the UseRange.                                    |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Location)                                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Children)                                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Comments)                                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Figures)                                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Images)                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#id0)                                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.Properties)                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/ConnectionGroup.md#ConnectionGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ConnectionGroup.ConnectionType"></a>

### *property* ConnectionGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../../Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ConnectionGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Priority"></a>

### *property* ConnectionGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupBy"></a>

### *property* ConnectionGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.SearchAcross"></a>

### *property* ConnectionGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ToleranceType"></a>

### *property* ConnectionGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.EdgeEdge"></a>

### *property* ConnectionGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceEdge"></a>

### *property* ConnectionGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ConnectionGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Children"></a>

### *property* ConnectionGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Comments"></a>

### *property* ConnectionGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Figures"></a>

### *property* ConnectionGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Images"></a>

### *property* ConnectionGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

Run the RepairOverlappingContactRegions action.

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

### ConnectionGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

