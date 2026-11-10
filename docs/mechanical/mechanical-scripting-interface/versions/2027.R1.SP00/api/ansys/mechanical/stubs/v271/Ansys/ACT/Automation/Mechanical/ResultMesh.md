# `ResultMesh`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ResultMesh"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ResultMesh(internalObject: Any)

<a id="ResultMesh"></a>

### *class* ResultMesh(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ResultMesh.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ResultMesh.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#ResultMesh.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#ResultMesh.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#ResultMesh.AddImage)                                             | Creates a new child Image.                                                                  |
| [`AddNamedSelection`](#ResultMesh.AddNamedSelection)                           | Creates a new NamedSelection                                                                |
| [`ClearGeneratedData`](#ResultMesh.ClearGeneratedData)                         | Clear the generated mesh data                                                               |
| [`Copy`](#ResultMesh.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ResultMesh.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ResultMesh.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ResultMesh.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ResultMesh.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#ResultMesh.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ResultMesh.Equals)                                                 | Equals method.                                                                              |
| [`Generate`](#ResultMesh.Generate)                                             | Generate the mesh data                                                                      |
| [`GetAPIName`](#ResultMesh.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ResultMesh.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#ResultMesh.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ResultMesh.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ResultMesh.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#ResultMesh.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#ResultMesh.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ResultMesh.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ResultMesh.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#ResultMesh.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ResultMesh.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#ResultMesh.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ResultMesh.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ResultMesh.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ResultMesh.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ResultMesh.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ResultMesh.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`ImportComponentsFromResultFile`](#ResultMesh.ImportComponentsFromResultFile) | Import solver components from result file                                                   |
| [`InitializeLifetimeService`](#ResultMesh.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ResultMesh.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ResultMesh.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#ResultMesh.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ResultMesh.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#ResultMesh.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#ResultMesh.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ResultMesh.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ResultMesh.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ResultMesh.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ResultMesh.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ResultMesh.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ResultMesh.Comments)                               | Gets the list of associated comments.                         |
| [`ConfigurationId`](#ResultMesh.ConfigurationId)                 | Gets the ConfigurationId.                                     |
| [`DataModelObjectCategory`](#ResultMesh.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Elements`](#ResultMesh.Elements)                               | Gets the Elements.                                            |
| [`FEBodies`](#ResultMesh.FEBodies)                               | Gets FE Bodies                                                |
| [`Figures`](#ResultMesh.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ResultMesh.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ResultMesh.IconName)                               | IconName property.                                            |
| [`Images`](#ResultMesh.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ResultMesh.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#ResultMesh.Name)                                       | Name property.                                                |
| [`Nodes`](#ResultMesh.Nodes)                                     | Gets the Nodes.                                               |
| [`ObjectId`](#ResultMesh.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ResultMesh.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ResultMesh.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ResultMesh.Parent)                                   | Parent property.                                              |
| [`Properties`](#ResultMesh.Properties)                           | Gets the list of properties for this object.                  |
| [`SourceFile`](#ResultMesh.SourceFile)                           | Gets the SourceFile.                                          |
| [`State`](#ResultMesh.State)                                     | State property.                                               |
| [`Suppressed`](#ResultMesh.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ResultMesh.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ResultMesh.AttachedRefs"></a>

### *property* ResultMesh.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Children"></a>

### *property* ResultMesh.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ClsId"></a>

### *property* ResultMesh.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Comments"></a>

### *property* ResultMesh.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ConfigurationId"></a>

### *property* ResultMesh.ConfigurationId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ConfigurationId.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.DataModelObjectCategory"></a>

### *property* ResultMesh.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Elements"></a>

### *property* ResultMesh.Elements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.FEBodies"></a>

### *property* ResultMesh.FEBodies *: [Ansys.ACT.Automation.Mechanical.Part](Part.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Part) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets FE Bodies

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Figures"></a>

### *property* ResultMesh.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GroupingFolder"></a>

### *property* ResultMesh.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.IconName"></a>

### *property* ResultMesh.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Images"></a>

### *property* ResultMesh.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.InternalObject"></a>

### *property* ResultMesh.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExtraMeshAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Name"></a>

### *property* ResultMesh.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Nodes"></a>

### *property* ResultMesh.Nodes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ObjectId"></a>

### *property* ResultMesh.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ObjectState"></a>

### *property* ResultMesh.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ObjectTags"></a>

### *property* ResultMesh.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Parent"></a>

### *property* ResultMesh.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Properties"></a>

### *property* ResultMesh.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.SourceFile"></a>

### *property* ResultMesh.SourceFile *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SourceFile.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.State"></a>

### *property* ResultMesh.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Suppressed"></a>

### *property* ResultMesh.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.VisibleProperties"></a>

### *property* ResultMesh.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResultMesh.Activate"></a>

### ResultMesh.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddComment"></a>

### ResultMesh.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddFigure"></a>

### ResultMesh.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddImage"></a>

### ResultMesh.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.AddNamedSelection"></a>

### ResultMesh.AddNamedSelection() → [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)

Creates a new NamedSelection

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ClearGeneratedData"></a>

### ResultMesh.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear the generated mesh data

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Copy"></a>

### ResultMesh.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.CopyTo"></a>

### ResultMesh.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.CreateObjRef"></a>

### ResultMesh.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.CreateParameter"></a>

### ResultMesh.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Cut"></a>

### ResultMesh.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Duplicate"></a>

### ResultMesh.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Equals"></a>

### ResultMesh.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Generate"></a>

### ResultMesh.Generate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the mesh data

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetAPIName"></a>

### ResultMesh.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetAllProperties"></a>

### ResultMesh.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetChildren"></a>

### ResultMesh.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ResultMesh.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetDetailsView"></a>

### ResultMesh.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetEnumName"></a>

### ResultMesh.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetHashCode"></a>

### ResultMesh.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetIconFile"></a>

### ResultMesh.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetLifetimeService"></a>

### ResultMesh.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetObjectData"></a>

### ResultMesh.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetParameter"></a>

### ResultMesh.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetPath"></a>

### ResultMesh.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetPropertyName"></a>

### ResultMesh.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetPropertyValue"></a>

### ResultMesh.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetVisibleProperties"></a>

### ResultMesh.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GetVisiblePropertyNames"></a>

### ResultMesh.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GroupAllSimilarChildren"></a>

### ResultMesh.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.GroupSimilarObjects"></a>

### ResultMesh.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.ImportComponentsFromResultFile"></a>

### ResultMesh.ImportComponentsFromResultFile() → [None](https://docs.python.org/3/builtins/constants.html#None)

Import solver components from result file

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.InitializeLifetimeService"></a>

### ResultMesh.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.IsPropertyEditable"></a>

### ResultMesh.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ResultMesh.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.IsPropertyVisible"></a>

### ResultMesh.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ResultMesh.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.Paste"></a>

### ResultMesh.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.PropertyByAPIName"></a>

### ResultMesh.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.PropertyById"></a>

### ResultMesh.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.PropertyByName"></a>

### ResultMesh.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.RemoveFromGroup"></a>

### ResultMesh.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ResultMesh.RemoveParameter"></a>

### ResultMesh.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

