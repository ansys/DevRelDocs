# `SurfaceCoating`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SurfaceCoating(internalObject: Any)

<a id="SurfaceCoating"></a>

### *class* SurfaceCoating(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a SurfaceCoating.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#SurfaceCoating.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#SurfaceCoating.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#SurfaceCoating.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#SurfaceCoating.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#SurfaceCoating.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#SurfaceCoating.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#SurfaceCoating.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#SurfaceCoating.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#SurfaceCoating.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#SurfaceCoating.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#SurfaceCoating.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#SurfaceCoating.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#SurfaceCoating.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#SurfaceCoating.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#SurfaceCoating.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#SurfaceCoating.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#SurfaceCoating.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#SurfaceCoating.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#SurfaceCoating.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#SurfaceCoating.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#SurfaceCoating.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#SurfaceCoating.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#SurfaceCoating.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#SurfaceCoating.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#SurfaceCoating.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#SurfaceCoating.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#SurfaceCoating.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#SurfaceCoating.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#SurfaceCoating.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#SurfaceCoating.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#SurfaceCoating.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#SurfaceCoating.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#SurfaceCoating.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#SurfaceCoating.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#SurfaceCoating.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#SurfaceCoating.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#SurfaceCoating.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#SurfaceCoating.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#SurfaceCoating.AttachedRefs)                                       | AttachedRefs property.                                        |
| [`Children`](#SurfaceCoating.Children)                                               | Gets the list of children.                                    |
| [`ClsId`](#SurfaceCoating.ClsId)                                                     | ClsId property.                                               |
| [`Comments`](#SurfaceCoating.Comments)                                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                           | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#SurfaceCoating.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                  |
| [`Figures`](#SurfaceCoating.Figures)                                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#SurfaceCoating.GroupingFolder)                                   | GroupingFolder property.                                      |
| [`IconName`](#SurfaceCoating.IconName)                                               | IconName property.                                            |
| [`Images`](#SurfaceCoating.Images)                                                   | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#SurfaceCoating.ImportableObjectSourceId)               | ImportableObjectSourceId property.                            |
| [`InternalObject`](#SurfaceCoating.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#SurfaceCoating.Location)                                               | Gets or sets the Location.                                    |
| [`Material`](Material.md#Material)                                                   | Gets or sets the Material.                                    |
| [`Name`](#SurfaceCoating.Name)                                                       | Name property.                                                |
| [`ObjectId`](#SurfaceCoating.ObjectId)                                               | ObjectId property.                                            |
| [`ObjectState`](#SurfaceCoating.ObjectState)                                         | ObjectState property.                                         |
| [`ObjectTags`](#SurfaceCoating.ObjectTags)                                           | ObjectTags property.                                          |
| [`Parent`](#SurfaceCoating.Parent)                                                   | Parent property.                                              |
| [`Properties`](#SurfaceCoating.Properties)                                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SurfaceCoating.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`State`](#SurfaceCoating.State)                                                     | State property.                                               |
| [`Suppressed`](#SurfaceCoating.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`SurfaceCoatingStiffnessBehavior`](#SurfaceCoating.SurfaceCoatingStiffnessBehavior) | Gets or sets the SurfaceCoatingStiffnessBehavior.             |
| [`Thickness`](Thickness.md#Thickness)                                                | Gets or sets the Thickness.                                   |
| [`TransferableObjectId`](#SurfaceCoating.TransferableObjectId)                       | TransferableObjectId property.                                |
| [`VisibleProperties`](#SurfaceCoating.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SurfaceCoating.AttachedRefs"></a>

### *property* SurfaceCoating.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Children"></a>

### *property* SurfaceCoating.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.ClsId"></a>

### *property* SurfaceCoating.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Comments"></a>

### *property* SurfaceCoating.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.CoordinateSystem"></a>

### *property* SurfaceCoating.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.DataModelObjectCategory"></a>

### *property* SurfaceCoating.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Figures"></a>

### *property* SurfaceCoating.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GroupingFolder"></a>

### *property* SurfaceCoating.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.IconName"></a>

### *property* SurfaceCoating.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Images"></a>

### *property* SurfaceCoating.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.ImportableObjectSourceId"></a>

### *property* SurfaceCoating.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.InternalObject"></a>

### *property* SurfaceCoating.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSurfaceCoatingAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Location"></a>

### *property* SurfaceCoating.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Material"></a>

### *property* SurfaceCoating.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Name"></a>

### *property* SurfaceCoating.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.ObjectId"></a>

### *property* SurfaceCoating.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.ObjectState"></a>

### *property* SurfaceCoating.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.ObjectTags"></a>

### *property* SurfaceCoating.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Parent"></a>

### *property* SurfaceCoating.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Properties"></a>

### *property* SurfaceCoating.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.ReadOnly"></a>

### *property* SurfaceCoating.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.State"></a>

### *property* SurfaceCoating.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Suppressed"></a>

### *property* SurfaceCoating.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.SurfaceCoatingStiffnessBehavior"></a>

### *property* SurfaceCoating.SurfaceCoatingStiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.SurfaceCoatingStiffnessBehavior](../../../Mechanical/DataModel/Enums/SurfaceCoatingStiffnessBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SurfaceCoatingStiffnessBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SurfaceCoatingStiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Thickness"></a>

### *property* SurfaceCoating.Thickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thickness.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.TransferableObjectId"></a>

### *property* SurfaceCoating.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.VisibleProperties"></a>

### *property* SurfaceCoating.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SurfaceCoating.Activate"></a>

### SurfaceCoating.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.AddComment"></a>

### SurfaceCoating.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.AddFigure"></a>

### SurfaceCoating.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.AddImage"></a>

### SurfaceCoating.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Copy"></a>

### SurfaceCoating.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.CopyTo"></a>

### SurfaceCoating.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.CreateObjRef"></a>

### SurfaceCoating.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.CreateParameter"></a>

### SurfaceCoating.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Cut"></a>

### SurfaceCoating.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Delete"></a>

### SurfaceCoating.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Duplicate"></a>

### SurfaceCoating.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Equals"></a>

### SurfaceCoating.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetAPIName"></a>

### SurfaceCoating.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetAllProperties"></a>

### SurfaceCoating.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetChildren"></a>

### SurfaceCoating.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### SurfaceCoating.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetDetailsView"></a>

### SurfaceCoating.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetEnumName"></a>

### SurfaceCoating.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetHashCode"></a>

### SurfaceCoating.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetIconFile"></a>

### SurfaceCoating.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetLifetimeService"></a>

### SurfaceCoating.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetObjectData"></a>

### SurfaceCoating.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetParameter"></a>

### SurfaceCoating.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetPath"></a>

### SurfaceCoating.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetPropertyName"></a>

### SurfaceCoating.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetPropertyValue"></a>

### SurfaceCoating.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetVisibleProperties"></a>

### SurfaceCoating.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetVisiblePropertyNames"></a>

### SurfaceCoating.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GroupAllSimilarChildren"></a>

### SurfaceCoating.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GroupSimilarObjects"></a>

### SurfaceCoating.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.InitializeLifetimeService"></a>

### SurfaceCoating.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.IsPropertyEditable"></a>

### SurfaceCoating.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SurfaceCoating.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.IsPropertyVisible"></a>

### SurfaceCoating.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SurfaceCoating.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Paste"></a>

### SurfaceCoating.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.PropertyByAPIName"></a>

### SurfaceCoating.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.PropertyById"></a>

### SurfaceCoating.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.PropertyByName"></a>

### SurfaceCoating.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.RemoveFromGroup"></a>

### SurfaceCoating.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.RemoveParameter"></a>

### SurfaceCoating.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

