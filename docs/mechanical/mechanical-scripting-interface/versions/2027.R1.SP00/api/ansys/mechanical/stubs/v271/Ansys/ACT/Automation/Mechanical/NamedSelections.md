# `NamedSelections`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelections"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NamedSelections(internalObject: Any)

<a id="NamedSelections"></a>

### *class* NamedSelections(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NamedSelections.Activate)                                                             | Activate the current object.                                                                |
| [`AddComment`](#NamedSelections.AddComment)                                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#NamedSelections.AddFigure)                                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#NamedSelections.AddImage)                                                             | Creates a new child Image.                                                                  |
| [`AddNamedSelection`](#NamedSelections.AddNamedSelection)                                           | Creates a new NamedSelection                                                                |
| [`Copy`](#NamedSelections.Copy)                                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NamedSelections.CopyTo)                                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NamedSelections.CreateObjRef)                                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NamedSelections.CreateParameter)                                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#NamedSelections.Cut)                                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NamedSelections.Delete)                                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#NamedSelections.Duplicate)                                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#NamedSelections.Equals)                                                                 | Equals method.                                                                              |
| [`ExportNamedSelectionToCDBFile`](#NamedSelections.ExportNamedSelectionToCDBFile)                   | Export Named Selections to CDB file                                                         |
| [`GenerateAllNamedSelections`](#NamedSelections.GenerateAllNamedSelections)                         | Generate all named selections specified with the Worksheet                                  |
| [`GetAPIName`](#NamedSelections.GetAPIName)                                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#NamedSelections.GetAllProperties)                                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#NamedSelections.GetChildren)                                                       | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#NamedSelections.GetDetailsView)                                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NamedSelections.GetEnumName)                                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#NamedSelections.GetHashCode)                                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#NamedSelections.GetIconFile)                                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NamedSelections.GetLifetimeService)                                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#NamedSelections.GetObjectData)                                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#NamedSelections.GetParameter)                                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NamedSelections.GetPath)                                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#NamedSelections.GetPropertyName)                                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NamedSelections.GetPropertyValue)                                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#NamedSelections.GetVisibleProperties)                                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NamedSelections.GetVisiblePropertyNames)                               | GetVisiblePropertyNames method.                                                             |
| [`GoToNamedSelectionsCommonToSelection`](#NamedSelections.GoToNamedSelectionsCommonToSelection)     | GoToNamedSelectionsCommonToSelection method.                                                |
| [`GoToNamedSelectionsContainingSelection`](#NamedSelections.GoToNamedSelectionsContainingSelection) | GoToNamedSelectionsContainingSelection method.                                              |
| [`GroupAllSimilarChildren`](#NamedSelections.GroupAllSimilarChildren)                               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NamedSelections.GroupSimilarObjects)                                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NamedSelections.InitializeLifetimeService)                           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NamedSelections.IsPropertyEditable)                                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NamedSelections.IsPropertyVisible)                                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#NamedSelections.Paste)                                                                   | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#NamedSelections.PropertyByAPIName)                                           | Get a property by its API name.                                                             |
| [`PropertyById`](#NamedSelections.PropertyById)                                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#NamedSelections.PropertyByName)                                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NamedSelections.RemoveFromGroup)                                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NamedSelections.RemoveParameter)                                               | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#NamedSelections.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#NamedSelections.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#NamedSelections.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#NamedSelections.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#NamedSelections.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#NamedSelections.Figures)                                 | Gets the list of associated figures.                          |
| [`GenerateOnRefresh`](#NamedSelections.GenerateOnRefresh)             | Gets or sets the GenerateOnRefresh.                           |
| [`GenerateOnRemesh`](#NamedSelections.GenerateOnRemesh)               | Gets or sets the GenerateOnRemesh.                            |
| [`GroupingFolder`](#NamedSelections.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#NamedSelections.IconName)                               | IconName property.                                            |
| [`Images`](#NamedSelections.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#NamedSelections.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#NamedSelections.Name)                                       | Name property.                                                |
| [`ObjectId`](#NamedSelections.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#NamedSelections.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#NamedSelections.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#NamedSelections.Parent)                                   | Parent property.                                              |
| [`Properties`](#NamedSelections.Properties)                           | Gets the list of properties for this object.                  |
| [`RandomColors`](#NamedSelections.RandomColors)                       | Gets the RandomColors.                                        |
| [`ShowAnnotations`](#NamedSelections.ShowAnnotations)                 | Gets or sets the ShowAnnotations.                             |
| [`State`](#NamedSelections.State)                                     | State property.                                               |
| [`VisibleProperties`](#NamedSelections.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NamedSelections.AttachedRefs"></a>

### *property* NamedSelections.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Children"></a>

### *property* NamedSelections.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.ClsId"></a>

### *property* NamedSelections.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Comments"></a>

### *property* NamedSelections.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.DataModelObjectCategory"></a>

### *property* NamedSelections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Figures"></a>

### *property* NamedSelections.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GenerateOnRefresh"></a>

### *property* NamedSelections.GenerateOnRefresh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GenerateOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GenerateOnRemesh"></a>

### *property* NamedSelections.GenerateOnRemesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GenerateOnRemesh.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GroupingFolder"></a>

### *property* NamedSelections.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.IconName"></a>

### *property* NamedSelections.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Images"></a>

### *property* NamedSelections.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.InternalObject"></a>

### *property* NamedSelections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSComponentGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Name"></a>

### *property* NamedSelections.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.ObjectId"></a>

### *property* NamedSelections.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.ObjectState"></a>

### *property* NamedSelections.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.ObjectTags"></a>

### *property* NamedSelections.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Parent"></a>

### *property* NamedSelections.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Properties"></a>

### *property* NamedSelections.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.RandomColors"></a>

### *property* NamedSelections.RandomColors *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RandomColors.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.ShowAnnotations"></a>

### *property* NamedSelections.ShowAnnotations *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowAnnotations.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.State"></a>

### *property* NamedSelections.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.VisibleProperties"></a>

### *property* NamedSelections.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NamedSelections.Activate"></a>

### NamedSelections.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddComment"></a>

### NamedSelections.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddFigure"></a>

### NamedSelections.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddImage"></a>

### NamedSelections.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddNamedSelection"></a>

### NamedSelections.AddNamedSelection() → [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)

Creates a new NamedSelection

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Copy"></a>

### NamedSelections.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.CopyTo"></a>

### NamedSelections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.CreateObjRef"></a>

### NamedSelections.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.CreateParameter"></a>

### NamedSelections.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Cut"></a>

### NamedSelections.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Delete"></a>

### NamedSelections.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Duplicate"></a>

### NamedSelections.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Equals"></a>

### NamedSelections.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.ExportNamedSelectionToCDBFile"></a>

### NamedSelections.ExportNamedSelectionToCDBFile(filepath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export Named Selections to CDB file

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GenerateAllNamedSelections"></a>

### NamedSelections.GenerateAllNamedSelections() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate all named selections specified with the Worksheet

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetAPIName"></a>

### NamedSelections.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetAllProperties"></a>

### NamedSelections.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetChildren"></a>

### NamedSelections.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NamedSelections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetDetailsView"></a>

### NamedSelections.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetEnumName"></a>

### NamedSelections.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetHashCode"></a>

### NamedSelections.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetIconFile"></a>

### NamedSelections.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetLifetimeService"></a>

### NamedSelections.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetObjectData"></a>

### NamedSelections.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetParameter"></a>

### NamedSelections.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetPath"></a>

### NamedSelections.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetPropertyName"></a>

### NamedSelections.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetPropertyValue"></a>

### NamedSelections.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetVisibleProperties"></a>

### NamedSelections.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetVisiblePropertyNames"></a>

### NamedSelections.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GoToNamedSelectionsCommonToSelection"></a>

### NamedSelections.GoToNamedSelectionsCommonToSelection() → [None](https://docs.python.org/3/builtins/constants.html#None)

GoToNamedSelectionsCommonToSelection method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GoToNamedSelectionsContainingSelection"></a>

### NamedSelections.GoToNamedSelectionsContainingSelection() → [None](https://docs.python.org/3/builtins/constants.html#None)

GoToNamedSelectionsContainingSelection method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GroupAllSimilarChildren"></a>

### NamedSelections.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GroupSimilarObjects"></a>

### NamedSelections.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.InitializeLifetimeService"></a>

### NamedSelections.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.IsPropertyEditable"></a>

### NamedSelections.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NamedSelections.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.IsPropertyVisible"></a>

### NamedSelections.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NamedSelections.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Paste"></a>

### NamedSelections.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.PropertyByAPIName"></a>

### NamedSelections.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.PropertyById"></a>

### NamedSelections.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.PropertyByName"></a>

### NamedSelections.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.RemoveFromGroup"></a>

### NamedSelections.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.RemoveParameter"></a>

### NamedSelections.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

