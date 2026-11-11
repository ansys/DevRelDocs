# `Connect`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.Connect"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Connect(internalObject: Any)

<a id="Connect"></a>

### *class* Connect(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Connect.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Connect.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Connect.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Connect.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Connect.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Connect.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Connect.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Connect.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Connect.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Connect.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Connect.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Connect.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Connect.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#Connect.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#Connect.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Connect.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Connect.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Connect.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Connect.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Connect.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Connect.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Connect.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Connect.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Connect.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Connect.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Connect.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Connect.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Connect.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Connect.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Connect.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Connect.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Connect.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Connect.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Connect.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Connect.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Connect.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Connect.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Connect.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Connect.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Connect.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#Connect.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Connect.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#Connect.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Connect.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Connect.Comments)                               | Gets the list of associated comments.                         |
| [`ConnectionOption`](#Connect.ConnectionOption)               | Gets or sets the ConnectionOption.                            |
| [`ConnectionSize`](#Connect.ConnectionSize)                   | Gets or sets the ConnectionSize.                              |
| [`ConnectionTolerance`](#Connect.ConnectionTolerance)         | Gets or sets the ConnectionTolerance.                         |
| [`ConnectionToleranceList`](#Connect.ConnectionToleranceList) | Gets or sets the ConnectionToleranceList.                     |
| [`CoplanarAngleTolerance`](#Connect.CoplanarAngleTolerance)   | Gets or sets the CoplanarAngleTolerance.                      |
| [`DataModelObjectCategory`](#Connect.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#Connect.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Connect.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#Connect.IconName)                               | IconName property.                                            |
| [`Images`](#Connect.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Connect.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Connect.Location)                               | Gets or sets the Location.                                    |
| [`MultipleConnectionStep`](#Connect.MultipleConnectionStep)   | Gets or sets the MultipleConnectionStep.                      |
| [`Name`](#Connect.Name)                                       | Name property.                                                |
| [`NamedSelection`](#NamedSelection)       | Gets or sets the NamedSelection.                              |
| [`ObjectId`](#Connect.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Connect.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Connect.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Connect.Parent)                                   | Parent property.                                              |
| [`PerformIntersections`](#Connect.PerformIntersections)       | Gets or sets the PerformIntersections.                        |
| [`Properties`](#Connect.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Connect.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#Connect.State)                                     | State property.                                               |
| [`Suppressed`](#Connect.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Connect.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Connect.AttachedRefs"></a>

### *property* Connect.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Children"></a>

### *property* Connect.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ClsId"></a>

### *property* Connect.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Comments"></a>

### *property* Connect.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionOption"></a>

### *property* Connect.ConnectionOption *: [Ansys.Mechanical.DataModel.Enums.ConnectionOptions](../../../../Mechanical/DataModel/Enums/ConnectionOptions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ConnectionOptions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConnectionOption.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionSize"></a>

### *property* Connect.ConnectionSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConnectionSize.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionTolerance"></a>

### *property* Connect.ConnectionTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConnectionTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ConnectionToleranceList"></a>

### *property* Connect.ConnectionToleranceList *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConnectionToleranceList.

<!-- !! processed by numpydoc !! -->

<a id="Connect.CoplanarAngleTolerance"></a>

### *property* Connect.CoplanarAngleTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoplanarAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connect.DataModelObjectCategory"></a>

### *property* Connect.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Figures"></a>

### *property* Connect.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GroupingFolder"></a>

### *property* Connect.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.IconName"></a>

### *property* Connect.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Images"></a>

### *property* Connect.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Connect.InternalObject"></a>

### *property* Connect.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Location"></a>

### *property* Connect.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Connect.MultipleConnectionStep"></a>

### *property* Connect.MultipleConnectionStep *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MultipleConnectionStep.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Name"></a>

### *property* Connect.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.NamedSelection"></a>

### *property* Connect.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ObjectId"></a>

### *property* Connect.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ObjectState"></a>

### *property* Connect.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ObjectTags"></a>

### *property* Connect.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Parent"></a>

### *property* Connect.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.PerformIntersections"></a>

### *property* Connect.PerformIntersections *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PerformIntersections.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Properties"></a>

### *property* Connect.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Connect.ScopingMethod"></a>

### *property* Connect.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Connect.State"></a>

### *property* Connect.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Suppressed"></a>

### *property* Connect.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Connect.VisibleProperties"></a>

### *property* Connect.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Connect.Activate"></a>

### Connect.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Connect.AddComment"></a>

### Connect.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Connect.AddFigure"></a>

### Connect.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Connect.AddImage"></a>

### Connect.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Connect.Copy"></a>

### Connect.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Connect.CopyTo"></a>

### Connect.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Connect.CreateObjRef"></a>

### Connect.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.CreateParameter"></a>

### Connect.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Cut"></a>

### Connect.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Delete"></a>

### Connect.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Duplicate"></a>

### Connect.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Equals"></a>

### Connect.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GenerateMesh"></a>

### Connect.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetAPIName"></a>

### Connect.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetAllProperties"></a>

### Connect.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetChildren"></a>

### Connect.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Connect.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetDetailsView"></a>

### Connect.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetEnumName"></a>

### Connect.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetHashCode"></a>

### Connect.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetIconFile"></a>

### Connect.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetLifetimeService"></a>

### Connect.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetObjectData"></a>

### Connect.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetParameter"></a>

### Connect.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetPath"></a>

### Connect.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetPropertyName"></a>

### Connect.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetPropertyValue"></a>

### Connect.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetVisibleProperties"></a>

### Connect.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GetVisiblePropertyNames"></a>

### Connect.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GroupAllSimilarChildren"></a>

### Connect.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Connect.GroupSimilarObjects"></a>

### Connect.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Connect.InitializeLifetimeService"></a>

### Connect.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.IsPropertyEditable"></a>

### Connect.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Connect.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.IsPropertyVisible"></a>

### Connect.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Connect.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.Paste"></a>

### Connect.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Connect.PropertyByAPIName"></a>

### Connect.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Connect.PropertyById"></a>

### Connect.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Connect.PropertyByName"></a>

### Connect.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Connect.RemoveFromGroup"></a>

### Connect.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Connect.RemoveParameter"></a>

### Connect.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connect.RenameBasedOnDefinition"></a>

### Connect.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

