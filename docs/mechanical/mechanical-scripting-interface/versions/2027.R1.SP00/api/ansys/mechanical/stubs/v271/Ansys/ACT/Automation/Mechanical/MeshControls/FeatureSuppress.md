# `FeatureSuppress`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.FeatureSuppress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.FeatureSuppress(internalObject: Any)

<a id="FeatureSuppress"></a>

### *class* FeatureSuppress(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FeatureSuppress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FeatureSuppress.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FeatureSuppress.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#FeatureSuppress.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FeatureSuppress.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#FeatureSuppress.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FeatureSuppress.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FeatureSuppress.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FeatureSuppress.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FeatureSuppress.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FeatureSuppress.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FeatureSuppress.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FeatureSuppress.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#FeatureSuppress.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#FeatureSuppress.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FeatureSuppress.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FeatureSuppress.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FeatureSuppress.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FeatureSuppress.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FeatureSuppress.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FeatureSuppress.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FeatureSuppress.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FeatureSuppress.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FeatureSuppress.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FeatureSuppress.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FeatureSuppress.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FeatureSuppress.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FeatureSuppress.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FeatureSuppress.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FeatureSuppress.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FeatureSuppress.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FeatureSuppress.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FeatureSuppress.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FeatureSuppress.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FeatureSuppress.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FeatureSuppress.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FeatureSuppress.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FeatureSuppress.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FeatureSuppress.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FeatureSuppress.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FeatureSuppress.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`AttachedRefs`](#FeatureSuppress.AttachedRefs)                       | AttachedRefs property.                                                          |
| [`Children`](#FeatureSuppress.Children)                               | Gets the list of children.                                                      |
| [`ClsId`](#FeatureSuppress.ClsId)                                     | ClsId property.                                                                 |
| [`Comments`](#FeatureSuppress.Comments)                               | Gets the list of associated comments.                                           |
| [`DataModelObjectCategory`](#FeatureSuppress.DataModelObjectCategory) | Gets the current DataModelObject's category.                                    |
| [`FeatureHeight`](#FeatureSuppress.FeatureHeight)                     | To specify the Feature Height.                                                  |
| [`Figures`](#FeatureSuppress.Figures)                                 | Gets the list of associated figures.                                            |
| [`GroupingFolder`](#FeatureSuppress.GroupingFolder)                   | GroupingFolder property.                                                        |
| [`IconName`](#FeatureSuppress.IconName)                               | IconName property.                                                              |
| [`Images`](#FeatureSuppress.Images)                                   | Gets the list of associated images.                                             |
| [`InternalObject`](#FeatureSuppress.InternalObject)                   | Gets the internal object. For advanced usage only.                              |
| [`Location`](#FeatureSuppress.Location)                               | Gets or sets the Location.                                                      |
| [`Name`](#FeatureSuppress.Name)                                       | Name property.                                                                  |
| [`NamedSelection`](#NamedSelection)               | Gets or sets the NamedSelection.                                                |
| [`ObjectId`](#FeatureSuppress.ObjectId)                               | ObjectId property.                                                              |
| [`ObjectState`](#FeatureSuppress.ObjectState)                         | ObjectState property.                                                           |
| [`ObjectTags`](#FeatureSuppress.ObjectTags)                           | ObjectTags property.                                                            |
| [`Parent`](#FeatureSuppress.Parent)                                   | Parent property.                                                                |
| [`Properties`](#FeatureSuppress.Properties)                           | Gets the list of properties for this object.                                    |
| [`ScopingMethod`](#FeatureSuppress.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                 |
| [`SourceLocation`](#FeatureSuppress.SourceLocation)                   | To specify the face selections for the method: Defeature Faces or Parent Faces. |
| [`SourceNamedSelection`](#FeatureSuppress.SourceNamedSelection)       | Gets or sets the SourceNamedSelection.                                          |
| [`SourceSelection`](#FeatureSuppress.SourceSelection)                 | To select the FeatureSuppress method.                                           |
| [`State`](#FeatureSuppress.State)                                     | State property.                                                                 |
| [`Suppressed`](#FeatureSuppress.Suppressed)                           | Gets or sets the Suppressed.                                                    |
| [`VisibleProperties`](#FeatureSuppress.VisibleProperties)             | Gets the list of properties that are visible for this object.                   |

<a id="property-detail"></a>

## Property detail

<a id="FeatureSuppress.AttachedRefs"></a>

### *property* FeatureSuppress.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Children"></a>

### *property* FeatureSuppress.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.ClsId"></a>

### *property* FeatureSuppress.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Comments"></a>

### *property* FeatureSuppress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.DataModelObjectCategory"></a>

### *property* FeatureSuppress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.FeatureHeight"></a>

### *property* FeatureSuppress.FeatureHeight *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To specify the Feature Height.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Figures"></a>

### *property* FeatureSuppress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GroupingFolder"></a>

### *property* FeatureSuppress.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.IconName"></a>

### *property* FeatureSuppress.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Images"></a>

### *property* FeatureSuppress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.InternalObject"></a>

### *property* FeatureSuppress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Location"></a>

### *property* FeatureSuppress.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Name"></a>

### *property* FeatureSuppress.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.NamedSelection"></a>

### *property* FeatureSuppress.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.ObjectId"></a>

### *property* FeatureSuppress.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.ObjectState"></a>

### *property* FeatureSuppress.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.ObjectTags"></a>

### *property* FeatureSuppress.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Parent"></a>

### *property* FeatureSuppress.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Properties"></a>

### *property* FeatureSuppress.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.ScopingMethod"></a>

### *property* FeatureSuppress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.SourceLocation"></a>

### *property* FeatureSuppress.SourceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To specify the face selections for the method: Defeature Faces or Parent Faces.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.SourceNamedSelection"></a>

### *property* FeatureSuppress.SourceNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SourceNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.SourceSelection"></a>

### *property* FeatureSuppress.SourceSelection *: [Ansys.Mechanical.DataModel.Enums.FeatureSuppressMethod](../../../../Mechanical/DataModel/Enums/FeatureSuppressMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FeatureSuppressMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To select the FeatureSuppress method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.State"></a>

### *property* FeatureSuppress.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Suppressed"></a>

### *property* FeatureSuppress.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.VisibleProperties"></a>

### *property* FeatureSuppress.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FeatureSuppress.Activate"></a>

### FeatureSuppress.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.AddComment"></a>

### FeatureSuppress.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.AddFigure"></a>

### FeatureSuppress.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.AddImage"></a>

### FeatureSuppress.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Copy"></a>

### FeatureSuppress.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.CopyTo"></a>

### FeatureSuppress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.CreateObjRef"></a>

### FeatureSuppress.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.CreateParameter"></a>

### FeatureSuppress.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Cut"></a>

### FeatureSuppress.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Delete"></a>

### FeatureSuppress.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Duplicate"></a>

### FeatureSuppress.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Equals"></a>

### FeatureSuppress.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GenerateMesh"></a>

### FeatureSuppress.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetAPIName"></a>

### FeatureSuppress.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetAllProperties"></a>

### FeatureSuppress.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetChildren"></a>

### FeatureSuppress.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FeatureSuppress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetDetailsView"></a>

### FeatureSuppress.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetEnumName"></a>

### FeatureSuppress.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetHashCode"></a>

### FeatureSuppress.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetIconFile"></a>

### FeatureSuppress.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetLifetimeService"></a>

### FeatureSuppress.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetObjectData"></a>

### FeatureSuppress.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetParameter"></a>

### FeatureSuppress.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetPath"></a>

### FeatureSuppress.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetPropertyName"></a>

### FeatureSuppress.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetPropertyValue"></a>

### FeatureSuppress.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetVisibleProperties"></a>

### FeatureSuppress.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GetVisiblePropertyNames"></a>

### FeatureSuppress.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GroupAllSimilarChildren"></a>

### FeatureSuppress.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.GroupSimilarObjects"></a>

### FeatureSuppress.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.InitializeLifetimeService"></a>

### FeatureSuppress.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.IsPropertyEditable"></a>

### FeatureSuppress.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FeatureSuppress.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.IsPropertyVisible"></a>

### FeatureSuppress.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FeatureSuppress.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.Paste"></a>

### FeatureSuppress.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.PropertyByAPIName"></a>

### FeatureSuppress.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.PropertyById"></a>

### FeatureSuppress.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.PropertyByName"></a>

### FeatureSuppress.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.RemoveFromGroup"></a>

### FeatureSuppress.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.RemoveParameter"></a>

### FeatureSuppress.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureSuppress.RenameBasedOnDefinition"></a>

### FeatureSuppress.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

