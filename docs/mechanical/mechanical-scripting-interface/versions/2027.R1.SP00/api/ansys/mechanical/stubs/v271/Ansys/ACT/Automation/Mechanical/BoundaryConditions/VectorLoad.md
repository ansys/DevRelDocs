# `VectorLoad`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.VectorLoad"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.VectorLoad(internalObject: Any)

<a id="VectorLoad"></a>

### *class* VectorLoad(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a VectorLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#VectorLoad.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#VectorLoad.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#VectorLoad.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#VectorLoad.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#VectorLoad.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#VectorLoad.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#VectorLoad.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#VectorLoad.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#VectorLoad.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#VectorLoad.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#VectorLoad.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#VectorLoad.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#VectorLoad.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#VectorLoad.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#VectorLoad.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#VectorLoad.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#VectorLoad.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#VectorLoad.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#VectorLoad.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#VectorLoad.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#VectorLoad.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#VectorLoad.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#VectorLoad.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#VectorLoad.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#VectorLoad.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#VectorLoad.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#VectorLoad.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#VectorLoad.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#VectorLoad.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#VectorLoad.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#VectorLoad.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#VectorLoad.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#VectorLoad.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#VectorLoad.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#VectorLoad.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#VectorLoad.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#VectorLoad.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#VectorLoad.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#VectorLoad.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#VectorLoad.AttachedRefs)                                           | AttachedRefs property.                                        |
| [`Children`](#VectorLoad.Children)                                                   | Gets the list of children.                                    |
| [`ClsId`](#VectorLoad.ClsId)                                                         | ClsId property.                                               |
| [`Comments`](#VectorLoad.Comments)                                                   | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#VectorLoad.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                  |
| [`Figures`](#VectorLoad.Figures)                                                     | Gets the list of associated figures.                          |
| [`GroupingFolder`](#VectorLoad.GroupingFolder)                                       | GroupingFolder property.                                      |
| [`IconName`](#VectorLoad.IconName)                                                   | IconName property.                                            |
| [`Images`](#VectorLoad.Images)                                                       | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#VectorLoad.ImportableObjectSourceId)                   | ImportableObjectSourceId property.                            |
| [`InternalObject`](#VectorLoad.InternalObject)                                       | Gets the internal object. For advanced usage only.            |
| [`LoadUserSubroutine`](#VectorLoad.LoadUserSubroutine)                               | Gets or sets the LoadUserSubroutine.                          |
| [`MobileAppliedBy`](#VectorLoad.MobileAppliedBy)                                     | Gets or sets the MobileAppliedBy.                             |
| [`MobileBehavior`](#VectorLoad.MobileBehavior)                                       | Gets or sets the MobileBehavior.                              |
| [`MobileCoordinateSystem`](#VectorLoad.MobileCoordinateSystem)                       | Gets or sets the MobileCoordinateSystem.                      |
| [`MobileLocation`](#VectorLoad.MobileLocation)                                       | Gets or sets the MobileLocation.                              |
| [`MobileLocationX`](#VectorLoad.MobileLocationX)                                     | Gets or sets the MobileLocationX.                             |
| [`MobileLocationY`](#VectorLoad.MobileLocationY)                                     | Gets or sets the MobileLocationY.                             |
| [`MobileLocationZ`](#VectorLoad.MobileLocationZ)                                     | Gets or sets the MobileLocationZ.                             |
| [`MobileScopeLocation`](#VectorLoad.MobileScopeLocation)                             | Gets or sets the MobileScopeLocation.                         |
| [`MobileScopingMethod`](#VectorLoad.MobileScopingMethod)                             | Gets or sets the MobileScopingMethod.                         |
| [`Name`](#VectorLoad.Name)                                                           | Name property.                                                |
| [`ObjectId`](#VectorLoad.ObjectId)                                                   | ObjectId property.                                            |
| [`ObjectState`](#VectorLoad.ObjectState)                                             | ObjectState property.                                         |
| [`ObjectTags`](#VectorLoad.ObjectTags)                                               | ObjectTags property.                                          |
| [`Parent`](#VectorLoad.Parent)                                                       | Parent property.                                              |
| [`Properties`](#VectorLoad.Properties)                                               | Gets the list of properties for this object.                  |
| [`ReadOnly`](#VectorLoad.ReadOnly)                                                   | Gets or sets the ReadOnly.                                    |
| [`ReferenceBehavior`](#VectorLoad.ReferenceBehavior)                                 | Gets or sets the ReferenceBehavior.                           |
| [`ReferenceCoordinateSystem`](#VectorLoad.ReferenceCoordinateSystem)                 | Gets or sets the ReferenceCoordinateSystem.                   |
| [`ReferenceLocation`](#VectorLoad.ReferenceLocation)                                 | Gets or sets the ReferenceLocation.                           |
| [`ReferenceLocationX`](#VectorLoad.ReferenceLocationX)                               | Gets or sets the ReferenceLocationX.                          |
| [`ReferenceLocationY`](#VectorLoad.ReferenceLocationY)                               | Gets or sets the ReferenceLocationY.                          |
| [`ReferenceLocationZ`](#VectorLoad.ReferenceLocationZ)                               | Gets or sets the ReferenceLocationZ.                          |
| [`ReferenceScopeLocation`](#VectorLoad.ReferenceScopeLocation)                       | Gets or sets the ReferenceScopeLocation.                      |
| [`Scope`](#VectorLoad.Scope)                                                         | Gets or sets the Scope.                                       |
| [`SharedRefBody`](#VectorLoad.SharedRefBody)                                         | Gets or sets the SharedRefBody.                               |
| [`State`](#VectorLoad.State)                                                         | State property.                                               |
| [`Suppressed`](#VectorLoad.Suppressed)                                               | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#VectorLoad.TransferableObjectId)                           | TransferableObjectId property.                                |
| [`VectorLoadConstantFx`](#VectorLoad.VectorLoadConstantFx)                           | Gets or sets the VectorLoadConstantFx.                        |
| [`VectorLoadConstantFy`](#VectorLoad.VectorLoadConstantFy)                           | Gets or sets the VectorLoadConstantFy.                        |
| [`VectorLoadConstantFz`](#VectorLoad.VectorLoadConstantFz)                           | Gets or sets the VectorLoadConstantFz.                        |
| [`VectorLoadConstantTx`](#VectorLoad.VectorLoadConstantTx)                           | Gets or sets the VectorLoadConstantTx.                        |
| [`VectorLoadConstantTy`](#VectorLoad.VectorLoadConstantTy)                           | Gets or sets the VectorLoadConstantTy.                        |
| [`VectorLoadConstantTz`](#VectorLoad.VectorLoadConstantTz)                           | Gets or sets the VectorLoadConstantTz.                        |
| [`VectorLoadFunctionExpressionFx`](#VectorLoad.VectorLoadFunctionExpressionFx)       | Gets or sets the VectorLoadFunctionExpressionFx.              |
| [`VectorLoadFunctionExpressionFy`](#VectorLoad.VectorLoadFunctionExpressionFy)       | Gets or sets the VectorLoadFunctionExpressionFy.              |
| [`VectorLoadFunctionExpressionFz`](#VectorLoad.VectorLoadFunctionExpressionFz)       | Gets or sets the VectorLoadFunctionExpressionFz.              |
| [`VectorLoadFunctionExpressionTx`](#VectorLoad.VectorLoadFunctionExpressionTx)       | Gets or sets the VectorLoadFunctionExpressionTx.              |
| [`VectorLoadFunctionExpressionTy`](#VectorLoad.VectorLoadFunctionExpressionTy)       | Gets or sets the VectorLoadFunctionExpressionTy.              |
| [`VectorLoadFunctionExpressionTz`](#VectorLoad.VectorLoadFunctionExpressionTz)       | Gets or sets the VectorLoadFunctionExpressionTz.              |
| [`VectorLoadMagnitudeFx`](#VectorLoad.VectorLoadMagnitudeFx)                         | Gets or sets the VectorLoadMagnitudeFx.                       |
| [`VectorLoadMagnitudeFy`](#VectorLoad.VectorLoadMagnitudeFy)                         | Gets or sets the VectorLoadMagnitudeFy.                       |
| [`VectorLoadMagnitudeFz`](#VectorLoad.VectorLoadMagnitudeFz)                         | Gets or sets the VectorLoadMagnitudeFz.                       |
| [`VectorLoadMagnitudeTx`](#VectorLoad.VectorLoadMagnitudeTx)                         | Gets or sets the VectorLoadMagnitudeTx.                       |
| [`VectorLoadMagnitudeTy`](#VectorLoad.VectorLoadMagnitudeTy)                         | Gets or sets the VectorLoadMagnitudeTy.                       |
| [`VectorLoadMagnitudeTz`](#VectorLoad.VectorLoadMagnitudeTz)                         | Gets or sets the VectorLoadMagnitudeTz.                       |
| [`VectorLoadReferenceCoordinate`](#VectorLoad.VectorLoadReferenceCoordinate)         | Gets or sets the VectorLoadReferenceCoordinate.               |
| [`VectorLoadReferenceCoordinateType`](#VectorLoad.VectorLoadReferenceCoordinateType) | Gets or sets the VectorLoadReferenceCoordinateType.           |
| [`VectorLoadType`](#VectorLoad.VectorLoadType)                                       | Gets or sets the VectorLoadType.                              |
| [`VisibleProperties`](#VectorLoad.VisibleProperties)                                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="VectorLoad.AttachedRefs"></a>

### *property* VectorLoad.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Children"></a>

### *property* VectorLoad.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ClsId"></a>

### *property* VectorLoad.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Comments"></a>

### *property* VectorLoad.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.DataModelObjectCategory"></a>

### *property* VectorLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Figures"></a>

### *property* VectorLoad.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GroupingFolder"></a>

### *property* VectorLoad.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.IconName"></a>

### *property* VectorLoad.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Images"></a>

### *property* VectorLoad.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ImportableObjectSourceId"></a>

### *property* VectorLoad.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.InternalObject"></a>

### *property* VectorLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.LoadUserSubroutine"></a>

### *property* VectorLoad.LoadUserSubroutine *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadUserSubroutine.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.MobileAppliedBy"></a>

### *property* VectorLoad.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.MobileBehavior"></a>

### *property* VectorLoad.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.MobileCoordinateSystem"></a>

### *property* VectorLoad.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.MobileLocation"></a>

### *property* VectorLoad.MobileLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.MobileLocationX"></a>

### *property* VectorLoad.MobileLocationX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocationX.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.MobileLocationY"></a>

### *property* VectorLoad.MobileLocationY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocationY.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.MobileLocationZ"></a>

### *property* VectorLoad.MobileLocationZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileLocationZ.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.MobileScopeLocation"></a>

### *property* VectorLoad.MobileScopeLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.MobileScopingMethod"></a>

### *property* VectorLoad.MobileScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MobileScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Name"></a>

### *property* VectorLoad.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ObjectId"></a>

### *property* VectorLoad.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ObjectState"></a>

### *property* VectorLoad.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ObjectTags"></a>

### *property* VectorLoad.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Parent"></a>

### *property* VectorLoad.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Properties"></a>

### *property* VectorLoad.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ReadOnly"></a>

### *property* VectorLoad.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ReferenceBehavior"></a>

### *property* VectorLoad.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ReferenceCoordinateSystem"></a>

### *property* VectorLoad.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ReferenceLocation"></a>

### *property* VectorLoad.ReferenceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ReferenceLocationX"></a>

### *property* VectorLoad.ReferenceLocationX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocationX.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ReferenceLocationY"></a>

### *property* VectorLoad.ReferenceLocationY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocationY.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ReferenceLocationZ"></a>

### *property* VectorLoad.ReferenceLocationZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceLocationZ.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.ReferenceScopeLocation"></a>

### *property* VectorLoad.ReferenceScopeLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Scope"></a>

### *property* VectorLoad.Scope *: Ansys.Mechanical.DataModel.Enums.LoadScopingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.SharedRefBody"></a>

### *property* VectorLoad.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.State"></a>

### *property* VectorLoad.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Suppressed"></a>

### *property* VectorLoad.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.TransferableObjectId"></a>

### *property* VectorLoad.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadConstantFx"></a>

### *property* VectorLoad.VectorLoadConstantFx *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadConstantFx.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadConstantFy"></a>

### *property* VectorLoad.VectorLoadConstantFy *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadConstantFy.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadConstantFz"></a>

### *property* VectorLoad.VectorLoadConstantFz *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadConstantFz.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadConstantTx"></a>

### *property* VectorLoad.VectorLoadConstantTx *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadConstantTx.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadConstantTy"></a>

### *property* VectorLoad.VectorLoadConstantTy *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadConstantTy.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadConstantTz"></a>

### *property* VectorLoad.VectorLoadConstantTz *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadConstantTz.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadFunctionExpressionFx"></a>

### *property* VectorLoad.VectorLoadFunctionExpressionFx *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadFunctionExpressionFx.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadFunctionExpressionFy"></a>

### *property* VectorLoad.VectorLoadFunctionExpressionFy *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadFunctionExpressionFy.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadFunctionExpressionFz"></a>

### *property* VectorLoad.VectorLoadFunctionExpressionFz *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadFunctionExpressionFz.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadFunctionExpressionTx"></a>

### *property* VectorLoad.VectorLoadFunctionExpressionTx *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadFunctionExpressionTx.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadFunctionExpressionTy"></a>

### *property* VectorLoad.VectorLoadFunctionExpressionTy *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadFunctionExpressionTy.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadFunctionExpressionTz"></a>

### *property* VectorLoad.VectorLoadFunctionExpressionTz *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadFunctionExpressionTz.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadMagnitudeFx"></a>

### *property* VectorLoad.VectorLoadMagnitudeFx *: Ansys.Mechanical.DataModel.Enums.ForceMagnitudeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadMagnitudeFx.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadMagnitudeFy"></a>

### *property* VectorLoad.VectorLoadMagnitudeFy *: Ansys.Mechanical.DataModel.Enums.ForceMagnitudeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadMagnitudeFy.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadMagnitudeFz"></a>

### *property* VectorLoad.VectorLoadMagnitudeFz *: Ansys.Mechanical.DataModel.Enums.ForceMagnitudeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadMagnitudeFz.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadMagnitudeTx"></a>

### *property* VectorLoad.VectorLoadMagnitudeTx *: Ansys.Mechanical.DataModel.Enums.ForceMagnitudeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadMagnitudeTx.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadMagnitudeTy"></a>

### *property* VectorLoad.VectorLoadMagnitudeTy *: Ansys.Mechanical.DataModel.Enums.ForceMagnitudeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadMagnitudeTy.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadMagnitudeTz"></a>

### *property* VectorLoad.VectorLoadMagnitudeTz *: Ansys.Mechanical.DataModel.Enums.ForceMagnitudeType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadMagnitudeTz.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadReferenceCoordinate"></a>

### *property* VectorLoad.VectorLoadReferenceCoordinate *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadReferenceCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadReferenceCoordinateType"></a>

### *property* VectorLoad.VectorLoadReferenceCoordinateType *: Ansys.Mechanical.DataModel.Enums.VectorReferenceCoordinateType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadReferenceCoordinateType.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VectorLoadType"></a>

### *property* VectorLoad.VectorLoadType *: Ansys.Mechanical.DataModel.Enums.VectorLoadType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorLoadType.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.VisibleProperties"></a>

### *property* VectorLoad.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VectorLoad.Activate"></a>

### VectorLoad.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.AddComment"></a>

### VectorLoad.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.AddFigure"></a>

### VectorLoad.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.AddImage"></a>

### VectorLoad.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Copy"></a>

### VectorLoad.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.CopyTo"></a>

### VectorLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.CreateObjRef"></a>

### VectorLoad.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.CreateParameter"></a>

### VectorLoad.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Cut"></a>

### VectorLoad.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Delete"></a>

### VectorLoad.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Duplicate"></a>

### VectorLoad.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Equals"></a>

### VectorLoad.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetAPIName"></a>

### VectorLoad.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetAllProperties"></a>

### VectorLoad.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetChildren"></a>

### VectorLoad.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### VectorLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetDetailsView"></a>

### VectorLoad.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetEnumName"></a>

### VectorLoad.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetHashCode"></a>

### VectorLoad.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetIconFile"></a>

### VectorLoad.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetLifetimeService"></a>

### VectorLoad.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetObjectData"></a>

### VectorLoad.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetParameter"></a>

### VectorLoad.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetPath"></a>

### VectorLoad.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetPropertyName"></a>

### VectorLoad.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetPropertyValue"></a>

### VectorLoad.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetVisibleProperties"></a>

### VectorLoad.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GetVisiblePropertyNames"></a>

### VectorLoad.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GroupAllSimilarChildren"></a>

### VectorLoad.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.GroupSimilarObjects"></a>

### VectorLoad.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.InitializeLifetimeService"></a>

### VectorLoad.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.IsPropertyEditable"></a>

### VectorLoad.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VectorLoad.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.IsPropertyVisible"></a>

### VectorLoad.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VectorLoad.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.Paste"></a>

### VectorLoad.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.PromoteToNamedSelection"></a>

### VectorLoad.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.PropertyByAPIName"></a>

### VectorLoad.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.PropertyById"></a>

### VectorLoad.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.PropertyByName"></a>

### VectorLoad.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.RemoveFromGroup"></a>

### VectorLoad.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="VectorLoad.RemoveParameter"></a>

### VectorLoad.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

