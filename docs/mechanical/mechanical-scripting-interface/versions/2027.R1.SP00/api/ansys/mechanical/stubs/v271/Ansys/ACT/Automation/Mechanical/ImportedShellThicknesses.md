# `ImportedShellThicknesses`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedShellThicknesses"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedShellThicknesses(internalObject: Any)

<a id="ImportedShellThicknesses"></a>

### *class* ImportedShellThicknesses(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedShellThicknesses.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedShellThicknesses.Activate)                                                                             | Activate the current object.                                                                |
| [`AddComment`](#ImportedShellThicknesses.AddComment)                                                                         | Creates a new child Comment.                                                                |
| [`AddConvectionBCToImportedLoadCollection`](#ImportedShellThicknesses.AddConvectionBCToImportedLoadCollection)               | Adds a Convection boundary condition.                                                       |
| [`AddDisplacementBCToImportedLoadCollection`](#ImportedShellThicknesses.AddDisplacementBCToImportedLoadCollection)           | Adds a Displacement boundary condition.                                                     |
| [`AddFigure`](#ImportedShellThicknesses.AddFigure)                                                                           | Creates a new child Figure.                                                                 |
| [`AddForceBCToImportedLoadCollection`](#ImportedShellThicknesses.AddForceBCToImportedLoadCollection)                         | Adds a Force boundary condition.                                                            |
| [`AddHeatFluxBCToImportedLoadCollection`](#ImportedShellThicknesses.AddHeatFluxBCToImportedLoadCollection)                   | Adds a Heat Flux boundary condition.                                                        |
| [`AddImage`](#ImportedShellThicknesses.AddImage)                                                                             | Creates a new child Image.                                                                  |
| [`AddMomentBCToImportedLoadCollection`](#ImportedShellThicknesses.AddMomentBCToImportedLoadCollection)                       | Adds a Moment boundary condition.                                                           |
| [`AddPressureBCToImportedLoadCollection`](#ImportedShellThicknesses.AddPressureBCToImportedLoadCollection)                   | Adds a Pressure boundary condition.                                                         |
| [`AddRotationBCToImportedLoadCollection`](#ImportedShellThicknesses.AddRotationBCToImportedLoadCollection)                   | Adds a Rotation boundary condition.                                                         |
| [`AddTemperatureBCToImportedLoadCollection`](#ImportedShellThicknesses.AddTemperatureBCToImportedLoadCollection)             | Adds a Temperature boundary condition.                                                      |
| [`AddVoltageBCToImportedLoadCollection`](#ImportedShellThicknesses.AddVoltageBCToImportedLoadCollection)                     | Adds a Voltage boundary condition.                                                          |
| [`CheckRow`](#ImportedShellThicknesses.CheckRow)                                                                             | Selects the row, then checks or unchecks it.                                                |
| [`CheckRowNoSelect`](#ImportedShellThicknesses.CheckRowNoSelect)                                                             | Checks or unchecks the row without selecting it first.                                      |
| [`Copy`](#ImportedShellThicknesses.Copy)                                                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImportedShellThicknesses.CopyTo)                                                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImportedShellThicknesses.CreateObjRef)                                                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImportedShellThicknesses.CreateParameter)                                                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImportedShellThicknesses.Cut)                                                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ImportedShellThicknesses.Delete)                                                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#ImportedShellThicknesses.Duplicate)                                                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImportedShellThicknesses.Equals)                                                                                 | Equals method.                                                                              |
| [`GetAPIName`](#ImportedShellThicknesses.GetAPIName)                                                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImportedShellThicknesses.GetAllProperties)                                                             | GetAllProperties method.                                                                    |
| [`GetCellValue`](#ImportedShellThicknesses.GetCellValue)                                                                     | Returns the text of the cell at the given 1-based page-relative                             |
| [`GetChildren`](#ImportedShellThicknesses.GetChildren)                                                                       | Gets the list of children, filtered by type.                                                |
| [`GetColumnCount`](#ImportedShellThicknesses.GetColumnCount)                                                                 | Returns the number of columns.                                                              |
| [`GetColumnHeaders`](#ImportedShellThicknesses.GetColumnHeaders)                                                             | GetColumnHeaders method.                                                                    |
| [`GetDetailsView`](#ImportedShellThicknesses.GetDetailsView)                                                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImportedShellThicknesses.GetEnumName)                                                                       | Enum name bound to value                                                                    |
| [`GetEnumerator`](#ImportedShellThicknesses.GetEnumerator)                                                                   | GetEnumerator method.                                                                       |
| [`GetHashCode`](#ImportedShellThicknesses.GetHashCode)                                                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImportedShellThicknesses.GetIconFile)                                                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImportedShellThicknesses.GetLifetimeService)                                                         | GetLifetimeService method.                                                                  |
| [`GetObject`](#ImportedShellThicknesses.GetObject)                                                                           | Get the row object                                                                          |
| [`GetObjectData`](#ImportedShellThicknesses.GetObjectData)                                                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#ImportedShellThicknesses.GetParameter)                                                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImportedShellThicknesses.GetPath)                                                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#ImportedShellThicknesses.GetPropertyName)                                                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImportedShellThicknesses.GetPropertyValue)                                                             | GetPropertyValue method.                                                                    |
| [`GetRowCount`](#ImportedShellThicknesses.GetRowCount)                                                                       | Returns the number of visible rows on the current page.                                     |
| [`GetTotalVisibleRowCount`](#ImportedShellThicknesses.GetTotalVisibleRowCount)                                               | Returns the total number of visible rows across all pages.                                  |
| [`GetVisibleProperties`](#ImportedShellThicknesses.GetVisibleProperties)                                                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImportedShellThicknesses.GetVisiblePropertyNames)                                               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImportedShellThicknesses.GroupAllSimilarChildren)                                               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedShellThicknesses.GroupSimilarObjects)                                                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImportedShellThicknesses.InitializeLifetimeService)                                           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImportedShellThicknesses.IsPropertyEditable)                                                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImportedShellThicknesses.IsPropertyVisible)                                                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImportedShellThicknesses.Paste)                                                                                   | Pastes to the current DataModelObject context.                                              |
| [`PerformRowAction`](#ImportedShellThicknesses.PerformRowAction)                                                             | Selects the row and executes a worksheet command (PROMOTE, CREATE,                          |
| [`Promote`](#ImportedShellThicknesses.Promote)                                                                               | Promote method.                                                                             |
| [`PromoteAll`](#ImportedShellThicknesses.PromoteAll)                                                                         | Promote the rows                                                                            |
| [`PropertyByAPIName`](#ImportedShellThicknesses.PropertyByAPIName)                                                           | Get a property by its API name.                                                             |
| [`PropertyById`](#ImportedShellThicknesses.PropertyById)                                                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#ImportedShellThicknesses.PropertyByName)                                                                 | Get a property by its unique name.                                                          |
| [`RemoveConvectionBCFromImportedLoadCollection`](#ImportedShellThicknesses.RemoveConvectionBCFromImportedLoadCollection)     | Removes a Convection boundary condition.                                                    |
| [`RemoveDisplacementBCFromImportedLoadCollection`](#ImportedShellThicknesses.RemoveDisplacementBCFromImportedLoadCollection) | Removes a Displacement boundary condition.                                                  |
| [`RemoveForceBCFromImportedLoadCollection`](#ImportedShellThicknesses.RemoveForceBCFromImportedLoadCollection)               | Removes a Force boundary condition.                                                         |
| [`RemoveFromGroup`](#ImportedShellThicknesses.RemoveFromGroup)                                                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveHeatFluxBCFromImportedLoadCollection`](#ImportedShellThicknesses.RemoveHeatFluxBCFromImportedLoadCollection)         | Removes a Heat Flux boundary condition.                                                     |
| [`RemoveMomentBCFromImportedLoadCollection`](#ImportedShellThicknesses.RemoveMomentBCFromImportedLoadCollection)             | Removes a Moment boundary condition.                                                        |
| [`RemoveParameter`](#ImportedShellThicknesses.RemoveParameter)                                                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RemovePressureBCFromImportedLoadCollection`](#ImportedShellThicknesses.RemovePressureBCFromImportedLoadCollection)         | Removes a Pressure boundary condition.                                                      |
| [`RemoveRotationBCFromImportedLoadCollection`](#ImportedShellThicknesses.RemoveRotationBCFromImportedLoadCollection)         | Removes a Rotation boundary condition.                                                      |
| [`RemoveTemperatureBCFromImportedLoadCollection`](#ImportedShellThicknesses.RemoveTemperatureBCFromImportedLoadCollection)   | Removes a Temperature boundary condition.                                                   |
| [`RemoveVoltageBCFromImportedLoadCollection`](#ImportedShellThicknesses.RemoveVoltageBCFromImportedLoadCollection)           | Removes a Voltage boundary condition.                                                       |
| [`SelectRows`](#ImportedShellThicknesses.SelectRows)                                                                         | Selects the specified rows (1-based page-relative array) and                                |
| [`SetCellValue`](#ImportedShellThicknesses.SetCellValue)                                                                     | Sets the cell value at the given 1-based page-relative row and                              |
| [`SetValueOnAllRows`](#ImportedShellThicknesses.SetValueOnAllRows)                                                           | Sets the cell value on ALL rows in the collection (across all pages,                        |
| [`SetValueOnAllVisibleRows`](#ImportedShellThicknesses.SetValueOnAllVisibleRows)                                             | Sets the cell value on all visible rows on the current page.                                |
| [`SetValueOnSelectedRows`](#ImportedShellThicknesses.SetValueOnSelectedRows)                                                 | Sets the cell value on specific rows. Handles edit, combo-box,                              |
| [`SortColumn`](#ImportedShellThicknesses.SortColumn)                                                                         | Sorts the worksheet by the given column index.                                              |
| [`WorksheetFunction`](#ImportedShellThicknesses.WorksheetFunction)                                                           | Executes a worksheet function: ChangeShow, SetPage, PreviousButton,                         |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImportedShellThicknesses.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ImportedShellThicknesses.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ImportedShellThicknesses.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ImportedShellThicknesses.Comments)                                 | Gets the list of associated comments.                         |
| [`Count`](#ImportedShellThicknesses.Count)                                       | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedShellThicknesses.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedShellThicknesses.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImportedShellThicknesses.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ImportedShellThicknesses.IconName)                                 | IconName property.                                            |
| [`Images`](#ImportedShellThicknesses.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ImportedShellThicknesses.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ImportedShellThicknesses.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Item`](#ImportedShellThicknesses.Item)                                         | Item property.                                                |
| [`Name`](#ImportedShellThicknesses.Name)                                         | Name property.                                                |
| [`ObjectId`](#ImportedShellThicknesses.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ImportedShellThicknesses.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ImportedShellThicknesses.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ImportedShellThicknesses.Parent)                                     | Parent property.                                              |
| [`Properties`](#ImportedShellThicknesses.Properties)                             | Gets the list of properties for this object.                  |
| [`PropertyCount`](#ImportedShellThicknesses.PropertyCount)                       | Gets the NumberOfColumns.                                     |
| [`ReadOnly`](#ImportedShellThicknesses.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#ImportedShellThicknesses.State)                                       | State property.                                               |
| [`Suppressed`](#ImportedShellThicknesses.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#ImportedShellThicknesses.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ImportedShellThicknesses.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedShellThicknesses.AttachedRefs"></a>

### *property* ImportedShellThicknesses.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Children"></a>

### *property* ImportedShellThicknesses.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.ClsId"></a>

### *property* ImportedShellThicknesses.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Comments"></a>

### *property* ImportedShellThicknesses.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Count"></a>

### *property* ImportedShellThicknesses.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.DataModelObjectCategory"></a>

### *property* ImportedShellThicknesses.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Figures"></a>

### *property* ImportedShellThicknesses.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GroupingFolder"></a>

### *property* ImportedShellThicknesses.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.IconName"></a>

### *property* ImportedShellThicknesses.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Images"></a>

### *property* ImportedShellThicknesses.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.ImportableObjectSourceId"></a>

### *property* ImportedShellThicknesses.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.InternalObject"></a>

### *property* ImportedShellThicknesses.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Item"></a>

### *property* ImportedShellThicknesses.Item *: [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Name"></a>

### *property* ImportedShellThicknesses.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.ObjectId"></a>

### *property* ImportedShellThicknesses.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.ObjectState"></a>

### *property* ImportedShellThicknesses.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.ObjectTags"></a>

### *property* ImportedShellThicknesses.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Parent"></a>

### *property* ImportedShellThicknesses.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Properties"></a>

### *property* ImportedShellThicknesses.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PropertyCount"></a>

### *property* ImportedShellThicknesses.PropertyCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfColumns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.ReadOnly"></a>

### *property* ImportedShellThicknesses.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.State"></a>

### *property* ImportedShellThicknesses.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Suppressed"></a>

### *property* ImportedShellThicknesses.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.TransferableObjectId"></a>

### *property* ImportedShellThicknesses.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.VisibleProperties"></a>

### *property* ImportedShellThicknesses.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedShellThicknesses.Activate"></a>

### ImportedShellThicknesses.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddComment"></a>

### ImportedShellThicknesses.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddConvectionBCToImportedLoadCollection"></a>

### ImportedShellThicknesses.AddConvectionBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddDisplacementBCToImportedLoadCollection"></a>

### ImportedShellThicknesses.AddDisplacementBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddFigure"></a>

### ImportedShellThicknesses.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddForceBCToImportedLoadCollection"></a>

### ImportedShellThicknesses.AddForceBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddHeatFluxBCToImportedLoadCollection"></a>

### ImportedShellThicknesses.AddHeatFluxBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddImage"></a>

### ImportedShellThicknesses.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddMomentBCToImportedLoadCollection"></a>

### ImportedShellThicknesses.AddMomentBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddPressureBCToImportedLoadCollection"></a>

### ImportedShellThicknesses.AddPressureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddRotationBCToImportedLoadCollection"></a>

### ImportedShellThicknesses.AddRotationBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddTemperatureBCToImportedLoadCollection"></a>

### ImportedShellThicknesses.AddTemperatureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddVoltageBCToImportedLoadCollection"></a>

### ImportedShellThicknesses.AddVoltageBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CheckRow"></a>

### ImportedShellThicknesses.CheckRow(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Selects the row, then checks or unchecks it.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CheckRowNoSelect"></a>

### ImportedShellThicknesses.CheckRowNoSelect(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Checks or unchecks the row without selecting it first.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Copy"></a>

### ImportedShellThicknesses.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CopyTo"></a>

### ImportedShellThicknesses.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CreateObjRef"></a>

### ImportedShellThicknesses.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CreateParameter"></a>

### ImportedShellThicknesses.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Cut"></a>

### ImportedShellThicknesses.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Delete"></a>

### ImportedShellThicknesses.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Duplicate"></a>

### ImportedShellThicknesses.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Equals"></a>

### ImportedShellThicknesses.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetAPIName"></a>

### ImportedShellThicknesses.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetAllProperties"></a>

### ImportedShellThicknesses.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetCellValue"></a>

### ImportedShellThicknesses.GetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Returns the text of the cell at the given 1-based page-relative
row and column. For promoted rows, returns the promoted object's
Name when column == 1.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetChildren"></a>

### ImportedShellThicknesses.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedShellThicknesses.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetColumnCount"></a>

### ImportedShellThicknesses.GetColumnCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of columns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetColumnHeaders"></a>

### ImportedShellThicknesses.GetColumnHeaders() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetColumnHeaders method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetDetailsView"></a>

### ImportedShellThicknesses.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetEnumName"></a>

### ImportedShellThicknesses.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetEnumerator"></a>

### ImportedShellThicknesses.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetHashCode"></a>

### ImportedShellThicknesses.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetIconFile"></a>

### ImportedShellThicknesses.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetLifetimeService"></a>

### ImportedShellThicknesses.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetObject"></a>

### ImportedShellThicknesses.GetObject(oneBasedIRow: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)

Get the row object

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetObjectData"></a>

### ImportedShellThicknesses.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetParameter"></a>

### ImportedShellThicknesses.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetPath"></a>

### ImportedShellThicknesses.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetPropertyName"></a>

### ImportedShellThicknesses.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetPropertyValue"></a>

### ImportedShellThicknesses.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetRowCount"></a>

### ImportedShellThicknesses.GetRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetTotalVisibleRowCount"></a>

### ImportedShellThicknesses.GetTotalVisibleRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the total number of visible rows across all pages.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetVisibleProperties"></a>

### ImportedShellThicknesses.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetVisiblePropertyNames"></a>

### ImportedShellThicknesses.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GroupAllSimilarChildren"></a>

### ImportedShellThicknesses.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GroupSimilarObjects"></a>

### ImportedShellThicknesses.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.InitializeLifetimeService"></a>

### ImportedShellThicknesses.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.IsPropertyEditable"></a>

### ImportedShellThicknesses.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedShellThicknesses.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.IsPropertyVisible"></a>

### ImportedShellThicknesses.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedShellThicknesses.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Paste"></a>

### ImportedShellThicknesses.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PerformRowAction"></a>

### ImportedShellThicknesses.PerformRowAction(row: [int](https://docs.python.org/3/builtins/functions.html#int), option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), item: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the row and executes a worksheet command (PROMOTE, CREATE,
GOTO_PROMOTED_ITEM, CHECK, UNCHECK) with the given item index.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Promote"></a>

### ImportedShellThicknesses.Promote(iRows: Iterable[[int](https://docs.python.org/3/builtins/functions.html#int)], iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PromoteAll"></a>

### ImportedShellThicknesses.PromoteAll(iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote the rows

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PropertyByAPIName"></a>

### ImportedShellThicknesses.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PropertyById"></a>

### ImportedShellThicknesses.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PropertyByName"></a>

### ImportedShellThicknesses.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveConvectionBCFromImportedLoadCollection"></a>

### ImportedShellThicknesses.RemoveConvectionBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveDisplacementBCFromImportedLoadCollection"></a>

### ImportedShellThicknesses.RemoveDisplacementBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveForceBCFromImportedLoadCollection"></a>

### ImportedShellThicknesses.RemoveForceBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveFromGroup"></a>

### ImportedShellThicknesses.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveHeatFluxBCFromImportedLoadCollection"></a>

### ImportedShellThicknesses.RemoveHeatFluxBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveMomentBCFromImportedLoadCollection"></a>

### ImportedShellThicknesses.RemoveMomentBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveParameter"></a>

### ImportedShellThicknesses.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemovePressureBCFromImportedLoadCollection"></a>

### ImportedShellThicknesses.RemovePressureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveRotationBCFromImportedLoadCollection"></a>

### ImportedShellThicknesses.RemoveRotationBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveTemperatureBCFromImportedLoadCollection"></a>

### ImportedShellThicknesses.RemoveTemperatureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveVoltageBCFromImportedLoadCollection"></a>

### ImportedShellThicknesses.RemoveVoltageBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.SelectRows"></a>

### ImportedShellThicknesses.SelectRows(rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the specified rows (1-based page-relative array) and
deselects all others. Accepts an int array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.SetCellValue"></a>

### ImportedShellThicknesses.SetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value at the given 1-based page-relative row and
column. Handles read-only, edit, combo-box, and context-menu
column types automatically.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.SetValueOnAllRows"></a>

### ImportedShellThicknesses.SetValueOnAllRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on ALL rows in the collection (across all pages,
including rows hidden by the current page/filter).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.SetValueOnAllVisibleRows"></a>

### ImportedShellThicknesses.SetValueOnAllVisibleRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the cell value on all visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.SetValueOnSelectedRows"></a>

### ImportedShellThicknesses.SetValueOnSelectedRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str), rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on specific rows. Handles edit, combo-box,
and context-menu column types automatically.
Rows is a 1-based page-relative array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.SortColumn"></a>

### ImportedShellThicknesses.SortColumn(iCol: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sorts the worksheet by the given column index.
Toggles sort direction on repeated calls (off → ascending → descending).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.WorksheetFunction"></a>

### ImportedShellThicknesses.WorksheetFunction(option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Executes a worksheet function: ChangeShow, SetPage, PreviousButton,
NextButton, ResetButton, SelectAllOnPage.
```

<!-- !! processed by numpydoc !! -->

