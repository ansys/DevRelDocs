# `ExternalModelDataColl`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ExternalModelDataColl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ExternalModelDataColl(internalObject: Any)

<a id="ExternalModelDataColl"></a>

### *class* ExternalModelDataColl(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ExternalModelDataColl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ExternalModelDataColl.Activate)                                                                             | Activate the current object.                                                                |
| [`AddComment`](#ExternalModelDataColl.AddComment)                                                                         | Creates a new child Comment.                                                                |
| [`AddConvectionBCToImportedLoadCollection`](#ExternalModelDataColl.AddConvectionBCToImportedLoadCollection)               | Adds a Convection boundary condition.                                                       |
| [`AddDisplacementBCToImportedLoadCollection`](#ExternalModelDataColl.AddDisplacementBCToImportedLoadCollection)           | Adds a Displacement boundary condition.                                                     |
| [`AddFigure`](#ExternalModelDataColl.AddFigure)                                                                           | Creates a new child Figure.                                                                 |
| [`AddForceBCToImportedLoadCollection`](#ExternalModelDataColl.AddForceBCToImportedLoadCollection)                         | Adds a Force boundary condition.                                                            |
| [`AddHeatFluxBCToImportedLoadCollection`](#ExternalModelDataColl.AddHeatFluxBCToImportedLoadCollection)                   | Adds a Heat Flux boundary condition.                                                        |
| [`AddImage`](#ExternalModelDataColl.AddImage)                                                                             | Creates a new child Image.                                                                  |
| [`AddMomentBCToImportedLoadCollection`](#ExternalModelDataColl.AddMomentBCToImportedLoadCollection)                       | Adds a Moment boundary condition.                                                           |
| [`AddPressureBCToImportedLoadCollection`](#ExternalModelDataColl.AddPressureBCToImportedLoadCollection)                   | Adds a Pressure boundary condition.                                                         |
| [`AddRotationBCToImportedLoadCollection`](#ExternalModelDataColl.AddRotationBCToImportedLoadCollection)                   | Adds a Rotation boundary condition.                                                         |
| [`AddTemperatureBCToImportedLoadCollection`](#ExternalModelDataColl.AddTemperatureBCToImportedLoadCollection)             | Adds a Temperature boundary condition.                                                      |
| [`AddVoltageBCToImportedLoadCollection`](#ExternalModelDataColl.AddVoltageBCToImportedLoadCollection)                     | Adds a Voltage boundary condition.                                                          |
| [`CheckRow`](#ExternalModelDataColl.CheckRow)                                                                             | Selects the row, then checks or unchecks it.                                                |
| [`CheckRowNoSelect`](#ExternalModelDataColl.CheckRowNoSelect)                                                             | Checks or unchecks the row without selecting it first.                                      |
| [`Copy`](#ExternalModelDataColl.Copy)                                                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ExternalModelDataColl.CopyTo)                                                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ExternalModelDataColl.CreateObjRef)                                                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ExternalModelDataColl.CreateParameter)                                                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ExternalModelDataColl.Cut)                                                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ExternalModelDataColl.Delete)                                                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#ExternalModelDataColl.Duplicate)                                                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ExternalModelDataColl.Equals)                                                                                 | Equals method.                                                                              |
| [`GetAPIName`](#ExternalModelDataColl.GetAPIName)                                                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ExternalModelDataColl.GetAllProperties)                                                             | GetAllProperties method.                                                                    |
| [`GetCellValue`](#ExternalModelDataColl.GetCellValue)                                                                     | Returns the text of the cell at the given 1-based page-relative                             |
| [`GetChildren`](#ExternalModelDataColl.GetChildren)                                                                       | Gets the list of children, filtered by type.                                                |
| [`GetColumnCount`](#ExternalModelDataColl.GetColumnCount)                                                                 | Returns the number of columns.                                                              |
| [`GetColumnHeaders`](#ExternalModelDataColl.GetColumnHeaders)                                                             | GetColumnHeaders method.                                                                    |
| [`GetDetailsView`](#ExternalModelDataColl.GetDetailsView)                                                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ExternalModelDataColl.GetEnumName)                                                                       | Enum name bound to value                                                                    |
| [`GetEnumerator`](#ExternalModelDataColl.GetEnumerator)                                                                   | GetEnumerator method.                                                                       |
| [`GetHashCode`](#ExternalModelDataColl.GetHashCode)                                                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#ExternalModelDataColl.GetIconFile)                                                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ExternalModelDataColl.GetLifetimeService)                                                         | GetLifetimeService method.                                                                  |
| [`GetObject`](#ExternalModelDataColl.GetObject)                                                                           | Get the row object                                                                          |
| [`GetObjectData`](#ExternalModelDataColl.GetObjectData)                                                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#ExternalModelDataColl.GetParameter)                                                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ExternalModelDataColl.GetPath)                                                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#ExternalModelDataColl.GetPropertyName)                                                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ExternalModelDataColl.GetPropertyValue)                                                             | GetPropertyValue method.                                                                    |
| [`GetRowCount`](#ExternalModelDataColl.GetRowCount)                                                                       | Returns the number of visible rows on the current page.                                     |
| [`GetTotalVisibleRowCount`](#ExternalModelDataColl.GetTotalVisibleRowCount)                                               | Returns the total number of visible rows across all pages.                                  |
| [`GetVisibleProperties`](#ExternalModelDataColl.GetVisibleProperties)                                                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ExternalModelDataColl.GetVisiblePropertyNames)                                               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ExternalModelDataColl.GroupAllSimilarChildren)                                               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ExternalModelDataColl.GroupSimilarObjects)                                                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ExternalModelDataColl.InitializeLifetimeService)                                           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ExternalModelDataColl.IsPropertyEditable)                                                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ExternalModelDataColl.IsPropertyVisible)                                                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#ExternalModelDataColl.Paste)                                                                                   | Pastes to the current DataModelObject context.                                              |
| [`PerformRowAction`](#ExternalModelDataColl.PerformRowAction)                                                             | Selects the row and executes a worksheet command (PROMOTE, CREATE,                          |
| [`Promote`](#ExternalModelDataColl.Promote)                                                                               | Promote method.                                                                             |
| [`PromoteAll`](#ExternalModelDataColl.PromoteAll)                                                                         | Promote the rows                                                                            |
| [`PropertyByAPIName`](#ExternalModelDataColl.PropertyByAPIName)                                                           | Get a property by its API name.                                                             |
| [`PropertyById`](#ExternalModelDataColl.PropertyById)                                                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#ExternalModelDataColl.PropertyByName)                                                                 | Get a property by its unique name.                                                          |
| [`RemoveConvectionBCFromImportedLoadCollection`](#ExternalModelDataColl.RemoveConvectionBCFromImportedLoadCollection)     | Removes a Convection boundary condition.                                                    |
| [`RemoveDisplacementBCFromImportedLoadCollection`](#ExternalModelDataColl.RemoveDisplacementBCFromImportedLoadCollection) | Removes a Displacement boundary condition.                                                  |
| [`RemoveForceBCFromImportedLoadCollection`](#ExternalModelDataColl.RemoveForceBCFromImportedLoadCollection)               | Removes a Force boundary condition.                                                         |
| [`RemoveFromGroup`](#ExternalModelDataColl.RemoveFromGroup)                                                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveHeatFluxBCFromImportedLoadCollection`](#ExternalModelDataColl.RemoveHeatFluxBCFromImportedLoadCollection)         | Removes a Heat Flux boundary condition.                                                     |
| [`RemoveMomentBCFromImportedLoadCollection`](#ExternalModelDataColl.RemoveMomentBCFromImportedLoadCollection)             | Removes a Moment boundary condition.                                                        |
| [`RemoveParameter`](#ExternalModelDataColl.RemoveParameter)                                                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RemovePressureBCFromImportedLoadCollection`](#ExternalModelDataColl.RemovePressureBCFromImportedLoadCollection)         | Removes a Pressure boundary condition.                                                      |
| [`RemoveRotationBCFromImportedLoadCollection`](#ExternalModelDataColl.RemoveRotationBCFromImportedLoadCollection)         | Removes a Rotation boundary condition.                                                      |
| [`RemoveTemperatureBCFromImportedLoadCollection`](#ExternalModelDataColl.RemoveTemperatureBCFromImportedLoadCollection)   | Removes a Temperature boundary condition.                                                   |
| [`RemoveVoltageBCFromImportedLoadCollection`](#ExternalModelDataColl.RemoveVoltageBCFromImportedLoadCollection)           | Removes a Voltage boundary condition.                                                       |
| [`SelectRows`](#ExternalModelDataColl.SelectRows)                                                                         | Selects the specified rows (1-based page-relative array) and                                |
| [`SetCellValue`](#ExternalModelDataColl.SetCellValue)                                                                     | Sets the cell value at the given 1-based page-relative row and                              |
| [`SetValueOnAllRows`](#ExternalModelDataColl.SetValueOnAllRows)                                                           | Sets the cell value on ALL rows in the collection (across all pages,                        |
| [`SetValueOnAllVisibleRows`](#ExternalModelDataColl.SetValueOnAllVisibleRows)                                             | Sets the cell value on all visible rows on the current page.                                |
| [`SetValueOnSelectedRows`](#ExternalModelDataColl.SetValueOnSelectedRows)                                                 | Sets the cell value on specific rows. Handles edit, combo-box,                              |
| [`SortColumn`](#ExternalModelDataColl.SortColumn)                                                                         | Sorts the worksheet by the given column index.                                              |
| [`WorksheetFunction`](#ExternalModelDataColl.WorksheetFunction)                                                           | Executes a worksheet function: ChangeShow, SetPage, PreviousButton,                         |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ExternalModelDataColl.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ExternalModelDataColl.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ExternalModelDataColl.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ExternalModelDataColl.Comments)                                 | Gets the list of associated comments.                         |
| [`Count`](#ExternalModelDataColl.Count)                                       | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ExternalModelDataColl.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ExternalModelDataColl.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ExternalModelDataColl.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ExternalModelDataColl.IconName)                                 | IconName property.                                            |
| [`Images`](#ExternalModelDataColl.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ExternalModelDataColl.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ExternalModelDataColl.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Item`](#ExternalModelDataColl.Item)                                         | Item property.                                                |
| [`Name`](#ExternalModelDataColl.Name)                                         | Name property.                                                |
| [`ObjectId`](#ExternalModelDataColl.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ExternalModelDataColl.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ExternalModelDataColl.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ExternalModelDataColl.Parent)                                     | Parent property.                                              |
| [`Properties`](#ExternalModelDataColl.Properties)                             | Gets the list of properties for this object.                  |
| [`PropertyCount`](#ExternalModelDataColl.PropertyCount)                       | Gets the NumberOfColumns.                                     |
| [`ReadOnly`](#ExternalModelDataColl.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#ExternalModelDataColl.State)                                       | State property.                                               |
| [`Suppressed`](#ExternalModelDataColl.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#ExternalModelDataColl.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ExternalModelDataColl.VisibleProperties)               | Gets the list of properties that are visible for this object. |

### Attributes

| Name |
| --------------------------------------------------- |
| [`UIBackend`](#ExternalModelDataColl.UIBackend) |

<a id="property-detail"></a>

## Property detail

<a id="ExternalModelDataColl.AttachedRefs"></a>

### *property* ExternalModelDataColl.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Children"></a>

### *property* ExternalModelDataColl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.ClsId"></a>

### *property* ExternalModelDataColl.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Comments"></a>

### *property* ExternalModelDataColl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Count"></a>

### *property* ExternalModelDataColl.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.DataModelObjectCategory"></a>

### *property* ExternalModelDataColl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Figures"></a>

### *property* ExternalModelDataColl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GroupingFolder"></a>

### *property* ExternalModelDataColl.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.IconName"></a>

### *property* ExternalModelDataColl.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Images"></a>

### *property* ExternalModelDataColl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.ImportableObjectSourceId"></a>

### *property* ExternalModelDataColl.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.InternalObject"></a>

### *property* ExternalModelDataColl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Item"></a>

### *property* ExternalModelDataColl.Item *: [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Name"></a>

### *property* ExternalModelDataColl.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.ObjectId"></a>

### *property* ExternalModelDataColl.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.ObjectState"></a>

### *property* ExternalModelDataColl.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.ObjectTags"></a>

### *property* ExternalModelDataColl.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Parent"></a>

### *property* ExternalModelDataColl.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Properties"></a>

### *property* ExternalModelDataColl.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.PropertyCount"></a>

### *property* ExternalModelDataColl.PropertyCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfColumns.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.ReadOnly"></a>

### *property* ExternalModelDataColl.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.State"></a>

### *property* ExternalModelDataColl.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Suppressed"></a>

### *property* ExternalModelDataColl.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.TransferableObjectId"></a>

### *property* ExternalModelDataColl.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.VisibleProperties"></a>

### *property* ExternalModelDataColl.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="attribute-detail"></a>

## Attribute detail

<a id="ExternalModelDataColl.UIBackend"></a>

### ExternalModelDataColl.UIBackend *: Ansys.ACT.Automation.Mechanical.IWorksheetUIBackend | [None](https://docs.python.org/3/builtins/constants.html#None)* *= None*

<a id="method-detail"></a>

## Method detail

<a id="ExternalModelDataColl.Activate"></a>

### ExternalModelDataColl.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddComment"></a>

### ExternalModelDataColl.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddConvectionBCToImportedLoadCollection"></a>

### ExternalModelDataColl.AddConvectionBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddDisplacementBCToImportedLoadCollection"></a>

### ExternalModelDataColl.AddDisplacementBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddFigure"></a>

### ExternalModelDataColl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddForceBCToImportedLoadCollection"></a>

### ExternalModelDataColl.AddForceBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddHeatFluxBCToImportedLoadCollection"></a>

### ExternalModelDataColl.AddHeatFluxBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddImage"></a>

### ExternalModelDataColl.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddMomentBCToImportedLoadCollection"></a>

### ExternalModelDataColl.AddMomentBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddPressureBCToImportedLoadCollection"></a>

### ExternalModelDataColl.AddPressureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddRotationBCToImportedLoadCollection"></a>

### ExternalModelDataColl.AddRotationBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddTemperatureBCToImportedLoadCollection"></a>

### ExternalModelDataColl.AddTemperatureBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddVoltageBCToImportedLoadCollection"></a>

### ExternalModelDataColl.AddVoltageBCToImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.CheckRow"></a>

### ExternalModelDataColl.CheckRow(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Selects the row, then checks or unchecks it.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.CheckRowNoSelect"></a>

### ExternalModelDataColl.CheckRowNoSelect(row: [int](https://docs.python.org/3/builtins/functions.html#int), check: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Checks or unchecks the row without selecting it first.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Copy"></a>

### ExternalModelDataColl.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.CopyTo"></a>

### ExternalModelDataColl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.CreateObjRef"></a>

### ExternalModelDataColl.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.CreateParameter"></a>

### ExternalModelDataColl.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Cut"></a>

### ExternalModelDataColl.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Delete"></a>

### ExternalModelDataColl.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Duplicate"></a>

### ExternalModelDataColl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Equals"></a>

### ExternalModelDataColl.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetAPIName"></a>

### ExternalModelDataColl.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetAllProperties"></a>

### ExternalModelDataColl.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetCellValue"></a>

### ExternalModelDataColl.GetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Returns the text of the cell at the given 1-based page-relative
row and column. For promoted rows, returns the promoted object's
Name when column == 1.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetChildren"></a>

### ExternalModelDataColl.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ExternalModelDataColl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetColumnCount"></a>

### ExternalModelDataColl.GetColumnCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of columns.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetColumnHeaders"></a>

### ExternalModelDataColl.GetColumnHeaders() → Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetColumnHeaders method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetDetailsView"></a>

### ExternalModelDataColl.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetEnumName"></a>

### ExternalModelDataColl.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetEnumerator"></a>

### ExternalModelDataColl.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetHashCode"></a>

### ExternalModelDataColl.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetIconFile"></a>

### ExternalModelDataColl.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetLifetimeService"></a>

### ExternalModelDataColl.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetObject"></a>

### ExternalModelDataColl.GetObject(oneBasedIRow: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.ImportedObject](ImportedObject.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedObject)

Get the row object

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetObjectData"></a>

### ExternalModelDataColl.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetParameter"></a>

### ExternalModelDataColl.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetPath"></a>

### ExternalModelDataColl.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetPropertyName"></a>

### ExternalModelDataColl.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetPropertyValue"></a>

### ExternalModelDataColl.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetRowCount"></a>

### ExternalModelDataColl.GetRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the number of visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetTotalVisibleRowCount"></a>

### ExternalModelDataColl.GetTotalVisibleRowCount() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the total number of visible rows across all pages.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetVisibleProperties"></a>

### ExternalModelDataColl.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetVisiblePropertyNames"></a>

### ExternalModelDataColl.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GroupAllSimilarChildren"></a>

### ExternalModelDataColl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GroupSimilarObjects"></a>

### ExternalModelDataColl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.InitializeLifetimeService"></a>

### ExternalModelDataColl.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.IsPropertyEditable"></a>

### ExternalModelDataColl.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ExternalModelDataColl.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.IsPropertyVisible"></a>

### ExternalModelDataColl.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ExternalModelDataColl.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Paste"></a>

### ExternalModelDataColl.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.PerformRowAction"></a>

### ExternalModelDataColl.PerformRowAction(row: [int](https://docs.python.org/3/builtins/functions.html#int), option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), item: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the row and executes a worksheet command (PROMOTE, CREATE,
GOTO_PROMOTED_ITEM, CHECK, UNCHECK) with the given item index.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Promote"></a>

### ExternalModelDataColl.Promote(iRows: Iterable[[int](https://docs.python.org/3/builtins/functions.html#int)], iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.PromoteAll"></a>

### ExternalModelDataColl.PromoteAll(iPromoteOption: [int](https://docs.python.org/3/builtins/functions.html#int), id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Promote the rows

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.PropertyByAPIName"></a>

### ExternalModelDataColl.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.PropertyById"></a>

### ExternalModelDataColl.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.PropertyByName"></a>

### ExternalModelDataColl.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveConvectionBCFromImportedLoadCollection"></a>

### ExternalModelDataColl.RemoveConvectionBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Convection boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveDisplacementBCFromImportedLoadCollection"></a>

### ExternalModelDataColl.RemoveDisplacementBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Displacement boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveForceBCFromImportedLoadCollection"></a>

### ExternalModelDataColl.RemoveForceBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Force boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveFromGroup"></a>

### ExternalModelDataColl.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveHeatFluxBCFromImportedLoadCollection"></a>

### ExternalModelDataColl.RemoveHeatFluxBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Heat Flux boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveMomentBCFromImportedLoadCollection"></a>

### ExternalModelDataColl.RemoveMomentBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Moment boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveParameter"></a>

### ExternalModelDataColl.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemovePressureBCFromImportedLoadCollection"></a>

### ExternalModelDataColl.RemovePressureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Pressure boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveRotationBCFromImportedLoadCollection"></a>

### ExternalModelDataColl.RemoveRotationBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Rotation boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveTemperatureBCFromImportedLoadCollection"></a>

### ExternalModelDataColl.RemoveTemperatureBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Temperature boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveVoltageBCFromImportedLoadCollection"></a>

### ExternalModelDataColl.RemoveVoltageBCFromImportedLoadCollection() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes a Voltage boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.SelectRows"></a>

### ExternalModelDataColl.SelectRows(rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Selects the specified rows (1-based page-relative array) and
deselects all others. Accepts an int array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.SetCellValue"></a>

### ExternalModelDataColl.SetCellValue(row: [int](https://docs.python.org/3/builtins/functions.html#int), column: [int](https://docs.python.org/3/builtins/functions.html#int), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value at the given 1-based page-relative row and
column. Handles read-only, edit, combo-box, and context-menu
column types automatically.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.SetValueOnAllRows"></a>

### ExternalModelDataColl.SetValueOnAllRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on ALL rows in the collection (across all pages,
including rows hidden by the current page/filter).
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.SetValueOnAllVisibleRows"></a>

### ExternalModelDataColl.SetValueOnAllVisibleRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the cell value on all visible rows on the current page.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.SetValueOnSelectedRows"></a>

### ExternalModelDataColl.SetValueOnSelectedRows(column: [int](https://docs.python.org/3/builtins/functions.html#int), userInput: [str](https://docs.python.org/3/builtins/stdtypes.html#str), rows: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sets the cell value on specific rows. Handles edit, combo-box,
and context-menu column types automatically.
Rows is a 1-based page-relative array or IronPython list.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.SortColumn"></a>

### ExternalModelDataColl.SortColumn(iCol: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sorts the worksheet by the given column index.
Toggles sort direction on repeated calls (off → ascending → descending).
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.WorksheetFunction"></a>

### ExternalModelDataColl.WorksheetFunction(option: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Executes a worksheet function: ChangeShow, SetPage, PreviousButton,
NextButton, ResetButton, SelectAllOnPage.
```

<!-- !! processed by numpydoc !! -->

