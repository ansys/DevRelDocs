# `ImportedRigidRemoteConnectors`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedRigidRemoteConnectors"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedRigidRemoteConnectors(internalObject: Any)

<a id="ImportedRigidRemoteConnectors"></a>

### *class* ImportedRigidRemoteConnectors(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedRigidRemoteConnectors.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedRigidRemoteConnectors.Activate)                                                                             | Activate the current object.                                                                |
| [`AddComment`](#ImportedRigidRemoteConnectors.AddComment)                                                                         | Creates a new child Comment.                                                                |
| [`AddConvectionBCToImportedLoadCollection`](#ImportedRigidRemoteConnectors.AddConvectionBCToImportedLoadCollection)               | Adds a Convection boundary condition.                                                       |
| [`AddDisplacementBCToImportedLoadCollection`](#ImportedRigidRemoteConnectors.AddDisplacementBCToImportedLoadCollection)           | Adds a Displacement boundary condition.                                                     |
| [`AddFigure`](#ImportedRigidRemoteConnectors.AddFigure)                                                                           | Creates a new child Figure.                                                                 |
| [`AddForceBCToImportedLoadCollection`](#ImportedRigidRemoteConnectors.AddForceBCToImportedLoadCollection)                         | Adds a Force boundary condition.                                                            |
| [`AddHeatFluxBCToImportedLoadCollection`](#ImportedRigidRemoteConnectors.AddHeatFluxBCToImportedLoadCollection)                   | Adds a Heat Flux boundary condition.                                                        |
| [`AddImage`](#ImportedRigidRemoteConnectors.AddImage)                                                                             | Creates a new child Image.                                                                  |
| [`AddMomentBCToImportedLoadCollection`](#ImportedRigidRemoteConnectors.AddMomentBCToImportedLoadCollection)                       | Adds a Moment boundary condition.                                                           |
| [`AddPressureBCToImportedLoadCollection`](#ImportedRigidRemoteConnectors.AddPressureBCToImportedLoadCollection)                   | Adds a Pressure boundary condition.                                                         |
| [`AddRotationBCToImportedLoadCollection`](#ImportedRigidRemoteConnectors.AddRotationBCToImportedLoadCollection)                   | Adds a Rotation boundary condition.                                                         |
| [`AddTemperatureBCToImportedLoadCollection`](#ImportedRigidRemoteConnectors.AddTemperatureBCToImportedLoadCollection)             | Adds a Temperature boundary condition.                                                      |
| [`AddVoltageBCToImportedLoadCollection`](#ImportedRigidRemoteConnectors.AddVoltageBCToImportedLoadCollection)                     | Adds a Voltage boundary condition.                                                          |
| [`CheckRow`](#ImportedRigidRemoteConnectors.CheckRow)                                                                             | Selects the row, then checks or unchecks it.                                                |
| [`CheckRowNoSelect`](#ImportedRigidRemoteConnectors.CheckRowNoSelect)                                                             | Checks or unchecks the row without selecting it first.                                      |
| [`Copy`](#ImportedRigidRemoteConnectors.Copy)                                                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImportedRigidRemoteConnectors.CopyTo)                                                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImportedRigidRemoteConnectors.CreateObjRef)                                                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImportedRigidRemoteConnectors.CreateParameter)                                                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImportedRigidRemoteConnectors.Cut)                                                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ImportedRigidRemoteConnectors.Delete)                                                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#ImportedRigidRemoteConnectors.Duplicate)                                                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImportedRigidRemoteConnectors.Equals)                                                                                 | Equals method.                                                                              |
| [`GetAPIName`](#ImportedRigidRemoteConnectors.GetAPIName)                                                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImportedRigidRemoteConnectors.GetAllProperties)                                                             | GetAllProperties method.                                                                    |
| [`GetCellValue`](#ImportedRigidRemoteConnectors.GetCellValue)                                                                     | Returns the text of the cell at the given 1-based page-relative                             |
| [`GetChildren`](#ImportedRigidRemoteConnectors.GetChildren)                                                                       | Gets the list of children, filtered by type.                                                |
| [`GetColumnCount`](#ImportedRigidRemoteConnectors.GetColumnCount)                                                                 | Returns the number of columns.                                                              |
| [`GetColumnHeaders`](#ImportedRigidRemoteConnectors.GetColumnHeaders)                                                             | GetColumnHeaders method.                                                                    |
| [`GetDetailsView`](#ImportedRigidRemoteConnectors.GetDetailsView)                                                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImportedRigidRemoteConnectors.GetEnumName)                                                                       | Enum name bound to value                                                                    |
| [`GetEnumerator`](#ImportedRigidRemoteConnectors.GetEnumerator)                                                                   | GetEnumerator method.                                                                       |
| [`GetHashCode`](#ImportedRigidRemoteConnectors.GetHashCode)                                                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImportedRigidRemoteConnectors.GetIconFile)                                                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImportedRigidRemoteConnectors.GetLifetimeService)                                                         | GetLifetimeService method.                                                                  |
| [`GetObject`](#ImportedRigidRemoteConnectors.GetObject)                                                                           | Get the row object                                                                          |
| [`GetObjectData`](#ImportedRigidRemoteConnectors.GetObjectData)                                                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#ImportedRigidRemoteConnectors.GetParameter)                                                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImportedRigidRemoteConnectors.GetPath)                                                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#ImportedRigidRemoteConnectors.GetPropertyName)                                                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImportedRigidRemoteConnectors.GetPropertyValue)                                                             | GetPropertyValue method.                                                                    |
| [`GetRowCount`](#ImportedRigidRemoteConnectors.GetRowCount)                                                                       | Returns the number of visible rows on the current page.                                     |
| [`GetTotalVisibleRowCount`](#ImportedRigidRemoteConnectors.GetTotalVisibleRowCount)                                               | Returns the total number of visible rows across all pages.                                  |
| [`GetVisibleProperties`](#ImportedRigidRemoteConnectors.GetVisibleProperties)                                                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImportedRigidRemoteConnectors.GetVisiblePropertyNames)                                               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImportedRigidRemoteConnectors.GroupAllSimilarChildren)                                               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedRigidRemoteConnectors.GroupSimilarObjects)                                                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImportedRigidRemoteConnectors.InitializeLifetimeService)                                           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImportedRigidRemoteConnectors.IsPropertyEditable)                                                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImportedRigidRemoteConnectors.IsPropertyVisible)                                                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImportedRigidRemoteConnectors.Paste)                                                                                   | Pastes to the current DataModelObject context.                                              |
| [`PerformRowAction`](#ImportedRigidRemoteConnectors.PerformRowAction)                                                             | Selects the row and executes a worksheet command (PROMOTE, CREATE,                          |
| [`Promote`](#ImportedRigidRemoteConnectors.Promote)                                                                               | Promote method.                                                                             |
| [`PromoteAll`](#ImportedRigidRemoteConnectors.PromoteAll)                                                                         | Promote the rows                                                                            |
| [`PropertyByAPIName`](#ImportedRigidRemoteConnectors.PropertyByAPIName)                                                           | Get a property by its API name.                                                             |
| [`PropertyById`](#ImportedRigidRemoteConnectors.PropertyById)                                                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#ImportedRigidRemoteConnectors.PropertyByName)                                                                 | Get a property by its unique name.                                                          |
| [`RemoveConvectionBCFromImportedLoadCollection`](#ImportedRigidRemoteConnectors.RemoveConvectionBCFromImportedLoadCollection)     | Removes a Convection boundary condition.                                                    |
| [`RemoveDisplacementBCFromImportedLoadCollection`](#ImportedRigidRemoteConnectors.RemoveDisplacementBCFromImportedLoadCollection) | Removes a Displacement boundary condition.                                                  |
| [`RemoveForceBCFromImportedLoadCollection`](#ImportedRigidRemoteConnectors.RemoveForceBCFromImportedLoadCollection)               | Removes a Force boundary condition.                                                         |
| [`RemoveFromGroup`](#ImportedRigidRemoteConnectors.RemoveFromGroup)                                                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveHeatFluxBCFromImportedLoadCollection`](#ImportedRigidRemoteConnectors.RemoveHeatFluxBCFromImportedLoadCollection)         | Removes a Heat Flux boundary condition.                                                     |
| [`RemoveMomentBCFromImportedLoadCollection`](#ImportedRigidRemoteConnectors.RemoveMomentBCFromImportedLoadCollection)             | Removes a Moment boundary condition.                                                        |
| [`RemoveParameter`](#ImportedRigidRemoteConnectors.RemoveParameter)                                                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RemovePressureBCFromImportedLoadCollection`](#ImportedRigidRemoteConnectors.RemovePressureBCFromImportedLoadCollection)         | Removes a Pressure boundary condition.                                                      |
| [`RemoveRotationBCFromImportedLoadCollection`](#ImportedRigidRemoteConnectors.RemoveRotationBCFromImportedLoadCollection)         | Removes a Rotation boundary condition.                                                      |
| [`RemoveTemperatureBCFromImportedLoadCollection`](#ImportedRigidRemoteConnectors.RemoveTemperatureBCFromImportedLoadCollection)   | Removes a Temperature boundary condition.                                                   |
| [`RemoveVoltageBCFromImportedLoadCollection`](#ImportedRigidRemoteConnectors.RemoveVoltageBCFromImportedLoadCollection)           | Removes a Voltage boundary condition.                                                       |
| [`SelectRows`](#ImportedRigidRemoteConnectors.SelectRows)                                                                         | Selects the specified rows (1-based page-relative array) and                                |
| [`SetCellValue`](#ImportedRigidRemoteConnectors.SetCellValue)                                                                     | Sets the cell value at the given 1-based page-relative row and                              |
| [`SetValueOnAllRows`](#ImportedRigidRemoteConnectors.SetValueOnAllRows)                                                           | Sets the cell value on ALL rows in the collection (across all pages,                        |
| [`SetValueOnAllVisibleRows`](#ImportedRigidRemoteConnectors.SetValueOnAllVisibleRows)                                             | Sets the cell value on all visible rows on the current page.                                |
| [`SetValueOnSelectedRows`](#ImportedRigidRemoteConnectors.SetValueOnSelectedRows)                                                 | Sets the cell value on specific rows. Handles edit, combo-box,                              |
| [`SortColumn`](#ImportedRigidRemoteConnectors.SortColumn)                                                                         | Sorts the worksheet by the given column index.                                              |
| [`WorksheetFunction`](#ImportedRigidRemoteConnectors.WorksheetFunction)                                                           | Executes a worksheet function: ChangeShow, SetPage, PreviousButton,                         |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImportedRigidRemoteConnectors.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ImportedRigidRemoteConnectors.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ImportedRigidRemoteConnectors.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ImportedRigidRemoteConnectors.Comments)                                 | Gets the list of associated comments.                         |
| [`Count`](#ImportedRigidRemoteConnectors.Count)                                       | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedRigidRemoteConnectors.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedRigidRemoteConnectors.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImportedRigidRemoteConnectors.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ImportedRigidRemoteConnectors.IconName)                                 | IconName property.                                            |
| [`Images`](#ImportedRigidRemoteConnectors.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ImportedRigidRemoteConnectors.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ImportedRigidRemoteConnectors.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Item`](#ImportedRigidRemoteConnectors.Item)                                         | Item property.                                                |
| [`Name`](#ImportedRigidRemoteConnectors.Name)                                         | Name property.                                                |
| [`ObjectId`](#ImportedRigidRemoteConnectors.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ImportedRigidRemoteConnectors.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ImportedRigidRemoteConnectors.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ImportedRigidRemoteConnectors.Parent)                                     | Parent property.                                              |
| [`Properties`](#ImportedRigidRemoteConnectors.Properties)                             | Gets the list of properties for this object.                  |
| [`PropertyCount`](#ImportedRigidRemoteConnectors.PropertyCount)                       | Gets the NumberOfColumns.                                     |
| [`ReadOnly`](#ImportedRigidRemoteConnectors.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#ImportedRigidRemoteConnectors.State)                                       | State property.                                               |
| [`Suppressed`](#ImportedRigidRemoteConnectors.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#ImportedRigidRemoteConnectors.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ImportedRigidRemoteConnectors.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedRigidRemoteConnectors.AttachedRefs"></a>

### *property* ImportedRigidRemoteConnectors.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Children"></a>

### *property* ImportedRigidRemoteConnectors.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.ClsId"></a>

### *property* ImportedRigidRemoteConnectors.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Comments"></a>

### *property* ImportedRigidRemoteConnectors.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Count"></a>

### *property* ImportedRigidRemoteConnectors.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.DataModelObjectCategory"></a>

### *property* ImportedRigidRemoteConnectors.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Figures"></a>

### *property* ImportedRigidRemoteConnectors.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GroupingFolder"></a>

### *property* ImportedRigidRemoteConnectors.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.IconName"></a>

### *property* ImportedRigidRemoteConnectors.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Images"></a>

### *property* ImportedRigidRemoteConnectors.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.ImportableObjectSourceId"></a>

### *property* ImportedRigidRemoteConnectors.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.InternalObject"></a>

### *property* ImportedRigidRemoteConnectors.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Item"></a>

### *property* ImportedRigidRemoteConnectors.Item *: [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Name"></a>

### *property* ImportedRigidRemoteConnectors.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.ObjectId"></a>

### *property* ImportedRigidRemoteConnectors.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.ObjectState"></a>

### *property* ImportedRigidRemoteConnectors.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.ObjectTags"></a>

### *property* ImportedRigidRemoteConnectors.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Parent"></a>

### *property* ImportedRigidRemoteConnectors.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Properties"></a>

### *property* ImportedRigidRemoteConnectors.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.PropertyCount"></a>

### *property* ImportedRigidRemoteConnectors.PropertyCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfColumns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.ReadOnly"></a>

### *property* ImportedRigidRemoteConnectors.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.State"></a>

### *property* ImportedRigidRemoteConnectors.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Suppressed"></a>

### *property* ImportedRigidRemoteConnectors.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.TransferableObjectId"></a>

### *property* ImportedRigidRemoteConnectors.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.VisibleProperties"></a>

### *property* ImportedRigidRemoteConnectors.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedRigidRemoteConnectors.Activate"></a>

### ImportedRigidRemoteConnectors.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddComment"></a>

### ImportedRigidRemoteConnectors.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddConvectionBCToImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.AddConvectionBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddDisplacementBCToImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.AddDisplacementBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddFigure"></a>

### ImportedRigidRemoteConnectors.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddForceBCToImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.AddForceBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddHeatFluxBCToImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.AddHeatFluxBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddImage"></a>

### ImportedRigidRemoteConnectors.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddMomentBCToImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.AddMomentBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddPressureBCToImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.AddPressureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddRotationBCToImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.AddRotationBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddTemperatureBCToImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.AddTemperatureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.AddVoltageBCToImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.AddVoltageBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.CheckRow"></a>

### ImportedRigidRemoteConnectors.CheckRow(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Selects the row, then checks or unchecks it.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.CheckRowNoSelect"></a>

### ImportedRigidRemoteConnectors.CheckRowNoSelect(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Checks or unchecks the row without selecting it first.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Copy"></a>

### ImportedRigidRemoteConnectors.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.CopyTo"></a>

### ImportedRigidRemoteConnectors.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.CreateObjRef"></a>

### ImportedRigidRemoteConnectors.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.CreateParameter"></a>

### ImportedRigidRemoteConnectors.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Cut"></a>

### ImportedRigidRemoteConnectors.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Delete"></a>

### ImportedRigidRemoteConnectors.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Duplicate"></a>

### ImportedRigidRemoteConnectors.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Equals"></a>

### ImportedRigidRemoteConnectors.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetAPIName"></a>

### ImportedRigidRemoteConnectors.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetAllProperties"></a>

### ImportedRigidRemoteConnectors.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetCellValue"></a>

### ImportedRigidRemoteConnectors.GetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Returns the text of the cell at the given 1-based page-relative
row and column. For promoted rows, returns the promoted object's
Name when column == 1.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetChildren"></a>

### ImportedRigidRemoteConnectors.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedRigidRemoteConnectors.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetColumnCount"></a>

### ImportedRigidRemoteConnectors.GetColumnCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of columns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetColumnHeaders"></a>

### ImportedRigidRemoteConnectors.GetColumnHeaders() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetColumnHeaders method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetDetailsView"></a>

### ImportedRigidRemoteConnectors.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetEnumName"></a>

### ImportedRigidRemoteConnectors.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetEnumerator"></a>

### ImportedRigidRemoteConnectors.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetHashCode"></a>

### ImportedRigidRemoteConnectors.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetIconFile"></a>

### ImportedRigidRemoteConnectors.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetLifetimeService"></a>

### ImportedRigidRemoteConnectors.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetObject"></a>

### ImportedRigidRemoteConnectors.GetObject(oneBasedIRow: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)

Get the row object

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetObjectData"></a>

### ImportedRigidRemoteConnectors.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetParameter"></a>

### ImportedRigidRemoteConnectors.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetPath"></a>

### ImportedRigidRemoteConnectors.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetPropertyName"></a>

### ImportedRigidRemoteConnectors.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetPropertyValue"></a>

### ImportedRigidRemoteConnectors.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetRowCount"></a>

### ImportedRigidRemoteConnectors.GetRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetTotalVisibleRowCount"></a>

### ImportedRigidRemoteConnectors.GetTotalVisibleRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the total number of visible rows across all pages.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetVisibleProperties"></a>

### ImportedRigidRemoteConnectors.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GetVisiblePropertyNames"></a>

### ImportedRigidRemoteConnectors.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GroupAllSimilarChildren"></a>

### ImportedRigidRemoteConnectors.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.GroupSimilarObjects"></a>

### ImportedRigidRemoteConnectors.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.InitializeLifetimeService"></a>

### ImportedRigidRemoteConnectors.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.IsPropertyEditable"></a>

### ImportedRigidRemoteConnectors.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedRigidRemoteConnectors.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.IsPropertyVisible"></a>

### ImportedRigidRemoteConnectors.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedRigidRemoteConnectors.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Paste"></a>

### ImportedRigidRemoteConnectors.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.PerformRowAction"></a>

### ImportedRigidRemoteConnectors.PerformRowAction(row: [int](https://docs.python.org/3/builtins/functions.html#int), option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), item: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the row and executes a worksheet command (PROMOTE, CREATE,
GOTO_PROMOTED_ITEM, CHECK, UNCHECK) with the given item index.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.Promote"></a>

### ImportedRigidRemoteConnectors.Promote(iRows: Iterable[[int](https://docs.python.org/3/builtins/functions.html#int)], iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.PromoteAll"></a>

### ImportedRigidRemoteConnectors.PromoteAll(iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote the rows

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.PropertyByAPIName"></a>

### ImportedRigidRemoteConnectors.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.PropertyById"></a>

### ImportedRigidRemoteConnectors.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.PropertyByName"></a>

### ImportedRigidRemoteConnectors.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveConvectionBCFromImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.RemoveConvectionBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveDisplacementBCFromImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.RemoveDisplacementBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveForceBCFromImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.RemoveForceBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveFromGroup"></a>

### ImportedRigidRemoteConnectors.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveHeatFluxBCFromImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.RemoveHeatFluxBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveMomentBCFromImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.RemoveMomentBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveParameter"></a>

### ImportedRigidRemoteConnectors.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemovePressureBCFromImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.RemovePressureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveRotationBCFromImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.RemoveRotationBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveTemperatureBCFromImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.RemoveTemperatureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.RemoveVoltageBCFromImportedLoadCollection"></a>

### ImportedRigidRemoteConnectors.RemoveVoltageBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.SelectRows"></a>

### ImportedRigidRemoteConnectors.SelectRows(rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the specified rows (1-based page-relative array) and
deselects all others. Accepts an int array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.SetCellValue"></a>

### ImportedRigidRemoteConnectors.SetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value at the given 1-based page-relative row and
column. Handles read-only, edit, combo-box, and context-menu
column types automatically.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.SetValueOnAllRows"></a>

### ImportedRigidRemoteConnectors.SetValueOnAllRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on ALL rows in the collection (across all pages,
including rows hidden by the current page/filter).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.SetValueOnAllVisibleRows"></a>

### ImportedRigidRemoteConnectors.SetValueOnAllVisibleRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the cell value on all visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.SetValueOnSelectedRows"></a>

### ImportedRigidRemoteConnectors.SetValueOnSelectedRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str), rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on specific rows. Handles edit, combo-box,
and context-menu column types automatically.
Rows is a 1-based page-relative array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.SortColumn"></a>

### ImportedRigidRemoteConnectors.SortColumn(iCol: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sorts the worksheet by the given column index.
Toggles sort direction on repeated calls (off → ascending → descending).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedRigidRemoteConnectors.WorksheetFunction"></a>

### ImportedRigidRemoteConnectors.WorksheetFunction(option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Executes a worksheet function: ChangeShow, SetPage, PreviousButton,
NextButton, ResetButton, SelectAllOnPage.
```

<!-- !! processed by numpydoc !! -->

