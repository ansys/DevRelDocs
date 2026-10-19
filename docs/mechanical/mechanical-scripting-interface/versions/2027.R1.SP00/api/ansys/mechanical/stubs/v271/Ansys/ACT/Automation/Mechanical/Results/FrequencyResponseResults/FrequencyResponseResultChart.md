# `FrequencyResponseResultChart`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.FrequencyResponseResultChart"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.FrequencyResponseResultChart(internalObject: Any)

<a id="FrequencyResponseResultChart"></a>

### *class* FrequencyResponseResultChart(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FrequencyResponseResultChart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FrequencyResponseResultChart.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FrequencyResponseResultChart.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#FrequencyResponseResultChart.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#FrequencyResponseResultChart.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#FrequencyResponseResultChart.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FrequencyResponseResultChart.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateContourResult`](#FrequencyResponseResultChart.CreateContourResult)             | Create Contour result for the given result chart.                                           |
| [`CreateObjRef`](#FrequencyResponseResultChart.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FrequencyResponseResultChart.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FrequencyResponseResultChart.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FrequencyResponseResultChart.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FrequencyResponseResultChart.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FrequencyResponseResultChart.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#FrequencyResponseResultChart.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#FrequencyResponseResultChart.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#FrequencyResponseResultChart.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FrequencyResponseResultChart.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FrequencyResponseResultChart.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FrequencyResponseResultChart.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FrequencyResponseResultChart.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FrequencyResponseResultChart.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FrequencyResponseResultChart.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FrequencyResponseResultChart.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FrequencyResponseResultChart.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FrequencyResponseResultChart.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FrequencyResponseResultChart.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FrequencyResponseResultChart.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FrequencyResponseResultChart.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#FrequencyResponseResultChart.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#FrequencyResponseResultChart.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#FrequencyResponseResultChart.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FrequencyResponseResultChart.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FrequencyResponseResultChart.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FrequencyResponseResultChart.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FrequencyResponseResultChart.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FrequencyResponseResultChart.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FrequencyResponseResultChart.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FrequencyResponseResultChart.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FrequencyResponseResultChart.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FrequencyResponseResultChart.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FrequencyResponseResultChart.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FrequencyResponseResultChart.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FrequencyResponseResultChart.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FrequencyResponseResultChart.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#FrequencyResponseResultChart.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#FrequencyResponseResultChart.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#FrequencyResponseResultChart.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#FrequencyResponseResultChart.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#FrequencyResponseResultChart.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#FrequencyResponseResultChart.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#FrequencyResponseResultChart.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#FrequencyResponseResultChart.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                           | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.   |
| [`CurvesAppearanceDisplay`](#FrequencyResponseResultChart.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#FrequencyResponseResultChart.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#FrequencyResponseResultChart.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#FrequencyResponseResultChart.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#FrequencyResponseResultChart.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#FrequencyResponseResultChart.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#FrequencyResponseResultChart.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#FrequencyResponseResultChart.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#FrequencyResponseResultChart.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#FrequencyResponseResultChart.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#FrequencyResponseResultChart.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#FrequencyResponseResultChart.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#FrequencyResponseResultChart.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#FrequencyResponseResultChart.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#FrequencyResponseResultChart.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#FrequencyResponseResultChart.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#FrequencyResponseResultChart.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#FrequencyResponseResultChart.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#FrequencyResponseResultChart.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#FrequencyResponseResultChart.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#FrequencyResponseResultChart.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#FrequencyResponseResultChart.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#FrequencyResponseResultChart.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#FrequencyResponseResultChart.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#FrequencyResponseResultChart.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#FrequencyResponseResultChart.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                              | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#FrequencyResponseResultChart.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#FrequencyResponseResultChart.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#FrequencyResponseResultChart.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#FrequencyResponseResultChart.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#FrequencyResponseResultChart.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#FrequencyResponseResultChart.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#FrequencyResponseResultChart.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#FrequencyResponseResultChart.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#FrequencyResponseResultChart.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`RemotePointSelection`](#FrequencyResponseResultChart.RemotePointSelection)               | Gets or sets the RemotePointSelection.                                                             |
| [`ReportedFrequency`](#FrequencyResponseResultChart.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#FrequencyResponseResultChart.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#FrequencyResponseResultChart.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#FrequencyResponseResultChart.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#FrequencyResponseResultChart.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#FrequencyResponseResultChart.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#FrequencyResponseResultChart.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                             | Gets or sets the Spring.                                                                           |
| [`State`](#FrequencyResponseResultChart.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#FrequencyResponseResultChart.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#FrequencyResponseResultChart.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#FrequencyResponseResultChart.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#FrequencyResponseResultChart.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#FrequencyResponseResultChart.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#FrequencyResponseResultChart.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#FrequencyResponseResultChart.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#FrequencyResponseResultChart.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="FrequencyResponseResultChart.AccelerationType"></a>

### *property* FrequencyResponseResultChart.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.AttachedRefs"></a>

### *property* FrequencyResponseResultChart.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.BoundaryCondition"></a>

### *property* FrequencyResponseResultChart.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ChartDimensions"></a>

### *property* FrequencyResponseResultChart.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ChartViewingStyle"></a>

### *property* FrequencyResponseResultChart.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Children"></a>

### *property* FrequencyResponseResultChart.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ClsId"></a>

### *property* FrequencyResponseResultChart.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Comments"></a>

### *property* FrequencyResponseResultChart.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CoordinateSystem"></a>

### *property* FrequencyResponseResultChart.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CurvesAppearanceDisplay"></a>

### *property* FrequencyResponseResultChart.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CutFrequency"></a>

### *property* FrequencyResponseResultChart.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.DataModelObjectCategory"></a>

### *property* FrequencyResponseResultChart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.DeformationType"></a>

### *property* FrequencyResponseResultChart.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.DpfEvaluation"></a>

### *property* FrequencyResponseResultChart.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Duration"></a>

### *property* FrequencyResponseResultChart.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.EnhancedTracking"></a>

### *property* FrequencyResponseResultChart.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.FilterMaximum"></a>

### *property* FrequencyResponseResultChart.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.FilterMinimum"></a>

### *property* FrequencyResponseResultChart.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.FilterType"></a>

### *property* FrequencyResponseResultChart.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.FrequencyAtMaximumAmplitude"></a>

### *property* FrequencyResponseResultChart.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GeometrySelectionString"></a>

### *property* FrequencyResponseResultChart.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GroupingFolder"></a>

### *property* FrequencyResponseResultChart.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.IconName"></a>

### *property* FrequencyResponseResultChart.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Images"></a>

### *property* FrequencyResponseResultChart.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ImaginaryAtMaximumAmplitude"></a>

### *property* FrequencyResponseResultChart.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.InternalObject"></a>

### *property* FrequencyResponseResultChart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.IsSolved"></a>

### *property* FrequencyResponseResultChart.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.LoadStepNumber"></a>

### *property* FrequencyResponseResultChart.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Location"></a>

### *property* FrequencyResponseResultChart.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Maximum"></a>

### *property* FrequencyResponseResultChart.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.MaximumAmplitude"></a>

### *property* FrequencyResponseResultChart.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.MaximumFrequency"></a>

### *property* FrequencyResponseResultChart.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Minimum"></a>

### *property* FrequencyResponseResultChart.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.MinimumFrequency"></a>

### *property* FrequencyResponseResultChart.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Name"></a>

### *property* FrequencyResponseResultChart.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.NamedSelections"></a>

### *property* FrequencyResponseResultChart.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.NormalOrientation"></a>

### *property* FrequencyResponseResultChart.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ObjectId"></a>

### *property* FrequencyResponseResultChart.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ObjectState"></a>

### *property* FrequencyResponseResultChart.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ObjectTags"></a>

### *property* FrequencyResponseResultChart.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Parent"></a>

### *property* FrequencyResponseResultChart.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.PhaseAngle"></a>

### *property* FrequencyResponseResultChart.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Properties"></a>

### *property* FrequencyResponseResultChart.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RPMSelection"></a>

### *property* FrequencyResponseResultChart.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RealAtMaximumAmplitude"></a>

### *property* FrequencyResponseResultChart.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RemotePointSelection"></a>

### *property* FrequencyResponseResultChart.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ReportedFrequency"></a>

### *property* FrequencyResponseResultChart.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RequestedFrequency"></a>

### *property* FrequencyResponseResultChart.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ResultChartType"></a>

### *property* FrequencyResponseResultChart.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RpmSetNumber"></a>

### *property* FrequencyResponseResultChart.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.SectorNumber"></a>

### *property* FrequencyResponseResultChart.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ShearOrientation"></a>

### *property* FrequencyResponseResultChart.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.SpatialResolution"></a>

### *property* FrequencyResponseResultChart.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Spring"></a>

### *property* FrequencyResponseResultChart.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.State"></a>

### *property* FrequencyResponseResultChart.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.StressStrainType"></a>

### *property* FrequencyResponseResultChart.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Suppressed"></a>

### *property* FrequencyResponseResultChart.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.TabularData"></a>

### *property* FrequencyResponseResultChart.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.TimeHistoryDisplay"></a>

### *property* FrequencyResponseResultChart.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.UseParentFrequencyRange"></a>

### *property* FrequencyResponseResultChart.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.VelocityType"></a>

### *property* FrequencyResponseResultChart.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.VisibleProperties"></a>

### *property* FrequencyResponseResultChart.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.XAxisValues"></a>

### *property* FrequencyResponseResultChart.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FrequencyResponseResultChart.Activate"></a>

### FrequencyResponseResultChart.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.AddComment"></a>

### FrequencyResponseResultChart.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.AddImage"></a>

### FrequencyResponseResultChart.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ClearGeneratedData"></a>

### FrequencyResponseResultChart.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Copy"></a>

### FrequencyResponseResultChart.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CopyTo"></a>

### FrequencyResponseResultChart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CreateContourResult"></a>

### FrequencyResponseResultChart.CreateContourResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Create Contour result for the given result chart.
    An exception is thrown if the chart does not support this option.
```

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CreateObjRef"></a>

### FrequencyResponseResultChart.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CreateParameter"></a>

### FrequencyResponseResultChart.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Cut"></a>

### FrequencyResponseResultChart.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Delete"></a>

### FrequencyResponseResultChart.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Duplicate"></a>

### FrequencyResponseResultChart.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Equals"></a>

### FrequencyResponseResultChart.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.EvaluateAllResults"></a>

### FrequencyResponseResultChart.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ExportAnimation"></a>

### FrequencyResponseResultChart.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetAPIName"></a>

### FrequencyResponseResultChart.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetAllProperties"></a>

### FrequencyResponseResultChart.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetChildren"></a>

### FrequencyResponseResultChart.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FrequencyResponseResultChart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetDetailsView"></a>

### FrequencyResponseResultChart.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetEnumName"></a>

### FrequencyResponseResultChart.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetHashCode"></a>

### FrequencyResponseResultChart.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetIconFile"></a>

### FrequencyResponseResultChart.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetLifetimeService"></a>

### FrequencyResponseResultChart.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetObjectData"></a>

### FrequencyResponseResultChart.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetParameter"></a>

### FrequencyResponseResultChart.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetPath"></a>

### FrequencyResponseResultChart.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetPropertyName"></a>

### FrequencyResponseResultChart.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetPropertyValue"></a>

### FrequencyResponseResultChart.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetQuantityName"></a>

### FrequencyResponseResultChart.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetQuantityNameFromType"></a>

### FrequencyResponseResultChart.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetVisibleProperties"></a>

### FrequencyResponseResultChart.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetVisiblePropertyNames"></a>

### FrequencyResponseResultChart.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GroupAllSimilarChildren"></a>

### FrequencyResponseResultChart.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GroupSimilarObjects"></a>

### FrequencyResponseResultChart.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.InitializeLifetimeService"></a>

### FrequencyResponseResultChart.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.IsPropertyEditable"></a>

### FrequencyResponseResultChart.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FrequencyResponseResultChart.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.IsPropertyVisible"></a>

### FrequencyResponseResultChart.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FrequencyResponseResultChart.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Paste"></a>

### FrequencyResponseResultChart.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.PropertyByAPIName"></a>

### FrequencyResponseResultChart.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.PropertyById"></a>

### FrequencyResponseResultChart.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.PropertyByName"></a>

### FrequencyResponseResultChart.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RemoveFromGroup"></a>

### FrequencyResponseResultChart.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RemoveParameter"></a>

### FrequencyResponseResultChart.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RenameBasedOnDefinition"></a>

### FrequencyResponseResultChart.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

