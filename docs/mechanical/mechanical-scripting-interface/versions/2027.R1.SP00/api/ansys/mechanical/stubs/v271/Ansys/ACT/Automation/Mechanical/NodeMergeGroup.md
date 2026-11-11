# `NodeMergeGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NodeMergeGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NodeMergeGroup(internalObject: Any)

<a id="NodeMergeGroup"></a>

### *class* NodeMergeGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NodeMergeGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#NodeMergeGroup.Activate)                                                     | Activate the current object.                                                                                                       |
| [`AddComment`](#NodeMergeGroup.AddComment)                                                 | Creates a new child Comment.                                                                                                       |
| [`AddContactRegion`](#NodeMergeGroup.AddContactRegion)                                     | Creates a new child ContactRegion.                                                                                                 |
| [`AddContactRegionInternal`](#NodeMergeGroup.AddContactRegionInternal)                     | Creates a new child ContactRegion that is not visible.                                                                             |
| [`AddFigure`](#NodeMergeGroup.AddFigure)                                                   | Creates a new child Figure.                                                                                                        |
| [`AddImage`](#NodeMergeGroup.AddImage)                                                     | Creates a new child Image.                                                                                                         |
| [`AddInterStage`](#NodeMergeGroup.AddInterStage)                                           | Creates a new child InterStage.                                                                                                    |
| [`AddJoint`](#NodeMergeGroup.AddJoint)                                                     | Creates a new child Joint.                                                                                                         |
| [`AddJointInternal`](#NodeMergeGroup.AddJointInternal)                                     |                                                                                                                                    |
| [`AddNodeMerge`](#NodeMergeGroup.AddNodeMerge)                                             | Creates a new NodeMerge                                                                                                            |
| [`AddSpotWeld`](#NodeMergeGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                                                                      |
| [`AddTransducer`](#NodeMergeGroup.AddTransducer)                                           | Creates a new child Transducer.                                                                                                    |
| [`Copy`](#NodeMergeGroup.Copy)                                                             | Copies the current DataModelObject.                                                                                                |
| [`CopyTo`](#NodeMergeGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                                                                         |
| [`CreateAutomaticConnections`](#NodeMergeGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                                                                         |
| [`CreateObjRef`](#NodeMergeGroup.CreateObjRef)                                             | CreateObjRef method.                                                                                                               |
| [`CreateParameter`](#NodeMergeGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                                                                            |
| [`Cut`](#NodeMergeGroup.Cut)                                                               | Cuts the current DataModelObject.                                                                                                  |
| [`Delete`](#NodeMergeGroup.Delete)                                                         | Run the Delete action.                                                                                                             |
| [`DeleteChildren`](#NodeMergeGroup.DeleteChildren)                                         | Run the DeleteChildren action with optional verification dialog.                                                                   |
| [`Duplicate`](#NodeMergeGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                                                                     |
| [`Equals`](#NodeMergeGroup.Equals)                                                         | Equals method.                                                                                                                     |
| [`GenerateNodeMerge`](#NodeMergeGroup.GenerateNodeMerge)                                   | Generate mesh connections for the selected mesh connection objects or groups in the model.                                         |
| [`GetAPIName`](#NodeMergeGroup.GetAPIName)                                                 | Property name bound to dispId.                                                                                                     |
| [`GetAllProperties`](#NodeMergeGroup.GetAllProperties)                                     | GetAllProperties method.                                                                                                           |
| [`GetChildren`](#NodeMergeGroup.GetChildren)                                               | Gets the list of children, filtered by type.                                                                                       |
| [`GetDetailsView`](#NodeMergeGroup.GetDetailsView)                                         | GetDetailsView method.                                                                                                             |
| [`GetEnumName`](#NodeMergeGroup.GetEnumName)                                               | Enum name bound to value                                                                                                           |
| [`GetHashCode`](#NodeMergeGroup.GetHashCode)                                               | GetHashCode method.                                                                                                                |
| [`GetIconFile`](#NodeMergeGroup.GetIconFile)                                               | GetIconFile method.                                                                                                                |
| [`GetLifetimeService`](#NodeMergeGroup.GetLifetimeService)                                 | GetLifetimeService method.                                                                                                         |
| [`GetObjectData`](#NodeMergeGroup.GetObjectData)                                           | GetObjectData method.                                                                                                              |
| [`GetParameter`](#NodeMergeGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                                                                            |
| [`GetPath`](#NodeMergeGroup.GetPath)                                                       | GetPath method.                                                                                                                    |
| [`GetPropertyName`](#NodeMergeGroup.GetPropertyName)                                       | GetPropertyName method.                                                                                                            |
| [`GetPropertyValue`](#NodeMergeGroup.GetPropertyValue)                                     | GetPropertyValue method.                                                                                                           |
| [`GetTableGenerator`](#NodeMergeGroup.GetTableGenerator)                                   | GetTableGenerator method.                                                                                                          |
| [`GetVisibleProperties`](#NodeMergeGroup.GetVisibleProperties)                             | GetVisibleProperties method.                                                                                                       |
| [`GetVisiblePropertyNames`](#NodeMergeGroup.GetVisiblePropertyNames)                       | GetVisiblePropertyNames method.                                                                                                    |
| [`GroupAllSimilarChildren`](#NodeMergeGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                                                            |
| [`GroupSimilarObjects`](#NodeMergeGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                                                                |
| [`InitializeLifetimeService`](#NodeMergeGroup.InitializeLifetimeService)                   | InitializeLifetimeService method.                                                                                                  |
| [`IsPropertyEditable`](#NodeMergeGroup.IsPropertyEditable)                                 | IsPropertyEditable method.                                                                                                         |
| [`IsPropertyVisible`](#NodeMergeGroup.IsPropertyVisible)                                   | IsPropertyVisible method.                                                                                                          |
| [`Paste`](#NodeMergeGroup.Paste)                                                           | Pastes to the current DataModelObject context.                                                                                     |
| [`PropertyByAPIName`](#NodeMergeGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                                                                    |
| [`PropertyById`](#NodeMergeGroup.PropertyById)                                             | PropertyById method.                                                                                                               |
| [`PropertyByName`](#NodeMergeGroup.PropertyByName)                                         | Get a property by its unique name.                                                                                                 |
| [`RemoveFromGroup`](#NodeMergeGroup.RemoveFromGroup)                                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                        |
| [`RemoveParameter`](#NodeMergeGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.                                                  |
| [`RenameBasedOnChildren`](#NodeMergeGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                                                                 |
| [`RenameBasedOnDefinition`](#NodeMergeGroup.RenameBasedOnDefinition)                       | Run the RenameBasedOnDefinition action.                                                                                            |
| [`RepairOverlappingContactRegions`](#NodeMergeGroup.RepairOverlappingContactRegions)       | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| [`SearchConnectionsForDuplicatePairs`](#NodeMergeGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                                                                 |
| [`SetDefaultAPDLNames`](#NodeMergeGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.                                                            |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ActiveConnections`](#NodeMergeGroup.ActiveConnections)                             | Gets the ActiveConnections.                                                                                                                        |
| [`AttachedRefs`](#NodeMergeGroup.AttachedRefs)                                       | AttachedRefs property.                                                                                                                             |
| [`AutomaticFixedJoints`](#NodeMergeGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                                                                                                             |
| [`Children`](#NodeMergeGroup.Children)                                               | Gets the list of children.                                                                                                                         |
| [`ClsId`](#NodeMergeGroup.ClsId)                                                     | ClsId property.                                                                                                                                    |
| [`Comments`](#NodeMergeGroup.Comments)                                               | Gets the list of associated comments.                                                                                                              |
| [`ConnectionType`](#NodeMergeGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                                                                                                                   |
| [`Connections`](Connections/Connections.md#Connections)                              | Gets the Connections.                                                                                                                              |
| [`CylindricalFaces`](#NodeMergeGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                                                                                                                 |
| [`DataModelObjectCategory`](#NodeMergeGroup.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                                                                                                       |
| [`EdgeEdge`](#NodeMergeGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                                                                                                         |
| [`EdgeOverlapTolerance`](#NodeMergeGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                                                                                                             |
| [`FaceAngleTolerance`](#NodeMergeGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                                                                                                               |
| [`FaceEdge`](#NodeMergeGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                                                                                                         |
| [`FaceFace`](#NodeMergeGroup.FaceFace)                                               | Gets or sets the FaceFace.                                                                                                                         |
| [`FaceFaceDetectionAngleTolerence`](#NodeMergeGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.                                                                                                  |
| [`FaceOverlapTolerance`](#NodeMergeGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                                                                                                             |
| [`Figures`](#NodeMergeGroup.Figures)                                                 | Gets the list of associated figures.                                                                                                               |
| [`GroupBy`](#NodeMergeGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                                                                                                          |
| [`GroupingFolder`](#NodeMergeGroup.GroupingFolder)                                   | GroupingFolder property.                                                                                                                           |
| [`IconName`](#NodeMergeGroup.IconName)                                               | IconName property.                                                                                                                                 |
| [`Images`](#NodeMergeGroup.Images)                                                   | Gets the list of associated images.                                                                                                                |
| [`ImportableObjectSourceId`](#NodeMergeGroup.ImportableObjectSourceId)               | ImportableObjectSourceId property.                                                                                                                 |
| [`InternalObject`](#NodeMergeGroup.InternalObject)                                   | Gets the internal object. For advanced usage only.                                                                                                 |
| [`Location`](#NodeMergeGroup.Location)                                               | Gets or sets the Location.                                                                                                                         |
| [`MergeOverlappingFaces`](#NodeMergeGroup.MergeOverlappingFaces)                     | Gets or sets whether to merge multiple contacts that share overlapping faces during . This option is only applicable when GroupBy is set to Faces. |
| [`MinimumDistancePercentage`](#NodeMergeGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                                                                                                        |
| [`MinimumDistanceValue`](#NodeMergeGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                                                                                                     |
| [`Name`](#NodeMergeGroup.Name)                                                       | Name property.                                                                                                                                     |
| [`ObjectId`](#NodeMergeGroup.ObjectId)                                               | ObjectId property.                                                                                                                                 |
| [`ObjectState`](#NodeMergeGroup.ObjectState)                                         | ObjectState property.                                                                                                                              |
| [`ObjectTags`](#NodeMergeGroup.ObjectTags)                                           | ObjectTags property.                                                                                                                               |
| [`Parent`](#NodeMergeGroup.Parent)                                                   | Parent property.                                                                                                                                   |
| [`Priority`](#NodeMergeGroup.Priority)                                               | Gets or sets the Priority.                                                                                                                         |
| [`Properties`](#NodeMergeGroup.Properties)                                           | Gets the list of properties for this object.                                                                                                       |
| [`ReadOnly`](#NodeMergeGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                                                                                                         |
| [`RevoluteJoints`](#NodeMergeGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                                                                                                                   |
| [`SearchAcross`](#NodeMergeGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                                                                                                     |
| [`State`](#NodeMergeGroup.State)                                                     | State property.                                                                                                                                    |
| [`Suppressed`](#NodeMergeGroup.Suppressed)                                           | Gets or sets the Suppressed.                                                                                                                       |
| [`ThicknessScaleFactor`](#NodeMergeGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                                                                                                             |
| [`ToleranceSlider`](#NodeMergeGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                                                                                                                  |
| [`ToleranceType`](#NodeMergeGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                                                                                                                    |
| [`ToleranceValue`](#NodeMergeGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                                                                                                                   |
| [`TransferableObjectId`](#NodeMergeGroup.TransferableObjectId)                       | TransferableObjectId property.                                                                                                                     |
| [`UseRange`](#NodeMergeGroup.UseRange)                                               | Gets or sets the UseRange.                                                                                                                         |
| [`VisibleProperties`](#NodeMergeGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object.                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="NodeMergeGroup.ActiveConnections"></a>

### *property* NodeMergeGroup.ActiveConnections *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AttachedRefs"></a>

### *property* NodeMergeGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AutomaticFixedJoints"></a>

### *property* NodeMergeGroup.AutomaticFixedJoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Children"></a>

### *property* NodeMergeGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ClsId"></a>

### *property* NodeMergeGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Comments"></a>

### *property* NodeMergeGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ConnectionType"></a>

### *property* NodeMergeGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Connections"></a>

### *property* NodeMergeGroup.Connections *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CylindricalFaces"></a>

### *property* NodeMergeGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.DataModelObjectCategory"></a>

### *property* NodeMergeGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.EdgeEdge"></a>

### *property* NodeMergeGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.EdgeOverlapTolerance"></a>

### *property* NodeMergeGroup.EdgeOverlapTolerance *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceAngleTolerance"></a>

### *property* NodeMergeGroup.FaceAngleTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceEdge"></a>

### *property* NodeMergeGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceFace"></a>

### *property* NodeMergeGroup.FaceFace *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* NodeMergeGroup.FaceFaceDetectionAngleTolerence *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.FaceOverlapTolerance"></a>

### *property* NodeMergeGroup.FaceOverlapTolerance *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Figures"></a>

### *property* NodeMergeGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GroupBy"></a>

### *property* NodeMergeGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GroupingFolder"></a>

### *property* NodeMergeGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.IconName"></a>

### *property* NodeMergeGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Images"></a>

### *property* NodeMergeGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ImportableObjectSourceId"></a>

### *property* NodeMergeGroup.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.InternalObject"></a>

### *property* NodeMergeGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Location"></a>

### *property* NodeMergeGroup.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.MergeOverlappingFaces"></a>

### *property* NodeMergeGroup.MergeOverlappingFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to merge multiple contacts that share overlapping faces during . This option is only applicable when GroupBy is set to Faces.
: An exception is thrown if  is not set to

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.MinimumDistancePercentage"></a>

### *property* NodeMergeGroup.MinimumDistancePercentage *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.MinimumDistanceValue"></a>

### *property* NodeMergeGroup.MinimumDistanceValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Name"></a>

### *property* NodeMergeGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ObjectId"></a>

### *property* NodeMergeGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ObjectState"></a>

### *property* NodeMergeGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ObjectTags"></a>

### *property* NodeMergeGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Parent"></a>

### *property* NodeMergeGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Priority"></a>

### *property* NodeMergeGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Properties"></a>

### *property* NodeMergeGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ReadOnly"></a>

### *property* NodeMergeGroup.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RevoluteJoints"></a>

### *property* NodeMergeGroup.RevoluteJoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.SearchAcross"></a>

### *property* NodeMergeGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.State"></a>

### *property* NodeMergeGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Suppressed"></a>

### *property* NodeMergeGroup.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ThicknessScaleFactor"></a>

### *property* NodeMergeGroup.ThicknessScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ToleranceSlider"></a>

### *property* NodeMergeGroup.ToleranceSlider *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ToleranceType"></a>

### *property* NodeMergeGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.ToleranceValue"></a>

### *property* NodeMergeGroup.ToleranceValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.TransferableObjectId"></a>

### *property* NodeMergeGroup.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.UseRange"></a>

### *property* NodeMergeGroup.UseRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.VisibleProperties"></a>

### *property* NodeMergeGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodeMergeGroup.Activate"></a>

### NodeMergeGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddComment"></a>

### NodeMergeGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddContactRegion"></a>

### NodeMergeGroup.AddContactRegion() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddContactRegionInternal"></a>

### NodeMergeGroup.AddContactRegionInternal() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child ContactRegion that is not visible.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddFigure"></a>

### NodeMergeGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddImage"></a>

### NodeMergeGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddInterStage"></a>

### NodeMergeGroup.AddInterStage() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddJoint"></a>

### NodeMergeGroup.AddJoint() → [Ansys.ACT.Automation.Mechanical.Connections.Joint](Connections/Joint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Joint)

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddJointInternal"></a>

### NodeMergeGroup.AddJointInternal() → [Ansys.ACT.Automation.Mechanical.Connections.Joint](Connections/Joint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Joint)

<a id="NodeMergeGroup.AddNodeMerge"></a>

### NodeMergeGroup.AddNodeMerge() → [Ansys.ACT.Automation.Mechanical.NodeMerge](NodeMerge.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NodeMerge)

Creates a new NodeMerge

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddSpotWeld"></a>

### NodeMergeGroup.AddSpotWeld() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.AddTransducer"></a>

### NodeMergeGroup.AddTransducer() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child Transducer.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Copy"></a>

### NodeMergeGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CopyTo"></a>

### NodeMergeGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CreateAutomaticConnections"></a>

### NodeMergeGroup.CreateAutomaticConnections() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CreateObjRef"></a>

### NodeMergeGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.CreateParameter"></a>

### NodeMergeGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Cut"></a>

### NodeMergeGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Delete"></a>

### NodeMergeGroup.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.DeleteChildren"></a>

### NodeMergeGroup.DeleteChildren(verificationDialog: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Duplicate"></a>

### NodeMergeGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Equals"></a>

### NodeMergeGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GenerateNodeMerge"></a>

### NodeMergeGroup.GenerateNodeMerge() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate mesh connections for the selected mesh connection objects or groups in the model.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetAPIName"></a>

### NodeMergeGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetAllProperties"></a>

### NodeMergeGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetChildren"></a>

### NodeMergeGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NodeMergeGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetDetailsView"></a>

### NodeMergeGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetEnumName"></a>

### NodeMergeGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetHashCode"></a>

### NodeMergeGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetIconFile"></a>

### NodeMergeGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetLifetimeService"></a>

### NodeMergeGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetObjectData"></a>

### NodeMergeGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetParameter"></a>

### NodeMergeGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetPath"></a>

### NodeMergeGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetPropertyName"></a>

### NodeMergeGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetPropertyValue"></a>

### NodeMergeGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetTableGenerator"></a>

### NodeMergeGroup.GetTableGenerator() → Ansys.ACT.Automation.Mechanical.Connections.ConnectionsTableGenerator

GetTableGenerator method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetVisibleProperties"></a>

### NodeMergeGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GetVisiblePropertyNames"></a>

### NodeMergeGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GroupAllSimilarChildren"></a>

### NodeMergeGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.GroupSimilarObjects"></a>

### NodeMergeGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.InitializeLifetimeService"></a>

### NodeMergeGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.IsPropertyEditable"></a>

### NodeMergeGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodeMergeGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.IsPropertyVisible"></a>

### NodeMergeGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodeMergeGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.Paste"></a>

### NodeMergeGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.PropertyByAPIName"></a>

### NodeMergeGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.PropertyById"></a>

### NodeMergeGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.PropertyByName"></a>

### NodeMergeGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RemoveFromGroup"></a>

### NodeMergeGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RemoveParameter"></a>

### NodeMergeGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RenameBasedOnChildren"></a>

### NodeMergeGroup.RenameBasedOnChildren() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RenameBasedOnDefinition"></a>

### NodeMergeGroup.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.RepairOverlappingContactRegions"></a>

### NodeMergeGroup.RepairOverlappingContactRegions() → [None](https://docs.python.org/3/builtins/constants.html#None)

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.SearchConnectionsForDuplicatePairs"></a>

### NodeMergeGroup.SearchConnectionsForDuplicatePairs() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMergeGroup.SetDefaultAPDLNames"></a>

### NodeMergeGroup.SetDefaultAPDLNames() → [None](https://docs.python.org/3/builtins/constants.html#None)

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

