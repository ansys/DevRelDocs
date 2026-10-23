# `TableGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TableGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.TableGroup(internalObject: Any)

<a id="TableGroup"></a>

### *class* TableGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TableGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|------------------------------------------|----------------------|
| [`Initialize`](#TableGroup.Initialize)   | Initialize method.   |

### Methods

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TableGroup.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#TableGroup.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#TableGroup.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#TableGroup.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddTable`](#TableGroup.AddTable)                                   | Create the object for working with an imported part.                                        |
| [`Copy`](#TableGroup.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TableGroup.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TableGroup.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TableGroup.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#TableGroup.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#TableGroup.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#TableGroup.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#TableGroup.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#TableGroup.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TableGroup.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TableGroup.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TableGroup.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TableGroup.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TableGroup.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TableGroup.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#TableGroup.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TableGroup.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TableGroup.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TableGroup.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TableGroup.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#TableGroup.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TableGroup.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TableGroup.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TableGroup.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TableGroup.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TableGroup.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TableGroup.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TableGroup.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#TableGroup.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TableGroup.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TableGroup.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TableGroup.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TableGroup.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#TableGroup.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#TableGroup.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#TableGroup.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#TableGroup.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TableGroup.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#TableGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#TableGroup.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#TableGroup.IconName)                               | IconName property.                                            |
| [`Images`](#TableGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#TableGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IsInitialized`](#TableGroup.IsInitialized)                     | IsInitialized property.                                       |
| [`Name`](#TableGroup.Name)                                       | Name property.                                                |
| [`ObjectId`](#TableGroup.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#TableGroup.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#TableGroup.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#TableGroup.Parent)                                   | Parent property.                                              |
| [`Properties`](#TableGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#TableGroup.State)                                     | State property.                                               |
| [`VisibleProperties`](#TableGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TableGroup.AttachedRefs"></a>

### *property* TableGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Children"></a>

### *property* TableGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.ClsId"></a>

### *property* TableGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Comments"></a>

### *property* TableGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.DataModelObjectCategory"></a>

### *property* TableGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Figures"></a>

### *property* TableGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GroupingFolder"></a>

### *property* TableGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.IconName"></a>

### *property* TableGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Images"></a>

### *property* TableGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.InternalObject"></a>

### *property* TableGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTableGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.IsInitialized"></a>

### *property* TableGroup.IsInitialized *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

* **Classmethod:**

IsInitialized property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Name"></a>

### *property* TableGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.ObjectId"></a>

### *property* TableGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.ObjectState"></a>

### *property* TableGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.ObjectTags"></a>

### *property* TableGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Parent"></a>

### *property* TableGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Properties"></a>

### *property* TableGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.State"></a>

### *property* TableGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.VisibleProperties"></a>

### *property* TableGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TableGroup.Activate"></a>

### TableGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddComment"></a>

### TableGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddFigure"></a>

### TableGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddImage"></a>

### TableGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddTable"></a>

### TableGroup.AddTable(activate: [bool](https://docs.python.org/3/builtins/functions.html#bool), expandGroup: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [Ansys.ACT.Automation.Mechanical.Table](Table.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Table)

Create the object for working with an imported part.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Copy"></a>

### TableGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.CopyTo"></a>

### TableGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.CreateObjRef"></a>

### TableGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.CreateParameter"></a>

### TableGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Cut"></a>

### TableGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Duplicate"></a>

### TableGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Equals"></a>

### TableGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetAPIName"></a>

### TableGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetAllProperties"></a>

### TableGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetChildren"></a>

### TableGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TableGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetDetailsView"></a>

### TableGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetEnumName"></a>

### TableGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetHashCode"></a>

### TableGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetIconFile"></a>

### TableGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetLifetimeService"></a>

### TableGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetObjectData"></a>

### TableGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetParameter"></a>

### TableGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetPath"></a>

### TableGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetPropertyName"></a>

### TableGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetPropertyValue"></a>

### TableGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetVisibleProperties"></a>

### TableGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetVisiblePropertyNames"></a>

### TableGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GroupAllSimilarChildren"></a>

### TableGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GroupSimilarObjects"></a>

### TableGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Initialize"></a>

### *classmethod* TableGroup.Initialize() → [None](https://docs.python.org/3/builtins/constants.html#None)

Initialize method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.InitializeLifetimeService"></a>

### TableGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.IsPropertyEditable"></a>

### TableGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TableGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.IsPropertyVisible"></a>

### TableGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TableGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Paste"></a>

### TableGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.PropertyByAPIName"></a>

### TableGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.PropertyById"></a>

### TableGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.PropertyByName"></a>

### TableGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.RemoveFromGroup"></a>

### TableGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.RemoveParameter"></a>

### TableGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

