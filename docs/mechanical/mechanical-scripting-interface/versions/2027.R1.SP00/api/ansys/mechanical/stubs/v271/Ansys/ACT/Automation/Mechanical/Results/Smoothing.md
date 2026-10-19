# `Smoothing`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Smoothing"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.Smoothing(internalObject: Any)

<a id="Smoothing"></a>

### *class* Smoothing(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Smoothing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Smoothing.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Smoothing.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Smoothing.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Smoothing.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Smoothing.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Smoothing.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Smoothing.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Smoothing.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Smoothing.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Smoothing.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Smoothing.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Smoothing.Equals)                                       | Equals method.                                                                              |
| [`Evaluate`](#Smoothing.Evaluate)                                   | Run the Evaluate action.                                                                    |
| [`ExportStl`](#Smoothing.ExportStl)                                 | Export STL data.                                                                            |
| [`GetAPIName`](#Smoothing.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Smoothing.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Smoothing.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Smoothing.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Smoothing.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Smoothing.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Smoothing.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Smoothing.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Smoothing.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Smoothing.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Smoothing.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Smoothing.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Smoothing.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Smoothing.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Smoothing.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Smoothing.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Smoothing.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`ImportSTL`](#Smoothing.ImportSTL)                                 | Run the ImportSTL action.                                                                   |
| [`InitializeLifetimeService`](#Smoothing.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Smoothing.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Smoothing.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Smoothing.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Smoothing.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Smoothing.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Smoothing.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Smoothing.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Smoothing.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Smoothing.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#Smoothing.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#Smoothing.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#Smoothing.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Smoothing.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`ExportModel`](#Smoothing.ExportModel)                           | Gets or sets the ExportModel.                                 |
| [`Figures`](#Smoothing.Figures)                                   | Gets the list of associated figures.                          |
| [`FileName`](#Smoothing.FileName)                                 | Gets the FileName.                                            |
| [`GroupingFolder`](#Smoothing.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#Smoothing.IconName)                                 | IconName property.                                            |
| [`Images`](#Smoothing.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#Smoothing.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#Smoothing.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LengthUnits`](#Smoothing.LengthUnits)                           | Gets or sets the LengthUnits.                                 |
| [`MoveLimit`](#Smoothing.MoveLimit)                               | Gets or sets the MoveLimit.                                   |
| [`Name`](#Smoothing.Name)                                         | Name property.                                                |
| [`ObjectId`](#Smoothing.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#Smoothing.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#Smoothing.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#Smoothing.Parent)                                     | Parent property.                                              |
| [`Properties`](#Smoothing.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Smoothing.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`ShowAlways`](#Smoothing.ShowAlways)                             | Gets or sets the ShowAlways.                                  |
| [`State`](#Smoothing.State)                                       | State property.                                               |
| [`Statistics`](#Smoothing.Statistics)                             | Gets the Statistics.                                          |
| [`Suppressed`](#Smoothing.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#Smoothing.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#Smoothing.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Smoothing.AttachedRefs"></a>

### *property* Smoothing.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Children"></a>

### *property* Smoothing.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ClsId"></a>

### *property* Smoothing.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Comments"></a>

### *property* Smoothing.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.DataModelObjectCategory"></a>

### *property* Smoothing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ExportModel"></a>

### *property* Smoothing.ExportModel *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExportModel.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Figures"></a>

### *property* Smoothing.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.FileName"></a>

### *property* Smoothing.FileName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FileName.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GroupingFolder"></a>

### *property* Smoothing.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.IconName"></a>

### *property* Smoothing.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Images"></a>

### *property* Smoothing.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ImportableObjectSourceId"></a>

### *property* Smoothing.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.InternalObject"></a>

### *property* Smoothing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.LengthUnits"></a>

### *property* Smoothing.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.MoveLimit"></a>

### *property* Smoothing.MoveLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Name"></a>

### *property* Smoothing.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ObjectId"></a>

### *property* Smoothing.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ObjectState"></a>

### *property* Smoothing.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ObjectTags"></a>

### *property* Smoothing.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Parent"></a>

### *property* Smoothing.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Properties"></a>

### *property* Smoothing.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ReadOnly"></a>

### *property* Smoothing.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ShowAlways"></a>

### *property* Smoothing.ShowAlways *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.State"></a>

### *property* Smoothing.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Statistics"></a>

### *property* Smoothing.Statistics *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Suppressed"></a>

### *property* Smoothing.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.TransferableObjectId"></a>

### *property* Smoothing.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.VisibleProperties"></a>

### *property* Smoothing.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Smoothing.Activate"></a>

### Smoothing.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.AddComment"></a>

### Smoothing.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.AddFigure"></a>

### Smoothing.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.AddImage"></a>

### Smoothing.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Copy"></a>

### Smoothing.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.CopyTo"></a>

### Smoothing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.CreateObjRef"></a>

### Smoothing.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.CreateParameter"></a>

### Smoothing.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Cut"></a>

### Smoothing.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Delete"></a>

### Smoothing.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Duplicate"></a>

### Smoothing.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Equals"></a>

### Smoothing.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Evaluate"></a>

### Smoothing.Evaluate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Evaluate action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ExportStl"></a>

### Smoothing.ExportStl(filename: [str](https://docs.python.org/3/builtins/stdtypes.html#str), progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Progress)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export STL data.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetAPIName"></a>

### Smoothing.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetAllProperties"></a>

### Smoothing.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetChildren"></a>

### Smoothing.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Smoothing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetDetailsView"></a>

### Smoothing.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetEnumName"></a>

### Smoothing.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetHashCode"></a>

### Smoothing.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetIconFile"></a>

### Smoothing.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetLifetimeService"></a>

### Smoothing.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetObjectData"></a>

### Smoothing.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetParameter"></a>

### Smoothing.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetPath"></a>

### Smoothing.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetPropertyName"></a>

### Smoothing.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetPropertyValue"></a>

### Smoothing.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetVisibleProperties"></a>

### Smoothing.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetVisiblePropertyNames"></a>

### Smoothing.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GroupAllSimilarChildren"></a>

### Smoothing.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GroupSimilarObjects"></a>

### Smoothing.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ImportSTL"></a>

### Smoothing.ImportSTL() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.InitializeLifetimeService"></a>

### Smoothing.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.IsPropertyEditable"></a>

### Smoothing.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Smoothing.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.IsPropertyVisible"></a>

### Smoothing.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Smoothing.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Paste"></a>

### Smoothing.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.PropertyByAPIName"></a>

### Smoothing.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.PropertyById"></a>

### Smoothing.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.PropertyByName"></a>

### Smoothing.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.RemoveFromGroup"></a>

### Smoothing.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.RemoveParameter"></a>

### Smoothing.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

