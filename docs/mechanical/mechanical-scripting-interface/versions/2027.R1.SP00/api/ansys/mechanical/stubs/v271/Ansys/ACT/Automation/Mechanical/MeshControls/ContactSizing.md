# `ContactSizing`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.ContactSizing"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.ContactSizing(internalObject: Any)

<a id="ContactSizing"></a>

### *class* ContactSizing(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactSizing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactSizing.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactSizing.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ContactSizing.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ContactSizing.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ContactSizing.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactSizing.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactSizing.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactSizing.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactSizing.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactSizing.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactSizing.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactSizing.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#ContactSizing.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#ContactSizing.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactSizing.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactSizing.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactSizing.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactSizing.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactSizing.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactSizing.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactSizing.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactSizing.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactSizing.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactSizing.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactSizing.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactSizing.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ContactSizing.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactSizing.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactSizing.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactSizing.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactSizing.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactSizing.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactSizing.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactSizing.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactSizing.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactSizing.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactSizing.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactSizing.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactSizing.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ContactSizing.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ContactSizing.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ContactSizing.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ContactSizing.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ContactSizing.Comments)                               | Gets the list of associated comments.                         |
| [`ContactRegion`](#ContactRegion)    | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](#ContactSizing.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`ElementSize`](#ContactSizing.ElementSize)                         | Gets or sets the ElementSize.                                 |
| [`Figures`](#ContactSizing.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ContactSizing.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ContactSizing.IconName)                               | IconName property.                                            |
| [`Images`](#ContactSizing.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactSizing.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#ContactSizing.Name)                                       | Name property.                                                |
| [`ObjectId`](#ContactSizing.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ContactSizing.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ContactSizing.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ContactSizing.Parent)                                   | Parent property.                                              |
| [`Properties`](#ContactSizing.Properties)                           | Gets the list of properties for this object.                  |
| [`Relevance`](Relevance.md#Relevance)                               | Gets or sets the Relevance.                                   |
| [`ScopingMethod`](#ContactSizing.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#ContactSizing.State)                                     | State property.                                               |
| [`Suppressed`](#ContactSizing.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Type`](#ContactSizing.Type)                                       | Gets or sets the Type.                                        |
| [`VisibleProperties`](#ContactSizing.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactSizing.AttachedRefs"></a>

### *property* ContactSizing.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Children"></a>

### *property* ContactSizing.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.ClsId"></a>

### *property* ContactSizing.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Comments"></a>

### *property* ContactSizing.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.ContactRegion"></a>

### *property* ContactSizing.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.DataModelObjectCategory"></a>

### *property* ContactSizing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.ElementSize"></a>

### *property* ContactSizing.ElementSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Figures"></a>

### *property* ContactSizing.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GroupingFolder"></a>

### *property* ContactSizing.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.IconName"></a>

### *property* ContactSizing.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Images"></a>

### *property* ContactSizing.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.InternalObject"></a>

### *property* ContactSizing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Name"></a>

### *property* ContactSizing.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.ObjectId"></a>

### *property* ContactSizing.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.ObjectState"></a>

### *property* ContactSizing.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.ObjectTags"></a>

### *property* ContactSizing.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Parent"></a>

### *property* ContactSizing.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Properties"></a>

### *property* ContactSizing.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Relevance"></a>

### *property* ContactSizing.Relevance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Relevance.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.ScopingMethod"></a>

### *property* ContactSizing.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.State"></a>

### *property* ContactSizing.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Suppressed"></a>

### *property* ContactSizing.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Type"></a>

### *property* ContactSizing.Type *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.VisibleProperties"></a>

### *property* ContactSizing.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactSizing.Activate"></a>

### ContactSizing.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.AddComment"></a>

### ContactSizing.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.AddFigure"></a>

### ContactSizing.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.AddImage"></a>

### ContactSizing.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Copy"></a>

### ContactSizing.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.CopyTo"></a>

### ContactSizing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.CreateObjRef"></a>

### ContactSizing.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.CreateParameter"></a>

### ContactSizing.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Cut"></a>

### ContactSizing.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Delete"></a>

### ContactSizing.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Duplicate"></a>

### ContactSizing.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Equals"></a>

### ContactSizing.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GenerateMesh"></a>

### ContactSizing.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetAPIName"></a>

### ContactSizing.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetAllProperties"></a>

### ContactSizing.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetChildren"></a>

### ContactSizing.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactSizing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetDetailsView"></a>

### ContactSizing.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetEnumName"></a>

### ContactSizing.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetHashCode"></a>

### ContactSizing.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetIconFile"></a>

### ContactSizing.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetLifetimeService"></a>

### ContactSizing.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetObjectData"></a>

### ContactSizing.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetParameter"></a>

### ContactSizing.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetPath"></a>

### ContactSizing.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetPropertyName"></a>

### ContactSizing.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetPropertyValue"></a>

### ContactSizing.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetVisibleProperties"></a>

### ContactSizing.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GetVisiblePropertyNames"></a>

### ContactSizing.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GroupAllSimilarChildren"></a>

### ContactSizing.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.GroupSimilarObjects"></a>

### ContactSizing.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.InitializeLifetimeService"></a>

### ContactSizing.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.IsPropertyEditable"></a>

### ContactSizing.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactSizing.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.IsPropertyVisible"></a>

### ContactSizing.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactSizing.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.Paste"></a>

### ContactSizing.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.PropertyByAPIName"></a>

### ContactSizing.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.PropertyById"></a>

### ContactSizing.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.PropertyByName"></a>

### ContactSizing.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.RemoveFromGroup"></a>

### ContactSizing.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.RemoveParameter"></a>

### ContactSizing.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSizing.RenameBasedOnDefinition"></a>

### ContactSizing.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

