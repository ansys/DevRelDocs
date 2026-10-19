# `AnalysisSettings`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings(internalObject: Any)

<a id="AnalysisSettings"></a>

### *class* AnalysisSettings(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AnalysisSettings.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AnalysisSettings.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AnalysisSettings.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AnalysisSettings.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AnalysisSettings.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AnalysisSettings.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AnalysisSettings.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AnalysisSettings.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AnalysisSettings.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`DeleteAllRestartPoints`](#AnalysisSettings.DeleteAllRestartPoints)       | DeleteAllRestartPoints method.                                                              |
| [`Duplicate`](#AnalysisSettings.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AnalysisSettings.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AnalysisSettings.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AnalysisSettings.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AnalysisSettings.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AnalysisSettings.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AnalysisSettings.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AnalysisSettings.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AnalysisSettings.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AnalysisSettings.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AnalysisSettings.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AnalysisSettings.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AnalysisSettings.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AnalysisSettings.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AnalysisSettings.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AnalysisSettings.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AnalysisSettings.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AnalysisSettings.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AnalysisSettings.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AnalysisSettings.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AnalysisSettings.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AnalysisSettings.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AnalysisSettings.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AnalysisSettings.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AnalysisSettings.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AnalysisSettings.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AnalysisSettings.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AnalysisSettings.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AnalysisSettings.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#AnalysisSettings.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#AnalysisSettings.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#AnalysisSettings.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AnalysisSettings.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`Figures`](#AnalysisSettings.Figures)                                         | Gets the list of associated figures.                          |
| [`Graph`](#AnalysisSettings.Graph)                                             | Graph property.                                               |
| [`GroupingFolder`](#AnalysisSettings.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#AnalysisSettings.IconName)                                       | IconName property.                                            |
| [`Images`](#AnalysisSettings.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#AnalysisSettings.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Name`](#AnalysisSettings.Name)                                               | Name property.                                                |
| [`ObjectId`](#AnalysisSettings.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#AnalysisSettings.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#AnalysisSettings.ObjectTags)                                   | ObjectTags property.                                          |
| [`Parent`](#AnalysisSettings.Parent)                                           | Parent property.                                              |
| [`Properties`](#AnalysisSettings.Properties)                                   | Gets the list of properties for this object.                  |
| [`ScratchSolverFilesDirectory`](#AnalysisSettings.ScratchSolverFilesDirectory) | Gets the ScratchSolverFilesDirectory.                         |
| [`SolverFilesDirectory`](#AnalysisSettings.SolverFilesDirectory)               | Gets the SolverFilesDirectory.                                |
| [`State`](#AnalysisSettings.State)                                             | State property.                                               |
| [`SurfaceStress`](#AnalysisSettings.SurfaceStress)                             | Gets or sets the SurfaceStress.                               |
| [`VisibleProperties`](#AnalysisSettings.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AnalysisSettings.AttachedRefs"></a>

### *property* AnalysisSettings.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Children"></a>

### *property* AnalysisSettings.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ClsId"></a>

### *property* AnalysisSettings.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Comments"></a>

### *property* AnalysisSettings.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DataModelObjectCategory"></a>

### *property* AnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Figures"></a>

### *property* AnalysisSettings.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Graph"></a>

### *property* AnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GroupingFolder"></a>

### *property* AnalysisSettings.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.IconName"></a>

### *property* AnalysisSettings.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Images"></a>

### *property* AnalysisSettings.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.InternalObject"></a>

### *property* AnalysisSettings.InternalObject *: Ansys.Common.Interop.DSAnalysisSettingsObjects.IDSAnalysisSettings | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Name"></a>

### *property* AnalysisSettings.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ObjectId"></a>

### *property* AnalysisSettings.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ObjectState"></a>

### *property* AnalysisSettings.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ObjectTags"></a>

### *property* AnalysisSettings.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Parent"></a>

### *property* AnalysisSettings.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Properties"></a>

### *property* AnalysisSettings.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* AnalysisSettings.ScratchSolverFilesDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SolverFilesDirectory"></a>

### *property* AnalysisSettings.SolverFilesDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.State"></a>

### *property* AnalysisSettings.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.SurfaceStress"></a>

### *property* AnalysisSettings.SurfaceStress *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SurfaceStress.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.VisibleProperties"></a>

### *property* AnalysisSettings.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AnalysisSettings.Activate"></a>

### AnalysisSettings.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AddComment"></a>

### AnalysisSettings.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AddFigure"></a>

### AnalysisSettings.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.AddImage"></a>

### AnalysisSettings.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Copy"></a>

### AnalysisSettings.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CopyTo"></a>

### AnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CreateObjRef"></a>

### AnalysisSettings.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.CreateParameter"></a>

### AnalysisSettings.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Cut"></a>

### AnalysisSettings.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.DeleteAllRestartPoints"></a>

### AnalysisSettings.DeleteAllRestartPoints() → [None](https://docs.python.org/3/builtins/constants.html#None)

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Duplicate"></a>

### AnalysisSettings.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Equals"></a>

### AnalysisSettings.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetAPIName"></a>

### AnalysisSettings.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetAllProperties"></a>

### AnalysisSettings.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetChildren"></a>

### AnalysisSettings.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetDetailsView"></a>

### AnalysisSettings.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetEnumName"></a>

### AnalysisSettings.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetHashCode"></a>

### AnalysisSettings.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetIconFile"></a>

### AnalysisSettings.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetLifetimeService"></a>

### AnalysisSettings.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetObjectData"></a>

### AnalysisSettings.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetParameter"></a>

### AnalysisSettings.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetPath"></a>

### AnalysisSettings.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetPropertyName"></a>

### AnalysisSettings.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetPropertyValue"></a>

### AnalysisSettings.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetVisibleProperties"></a>

### AnalysisSettings.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GetVisiblePropertyNames"></a>

### AnalysisSettings.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GroupAllSimilarChildren"></a>

### AnalysisSettings.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.GroupSimilarObjects"></a>

### AnalysisSettings.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.InitializeLifetimeService"></a>

### AnalysisSettings.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.IsPropertyEditable"></a>

### AnalysisSettings.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AnalysisSettings.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.IsPropertyVisible"></a>

### AnalysisSettings.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AnalysisSettings.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.Paste"></a>

### AnalysisSettings.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PropertyByAPIName"></a>

### AnalysisSettings.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PropertyById"></a>

### AnalysisSettings.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.PropertyByName"></a>

### AnalysisSettings.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RemoveFromGroup"></a>

### AnalysisSettings.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisSettings.RemoveParameter"></a>

### AnalysisSettings.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

