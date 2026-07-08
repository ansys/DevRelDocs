# `LoadGroup`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LoadGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LoadGroup.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#LoadGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddCurrent`](#LoadGroup.AddCurrent)                           | Creates a new Current                                                             |
| [`AddFigure`](#LoadGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LoadGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`AddVoltage`](#LoadGroup.AddVoltage)                           | Creates a new Voltage                                                             |
| [`CopyTo`](#LoadGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LoadGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#LoadGroup.Delete)                                   | Run the Delete action.                                                            |
| [`DeleteChildren`](#LoadGroup.DeleteChildren)                   | Run the DeleteChildren action with optional verification dialog.                  |
| [`Duplicate`](#LoadGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateRemoteLoads`](#LoadGroup.GenerateRemoteLoads)         | Run the action to generate the remote loads from the source data.                 |
| [`GetChildren`](#LoadGroup.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#LoadGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LoadGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LoadGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#LoadGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#LoadGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LoadGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Children`](#LoadGroup.Children)                                           | Gets the list of children.                                                                                                                       |
| [`Comments`](#LoadGroup.Comments)                                           | Gets the list of associated comments.                                                                                                            |
| [`ConductingArea`](#LoadGroup.ConductingArea)                               | Gets or sets the ConductingArea.                                                                                                                 |
| [`ConductorCurrent`](#LoadGroup.ConductorCurrent)                           | Gets or sets the ConductorCurrent.                                                                                                               |
| [`ConductorType`](#LoadGroup.ConductorType)                                 | Gets or sets the ConductorType.                                                                                                                  |
| [`CoordinateSystem`](#LoadGroup.CoordinateSystem)                           | Gets or sets the CoordinateSystem.                                                                                                               |
| [`DataImportStatus`](#LoadGroup.DataImportStatus)                           | Gets the DataImportStatus.                                                                                                                       |
| [`DataModelObjectCategory`](#LoadGroup.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                                                                     |
| [`Figures`](#LoadGroup.Figures)                                             | Gets the list of associated figures.                                                                                                             |
| [`FilterByOrder`](#LoadGroup.FilterByOrder)                                 | Gets or sets whether imported remote loads are filtered by order. The order is specified in the Orders property.                                 |
| [`GroupingType`](#LoadGroup.GroupingType)                                   | Gets or sets the GroupingType.                                                                                                                   |
| [`Images`](#LoadGroup.Images)                                               | Gets the list of associated images.                                                                                                              |
| [`ImportedDataType`](#LoadGroup.ImportedDataType)                           | Gets or sets the ImportedDataType.                                                                                                               |
| [`InternalObject`](#LoadGroup.InternalObject)                               | Gets the internal object. For advanced usage only.                                                                                               |
| [`InterpolateRPM`](#LoadGroup.InterpolateRPM)                               | Gets or Sets the Interpolate RPM.                                                                                                                |
| [`Location`](#LoadGroup.Location)                                           | Gets or sets the Location.                                                                                                                       |
| [`NumberOfFrequenciesToConsider`](#LoadGroup.NumberOfFrequenciesToConsider) | Gets or sets the NumberOfFrequenciesToConsider.                                                                                                  |
| [`NumberOfPoints`](#LoadGroup.NumberOfPoints)                               | Gets or Sets the Number of Points.                                                                                                               |
| [`NumberOfTurns`](#LoadGroup.NumberOfTurns)                                 | Gets or sets the NumberOfTurns.                                                                                                                  |
| [`OnDataRefreshOption`](#LoadGroup.OnDataRefreshOption)                     | Gets or sets the OnDataRefreshOption.                                                                                                            |
| [`Orders`](#LoadGroup.Orders)                                               | Gets or Sets the Orders. These orders are imported from the maxwell solution and the Analysis Settings will be synced with the orders specified. |
| [`PhaseAngle`](#LoadGroup.PhaseAngle)                                       | Gets or sets the PhaseAngle.                                                                                                                     |
| [`Properties`](#LoadGroup.Properties)                                       | Gets the list of properties for this object.                                                                                                     |
| [`RPMFileSelection`](#LoadGroup.RPMFileSelection)                           | Gets or Sets the File Selection (.csv) for User Defined RPM Interpolation.                                                                       |
| [`SolutionId`](#LoadGroup.SolutionId)                                       | Gets or sets the SolutionId.                                                                                                                     |
| [`Suppressed`](#LoadGroup.Suppressed)                                       | Gets or sets the Suppressed.                                                                                                                     |
| [`TransferFileName`](#LoadGroup.TransferFileName)                           | Gets or sets the TransferFileName.                                                                                                               |
| [`UseInternalRemotePoints`](#LoadGroup.UseInternalRemotePoints)             | Gets or sets the UseInternalRemotePoints.                                                                                                        |
| [`VisibleProperties`](#LoadGroup.VisibleProperties)                         | Gets the list of properties that are visible for this object.                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="LoadGroup.Children"></a>

### *property* LoadGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Comments"></a>

### *property* LoadGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.ConductingArea"></a>

### *property* LoadGroup.ConductingArea *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConductingArea.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.ConductorCurrent"></a>

### *property* LoadGroup.ConductorCurrent *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConductorCurrent.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.ConductorType"></a>

### *property* LoadGroup.ConductorType *: [Ansys.Mechanical.DataModel.Enums.SourceConductorType](../../../../Mechanical/DataModel/Enums/SourceConductorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SourceConductorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConductorType.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.CoordinateSystem"></a>

### *property* LoadGroup.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.DataImportStatus"></a>

### *property* LoadGroup.DataImportStatus *: [Ansys.Mechanical.DataModel.Enums.DataImportStatus](../../../../Mechanical/DataModel/Enums/DataImportStatus.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataImportStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DataImportStatus.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.DataModelObjectCategory"></a>

### *property* LoadGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Figures"></a>

### *property* LoadGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.FilterByOrder"></a>

### *property* LoadGroup.FilterByOrder *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether imported remote loads are filtered by order. The order is specified in the Orders property.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GroupingType"></a>

### *property* LoadGroup.GroupingType *: [Ansys.Mechanical.DataModel.Enums.LoadGroupingType](../../../../Mechanical/DataModel/Enums/LoadGroupingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupingType.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Images"></a>

### *property* LoadGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.ImportedDataType"></a>

### *property* LoadGroup.ImportedDataType *: [Ansys.Mechanical.DataModel.Enums.DataTypeOptions](../../../../Mechanical/DataModel/Enums/DataTypeOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataTypeOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportedDataType.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.InternalObject"></a>

### *property* LoadGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.InterpolateRPM"></a>

### *property* LoadGroup.InterpolateRPM *: [Ansys.Mechanical.DataModel.Enums.InterpolateRPM](../../../../Mechanical/DataModel/Enums/InterpolateRPM.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.InterpolateRPM) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Interpolate RPM.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Location"></a>

### *property* LoadGroup.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.NumberOfFrequenciesToConsider"></a>

### *property* LoadGroup.NumberOfFrequenciesToConsider *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfFrequenciesToConsider.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.NumberOfPoints"></a>

### *property* LoadGroup.NumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Number of Points.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.NumberOfTurns"></a>

### *property* LoadGroup.NumberOfTurns *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfTurns.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.OnDataRefreshOption"></a>

### *property* LoadGroup.OnDataRefreshOption *: [Ansys.Mechanical.DataModel.Enums.RemotePointUpdateOptions](../../../../Mechanical/DataModel/Enums/RemotePointUpdateOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RemotePointUpdateOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OnDataRefreshOption.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Orders"></a>

### *property* LoadGroup.Orders *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Orders. These orders are imported from the maxwell solution and the Analysis Settings will be synced with the orders specified.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.PhaseAngle"></a>

### *property* LoadGroup.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Properties"></a>

### *property* LoadGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.RPMFileSelection"></a>

### *property* LoadGroup.RPMFileSelection *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the File Selection (.csv) for User Defined RPM Interpolation.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.SolutionId"></a>

### *property* LoadGroup.SolutionId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionId.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Suppressed"></a>

### *property* LoadGroup.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.TransferFileName"></a>

### *property* LoadGroup.TransferFileName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransferFileName.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.UseInternalRemotePoints"></a>

### *property* LoadGroup.UseInternalRemotePoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseInternalRemotePoints.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.VisibleProperties"></a>

### *property* LoadGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LoadGroup.Activate"></a>

### LoadGroup.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.AddComment"></a>

### LoadGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.AddCurrent"></a>

### LoadGroup.AddCurrent() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Current](Current.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Current)

Creates a new Current

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.AddFigure"></a>

### LoadGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.AddImage"></a>

### LoadGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.AddVoltage"></a>

### LoadGroup.AddVoltage() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Voltage](Voltage.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Voltage)

Creates a new Voltage

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.CopyTo"></a>

### LoadGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.CreateParameter"></a>

### LoadGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Delete"></a>

### LoadGroup.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.DeleteChildren"></a>

### LoadGroup.DeleteChildren(verificationDialog: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.Duplicate"></a>

### LoadGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GenerateRemoteLoads"></a>

### LoadGroup.GenerateRemoteLoads() → [None](https://docs.python.org/3/library/constants.html#None)

Run the action to generate the remote loads from the source data.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GetChildren"></a>

### LoadGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GetParameter"></a>

### LoadGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GroupAllSimilarChildren"></a>

### LoadGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.GroupSimilarObjects"></a>

### LoadGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.PropertyByAPIName"></a>

### LoadGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.PropertyByName"></a>

### LoadGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LoadGroup.RemoveParameter"></a>

### LoadGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

