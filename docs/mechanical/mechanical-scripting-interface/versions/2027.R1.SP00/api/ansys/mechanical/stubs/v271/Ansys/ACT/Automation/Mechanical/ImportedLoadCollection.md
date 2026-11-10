# `ImportedLoadCollection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoadCollection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoadCollection(internalObject: Any)

<a id="ImportedLoadCollection"></a>

### *class* ImportedLoadCollection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines an Imported Load Collection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedLoadCollection.Activate)                                                                             | Activate the current object.                                                                |
| [`AddComment`](#ImportedLoadCollection.AddComment)                                                                         | Creates a new child Comment.                                                                |
| [`AddConvectionBCToImportedLoadCollection`](#ImportedLoadCollection.AddConvectionBCToImportedLoadCollection)               | Adds a Convection boundary condition.                                                       |
| [`AddDisplacementBCToImportedLoadCollection`](#ImportedLoadCollection.AddDisplacementBCToImportedLoadCollection)           | Adds a Displacement boundary condition.                                                     |
| [`AddFigure`](#ImportedLoadCollection.AddFigure)                                                                           | Creates a new child Figure.                                                                 |
| [`AddForceBCToImportedLoadCollection`](#ImportedLoadCollection.AddForceBCToImportedLoadCollection)                         | Adds a Force boundary condition.                                                            |
| [`AddHeatFluxBCToImportedLoadCollection`](#ImportedLoadCollection.AddHeatFluxBCToImportedLoadCollection)                   | Adds a Heat Flux boundary condition.                                                        |
| [`AddImage`](#ImportedLoadCollection.AddImage)                                                                             | Creates a new child Image.                                                                  |
| [`AddMomentBCToImportedLoadCollection`](#ImportedLoadCollection.AddMomentBCToImportedLoadCollection)                       | Adds a Moment boundary condition.                                                           |
| [`AddPressureBCToImportedLoadCollection`](#ImportedLoadCollection.AddPressureBCToImportedLoadCollection)                   | Adds a Pressure boundary condition.                                                         |
| [`AddRotationBCToImportedLoadCollection`](#ImportedLoadCollection.AddRotationBCToImportedLoadCollection)                   | Adds a Rotation boundary condition.                                                         |
| [`AddTemperatureBCToImportedLoadCollection`](#ImportedLoadCollection.AddTemperatureBCToImportedLoadCollection)             | Adds a Temperature boundary condition.                                                      |
| [`AddVoltageBCToImportedLoadCollection`](#ImportedLoadCollection.AddVoltageBCToImportedLoadCollection)                     | Adds a Voltage boundary condition.                                                          |
| [`CheckRow`](#ImportedLoadCollection.CheckRow)                                                                             | Selects the row, then checks or unchecks it.                                                |
| [`CheckRowNoSelect`](#ImportedLoadCollection.CheckRowNoSelect)                                                             | Checks or unchecks the row without selecting it first.                                      |
| [`Copy`](#ImportedLoadCollection.Copy)                                                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImportedLoadCollection.CopyTo)                                                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImportedLoadCollection.CreateObjRef)                                                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImportedLoadCollection.CreateParameter)                                                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImportedLoadCollection.Cut)                                                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ImportedLoadCollection.Delete)                                                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#ImportedLoadCollection.Duplicate)                                                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImportedLoadCollection.Equals)                                                                                 | Equals method.                                                                              |
| [`GetAPIName`](#ImportedLoadCollection.GetAPIName)                                                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImportedLoadCollection.GetAllProperties)                                                             | GetAllProperties method.                                                                    |
| [`GetCellValue`](#ImportedLoadCollection.GetCellValue)                                                                     | Returns the text of the cell at the given 1-based page-relative                             |
| [`GetChildren`](#ImportedLoadCollection.GetChildren)                                                                       | Gets the list of children, filtered by type.                                                |
| [`GetColumnCount`](#ImportedLoadCollection.GetColumnCount)                                                                 | Returns the number of columns.                                                              |
| [`GetColumnHeaders`](#ImportedLoadCollection.GetColumnHeaders)                                                             | GetColumnHeaders method.                                                                    |
| [`GetDetailsView`](#ImportedLoadCollection.GetDetailsView)                                                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImportedLoadCollection.GetEnumName)                                                                       | Enum name bound to value                                                                    |
| [`GetEnumerator`](#ImportedLoadCollection.GetEnumerator)                                                                   | GetEnumerator method.                                                                       |
| [`GetHashCode`](#ImportedLoadCollection.GetHashCode)                                                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImportedLoadCollection.GetIconFile)                                                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImportedLoadCollection.GetLifetimeService)                                                         | GetLifetimeService method.                                                                  |
| [`GetObject`](#ImportedLoadCollection.GetObject)                                                                           | Get the row object                                                                          |
| [`GetObjectData`](#ImportedLoadCollection.GetObjectData)                                                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#ImportedLoadCollection.GetParameter)                                                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImportedLoadCollection.GetPath)                                                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#ImportedLoadCollection.GetPropertyName)                                                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImportedLoadCollection.GetPropertyValue)                                                             | GetPropertyValue method.                                                                    |
| [`GetRowCount`](#ImportedLoadCollection.GetRowCount)                                                                       | Returns the number of visible rows on the current page.                                     |
| [`GetTotalVisibleRowCount`](#ImportedLoadCollection.GetTotalVisibleRowCount)                                               | Returns the total number of visible rows across all pages.                                  |
| [`GetVisibleProperties`](#ImportedLoadCollection.GetVisibleProperties)                                                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImportedLoadCollection.GetVisiblePropertyNames)                                               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImportedLoadCollection.GroupAllSimilarChildren)                                               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedLoadCollection.GroupSimilarObjects)                                                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImportedLoadCollection.InitializeLifetimeService)                                           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImportedLoadCollection.IsPropertyEditable)                                                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImportedLoadCollection.IsPropertyVisible)                                                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImportedLoadCollection.Paste)                                                                                   | Pastes to the current DataModelObject context.                                              |
| [`PerformRowAction`](#ImportedLoadCollection.PerformRowAction)                                                             | Selects the row and executes a worksheet command (PROMOTE, CREATE,                          |
| [`Promote`](#ImportedLoadCollection.Promote)                                                                               | Promote method.                                                                             |
| [`PromoteAll`](#ImportedLoadCollection.PromoteAll)                                                                         | Promote the rows                                                                            |
| [`PropertyByAPIName`](#ImportedLoadCollection.PropertyByAPIName)                                                           | Get a property by its API name.                                                             |
| [`PropertyById`](#ImportedLoadCollection.PropertyById)                                                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#ImportedLoadCollection.PropertyByName)                                                                 | Get a property by its unique name.                                                          |
| [`RemoveConvectionBCFromImportedLoadCollection`](#ImportedLoadCollection.RemoveConvectionBCFromImportedLoadCollection)     | Removes a Convection boundary condition.                                                    |
| [`RemoveDisplacementBCFromImportedLoadCollection`](#ImportedLoadCollection.RemoveDisplacementBCFromImportedLoadCollection) | Removes a Displacement boundary condition.                                                  |
| [`RemoveForceBCFromImportedLoadCollection`](#ImportedLoadCollection.RemoveForceBCFromImportedLoadCollection)               | Removes a Force boundary condition.                                                         |
| [`RemoveFromGroup`](#ImportedLoadCollection.RemoveFromGroup)                                                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveHeatFluxBCFromImportedLoadCollection`](#ImportedLoadCollection.RemoveHeatFluxBCFromImportedLoadCollection)         | Removes a Heat Flux boundary condition.                                                     |
| [`RemoveMomentBCFromImportedLoadCollection`](#ImportedLoadCollection.RemoveMomentBCFromImportedLoadCollection)             | Removes a Moment boundary condition.                                                        |
| [`RemoveParameter`](#ImportedLoadCollection.RemoveParameter)                                                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RemovePressureBCFromImportedLoadCollection`](#ImportedLoadCollection.RemovePressureBCFromImportedLoadCollection)         | Removes a Pressure boundary condition.                                                      |
| [`RemoveRotationBCFromImportedLoadCollection`](#ImportedLoadCollection.RemoveRotationBCFromImportedLoadCollection)         | Removes a Rotation boundary condition.                                                      |
| [`RemoveTemperatureBCFromImportedLoadCollection`](#ImportedLoadCollection.RemoveTemperatureBCFromImportedLoadCollection)   | Removes a Temperature boundary condition.                                                   |
| [`RemoveVoltageBCFromImportedLoadCollection`](#ImportedLoadCollection.RemoveVoltageBCFromImportedLoadCollection)           | Removes a Voltage boundary condition.                                                       |
| [`SelectRows`](#ImportedLoadCollection.SelectRows)                                                                         | Selects the specified rows (1-based page-relative array) and                                |
| [`SetCellValue`](#ImportedLoadCollection.SetCellValue)                                                                     | Sets the cell value at the given 1-based page-relative row and                              |
| [`SetValueOnAllRows`](#ImportedLoadCollection.SetValueOnAllRows)                                                           | Sets the cell value on ALL rows in the collection (across all pages,                        |
| [`SetValueOnAllVisibleRows`](#ImportedLoadCollection.SetValueOnAllVisibleRows)                                             | Sets the cell value on all visible rows on the current page.                                |
| [`SetValueOnSelectedRows`](#ImportedLoadCollection.SetValueOnSelectedRows)                                                 | Sets the cell value on specific rows. Handles edit, combo-box,                              |
| [`SortColumn`](#ImportedLoadCollection.SortColumn)                                                                         | Sorts the worksheet by the given column index.                                              |
| [`WorksheetFunction`](#ImportedLoadCollection.WorksheetFunction)                                                           | Executes a worksheet function: ChangeShow, SetPage, PreviousButton,                         |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImportedLoadCollection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ImportedLoadCollection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ImportedLoadCollection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ImportedLoadCollection.Comments)                                 | Gets the list of associated comments.                         |
| [`Count`](#ImportedLoadCollection.Count)                                       | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedLoadCollection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedLoadCollection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImportedLoadCollection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ImportedLoadCollection.IconName)                                 | IconName property.                                            |
| [`Images`](#ImportedLoadCollection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ImportedLoadCollection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ImportedLoadCollection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Item`](#ImportedLoadCollection.Item)                                         | Item property.                                                |
| [`Name`](#ImportedLoadCollection.Name)                                         | Name property.                                                |
| [`ObjectId`](#ImportedLoadCollection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ImportedLoadCollection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ImportedLoadCollection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ImportedLoadCollection.Parent)                                     | Parent property.                                              |
| [`Properties`](#ImportedLoadCollection.Properties)                             | Gets the list of properties for this object.                  |
| [`PropertyCount`](#ImportedLoadCollection.PropertyCount)                       | Gets the NumberOfColumns.                                     |
| [`ReadOnly`](#ImportedLoadCollection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#ImportedLoadCollection.State)                                       | State property.                                               |
| [`Suppressed`](#ImportedLoadCollection.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#ImportedLoadCollection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ImportedLoadCollection.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedLoadCollection.AttachedRefs"></a>

### *property* ImportedLoadCollection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Children"></a>

### *property* ImportedLoadCollection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.ClsId"></a>

### *property* ImportedLoadCollection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Comments"></a>

### *property* ImportedLoadCollection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Count"></a>

### *property* ImportedLoadCollection.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.DataModelObjectCategory"></a>

### *property* ImportedLoadCollection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Figures"></a>

### *property* ImportedLoadCollection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GroupingFolder"></a>

### *property* ImportedLoadCollection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.IconName"></a>

### *property* ImportedLoadCollection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Images"></a>

### *property* ImportedLoadCollection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.ImportableObjectSourceId"></a>

### *property* ImportedLoadCollection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.InternalObject"></a>

### *property* ImportedLoadCollection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSImportedLoadCollectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Item"></a>

### *property* ImportedLoadCollection.Item *: [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Name"></a>

### *property* ImportedLoadCollection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.ObjectId"></a>

### *property* ImportedLoadCollection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.ObjectState"></a>

### *property* ImportedLoadCollection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.ObjectTags"></a>

### *property* ImportedLoadCollection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Parent"></a>

### *property* ImportedLoadCollection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Properties"></a>

### *property* ImportedLoadCollection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.PropertyCount"></a>

### *property* ImportedLoadCollection.PropertyCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfColumns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.ReadOnly"></a>

### *property* ImportedLoadCollection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.State"></a>

### *property* ImportedLoadCollection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Suppressed"></a>

### *property* ImportedLoadCollection.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.TransferableObjectId"></a>

### *property* ImportedLoadCollection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.VisibleProperties"></a>

### *property* ImportedLoadCollection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedLoadCollection.Activate"></a>

### ImportedLoadCollection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddComment"></a>

### ImportedLoadCollection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddConvectionBCToImportedLoadCollection"></a>

### ImportedLoadCollection.AddConvectionBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddDisplacementBCToImportedLoadCollection"></a>

### ImportedLoadCollection.AddDisplacementBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddFigure"></a>

### ImportedLoadCollection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddForceBCToImportedLoadCollection"></a>

### ImportedLoadCollection.AddForceBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddHeatFluxBCToImportedLoadCollection"></a>

### ImportedLoadCollection.AddHeatFluxBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddImage"></a>

### ImportedLoadCollection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddMomentBCToImportedLoadCollection"></a>

### ImportedLoadCollection.AddMomentBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddPressureBCToImportedLoadCollection"></a>

### ImportedLoadCollection.AddPressureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddRotationBCToImportedLoadCollection"></a>

### ImportedLoadCollection.AddRotationBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddTemperatureBCToImportedLoadCollection"></a>

### ImportedLoadCollection.AddTemperatureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.AddVoltageBCToImportedLoadCollection"></a>

### ImportedLoadCollection.AddVoltageBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.CheckRow"></a>

### ImportedLoadCollection.CheckRow(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Selects the row, then checks or unchecks it.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.CheckRowNoSelect"></a>

### ImportedLoadCollection.CheckRowNoSelect(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Checks or unchecks the row without selecting it first.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Copy"></a>

### ImportedLoadCollection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.CopyTo"></a>

### ImportedLoadCollection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.CreateObjRef"></a>

### ImportedLoadCollection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.CreateParameter"></a>

### ImportedLoadCollection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Cut"></a>

### ImportedLoadCollection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Delete"></a>

### ImportedLoadCollection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Duplicate"></a>

### ImportedLoadCollection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Equals"></a>

### ImportedLoadCollection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetAPIName"></a>

### ImportedLoadCollection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetAllProperties"></a>

### ImportedLoadCollection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetCellValue"></a>

### ImportedLoadCollection.GetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Returns the text of the cell at the given 1-based page-relative
row and column. For promoted rows, returns the promoted object's
Name when column == 1.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetChildren"></a>

### ImportedLoadCollection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedLoadCollection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetColumnCount"></a>

### ImportedLoadCollection.GetColumnCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of columns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetColumnHeaders"></a>

### ImportedLoadCollection.GetColumnHeaders() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetColumnHeaders method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetDetailsView"></a>

### ImportedLoadCollection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetEnumName"></a>

### ImportedLoadCollection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetEnumerator"></a>

### ImportedLoadCollection.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetHashCode"></a>

### ImportedLoadCollection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetIconFile"></a>

### ImportedLoadCollection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetLifetimeService"></a>

### ImportedLoadCollection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetObject"></a>

### ImportedLoadCollection.GetObject(oneBasedIRow: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)

Get the row object

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetObjectData"></a>

### ImportedLoadCollection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetParameter"></a>

### ImportedLoadCollection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetPath"></a>

### ImportedLoadCollection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetPropertyName"></a>

### ImportedLoadCollection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetPropertyValue"></a>

### ImportedLoadCollection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetRowCount"></a>

### ImportedLoadCollection.GetRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetTotalVisibleRowCount"></a>

### ImportedLoadCollection.GetTotalVisibleRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the total number of visible rows across all pages.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetVisibleProperties"></a>

### ImportedLoadCollection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GetVisiblePropertyNames"></a>

### ImportedLoadCollection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GroupAllSimilarChildren"></a>

### ImportedLoadCollection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.GroupSimilarObjects"></a>

### ImportedLoadCollection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.InitializeLifetimeService"></a>

### ImportedLoadCollection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.IsPropertyEditable"></a>

### ImportedLoadCollection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedLoadCollection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.IsPropertyVisible"></a>

### ImportedLoadCollection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedLoadCollection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Paste"></a>

### ImportedLoadCollection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.PerformRowAction"></a>

### ImportedLoadCollection.PerformRowAction(row: [int](https://docs.python.org/3/builtins/functions.html#int), option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), item: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the row and executes a worksheet command (PROMOTE, CREATE,
GOTO_PROMOTED_ITEM, CHECK, UNCHECK) with the given item index.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.Promote"></a>

### ImportedLoadCollection.Promote(iRows: Iterable[[int](https://docs.python.org/3/builtins/functions.html#int)], iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.PromoteAll"></a>

### ImportedLoadCollection.PromoteAll(iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote the rows

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.PropertyByAPIName"></a>

### ImportedLoadCollection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.PropertyById"></a>

### ImportedLoadCollection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.PropertyByName"></a>

### ImportedLoadCollection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemoveConvectionBCFromImportedLoadCollection"></a>

### ImportedLoadCollection.RemoveConvectionBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemoveDisplacementBCFromImportedLoadCollection"></a>

### ImportedLoadCollection.RemoveDisplacementBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemoveForceBCFromImportedLoadCollection"></a>

### ImportedLoadCollection.RemoveForceBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemoveFromGroup"></a>

### ImportedLoadCollection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemoveHeatFluxBCFromImportedLoadCollection"></a>

### ImportedLoadCollection.RemoveHeatFluxBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemoveMomentBCFromImportedLoadCollection"></a>

### ImportedLoadCollection.RemoveMomentBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemoveParameter"></a>

### ImportedLoadCollection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemovePressureBCFromImportedLoadCollection"></a>

### ImportedLoadCollection.RemovePressureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemoveRotationBCFromImportedLoadCollection"></a>

### ImportedLoadCollection.RemoveRotationBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemoveTemperatureBCFromImportedLoadCollection"></a>

### ImportedLoadCollection.RemoveTemperatureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.RemoveVoltageBCFromImportedLoadCollection"></a>

### ImportedLoadCollection.RemoveVoltageBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.SelectRows"></a>

### ImportedLoadCollection.SelectRows(rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the specified rows (1-based page-relative array) and
deselects all others. Accepts an int array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.SetCellValue"></a>

### ImportedLoadCollection.SetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value at the given 1-based page-relative row and
column. Handles read-only, edit, combo-box, and context-menu
column types automatically.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.SetValueOnAllRows"></a>

### ImportedLoadCollection.SetValueOnAllRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on ALL rows in the collection (across all pages,
including rows hidden by the current page/filter).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.SetValueOnAllVisibleRows"></a>

### ImportedLoadCollection.SetValueOnAllVisibleRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the cell value on all visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.SetValueOnSelectedRows"></a>

### ImportedLoadCollection.SetValueOnSelectedRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str), rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on specific rows. Handles edit, combo-box,
and context-menu column types automatically.
Rows is a 1-based page-relative array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.SortColumn"></a>

### ImportedLoadCollection.SortColumn(iCol: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sorts the worksheet by the given column index.
Toggles sort direction on repeated calls (off → ascending → descending).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedLoadCollection.WorksheetFunction"></a>

### ImportedLoadCollection.WorksheetFunction(option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Executes a worksheet function: ChangeShow, SetPage, PreviousButton,
NextButton, ResetButton, SelectAllOnPage.
```

<!-- !! processed by numpydoc !! -->

