# `ImportedPremeshedBoltPretensions`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPremeshedBoltPretensions"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedPremeshedBoltPretensions(internalObject: Any)

<a id="ImportedPremeshedBoltPretensions"></a>

### *class* ImportedPremeshedBoltPretensions(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedPremeshedBoltPretensions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedPremeshedBoltPretensions.Activate)                                                                             | Activate the current object.                                                                |
| [`AddComment`](#ImportedPremeshedBoltPretensions.AddComment)                                                                         | Creates a new child Comment.                                                                |
| [`AddConvectionBCToImportedLoadCollection`](#ImportedPremeshedBoltPretensions.AddConvectionBCToImportedLoadCollection)               | Adds a Convection boundary condition.                                                       |
| [`AddDisplacementBCToImportedLoadCollection`](#ImportedPremeshedBoltPretensions.AddDisplacementBCToImportedLoadCollection)           | Adds a Displacement boundary condition.                                                     |
| [`AddFigure`](#ImportedPremeshedBoltPretensions.AddFigure)                                                                           | Creates a new child Figure.                                                                 |
| [`AddForceBCToImportedLoadCollection`](#ImportedPremeshedBoltPretensions.AddForceBCToImportedLoadCollection)                         | Adds a Force boundary condition.                                                            |
| [`AddHeatFluxBCToImportedLoadCollection`](#ImportedPremeshedBoltPretensions.AddHeatFluxBCToImportedLoadCollection)                   | Adds a Heat Flux boundary condition.                                                        |
| [`AddImage`](#ImportedPremeshedBoltPretensions.AddImage)                                                                             | Creates a new child Image.                                                                  |
| [`AddMomentBCToImportedLoadCollection`](#ImportedPremeshedBoltPretensions.AddMomentBCToImportedLoadCollection)                       | Adds a Moment boundary condition.                                                           |
| [`AddPressureBCToImportedLoadCollection`](#ImportedPremeshedBoltPretensions.AddPressureBCToImportedLoadCollection)                   | Adds a Pressure boundary condition.                                                         |
| [`AddRotationBCToImportedLoadCollection`](#ImportedPremeshedBoltPretensions.AddRotationBCToImportedLoadCollection)                   | Adds a Rotation boundary condition.                                                         |
| [`AddTemperatureBCToImportedLoadCollection`](#ImportedPremeshedBoltPretensions.AddTemperatureBCToImportedLoadCollection)             | Adds a Temperature boundary condition.                                                      |
| [`AddVoltageBCToImportedLoadCollection`](#ImportedPremeshedBoltPretensions.AddVoltageBCToImportedLoadCollection)                     | Adds a Voltage boundary condition.                                                          |
| [`CheckRow`](#ImportedPremeshedBoltPretensions.CheckRow)                                                                             | Selects the row, then checks or unchecks it.                                                |
| [`CheckRowNoSelect`](#ImportedPremeshedBoltPretensions.CheckRowNoSelect)                                                             | Checks or unchecks the row without selecting it first.                                      |
| [`Copy`](#ImportedPremeshedBoltPretensions.Copy)                                                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImportedPremeshedBoltPretensions.CopyTo)                                                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImportedPremeshedBoltPretensions.CreateObjRef)                                                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImportedPremeshedBoltPretensions.CreateParameter)                                                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImportedPremeshedBoltPretensions.Cut)                                                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ImportedPremeshedBoltPretensions.Delete)                                                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#ImportedPremeshedBoltPretensions.Duplicate)                                                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImportedPremeshedBoltPretensions.Equals)                                                                                 | Equals method.                                                                              |
| [`GetAPIName`](#ImportedPremeshedBoltPretensions.GetAPIName)                                                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImportedPremeshedBoltPretensions.GetAllProperties)                                                             | GetAllProperties method.                                                                    |
| [`GetCellValue`](#ImportedPremeshedBoltPretensions.GetCellValue)                                                                     | Returns the text of the cell at the given 1-based page-relative                             |
| [`GetChildren`](#ImportedPremeshedBoltPretensions.GetChildren)                                                                       | Gets the list of children, filtered by type.                                                |
| [`GetColumnCount`](#ImportedPremeshedBoltPretensions.GetColumnCount)                                                                 | Returns the number of columns.                                                              |
| [`GetColumnHeaders`](#ImportedPremeshedBoltPretensions.GetColumnHeaders)                                                             | GetColumnHeaders method.                                                                    |
| [`GetDetailsView`](#ImportedPremeshedBoltPretensions.GetDetailsView)                                                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImportedPremeshedBoltPretensions.GetEnumName)                                                                       | Enum name bound to value                                                                    |
| [`GetEnumerator`](#ImportedPremeshedBoltPretensions.GetEnumerator)                                                                   | GetEnumerator method.                                                                       |
| [`GetHashCode`](#ImportedPremeshedBoltPretensions.GetHashCode)                                                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImportedPremeshedBoltPretensions.GetIconFile)                                                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImportedPremeshedBoltPretensions.GetLifetimeService)                                                         | GetLifetimeService method.                                                                  |
| [`GetObject`](#ImportedPremeshedBoltPretensions.GetObject)                                                                           | Get the row object                                                                          |
| [`GetObjectData`](#ImportedPremeshedBoltPretensions.GetObjectData)                                                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#ImportedPremeshedBoltPretensions.GetParameter)                                                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImportedPremeshedBoltPretensions.GetPath)                                                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#ImportedPremeshedBoltPretensions.GetPropertyName)                                                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImportedPremeshedBoltPretensions.GetPropertyValue)                                                             | GetPropertyValue method.                                                                    |
| [`GetRowCount`](#ImportedPremeshedBoltPretensions.GetRowCount)                                                                       | Returns the number of visible rows on the current page.                                     |
| [`GetTotalVisibleRowCount`](#ImportedPremeshedBoltPretensions.GetTotalVisibleRowCount)                                               | Returns the total number of visible rows across all pages.                                  |
| [`GetVisibleProperties`](#ImportedPremeshedBoltPretensions.GetVisibleProperties)                                                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImportedPremeshedBoltPretensions.GetVisiblePropertyNames)                                               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImportedPremeshedBoltPretensions.GroupAllSimilarChildren)                                               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedPremeshedBoltPretensions.GroupSimilarObjects)                                                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImportedPremeshedBoltPretensions.InitializeLifetimeService)                                           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImportedPremeshedBoltPretensions.IsPropertyEditable)                                                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImportedPremeshedBoltPretensions.IsPropertyVisible)                                                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImportedPremeshedBoltPretensions.Paste)                                                                                   | Pastes to the current DataModelObject context.                                              |
| [`PerformRowAction`](#ImportedPremeshedBoltPretensions.PerformRowAction)                                                             | Selects the row and executes a worksheet command (PROMOTE, CREATE,                          |
| [`Promote`](#ImportedPremeshedBoltPretensions.Promote)                                                                               | Promote method.                                                                             |
| [`PromoteAll`](#ImportedPremeshedBoltPretensions.PromoteAll)                                                                         | Promote the rows                                                                            |
| [`PropertyByAPIName`](#ImportedPremeshedBoltPretensions.PropertyByAPIName)                                                           | Get a property by its API name.                                                             |
| [`PropertyById`](#ImportedPremeshedBoltPretensions.PropertyById)                                                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#ImportedPremeshedBoltPretensions.PropertyByName)                                                                 | Get a property by its unique name.                                                          |
| [`RemoveConvectionBCFromImportedLoadCollection`](#ImportedPremeshedBoltPretensions.RemoveConvectionBCFromImportedLoadCollection)     | Removes a Convection boundary condition.                                                    |
| [`RemoveDisplacementBCFromImportedLoadCollection`](#ImportedPremeshedBoltPretensions.RemoveDisplacementBCFromImportedLoadCollection) | Removes a Displacement boundary condition.                                                  |
| [`RemoveForceBCFromImportedLoadCollection`](#ImportedPremeshedBoltPretensions.RemoveForceBCFromImportedLoadCollection)               | Removes a Force boundary condition.                                                         |
| [`RemoveFromGroup`](#ImportedPremeshedBoltPretensions.RemoveFromGroup)                                                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveHeatFluxBCFromImportedLoadCollection`](#ImportedPremeshedBoltPretensions.RemoveHeatFluxBCFromImportedLoadCollection)         | Removes a Heat Flux boundary condition.                                                     |
| [`RemoveMomentBCFromImportedLoadCollection`](#ImportedPremeshedBoltPretensions.RemoveMomentBCFromImportedLoadCollection)             | Removes a Moment boundary condition.                                                        |
| [`RemoveParameter`](#ImportedPremeshedBoltPretensions.RemoveParameter)                                                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RemovePressureBCFromImportedLoadCollection`](#ImportedPremeshedBoltPretensions.RemovePressureBCFromImportedLoadCollection)         | Removes a Pressure boundary condition.                                                      |
| [`RemoveRotationBCFromImportedLoadCollection`](#ImportedPremeshedBoltPretensions.RemoveRotationBCFromImportedLoadCollection)         | Removes a Rotation boundary condition.                                                      |
| [`RemoveTemperatureBCFromImportedLoadCollection`](#ImportedPremeshedBoltPretensions.RemoveTemperatureBCFromImportedLoadCollection)   | Removes a Temperature boundary condition.                                                   |
| [`RemoveVoltageBCFromImportedLoadCollection`](#ImportedPremeshedBoltPretensions.RemoveVoltageBCFromImportedLoadCollection)           | Removes a Voltage boundary condition.                                                       |
| [`SelectRows`](#ImportedPremeshedBoltPretensions.SelectRows)                                                                         | Selects the specified rows (1-based page-relative array) and                                |
| [`SetCellValue`](#ImportedPremeshedBoltPretensions.SetCellValue)                                                                     | Sets the cell value at the given 1-based page-relative row and                              |
| [`SetValueOnAllRows`](#ImportedPremeshedBoltPretensions.SetValueOnAllRows)                                                           | Sets the cell value on ALL rows in the collection (across all pages,                        |
| [`SetValueOnAllVisibleRows`](#ImportedPremeshedBoltPretensions.SetValueOnAllVisibleRows)                                             | Sets the cell value on all visible rows on the current page.                                |
| [`SetValueOnSelectedRows`](#ImportedPremeshedBoltPretensions.SetValueOnSelectedRows)                                                 | Sets the cell value on specific rows. Handles edit, combo-box,                              |
| [`SortColumn`](#ImportedPremeshedBoltPretensions.SortColumn)                                                                         | Sorts the worksheet by the given column index.                                              |
| [`WorksheetFunction`](#ImportedPremeshedBoltPretensions.WorksheetFunction)                                                           | Executes a worksheet function: ChangeShow, SetPage, PreviousButton,                         |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImportedPremeshedBoltPretensions.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ImportedPremeshedBoltPretensions.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ImportedPremeshedBoltPretensions.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ImportedPremeshedBoltPretensions.Comments)                                 | Gets the list of associated comments.                         |
| [`Count`](#ImportedPremeshedBoltPretensions.Count)                                       | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedPremeshedBoltPretensions.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedPremeshedBoltPretensions.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImportedPremeshedBoltPretensions.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ImportedPremeshedBoltPretensions.IconName)                                 | IconName property.                                            |
| [`Images`](#ImportedPremeshedBoltPretensions.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ImportedPremeshedBoltPretensions.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ImportedPremeshedBoltPretensions.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Item`](#ImportedPremeshedBoltPretensions.Item)                                         | Item property.                                                |
| [`Name`](#ImportedPremeshedBoltPretensions.Name)                                         | Name property.                                                |
| [`ObjectId`](#ImportedPremeshedBoltPretensions.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ImportedPremeshedBoltPretensions.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ImportedPremeshedBoltPretensions.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ImportedPremeshedBoltPretensions.Parent)                                     | Parent property.                                              |
| [`Properties`](#ImportedPremeshedBoltPretensions.Properties)                             | Gets the list of properties for this object.                  |
| [`PropertyCount`](#ImportedPremeshedBoltPretensions.PropertyCount)                       | Gets the NumberOfColumns.                                     |
| [`ReadOnly`](#ImportedPremeshedBoltPretensions.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#ImportedPremeshedBoltPretensions.State)                                       | State property.                                               |
| [`Suppressed`](#ImportedPremeshedBoltPretensions.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#ImportedPremeshedBoltPretensions.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ImportedPremeshedBoltPretensions.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedPremeshedBoltPretensions.AttachedRefs"></a>

### *property* ImportedPremeshedBoltPretensions.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Children"></a>

### *property* ImportedPremeshedBoltPretensions.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.ClsId"></a>

### *property* ImportedPremeshedBoltPretensions.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Comments"></a>

### *property* ImportedPremeshedBoltPretensions.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Count"></a>

### *property* ImportedPremeshedBoltPretensions.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.DataModelObjectCategory"></a>

### *property* ImportedPremeshedBoltPretensions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Figures"></a>

### *property* ImportedPremeshedBoltPretensions.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GroupingFolder"></a>

### *property* ImportedPremeshedBoltPretensions.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.IconName"></a>

### *property* ImportedPremeshedBoltPretensions.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Images"></a>

### *property* ImportedPremeshedBoltPretensions.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.ImportableObjectSourceId"></a>

### *property* ImportedPremeshedBoltPretensions.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.InternalObject"></a>

### *property* ImportedPremeshedBoltPretensions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Item"></a>

### *property* ImportedPremeshedBoltPretensions.Item *: [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Name"></a>

### *property* ImportedPremeshedBoltPretensions.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.ObjectId"></a>

### *property* ImportedPremeshedBoltPretensions.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.ObjectState"></a>

### *property* ImportedPremeshedBoltPretensions.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.ObjectTags"></a>

### *property* ImportedPremeshedBoltPretensions.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Parent"></a>

### *property* ImportedPremeshedBoltPretensions.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Properties"></a>

### *property* ImportedPremeshedBoltPretensions.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.PropertyCount"></a>

### *property* ImportedPremeshedBoltPretensions.PropertyCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfColumns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.ReadOnly"></a>

### *property* ImportedPremeshedBoltPretensions.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.State"></a>

### *property* ImportedPremeshedBoltPretensions.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Suppressed"></a>

### *property* ImportedPremeshedBoltPretensions.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.TransferableObjectId"></a>

### *property* ImportedPremeshedBoltPretensions.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.VisibleProperties"></a>

### *property* ImportedPremeshedBoltPretensions.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedPremeshedBoltPretensions.Activate"></a>

### ImportedPremeshedBoltPretensions.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddComment"></a>

### ImportedPremeshedBoltPretensions.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddConvectionBCToImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.AddConvectionBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddDisplacementBCToImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.AddDisplacementBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddFigure"></a>

### ImportedPremeshedBoltPretensions.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddForceBCToImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.AddForceBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddHeatFluxBCToImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.AddHeatFluxBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddImage"></a>

### ImportedPremeshedBoltPretensions.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddMomentBCToImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.AddMomentBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddPressureBCToImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.AddPressureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddRotationBCToImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.AddRotationBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddTemperatureBCToImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.AddTemperatureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.AddVoltageBCToImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.AddVoltageBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.CheckRow"></a>

### ImportedPremeshedBoltPretensions.CheckRow(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Selects the row, then checks or unchecks it.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.CheckRowNoSelect"></a>

### ImportedPremeshedBoltPretensions.CheckRowNoSelect(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Checks or unchecks the row without selecting it first.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Copy"></a>

### ImportedPremeshedBoltPretensions.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.CopyTo"></a>

### ImportedPremeshedBoltPretensions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.CreateObjRef"></a>

### ImportedPremeshedBoltPretensions.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.CreateParameter"></a>

### ImportedPremeshedBoltPretensions.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Cut"></a>

### ImportedPremeshedBoltPretensions.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Delete"></a>

### ImportedPremeshedBoltPretensions.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Duplicate"></a>

### ImportedPremeshedBoltPretensions.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Equals"></a>

### ImportedPremeshedBoltPretensions.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetAPIName"></a>

### ImportedPremeshedBoltPretensions.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetAllProperties"></a>

### ImportedPremeshedBoltPretensions.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetCellValue"></a>

### ImportedPremeshedBoltPretensions.GetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Returns the text of the cell at the given 1-based page-relative
row and column. For promoted rows, returns the promoted object's
Name when column == 1.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetChildren"></a>

### ImportedPremeshedBoltPretensions.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedPremeshedBoltPretensions.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetColumnCount"></a>

### ImportedPremeshedBoltPretensions.GetColumnCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of columns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetColumnHeaders"></a>

### ImportedPremeshedBoltPretensions.GetColumnHeaders() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetColumnHeaders method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetDetailsView"></a>

### ImportedPremeshedBoltPretensions.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetEnumName"></a>

### ImportedPremeshedBoltPretensions.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetEnumerator"></a>

### ImportedPremeshedBoltPretensions.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetHashCode"></a>

### ImportedPremeshedBoltPretensions.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetIconFile"></a>

### ImportedPremeshedBoltPretensions.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetLifetimeService"></a>

### ImportedPremeshedBoltPretensions.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetObject"></a>

### ImportedPremeshedBoltPretensions.GetObject(oneBasedIRow: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)

Get the row object

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetObjectData"></a>

### ImportedPremeshedBoltPretensions.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetParameter"></a>

### ImportedPremeshedBoltPretensions.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetPath"></a>

### ImportedPremeshedBoltPretensions.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetPropertyName"></a>

### ImportedPremeshedBoltPretensions.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetPropertyValue"></a>

### ImportedPremeshedBoltPretensions.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetRowCount"></a>

### ImportedPremeshedBoltPretensions.GetRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetTotalVisibleRowCount"></a>

### ImportedPremeshedBoltPretensions.GetTotalVisibleRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the total number of visible rows across all pages.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetVisibleProperties"></a>

### ImportedPremeshedBoltPretensions.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GetVisiblePropertyNames"></a>

### ImportedPremeshedBoltPretensions.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GroupAllSimilarChildren"></a>

### ImportedPremeshedBoltPretensions.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.GroupSimilarObjects"></a>

### ImportedPremeshedBoltPretensions.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.InitializeLifetimeService"></a>

### ImportedPremeshedBoltPretensions.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.IsPropertyEditable"></a>

### ImportedPremeshedBoltPretensions.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedPremeshedBoltPretensions.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.IsPropertyVisible"></a>

### ImportedPremeshedBoltPretensions.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedPremeshedBoltPretensions.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Paste"></a>

### ImportedPremeshedBoltPretensions.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.PerformRowAction"></a>

### ImportedPremeshedBoltPretensions.PerformRowAction(row: [int](https://docs.python.org/3/builtins/functions.html#int), option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), item: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the row and executes a worksheet command (PROMOTE, CREATE,
GOTO_PROMOTED_ITEM, CHECK, UNCHECK) with the given item index.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.Promote"></a>

### ImportedPremeshedBoltPretensions.Promote(iRows: Iterable[[int](https://docs.python.org/3/builtins/functions.html#int)], iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.PromoteAll"></a>

### ImportedPremeshedBoltPretensions.PromoteAll(iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote the rows

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.PropertyByAPIName"></a>

### ImportedPremeshedBoltPretensions.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.PropertyById"></a>

### ImportedPremeshedBoltPretensions.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.PropertyByName"></a>

### ImportedPremeshedBoltPretensions.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemoveConvectionBCFromImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.RemoveConvectionBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemoveDisplacementBCFromImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.RemoveDisplacementBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemoveForceBCFromImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.RemoveForceBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemoveFromGroup"></a>

### ImportedPremeshedBoltPretensions.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemoveHeatFluxBCFromImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.RemoveHeatFluxBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemoveMomentBCFromImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.RemoveMomentBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemoveParameter"></a>

### ImportedPremeshedBoltPretensions.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemovePressureBCFromImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.RemovePressureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemoveRotationBCFromImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.RemoveRotationBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemoveTemperatureBCFromImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.RemoveTemperatureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.RemoveVoltageBCFromImportedLoadCollection"></a>

### ImportedPremeshedBoltPretensions.RemoveVoltageBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.SelectRows"></a>

### ImportedPremeshedBoltPretensions.SelectRows(rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the specified rows (1-based page-relative array) and
deselects all others. Accepts an int array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.SetCellValue"></a>

### ImportedPremeshedBoltPretensions.SetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value at the given 1-based page-relative row and
column. Handles read-only, edit, combo-box, and context-menu
column types automatically.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.SetValueOnAllRows"></a>

### ImportedPremeshedBoltPretensions.SetValueOnAllRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on ALL rows in the collection (across all pages,
including rows hidden by the current page/filter).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.SetValueOnAllVisibleRows"></a>

### ImportedPremeshedBoltPretensions.SetValueOnAllVisibleRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the cell value on all visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.SetValueOnSelectedRows"></a>

### ImportedPremeshedBoltPretensions.SetValueOnSelectedRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str), rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on specific rows. Handles edit, combo-box,
and context-menu column types automatically.
Rows is a 1-based page-relative array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.SortColumn"></a>

### ImportedPremeshedBoltPretensions.SortColumn(iCol: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sorts the worksheet by the given column index.
Toggles sort direction on repeated calls (off → ascending → descending).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPremeshedBoltPretensions.WorksheetFunction"></a>

### ImportedPremeshedBoltPretensions.WorksheetFunction(option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Executes a worksheet function: ChangeShow, SetPage, PreviousButton,
NextButton, ResetButton, SelectAllOnPage.
```

<!-- !! processed by numpydoc !! -->

