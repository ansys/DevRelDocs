# `LoadGroup`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LoadGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateRemoteLoads`](#LoadGroup.GenerateRemoteLoads)         | Run the action to generate the remote loads from the source data.                 |
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

| Name | Description |
|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| [`NumberOfPoints`](#LoadGroup.NumberOfPoints)                               | Gets or Sets the Number of Points.                                                                                                               |
| [`RPMFileSelection`](#LoadGroup.RPMFileSelection)                           | Gets or Sets the File Selection (.csv) for User Defined RPM Interpolation.                                                                       |
| [`Orders`](#LoadGroup.Orders)                                               | Gets or Sets the Orders. These orders are imported from the maxwell solution and the Analysis Settings will be synced with the orders specified. |
| [`InternalObject`](#id0)                                                    | Gets the internal object. For advanced usage only.                                                                                               |
| [`SolutionId`](#LoadGroup.SolutionId)                                       | Gets or sets the SolutionId.                                                                                                                     |
| [`NumberOfFrequenciesToConsider`](#LoadGroup.NumberOfFrequenciesToConsider) | Gets or sets the NumberOfFrequenciesToConsider.                                                                                                  |
| [`NumberOfTurns`](#LoadGroup.NumberOfTurns)                                 | Gets or sets the NumberOfTurns.                                                                                                                  |
| [`TransferFileName`](#LoadGroup.TransferFileName)                           | Gets or sets the TransferFileName.                                                                                                               |
| [`ConductorCurrent`](#LoadGroup.ConductorCurrent)                           | Gets or sets the ConductorCurrent.                                                                                                               |
| [`ConductingArea`](#LoadGroup.ConductingArea)                               | Gets or sets the ConductingArea.                                                                                                                 |
| [`PhaseAngle`](#LoadGroup.PhaseAngle)                                       | Gets or sets the PhaseAngle.                                                                                                                     |
| [`GroupingType`](#LoadGroup.GroupingType)                                   | Gets or sets the GroupingType.                                                                                                                   |
| [`ImportedDataType`](#LoadGroup.ImportedDataType)                           | Gets or sets the ImportedDataType.                                                                                                               |
| [`InterpolateRPM`](#LoadGroup.InterpolateRPM)                               | Gets or Sets the Interpolate RPM.                                                                                                                |
| [`OnDataRefreshOption`](#LoadGroup.OnDataRefreshOption)                     | Gets or sets the OnDataRefreshOption.                                                                                                            |
| [`ConductorType`](#LoadGroup.ConductorType)                                 | Gets or sets the ConductorType.                                                                                                                  |
| [`DataImportStatus`](#LoadGroup.DataImportStatus)                           | Gets the DataImportStatus.                                                                                                                       |
| [`FilterByOrder`](#LoadGroup.FilterByOrder)                                 | Gets or sets whether imported remote loads are filtered by order. The order is specified in the Orders property.                                 |
| [`UseInternalRemotePoints`](#LoadGroup.UseInternalRemotePoints)             | Gets or sets the UseInternalRemotePoints.                                                                                                        |
| [`Suppressed`](#LoadGroup.Suppressed)                                       | Gets or sets the Suppressed.                                                                                                                     |
| [`Location`](#LoadGroup.Location)                                           | Gets or sets the Location.                                                                                                                       |
| [`DataModelObjectCategory`](#LoadGroup.DataModelObjectCategory)             | Gets the current DataModelObjectâ€™s category.                                                                                                     |
| [`Children`](#LoadGroup.Children)                                           | Gets the list of children.                                                                                                                       |
| [`Comments`](#LoadGroup.Comments)                                           | Gets the list of associated comments.                                                                                                            |
| [`Figures`](#LoadGroup.Figures)                                             | Gets the list of associated figures.                                                                                                             |
| [`Images`](#LoadGroup.Images)                                               | Gets the list of associated images.                                                                                                              |
| [`InternalObject`](#id0)                                                    | Gets the internal object. For advanced usage only.                                                                                               |
| [`Properties`](#LoadGroup.Properties)                                       | Gets the list of properties for this object.                                                                                                     |
| [`VisibleProperties`](#LoadGroup.VisibleProperties)                         | Gets the list of properties that are visible for this object.                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="LoadGroup.NumberOfPoints"></a>

### *property* LoadGroup.NumberOfPoints *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Number of Points.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.RPMFileSelection"></a>

### *property* LoadGroup.RPMFileSelection *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the File Selection (.csv) for User Defined RPM Interpolation.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Orders"></a>

### *property* LoadGroup.Orders *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Orders. These orders are imported from the maxwell solution and the Analysis Settings will be synced with the orders specified.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.InternalObject"></a>

### *property* LoadGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.SolutionId"></a>

### *property* LoadGroup.SolutionId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionId.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.NumberOfFrequenciesToConsider"></a>

### *property* LoadGroup.NumberOfFrequenciesToConsider *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfFrequenciesToConsider.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.NumberOfTurns"></a>

### *property* LoadGroup.NumberOfTurns *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfTurns.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.TransferFileName"></a>

### *property* LoadGroup.TransferFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransferFileName.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.ConductorCurrent"></a>

### *property* LoadGroup.ConductorCurrent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConductorCurrent.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.ConductingArea"></a>

### *property* LoadGroup.ConductingArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConductingArea.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.PhaseAngle"></a>

### *property* LoadGroup.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GroupingType"></a>

### *property* LoadGroup.GroupingType *: [Ansys.Mechanical.DataModel.Enums.LoadGroupingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadGroupingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupingType.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.ImportedDataType"></a>

### *property* LoadGroup.ImportedDataType *: [Ansys.Mechanical.DataModel.Enums.DataTypeOptions](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataTypeOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataTypeOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportedDataType.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.InterpolateRPM"></a>

### *property* LoadGroup.InterpolateRPM *: [Ansys.Mechanical.DataModel.Enums.InterpolateRPM](../../../../Mechanical/DataModel/Enums/InterpolateRPM.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.InterpolateRPM) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Interpolate RPM.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.OnDataRefreshOption"></a>

### *property* LoadGroup.OnDataRefreshOption *: [Ansys.Mechanical.DataModel.Enums.RemotePointUpdateOptions](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RemotePointUpdateOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemotePointUpdateOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OnDataRefreshOption.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.ConductorType"></a>

### *property* LoadGroup.ConductorType *: [Ansys.Mechanical.DataModel.Enums.SourceConductorType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SourceConductorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SourceConductorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConductorType.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.DataImportStatus"></a>

### *property* LoadGroup.DataImportStatus *: [Ansys.Mechanical.DataModel.Enums.DataImportStatus](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataImportStatus.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataImportStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DataImportStatus.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.FilterByOrder"></a>

### *property* LoadGroup.FilterByOrder *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether imported remote loads are filtered by order. The order is specified in the Orders property.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.UseInternalRemotePoints"></a>

### *property* LoadGroup.UseInternalRemotePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseInternalRemotePoints.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Suppressed"></a>

### *property* LoadGroup.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Location"></a>

### *property* LoadGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.DataModelObjectCategory"></a>

### *property* LoadGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Children"></a>

### *property* LoadGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Comments"></a>

### *property* LoadGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Figures"></a>

### *property* LoadGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Images"></a>

### *property* LoadGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LoadGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Properties"></a>

### *property* LoadGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.VisibleProperties"></a>

### *property* LoadGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LoadGroup.GenerateRemoteLoads"></a>

### LoadGroup.GenerateRemoteLoads()

Run the action to generate the remote loads from the source data.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.AddCurrent"></a>

### LoadGroup.AddCurrent()

Creates a new Current

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.AddVoltage"></a>

### LoadGroup.AddVoltage()

Creates a new Voltage

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Delete"></a>

### LoadGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GetChildren"></a>

### LoadGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LoadGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.AddComment"></a>

### LoadGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.AddFigure"></a>

### LoadGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.AddImage"></a>

### LoadGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Activate"></a>

### LoadGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.CopyTo"></a>

### LoadGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Duplicate"></a>

### LoadGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GroupAllSimilarChildren"></a>

### LoadGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GroupSimilarObjects"></a>

### LoadGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.PropertyByName"></a>

### LoadGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.PropertyByAPIName"></a>

### LoadGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.CreateParameter"></a>

### LoadGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GetParameter"></a>

### LoadGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.RemoveParameter"></a>

### LoadGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

