# `MeshConnectionGroup`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnectionGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshConnectionGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`DetectConnections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.DetectConnections)                                   | Detect mesh connections.                                                          |
| [`Generate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Generate)                                                     | Generate mesh connections.                                                        |
| [`SearchConnectionsForDuplicatePairs`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.SearchConnectionsForDuplicatePairs) | SearchConnectionsForDuplicatePairs method.                                        |
| [`AddManualMeshConnection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.AddManualMeshConnection)                       | Creates a new MeshConnection                                                      |
| [`AddContactRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                |
| [`AddJoint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.AddJoint)                                                     | Creates a new child Joint.                                                        |
| [`AddSpotWeld`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                     |
| [`AddInterStage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.AddInterStage)                                           | Creates a new child InterStage.                                                   |
| [`CreateAutomaticConnections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                        |
| [`DeleteChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#id1)                                                                        | Run the DeleteChildren action.                                                    |
| [`DeleteChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#id1)                                                                        | Run the DeleteChildren action with optional verification dialog.                  |
| [`RenameBasedOnChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                |
| [`SetDefaultAPDLNames`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.           |
| [`RepairOverlappingContactRegions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.RepairOverlappingContactRegions)       | Run the RepairOverlappingContactRegions action.                                   |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Delete)                                                         | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#id2)                                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#id2)                                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#id0)                                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.DataModelObjectCategory)                 | Gets the current DataModelObjectâ€™s category.                  |
| [`ConnectionType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                              |
| [`ActiveConnections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.ActiveConnections)                             | Gets the ActiveConnections.                                   |
| [`Connections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Connections)                                         | Gets the Connections.                                         |
| [`EdgeOverlapTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceOverlapTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                        |
| [`MinimumDistancePercentage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                   |
| [`ThicknessScaleFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                             |
| [`FaceFaceDetectionAngleTolerence`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceAngleTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                          |
| [`MinimumDistanceValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                |
| [`ToleranceValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                              |
| [`CylindricalFaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                            |
| [`Priority`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Priority)                                               | Gets or sets the Priority.                                    |
| [`GroupBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                     |
| [`SearchAcross`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                |
| [`ToleranceType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                               |
| [`EdgeEdge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                    |
| [`FaceEdge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                    |
| [`AutomaticFixedJoints`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                        |
| [`RevoluteJoints`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                              |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`FaceFace`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.FaceFace)                                               | Gets or sets the FaceFace.                                    |
| [`UseRange`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.UseRange)                                               | Gets or sets the UseRange.                                    |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Location)                                               | Gets or sets the Location.                                    |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Children)                                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Comments)                                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Figures)                                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Images)                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#id0)                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.Properties)                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnectionGroup.md#MeshConnectionGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshConnectionGroup.InternalObject"></a>

### *property* MeshConnectionGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.DataModelObjectCategory"></a>

### *property* MeshConnectionGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ConnectionType"></a>

### *property* MeshConnectionGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ActiveConnections"></a>

### *property* MeshConnectionGroup.ActiveConnections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Connections"></a>

### *property* MeshConnectionGroup.Connections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.EdgeOverlapTolerance"></a>

### *property* MeshConnectionGroup.EdgeOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceOverlapTolerance"></a>

### *property* MeshConnectionGroup.FaceOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.MinimumDistancePercentage"></a>

### *property* MeshConnectionGroup.MinimumDistancePercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ThicknessScaleFactor"></a>

### *property* MeshConnectionGroup.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ToleranceSlider"></a>

### *property* MeshConnectionGroup.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* MeshConnectionGroup.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceAngleTolerance"></a>

### *property* MeshConnectionGroup.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.MinimumDistanceValue"></a>

### *property* MeshConnectionGroup.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ToleranceValue"></a>

### *property* MeshConnectionGroup.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CylindricalFaces"></a>

### *property* MeshConnectionGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Priority"></a>

### *property* MeshConnectionGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GroupBy"></a>

### *property* MeshConnectionGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.SearchAcross"></a>

### *property* MeshConnectionGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ToleranceType"></a>

### *property* MeshConnectionGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.EdgeEdge"></a>

### *property* MeshConnectionGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceEdge"></a>

### *property* MeshConnectionGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AutomaticFixedJoints"></a>

### *property* MeshConnectionGroup.AutomaticFixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RevoluteJoints"></a>

### *property* MeshConnectionGroup.RevoluteJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Suppressed"></a>

### *property* MeshConnectionGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.FaceFace"></a>

### *property* MeshConnectionGroup.FaceFace *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.UseRange"></a>

### *property* MeshConnectionGroup.UseRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Location"></a>

### *property* MeshConnectionGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Children"></a>

### *property* MeshConnectionGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Comments"></a>

### *property* MeshConnectionGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Figures"></a>

### *property* MeshConnectionGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Images"></a>

### *property* MeshConnectionGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.ReadOnly"></a>

### *property* MeshConnectionGroup.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshConnectionGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Properties"></a>

### *property* MeshConnectionGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.VisibleProperties"></a>

### *property* MeshConnectionGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshConnectionGroup.DetectConnections"></a>

### MeshConnectionGroup.DetectConnections()

Detect mesh connections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Generate"></a>

### MeshConnectionGroup.Generate()

Generate mesh connections.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.SearchConnectionsForDuplicatePairs"></a>

### MeshConnectionGroup.SearchConnectionsForDuplicatePairs()

SearchConnectionsForDuplicatePairs method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddManualMeshConnection"></a>

### MeshConnectionGroup.AddManualMeshConnection()

Creates a new MeshConnection

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddContactRegion"></a>

### MeshConnectionGroup.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddJoint"></a>

### MeshConnectionGroup.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddSpotWeld"></a>

### MeshConnectionGroup.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddInterStage"></a>

### MeshConnectionGroup.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CreateAutomaticConnections"></a>

### MeshConnectionGroup.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.DeleteChildren"></a>

### MeshConnectionGroup.DeleteChildren()

Run the DeleteChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshConnectionGroup.DeleteChildren(b_Verify: System.Boolean)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RenameBasedOnChildren"></a>

### MeshConnectionGroup.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.SetDefaultAPDLNames"></a>

### MeshConnectionGroup.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RepairOverlappingContactRegions"></a>

### MeshConnectionGroup.RepairOverlappingContactRegions()

Run the RepairOverlappingContactRegions action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Delete"></a>

### MeshConnectionGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GetChildren"></a>

### MeshConnectionGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### MeshConnectionGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddComment"></a>

### MeshConnectionGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddFigure"></a>

### MeshConnectionGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.AddImage"></a>

### MeshConnectionGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Activate"></a>

### MeshConnectionGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CopyTo"></a>

### MeshConnectionGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.Duplicate"></a>

### MeshConnectionGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GroupAllSimilarChildren"></a>

### MeshConnectionGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GroupSimilarObjects"></a>

### MeshConnectionGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.PropertyByName"></a>

### MeshConnectionGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.PropertyByAPIName"></a>

### MeshConnectionGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.CreateParameter"></a>

### MeshConnectionGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.GetParameter"></a>

### MeshConnectionGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnectionGroup.RemoveParameter"></a>

### MeshConnectionGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

