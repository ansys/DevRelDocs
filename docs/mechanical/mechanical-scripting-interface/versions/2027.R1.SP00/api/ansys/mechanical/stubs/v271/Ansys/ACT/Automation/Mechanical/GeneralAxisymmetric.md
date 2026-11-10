# `GeneralAxisymmetric`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GeneralAxisymmetric"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GeneralAxisymmetric(internalObject: Any)

<a id="GeneralAxisymmetric"></a>

### *class* GeneralAxisymmetric(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GeneralAxisymmetric.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GeneralAxisymmetric.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#GeneralAxisymmetric.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#GeneralAxisymmetric.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#GeneralAxisymmetric.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#GeneralAxisymmetric.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GeneralAxisymmetric.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GeneralAxisymmetric.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GeneralAxisymmetric.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GeneralAxisymmetric.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#GeneralAxisymmetric.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#GeneralAxisymmetric.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GeneralAxisymmetric.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#GeneralAxisymmetric.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GeneralAxisymmetric.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#GeneralAxisymmetric.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GeneralAxisymmetric.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GeneralAxisymmetric.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#GeneralAxisymmetric.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#GeneralAxisymmetric.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GeneralAxisymmetric.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GeneralAxisymmetric.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#GeneralAxisymmetric.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GeneralAxisymmetric.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#GeneralAxisymmetric.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GeneralAxisymmetric.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#GeneralAxisymmetric.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GeneralAxisymmetric.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GeneralAxisymmetric.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GeneralAxisymmetric.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#GeneralAxisymmetric.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GeneralAxisymmetric.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GeneralAxisymmetric.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#GeneralAxisymmetric.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#GeneralAxisymmetric.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#GeneralAxisymmetric.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#GeneralAxisymmetric.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GeneralAxisymmetric.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GeneralAxisymmetric.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#GeneralAxisymmetric.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Axis`](#GeneralAxisymmetric.Axis)                                         | Gets or sets the Axis.                                        |
| [`Children`](#GeneralAxisymmetric.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#GeneralAxisymmetric.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#GeneralAxisymmetric.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                  | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#GeneralAxisymmetric.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`EndPlane`](#GeneralAxisymmetric.EndPlane)                                 | Gets or sets the EndPlane.                                    |
| [`Figures`](#GeneralAxisymmetric.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#GeneralAxisymmetric.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#GeneralAxisymmetric.IconName)                                 | IconName property.                                            |
| [`Images`](#GeneralAxisymmetric.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#GeneralAxisymmetric.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#GeneralAxisymmetric.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#GeneralAxisymmetric.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#GeneralAxisymmetric.Name)                                         | Name property.                                                |
| [`NodalPlanes`](#GeneralAxisymmetric.NodalPlanes)                           | Gets or sets the NodalPlanes.                                 |
| [`NodalPlanesVisible`](#GeneralAxisymmetric.NodalPlanesVisible)             | Gets or sets the NodalPlanesVisible.                          |
| [`ObjectId`](#GeneralAxisymmetric.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#GeneralAxisymmetric.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#GeneralAxisymmetric.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#GeneralAxisymmetric.Parent)                                     | Parent property.                                              |
| [`Properties`](#GeneralAxisymmetric.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GeneralAxisymmetric.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`StartPlane`](#GeneralAxisymmetric.StartPlane)                             | Gets or sets the StartPlane.                                  |
| [`State`](#GeneralAxisymmetric.State)                                       | State property.                                               |
| [`Suppressed`](#GeneralAxisymmetric.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#GeneralAxisymmetric.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#GeneralAxisymmetric.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeneralAxisymmetric.AttachedRefs"></a>

### *property* GeneralAxisymmetric.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Axis"></a>

### *property* GeneralAxisymmetric.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Children"></a>

### *property* GeneralAxisymmetric.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.ClsId"></a>

### *property* GeneralAxisymmetric.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Comments"></a>

### *property* GeneralAxisymmetric.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.CoordinateSystem"></a>

### *property* GeneralAxisymmetric.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.DataModelObjectCategory"></a>

### *property* GeneralAxisymmetric.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.EndPlane"></a>

### *property* GeneralAxisymmetric.EndPlane *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndPlane.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Figures"></a>

### *property* GeneralAxisymmetric.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GroupingFolder"></a>

### *property* GeneralAxisymmetric.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.IconName"></a>

### *property* GeneralAxisymmetric.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Images"></a>

### *property* GeneralAxisymmetric.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.ImportableObjectSourceId"></a>

### *property* GeneralAxisymmetric.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.InternalObject"></a>

### *property* GeneralAxisymmetric.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeneralAxisymmetricAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Location"></a>

### *property* GeneralAxisymmetric.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Name"></a>

### *property* GeneralAxisymmetric.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.NodalPlanes"></a>

### *property* GeneralAxisymmetric.NodalPlanes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodalPlanes.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.NodalPlanesVisible"></a>

### *property* GeneralAxisymmetric.NodalPlanesVisible *: [Ansys.Mechanical.DataModel.Enums.NodalPlanesVisible](../../../Mechanical/DataModel/Enums/NodalPlanesVisible.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NodalPlanesVisible) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodalPlanesVisible.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.ObjectId"></a>

### *property* GeneralAxisymmetric.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.ObjectState"></a>

### *property* GeneralAxisymmetric.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.ObjectTags"></a>

### *property* GeneralAxisymmetric.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Parent"></a>

### *property* GeneralAxisymmetric.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Properties"></a>

### *property* GeneralAxisymmetric.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.ReadOnly"></a>

### *property* GeneralAxisymmetric.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.StartPlane"></a>

### *property* GeneralAxisymmetric.StartPlane *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartPlane.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.State"></a>

### *property* GeneralAxisymmetric.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Suppressed"></a>

### *property* GeneralAxisymmetric.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.TransferableObjectId"></a>

### *property* GeneralAxisymmetric.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.VisibleProperties"></a>

### *property* GeneralAxisymmetric.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeneralAxisymmetric.Activate"></a>

### GeneralAxisymmetric.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.AddComment"></a>

### GeneralAxisymmetric.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.AddFigure"></a>

### GeneralAxisymmetric.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.AddImage"></a>

### GeneralAxisymmetric.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Copy"></a>

### GeneralAxisymmetric.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.CopyTo"></a>

### GeneralAxisymmetric.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.CreateObjRef"></a>

### GeneralAxisymmetric.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.CreateParameter"></a>

### GeneralAxisymmetric.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Cut"></a>

### GeneralAxisymmetric.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Delete"></a>

### GeneralAxisymmetric.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Duplicate"></a>

### GeneralAxisymmetric.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Equals"></a>

### GeneralAxisymmetric.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetAPIName"></a>

### GeneralAxisymmetric.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetAllProperties"></a>

### GeneralAxisymmetric.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetChildren"></a>

### GeneralAxisymmetric.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GeneralAxisymmetric.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetDetailsView"></a>

### GeneralAxisymmetric.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetEnumName"></a>

### GeneralAxisymmetric.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetHashCode"></a>

### GeneralAxisymmetric.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetIconFile"></a>

### GeneralAxisymmetric.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetLifetimeService"></a>

### GeneralAxisymmetric.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetObjectData"></a>

### GeneralAxisymmetric.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetParameter"></a>

### GeneralAxisymmetric.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetPath"></a>

### GeneralAxisymmetric.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetPropertyName"></a>

### GeneralAxisymmetric.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetPropertyValue"></a>

### GeneralAxisymmetric.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetVisibleProperties"></a>

### GeneralAxisymmetric.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GetVisiblePropertyNames"></a>

### GeneralAxisymmetric.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GroupAllSimilarChildren"></a>

### GeneralAxisymmetric.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.GroupSimilarObjects"></a>

### GeneralAxisymmetric.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.InitializeLifetimeService"></a>

### GeneralAxisymmetric.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.IsPropertyEditable"></a>

### GeneralAxisymmetric.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeneralAxisymmetric.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.IsPropertyVisible"></a>

### GeneralAxisymmetric.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeneralAxisymmetric.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.Paste"></a>

### GeneralAxisymmetric.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.PropertyByAPIName"></a>

### GeneralAxisymmetric.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.PropertyById"></a>

### GeneralAxisymmetric.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.PropertyByName"></a>

### GeneralAxisymmetric.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.RemoveFromGroup"></a>

### GeneralAxisymmetric.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GeneralAxisymmetric.RemoveParameter"></a>

### GeneralAxisymmetric.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

