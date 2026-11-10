# `ImportedCrossSectionAlignments`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedCrossSectionAlignments"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedCrossSectionAlignments(internalObject: Any)

<a id="ImportedCrossSectionAlignments"></a>

### *class* ImportedCrossSectionAlignments(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines an Imported Cross Section Alignments collection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedCrossSectionAlignments.Activate)                                                                             | Activate the current object.                                                                |
| [`AddComment`](#ImportedCrossSectionAlignments.AddComment)                                                                         | Creates a new child Comment.                                                                |
| [`AddConvectionBCToImportedLoadCollection`](#ImportedCrossSectionAlignments.AddConvectionBCToImportedLoadCollection)               | Adds a Convection boundary condition.                                                       |
| [`AddDisplacementBCToImportedLoadCollection`](#ImportedCrossSectionAlignments.AddDisplacementBCToImportedLoadCollection)           | Adds a Displacement boundary condition.                                                     |
| [`AddFigure`](#ImportedCrossSectionAlignments.AddFigure)                                                                           | Creates a new child Figure.                                                                 |
| [`AddForceBCToImportedLoadCollection`](#ImportedCrossSectionAlignments.AddForceBCToImportedLoadCollection)                         | Adds a Force boundary condition.                                                            |
| [`AddHeatFluxBCToImportedLoadCollection`](#ImportedCrossSectionAlignments.AddHeatFluxBCToImportedLoadCollection)                   | Adds a Heat Flux boundary condition.                                                        |
| [`AddImage`](#ImportedCrossSectionAlignments.AddImage)                                                                             | Creates a new child Image.                                                                  |
| [`AddMomentBCToImportedLoadCollection`](#ImportedCrossSectionAlignments.AddMomentBCToImportedLoadCollection)                       | Adds a Moment boundary condition.                                                           |
| [`AddPressureBCToImportedLoadCollection`](#ImportedCrossSectionAlignments.AddPressureBCToImportedLoadCollection)                   | Adds a Pressure boundary condition.                                                         |
| [`AddRotationBCToImportedLoadCollection`](#ImportedCrossSectionAlignments.AddRotationBCToImportedLoadCollection)                   | Adds a Rotation boundary condition.                                                         |
| [`AddTemperatureBCToImportedLoadCollection`](#ImportedCrossSectionAlignments.AddTemperatureBCToImportedLoadCollection)             | Adds a Temperature boundary condition.                                                      |
| [`AddVoltageBCToImportedLoadCollection`](#ImportedCrossSectionAlignments.AddVoltageBCToImportedLoadCollection)                     | Adds a Voltage boundary condition.                                                          |
| [`CheckRow`](#ImportedCrossSectionAlignments.CheckRow)                                                                             | Selects the row, then checks or unchecks it.                                                |
| [`CheckRowNoSelect`](#ImportedCrossSectionAlignments.CheckRowNoSelect)                                                             | Checks or unchecks the row without selecting it first.                                      |
| [`Copy`](#ImportedCrossSectionAlignments.Copy)                                                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImportedCrossSectionAlignments.CopyTo)                                                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImportedCrossSectionAlignments.CreateObjRef)                                                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImportedCrossSectionAlignments.CreateParameter)                                                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImportedCrossSectionAlignments.Cut)                                                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ImportedCrossSectionAlignments.Delete)                                                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#ImportedCrossSectionAlignments.Duplicate)                                                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImportedCrossSectionAlignments.Equals)                                                                                 | Equals method.                                                                              |
| [`GetAPIName`](#ImportedCrossSectionAlignments.GetAPIName)                                                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImportedCrossSectionAlignments.GetAllProperties)                                                             | GetAllProperties method.                                                                    |
| [`GetCellValue`](#ImportedCrossSectionAlignments.GetCellValue)                                                                     | Returns the text of the cell at the given 1-based page-relative                             |
| [`GetChildren`](#ImportedCrossSectionAlignments.GetChildren)                                                                       | Gets the list of children, filtered by type.                                                |
| [`GetColumnCount`](#ImportedCrossSectionAlignments.GetColumnCount)                                                                 | Returns the number of columns.                                                              |
| [`GetColumnHeaders`](#ImportedCrossSectionAlignments.GetColumnHeaders)                                                             | GetColumnHeaders method.                                                                    |
| [`GetDetailsView`](#ImportedCrossSectionAlignments.GetDetailsView)                                                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImportedCrossSectionAlignments.GetEnumName)                                                                       | Enum name bound to value                                                                    |
| [`GetEnumerator`](#ImportedCrossSectionAlignments.GetEnumerator)                                                                   | GetEnumerator method.                                                                       |
| [`GetHashCode`](#ImportedCrossSectionAlignments.GetHashCode)                                                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImportedCrossSectionAlignments.GetIconFile)                                                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImportedCrossSectionAlignments.GetLifetimeService)                                                         | GetLifetimeService method.                                                                  |
| [`GetObject`](#ImportedCrossSectionAlignments.GetObject)                                                                           | Get the row object                                                                          |
| [`GetObjectData`](#ImportedCrossSectionAlignments.GetObjectData)                                                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#ImportedCrossSectionAlignments.GetParameter)                                                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImportedCrossSectionAlignments.GetPath)                                                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#ImportedCrossSectionAlignments.GetPropertyName)                                                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImportedCrossSectionAlignments.GetPropertyValue)                                                             | GetPropertyValue method.                                                                    |
| [`GetRowCount`](#ImportedCrossSectionAlignments.GetRowCount)                                                                       | Returns the number of visible rows on the current page.                                     |
| [`GetTotalVisibleRowCount`](#ImportedCrossSectionAlignments.GetTotalVisibleRowCount)                                               | Returns the total number of visible rows across all pages.                                  |
| [`GetVisibleProperties`](#ImportedCrossSectionAlignments.GetVisibleProperties)                                                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImportedCrossSectionAlignments.GetVisiblePropertyNames)                                               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImportedCrossSectionAlignments.GroupAllSimilarChildren)                                               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedCrossSectionAlignments.GroupSimilarObjects)                                                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImportedCrossSectionAlignments.InitializeLifetimeService)                                           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImportedCrossSectionAlignments.IsPropertyEditable)                                                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImportedCrossSectionAlignments.IsPropertyVisible)                                                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImportedCrossSectionAlignments.Paste)                                                                                   | Pastes to the current DataModelObject context.                                              |
| [`PerformRowAction`](#ImportedCrossSectionAlignments.PerformRowAction)                                                             | Selects the row and executes a worksheet command (PROMOTE, CREATE,                          |
| [`Promote`](#ImportedCrossSectionAlignments.Promote)                                                                               | Promote method.                                                                             |
| [`PromoteAll`](#ImportedCrossSectionAlignments.PromoteAll)                                                                         | Promote the rows                                                                            |
| [`PropertyByAPIName`](#ImportedCrossSectionAlignments.PropertyByAPIName)                                                           | Get a property by its API name.                                                             |
| [`PropertyById`](#ImportedCrossSectionAlignments.PropertyById)                                                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#ImportedCrossSectionAlignments.PropertyByName)                                                                 | Get a property by its unique name.                                                          |
| [`RemoveConvectionBCFromImportedLoadCollection`](#ImportedCrossSectionAlignments.RemoveConvectionBCFromImportedLoadCollection)     | Removes a Convection boundary condition.                                                    |
| [`RemoveDisplacementBCFromImportedLoadCollection`](#ImportedCrossSectionAlignments.RemoveDisplacementBCFromImportedLoadCollection) | Removes a Displacement boundary condition.                                                  |
| [`RemoveForceBCFromImportedLoadCollection`](#ImportedCrossSectionAlignments.RemoveForceBCFromImportedLoadCollection)               | Removes a Force boundary condition.                                                         |
| [`RemoveFromGroup`](#ImportedCrossSectionAlignments.RemoveFromGroup)                                                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveHeatFluxBCFromImportedLoadCollection`](#ImportedCrossSectionAlignments.RemoveHeatFluxBCFromImportedLoadCollection)         | Removes a Heat Flux boundary condition.                                                     |
| [`RemoveMomentBCFromImportedLoadCollection`](#ImportedCrossSectionAlignments.RemoveMomentBCFromImportedLoadCollection)             | Removes a Moment boundary condition.                                                        |
| [`RemoveParameter`](#ImportedCrossSectionAlignments.RemoveParameter)                                                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RemovePressureBCFromImportedLoadCollection`](#ImportedCrossSectionAlignments.RemovePressureBCFromImportedLoadCollection)         | Removes a Pressure boundary condition.                                                      |
| [`RemoveRotationBCFromImportedLoadCollection`](#ImportedCrossSectionAlignments.RemoveRotationBCFromImportedLoadCollection)         | Removes a Rotation boundary condition.                                                      |
| [`RemoveTemperatureBCFromImportedLoadCollection`](#ImportedCrossSectionAlignments.RemoveTemperatureBCFromImportedLoadCollection)   | Removes a Temperature boundary condition.                                                   |
| [`RemoveVoltageBCFromImportedLoadCollection`](#ImportedCrossSectionAlignments.RemoveVoltageBCFromImportedLoadCollection)           | Removes a Voltage boundary condition.                                                       |
| [`SelectRows`](#ImportedCrossSectionAlignments.SelectRows)                                                                         | Selects the specified rows (1-based page-relative array) and                                |
| [`SetCellValue`](#ImportedCrossSectionAlignments.SetCellValue)                                                                     | Sets the cell value at the given 1-based page-relative row and                              |
| [`SetValueOnAllRows`](#ImportedCrossSectionAlignments.SetValueOnAllRows)                                                           | Sets the cell value on ALL rows in the collection (across all pages,                        |
| [`SetValueOnAllVisibleRows`](#ImportedCrossSectionAlignments.SetValueOnAllVisibleRows)                                             | Sets the cell value on all visible rows on the current page.                                |
| [`SetValueOnSelectedRows`](#ImportedCrossSectionAlignments.SetValueOnSelectedRows)                                                 | Sets the cell value on specific rows. Handles edit, combo-box,                              |
| [`SortColumn`](#ImportedCrossSectionAlignments.SortColumn)                                                                         | Sorts the worksheet by the given column index.                                              |
| [`WorksheetFunction`](#ImportedCrossSectionAlignments.WorksheetFunction)                                                           | Executes a worksheet function: ChangeShow, SetPage, PreviousButton,                         |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImportedCrossSectionAlignments.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ImportedCrossSectionAlignments.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ImportedCrossSectionAlignments.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ImportedCrossSectionAlignments.Comments)                                 | Gets the list of associated comments.                         |
| [`Count`](#ImportedCrossSectionAlignments.Count)                                       | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedCrossSectionAlignments.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedCrossSectionAlignments.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImportedCrossSectionAlignments.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ImportedCrossSectionAlignments.IconName)                                 | IconName property.                                            |
| [`Images`](#ImportedCrossSectionAlignments.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ImportedCrossSectionAlignments.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ImportedCrossSectionAlignments.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Item`](#ImportedCrossSectionAlignments.Item)                                         | Item property.                                                |
| [`Name`](#ImportedCrossSectionAlignments.Name)                                         | Name property.                                                |
| [`ObjectId`](#ImportedCrossSectionAlignments.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ImportedCrossSectionAlignments.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ImportedCrossSectionAlignments.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ImportedCrossSectionAlignments.Parent)                                     | Parent property.                                              |
| [`Properties`](#ImportedCrossSectionAlignments.Properties)                             | Gets the list of properties for this object.                  |
| [`PropertyCount`](#ImportedCrossSectionAlignments.PropertyCount)                       | Gets the NumberOfColumns.                                     |
| [`ReadOnly`](#ImportedCrossSectionAlignments.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#ImportedCrossSectionAlignments.State)                                       | State property.                                               |
| [`Suppressed`](#ImportedCrossSectionAlignments.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#ImportedCrossSectionAlignments.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ImportedCrossSectionAlignments.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCrossSectionAlignments.AttachedRefs"></a>

### *property* ImportedCrossSectionAlignments.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Children"></a>

### *property* ImportedCrossSectionAlignments.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.ClsId"></a>

### *property* ImportedCrossSectionAlignments.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Comments"></a>

### *property* ImportedCrossSectionAlignments.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Count"></a>

### *property* ImportedCrossSectionAlignments.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.DataModelObjectCategory"></a>

### *property* ImportedCrossSectionAlignments.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Figures"></a>

### *property* ImportedCrossSectionAlignments.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GroupingFolder"></a>

### *property* ImportedCrossSectionAlignments.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.IconName"></a>

### *property* ImportedCrossSectionAlignments.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Images"></a>

### *property* ImportedCrossSectionAlignments.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.ImportableObjectSourceId"></a>

### *property* ImportedCrossSectionAlignments.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.InternalObject"></a>

### *property* ImportedCrossSectionAlignments.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSImportedCrossSectionAlignmentCollectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Item"></a>

### *property* ImportedCrossSectionAlignments.Item *: [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Name"></a>

### *property* ImportedCrossSectionAlignments.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.ObjectId"></a>

### *property* ImportedCrossSectionAlignments.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.ObjectState"></a>

### *property* ImportedCrossSectionAlignments.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.ObjectTags"></a>

### *property* ImportedCrossSectionAlignments.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Parent"></a>

### *property* ImportedCrossSectionAlignments.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Properties"></a>

### *property* ImportedCrossSectionAlignments.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.PropertyCount"></a>

### *property* ImportedCrossSectionAlignments.PropertyCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfColumns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.ReadOnly"></a>

### *property* ImportedCrossSectionAlignments.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.State"></a>

### *property* ImportedCrossSectionAlignments.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Suppressed"></a>

### *property* ImportedCrossSectionAlignments.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.TransferableObjectId"></a>

### *property* ImportedCrossSectionAlignments.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.VisibleProperties"></a>

### *property* ImportedCrossSectionAlignments.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCrossSectionAlignments.Activate"></a>

### ImportedCrossSectionAlignments.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddComment"></a>

### ImportedCrossSectionAlignments.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddConvectionBCToImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.AddConvectionBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddDisplacementBCToImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.AddDisplacementBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddFigure"></a>

### ImportedCrossSectionAlignments.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddForceBCToImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.AddForceBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddHeatFluxBCToImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.AddHeatFluxBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddImage"></a>

### ImportedCrossSectionAlignments.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddMomentBCToImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.AddMomentBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddPressureBCToImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.AddPressureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddRotationBCToImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.AddRotationBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddTemperatureBCToImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.AddTemperatureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.AddVoltageBCToImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.AddVoltageBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.CheckRow"></a>

### ImportedCrossSectionAlignments.CheckRow(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Selects the row, then checks or unchecks it.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.CheckRowNoSelect"></a>

### ImportedCrossSectionAlignments.CheckRowNoSelect(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Checks or unchecks the row without selecting it first.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Copy"></a>

### ImportedCrossSectionAlignments.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.CopyTo"></a>

### ImportedCrossSectionAlignments.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.CreateObjRef"></a>

### ImportedCrossSectionAlignments.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.CreateParameter"></a>

### ImportedCrossSectionAlignments.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Cut"></a>

### ImportedCrossSectionAlignments.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Delete"></a>

### ImportedCrossSectionAlignments.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Duplicate"></a>

### ImportedCrossSectionAlignments.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Equals"></a>

### ImportedCrossSectionAlignments.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetAPIName"></a>

### ImportedCrossSectionAlignments.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetAllProperties"></a>

### ImportedCrossSectionAlignments.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetCellValue"></a>

### ImportedCrossSectionAlignments.GetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Returns the text of the cell at the given 1-based page-relative
row and column. For promoted rows, returns the promoted object's
Name when column == 1.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetChildren"></a>

### ImportedCrossSectionAlignments.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedCrossSectionAlignments.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetColumnCount"></a>

### ImportedCrossSectionAlignments.GetColumnCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of columns.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetColumnHeaders"></a>

### ImportedCrossSectionAlignments.GetColumnHeaders() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetColumnHeaders method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetDetailsView"></a>

### ImportedCrossSectionAlignments.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetEnumName"></a>

### ImportedCrossSectionAlignments.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetEnumerator"></a>

### ImportedCrossSectionAlignments.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetHashCode"></a>

### ImportedCrossSectionAlignments.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetIconFile"></a>

### ImportedCrossSectionAlignments.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetLifetimeService"></a>

### ImportedCrossSectionAlignments.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetObject"></a>

### ImportedCrossSectionAlignments.GetObject(oneBasedIRow: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)

Get the row object

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetObjectData"></a>

### ImportedCrossSectionAlignments.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetParameter"></a>

### ImportedCrossSectionAlignments.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetPath"></a>

### ImportedCrossSectionAlignments.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetPropertyName"></a>

### ImportedCrossSectionAlignments.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetPropertyValue"></a>

### ImportedCrossSectionAlignments.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetRowCount"></a>

### ImportedCrossSectionAlignments.GetRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetTotalVisibleRowCount"></a>

### ImportedCrossSectionAlignments.GetTotalVisibleRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the total number of visible rows across all pages.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetVisibleProperties"></a>

### ImportedCrossSectionAlignments.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GetVisiblePropertyNames"></a>

### ImportedCrossSectionAlignments.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GroupAllSimilarChildren"></a>

### ImportedCrossSectionAlignments.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.GroupSimilarObjects"></a>

### ImportedCrossSectionAlignments.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.InitializeLifetimeService"></a>

### ImportedCrossSectionAlignments.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.IsPropertyEditable"></a>

### ImportedCrossSectionAlignments.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedCrossSectionAlignments.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.IsPropertyVisible"></a>

### ImportedCrossSectionAlignments.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedCrossSectionAlignments.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Paste"></a>

### ImportedCrossSectionAlignments.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.PerformRowAction"></a>

### ImportedCrossSectionAlignments.PerformRowAction(row: [int](https://docs.python.org/3/builtins/functions.html#int), option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), item: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the row and executes a worksheet command (PROMOTE, CREATE,
GOTO_PROMOTED_ITEM, CHECK, UNCHECK) with the given item index.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.Promote"></a>

### ImportedCrossSectionAlignments.Promote(iRows: Iterable[[int](https://docs.python.org/3/builtins/functions.html#int)], iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.PromoteAll"></a>

### ImportedCrossSectionAlignments.PromoteAll(iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote the rows

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.PropertyByAPIName"></a>

### ImportedCrossSectionAlignments.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.PropertyById"></a>

### ImportedCrossSectionAlignments.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.PropertyByName"></a>

### ImportedCrossSectionAlignments.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemoveConvectionBCFromImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.RemoveConvectionBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemoveDisplacementBCFromImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.RemoveDisplacementBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemoveForceBCFromImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.RemoveForceBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemoveFromGroup"></a>

### ImportedCrossSectionAlignments.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemoveHeatFluxBCFromImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.RemoveHeatFluxBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemoveMomentBCFromImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.RemoveMomentBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemoveParameter"></a>

### ImportedCrossSectionAlignments.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemovePressureBCFromImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.RemovePressureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemoveRotationBCFromImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.RemoveRotationBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemoveTemperatureBCFromImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.RemoveTemperatureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.RemoveVoltageBCFromImportedLoadCollection"></a>

### ImportedCrossSectionAlignments.RemoveVoltageBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.SelectRows"></a>

### ImportedCrossSectionAlignments.SelectRows(rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the specified rows (1-based page-relative array) and
deselects all others. Accepts an int array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.SetCellValue"></a>

### ImportedCrossSectionAlignments.SetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value at the given 1-based page-relative row and
column. Handles read-only, edit, combo-box, and context-menu
column types automatically.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.SetValueOnAllRows"></a>

### ImportedCrossSectionAlignments.SetValueOnAllRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on ALL rows in the collection (across all pages,
including rows hidden by the current page/filter).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.SetValueOnAllVisibleRows"></a>

### ImportedCrossSectionAlignments.SetValueOnAllVisibleRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the cell value on all visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.SetValueOnSelectedRows"></a>

### ImportedCrossSectionAlignments.SetValueOnSelectedRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str), rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on specific rows. Handles edit, combo-box,
and context-menu column types automatically.
Rows is a 1-based page-relative array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.SortColumn"></a>

### ImportedCrossSectionAlignments.SortColumn(iCol: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sorts the worksheet by the given column index.
Toggles sort direction on repeated calls (off → ascending → descending).
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCrossSectionAlignments.WorksheetFunction"></a>

### ImportedCrossSectionAlignments.WorksheetFunction(option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Executes a worksheet function: ChangeShow, SetPage, PreviousButton,
NextButton, ResetButton, SelectAllOnPage.
```

<!-- !! processed by numpydoc !! -->

