# `STL`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.STL"></a>

#### *class* Ansys.ACT.Automation.Mechanical.STL(internalObject: Any)

<a id="STL"></a>

### *class* STL(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a STL.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#STL.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#STL.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#STL.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#STL.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#STL.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#STL.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#STL.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#STL.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#STL.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#STL.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#STL.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#STL.Equals)                                       | Equals method.                                                                              |
| [`ExportStl`](#STL.ExportStl)                                 | Export STL data.                                                                            |
| [`GetAPIName`](#STL.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#STL.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#STL.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#STL.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#STL.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#STL.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#STL.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#STL.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#STL.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#STL.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#STL.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#STL.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#STL.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#STL.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#STL.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#STL.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#STL.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`ImportSTL`](#STL.ImportSTL)                                 | Run the ImportSTL action.                                                                   |
| [`InitializeLifetimeService`](#STL.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#STL.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#STL.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#STL.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#STL.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#STL.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#STL.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#STL.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#STL.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#STL.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#STL.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#STL.ClsId)                                       | ClsId property.                                               |
| [`Color`](#Color)             | Gets or sets the Color.                                       |
| [`Comments`](#STL.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#STL.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#STL.Figures)                                   | Gets the list of associated figures.                          |
| [`FileName`](#STL.FileName)                                 | Gets or sets the FileName.                                    |
| [`GroupingFolder`](#STL.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#STL.IconName)                                 | IconName property.                                            |
| [`Images`](#STL.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#STL.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#STL.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LengthUnits`](#STL.LengthUnits)                           | Gets or sets the LengthUnits.                                 |
| [`Name`](#STL.Name)                                         | Name property.                                                |
| [`ObjectId`](#STL.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#STL.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#STL.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#STL.Parent)                                     | Parent property.                                              |
| [`Properties`](#STL.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#STL.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`ShowAlways`](#STL.ShowAlways)                             | Gets or sets the ShowAlways.                                  |
| [`State`](#STL.State)                                       | State property.                                               |
| [`Statistics`](#STL.Statistics)                             | Gets the Statistics.                                          |
| [`Suppressed`](#STL.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#STL.TransferableObjectId)         | TransferableObjectId property.                                |
| [`TranslateX`](#STL.TranslateX)                             | Gets or sets the TranslateX.                                  |
| [`TranslateY`](#STL.TranslateY)                             | Gets or sets the TranslateY.                                  |
| [`TranslateZ`](#STL.TranslateZ)                             | Gets or sets the TranslateZ.                                  |
| [`VisibleProperties`](#STL.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="STL.AttachedRefs"></a>

### *property* STL.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="STL.Children"></a>

### *property* STL.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="STL.ClsId"></a>

### *property* STL.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="STL.Color"></a>

### *property* STL.Color *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Color.

<!-- !! processed by numpydoc !! -->

<a id="STL.Comments"></a>

### *property* STL.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="STL.DataModelObjectCategory"></a>

### *property* STL.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="STL.Figures"></a>

### *property* STL.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="STL.FileName"></a>

### *property* STL.FileName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FileName.

<!-- !! processed by numpydoc !! -->

<a id="STL.GroupingFolder"></a>

### *property* STL.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="STL.IconName"></a>

### *property* STL.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="STL.Images"></a>

### *property* STL.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="STL.ImportableObjectSourceId"></a>

### *property* STL.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="STL.InternalObject"></a>

### *property* STL.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="STL.LengthUnits"></a>

### *property* STL.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="STL.Name"></a>

### *property* STL.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="STL.ObjectId"></a>

### *property* STL.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="STL.ObjectState"></a>

### *property* STL.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="STL.ObjectTags"></a>

### *property* STL.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="STL.Parent"></a>

### *property* STL.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="STL.Properties"></a>

### *property* STL.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="STL.ReadOnly"></a>

### *property* STL.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="STL.ShowAlways"></a>

### *property* STL.ShowAlways *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="STL.State"></a>

### *property* STL.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="STL.Statistics"></a>

### *property* STL.Statistics *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="STL.Suppressed"></a>

### *property* STL.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="STL.TransferableObjectId"></a>

### *property* STL.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="STL.TranslateX"></a>

### *property* STL.TranslateX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslateX.

<!-- !! processed by numpydoc !! -->

<a id="STL.TranslateY"></a>

### *property* STL.TranslateY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslateY.

<!-- !! processed by numpydoc !! -->

<a id="STL.TranslateZ"></a>

### *property* STL.TranslateZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslateZ.

<!-- !! processed by numpydoc !! -->

<a id="STL.VisibleProperties"></a>

### *property* STL.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="STL.Activate"></a>

### STL.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddComment"></a>

### STL.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddFigure"></a>

### STL.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddImage"></a>

### STL.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="STL.Copy"></a>

### STL.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="STL.CopyTo"></a>

### STL.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="STL.CreateObjRef"></a>

### STL.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="STL.CreateParameter"></a>

### STL.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="STL.Cut"></a>

### STL.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="STL.Delete"></a>

### STL.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="STL.Duplicate"></a>

### STL.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="STL.Equals"></a>

### STL.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="STL.ExportStl"></a>

### STL.ExportStl(filename: [str](https://docs.python.org/3/builtins/stdtypes.html#str), progress: [Ansys.Mechanical.Application.Progress](../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Progress)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export STL data.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetAPIName"></a>

### STL.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetAllProperties"></a>

### STL.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetChildren"></a>

### STL.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### STL.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetDetailsView"></a>

### STL.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetEnumName"></a>

### STL.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="STL.GetHashCode"></a>

### STL.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetIconFile"></a>

### STL.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetLifetimeService"></a>

### STL.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetObjectData"></a>

### STL.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetParameter"></a>

### STL.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetPath"></a>

### STL.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetPropertyName"></a>

### STL.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetPropertyValue"></a>

### STL.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetVisibleProperties"></a>

### STL.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetVisiblePropertyNames"></a>

### STL.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="STL.GroupAllSimilarChildren"></a>

### STL.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="STL.GroupSimilarObjects"></a>

### STL.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="STL.ImportSTL"></a>

### STL.ImportSTL() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="STL.InitializeLifetimeService"></a>

### STL.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="STL.IsPropertyEditable"></a>

### STL.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### STL.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="STL.IsPropertyVisible"></a>

### STL.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### STL.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="STL.Paste"></a>

### STL.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="STL.PropertyByAPIName"></a>

### STL.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="STL.PropertyById"></a>

### STL.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="STL.PropertyByName"></a>

### STL.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="STL.RemoveFromGroup"></a>

### STL.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="STL.RemoveParameter"></a>

### STL.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

