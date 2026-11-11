# `Bearing`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Bearing"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.Bearing(internalObject: Any)

<a id="Bearing"></a>

### *class* Bearing(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Bearing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Bearing.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#Bearing.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#Bearing.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Bearing.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Bearing.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Bearing.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Bearing.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Bearing.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Bearing.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Bearing.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Bearing.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Bearing.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Bearing.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Bearing.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Bearing.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Bearing.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Bearing.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Bearing.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Bearing.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Bearing.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Bearing.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Bearing.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Bearing.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Bearing.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Bearing.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Bearing.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Bearing.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Bearing.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Bearing.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Bearing.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Bearing.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Bearing.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Bearing.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Bearing.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#Bearing.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PromoteToRemotePoint`](#Bearing.PromoteToRemotePoint)           | Run the PromoteToRemotePoint action.                                                        |
| [`PropertyByAPIName`](#Bearing.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Bearing.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Bearing.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Bearing.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Bearing.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#Bearing.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AnsBCType`](#Bearing.AnsBCType)                                                     | Gets the AnsBCType.                                                                                                                                                                                                                          |
| [`AttachedRefs`](#Bearing.AttachedRefs)                                               | AttachedRefs property.                                                                                                                                                                                                                       |
| [`Children`](#Bearing.Children)                                                       | Gets the list of children.                                                                                                                                                                                                                   |
| [`ClsId`](#Bearing.ClsId)                                                             | ClsId property.                                                                                                                                                                                                                              |
| [`Comments`](#Bearing.Comments)                                                       | Gets the list of associated comments.                                                                                                                                                                                                        |
| [`ConnectionType`](#Bearing.ConnectionType)                                           | Gets or sets the ConnectionType.                                                                                                                                                                                                             |
| [`DampingC11`](#Bearing.DampingC11)                                                   | Gets the DampingC11.                                                                                                                                                                                                                         |
| [`DampingC12`](#Bearing.DampingC12)                                                   | Gets the DampingC12.                                                                                                                                                                                                                         |
| [`DampingC21`](#Bearing.DampingC21)                                                   | Gets the DampingC21.                                                                                                                                                                                                                         |
| [`DampingC22`](#Bearing.DampingC22)                                                   | Gets the DampingC22.                                                                                                                                                                                                                         |
| [`DataModelObjectCategory`](#Bearing.DataModelObjectCategory)                         | Gets the current DataModelObject's category.                                                                                                                                                                                                 |
| [`Figures`](#Bearing.Figures)                                                         | Gets the list of associated figures.                                                                                                                                                                                                         |
| [`GroupingFolder`](#Bearing.GroupingFolder)                                           | GroupingFolder property.                                                                                                                                                                                                                     |
| [`IconName`](#Bearing.IconName)                                                       | IconName property.                                                                                                                                                                                                                           |
| [`Images`](#Bearing.Images)                                                           | Gets the list of associated images.                                                                                                                                                                                                          |
| [`ImportableObjectSourceId`](#Bearing.ImportableObjectSourceId)                       | ImportableObjectSourceId property.                                                                                                                                                                                                           |
| [`InternalObject`](#Bearing.InternalObject)                                           | Gets the internal object. For advanced usage only.                                                                                                                                                                                           |
| [`MobileBeamCoincidentLengthFactor`](#Bearing.MobileBeamCoincidentLengthFactor)       | Gets or sets the Coincident Length Factor on mobile side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.    |
| [`MobileBeamMaterial`](#Bearing.MobileBeamMaterial)                                   | Gets or sets the MobileBeamMaterial.                                                                                                                                                                                                         |
| [`MobileBeamRadius`](#Bearing.MobileBeamRadius)                                       | Gets or sets the MobileBeamRadius.                                                                                                                                                                                                           |
| [`MobileBehavior`](#Bearing.MobileBehavior)                                           | Gets or sets the MobileBehavior.                                                                                                                                                                                                             |
| [`MobileBody`](#Bearing.MobileBody)                                                   | Gets the MobileBody.                                                                                                                                                                                                                         |
| [`MobileCoordinateSystem`](#Bearing.MobileCoordinateSystem)                           | Gets or sets the MobileCoordinateSystem.                                                                                                                                                                                                     |
| [`MobileLocation`](#Bearing.MobileLocation)                                           | Gets or sets the MobileLocation.                                                                                                                                                                                                             |
| [`MobilePinballSize`](#Bearing.MobilePinballSize)                                     | Gets or sets the MobilePinballSize.                                                                                                                                                                                                          |
| [`MobileXCoordinate`](#Bearing.MobileXCoordinate)                                     | Gets or sets the MobileXCoordinate.                                                                                                                                                                                                          |
| [`MobileYCoordinate`](#Bearing.MobileYCoordinate)                                     | Gets or sets the MobileYCoordinate.                                                                                                                                                                                                          |
| [`MobileZCoordinate`](#Bearing.MobileZCoordinate)                                     | Gets or sets the MobileZCoordinate.                                                                                                                                                                                                          |
| [`Name`](#Bearing.Name)                                                               | Name property.                                                                                                                                                                                                                               |
| [`ObjectId`](#Bearing.ObjectId)                                                       | ObjectId property.                                                                                                                                                                                                                           |
| [`ObjectState`](#Bearing.ObjectState)                                                 | ObjectState property.                                                                                                                                                                                                                        |
| [`ObjectTags`](#Bearing.ObjectTags)                                                   | ObjectTags property.                                                                                                                                                                                                                         |
| [`Parent`](#Bearing.Parent)                                                           | Parent property.                                                                                                                                                                                                                             |
| [`Properties`](#Bearing.Properties)                                                   | Gets the list of properties for this object.                                                                                                                                                                                                 |
| [`ReadOnly`](#Bearing.ReadOnly)                                                       | Gets or sets the ReadOnly.                                                                                                                                                                                                                   |
| [`ReferenceBeamCoincidentLengthFactor`](#Bearing.ReferenceBeamCoincidentLengthFactor) | Gets or sets the Coincident Length Factor on reference side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1. |
| [`ReferenceBeamMaterial`](#Bearing.ReferenceBeamMaterial)                             | Gets or sets the ReferenceBeamMaterial.                                                                                                                                                                                                      |
| [`ReferenceBeamRadius`](#Bearing.ReferenceBeamRadius)                                 | Gets or sets the ReferenceBeamRadius.                                                                                                                                                                                                        |
| [`ReferenceBehavior`](#Bearing.ReferenceBehavior)                                     | Gets or sets the ReferenceBehavior.                                                                                                                                                                                                          |
| [`ReferenceBodyName`](#Bearing.ReferenceBodyName)                                     | Gets the ReferenceBodyName.                                                                                                                                                                                                                  |
| [`ReferenceCoordinateSystem`](#Bearing.ReferenceCoordinateSystem)                     | Gets or sets the ReferenceCoordinateSystem.                                                                                                                                                                                                  |
| [`ReferenceLocation`](#Bearing.ReferenceLocation)                                     | Gets or sets the ReferenceLocation.                                                                                                                                                                                                          |
| [`ReferencePinballRegion`](#Bearing.ReferencePinballRegion)                           | Gets or sets the ReferencePinballRegion.                                                                                                                                                                                                     |
| [`ReferenceRotationPlane`](#Bearing.ReferenceRotationPlane)                           | Gets or sets the ReferenceRotationPlane.                                                                                                                                                                                                     |
| [`ReferenceSet`](#Bearing.ReferenceSet)                                               | Gets the ReferenceSet.                                                                                                                                                                                                                       |
| [`ReferenceXCoordinate`](#Bearing.ReferenceXCoordinate)                               | Gets or sets the ReferenceXCoordinate.                                                                                                                                                                                                       |
| [`ReferenceYCoordinate`](#Bearing.ReferenceYCoordinate)                               | Gets or sets the ReferenceYCoordinate.                                                                                                                                                                                                       |
| [`ReferenceZCoordinate`](#Bearing.ReferenceZCoordinate)                               | Gets or sets the ReferenceZCoordinate.                                                                                                                                                                                                       |
| [`State`](#Bearing.State)                                                             | State property.                                                                                                                                                                                                                              |
| [`StiffnessK11`](#Bearing.StiffnessK11)                                               | Gets the StiffnessK11.                                                                                                                                                                                                                       |
| [`StiffnessK12`](#Bearing.StiffnessK12)                                               | Gets the StiffnessK12.                                                                                                                                                                                                                       |
| [`StiffnessK21`](#Bearing.StiffnessK21)                                               | Gets the StiffnessK21.                                                                                                                                                                                                                       |
| [`StiffnessK22`](#Bearing.StiffnessK22)                                               | Gets the StiffnessK22.                                                                                                                                                                                                                       |
| [`Suppressed`](#Bearing.Suppressed)                                                   | Gets or sets the Suppressed.                                                                                                                                                                                                                 |
| [`TransferableObjectId`](#Bearing.TransferableObjectId)                               | TransferableObjectId property.                                                                                                                                                                                                               |
| [`VisibleProperties`](#Bearing.VisibleProperties)                                     | Gets the list of properties that are visible for this object.                                                                                                                                                                                |

<a id="property-detail"></a>

## Property detail

<a id="Bearing.AnsBCType"></a>

### *property* Bearing.AnsBCType *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AnsBCType.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AttachedRefs"></a>

### *property* Bearing.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Children"></a>

### *property* Bearing.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ClsId"></a>

### *property* Bearing.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Comments"></a>

### *property* Bearing.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ConnectionType"></a>

### *property* Bearing.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.ConnectionScopingType](../../../../Mechanical/DataModel/Enums/ConnectionScopingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ConnectionScopingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC11"></a>

### *property* Bearing.DampingC11 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampingC11.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC12"></a>

### *property* Bearing.DampingC12 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampingC12.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC21"></a>

### *property* Bearing.DampingC21 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampingC21.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC22"></a>

### *property* Bearing.DampingC22 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampingC22.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DataModelObjectCategory"></a>

### *property* Bearing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Figures"></a>

### *property* Bearing.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GroupingFolder"></a>

### *property* Bearing.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.IconName"></a>

### *property* Bearing.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Images"></a>

### *property* Bearing.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ImportableObjectSourceId"></a>

### *property* Bearing.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.InternalObject"></a>

### *property* Bearing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBearingAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBeamCoincidentLengthFactor"></a>

### *property* Bearing.MobileBeamCoincidentLengthFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coincident Length Factor on mobile side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBeamMaterial"></a>

### *property* Bearing.MobileBeamMaterial *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBeamRadius"></a>

### *property* Bearing.MobileBeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBehavior"></a>

### *property* Bearing.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBody"></a>

### *property* Bearing.MobileBody *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileCoordinateSystem"></a>

### *property* Bearing.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileLocation"></a>

### *property* Bearing.MobileLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobilePinballSize"></a>

### *property* Bearing.MobilePinballSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobilePinballSize.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileXCoordinate"></a>

### *property* Bearing.MobileXCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileYCoordinate"></a>

### *property* Bearing.MobileYCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileZCoordinate"></a>

### *property* Bearing.MobileZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Name"></a>

### *property* Bearing.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ObjectId"></a>

### *property* Bearing.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ObjectState"></a>

### *property* Bearing.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ObjectTags"></a>

### *property* Bearing.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Parent"></a>

### *property* Bearing.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Properties"></a>

### *property* Bearing.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReadOnly"></a>

### *property* Bearing.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBeamCoincidentLengthFactor"></a>

### *property* Bearing.ReferenceBeamCoincidentLengthFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coincident Length Factor on reference side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBeamMaterial"></a>

### *property* Bearing.ReferenceBeamMaterial *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBeamRadius"></a>

### *property* Bearing.ReferenceBeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBehavior"></a>

### *property* Bearing.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBodyName"></a>

### *property* Bearing.ReferenceBodyName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReferenceBodyName.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceCoordinateSystem"></a>

### *property* Bearing.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceLocation"></a>

### *property* Bearing.ReferenceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferencePinballRegion"></a>

### *property* Bearing.ReferencePinballRegion *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceRotationPlane"></a>

### *property* Bearing.ReferenceRotationPlane *: [Ansys.Mechanical.DataModel.Enums.RotationPlane](../../../../Mechanical/DataModel/Enums/RotationPlane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RotationPlane) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceRotationPlane.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceSet"></a>

### *property* Bearing.ReferenceSet *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReferenceSet.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceXCoordinate"></a>

### *property* Bearing.ReferenceXCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceYCoordinate"></a>

### *property* Bearing.ReferenceYCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceZCoordinate"></a>

### *property* Bearing.ReferenceZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.State"></a>

### *property* Bearing.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK11"></a>

### *property* Bearing.StiffnessK11 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StiffnessK11.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK12"></a>

### *property* Bearing.StiffnessK12 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StiffnessK12.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK21"></a>

### *property* Bearing.StiffnessK21 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StiffnessK21.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK22"></a>

### *property* Bearing.StiffnessK22 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StiffnessK22.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Suppressed"></a>

### *property* Bearing.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.TransferableObjectId"></a>

### *property* Bearing.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.VisibleProperties"></a>

### *property* Bearing.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Bearing.Activate"></a>

### Bearing.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddCommandSnippet"></a>

### Bearing.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddComment"></a>

### Bearing.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddFigure"></a>

### Bearing.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddImage"></a>

### Bearing.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Copy"></a>

### Bearing.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.CopyTo"></a>

### Bearing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.CreateObjRef"></a>

### Bearing.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.CreateParameter"></a>

### Bearing.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Cut"></a>

### Bearing.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Delete"></a>

### Bearing.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Duplicate"></a>

### Bearing.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Equals"></a>

### Bearing.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetAPIName"></a>

### Bearing.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetAllProperties"></a>

### Bearing.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetChildren"></a>

### Bearing.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Bearing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetDetailsView"></a>

### Bearing.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetEnumName"></a>

### Bearing.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetHashCode"></a>

### Bearing.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetIconFile"></a>

### Bearing.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetLifetimeService"></a>

### Bearing.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetObjectData"></a>

### Bearing.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetParameter"></a>

### Bearing.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetPath"></a>

### Bearing.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetPropertyName"></a>

### Bearing.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetPropertyValue"></a>

### Bearing.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetVisibleProperties"></a>

### Bearing.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetVisiblePropertyNames"></a>

### Bearing.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GroupAllSimilarChildren"></a>

### Bearing.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GroupSimilarObjects"></a>

### Bearing.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.InitializeLifetimeService"></a>

### Bearing.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.IsPropertyEditable"></a>

### Bearing.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Bearing.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.IsPropertyVisible"></a>

### Bearing.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Bearing.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Paste"></a>

### Bearing.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PromoteToNamedSelection"></a>

### Bearing.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PromoteToRemotePoint"></a>

### Bearing.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PropertyByAPIName"></a>

### Bearing.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PropertyById"></a>

### Bearing.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PropertyByName"></a>

### Bearing.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.RemoveFromGroup"></a>

### Bearing.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.RemoveParameter"></a>

### Bearing.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.RenameBasedOnDefinition"></a>

### Bearing.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

