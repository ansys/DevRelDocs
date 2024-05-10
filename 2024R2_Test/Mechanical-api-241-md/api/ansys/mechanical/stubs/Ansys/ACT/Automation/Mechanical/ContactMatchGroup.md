<a id="contactmatchgroup"></a>

# ContactMatchGroup

<a id="ContactMatchGroup"></a>

### *class* ContactMatchGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactMatchGroup.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`AddContactRegion`](#ContactMatchGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddJoint`](#ContactMatchGroup.AddJoint)                                                     | Creates a new child Joint.                                                        |
| [`SearchConnectionsForDuplicatePairs`](#ContactMatchGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`AddSpotWeld`](#ContactMatchGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                     |
| [`AddInterStage`](#ContactMatchGroup.AddInterStage)                                           | Creates a new child InterStage.                                                   |
| [`CreateAutomaticConnections`](#ContactMatchGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                        |
| [`DeleteChildren`](#id1)                                                                      | Run the DeleteChildren action.                                                    |
| [`DeleteChildren`](#id1)                                                                      | Run the DeleteChildren action with optional verification dialog.                  |
| [`RenameBasedOnChildren`](#ContactMatchGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                |
| [`SetDefaultAPDLNames`](#ContactMatchGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.           |
| [`RepairOverlappingContactRegions`](#ContactMatchGroup.RepairOverlappingContactRegions)       | Run the RepairOverlappingContactRegions action.                                   |
| [`Delete`](#ContactMatchGroup.Delete)                                                         | Run the Delete action.                                                            |
| [`GetChildren`](#id2)                                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id2)                                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactMatchGroup.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactMatchGroup.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactMatchGroup.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](#ContactMatchGroup.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](#ContactMatchGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactMatchGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactMatchGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactMatchGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactMatchGroup.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactMatchGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactMatchGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactMatchGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactMatchGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ConnectionType`](#ContactMatchGroup.ConnectionType)                                                               | Gets or sets the ConnectionType.                              |
| [`ActiveConnections`](#ContactMatchGroup.ActiveConnections)                                                         | Gets the ActiveConnections.                                   |
| [`Connections`](Connections/Connections.md#Connections)                                                             | Gets the Connections.                                         |
| [`EdgeOverlapTolerance`](#ContactMatchGroup.EdgeOverlapTolerance)                                                   | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceOverlapTolerance`](#ContactMatchGroup.FaceOverlapTolerance)                                                   | Gets or sets the FaceOverlapTolerance.                        |
| [`MinimumDistancePercentage`](#ContactMatchGroup.MinimumDistancePercentage)                                         | Gets or sets the MinimumDistancePercentage.                   |
| [`ThicknessScaleFactor`](#ContactMatchGroup.ThicknessScaleFactor)                                                   | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](#ContactMatchGroup.ToleranceSlider)                                                             | Gets or sets the ToleranceSlider.                             |
| [`FaceFaceDetectionAngleTolerence`](#ContactMatchGroup.FaceFaceDetectionAngleTolerence)                             | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceAngleTolerance`](#ContactMatchGroup.FaceAngleTolerance)                                                       | Gets or sets the FaceAngleTolerance.                          |
| [`MinimumDistanceValue`](#ContactMatchGroup.MinimumDistanceValue)                                                   | Gets the MinimumDistanceValue.                                |
| [`ToleranceValue`](#ContactMatchGroup.ToleranceValue)                                                               | Gets or sets the ToleranceValue.                              |
| [`CylindricalFaces`](#ContactMatchGroup.CylindricalFaces)                                                           | Gets or sets the CylindricalFaces.                            |
| [`Priority`](#ContactMatchGroup.Priority)                                                                           | Gets or sets the Priority.                                    |
| [`GroupBy`](#ContactMatchGroup.GroupBy)                                                                             | Gets or sets the GroupBy.                                     |
| [`SearchAcross`](#ContactMatchGroup.SearchAcross)                                                                   | Gets or sets the SearchAcross.                                |
| [`ToleranceType`](../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType)                               | Gets or sets the ToleranceType.                               |
| [`EdgeEdge`](#ContactMatchGroup.EdgeEdge)                                                                           | Gets or sets the EdgeEdge.                                    |
| [`FaceEdge`](#ContactMatchGroup.FaceEdge)                                                                           | Gets or sets the FaceEdge.                                    |
| [`AutomaticFixedJoints`](#ContactMatchGroup.AutomaticFixedJoints)                                                   | Gets or sets the AutomaticFixedJoints.                        |
| [`RevoluteJoints`](#ContactMatchGroup.RevoluteJoints)                                                               | Gets or sets the RevoluteJoints.                              |
| [`Suppressed`](#ContactMatchGroup.Suppressed)                                                                       | Gets or sets the Suppressed.                                  |
| [`FaceFace`](#ContactMatchGroup.FaceFace)                                                                           | Gets or sets the FaceFace.                                    |
| [`UseRange`](#ContactMatchGroup.UseRange)                                                                           | Gets or sets the UseRange.                                    |
| [`Location`](#ContactMatchGroup.Location)                                                                           | Gets or sets the Location.                                    |
| [`Children`](#ContactMatchGroup.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#ContactMatchGroup.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#ContactMatchGroup.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#ContactMatchGroup.Images)                                                                               | Gets the list of associated images.                           |
| [`ReadOnly`](#ContactMatchGroup.ReadOnly)                                                                           | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactMatchGroup.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactMatchGroup.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ContactMatchGroup
```

<a id="property-detail"></a>

## Property detail

<a id="ContactMatchGroup.InternalObject"></a>

### *property* ContactMatchGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.DataModelObjectCategory"></a>

### *property* ContactMatchGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ConnectionType"></a>

### *property* ContactMatchGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../Mechanical/DataModel/Enums/AutoDetectionType.md#AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ContactMatchGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Priority"></a>

### *property* ContactMatchGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.GroupBy"></a>

### *property* ContactMatchGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.SearchAcross"></a>

### *property* ContactMatchGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.ToleranceType"></a>

### *property* ContactMatchGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.EdgeEdge"></a>

### *property* ContactMatchGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.FaceEdge"></a>

### *property* ContactMatchGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ContactMatchGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Figures"></a>

### *property* ContactMatchGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatchGroup.Images"></a>

### *property* ContactMatchGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### ContactMatchGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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
