# ConnectionGroup

### *class* ConnectionGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ConnectionGroup.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddContactRegion`](#ConnectionGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddJoint`](#ConnectionGroup.AddJoint)                                                     | Creates a new child Joint.                                                        |
| [`SearchConnectionsForDuplicatePairs`](#ConnectionGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`AddSpotWeld`](#ConnectionGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                     |
| [`AddInterStage`](#ConnectionGroup.AddInterStage)                                           | Creates a new child InterStage.                                                   |
| [`CreateAutomaticConnections`](#ConnectionGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                        |
| [`DeleteChildren`](#id1)                                                                    | Run the DeleteChildren action.                                                    |
| [`DeleteChildren`](#id1)                                                                    | Run the DeleteChildren action with optional verification dialog.                  |
| [`RenameBasedOnChildren`](#ConnectionGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                |
| [`SetDefaultAPDLNames`](#ConnectionGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.           |
| [`RepairOverlappingContactRegions`](#ConnectionGroup.RepairOverlappingContactRegions)       | Run the RepairOverlappingContactRegions action.                                   |
| [`Delete`](#ConnectionGroup.Delete)                                                         | Run the Delete action.                                                            |
| [`GetChildren`](#id2)                                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id2)                                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ConnectionGroup.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#ConnectionGroup.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#ConnectionGroup.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](#ConnectionGroup.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](#ConnectionGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ConnectionGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ConnectionGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ConnectionGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ConnectionGroup.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ConnectionGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](#ConnectionGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ConnectionGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ConnectionGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ConnectionType`](#ConnectionGroup.ConnectionType)                                                                    | Gets or sets the ConnectionType.                              |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`ActiveConnections`](#ConnectionGroup.ActiveConnections)                                                              | Gets the ActiveConnections.                                   |
| [`Connections`](Connections.md#Connections)                                                                            | Gets the Connections.                                         |
| [`EdgeOverlapTolerance`](#ConnectionGroup.EdgeOverlapTolerance)                                                        | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceOverlapTolerance`](#ConnectionGroup.FaceOverlapTolerance)                                                        | Gets or sets the FaceOverlapTolerance.                        |
| [`MinimumDistancePercentage`](#ConnectionGroup.MinimumDistancePercentage)                                              | Gets or sets the MinimumDistancePercentage.                   |
| [`ThicknessScaleFactor`](#ConnectionGroup.ThicknessScaleFactor)                                                        | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](#ConnectionGroup.ToleranceSlider)                                                                  | Gets or sets the ToleranceSlider.                             |
| [`FaceFaceDetectionAngleTolerence`](#ConnectionGroup.FaceFaceDetectionAngleTolerence)                                  | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceAngleTolerance`](#ConnectionGroup.FaceAngleTolerance)                                                            | Gets or sets the FaceAngleTolerance.                          |
| [`MinimumDistanceValue`](#ConnectionGroup.MinimumDistanceValue)                                                        | Gets the MinimumDistanceValue.                                |
| [`ToleranceValue`](#ConnectionGroup.ToleranceValue)                                                                    | Gets or sets the ToleranceValue.                              |
| [`CylindricalFaces`](#ConnectionGroup.CylindricalFaces)                                                                | Gets or sets the CylindricalFaces.                            |
| [`Priority`](#ConnectionGroup.Priority)                                                                                | Gets or sets the Priority.                                    |
| [`GroupBy`](#ConnectionGroup.GroupBy)                                                                                  | Gets or sets the GroupBy.                                     |
| [`SearchAcross`](#ConnectionGroup.SearchAcross)                                                                        | Gets or sets the SearchAcross.                                |
| [`ToleranceType`](../../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType)                               | Gets or sets the ToleranceType.                               |
| [`EdgeEdge`](#ConnectionGroup.EdgeEdge)                                                                                | Gets or sets the EdgeEdge.                                    |
| [`FaceEdge`](#ConnectionGroup.FaceEdge)                                                                                | Gets or sets the FaceEdge.                                    |
| [`AutomaticFixedJoints`](#ConnectionGroup.AutomaticFixedJoints)                                                        | Gets or sets the AutomaticFixedJoints.                        |
| [`RevoluteJoints`](#ConnectionGroup.RevoluteJoints)                                                                    | Gets or sets the RevoluteJoints.                              |
| [`Suppressed`](#ConnectionGroup.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`FaceFace`](#ConnectionGroup.FaceFace)                                                                                | Gets or sets the FaceFace.                                    |
| [`UseRange`](#ConnectionGroup.UseRange)                                                                                | Gets or sets the UseRange.                                    |
| [`Location`](#ConnectionGroup.Location)                                                                                | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ConnectionGroup.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#ConnectionGroup.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#ConnectionGroup.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#ConnectionGroup.Images)                                                                                    | Gets the list of associated images.                           |
| [`ReadOnly`](#ConnectionGroup.ReadOnly)                                                                                | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ConnectionGroup.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ConnectionGroup.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import ConnectionGroup
```

## Property detail

### *property* ConnectionGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../../Mechanical/DataModel/Enums/AutoDetectionType.md#AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.ActiveConnections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.Connections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.EdgeOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.FaceOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.MinimumDistancePercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.AutomaticFixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.RevoluteJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.FaceFace *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.UseRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ConnectionGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ConnectionGroup.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.DeleteChildren()

Run the DeleteChildren action.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.DeleteChildren(b_Verify: System.Boolean)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.RepairOverlappingContactRegions()

Run the RepairOverlappingContactRegions action.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ConnectionGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
