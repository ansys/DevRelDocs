# LoadGroup

### *class* LoadGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LoadGroup.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GenerateRemoteLoads`](#LoadGroup.GenerateRemoteLoads)         | Run the action to generate the remote loads from the source data.                 |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCurrent`](#LoadGroup.AddCurrent)                           | Creates a new Current                                                             |
| [`AddVoltage`](#LoadGroup.AddVoltage)                           | Creates a new Voltage                                                             |
| [`Delete`](#LoadGroup.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LoadGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LoadGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LoadGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#LoadGroup.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LoadGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LoadGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LoadGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LoadGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LoadGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LoadGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#LoadGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#LoadGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LoadGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`SolutionId`](#LoadGroup.SolutionId)                                                                                  | Gets or sets the SolutionId.                                  |
| [`NumberOfFrequenciesToConsider`](#LoadGroup.NumberOfFrequenciesToConsider)                                            | Gets or sets the NumberOfFrequenciesToConsider.               |
| [`NumberOfTurns`](#LoadGroup.NumberOfTurns)                                                                            | Gets or sets the NumberOfTurns.                               |
| [`TransferFileName`](#LoadGroup.TransferFileName)                                                                      | Gets or sets the TransferFileName.                            |
| [`ConductorCurrent`](#LoadGroup.ConductorCurrent)                                                                      | Gets or sets the ConductorCurrent.                            |
| [`ConductingArea`](#LoadGroup.ConductingArea)                                                                          | Gets or sets the ConductingArea.                              |
| [`PhaseAngle`](#LoadGroup.PhaseAngle)                                                                                  | Gets or sets the PhaseAngle.                                  |
| [`GroupingType`](#LoadGroup.GroupingType)                                                                              | Gets or sets the GroupingType.                                |
| [`ImportedDataType`](#LoadGroup.ImportedDataType)                                                                      | Gets or sets the ImportedDataType.                            |
| [`OnDataRefreshOption`](#LoadGroup.OnDataRefreshOption)                                                                | Gets or sets the OnDataRefreshOption.                         |
| [`ConductorType`](#LoadGroup.ConductorType)                                                                            | Gets or sets the ConductorType.                               |
| [`DataImportStatus`](../../../../Mechanical/DataModel/Enums/DataImportStatus.md#DataImportStatus)                      | Gets the DataImportStatus.                                    |
| [`UseInternalRemotePoints`](#LoadGroup.UseInternalRemotePoints)                                                        | Gets or sets the UseInternalRemotePoints.                     |
| [`Suppressed`](#LoadGroup.Suppressed)                                                                                  | Gets or sets the Suppressed.                                  |
| [`Location`](#LoadGroup.Location)                                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#LoadGroup.Children)                                                                                      | Gets the list of children.                                    |
| [`Comments`](#LoadGroup.Comments)                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#LoadGroup.Figures)                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#LoadGroup.Images)                                                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LoadGroup.Properties)                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LoadGroup.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import LoadGroup
```

## Property detail

### *property* LoadGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.SolutionId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionId.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.NumberOfFrequenciesToConsider *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfFrequenciesToConsider.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.NumberOfTurns *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfTurns.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.TransferFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransferFileName.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.ConductorCurrent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConductorCurrent.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.ConductingArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConductingArea.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.GroupingType *: [Ansys.Mechanical.DataModel.Enums.LoadGroupingType](../../../../Mechanical/DataModel/Enums/LoadGroupingType.md#LoadGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupingType.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.ImportedDataType *: [Ansys.Mechanical.DataModel.Enums.DataTypeOptions](../../../../Mechanical/DataModel/Enums/DataTypeOptions.md#DataTypeOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportedDataType.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.OnDataRefreshOption *: [Ansys.Mechanical.DataModel.Enums.RemotePointUpdateOptions](../../../../Mechanical/DataModel/Enums/RemotePointUpdateOptions.md#RemotePointUpdateOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OnDataRefreshOption.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.ConductorType *: [Ansys.Mechanical.DataModel.Enums.SourceConductorType](../../../../Mechanical/DataModel/Enums/SourceConductorType.md#SourceConductorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConductorType.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.DataImportStatus *: [Ansys.Mechanical.DataModel.Enums.DataImportStatus](../../../../Mechanical/DataModel/Enums/DataImportStatus.md#DataImportStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DataImportStatus.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.UseInternalRemotePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseInternalRemotePoints.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* LoadGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### LoadGroup.GenerateRemoteLoads()

Run the action to generate the remote loads from the source data.

<!-- !! processed by numpydoc !! -->

### LoadGroup.AddCurrent()

Creates a new Current

<!-- !! processed by numpydoc !! -->

### LoadGroup.AddVoltage()

Creates a new Voltage

<!-- !! processed by numpydoc !! -->

### LoadGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### LoadGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LoadGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LoadGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### LoadGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### LoadGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### LoadGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### LoadGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### LoadGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### LoadGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### LoadGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### LoadGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### LoadGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### LoadGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### LoadGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### LoadGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
