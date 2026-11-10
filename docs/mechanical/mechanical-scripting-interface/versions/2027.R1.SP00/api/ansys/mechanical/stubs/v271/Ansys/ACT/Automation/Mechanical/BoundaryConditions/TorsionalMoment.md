# `TorsionalMoment`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.TorsionalMoment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.TorsionalMoment(internalObject: Any)

<a id="TorsionalMoment"></a>

### *class* TorsionalMoment(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TorsionalMoment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TorsionalMoment.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#TorsionalMoment.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#TorsionalMoment.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#TorsionalMoment.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#TorsionalMoment.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TorsionalMoment.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TorsionalMoment.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TorsionalMoment.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#TorsionalMoment.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#TorsionalMoment.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#TorsionalMoment.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#TorsionalMoment.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#TorsionalMoment.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#TorsionalMoment.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TorsionalMoment.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TorsionalMoment.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TorsionalMoment.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TorsionalMoment.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TorsionalMoment.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TorsionalMoment.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#TorsionalMoment.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TorsionalMoment.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TorsionalMoment.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TorsionalMoment.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TorsionalMoment.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#TorsionalMoment.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TorsionalMoment.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TorsionalMoment.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TorsionalMoment.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TorsionalMoment.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TorsionalMoment.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TorsionalMoment.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TorsionalMoment.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#TorsionalMoment.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#TorsionalMoment.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TorsionalMoment.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TorsionalMoment.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TorsionalMoment.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TorsionalMoment.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AppliedBy`](#TorsionalMoment.AppliedBy)                                             | Gets or sets the AppliedBy.                                   |
| [`AttachedRefs`](#TorsionalMoment.AttachedRefs)                                       | AttachedRefs property.                                        |
| [`Children`](#TorsionalMoment.Children)                                               | Gets the list of children.                                    |
| [`ClsId`](#TorsionalMoment.ClsId)                                                     | ClsId property.                                               |
| [`Comments`](#TorsionalMoment.Comments)                                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TorsionalMoment.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                  |
| [`Figures`](#TorsionalMoment.Figures)                                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#TorsionalMoment.GroupingFolder)                                   | GroupingFolder property.                                      |
| [`IconName`](#TorsionalMoment.IconName)                                               | IconName property.                                            |
| [`Images`](#TorsionalMoment.Images)                                                   | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#TorsionalMoment.ImportableObjectSourceId)               | ImportableObjectSourceId property.                            |
| [`InternalObject`](#TorsionalMoment.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`LoadConstantValue`](#TorsionalMoment.LoadConstantValue)                             | Gets or sets the LoadConstantValue.                           |
| [`LoadFunctionExpressionSelection`](#TorsionalMoment.LoadFunctionExpressionSelection) | Gets or sets the LoadFunctionExpressionSelection.             |
| [`LoadUserSubroutine`](#TorsionalMoment.LoadUserSubroutine)                           | Gets or sets the LoadUserSubroutine.                          |
| [`MobileAppliedBy`](#TorsionalMoment.MobileAppliedBy)                                 | Gets or sets the MobileAppliedBy.                             |
| [`MobileBehavior`](#TorsionalMoment.MobileBehavior)                                   | Gets or sets the MobileBehavior.                              |
| [`MobileCoordinateSystem`](#TorsionalMoment.MobileCoordinateSystem)                   | Gets or sets the MobileCoordinateSystem.                      |
| [`MobileLocation`](#TorsionalMoment.MobileLocation)                                   | Gets or sets the MobileLocation.                              |
| [`MobileLocationX`](#TorsionalMoment.MobileLocationX)                                 | Gets or sets the MobileLocationX.                             |
| [`MobileLocationY`](#TorsionalMoment.MobileLocationY)                                 | Gets or sets the MobileLocationY.                             |
| [`MobileLocationZ`](#TorsionalMoment.MobileLocationZ)                                 | Gets or sets the MobileLocationZ.                             |
| [`MobileScopeLocation`](#TorsionalMoment.MobileScopeLocation)                         | Gets or sets the MobileScopeLocation.                         |
| [`MobileScopingMethod`](#TorsionalMoment.MobileScopingMethod)                         | Gets or sets the MobileScopingMethod.                         |
| [`Name`](#TorsionalMoment.Name)                                                       | Name property.                                                |
| [`ObjectId`](#TorsionalMoment.ObjectId)                                               | ObjectId property.                                            |
| [`ObjectState`](#TorsionalMoment.ObjectState)                                         | ObjectState property.                                         |
| [`ObjectTags`](#TorsionalMoment.ObjectTags)                                           | ObjectTags property.                                          |
| [`Parent`](#TorsionalMoment.Parent)                                                   | Parent property.                                              |
| [`Properties`](#TorsionalMoment.Properties)                                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#TorsionalMoment.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`ReferenceBehavior`](#TorsionalMoment.ReferenceBehavior)                             | Gets or sets the ReferenceBehavior.                           |
| [`ReferenceCoordinateSystem`](#TorsionalMoment.ReferenceCoordinateSystem)             | Gets or sets the ReferenceCoordinateSystem.                   |
| [`ReferenceLocation`](#TorsionalMoment.ReferenceLocation)                             | Gets or sets the ReferenceLocation.                           |
| [`ReferenceLocationX`](#TorsionalMoment.ReferenceLocationX)                           | Gets or sets the ReferenceLocationX.                          |
| [`ReferenceLocationY`](#TorsionalMoment.ReferenceLocationY)                           | Gets or sets the ReferenceLocationY.                          |
| [`ReferenceLocationZ`](#TorsionalMoment.ReferenceLocationZ)                           | Gets or sets the ReferenceLocationZ.                          |
| [`ReferenceScopeLocation`](#TorsionalMoment.ReferenceScopeLocation)                   | Gets or sets the ReferenceScopeLocation.                      |
| [`Scope`](#TorsionalMoment.Scope)                                                     | Gets or sets the Scope.                                       |
| [`SharedRefBody`](#TorsionalMoment.SharedRefBody)                                     | Gets or sets the SharedRefBody.                               |
| [`State`](#TorsionalMoment.State)                                                     | State property.                                               |
| [`Suppressed`](#TorsionalMoment.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`TorsionalMomentMagnitude`](#TorsionalMoment.TorsionalMomentMagnitude)               | Gets or sets the TorsionalMomentMagnitude.                    |
| [`TransferableObjectId`](#TorsionalMoment.TransferableObjectId)                       | TransferableObjectId property.                                |
| [`VisibleProperties`](#TorsionalMoment.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TorsionalMoment.AppliedBy"></a>

### *property* TorsionalMoment.AppliedBy *: Ansys.Mechanical.DataModel.Enums.LoadAppliedByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.AttachedRefs"></a>

### *property* TorsionalMoment.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Children"></a>

### *property* TorsionalMoment.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ClsId"></a>

### *property* TorsionalMoment.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Comments"></a>

### *property* TorsionalMoment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.DataModelObjectCategory"></a>

### *property* TorsionalMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Figures"></a>

### *property* TorsionalMoment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GroupingFolder"></a>

### *property* TorsionalMoment.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.IconName"></a>

### *property* TorsionalMoment.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Images"></a>

### *property* TorsionalMoment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ImportableObjectSourceId"></a>

### *property* TorsionalMoment.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.InternalObject"></a>

### *property* TorsionalMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.LoadConstantValue"></a>

### *property* TorsionalMoment.LoadConstantValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadConstantValue.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.LoadFunctionExpressionSelection"></a>

### *property* TorsionalMoment.LoadFunctionExpressionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadFunctionExpressionSelection.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.LoadUserSubroutine"></a>

### *property* TorsionalMoment.LoadUserSubroutine *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadUserSubroutine.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.MobileAppliedBy"></a>

### *property* TorsionalMoment.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.MobileBehavior"></a>

### *property* TorsionalMoment.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.MobileCoordinateSystem"></a>

### *property* TorsionalMoment.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.MobileLocation"></a>

### *property* TorsionalMoment.MobileLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.MobileLocationX"></a>

### *property* TorsionalMoment.MobileLocationX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocationX.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.MobileLocationY"></a>

### *property* TorsionalMoment.MobileLocationY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocationY.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.MobileLocationZ"></a>

### *property* TorsionalMoment.MobileLocationZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocationZ.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.MobileScopeLocation"></a>

### *property* TorsionalMoment.MobileScopeLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.MobileScopingMethod"></a>

### *property* TorsionalMoment.MobileScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Name"></a>

### *property* TorsionalMoment.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ObjectId"></a>

### *property* TorsionalMoment.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ObjectState"></a>

### *property* TorsionalMoment.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ObjectTags"></a>

### *property* TorsionalMoment.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Parent"></a>

### *property* TorsionalMoment.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Properties"></a>

### *property* TorsionalMoment.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ReadOnly"></a>

### *property* TorsionalMoment.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ReferenceBehavior"></a>

### *property* TorsionalMoment.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ReferenceCoordinateSystem"></a>

### *property* TorsionalMoment.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ReferenceLocation"></a>

### *property* TorsionalMoment.ReferenceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ReferenceLocationX"></a>

### *property* TorsionalMoment.ReferenceLocationX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocationX.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ReferenceLocationY"></a>

### *property* TorsionalMoment.ReferenceLocationY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocationY.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ReferenceLocationZ"></a>

### *property* TorsionalMoment.ReferenceLocationZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocationZ.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.ReferenceScopeLocation"></a>

### *property* TorsionalMoment.ReferenceScopeLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Scope"></a>

### *property* TorsionalMoment.Scope *: Ansys.Mechanical.DataModel.Enums.LoadScopingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.SharedRefBody"></a>

### *property* TorsionalMoment.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.State"></a>

### *property* TorsionalMoment.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Suppressed"></a>

### *property* TorsionalMoment.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.TorsionalMomentMagnitude"></a>

### *property* TorsionalMoment.TorsionalMomentMagnitude *: Ansys.Mechanical.DataModel.Enums.ForceMagnitudeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TorsionalMomentMagnitude.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.TransferableObjectId"></a>

### *property* TorsionalMoment.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.VisibleProperties"></a>

### *property* TorsionalMoment.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TorsionalMoment.Activate"></a>

### TorsionalMoment.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.AddComment"></a>

### TorsionalMoment.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.AddFigure"></a>

### TorsionalMoment.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.AddImage"></a>

### TorsionalMoment.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Copy"></a>

### TorsionalMoment.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.CopyTo"></a>

### TorsionalMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.CreateObjRef"></a>

### TorsionalMoment.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.CreateParameter"></a>

### TorsionalMoment.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Cut"></a>

### TorsionalMoment.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Delete"></a>

### TorsionalMoment.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Duplicate"></a>

### TorsionalMoment.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Equals"></a>

### TorsionalMoment.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetAPIName"></a>

### TorsionalMoment.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetAllProperties"></a>

### TorsionalMoment.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetChildren"></a>

### TorsionalMoment.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TorsionalMoment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetDetailsView"></a>

### TorsionalMoment.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetEnumName"></a>

### TorsionalMoment.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetHashCode"></a>

### TorsionalMoment.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetIconFile"></a>

### TorsionalMoment.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetLifetimeService"></a>

### TorsionalMoment.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetObjectData"></a>

### TorsionalMoment.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetParameter"></a>

### TorsionalMoment.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetPath"></a>

### TorsionalMoment.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetPropertyName"></a>

### TorsionalMoment.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetPropertyValue"></a>

### TorsionalMoment.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetVisibleProperties"></a>

### TorsionalMoment.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GetVisiblePropertyNames"></a>

### TorsionalMoment.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GroupAllSimilarChildren"></a>

### TorsionalMoment.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.GroupSimilarObjects"></a>

### TorsionalMoment.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.InitializeLifetimeService"></a>

### TorsionalMoment.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.IsPropertyEditable"></a>

### TorsionalMoment.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TorsionalMoment.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.IsPropertyVisible"></a>

### TorsionalMoment.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TorsionalMoment.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.Paste"></a>

### TorsionalMoment.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.PromoteToNamedSelection"></a>

### TorsionalMoment.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.PropertyByAPIName"></a>

### TorsionalMoment.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.PropertyById"></a>

### TorsionalMoment.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.PropertyByName"></a>

### TorsionalMoment.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.RemoveFromGroup"></a>

### TorsionalMoment.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TorsionalMoment.RemoveParameter"></a>

### TorsionalMoment.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

