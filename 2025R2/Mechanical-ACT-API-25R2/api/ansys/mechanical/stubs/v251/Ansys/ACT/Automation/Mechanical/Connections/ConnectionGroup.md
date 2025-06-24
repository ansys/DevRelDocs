# `ConnectionGroup`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ConnectionGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.ConnectionGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ConnectionGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#ConnectionGroup.Activate)                                                     | Activate the current object.                                                                                                       |
| [`AddComment`](#ConnectionGroup.AddComment)                                                 | Creates a new child Comment.                                                                                                       |
| [`AddContactRegion`](#ConnectionGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                                                                 |
| [`AddFigure`](#ConnectionGroup.AddFigure)                                                   | Creates a new child Figure.                                                                                                        |
| [`AddImage`](#ConnectionGroup.AddImage)                                                     | Creates a new child Image.                                                                                                         |
| [`AddInterStage`](#ConnectionGroup.AddInterStage)                                           | Creates a new child InterStage.                                                                                                    |
| [`AddJoint`](#ConnectionGroup.AddJoint)                                                     | Creates a new child Joint.                                                                                                         |
| [`AddSpotWeld`](#ConnectionGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                                                                      |
| [`CopyTo`](#ConnectionGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                                                                         |
| [`CreateAutomaticConnections`](#ConnectionGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                                                                         |
| [`CreateParameter`](#ConnectionGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                                                                            |
| [`Delete`](#ConnectionGroup.Delete)                                                         | Run the Delete action.                                                                                                             |
| [`DeleteChildren`](#ConnectionGroup.DeleteChildren)                                         | Run the DeleteChildren action with optional verification dialog.                                                                   |
| [`Duplicate`](#ConnectionGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                                                                     |
| [`GetChildren`](#ConnectionGroup.GetChildren)                                               | Gets the list of children, filtered by type.                                                                                       |
| [`GetParameter`](#ConnectionGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                                                                            |
| [`GroupAllSimilarChildren`](#ConnectionGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                                                            |
| [`GroupSimilarObjects`](#ConnectionGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                                                                |
| [`PropertyByAPIName`](#ConnectionGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                                                                    |
| [`PropertyByName`](#ConnectionGroup.PropertyByName)                                         | Get a property by its unique name.                                                                                                 |
| [`RemoveParameter`](#ConnectionGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.                                                  |
| [`RenameBasedOnChildren`](#ConnectionGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                                                                 |
| [`RepairOverlappingContactRegions`](#ConnectionGroup.RepairOverlappingContactRegions)       | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| [`SearchConnectionsForDuplicatePairs`](#ConnectionGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                                                                 |
| [`SetDefaultAPDLNames`](#ConnectionGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.                                                            |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ActiveConnections`](#ConnectionGroup.ActiveConnections)                             | Gets the ActiveConnections.                                   |
| [`AutomaticFixedJoints`](#ConnectionGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                        |
| [`Children`](#ConnectionGroup.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#ConnectionGroup.Comments)                                               | Gets the list of associated comments.                         |
| [`ConnectionType`](#ConnectionGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                              |
| [`Connections`](#ConnectionGroup.Connections)                                         | Gets the Connections.                                         |
| [`CylindricalFaces`](#ConnectionGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                            |
| [`DataModelObjectCategory`](#ConnectionGroup.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`EdgeEdge`](#ConnectionGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                    |
| [`EdgeOverlapTolerance`](#ConnectionGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceAngleTolerance`](#ConnectionGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                          |
| [`FaceEdge`](#ConnectionGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                    |
| [`FaceFace`](#ConnectionGroup.FaceFace)                                               | Gets or sets the FaceFace.                                    |
| [`FaceFaceDetectionAngleTolerence`](#ConnectionGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceOverlapTolerance`](#ConnectionGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                        |
| [`Figures`](#ConnectionGroup.Figures)                                                 | Gets the list of associated figures.                          |
| [`GroupBy`](#ConnectionGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                     |
| [`Images`](#ConnectionGroup.Images)                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ConnectionGroup.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ConnectionGroup.Location)                                               | Gets or sets the Location.                                    |
| [`MinimumDistancePercentage`](#ConnectionGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                   |
| [`MinimumDistanceValue`](#ConnectionGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                |
| [`Priority`](#ConnectionGroup.Priority)                                               | Gets or sets the Priority.                                    |
| [`Properties`](#ConnectionGroup.Properties)                                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ConnectionGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`RevoluteJoints`](#ConnectionGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                              |
| [`SearchAcross`](#ConnectionGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                |
| [`Suppressed`](#ConnectionGroup.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`ThicknessScaleFactor`](#ConnectionGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](#ConnectionGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                             |
| [`ToleranceType`](#ConnectionGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                               |
| [`ToleranceValue`](#ConnectionGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                              |
| [`UseRange`](#ConnectionGroup.UseRange)                                               | Gets or sets the UseRange.                                    |
| [`VisibleProperties`](#ConnectionGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ConnectionGroup.ActiveConnections"></a>

### *property* ConnectionGroup.ActiveConnections *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AutomaticFixedJoints"></a>

### *property* ConnectionGroup.AutomaticFixedJoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Children"></a>

### *property* ConnectionGroup.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Comments"></a>

### *property* ConnectionGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ConnectionType"></a>

### *property* ConnectionGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../../Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Connections"></a>

### *property* ConnectionGroup.Connections *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CylindricalFaces"></a>

### *property* ConnectionGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.DataModelObjectCategory"></a>

### *property* ConnectionGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.EdgeEdge"></a>

### *property* ConnectionGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.EdgeOverlapTolerance"></a>

### *property* ConnectionGroup.EdgeOverlapTolerance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceAngleTolerance"></a>

### *property* ConnectionGroup.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceEdge"></a>

### *property* ConnectionGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceFace"></a>

### *property* ConnectionGroup.FaceFace *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* ConnectionGroup.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceOverlapTolerance"></a>

### *property* ConnectionGroup.FaceOverlapTolerance *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Figures"></a>

### *property* ConnectionGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupBy"></a>

### *property* ConnectionGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Images"></a>

### *property* ConnectionGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.InternalObject"></a>

### *property* ConnectionGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Location"></a>

### *property* ConnectionGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.MinimumDistancePercentage"></a>

### *property* ConnectionGroup.MinimumDistancePercentage *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.MinimumDistanceValue"></a>

### *property* ConnectionGroup.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Priority"></a>

### *property* ConnectionGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Properties"></a>

### *property* ConnectionGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ReadOnly"></a>

### *property* ConnectionGroup.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RevoluteJoints"></a>

### *property* ConnectionGroup.RevoluteJoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.SearchAcross"></a>

### *property* ConnectionGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Suppressed"></a>

### *property* ConnectionGroup.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ThicknessScaleFactor"></a>

### *property* ConnectionGroup.ThicknessScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ToleranceSlider"></a>

### *property* ConnectionGroup.ToleranceSlider *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ToleranceType"></a>

### *property* ConnectionGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ToleranceValue"></a>

### *property* ConnectionGroup.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.UseRange"></a>

### *property* ConnectionGroup.UseRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.VisibleProperties"></a>

### *property* ConnectionGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConnectionGroup.Activate"></a>

### ConnectionGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddComment"></a>

### ConnectionGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddContactRegion"></a>

### ConnectionGroup.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddFigure"></a>

### ConnectionGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddImage"></a>

### ConnectionGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddInterStage"></a>

### ConnectionGroup.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddJoint"></a>

### ConnectionGroup.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddSpotWeld"></a>

### ConnectionGroup.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CopyTo"></a>

### ConnectionGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CreateAutomaticConnections"></a>

### ConnectionGroup.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CreateParameter"></a>

### ConnectionGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Delete"></a>

### ConnectionGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.DeleteChildren"></a>

### ConnectionGroup.DeleteChildren(verificationDialog: [bool](https://docs.python.org/3/library/functions.html#bool))

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Duplicate"></a>

### ConnectionGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetChildren"></a>

### ConnectionGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetParameter"></a>

### ConnectionGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupAllSimilarChildren"></a>

### ConnectionGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupSimilarObjects"></a>

### ConnectionGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.PropertyByAPIName"></a>

### ConnectionGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.PropertyByName"></a>

### ConnectionGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RemoveParameter"></a>

### ConnectionGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RenameBasedOnChildren"></a>

### ConnectionGroup.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RepairOverlappingContactRegions"></a>

### ConnectionGroup.RepairOverlappingContactRegions()

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.SearchConnectionsForDuplicatePairs"></a>

### ConnectionGroup.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.SetDefaultAPDLNames"></a>

### ConnectionGroup.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

