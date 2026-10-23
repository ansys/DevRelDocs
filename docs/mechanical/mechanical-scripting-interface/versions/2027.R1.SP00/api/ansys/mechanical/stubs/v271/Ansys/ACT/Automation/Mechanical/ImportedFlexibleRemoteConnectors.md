# `ImportedFlexibleRemoteConnectors`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedFlexibleRemoteConnectors"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedFlexibleRemoteConnectors(internalObject: Any)

<a id="ImportedFlexibleRemoteConnectors"></a>

### *class* ImportedFlexibleRemoteConnectors(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedFlexibleRemoteConnectors.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedFlexibleRemoteConnectors.Activate)                                                                             | Activate the current object.                                                                |
| [`AddComment`](#ImportedFlexibleRemoteConnectors.AddComment)                                                                         | Creates a new child Comment.                                                                |
| [`AddConvectionBCToImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.AddConvectionBCToImportedLoadCollection)               | Adds a Convection boundary condition.                                                       |
| [`AddDisplacementBCToImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.AddDisplacementBCToImportedLoadCollection)           | Adds a Displacement boundary condition.                                                     |
| [`AddFigure`](#ImportedFlexibleRemoteConnectors.AddFigure)                                                                           | Creates a new child Figure.                                                                 |
| [`AddForceBCToImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.AddForceBCToImportedLoadCollection)                         | Adds a Force boundary condition.                                                            |
| [`AddHeatFluxBCToImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.AddHeatFluxBCToImportedLoadCollection)                   | Adds a Heat Flux boundary condition.                                                        |
| [`AddImage`](#ImportedFlexibleRemoteConnectors.AddImage)                                                                             | Creates a new child Image.                                                                  |
| [`AddMomentBCToImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.AddMomentBCToImportedLoadCollection)                       | Adds a Moment boundary condition.                                                           |
| [`AddPressureBCToImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.AddPressureBCToImportedLoadCollection)                   | Adds a Pressure boundary condition.                                                         |
| [`AddRotationBCToImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.AddRotationBCToImportedLoadCollection)                   | Adds a Rotation boundary condition.                                                         |
| [`AddTemperatureBCToImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.AddTemperatureBCToImportedLoadCollection)             | Adds a Temperature boundary condition.                                                      |
| [`AddVoltageBCToImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.AddVoltageBCToImportedLoadCollection)                     | Adds a Voltage boundary condition.                                                          |
| [`CheckRow`](#ImportedFlexibleRemoteConnectors.CheckRow)                                                                             | Selects the row, then checks or unchecks it.                                                |
| [`CheckRowNoSelect`](#ImportedFlexibleRemoteConnectors.CheckRowNoSelect)                                                             | Checks or unchecks the row without selecting it first.                                      |
| [`Copy`](#ImportedFlexibleRemoteConnectors.Copy)                                                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImportedFlexibleRemoteConnectors.CopyTo)                                                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImportedFlexibleRemoteConnectors.CreateObjRef)                                                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImportedFlexibleRemoteConnectors.CreateParameter)                                                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImportedFlexibleRemoteConnectors.Cut)                                                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ImportedFlexibleRemoteConnectors.Delete)                                                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#ImportedFlexibleRemoteConnectors.Duplicate)                                                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImportedFlexibleRemoteConnectors.Equals)                                                                                 | Equals method.                                                                              |
| [`GetAPIName`](#ImportedFlexibleRemoteConnectors.GetAPIName)                                                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImportedFlexibleRemoteConnectors.GetAllProperties)                                                             | GetAllProperties method.                                                                    |
| [`GetCellValue`](#ImportedFlexibleRemoteConnectors.GetCellValue)                                                                     | Returns the text of the cell at the given 1-based page-relative                             |
| [`GetChildren`](#ImportedFlexibleRemoteConnectors.GetChildren)                                                                       | Gets the list of children, filtered by type.                                                |
| [`GetColumnCount`](#ImportedFlexibleRemoteConnectors.GetColumnCount)                                                                 | Returns the number of columns.                                                              |
| [`GetColumnHeaders`](#ImportedFlexibleRemoteConnectors.GetColumnHeaders)                                                             | GetColumnHeaders method.                                                                    |
| [`GetDetailsView`](#ImportedFlexibleRemoteConnectors.GetDetailsView)                                                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImportedFlexibleRemoteConnectors.GetEnumName)                                                                       | Enum name bound to value                                                                    |
| [`GetEnumerator`](#ImportedFlexibleRemoteConnectors.GetEnumerator)                                                                   | GetEnumerator method.                                                                       |
| [`GetHashCode`](#ImportedFlexibleRemoteConnectors.GetHashCode)                                                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImportedFlexibleRemoteConnectors.GetIconFile)                                                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImportedFlexibleRemoteConnectors.GetLifetimeService)                                                         | GetLifetimeService method.                                                                  |
| [`GetObject`](#ImportedFlexibleRemoteConnectors.GetObject)                                                                           | Get the row object                                                                          |
| [`GetObjectData`](#ImportedFlexibleRemoteConnectors.GetObjectData)                                                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#ImportedFlexibleRemoteConnectors.GetParameter)                                                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImportedFlexibleRemoteConnectors.GetPath)                                                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#ImportedFlexibleRemoteConnectors.GetPropertyName)                                                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImportedFlexibleRemoteConnectors.GetPropertyValue)                                                             | GetPropertyValue method.                                                                    |
| [`GetRowCount`](#ImportedFlexibleRemoteConnectors.GetRowCount)                                                                       | Returns the number of visible rows on the current page.                                     |
| [`GetTotalVisibleRowCount`](#ImportedFlexibleRemoteConnectors.GetTotalVisibleRowCount)                                               | Returns the total number of visible rows across all pages.                                  |
| [`GetVisibleProperties`](#ImportedFlexibleRemoteConnectors.GetVisibleProperties)                                                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImportedFlexibleRemoteConnectors.GetVisiblePropertyNames)                                               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren)                                               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedFlexibleRemoteConnectors.GroupSimilarObjects)                                                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImportedFlexibleRemoteConnectors.InitializeLifetimeService)                                           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImportedFlexibleRemoteConnectors.IsPropertyEditable)                                                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImportedFlexibleRemoteConnectors.IsPropertyVisible)                                                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImportedFlexibleRemoteConnectors.Paste)                                                                                   | Pastes to the current DataModelObject context.                                              |
| [`PerformRowAction`](#ImportedFlexibleRemoteConnectors.PerformRowAction)                                                             | Selects the row and executes a worksheet command (PROMOTE, CREATE,                          |
| [`Promote`](#ImportedFlexibleRemoteConnectors.Promote)                                                                               | Promote method.                                                                             |
| [`PromoteAll`](#ImportedFlexibleRemoteConnectors.PromoteAll)                                                                         | Promote the rows                                                                            |
| [`PropertyByAPIName`](#ImportedFlexibleRemoteConnectors.PropertyByAPIName)                                                           | Get a property by its API name.                                                             |
| [`PropertyById`](#ImportedFlexibleRemoteConnectors.PropertyById)                                                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#ImportedFlexibleRemoteConnectors.PropertyByName)                                                                 | Get a property by its unique name.                                                          |
| [`RemoveConvectionBCFromImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.RemoveConvectionBCFromImportedLoadCollection)     | Removes a Convection boundary condition.                                                    |
| [`RemoveDisplacementBCFromImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.RemoveDisplacementBCFromImportedLoadCollection) | Removes a Displacement boundary condition.                                                  |
| [`RemoveForceBCFromImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.RemoveForceBCFromImportedLoadCollection)               | Removes a Force boundary condition.                                                         |
| [`RemoveFromGroup`](#ImportedFlexibleRemoteConnectors.RemoveFromGroup)                                                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveHeatFluxBCFromImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.RemoveHeatFluxBCFromImportedLoadCollection)         | Removes a Heat Flux boundary condition.                                                     |
| [`RemoveMomentBCFromImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.RemoveMomentBCFromImportedLoadCollection)             | Removes a Moment boundary condition.                                                        |
| [`RemoveParameter`](#ImportedFlexibleRemoteConnectors.RemoveParameter)                                                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RemovePressureBCFromImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.RemovePressureBCFromImportedLoadCollection)         | Removes a Pressure boundary condition.                                                      |
| [`RemoveRotationBCFromImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.RemoveRotationBCFromImportedLoadCollection)         | Removes a Rotation boundary condition.                                                      |
| [`RemoveTemperatureBCFromImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.RemoveTemperatureBCFromImportedLoadCollection)   | Removes a Temperature boundary condition.                                                   |
| [`RemoveVoltageBCFromImportedLoadCollection`](#ImportedFlexibleRemoteConnectors.RemoveVoltageBCFromImportedLoadCollection)           | Removes a Voltage boundary condition.                                                       |
| [`SelectRows`](#ImportedFlexibleRemoteConnectors.SelectRows)                                                                         | Selects the specified rows (1-based page-relative array) and                                |
| [`SetCellValue`](#ImportedFlexibleRemoteConnectors.SetCellValue)                                                                     | Sets the cell value at the given 1-based page-relative row and                              |
| [`SetValueOnAllRows`](#ImportedFlexibleRemoteConnectors.SetValueOnAllRows)                                                           | Sets the cell value on ALL rows in the collection (across all pages,                        |
| [`SetValueOnAllVisibleRows`](#ImportedFlexibleRemoteConnectors.SetValueOnAllVisibleRows)                                             | Sets the cell value on all visible rows on the current page.                                |
| [`SetValueOnSelectedRows`](#ImportedFlexibleRemoteConnectors.SetValueOnSelectedRows)                                                 | Sets the cell value on specific rows. Handles edit, combo-box,                              |
| [`SortColumn`](#ImportedFlexibleRemoteConnectors.SortColumn)                                                                         | Sorts the worksheet by the given column index.                                              |
| [`WorksheetFunction`](#ImportedFlexibleRemoteConnectors.WorksheetFunction)                                                           | Executes a worksheet function: ChangeShow, SetPage, PreviousButton,                         |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImportedFlexibleRemoteConnectors.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ImportedFlexibleRemoteConnectors.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ImportedFlexibleRemoteConnectors.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ImportedFlexibleRemoteConnectors.Comments)                                 | Gets the list of associated comments.                         |
| [`Count`](#ImportedFlexibleRemoteConnectors.Count)                                       | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedFlexibleRemoteConnectors.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedFlexibleRemoteConnectors.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImportedFlexibleRemoteConnectors.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ImportedFlexibleRemoteConnectors.IconName)                                 | IconName property.                                            |
| [`Images`](#ImportedFlexibleRemoteConnectors.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ImportedFlexibleRemoteConnectors.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ImportedFlexibleRemoteConnectors.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Item`](#ImportedFlexibleRemoteConnectors.Item)                                         | Item property.                                                |
| [`Name`](#ImportedFlexibleRemoteConnectors.Name)                                         | Name property.                                                |
| [`ObjectId`](#ImportedFlexibleRemoteConnectors.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ImportedFlexibleRemoteConnectors.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ImportedFlexibleRemoteConnectors.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ImportedFlexibleRemoteConnectors.Parent)                                     | Parent property.                                              |
| [`Properties`](#ImportedFlexibleRemoteConnectors.Properties)                             | Gets the list of properties for this object.                  |
| [`PropertyCount`](#ImportedFlexibleRemoteConnectors.PropertyCount)                       | Gets the NumberOfColumns.                                     |
| [`ReadOnly`](#ImportedFlexibleRemoteConnectors.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#ImportedFlexibleRemoteConnectors.State)                                       | State property.                                               |
| [`Suppressed`](#ImportedFlexibleRemoteConnectors.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#ImportedFlexibleRemoteConnectors.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ImportedFlexibleRemoteConnectors.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedFlexibleRemoteConnectors.AttachedRefs"></a>

### *property* ImportedFlexibleRemoteConnectors.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Children"></a>

### *property* ImportedFlexibleRemoteConnectors.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.ClsId"></a>

### *property* ImportedFlexibleRemoteConnectors.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Comments"></a>

### *property* ImportedFlexibleRemoteConnectors.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Count"></a>

### *property* ImportedFlexibleRemoteConnectors.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.DataModelObjectCategory"></a>

### *property* ImportedFlexibleRemoteConnectors.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Figures"></a>

### *property* ImportedFlexibleRemoteConnectors.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GroupingFolder"></a>

### *property* ImportedFlexibleRemoteConnectors.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.IconName"></a>

### *property* ImportedFlexibleRemoteConnectors.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Images"></a>

### *property* ImportedFlexibleRemoteConnectors.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.ImportableObjectSourceId"></a>

### *property* ImportedFlexibleRemoteConnectors.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.InternalObject"></a>

### *property* ImportedFlexibleRemoteConnectors.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Item"></a>

### *property* ImportedFlexibleRemoteConnectors.Item *: [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Name"></a>

### *property* ImportedFlexibleRemoteConnectors.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.ObjectId"></a>

### *property* ImportedFlexibleRemoteConnectors.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.ObjectState"></a>

### *property* ImportedFlexibleRemoteConnectors.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.ObjectTags"></a>

### *property* ImportedFlexibleRemoteConnectors.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Parent"></a>

### *property* ImportedFlexibleRemoteConnectors.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Properties"></a>

### *property* ImportedFlexibleRemoteConnectors.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.PropertyCount"></a>

### *property* ImportedFlexibleRemoteConnectors.PropertyCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfColumns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.ReadOnly"></a>

### *property* ImportedFlexibleRemoteConnectors.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.State"></a>

### *property* ImportedFlexibleRemoteConnectors.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Suppressed"></a>

### *property* ImportedFlexibleRemoteConnectors.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.TransferableObjectId"></a>

### *property* ImportedFlexibleRemoteConnectors.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.VisibleProperties"></a>

### *property* ImportedFlexibleRemoteConnectors.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedFlexibleRemoteConnectors.Activate"></a>

### ImportedFlexibleRemoteConnectors.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddComment"></a>

### ImportedFlexibleRemoteConnectors.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddConvectionBCToImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.AddConvectionBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddDisplacementBCToImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.AddDisplacementBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddFigure"></a>

### ImportedFlexibleRemoteConnectors.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddForceBCToImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.AddForceBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddHeatFluxBCToImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.AddHeatFluxBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddImage"></a>

### ImportedFlexibleRemoteConnectors.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddMomentBCToImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.AddMomentBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddPressureBCToImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.AddPressureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddRotationBCToImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.AddRotationBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddTemperatureBCToImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.AddTemperatureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.AddVoltageBCToImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.AddVoltageBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.CheckRow"></a>

### ImportedFlexibleRemoteConnectors.CheckRow(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Selects the row, then checks or unchecks it.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.CheckRowNoSelect"></a>

### ImportedFlexibleRemoteConnectors.CheckRowNoSelect(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Checks or unchecks the row without selecting it first.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Copy"></a>

### ImportedFlexibleRemoteConnectors.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.CopyTo"></a>

### ImportedFlexibleRemoteConnectors.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.CreateObjRef"></a>

### ImportedFlexibleRemoteConnectors.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.CreateParameter"></a>

### ImportedFlexibleRemoteConnectors.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Cut"></a>

### ImportedFlexibleRemoteConnectors.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Delete"></a>

### ImportedFlexibleRemoteConnectors.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Duplicate"></a>

### ImportedFlexibleRemoteConnectors.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Equals"></a>

### ImportedFlexibleRemoteConnectors.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetAPIName"></a>

### ImportedFlexibleRemoteConnectors.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetAllProperties"></a>

### ImportedFlexibleRemoteConnectors.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetCellValue"></a>

### ImportedFlexibleRemoteConnectors.GetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Returns the text of the cell at the given 1-based page-relative
row and column. For promoted rows, returns the promoted object's
Name when column == 1.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetChildren"></a>

### ImportedFlexibleRemoteConnectors.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedFlexibleRemoteConnectors.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetColumnCount"></a>

### ImportedFlexibleRemoteConnectors.GetColumnCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of columns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetColumnHeaders"></a>

### ImportedFlexibleRemoteConnectors.GetColumnHeaders() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetColumnHeaders method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetDetailsView"></a>

### ImportedFlexibleRemoteConnectors.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetEnumName"></a>

### ImportedFlexibleRemoteConnectors.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetEnumerator"></a>

### ImportedFlexibleRemoteConnectors.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetHashCode"></a>

### ImportedFlexibleRemoteConnectors.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetIconFile"></a>

### ImportedFlexibleRemoteConnectors.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetLifetimeService"></a>

### ImportedFlexibleRemoteConnectors.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetObject"></a>

### ImportedFlexibleRemoteConnectors.GetObject(oneBasedIRow: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)

Get the row object

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetObjectData"></a>

### ImportedFlexibleRemoteConnectors.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetParameter"></a>

### ImportedFlexibleRemoteConnectors.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetPath"></a>

### ImportedFlexibleRemoteConnectors.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetPropertyName"></a>

### ImportedFlexibleRemoteConnectors.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetPropertyValue"></a>

### ImportedFlexibleRemoteConnectors.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetRowCount"></a>

### ImportedFlexibleRemoteConnectors.GetRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetTotalVisibleRowCount"></a>

### ImportedFlexibleRemoteConnectors.GetTotalVisibleRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the total number of visible rows across all pages.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetVisibleProperties"></a>

### ImportedFlexibleRemoteConnectors.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GetVisiblePropertyNames"></a>

### ImportedFlexibleRemoteConnectors.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren"></a>

### ImportedFlexibleRemoteConnectors.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.GroupSimilarObjects"></a>

### ImportedFlexibleRemoteConnectors.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.InitializeLifetimeService"></a>

### ImportedFlexibleRemoteConnectors.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.IsPropertyEditable"></a>

### ImportedFlexibleRemoteConnectors.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedFlexibleRemoteConnectors.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.IsPropertyVisible"></a>

### ImportedFlexibleRemoteConnectors.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedFlexibleRemoteConnectors.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Paste"></a>

### ImportedFlexibleRemoteConnectors.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.PerformRowAction"></a>

### ImportedFlexibleRemoteConnectors.PerformRowAction(row: [int](https://docs.python.org/3/builtins/functions.html#int), option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), item: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the row and executes a worksheet command (PROMOTE, CREATE,
GOTO_PROMOTED_ITEM, CHECK, UNCHECK) with the given item index.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.Promote"></a>

### ImportedFlexibleRemoteConnectors.Promote(iRows: Iterable[[int](https://docs.python.org/3/builtins/functions.html#int)], iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.PromoteAll"></a>

### ImportedFlexibleRemoteConnectors.PromoteAll(iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote the rows

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.PropertyByAPIName"></a>

### ImportedFlexibleRemoteConnectors.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.PropertyById"></a>

### ImportedFlexibleRemoteConnectors.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.PropertyByName"></a>

### ImportedFlexibleRemoteConnectors.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveConvectionBCFromImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.RemoveConvectionBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveDisplacementBCFromImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.RemoveDisplacementBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveForceBCFromImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.RemoveForceBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveFromGroup"></a>

### ImportedFlexibleRemoteConnectors.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveHeatFluxBCFromImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.RemoveHeatFluxBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveMomentBCFromImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.RemoveMomentBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveParameter"></a>

### ImportedFlexibleRemoteConnectors.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemovePressureBCFromImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.RemovePressureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveRotationBCFromImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.RemoveRotationBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveTemperatureBCFromImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.RemoveTemperatureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.RemoveVoltageBCFromImportedLoadCollection"></a>

### ImportedFlexibleRemoteConnectors.RemoveVoltageBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.SelectRows"></a>

### ImportedFlexibleRemoteConnectors.SelectRows(rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the specified rows (1-based page-relative array) and
deselects all others. Accepts an int array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.SetCellValue"></a>

### ImportedFlexibleRemoteConnectors.SetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value at the given 1-based page-relative row and
column. Handles read-only, edit, combo-box, and context-menu
column types automatically.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.SetValueOnAllRows"></a>

### ImportedFlexibleRemoteConnectors.SetValueOnAllRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on ALL rows in the collection (across all pages,
including rows hidden by the current page/filter).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.SetValueOnAllVisibleRows"></a>

### ImportedFlexibleRemoteConnectors.SetValueOnAllVisibleRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the cell value on all visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.SetValueOnSelectedRows"></a>

### ImportedFlexibleRemoteConnectors.SetValueOnSelectedRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str), rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on specific rows. Handles edit, combo-box,
and context-menu column types automatically.
Rows is a 1-based page-relative array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.SortColumn"></a>

### ImportedFlexibleRemoteConnectors.SortColumn(iCol: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sorts the worksheet by the given column index.
Toggles sort direction on repeated calls (off → ascending → descending).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedFlexibleRemoteConnectors.WorksheetFunction"></a>

### ImportedFlexibleRemoteConnectors.WorksheetFunction(option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Executes a worksheet function: ChangeShow, SetPage, PreviousButton,
NextButton, ResetButton, SelectAllOnPage.
```

<!-- !! processed by numpydoc !! -->

