# `GeometryImport`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GeometryImport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GeometryImport(internalObject: Any)

<a id="GeometryImport"></a>

### *class* GeometryImport(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GeometryImport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#GeometryImport.Activate)                                   | Activate the current object.                                                                                            |
| [`AddComment`](#GeometryImport.AddComment)                               | Creates a new child Comment.                                                                                            |
| [`AddFigure`](#GeometryImport.AddFigure)                                 | Creates a new child Figure.                                                                                             |
| [`AddImage`](#GeometryImport.AddImage)                                   | Creates a new child Image.                                                                                              |
| [`Copy`](#GeometryImport.Copy)                                           | Copies the current DataModelObject.                                                                                     |
| [`CopyTo`](#GeometryImport.CopyTo)                                       | Copies all visible properties from this object to another.                                                              |
| [`CreateObjRef`](#GeometryImport.CreateObjRef)                           | CreateObjRef method.                                                                                                    |
| [`CreateParameter`](#GeometryImport.CreateParameter)                     | Creates a new parameter for a Property.                                                                                 |
| [`Cut`](#GeometryImport.Cut)                                             | Cuts the current DataModelObject.                                                                                       |
| [`Duplicate`](#GeometryImport.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                                          |
| [`Equals`](#GeometryImport.Equals)                                       | Equals method.                                                                                                          |
| [`GetAPIName`](#GeometryImport.GetAPIName)                               | Property name bound to dispId.                                                                                          |
| [`GetAllProperties`](#GeometryImport.GetAllProperties)                   | GetAllProperties method.                                                                                                |
| [`GetChildren`](#GeometryImport.GetChildren)                             | Gets the list of children, filtered by type.                                                                            |
| [`GetDetailsView`](#GeometryImport.GetDetailsView)                       | GetDetailsView method.                                                                                                  |
| [`GetEnumName`](#GeometryImport.GetEnumName)                             | Enum name bound to value                                                                                                |
| [`GetFormat`](#GeometryImport.GetFormat)                                 | Gets the format of the geometry file/data for the most recent import.                                                   |
| [`GetGeometryURI`](#GeometryImport.GetGeometryURI)                       | Gets the Geometry URI for the most recent import. The Universal Resource Identifier,                                    |
| [`GetHashCode`](#GeometryImport.GetHashCode)                             | GetHashCode method.                                                                                                     |
| [`GetIconFile`](#GeometryImport.GetIconFile)                             | GetIconFile method.                                                                                                     |
| [`GetLifetimeService`](#GeometryImport.GetLifetimeService)               | GetLifetimeService method.                                                                                              |
| [`GetObjectData`](#GeometryImport.GetObjectData)                         | GetObjectData method.                                                                                                   |
| [`GetParameter`](#GeometryImport.GetParameter)                           | Gets the parameter corresponding to the given property.                                                                 |
| [`GetPath`](#GeometryImport.GetPath)                                     | GetPath method.                                                                                                         |
| [`GetPreferences`](#GeometryImport.GetPreferences)                       | Gets the preferences for most recent import operations with the geometry file/data.                                     |
| [`GetPropertyName`](#GeometryImport.GetPropertyName)                     | GetPropertyName method.                                                                                                 |
| [`GetPropertyValue`](#GeometryImport.GetPropertyValue)                   | GetPropertyValue method.                                                                                                |
| [`GetVisibleProperties`](#GeometryImport.GetVisibleProperties)           | GetVisibleProperties method.                                                                                            |
| [`GetVisiblePropertyNames`](#GeometryImport.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                                         |
| [`GroupAllSimilarChildren`](#GeometryImport.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                                                 |
| [`GroupSimilarObjects`](#GeometryImport.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                                                     |
| [`Import`](#GeometryImport.Import)                                       | Import/reload geometry from the CAD file using the provided preferences. <br/><br/>```<br/>**<br/>```<br/><br/>\* If no |
| [`InitializeLifetimeService`](#GeometryImport.InitializeLifetimeService) | InitializeLifetimeService method.                                                                                       |
| [`IsPropertyEditable`](#GeometryImport.IsPropertyEditable)               | IsPropertyEditable method.                                                                                              |
| [`IsPropertyVisible`](#GeometryImport.IsPropertyVisible)                 | IsPropertyVisible method.                                                                                               |
| [`Paste`](#GeometryImport.Paste)                                         | Pastes to the current DataModelObject context.                                                                          |
| [`PropertyByAPIName`](#GeometryImport.PropertyByAPIName)                 | Get a property by its API name.                                                                                         |
| [`PropertyById`](#GeometryImport.PropertyById)                           | PropertyById method.                                                                                                    |
| [`PropertyByName`](#GeometryImport.PropertyByName)                       | Get a property by its unique name.                                                                                      |
| [`RemoveFromGroup`](#GeometryImport.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                             |
| [`RemoveParameter`](#GeometryImport.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.                                       |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#GeometryImport.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#GeometryImport.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#GeometryImport.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#GeometryImport.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GeometryImport.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#GeometryImport.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#GeometryImport.GroupingFolder)                   | GroupingFolder property.                                      |
| [`HasValidGeometry`](#GeometryImport.HasValidGeometry)               | HasValidGeometry property.                                    |
| [`IconName`](#GeometryImport.IconName)                               | IconName property.                                            |
| [`Images`](#GeometryImport.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GeometryImport.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IsPrimarySource`](#GeometryImport.IsPrimarySource)                 | IsPrimarySource property.                                     |
| [`IsUserInteractable`](#GeometryImport.IsUserInteractable)           | IsUserInteractable property.                                  |
| [`Name`](#GeometryImport.Name)                                       | Name property.                                                |
| [`ObjectId`](#GeometryImport.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#GeometryImport.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#GeometryImport.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#GeometryImport.Parent)                                   | Parent property.                                              |
| [`Parts`](#GeometryImport.Parts)                                     | List of parts created by the most recent import operation.    |
| [`PostRemovalAction`](#GeometryImport.PostRemovalAction)             |                                                               |
| [`PreRemovalAction`](#GeometryImport.PreRemovalAction)               |                                                               |
| [`Properties`](#GeometryImport.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#GeometryImport.State)                                     | State property.                                               |
| [`VisibleProperties`](#GeometryImport.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeometryImport.AttachedRefs"></a>

### *property* GeometryImport.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Children"></a>

### *property* GeometryImport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.ClsId"></a>

### *property* GeometryImport.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Comments"></a>

### *property* GeometryImport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.DataModelObjectCategory"></a>

### *property* GeometryImport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Figures"></a>

### *property* GeometryImport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GroupingFolder"></a>

### *property* GeometryImport.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.HasValidGeometry"></a>

### *property* GeometryImport.HasValidGeometry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

HasValidGeometry property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.IconName"></a>

### *property* GeometryImport.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Images"></a>

### *property* GeometryImport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.InternalObject"></a>

### *property* GeometryImport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryImportAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.IsPrimarySource"></a>

### *property* GeometryImport.IsPrimarySource *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsPrimarySource property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.IsUserInteractable"></a>

### *property* GeometryImport.IsUserInteractable *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsUserInteractable property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Name"></a>

### *property* GeometryImport.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.ObjectId"></a>

### *property* GeometryImport.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.ObjectState"></a>

### *property* GeometryImport.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.ObjectTags"></a>

### *property* GeometryImport.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Parent"></a>

### *property* GeometryImport.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Parts"></a>

### *property* GeometryImport.Parts *: List[Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

List of parts created by the most recent import operation.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.PostRemovalAction"></a>

### *property* GeometryImport.PostRemovalAction *: System.Action | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="GeometryImport.PreRemovalAction"></a>

### *property* GeometryImport.PreRemovalAction *: System.Action | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="GeometryImport.Properties"></a>

### *property* GeometryImport.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.State"></a>

### *property* GeometryImport.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.VisibleProperties"></a>

### *property* GeometryImport.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryImport.Activate"></a>

### GeometryImport.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.AddComment"></a>

### GeometryImport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.AddFigure"></a>

### GeometryImport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.AddImage"></a>

### GeometryImport.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Copy"></a>

### GeometryImport.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.CopyTo"></a>

### GeometryImport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.CreateObjRef"></a>

### GeometryImport.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.CreateParameter"></a>

### GeometryImport.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Cut"></a>

### GeometryImport.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Duplicate"></a>

### GeometryImport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Equals"></a>

### GeometryImport.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetAPIName"></a>

### GeometryImport.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetAllProperties"></a>

### GeometryImport.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetChildren"></a>

### GeometryImport.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GeometryImport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetDetailsView"></a>

### GeometryImport.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetEnumName"></a>

### GeometryImport.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetFormat"></a>

### GeometryImport.GetFormat() → [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.Format](../../../Mechanical/DataModel/Enums/GeometryImportPreference/Format.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.Format)

Gets the format of the geometry file/data for the most recent import.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetGeometryURI"></a>

### GeometryImport.GetGeometryURI() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Gets the Geometry URI for the most recent import. The Universal Resource Identifier,
which on disk would be "file://..."
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetHashCode"></a>

### GeometryImport.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetIconFile"></a>

### GeometryImport.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetLifetimeService"></a>

### GeometryImport.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetObjectData"></a>

### GeometryImport.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetParameter"></a>

### GeometryImport.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetPath"></a>

### GeometryImport.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetPreferences"></a>

### GeometryImport.GetPreferences() → [Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences](../../Mechanical/Utilities/GeometryImportPreferences.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences)

Gets the preferences for most recent import operations with the geometry file/data.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetPropertyName"></a>

### GeometryImport.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetPropertyValue"></a>

### GeometryImport.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetVisibleProperties"></a>

### GeometryImport.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GetVisiblePropertyNames"></a>

### GeometryImport.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GroupAllSimilarChildren"></a>

### GeometryImport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.GroupSimilarObjects"></a>

### GeometryImport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Import"></a>

### GeometryImport.Import(geometryURI: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.Format](../../../Mechanical/DataModel/Enums/GeometryImportPreference/Format.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryImportPreference.Format), preferences: [Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences](../../Mechanical/Utilities/GeometryImportPreferences.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Utilities.GeometryImportPreferences)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Import/reload geometry from the CAD file using the provided preferences. *** If no
preference argument is provided, i.e., null is used (also the default argument), then
default values from Mechanical preferences will be used (Mechanical: File -> Options:
Import; this will need to be implemented). Previously used preferences are always purged
during an import operation. *** The parts will be read into the Geometry.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.InitializeLifetimeService"></a>

### GeometryImport.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.IsPropertyEditable"></a>

### GeometryImport.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeometryImport.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.IsPropertyVisible"></a>

### GeometryImport.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeometryImport.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.Paste"></a>

### GeometryImport.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.PropertyByAPIName"></a>

### GeometryImport.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.PropertyById"></a>

### GeometryImport.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.PropertyByName"></a>

### GeometryImport.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.RemoveFromGroup"></a>

### GeometryImport.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImport.RemoveParameter"></a>

### GeometryImport.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

