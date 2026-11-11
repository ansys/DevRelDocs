# `CondensedGeometry`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedGeometry"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CondensedGeometry(internalObject: Any)

<a id="CondensedGeometry"></a>

### *class* CondensedGeometry(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CondensedGeometry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CondensedGeometry.Activate)                                           | Activate the current object.                                                                |
| [`AddComment`](#CondensedGeometry.AddComment)                                       | Creates a new child Comment.                                                                |
| [`AddCondensedPart`](#CondensedGeometry.AddCondensedPart)                           | Creates a new CondensedPart                                                                 |
| [`AddCondensedPartInfoTool`](#CondensedGeometry.AddCondensedPartInfoTool)           | Creates a new CondensedPartInfoTool                                                         |
| [`AddFigure`](#CondensedGeometry.AddFigure)                                         | Creates a new child Figure.                                                                 |
| [`AddImage`](#CondensedGeometry.AddImage)                                           | Creates a new child Image.                                                                  |
| [`AddImportedCondensedPart`](#CondensedGeometry.AddImportedCondensedPart)           | Creates a new ImportedCondensedPart                                                         |
| [`ClearGeneratedData`](#CondensedGeometry.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#CondensedGeometry.Copy)                                                   | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CondensedGeometry.CopyTo)                                               | Copies all visible properties from this object to another.                                  |
| [`CreateAutomaticCondensedParts`](#CondensedGeometry.CreateAutomaticCondensedParts) | Run the CreateAutomaticCondensedParts action.                                               |
| [`CreateObjRef`](#CondensedGeometry.CreateObjRef)                                   | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CondensedGeometry.CreateParameter)                             | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CondensedGeometry.Cut)                                                     | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CondensedGeometry.Delete)                                               | Run the Delete action.                                                                      |
| [`Duplicate`](#CondensedGeometry.Duplicate)                                         | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CondensedGeometry.Equals)                                               | Equals method.                                                                              |
| [`GenerateCondensedGeometry`](#CondensedGeometry.GenerateCondensedGeometry)         | GenerateCondensedGeometry method.                                                           |
| [`GenerateCondensedParts`](#CondensedGeometry.GenerateCondensedParts)               | Run the GenerateCondensedParts action.                                                      |
| [`GetAPIName`](#CondensedGeometry.GetAPIName)                                       | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CondensedGeometry.GetAllProperties)                           | GetAllProperties method.                                                                    |
| [`GetChildRemovalInfo`](#CondensedGeometry.GetChildRemovalInfo)                     |                                                                                             |
| [`GetChildren`](#CondensedGeometry.GetChildren)                                     | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CondensedGeometry.GetDetailsView)                               | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CondensedGeometry.GetEnumName)                                     | Enum name bound to value                                                                    |
| [`GetHashCode`](#CondensedGeometry.GetHashCode)                                     | GetHashCode method.                                                                         |
| [`GetIconFile`](#CondensedGeometry.GetIconFile)                                     | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CondensedGeometry.GetLifetimeService)                       | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CondensedGeometry.GetObjectData)                                 | GetObjectData method.                                                                       |
| [`GetParameter`](#CondensedGeometry.GetParameter)                                   | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CondensedGeometry.GetPath)                                             | GetPath method.                                                                             |
| [`GetPropertyName`](#CondensedGeometry.GetPropertyName)                             | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CondensedGeometry.GetPropertyValue)                           | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CondensedGeometry.GetVisibleProperties)                   | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CondensedGeometry.GetVisiblePropertyNames)             | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CondensedGeometry.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CondensedGeometry.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CondensedGeometry.InitializeLifetimeService)         | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CondensedGeometry.IsPropertyEditable)                       | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CondensedGeometry.IsPropertyVisible)                         | IsPropertyVisible method.                                                                   |
| [`Paste`](#CondensedGeometry.Paste)                                                 | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CondensedGeometry.PropertyByAPIName)                         | Get a property by its API name.                                                             |
| [`PropertyById`](#CondensedGeometry.PropertyById)                                   | PropertyById method.                                                                        |
| [`PropertyByName`](#CondensedGeometry.PropertyByName)                               | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CondensedGeometry.RemoveFromGroup)                             | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CondensedGeometry.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CondensedGeometry.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#CondensedGeometry.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#CondensedGeometry.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#CondensedGeometry.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CondensedGeometry.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#CondensedGeometry.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CondensedGeometry.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#CondensedGeometry.IconName)                                 | IconName property.                                            |
| [`Images`](#CondensedGeometry.Images)                                     | Gets the list of associated images.                           |
| [`InternalObject`](#CondensedGeometry.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#CondensedGeometry.Name)                                         | Name property.                                                |
| [`ObjectId`](#CondensedGeometry.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#CondensedGeometry.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#CondensedGeometry.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#CondensedGeometry.Parent)                                     | Parent property.                                              |
| [`PreChildrenRemovalAction`](#CondensedGeometry.PreChildrenRemovalAction) |                                                               |
| [`Properties`](#CondensedGeometry.Properties)                             | Gets the list of properties for this object.                  |
| [`SolverFilesDirectory`](#CondensedGeometry.SolverFilesDirectory)         | Gets the SolverFilesDirectory.                                |
| [`State`](#CondensedGeometry.State)                                       | State property.                                               |
| [`TransparencyEnabled`](#CondensedGeometry.TransparencyEnabled)           | Gets or sets the TransparencyEnabled.                         |
| [`VisibleProperties`](#CondensedGeometry.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CondensedGeometry.AttachedRefs"></a>

### *property* CondensedGeometry.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Children"></a>

### *property* CondensedGeometry.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.ClsId"></a>

### *property* CondensedGeometry.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Comments"></a>

### *property* CondensedGeometry.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.DataModelObjectCategory"></a>

### *property* CondensedGeometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Figures"></a>

### *property* CondensedGeometry.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GroupingFolder"></a>

### *property* CondensedGeometry.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.IconName"></a>

### *property* CondensedGeometry.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Images"></a>

### *property* CondensedGeometry.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.InternalObject"></a>

### *property* CondensedGeometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedGeometryAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Name"></a>

### *property* CondensedGeometry.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.ObjectId"></a>

### *property* CondensedGeometry.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.ObjectState"></a>

### *property* CondensedGeometry.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.ObjectTags"></a>

### *property* CondensedGeometry.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Parent"></a>

### *property* CondensedGeometry.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.PreChildrenRemovalAction"></a>

### *property* CondensedGeometry.PreChildrenRemovalAction *: System.Action[List[Ansys.ACT.Interfaces.Mechanical.AllRemoveInfoForObject]] | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="CondensedGeometry.Properties"></a>

### *property* CondensedGeometry.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.SolverFilesDirectory"></a>

### *property* CondensedGeometry.SolverFilesDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.State"></a>

### *property* CondensedGeometry.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.TransparencyEnabled"></a>

### *property* CondensedGeometry.TransparencyEnabled *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.VisibleProperties"></a>

### *property* CondensedGeometry.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CondensedGeometry.Activate"></a>

### CondensedGeometry.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddComment"></a>

### CondensedGeometry.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddCondensedPart"></a>

### CondensedGeometry.AddCondensedPart() → [Ansys.ACT.Automation.Mechanical.CondensedPart](CondensedPart.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPart)

Creates a new CondensedPart

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddCondensedPartInfoTool"></a>

### CondensedGeometry.AddCondensedPartInfoTool() → [Ansys.ACT.Automation.Mechanical.CondensedPartInfoTool](CondensedPartInfoTool.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPartInfoTool)

Creates a new CondensedPartInfoTool

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddFigure"></a>

### CondensedGeometry.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddImage"></a>

### CondensedGeometry.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.AddImportedCondensedPart"></a>

### CondensedGeometry.AddImportedCondensedPart() → [Ansys.ACT.Automation.Mechanical.ImportedCondensedPart](ImportedCondensedPart.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedCondensedPart)

Creates a new ImportedCondensedPart

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.ClearGeneratedData"></a>

### CondensedGeometry.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Copy"></a>

### CondensedGeometry.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.CopyTo"></a>

### CondensedGeometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.CreateAutomaticCondensedParts"></a>

### CondensedGeometry.CreateAutomaticCondensedParts() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the CreateAutomaticCondensedParts action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.CreateObjRef"></a>

### CondensedGeometry.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.CreateParameter"></a>

### CondensedGeometry.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Cut"></a>

### CondensedGeometry.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Delete"></a>

### CondensedGeometry.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Duplicate"></a>

### CondensedGeometry.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Equals"></a>

### CondensedGeometry.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GenerateCondensedGeometry"></a>

### CondensedGeometry.GenerateCondensedGeometry() → [None](https://docs.python.org/3/builtins/constants.html#None)

GenerateCondensedGeometry method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GenerateCondensedParts"></a>

### CondensedGeometry.GenerateCondensedParts() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GenerateCondensedParts action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetAPIName"></a>

### CondensedGeometry.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetAllProperties"></a>

### CondensedGeometry.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetChildRemovalInfo"></a>

### CondensedGeometry.GetChildRemovalInfo(child: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → Ansys.ACT.Interfaces.Mechanical.RemovableDataModelObjectInfo[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

<a id="CondensedGeometry.GetChildren"></a>

### CondensedGeometry.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CondensedGeometry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetDetailsView"></a>

### CondensedGeometry.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetEnumName"></a>

### CondensedGeometry.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetHashCode"></a>

### CondensedGeometry.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetIconFile"></a>

### CondensedGeometry.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetLifetimeService"></a>

### CondensedGeometry.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetObjectData"></a>

### CondensedGeometry.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetParameter"></a>

### CondensedGeometry.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetPath"></a>

### CondensedGeometry.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetPropertyName"></a>

### CondensedGeometry.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetPropertyValue"></a>

### CondensedGeometry.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetVisibleProperties"></a>

### CondensedGeometry.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GetVisiblePropertyNames"></a>

### CondensedGeometry.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GroupAllSimilarChildren"></a>

### CondensedGeometry.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.GroupSimilarObjects"></a>

### CondensedGeometry.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.InitializeLifetimeService"></a>

### CondensedGeometry.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.IsPropertyEditable"></a>

### CondensedGeometry.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CondensedGeometry.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.IsPropertyVisible"></a>

### CondensedGeometry.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CondensedGeometry.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.Paste"></a>

### CondensedGeometry.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.PropertyByAPIName"></a>

### CondensedGeometry.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.PropertyById"></a>

### CondensedGeometry.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.PropertyByName"></a>

### CondensedGeometry.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.RemoveFromGroup"></a>

### CondensedGeometry.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CondensedGeometry.RemoveParameter"></a>

### CondensedGeometry.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

