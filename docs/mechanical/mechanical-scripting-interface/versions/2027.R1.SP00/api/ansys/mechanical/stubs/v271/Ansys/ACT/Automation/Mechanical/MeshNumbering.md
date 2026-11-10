# `MeshNumbering`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshNumbering"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshNumbering(internalObject: Any)

<a id="MeshNumbering"></a>

### *class* MeshNumbering(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MeshNumbering.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MeshNumbering.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#MeshNumbering.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#MeshNumbering.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MeshNumbering.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddNumberingControl`](#MeshNumbering.AddNumberingControl)             | Creates a new NumberingControl                                                              |
| [`Copy`](#MeshNumbering.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MeshNumbering.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MeshNumbering.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MeshNumbering.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MeshNumbering.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MeshNumbering.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MeshNumbering.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MeshNumbering.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#MeshNumbering.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MeshNumbering.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MeshNumbering.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MeshNumbering.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MeshNumbering.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MeshNumbering.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MeshNumbering.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MeshNumbering.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MeshNumbering.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MeshNumbering.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MeshNumbering.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MeshNumbering.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MeshNumbering.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MeshNumbering.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MeshNumbering.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MeshNumbering.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MeshNumbering.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MeshNumbering.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MeshNumbering.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MeshNumbering.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MeshNumbering.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MeshNumbering.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MeshNumbering.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MeshNumbering.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MeshNumbering.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MeshNumbering.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenumberMesh`](#MeshNumbering.RenumberMesh)                           | Run the RenumberMesh action.                                                                |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#MeshNumbering.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#MeshNumbering.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#MeshNumbering.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#MeshNumbering.Comments)                               | Gets the list of associated comments.                         |
| [`CompressNodeNumbers`](#MeshNumbering.CompressNodeNumbers)         | Gets or sets the CompressNodeNumbers.                         |
| [`DataModelObjectCategory`](#MeshNumbering.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`ElementOffset`](#MeshNumbering.ElementOffset)                     | Gets or sets the ElementOffset.                               |
| [`Figures`](#MeshNumbering.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#MeshNumbering.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#MeshNumbering.IconName)                               | IconName property.                                            |
| [`Images`](#MeshNumbering.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshNumbering.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#MeshNumbering.Name)                                       | Name property.                                                |
| [`NodeOffset`](#MeshNumbering.NodeOffset)                           | Gets or sets the NodeOffset.                                  |
| [`ObjectId`](#MeshNumbering.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#MeshNumbering.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#MeshNumbering.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#MeshNumbering.Parent)                                   | Parent property.                                              |
| [`Properties`](#MeshNumbering.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#MeshNumbering.State)                                     | State property.                                               |
| [`Suppressed`](#MeshNumbering.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#MeshNumbering.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshNumbering.AttachedRefs"></a>

### *property* MeshNumbering.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Children"></a>

### *property* MeshNumbering.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.ClsId"></a>

### *property* MeshNumbering.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Comments"></a>

### *property* MeshNumbering.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.CompressNodeNumbers"></a>

### *property* MeshNumbering.CompressNodeNumbers *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CompressNodeNumbers.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.DataModelObjectCategory"></a>

### *property* MeshNumbering.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.ElementOffset"></a>

### *property* MeshNumbering.ElementOffset *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementOffset.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Figures"></a>

### *property* MeshNumbering.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GroupingFolder"></a>

### *property* MeshNumbering.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.IconName"></a>

### *property* MeshNumbering.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Images"></a>

### *property* MeshNumbering.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.InternalObject"></a>

### *property* MeshNumbering.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshRenumberingControlGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Name"></a>

### *property* MeshNumbering.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.NodeOffset"></a>

### *property* MeshNumbering.NodeOffset *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.ObjectId"></a>

### *property* MeshNumbering.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.ObjectState"></a>

### *property* MeshNumbering.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.ObjectTags"></a>

### *property* MeshNumbering.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Parent"></a>

### *property* MeshNumbering.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Properties"></a>

### *property* MeshNumbering.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.State"></a>

### *property* MeshNumbering.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Suppressed"></a>

### *property* MeshNumbering.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.VisibleProperties"></a>

### *property* MeshNumbering.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshNumbering.Activate"></a>

### MeshNumbering.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddComment"></a>

### MeshNumbering.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddFigure"></a>

### MeshNumbering.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddImage"></a>

### MeshNumbering.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.AddNumberingControl"></a>

### MeshNumbering.AddNumberingControl() → [Ansys.ACT.Automation.Mechanical.NumberingControl](NumberingControl.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NumberingControl)

Creates a new NumberingControl

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Copy"></a>

### MeshNumbering.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.CopyTo"></a>

### MeshNumbering.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.CreateObjRef"></a>

### MeshNumbering.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.CreateParameter"></a>

### MeshNumbering.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Cut"></a>

### MeshNumbering.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Delete"></a>

### MeshNumbering.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Duplicate"></a>

### MeshNumbering.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Equals"></a>

### MeshNumbering.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetAPIName"></a>

### MeshNumbering.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetAllProperties"></a>

### MeshNumbering.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetChildren"></a>

### MeshNumbering.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshNumbering.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetDetailsView"></a>

### MeshNumbering.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetEnumName"></a>

### MeshNumbering.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetHashCode"></a>

### MeshNumbering.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetIconFile"></a>

### MeshNumbering.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetLifetimeService"></a>

### MeshNumbering.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetObjectData"></a>

### MeshNumbering.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetParameter"></a>

### MeshNumbering.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetPath"></a>

### MeshNumbering.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetPropertyName"></a>

### MeshNumbering.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetPropertyValue"></a>

### MeshNumbering.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetVisibleProperties"></a>

### MeshNumbering.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GetVisiblePropertyNames"></a>

### MeshNumbering.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GroupAllSimilarChildren"></a>

### MeshNumbering.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.GroupSimilarObjects"></a>

### MeshNumbering.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.InitializeLifetimeService"></a>

### MeshNumbering.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.IsPropertyEditable"></a>

### MeshNumbering.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshNumbering.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.IsPropertyVisible"></a>

### MeshNumbering.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshNumbering.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.Paste"></a>

### MeshNumbering.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.PropertyByAPIName"></a>

### MeshNumbering.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.PropertyById"></a>

### MeshNumbering.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.PropertyByName"></a>

### MeshNumbering.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.RemoveFromGroup"></a>

### MeshNumbering.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.RemoveParameter"></a>

### MeshNumbering.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshNumbering.RenumberMesh"></a>

### MeshNumbering.RenumberMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenumberMesh action.

<!-- !! processed by numpydoc !! -->

