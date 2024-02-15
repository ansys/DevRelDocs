# ContactMatchGroup

### *class* ContactMatchGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactMatchGroup.

> <!-- !! processed by numpydoc !! -->

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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ContactMatchGroup
```

## Property detail

### *property* ContactMatchGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../Mechanical/DataModel/Enums/AutoDetectionType.md#AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.ActiveConnections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.Connections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.EdgeOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.FaceOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.MinimumDistancePercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.AutomaticFixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.RevoluteJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.FaceFace *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.UseRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatchGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ContactMatchGroup.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.DeleteChildren()

Run the DeleteChildren action.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.DeleteChildren(b_Verify: System.Boolean)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.RepairOverlappingContactRegions()

Run the RepairOverlappingContactRegions action.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactMatchGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
