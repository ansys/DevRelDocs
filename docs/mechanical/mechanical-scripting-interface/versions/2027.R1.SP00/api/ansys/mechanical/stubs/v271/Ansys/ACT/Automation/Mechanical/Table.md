# `Table`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Table"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Table(internalObject: Any)

<a id="Table"></a>

### *class* Table(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Table.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Table.Activate)                                   | Activate the current object.                                                                |
| [`Add`](#Table.Add)                                             |                                                                                             |
| [`AddComment`](#Table.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Table.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Table.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Clear`](#Table.Clear)                                         |                                                                                             |
| [`Contains`](#Table.Contains)                                   |                                                                                             |
| [`Copy`](#Table.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Table.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateAndAddColumn`](#Table.CreateAndAddColumn)               | Creates and adds a new column (data series) to the table.                                   |
| [`CreateObjRef`](#Table.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Table.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Table.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#Table.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Table.Equals)                                       | Equals method.                                                                              |
| [`ExecutePropertySetViaApi`](#Table.ExecutePropertySetViaApi)   |                                                                                             |
| [`GetAPIName`](#Table.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Table.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Table.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDataURI`](#Table.GetDataURI)                               | Gets the data URI from which the tabular data was imported.                                 |
| [`GetDetailsView`](#Table.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Table.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetEnumerator`](#Table.GetEnumerator)                         |                                                                                             |
| [`GetHashCode`](#Table.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Table.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetImportSettings`](#Table.GetImportSettings)                 | Get the settings used for an import operation.                                              |
| [`GetLifetimeService`](#Table.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Table.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Table.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Table.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Table.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Table.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetRow`](#Table.GetRow)                                       |                                                                                             |
| [`GetVisibleProperties`](#Table.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Table.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Table.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Table.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`Import`](#Table.Import)                                       | Import data from the provided resource into the table as specified by                       |
| [`InitializeLifetimeService`](#Table.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`Insert`](#Table.Insert)                                       |                                                                                             |
| [`IsPropertyEditable`](#Table.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Table.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`MapToInternalVariableType`](#Table.MapToInternalVariableType) | MapToInternalVariableType method.                                                           |
| [`Paste`](#Table.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Table.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Table.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Table.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`Remove`](#Table.Remove)                                       |                                                                                             |
| [`RemoveFromGroup`](#Table.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Table.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`TryInsertRow`](#Table.TryInsertRow)                           |                                                                                             |
| [`TryRemoveRow`](#Table.TryRemoveRow)                           |                                                                                             |

### Properties

| Name | Description |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`APDLName`](#Table.APDLName)                               | Gets or sets the name of the Table when explicitly written to the APDL input file.     |
| [`AttachedRefs`](#Table.AttachedRefs)                       | AttachedRefs property.                                                                 |
| [`Children`](#Table.Children)                               | Gets the list of children.                                                             |
| [`ClsId`](#Table.ClsId)                                     | ClsId property.                                                                        |
| [`ColumnNames`](#Table.ColumnNames)                         |                                                                                        |
| [`Columns`](#Table.Columns)                                 |                                                                                        |
| [`Comments`](#Table.Comments)                               | Gets the list of associated comments.                                                  |
| [`Count`](#Table.Count)                                     |                                                                                        |
| [`DataModelObjectCategory`](#Table.DataModelObjectCategory) | Gets the current DataModelObject's category.                                           |
| [`Figures`](#Table.Figures)                                 | Gets the list of associated figures.                                                   |
| [`GroupingFolder`](#Table.GroupingFolder)                   | GroupingFolder property.                                                               |
| [`IconName`](#Table.IconName)                               | IconName property.                                                                     |
| [`Images`](#Table.Images)                                   | Gets the list of associated images.                                                    |
| [`InternalObject`](#Table.InternalObject)                   | Gets the internal object. For advanced usage only.                                     |
| [`IsFixedColumnCount`](#Table.IsFixedColumnCount)           |                                                                                        |
| [`IsFixedRowCount`](#Table.IsFixedRowCount)                 |                                                                                        |
| [`IsImported`](#Table.IsImported)                           | Returns whether the Table has any imported columns.                                    |
| [`IsReadOnly`](#Table.IsReadOnly)                           |                                                                                        |
| [`IsStrictSizing`](#Table.IsStrictSizing)                   | Whether column add/create/import/refresh operations cannot grow the number of rows.    |
| [`Item`](#Table.Item)                                       | Item property.                                                                         |
| [`Metadata`](#Table.Metadata)                               |                                                                                        |
| [`Name`](#Table.Name)                                       |                                                                                        |
| [`ObjectId`](#Table.ObjectId)                               | ObjectId property.                                                                     |
| [`ObjectState`](#Table.ObjectState)                         | ObjectState property.                                                                  |
| [`ObjectTags`](#Table.ObjectTags)                           | ObjectTags property.                                                                   |
| [`Parent`](#Table.Parent)                                   | Parent property.                                                                       |
| [`PathType`](#Table.PathType)                               | Gets or sets the PathType.                                                             |
| [`Properties`](#Table.Properties)                           | Gets the list of properties for this object.                                           |
| [`RefreshImportOn`](#Table.RefreshImportOn)                 | Gets or sets the RefreshImportOn.                                                      |
| [`RowCount`](#Table.RowCount)                               |                                                                                        |
| [`SendToSolver`](#Table.SendToSolver)                       | Get whether the Table will be explicitly written to the APDL input file.               |
| [`SpatialCoordinateSystem`](#Table.SpatialCoordinateSystem) | Gets or sets the coordinate system applied to the Table's spatial independent columns. |
| [`State`](#Table.State)                                     | State property.                                                                        |
| [`VisibleProperties`](#Table.VisibleProperties)             | Gets the list of properties that are visible for this object.                          |

<a id="property-detail"></a>

## Property detail

<a id="Table.APDLName"></a>

### *property* Table.APDLName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the name of the Table when explicitly written to the APDL input file.

<!-- !! processed by numpydoc !! -->

<a id="Table.AttachedRefs"></a>

### *property* Table.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Table.Children"></a>

### *property* Table.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Table.ClsId"></a>

### *property* Table.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Table.ColumnNames"></a>

### *property* Table.ColumnNames *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="Table.Columns"></a>

### *property* Table.Columns *: List[[Ansys.Mechanical.Interfaces.IDataSeries](../../../Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.IDataSeries)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="Table.Comments"></a>

### *property* Table.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Table.Count"></a>

### *property* Table.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="Table.DataModelObjectCategory"></a>

### *property* Table.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Table.Figures"></a>

### *property* Table.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Table.GroupingFolder"></a>

### *property* Table.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Table.IconName"></a>

### *property* Table.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Table.Images"></a>

### *property* Table.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Table.InternalObject"></a>

### *property* Table.InternalObject *: Ansys.Common.Interop.DSTableObjects.IDSTableAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Table.IsFixedColumnCount"></a>

### *property* Table.IsFixedColumnCount *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="Table.IsFixedRowCount"></a>

### *property* Table.IsFixedRowCount *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="Table.IsImported"></a>

### *property* Table.IsImported *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns whether the Table has any imported columns.

<!-- !! processed by numpydoc !! -->

<a id="Table.IsReadOnly"></a>

### *property* Table.IsReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="Table.IsStrictSizing"></a>

### *property* Table.IsStrictSizing *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Whether column add/create/import/refresh operations cannot grow the number of rows.

> will always be true when  is

true.

When  is true, any operation that would change the table
row count will fail. This includes operations such as creating and adding a column,
importing columns.

<!-- !! processed by numpydoc !! -->

<a id="Table.Item"></a>

### *property* Table.Item *: [Ansys.Mechanical.Interfaces.IDataSeries](../../../Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.IDataSeries) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="Table.Metadata"></a>

### *property* Table.Metadata *: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="Table.Name"></a>

### *property* Table.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="Table.ObjectId"></a>

### *property* Table.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Table.ObjectState"></a>

### *property* Table.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Table.ObjectTags"></a>

### *property* Table.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Table.Parent"></a>

### *property* Table.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Table.PathType"></a>

### *property* Table.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../../../Mechanical/DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PathType.

<!-- !! processed by numpydoc !! -->

<a id="Table.Properties"></a>

### *property* Table.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Table.RefreshImportOn"></a>

### *property* Table.RefreshImportOn *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.TableRefreshImportOn](../../../Mechanical/DataModel/MechanicalEnums/Table/TableRefreshImportOn.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.TableRefreshImportOn) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RefreshImportOn.

<!-- !! processed by numpydoc !! -->

<a id="Table.RowCount"></a>

### *property* Table.RowCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="Table.SendToSolver"></a>

### *property* Table.SendToSolver *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get whether the Table will be explicitly written to the APDL input file.

<!-- !! processed by numpydoc !! -->

<a id="Table.SpatialCoordinateSystem"></a>

### *property* Table.SpatialCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the coordinate system applied to the Table's spatial independent columns.

<!-- !! processed by numpydoc !! -->

<a id="Table.State"></a>

### *property* Table.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Table.VisibleProperties"></a>

### *property* Table.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Table.Activate"></a>

### Table.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Table.Add"></a>

### Table.Add(dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](../../../Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.IDataSeries)) → [None](https://docs.python.org/3/builtins/constants.html#None)

<a id="Table.AddComment"></a>

### Table.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Table.AddFigure"></a>

### Table.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Table.AddImage"></a>

### Table.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Table.Clear"></a>

### Table.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

<a id="Table.Contains"></a>

### Table.Contains(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

<a id="Table.Copy"></a>

### Table.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Table.CopyTo"></a>

### Table.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Table.CreateAndAddColumn"></a>

### Table.CreateAndAddColumn(variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../../../Mechanical/DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), data: Iterable, unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str), name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Mechanical.Interfaces.IDataSeries](../../../Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.IDataSeries)

```text
Creates and adds a new column (data series) to the table.

If `data` is provided, the number of rows (length of `data`) must be identical to the
number of rows already in the table. If `data` is not provided, the returned series will
have the same number of rows as the table with default-initialized values. If there are
no rows in the table and `data` is provided, this will initialize the number of rows in
the table to the length of `data`.
```

<!-- !! processed by numpydoc !! -->

<a id="Table.CreateObjRef"></a>

### Table.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Table.CreateParameter"></a>

### Table.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Table.Cut"></a>

### Table.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Table.Duplicate"></a>

### Table.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Table.Equals"></a>

### Table.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Table.ExecutePropertySetViaApi"></a>

### Table.ExecutePropertySetViaApi(propertyName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

<a id="Table.GetAPIName"></a>

### Table.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetAllProperties"></a>

### Table.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetChildren"></a>

### Table.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Table.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetDataURI"></a>

### Table.GetDataURI(newColumn: Ansys.ACT.Automation.Mechanical.Table.Column) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets the data URI from which the tabular data was imported.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetDetailsView"></a>

### Table.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetEnumName"></a>

### Table.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Table.GetEnumerator"></a>

### Table.GetEnumerator() → Iterator[[Ansys.Mechanical.Interfaces.IDataSeries](../../../Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.IDataSeries)]

<a id="Table.GetHashCode"></a>

### Table.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetIconFile"></a>

### Table.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetImportSettings"></a>

### Table.GetImportSettings(newColumn: Ansys.ACT.Automation.Mechanical.Table.Column) → [Ansys.Mechanical.Table.ImportSettingsBase](../../../Mechanical/Table/ImportSettingsBase.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.ImportSettingsBase)

### Table.GetImportSettings(importContract: Ansys.Common.Interop.DSObjects.IDSTableImportContract) → [Ansys.Mechanical.Table.ImportSettingsBase](../../../Mechanical/Table/ImportSettingsBase.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.ImportSettingsBase)

Get the settings used for an import operation.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetLifetimeService"></a>

### Table.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetObjectData"></a>

### Table.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetParameter"></a>

### Table.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetPath"></a>

### Table.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetPropertyName"></a>

### Table.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetPropertyValue"></a>

### Table.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetRow"></a>

### Table.GetRow(rowIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → Iterable

<a id="Table.GetVisibleProperties"></a>

### Table.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetVisiblePropertyNames"></a>

### Table.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Table.GroupAllSimilarChildren"></a>

### Table.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Table.GroupSimilarObjects"></a>

### Table.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Table.Import"></a>

### Table.Import(dataURI: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../../../Mechanical/DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat), settings: [Ansys.Mechanical.Table.ImportSettingsBase](../../../Mechanical/Table/ImportSettingsBase.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.ImportSettingsBase)) → List[[Ansys.Mechanical.Interfaces.IDataSeries](../../../Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.IDataSeries)]

```text
Import data from the provided resource into the table as specified by
format and settings. The column definitions in
settings will be used to define the variable type for each column.
If the table already contains a variable type, that column will be overwritten by the
new definition.

When  is true,  will verify that the
row count of imported data are equivalent to the existing table row count. The
operation will fail if there is a length mismatch. Conversely, when
 is false, a Mechanical warning message will be issued when
any of the data sources are different from each other or the table.

If all the arguments are `null` (Python: `None`) then the stored values will be used,
essentially re-syncing the table data to the external sources.
```

<!-- !! processed by numpydoc !! -->

<a id="Table.InitializeLifetimeService"></a>

### Table.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Table.Insert"></a>

### Table.Insert(columnIndex: [int](https://docs.python.org/3/builtins/functions.html#int), dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](../../../Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.IDataSeries)) → [None](https://docs.python.org/3/builtins/constants.html#None)

<a id="Table.IsPropertyEditable"></a>

### Table.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Table.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Table.IsPropertyVisible"></a>

### Table.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Table.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Table.MapToInternalVariableType"></a>

### Table.MapToInternalVariableType(external: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), classification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../../../Mechanical/DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification)) → Ansys.Mechanical.DataModel.MechanicalEnums.Table.InternalVariableType

MapToInternalVariableType method.

<!-- !! processed by numpydoc !! -->

<a id="Table.Paste"></a>

### Table.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Table.PropertyByAPIName"></a>

### Table.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Table.PropertyById"></a>

### Table.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Table.PropertyByName"></a>

### Table.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Table.Remove"></a>

### Table.Remove(key: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

<a id="Table.RemoveFromGroup"></a>

### Table.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Table.RemoveParameter"></a>

### Table.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Table.TryInsertRow"></a>

### Table.TryInsertRow(rowIndex: [int](https://docs.python.org/3/builtins/functions.html#int), values: Iterable) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

<a id="Table.TryRemoveRow"></a>

### Table.TryRemoveRow(rowIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)


