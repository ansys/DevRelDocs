# `MeshConnectionGroup`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnectionGroup"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnectionGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshConnectionGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshConnectionGroup.Activate)                                                     | Activate the current object.                                                      |
| [`AddComment`](#MeshConnectionGroup.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddContactRegion`](#MeshConnectionGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                |
| [`AddFigure`](#MeshConnectionGroup.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshConnectionGroup.AddImage)                                                     | Creates a new child Image.                                                        |
| [`AddInterStage`](#MeshConnectionGroup.AddInterStage)                                           | Creates a new child InterStage.                                                   |
| [`AddJoint`](#MeshConnectionGroup.AddJoint)                                                     | Creates a new child Joint.                                                        |
| [`AddManualMeshConnection`](#MeshConnectionGroup.AddManualMeshConnection)                       | Creates a new MeshConnection                                                      |
| [`AddSpotWeld`](#MeshConnectionGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                     |
| [`CopyTo`](#MeshConnectionGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`CreateAutomaticConnections`](#MeshConnectionGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                        |
| [`CreateParameter`](#MeshConnectionGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshConnectionGroup.Delete)                                                         | Run the Delete action.                                                            |
| [`DeleteChildren`](#MeshConnectionGroup.DeleteChildren)                                         | Run the DeleteChildren action.                                                    |
| [`DetectConnections`](#MeshConnectionGroup.DetectConnections)                                   | Detect mesh connections.                                                          |
| [`Duplicate`](#MeshConnectionGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`Generate`](#MeshConnectionGroup.Generate)                                                     | Generate mesh connections.                                                        |
| [`GetChildren`](#MeshConnectionGroup.GetChildren)                                               | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshConnectionGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshConnectionGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshConnectionGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshConnectionGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshConnectionGroup.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshConnectionGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnChildren`](#MeshConnectionGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                |
| [`RepairOverlappingContactRegions`](#MeshConnectionGroup.RepairOverlappingContactRegions)       | Run the RepairOverlappingContactRegions action.                                   |
| [`SearchConnectionsForDuplicatePairs`](#MeshConnectionGroup.SearchConnectionsForDuplicatePairs) | SearchConnectionsForDuplicatePairs method.                                        |
| [`SetDefaultAPDLNames`](#MeshConnectionGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ActiveConnections`](#MeshConnectionGroup.ActiveConnections)                             | Gets the ActiveConnections.                                   |
| [`AutomaticFixedJoints`](#MeshConnectionGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                        |
| [`Children`](#MeshConnectionGroup.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#MeshConnectionGroup.Comments)                                               | Gets the list of associated comments.                         |
| [`ConnectionType`](#MeshConnectionGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                              |
| [`Connections`](#MeshConnectionGroup.Connections)                                         | Gets the Connections.                                         |
| [`CylindricalFaces`](#MeshConnectionGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                            |
| [`DataModelObjectCategory`](#MeshConnectionGroup.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`EdgeEdge`](#MeshConnectionGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                    |
| [`EdgeOverlapTolerance`](#MeshConnectionGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceAngleTolerance`](#MeshConnectionGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                          |
| [`FaceEdge`](#MeshConnectionGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                    |
| [`FaceFace`](#MeshConnectionGroup.FaceFace)                                               | Gets or sets the FaceFace.                                    |
| [`FaceFaceDetectionAngleTolerence`](#MeshConnectionGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceOverlapTolerance`](#MeshConnectionGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                        |
| [`Figures`](#MeshConnectionGroup.Figures)                                                 | Gets the list of associated figures.                          |
| [`GroupBy`](#MeshConnectionGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                     |
| [`Images`](#MeshConnectionGroup.Images)                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshConnectionGroup.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#MeshConnectionGroup.Location)                                               | Gets or sets the Location.                                    |
| [`MinimumDistancePercentage`](#MeshConnectionGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                   |
| [`MinimumDistanceValue`](#MeshConnectionGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                |
| [`Priority`](#MeshConnectionGroup.Priority)                                               | Gets or sets the Priority.                                    |
| [`Properties`](#MeshConnectionGroup.Properties)                                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#MeshConnectionGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`RevoluteJoints`](#MeshConnectionGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                              |
| [`SearchAcross`](#MeshConnectionGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                |
| [`Suppressed`](#MeshConnectionGroup.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`ThicknessScaleFactor`](#MeshConnectionGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](#MeshConnectionGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                             |
| [`ToleranceType`](#MeshConnectionGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                               |
| [`ToleranceValue`](#MeshConnectionGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                              |
| [`UseRange`](#MeshConnectionGroup.UseRange)                                               | Gets or sets the UseRange.                                    |
| [`VisibleProperties`](#MeshConnectionGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshConnectionGroup.ActiveConnections"></a>

### *property* MeshConnectionGroup.ActiveConnections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AutomaticFixedJoints"></a>

### *property* MeshConnectionGroup.AutomaticFixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Children"></a>

### *property* MeshConnectionGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Comments"></a>

### *property* MeshConnectionGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ConnectionType"></a>

### *property* MeshConnectionGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Connections"></a>

### *property* MeshConnectionGroup.Connections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CylindricalFaces"></a>

### *property* MeshConnectionGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../../../v242/Ansys/Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.DataModelObjectCategory"></a>

### *property* MeshConnectionGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.EdgeEdge"></a>

### *property* MeshConnectionGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../../../v242/Ansys/Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.EdgeOverlapTolerance"></a>

### *property* MeshConnectionGroup.EdgeOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceAngleTolerance"></a>

### *property* MeshConnectionGroup.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceEdge"></a>

### *property* MeshConnectionGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../../../v242/Ansys/Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceFace"></a>

### *property* MeshConnectionGroup.FaceFace *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* MeshConnectionGroup.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceOverlapTolerance"></a>

### *property* MeshConnectionGroup.FaceOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Figures"></a>

### *property* MeshConnectionGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GroupBy"></a>

### *property* MeshConnectionGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Images"></a>

### *property* MeshConnectionGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.InternalObject"></a>

### *property* MeshConnectionGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Location"></a>

### *property* MeshConnectionGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.MinimumDistancePercentage"></a>

### *property* MeshConnectionGroup.MinimumDistancePercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.MinimumDistanceValue"></a>

### *property* MeshConnectionGroup.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Priority"></a>

### *property* MeshConnectionGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../../../v242/Ansys/Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Properties"></a>

### *property* MeshConnectionGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ReadOnly"></a>

### *property* MeshConnectionGroup.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RevoluteJoints"></a>

### *property* MeshConnectionGroup.RevoluteJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.SearchAcross"></a>

### *property* MeshConnectionGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Suppressed"></a>

### *property* MeshConnectionGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ThicknessScaleFactor"></a>

### *property* MeshConnectionGroup.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ToleranceSlider"></a>

### *property* MeshConnectionGroup.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ToleranceType"></a>

### *property* MeshConnectionGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ToleranceValue"></a>

### *property* MeshConnectionGroup.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.UseRange"></a>

### *property* MeshConnectionGroup.UseRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.VisibleProperties"></a>

### *property* MeshConnectionGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshConnectionGroup.Activate"></a>

### MeshConnectionGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddComment"></a>

### MeshConnectionGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddContactRegion"></a>

### MeshConnectionGroup.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddFigure"></a>

### MeshConnectionGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddImage"></a>

### MeshConnectionGroup.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddInterStage"></a>

### MeshConnectionGroup.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddJoint"></a>

### MeshConnectionGroup.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddManualMeshConnection"></a>

### MeshConnectionGroup.AddManualMeshConnection()

Creates a new MeshConnection

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddSpotWeld"></a>

### MeshConnectionGroup.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CopyTo"></a>

### MeshConnectionGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CreateAutomaticConnections"></a>

### MeshConnectionGroup.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CreateParameter"></a>

### MeshConnectionGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Delete"></a>

### MeshConnectionGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.DeleteChildren"></a>

### MeshConnectionGroup.DeleteChildren()

Run the DeleteChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.DetectConnections"></a>

### MeshConnectionGroup.DetectConnections()

Detect mesh connections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Duplicate"></a>

### MeshConnectionGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Generate"></a>

### MeshConnectionGroup.Generate()

Generate mesh connections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GetChildren"></a>

### MeshConnectionGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GetParameter"></a>

### MeshConnectionGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GroupAllSimilarChildren"></a>

### MeshConnectionGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GroupSimilarObjects"></a>

### MeshConnectionGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.PropertyByAPIName"></a>

### MeshConnectionGroup.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.PropertyByName"></a>

### MeshConnectionGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RemoveParameter"></a>

### MeshConnectionGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RenameBasedOnChildren"></a>

### MeshConnectionGroup.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RepairOverlappingContactRegions"></a>

### MeshConnectionGroup.RepairOverlappingContactRegions()

Run the RepairOverlappingContactRegions action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.SearchConnectionsForDuplicatePairs"></a>

### MeshConnectionGroup.SearchConnectionsForDuplicatePairs()

SearchConnectionsForDuplicatePairs method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.SetDefaultAPDLNames"></a>

### MeshConnectionGroup.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

