# `GeometryFileContainer`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GeometryFileContainer"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GeometryFileContainer(internalObject: Any)

<a id="GeometryFileContainer"></a>

### *class* GeometryFileContainer(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GeometryFileContainer.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GeometryFileContainer.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#GeometryFileContainer.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#GeometryFileContainer.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#GeometryFileContainer.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#GeometryFileContainer.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GeometryFileContainer.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GeometryFileContainer.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GeometryFileContainer.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GeometryFileContainer.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#GeometryFileContainer.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#GeometryFileContainer.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GeometryFileContainer.Equals)                                       | Equals method.                                                                              |
| [`ExportStl`](#GeometryFileContainer.ExportStl)                                 | Export STL data.                                                                            |
| [`GetAPIName`](#GeometryFileContainer.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GeometryFileContainer.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#GeometryFileContainer.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GeometryFileContainer.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GeometryFileContainer.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#GeometryFileContainer.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#GeometryFileContainer.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GeometryFileContainer.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GeometryFileContainer.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#GeometryFileContainer.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GeometryFileContainer.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#GeometryFileContainer.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GeometryFileContainer.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#GeometryFileContainer.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GeometryFileContainer.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GeometryFileContainer.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GeometryFileContainer.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`ImportSTL`](#GeometryFileContainer.ImportSTL)                                 | Run the ImportSTL action.                                                                   |
| [`InitializeLifetimeService`](#GeometryFileContainer.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GeometryFileContainer.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GeometryFileContainer.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#GeometryFileContainer.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#GeometryFileContainer.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#GeometryFileContainer.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#GeometryFileContainer.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GeometryFileContainer.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GeometryFileContainer.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#GeometryFileContainer.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#GeometryFileContainer.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#GeometryFileContainer.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#GeometryFileContainer.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GeometryFileContainer.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#GeometryFileContainer.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#GeometryFileContainer.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#GeometryFileContainer.IconName)                                 | IconName property.                                            |
| [`Images`](#GeometryFileContainer.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#GeometryFileContainer.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#GeometryFileContainer.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LengthUnits`](#GeometryFileContainer.LengthUnits)                           | Gets or sets the LengthUnits.                                 |
| [`Name`](#GeometryFileContainer.Name)                                         | Name property.                                                |
| [`ObjectId`](#GeometryFileContainer.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#GeometryFileContainer.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#GeometryFileContainer.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#GeometryFileContainer.Parent)                                     | Parent property.                                              |
| [`Properties`](#GeometryFileContainer.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GeometryFileContainer.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`ShowAlways`](#GeometryFileContainer.ShowAlways)                             | Gets or sets the ShowAlways.                                  |
| [`State`](#GeometryFileContainer.State)                                       | State property.                                               |
| [`Statistics`](#GeometryFileContainer.Statistics)                             | Gets the Statistics.                                          |
| [`Suppressed`](#GeometryFileContainer.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#GeometryFileContainer.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#GeometryFileContainer.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeometryFileContainer.AttachedRefs"></a>

### *property* GeometryFileContainer.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Children"></a>

### *property* GeometryFileContainer.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ClsId"></a>

### *property* GeometryFileContainer.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Comments"></a>

### *property* GeometryFileContainer.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.DataModelObjectCategory"></a>

### *property* GeometryFileContainer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Figures"></a>

### *property* GeometryFileContainer.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GroupingFolder"></a>

### *property* GeometryFileContainer.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.IconName"></a>

### *property* GeometryFileContainer.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Images"></a>

### *property* GeometryFileContainer.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ImportableObjectSourceId"></a>

### *property* GeometryFileContainer.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.InternalObject"></a>

### *property* GeometryFileContainer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.LengthUnits"></a>

### *property* GeometryFileContainer.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Name"></a>

### *property* GeometryFileContainer.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ObjectId"></a>

### *property* GeometryFileContainer.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ObjectState"></a>

### *property* GeometryFileContainer.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ObjectTags"></a>

### *property* GeometryFileContainer.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Parent"></a>

### *property* GeometryFileContainer.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Properties"></a>

### *property* GeometryFileContainer.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ReadOnly"></a>

### *property* GeometryFileContainer.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ShowAlways"></a>

### *property* GeometryFileContainer.ShowAlways *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.State"></a>

### *property* GeometryFileContainer.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Statistics"></a>

### *property* GeometryFileContainer.Statistics *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Suppressed"></a>

### *property* GeometryFileContainer.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.TransferableObjectId"></a>

### *property* GeometryFileContainer.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.VisibleProperties"></a>

### *property* GeometryFileContainer.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryFileContainer.Activate"></a>

### GeometryFileContainer.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddComment"></a>

### GeometryFileContainer.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddFigure"></a>

### GeometryFileContainer.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddImage"></a>

### GeometryFileContainer.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Copy"></a>

### GeometryFileContainer.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.CopyTo"></a>

### GeometryFileContainer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.CreateObjRef"></a>

### GeometryFileContainer.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.CreateParameter"></a>

### GeometryFileContainer.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Cut"></a>

### GeometryFileContainer.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Delete"></a>

### GeometryFileContainer.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Duplicate"></a>

### GeometryFileContainer.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Equals"></a>

### GeometryFileContainer.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ExportStl"></a>

### GeometryFileContainer.ExportStl(filename: [str](https://docs.python.org/3/builtins/stdtypes.html#str), progress: [Ansys.Mechanical.Application.Progress](../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Progress)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export STL data.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetAPIName"></a>

### GeometryFileContainer.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetAllProperties"></a>

### GeometryFileContainer.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetChildren"></a>

### GeometryFileContainer.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GeometryFileContainer.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetDetailsView"></a>

### GeometryFileContainer.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetEnumName"></a>

### GeometryFileContainer.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetHashCode"></a>

### GeometryFileContainer.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetIconFile"></a>

### GeometryFileContainer.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetLifetimeService"></a>

### GeometryFileContainer.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetObjectData"></a>

### GeometryFileContainer.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetParameter"></a>

### GeometryFileContainer.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetPath"></a>

### GeometryFileContainer.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetPropertyName"></a>

### GeometryFileContainer.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetPropertyValue"></a>

### GeometryFileContainer.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetVisibleProperties"></a>

### GeometryFileContainer.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetVisiblePropertyNames"></a>

### GeometryFileContainer.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GroupAllSimilarChildren"></a>

### GeometryFileContainer.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GroupSimilarObjects"></a>

### GeometryFileContainer.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ImportSTL"></a>

### GeometryFileContainer.ImportSTL() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.InitializeLifetimeService"></a>

### GeometryFileContainer.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.IsPropertyEditable"></a>

### GeometryFileContainer.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeometryFileContainer.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.IsPropertyVisible"></a>

### GeometryFileContainer.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GeometryFileContainer.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Paste"></a>

### GeometryFileContainer.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.PropertyByAPIName"></a>

### GeometryFileContainer.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.PropertyById"></a>

### GeometryFileContainer.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.PropertyByName"></a>

### GeometryFileContainer.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.RemoveFromGroup"></a>

### GeometryFileContainer.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.RemoveParameter"></a>

### GeometryFileContainer.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

