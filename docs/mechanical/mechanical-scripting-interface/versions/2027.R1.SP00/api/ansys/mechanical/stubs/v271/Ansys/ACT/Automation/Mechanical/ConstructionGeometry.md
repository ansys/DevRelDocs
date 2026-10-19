# `ConstructionGeometry`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ConstructionGeometry"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ConstructionGeometry(internalObject: Any)

<a id="ConstructionGeometry"></a>

### *class* ConstructionGeometry(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ConstructionGeometry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ConstructionGeometry.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ConstructionGeometry.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConstructionLine`](#ConstructionGeometry.AddConstructionLine)             | Creates a new ConstructionLine                                                              |
| [`AddConstructionPoint`](#ConstructionGeometry.AddConstructionPoint)           | Creates a new ConstructionPoint                                                             |
| [`AddFigure`](#ConstructionGeometry.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ConstructionGeometry.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddPath`](#ConstructionGeometry.AddPath)                                     | Creates a new Path                                                                          |
| [`AddSTL`](#ConstructionGeometry.AddSTL)                                       | Creates a new STL                                                                           |
| [`AddSolid`](#ConstructionGeometry.AddSolid)                                   | Creates a new Solid                                                                         |
| [`AddSurface`](#ConstructionGeometry.AddSurface)                               | Creates a new Surface                                                                       |
| [`Copy`](#ConstructionGeometry.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ConstructionGeometry.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ConstructionGeometry.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ConstructionGeometry.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ConstructionGeometry.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ConstructionGeometry.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ConstructionGeometry.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ConstructionGeometry.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ConstructionGeometry.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ConstructionGeometry.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ConstructionGeometry.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ConstructionGeometry.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ConstructionGeometry.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ConstructionGeometry.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ConstructionGeometry.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ConstructionGeometry.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ConstructionGeometry.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ConstructionGeometry.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ConstructionGeometry.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ConstructionGeometry.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ConstructionGeometry.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ConstructionGeometry.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ConstructionGeometry.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ConstructionGeometry.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ConstructionGeometry.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ConstructionGeometry.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ConstructionGeometry.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ConstructionGeometry.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ConstructionGeometry.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ConstructionGeometry.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ConstructionGeometry.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ConstructionGeometry.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ConstructionGeometry.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ConstructionGeometry.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`UpdateAllSolids`](#ConstructionGeometry.UpdateAllSolids)                     | Update all solid parts under the Construction Geometry folder.                              |
| [`UpdateSolids`](#ConstructionGeometry.UpdateSolids)                           | Update only the solids that are activated                                                   |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ConstructionGeometry.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ConstructionGeometry.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ConstructionGeometry.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ConstructionGeometry.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ConstructionGeometry.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ConstructionGeometry.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ConstructionGeometry.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ConstructionGeometry.IconName)                               | IconName property.                                            |
| [`Images`](#ConstructionGeometry.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ConstructionGeometry.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#ConstructionGeometry.Name)                                       | Name property.                                                |
| [`ObjectId`](#ConstructionGeometry.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ConstructionGeometry.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ConstructionGeometry.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ConstructionGeometry.Parent)                                   | Parent property.                                              |
| [`Properties`](#ConstructionGeometry.Properties)                           | Gets the list of properties for this object.                  |
| [`ShowMesh`](#ConstructionGeometry.ShowMesh)                               | Gets or sets the ShowMesh.                                    |
| [`State`](#ConstructionGeometry.State)                                     | State property.                                               |
| [`VisibleProperties`](#ConstructionGeometry.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ConstructionGeometry.AttachedRefs"></a>

### *property* ConstructionGeometry.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Children"></a>

### *property* ConstructionGeometry.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.ClsId"></a>

### *property* ConstructionGeometry.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Comments"></a>

### *property* ConstructionGeometry.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.DataModelObjectCategory"></a>

### *property* ConstructionGeometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Figures"></a>

### *property* ConstructionGeometry.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GroupingFolder"></a>

### *property* ConstructionGeometry.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.IconName"></a>

### *property* ConstructionGeometry.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Images"></a>

### *property* ConstructionGeometry.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.InternalObject"></a>

### *property* ConstructionGeometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConstructionGeometryGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Name"></a>

### *property* ConstructionGeometry.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.ObjectId"></a>

### *property* ConstructionGeometry.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.ObjectState"></a>

### *property* ConstructionGeometry.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.ObjectTags"></a>

### *property* ConstructionGeometry.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Parent"></a>

### *property* ConstructionGeometry.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Properties"></a>

### *property* ConstructionGeometry.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.ShowMesh"></a>

### *property* ConstructionGeometry.ShowMesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowMesh.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.State"></a>

### *property* ConstructionGeometry.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.VisibleProperties"></a>

### *property* ConstructionGeometry.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstructionGeometry.Activate"></a>

### ConstructionGeometry.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddComment"></a>

### ConstructionGeometry.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddConstructionLine"></a>

### ConstructionGeometry.AddConstructionLine() → [Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine](ConstructionLines/ConstructionLine.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine)

Creates a new ConstructionLine

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddConstructionPoint"></a>

### ConstructionGeometry.AddConstructionPoint() → [Ansys.ACT.Automation.Mechanical.ConstructionPoint](ConstructionPoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ConstructionPoint)

Creates a new ConstructionPoint

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddFigure"></a>

### ConstructionGeometry.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddImage"></a>

### ConstructionGeometry.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddPath"></a>

### ConstructionGeometry.AddPath() → [Ansys.ACT.Automation.Mechanical.Path](Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path)

Creates a new Path

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddSTL"></a>

### ConstructionGeometry.AddSTL() → [Ansys.ACT.Automation.Mechanical.STL](STL.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.STL)

Creates a new STL

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddSolid"></a>

### ConstructionGeometry.AddSolid() → [Ansys.ACT.Automation.Mechanical.Solid](Solid.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Solid)

Creates a new Solid

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddSurface"></a>

### ConstructionGeometry.AddSurface() → [Ansys.ACT.Automation.Mechanical.Surface](Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface)

Creates a new Surface

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Copy"></a>

### ConstructionGeometry.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.CopyTo"></a>

### ConstructionGeometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.CreateObjRef"></a>

### ConstructionGeometry.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.CreateParameter"></a>

### ConstructionGeometry.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Cut"></a>

### ConstructionGeometry.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Delete"></a>

### ConstructionGeometry.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Duplicate"></a>

### ConstructionGeometry.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Equals"></a>

### ConstructionGeometry.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetAPIName"></a>

### ConstructionGeometry.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetAllProperties"></a>

### ConstructionGeometry.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetChildren"></a>

### ConstructionGeometry.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ConstructionGeometry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetDetailsView"></a>

### ConstructionGeometry.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetEnumName"></a>

### ConstructionGeometry.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetHashCode"></a>

### ConstructionGeometry.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetIconFile"></a>

### ConstructionGeometry.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetLifetimeService"></a>

### ConstructionGeometry.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetObjectData"></a>

### ConstructionGeometry.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetParameter"></a>

### ConstructionGeometry.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetPath"></a>

### ConstructionGeometry.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetPropertyName"></a>

### ConstructionGeometry.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetPropertyValue"></a>

### ConstructionGeometry.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetVisibleProperties"></a>

### ConstructionGeometry.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetVisiblePropertyNames"></a>

### ConstructionGeometry.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GroupAllSimilarChildren"></a>

### ConstructionGeometry.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GroupSimilarObjects"></a>

### ConstructionGeometry.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.InitializeLifetimeService"></a>

### ConstructionGeometry.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.IsPropertyEditable"></a>

### ConstructionGeometry.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ConstructionGeometry.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.IsPropertyVisible"></a>

### ConstructionGeometry.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ConstructionGeometry.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Paste"></a>

### ConstructionGeometry.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.PropertyByAPIName"></a>

### ConstructionGeometry.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.PropertyById"></a>

### ConstructionGeometry.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.PropertyByName"></a>

### ConstructionGeometry.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.RemoveFromGroup"></a>

### ConstructionGeometry.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.RemoveParameter"></a>

### ConstructionGeometry.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.UpdateAllSolids"></a>

### ConstructionGeometry.UpdateAllSolids() → [None](https://docs.python.org/3/builtins/constants.html#None)

Update all solid parts under the Construction Geometry folder.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.UpdateSolids"></a>

### ConstructionGeometry.UpdateSolids() → [None](https://docs.python.org/3/builtins/constants.html#None)

Update only the solids that are activated

<!-- !! processed by numpydoc !! -->

