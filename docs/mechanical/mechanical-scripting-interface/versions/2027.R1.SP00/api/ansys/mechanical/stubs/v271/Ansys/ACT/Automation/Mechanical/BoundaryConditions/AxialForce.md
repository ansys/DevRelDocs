# `AxialForce`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AxialForce"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AxialForce(internalObject: Any)

<a id="AxialForce"></a>

### *class* AxialForce(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AxialForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AxialForce.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AxialForce.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AxialForce.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AxialForce.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AxialForce.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AxialForce.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AxialForce.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AxialForce.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AxialForce.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AxialForce.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AxialForce.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AxialForce.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AxialForce.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AxialForce.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AxialForce.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AxialForce.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AxialForce.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AxialForce.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AxialForce.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AxialForce.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AxialForce.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AxialForce.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AxialForce.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AxialForce.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AxialForce.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AxialForce.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AxialForce.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AxialForce.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AxialForce.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AxialForce.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AxialForce.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AxialForce.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AxialForce.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AxialForce.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AxialForce.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AxialForce.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AxialForce.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AxialForce.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AxialForce.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AppliedBy`](#AxialForce.AppliedBy)                                             | Gets or sets the AppliedBy.                                   |
| [`AttachedRefs`](#AxialForce.AttachedRefs)                                       | AttachedRefs property.                                        |
| [`AxialForceMagnitude`](#AxialForce.AxialForceMagnitude)                         | Gets or sets the AxialForceMagnitude.                         |
| [`Children`](#AxialForce.Children)                                               | Gets the list of children.                                    |
| [`ClsId`](#AxialForce.ClsId)                                                     | ClsId property.                                               |
| [`Comments`](#AxialForce.Comments)                                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AxialForce.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                  |
| [`Figures`](#AxialForce.Figures)                                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AxialForce.GroupingFolder)                                   | GroupingFolder property.                                      |
| [`IconName`](#AxialForce.IconName)                                               | IconName property.                                            |
| [`Images`](#AxialForce.Images)                                                   | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AxialForce.ImportableObjectSourceId)               | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AxialForce.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`LoadConstantValue`](#AxialForce.LoadConstantValue)                             | Gets or sets the LoadConstantValue.                           |
| [`LoadFunctionExpressionSelection`](#AxialForce.LoadFunctionExpressionSelection) | Gets or sets the LoadFunctionExpressionSelection.             |
| [`LoadUserSubroutine`](#AxialForce.LoadUserSubroutine)                           | Gets or sets the LoadUserSubroutine.                          |
| [`MobileAppliedBy`](#AxialForce.MobileAppliedBy)                                 | Gets or sets the MobileAppliedBy.                             |
| [`MobileBehavior`](#AxialForce.MobileBehavior)                                   | Gets or sets the MobileBehavior.                              |
| [`MobileCoordinateSystem`](#AxialForce.MobileCoordinateSystem)                   | Gets or sets the MobileCoordinateSystem.                      |
| [`MobileLocation`](#AxialForce.MobileLocation)                                   | Gets or sets the MobileLocation.                              |
| [`MobileLocationX`](#AxialForce.MobileLocationX)                                 | Gets or sets the MobileLocationX.                             |
| [`MobileLocationY`](#AxialForce.MobileLocationY)                                 | Gets or sets the MobileLocationY.                             |
| [`MobileLocationZ`](#AxialForce.MobileLocationZ)                                 | Gets or sets the MobileLocationZ.                             |
| [`MobileScopeLocation`](#AxialForce.MobileScopeLocation)                         | Gets or sets the MobileScopeLocation.                         |
| [`MobileScopingMethod`](#AxialForce.MobileScopingMethod)                         | Gets or sets the MobileScopingMethod.                         |
| [`Name`](#AxialForce.Name)                                                       | Name property.                                                |
| [`ObjectId`](#AxialForce.ObjectId)                                               | ObjectId property.                                            |
| [`ObjectState`](#AxialForce.ObjectState)                                         | ObjectState property.                                         |
| [`ObjectTags`](#AxialForce.ObjectTags)                                           | ObjectTags property.                                          |
| [`Parent`](#AxialForce.Parent)                                                   | Parent property.                                              |
| [`Properties`](#AxialForce.Properties)                                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AxialForce.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`ReferenceBehavior`](#AxialForce.ReferenceBehavior)                             | Gets or sets the ReferenceBehavior.                           |
| [`ReferenceCoordinateSystem`](#AxialForce.ReferenceCoordinateSystem)             | Gets or sets the ReferenceCoordinateSystem.                   |
| [`ReferenceLocation`](#AxialForce.ReferenceLocation)                             | Gets or sets the ReferenceLocation.                           |
| [`ReferenceLocationX`](#AxialForce.ReferenceLocationX)                           | Gets or sets the ReferenceLocationX.                          |
| [`ReferenceLocationY`](#AxialForce.ReferenceLocationY)                           | Gets or sets the ReferenceLocationY.                          |
| [`ReferenceLocationZ`](#AxialForce.ReferenceLocationZ)                           | Gets or sets the ReferenceLocationZ.                          |
| [`ReferenceScopeLocation`](#AxialForce.ReferenceScopeLocation)                   | Gets or sets the ReferenceScopeLocation.                      |
| [`Scope`](#AxialForce.Scope)                                                     | Gets or sets the Scope.                                       |
| [`SharedRefBody`](#AxialForce.SharedRefBody)                                     | Gets or sets the SharedRefBody.                               |
| [`State`](#AxialForce.State)                                                     | State property.                                               |
| [`Suppressed`](#AxialForce.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AxialForce.TransferableObjectId)                       | TransferableObjectId property.                                |
| [`VisibleProperties`](#AxialForce.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AxialForce.AppliedBy"></a>

### *property* AxialForce.AppliedBy *: Ansys.Mechanical.DataModel.Enums.LoadAppliedByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.AttachedRefs"></a>

### *property* AxialForce.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.AxialForceMagnitude"></a>

### *property* AxialForce.AxialForceMagnitude *: Ansys.Mechanical.DataModel.Enums.ForceMagnitudeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AxialForceMagnitude.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Children"></a>

### *property* AxialForce.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ClsId"></a>

### *property* AxialForce.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Comments"></a>

### *property* AxialForce.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.DataModelObjectCategory"></a>

### *property* AxialForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Figures"></a>

### *property* AxialForce.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GroupingFolder"></a>

### *property* AxialForce.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.IconName"></a>

### *property* AxialForce.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Images"></a>

### *property* AxialForce.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ImportableObjectSourceId"></a>

### *property* AxialForce.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.InternalObject"></a>

### *property* AxialForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.LoadConstantValue"></a>

### *property* AxialForce.LoadConstantValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadConstantValue.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.LoadFunctionExpressionSelection"></a>

### *property* AxialForce.LoadFunctionExpressionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadFunctionExpressionSelection.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.LoadUserSubroutine"></a>

### *property* AxialForce.LoadUserSubroutine *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadUserSubroutine.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.MobileAppliedBy"></a>

### *property* AxialForce.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.MobileBehavior"></a>

### *property* AxialForce.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.MobileCoordinateSystem"></a>

### *property* AxialForce.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.MobileLocation"></a>

### *property* AxialForce.MobileLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.MobileLocationX"></a>

### *property* AxialForce.MobileLocationX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocationX.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.MobileLocationY"></a>

### *property* AxialForce.MobileLocationY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocationY.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.MobileLocationZ"></a>

### *property* AxialForce.MobileLocationZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocationZ.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.MobileScopeLocation"></a>

### *property* AxialForce.MobileScopeLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.MobileScopingMethod"></a>

### *property* AxialForce.MobileScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Name"></a>

### *property* AxialForce.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ObjectId"></a>

### *property* AxialForce.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ObjectState"></a>

### *property* AxialForce.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ObjectTags"></a>

### *property* AxialForce.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Parent"></a>

### *property* AxialForce.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Properties"></a>

### *property* AxialForce.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ReadOnly"></a>

### *property* AxialForce.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ReferenceBehavior"></a>

### *property* AxialForce.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ReferenceCoordinateSystem"></a>

### *property* AxialForce.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ReferenceLocation"></a>

### *property* AxialForce.ReferenceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ReferenceLocationX"></a>

### *property* AxialForce.ReferenceLocationX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocationX.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ReferenceLocationY"></a>

### *property* AxialForce.ReferenceLocationY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocationY.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ReferenceLocationZ"></a>

### *property* AxialForce.ReferenceLocationZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocationZ.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.ReferenceScopeLocation"></a>

### *property* AxialForce.ReferenceScopeLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Scope"></a>

### *property* AxialForce.Scope *: Ansys.Mechanical.DataModel.Enums.LoadScopingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.SharedRefBody"></a>

### *property* AxialForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.State"></a>

### *property* AxialForce.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Suppressed"></a>

### *property* AxialForce.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.TransferableObjectId"></a>

### *property* AxialForce.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.VisibleProperties"></a>

### *property* AxialForce.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AxialForce.Activate"></a>

### AxialForce.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.AddComment"></a>

### AxialForce.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.AddFigure"></a>

### AxialForce.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.AddImage"></a>

### AxialForce.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Copy"></a>

### AxialForce.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.CopyTo"></a>

### AxialForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.CreateObjRef"></a>

### AxialForce.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.CreateParameter"></a>

### AxialForce.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Cut"></a>

### AxialForce.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Delete"></a>

### AxialForce.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Duplicate"></a>

### AxialForce.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Equals"></a>

### AxialForce.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetAPIName"></a>

### AxialForce.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetAllProperties"></a>

### AxialForce.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetChildren"></a>

### AxialForce.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AxialForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetDetailsView"></a>

### AxialForce.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetEnumName"></a>

### AxialForce.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetHashCode"></a>

### AxialForce.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetIconFile"></a>

### AxialForce.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetLifetimeService"></a>

### AxialForce.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetObjectData"></a>

### AxialForce.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetParameter"></a>

### AxialForce.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetPath"></a>

### AxialForce.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetPropertyName"></a>

### AxialForce.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetPropertyValue"></a>

### AxialForce.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetVisibleProperties"></a>

### AxialForce.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GetVisiblePropertyNames"></a>

### AxialForce.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GroupAllSimilarChildren"></a>

### AxialForce.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.GroupSimilarObjects"></a>

### AxialForce.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.InitializeLifetimeService"></a>

### AxialForce.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.IsPropertyEditable"></a>

### AxialForce.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AxialForce.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.IsPropertyVisible"></a>

### AxialForce.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AxialForce.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.Paste"></a>

### AxialForce.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.PromoteToNamedSelection"></a>

### AxialForce.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.PropertyByAPIName"></a>

### AxialForce.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.PropertyById"></a>

### AxialForce.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.PropertyByName"></a>

### AxialForce.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.RemoveFromGroup"></a>

### AxialForce.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AxialForce.RemoveParameter"></a>

### AxialForce.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

