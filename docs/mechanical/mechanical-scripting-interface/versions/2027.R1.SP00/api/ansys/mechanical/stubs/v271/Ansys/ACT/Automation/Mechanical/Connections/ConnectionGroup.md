# `ConnectionGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ConnectionGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.ConnectionGroup(internalObject: Any)

<a id="ConnectionGroup"></a>

### *class* ConnectionGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

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
| [`AddContactRegionInternal`](#ConnectionGroup.AddContactRegionInternal)                     | Creates a new child ContactRegion that is not visible.                                                                             |
| [`AddFigure`](#ConnectionGroup.AddFigure)                                                   | Creates a new child Figure.                                                                                                        |
| [`AddImage`](#ConnectionGroup.AddImage)                                                     | Creates a new child Image.                                                                                                         |
| [`AddInterStage`](#ConnectionGroup.AddInterStage)                                           | Creates a new child InterStage.                                                                                                    |
| [`AddJoint`](#ConnectionGroup.AddJoint)                                                     | Creates a new child Joint.                                                                                                         |
| [`AddJointInternal`](#ConnectionGroup.AddJointInternal)                                     |                                                                                                                                    |
| [`AddSpotWeld`](#ConnectionGroup.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                                                                      |
| [`AddTransducer`](#ConnectionGroup.AddTransducer)                                           | Creates a new child Transducer.                                                                                                    |
| [`Copy`](#ConnectionGroup.Copy)                                                             | Copies the current DataModelObject.                                                                                                |
| [`CopyTo`](#ConnectionGroup.CopyTo)                                                         | Copies all visible properties from this object to another.                                                                         |
| [`CreateAutomaticConnections`](#ConnectionGroup.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                                                                         |
| [`CreateObjRef`](#ConnectionGroup.CreateObjRef)                                             | CreateObjRef method.                                                                                                               |
| [`CreateParameter`](#ConnectionGroup.CreateParameter)                                       | Creates a new parameter for a Property.                                                                                            |
| [`Cut`](#ConnectionGroup.Cut)                                                               | Cuts the current DataModelObject.                                                                                                  |
| [`Delete`](#ConnectionGroup.Delete)                                                         | Run the Delete action.                                                                                                             |
| [`DeleteChildren`](#ConnectionGroup.DeleteChildren)                                         | Run the DeleteChildren action with optional verification dialog.                                                                   |
| [`Duplicate`](#ConnectionGroup.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                                                                     |
| [`Equals`](#ConnectionGroup.Equals)                                                         | Equals method.                                                                                                                     |
| [`GetAPIName`](#ConnectionGroup.GetAPIName)                                                 | Property name bound to dispId.                                                                                                     |
| [`GetAllProperties`](#ConnectionGroup.GetAllProperties)                                     | GetAllProperties method.                                                                                                           |
| [`GetChildren`](#ConnectionGroup.GetChildren)                                               | Gets the list of children, filtered by type.                                                                                       |
| [`GetDetailsView`](#ConnectionGroup.GetDetailsView)                                         | GetDetailsView method.                                                                                                             |
| [`GetEnumName`](#ConnectionGroup.GetEnumName)                                               | Enum name bound to value                                                                                                           |
| [`GetHashCode`](#ConnectionGroup.GetHashCode)                                               | GetHashCode method.                                                                                                                |
| [`GetIconFile`](#ConnectionGroup.GetIconFile)                                               | GetIconFile method.                                                                                                                |
| [`GetLifetimeService`](#ConnectionGroup.GetLifetimeService)                                 | GetLifetimeService method.                                                                                                         |
| [`GetObjectData`](#ConnectionGroup.GetObjectData)                                           | GetObjectData method.                                                                                                              |
| [`GetParameter`](#ConnectionGroup.GetParameter)                                             | Gets the parameter corresponding to the given property.                                                                            |
| [`GetPath`](#ConnectionGroup.GetPath)                                                       | GetPath method.                                                                                                                    |
| [`GetPropertyName`](#ConnectionGroup.GetPropertyName)                                       | GetPropertyName method.                                                                                                            |
| [`GetPropertyValue`](#ConnectionGroup.GetPropertyValue)                                     | GetPropertyValue method.                                                                                                           |
| [`GetTableGenerator`](#ConnectionGroup.GetTableGenerator)                                   | GetTableGenerator method.                                                                                                          |
| [`GetVisibleProperties`](#ConnectionGroup.GetVisibleProperties)                             | GetVisibleProperties method.                                                                                                       |
| [`GetVisiblePropertyNames`](#ConnectionGroup.GetVisiblePropertyNames)                       | GetVisiblePropertyNames method.                                                                                                    |
| [`GroupAllSimilarChildren`](#ConnectionGroup.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                                                            |
| [`GroupSimilarObjects`](#ConnectionGroup.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                                                                |
| [`InitializeLifetimeService`](#ConnectionGroup.InitializeLifetimeService)                   | InitializeLifetimeService method.                                                                                                  |
| [`IsPropertyEditable`](#ConnectionGroup.IsPropertyEditable)                                 | IsPropertyEditable method.                                                                                                         |
| [`IsPropertyVisible`](#ConnectionGroup.IsPropertyVisible)                                   | IsPropertyVisible method.                                                                                                          |
| [`Paste`](#ConnectionGroup.Paste)                                                           | Pastes to the current DataModelObject context.                                                                                     |
| [`PropertyByAPIName`](#ConnectionGroup.PropertyByAPIName)                                   | Get a property by its API name.                                                                                                    |
| [`PropertyById`](#ConnectionGroup.PropertyById)                                             | PropertyById method.                                                                                                               |
| [`PropertyByName`](#ConnectionGroup.PropertyByName)                                         | Get a property by its unique name.                                                                                                 |
| [`RemoveFromGroup`](#ConnectionGroup.RemoveFromGroup)                                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                        |
| [`RemoveParameter`](#ConnectionGroup.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.                                                  |
| [`RenameBasedOnChildren`](#ConnectionGroup.RenameBasedOnChildren)                           | Rename the Connection group based on the children.                                                                                 |
| [`RenameBasedOnDefinition`](#ConnectionGroup.RenameBasedOnDefinition)                       | Run the RenameBasedOnDefinition action.                                                                                            |
| [`RepairOverlappingContactRegions`](#ConnectionGroup.RepairOverlappingContactRegions)       | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| [`SearchConnectionsForDuplicatePairs`](#ConnectionGroup.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                                                                 |
| [`SetDefaultAPDLNames`](#ConnectionGroup.SetDefaultAPDLNames)                               | Loop over all the valid contact regions and set the default APDL names.                                                            |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ActiveConnections`](#ConnectionGroup.ActiveConnections)                             | Gets the ActiveConnections.                                                                                                                        |
| [`AttachedRefs`](#ConnectionGroup.AttachedRefs)                                       | AttachedRefs property.                                                                                                                             |
| [`AutomaticFixedJoints`](#ConnectionGroup.AutomaticFixedJoints)                       | Gets or sets the AutomaticFixedJoints.                                                                                                             |
| [`Children`](#ConnectionGroup.Children)                                               | Gets the list of children.                                                                                                                         |
| [`ClsId`](#ConnectionGroup.ClsId)                                                     | ClsId property.                                                                                                                                    |
| [`Comments`](#ConnectionGroup.Comments)                                               | Gets the list of associated comments.                                                                                                              |
| [`ConnectionType`](#ConnectionGroup.ConnectionType)                                   | Gets or sets the ConnectionType.                                                                                                                   |
| [`Connections`](Connections.md#Connections)                                           | Gets the Connections.                                                                                                                              |
| [`CylindricalFaces`](#ConnectionGroup.CylindricalFaces)                               | Gets or sets the CylindricalFaces.                                                                                                                 |
| [`DataModelObjectCategory`](#ConnectionGroup.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                                                                                                       |
| [`EdgeEdge`](#ConnectionGroup.EdgeEdge)                                               | Gets or sets the EdgeEdge.                                                                                                                         |
| [`EdgeOverlapTolerance`](#ConnectionGroup.EdgeOverlapTolerance)                       | Gets or sets the EdgeOverlapTolerance.                                                                                                             |
| [`FaceAngleTolerance`](#ConnectionGroup.FaceAngleTolerance)                           | Gets or sets the FaceAngleTolerance.                                                                                                               |
| [`FaceEdge`](#ConnectionGroup.FaceEdge)                                               | Gets or sets the FaceEdge.                                                                                                                         |
| [`FaceFace`](#ConnectionGroup.FaceFace)                                               | Gets or sets the FaceFace.                                                                                                                         |
| [`FaceFaceDetectionAngleTolerence`](#ConnectionGroup.FaceFaceDetectionAngleTolerence) | Gets or sets the FaceFaceDetectionAngleTolerence.                                                                                                  |
| [`FaceOverlapTolerance`](#ConnectionGroup.FaceOverlapTolerance)                       | Gets or sets the FaceOverlapTolerance.                                                                                                             |
| [`Figures`](#ConnectionGroup.Figures)                                                 | Gets the list of associated figures.                                                                                                               |
| [`GroupBy`](#ConnectionGroup.GroupBy)                                                 | Gets or sets the GroupBy.                                                                                                                          |
| [`GroupingFolder`](#ConnectionGroup.GroupingFolder)                                   | GroupingFolder property.                                                                                                                           |
| [`IconName`](#ConnectionGroup.IconName)                                               | IconName property.                                                                                                                                 |
| [`Images`](#ConnectionGroup.Images)                                                   | Gets the list of associated images.                                                                                                                |
| [`ImportableObjectSourceId`](#ConnectionGroup.ImportableObjectSourceId)               | ImportableObjectSourceId property.                                                                                                                 |
| [`InternalObject`](#ConnectionGroup.InternalObject)                                   | Gets the internal object. For advanced usage only.                                                                                                 |
| [`Location`](#ConnectionGroup.Location)                                               | Gets or sets the Location.                                                                                                                         |
| [`MergeOverlappingFaces`](#ConnectionGroup.MergeOverlappingFaces)                     | Gets or sets whether to merge multiple contacts that share overlapping faces during . This option is only applicable when GroupBy is set to Faces. |
| [`MinimumDistancePercentage`](#ConnectionGroup.MinimumDistancePercentage)             | Gets or sets the MinimumDistancePercentage.                                                                                                        |
| [`MinimumDistanceValue`](#ConnectionGroup.MinimumDistanceValue)                       | Gets the MinimumDistanceValue.                                                                                                                     |
| [`Name`](#ConnectionGroup.Name)                                                       | Name property.                                                                                                                                     |
| [`ObjectId`](#ConnectionGroup.ObjectId)                                               | ObjectId property.                                                                                                                                 |
| [`ObjectState`](#ConnectionGroup.ObjectState)                                         | ObjectState property.                                                                                                                              |
| [`ObjectTags`](#ConnectionGroup.ObjectTags)                                           | ObjectTags property.                                                                                                                               |
| [`Parent`](#ConnectionGroup.Parent)                                                   | Parent property.                                                                                                                                   |
| [`Priority`](#ConnectionGroup.Priority)                                               | Gets or sets the Priority.                                                                                                                         |
| [`Properties`](#ConnectionGroup.Properties)                                           | Gets the list of properties for this object.                                                                                                       |
| [`ReadOnly`](#ConnectionGroup.ReadOnly)                                               | Gets or sets the ReadOnly.                                                                                                                         |
| [`RevoluteJoints`](#ConnectionGroup.RevoluteJoints)                                   | Gets or sets the RevoluteJoints.                                                                                                                   |
| [`SearchAcross`](#ConnectionGroup.SearchAcross)                                       | Gets or sets the SearchAcross.                                                                                                                     |
| [`State`](#ConnectionGroup.State)                                                     | State property.                                                                                                                                    |
| [`Suppressed`](#ConnectionGroup.Suppressed)                                           | Gets or sets the Suppressed.                                                                                                                       |
| [`ThicknessScaleFactor`](#ConnectionGroup.ThicknessScaleFactor)                       | Gets or sets the ThicknessScaleFactor.                                                                                                             |
| [`ToleranceSlider`](#ConnectionGroup.ToleranceSlider)                                 | Gets or sets the ToleranceSlider.                                                                                                                  |
| [`ToleranceType`](#ConnectionGroup.ToleranceType)                                     | Gets or sets the ToleranceType.                                                                                                                    |
| [`ToleranceValue`](#ConnectionGroup.ToleranceValue)                                   | Gets or sets the ToleranceValue.                                                                                                                   |
| [`TransferableObjectId`](#ConnectionGroup.TransferableObjectId)                       | TransferableObjectId property.                                                                                                                     |
| [`UseRange`](#ConnectionGroup.UseRange)                                               | Gets or sets the UseRange.                                                                                                                         |
| [`VisibleProperties`](#ConnectionGroup.VisibleProperties)                             | Gets the list of properties that are visible for this object.                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="ConnectionGroup.ActiveConnections"></a>

### *property* ConnectionGroup.ActiveConnections *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AttachedRefs"></a>

### *property* ConnectionGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AutomaticFixedJoints"></a>

### *property* ConnectionGroup.AutomaticFixedJoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Children"></a>

### *property* ConnectionGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ClsId"></a>

### *property* ConnectionGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Comments"></a>

### *property* ConnectionGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ConnectionType"></a>

### *property* ConnectionGroup.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../../Mechanical/DataModel/Enums/AutoDetectionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutoDetectionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Connections"></a>

### *property* ConnectionGroup.Connections *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CylindricalFaces"></a>

### *property* ConnectionGroup.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.DataModelObjectCategory"></a>

### *property* ConnectionGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.EdgeEdge"></a>

### *property* ConnectionGroup.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.EdgeOverlapTolerance"></a>

### *property* ConnectionGroup.EdgeOverlapTolerance *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceAngleTolerance"></a>

### *property* ConnectionGroup.FaceAngleTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceEdge"></a>

### *property* ConnectionGroup.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceFace"></a>

### *property* ConnectionGroup.FaceFace *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceFaceDetectionAngleTolerence"></a>

### *property* ConnectionGroup.FaceFaceDetectionAngleTolerence *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.FaceOverlapTolerance"></a>

### *property* ConnectionGroup.FaceOverlapTolerance *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Figures"></a>

### *property* ConnectionGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupBy"></a>

### *property* ConnectionGroup.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactGroupingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupingFolder"></a>

### *property* ConnectionGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.IconName"></a>

### *property* ConnectionGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Images"></a>

### *property* ConnectionGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ImportableObjectSourceId"></a>

### *property* ConnectionGroup.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.InternalObject"></a>

### *property* ConnectionGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Location"></a>

### *property* ConnectionGroup.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.MergeOverlappingFaces"></a>

### *property* ConnectionGroup.MergeOverlappingFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to merge multiple contacts that share overlapping faces during . This option is only applicable when GroupBy is set to Faces.
: An exception is thrown if  is not set to

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.MinimumDistancePercentage"></a>

### *property* ConnectionGroup.MinimumDistancePercentage *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.MinimumDistanceValue"></a>

### *property* ConnectionGroup.MinimumDistanceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Name"></a>

### *property* ConnectionGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ObjectId"></a>

### *property* ConnectionGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ObjectState"></a>

### *property* ConnectionGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ObjectTags"></a>

### *property* ConnectionGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Parent"></a>

### *property* ConnectionGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Priority"></a>

### *property* ConnectionGroup.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Properties"></a>

### *property* ConnectionGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ReadOnly"></a>

### *property* ConnectionGroup.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RevoluteJoints"></a>

### *property* ConnectionGroup.RevoluteJoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.SearchAcross"></a>

### *property* ConnectionGroup.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactSearchingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.State"></a>

### *property* ConnectionGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Suppressed"></a>

### *property* ConnectionGroup.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ThicknessScaleFactor"></a>

### *property* ConnectionGroup.ThicknessScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ToleranceSlider"></a>

### *property* ConnectionGroup.ToleranceSlider *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ToleranceType"></a>

### *property* ConnectionGroup.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.ToleranceValue"></a>

### *property* ConnectionGroup.ToleranceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.TransferableObjectId"></a>

### *property* ConnectionGroup.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.UseRange"></a>

### *property* ConnectionGroup.UseRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.VisibleProperties"></a>

### *property* ConnectionGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConnectionGroup.Activate"></a>

### ConnectionGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddComment"></a>

### ConnectionGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddContactRegion"></a>

### ConnectionGroup.AddContactRegion() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddContactRegionInternal"></a>

### ConnectionGroup.AddContactRegionInternal() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child ContactRegion that is not visible.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddFigure"></a>

### ConnectionGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddImage"></a>

### ConnectionGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddInterStage"></a>

### ConnectionGroup.AddInterStage() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddJoint"></a>

### ConnectionGroup.AddJoint() → [Ansys.ACT.Automation.Mechanical.Connections.Joint](Joint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Joint)

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddJointInternal"></a>

### ConnectionGroup.AddJointInternal() → [Ansys.ACT.Automation.Mechanical.Connections.Joint](Joint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Joint)

<a id="ConnectionGroup.AddSpotWeld"></a>

### ConnectionGroup.AddSpotWeld() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.AddTransducer"></a>

### ConnectionGroup.AddTransducer() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child Transducer.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Copy"></a>

### ConnectionGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CopyTo"></a>

### ConnectionGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CreateAutomaticConnections"></a>

### ConnectionGroup.CreateAutomaticConnections() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CreateObjRef"></a>

### ConnectionGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.CreateParameter"></a>

### ConnectionGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Cut"></a>

### ConnectionGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Delete"></a>

### ConnectionGroup.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.DeleteChildren"></a>

### ConnectionGroup.DeleteChildren(verificationDialog: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Duplicate"></a>

### ConnectionGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Equals"></a>

### ConnectionGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetAPIName"></a>

### ConnectionGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetAllProperties"></a>

### ConnectionGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetChildren"></a>

### ConnectionGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ConnectionGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetDetailsView"></a>

### ConnectionGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetEnumName"></a>

### ConnectionGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetHashCode"></a>

### ConnectionGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetIconFile"></a>

### ConnectionGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetLifetimeService"></a>

### ConnectionGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetObjectData"></a>

### ConnectionGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetParameter"></a>

### ConnectionGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetPath"></a>

### ConnectionGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetPropertyName"></a>

### ConnectionGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetPropertyValue"></a>

### ConnectionGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetTableGenerator"></a>

### ConnectionGroup.GetTableGenerator() → Ansys.ACT.Automation.Mechanical.Connections.ConnectionsTableGenerator

GetTableGenerator method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetVisibleProperties"></a>

### ConnectionGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GetVisiblePropertyNames"></a>

### ConnectionGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupAllSimilarChildren"></a>

### ConnectionGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.GroupSimilarObjects"></a>

### ConnectionGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.InitializeLifetimeService"></a>

### ConnectionGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.IsPropertyEditable"></a>

### ConnectionGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ConnectionGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.IsPropertyVisible"></a>

### ConnectionGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ConnectionGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.Paste"></a>

### ConnectionGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.PropertyByAPIName"></a>

### ConnectionGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.PropertyById"></a>

### ConnectionGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.PropertyByName"></a>

### ConnectionGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RemoveFromGroup"></a>

### ConnectionGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RemoveParameter"></a>

### ConnectionGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RenameBasedOnChildren"></a>

### ConnectionGroup.RenameBasedOnChildren() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RenameBasedOnDefinition"></a>

### ConnectionGroup.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.RepairOverlappingContactRegions"></a>

### ConnectionGroup.RepairOverlappingContactRegions() → [None](https://docs.python.org/3/builtins/constants.html#None)

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.SearchConnectionsForDuplicatePairs"></a>

### ConnectionGroup.SearchConnectionsForDuplicatePairs() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="ConnectionGroup.SetDefaultAPDLNames"></a>

### ConnectionGroup.SetDefaultAPDLNames() → [None](https://docs.python.org/3/builtins/constants.html#None)

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

