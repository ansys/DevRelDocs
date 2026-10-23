# `AccelerationFrequencyResponse`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AccelerationFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AccelerationFrequencyResponse(internalObject: Any)

<a id="AccelerationFrequencyResponse"></a>

### *class* AccelerationFrequencyResponse(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AccelerationFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AccelerationFrequencyResponse.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AccelerationFrequencyResponse.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#AccelerationFrequencyResponse.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#AccelerationFrequencyResponse.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AccelerationFrequencyResponse.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AccelerationFrequencyResponse.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateContourResult`](#AccelerationFrequencyResponse.CreateContourResult)             | Create Contour result for the given result chart.                                           |
| [`CreateObjRef`](#AccelerationFrequencyResponse.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AccelerationFrequencyResponse.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AccelerationFrequencyResponse.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AccelerationFrequencyResponse.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AccelerationFrequencyResponse.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AccelerationFrequencyResponse.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AccelerationFrequencyResponse.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AccelerationFrequencyResponse.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#AccelerationFrequencyResponse.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AccelerationFrequencyResponse.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AccelerationFrequencyResponse.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AccelerationFrequencyResponse.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AccelerationFrequencyResponse.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AccelerationFrequencyResponse.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AccelerationFrequencyResponse.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AccelerationFrequencyResponse.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AccelerationFrequencyResponse.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AccelerationFrequencyResponse.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AccelerationFrequencyResponse.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AccelerationFrequencyResponse.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AccelerationFrequencyResponse.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AccelerationFrequencyResponse.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#AccelerationFrequencyResponse.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#AccelerationFrequencyResponse.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AccelerationFrequencyResponse.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AccelerationFrequencyResponse.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AccelerationFrequencyResponse.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AccelerationFrequencyResponse.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AccelerationFrequencyResponse.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AccelerationFrequencyResponse.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AccelerationFrequencyResponse.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AccelerationFrequencyResponse.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AccelerationFrequencyResponse.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AccelerationFrequencyResponse.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AccelerationFrequencyResponse.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AccelerationFrequencyResponse.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AccelerationFrequencyResponse.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#AccelerationFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#AccelerationFrequencyResponse.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#AccelerationFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#AccelerationFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#AccelerationFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#AccelerationFrequencyResponse.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#AccelerationFrequencyResponse.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#AccelerationFrequencyResponse.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                            | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.   |
| [`CurvesAppearanceDisplay`](#AccelerationFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#AccelerationFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#AccelerationFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#AccelerationFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DisplayMode`](#AccelerationFrequencyResponse.DisplayMode)                                 | Gets or sets the DisplayMode.                                                                      |
| [`DisplayOrder`](#AccelerationFrequencyResponse.DisplayOrder)                               | Gets or sets the DisplayOrder.                                                                     |
| [`DisplayPanel`](#AccelerationFrequencyResponse.DisplayPanel)                               | Gets or sets the DisplayPanel.                                                                     |
| [`DpfEvaluation`](#AccelerationFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#AccelerationFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#AccelerationFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#AccelerationFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#AccelerationFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#AccelerationFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#AccelerationFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`FrequencySelection`](#AccelerationFrequencyResponse.FrequencySelection)                   | Gets or sets the FrequencySelection.                                                               |
| [`GeometrySelectionString`](#AccelerationFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#AccelerationFrequencyResponse.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#AccelerationFrequencyResponse.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#AccelerationFrequencyResponse.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#AccelerationFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#AccelerationFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#AccelerationFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#AccelerationFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#AccelerationFrequencyResponse.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#AccelerationFrequencyResponse.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#AccelerationFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#AccelerationFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#AccelerationFrequencyResponse.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#AccelerationFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`ModeSelection`](#AccelerationFrequencyResponse.ModeSelection)                             | Gets or sets the ModeSelection.                                                                    |
| [`ModesToDisplay`](#AccelerationFrequencyResponse.ModesToDisplay)                           | Gets or sets the ModesToDisplay.                                                                   |
| [`MosaicChartLegendMax`](#AccelerationFrequencyResponse.MosaicChartLegendMax)               | Gets or sets the MosaicChartLegendMax.                                                             |
| [`MosaicChartLegendMin`](#AccelerationFrequencyResponse.MosaicChartLegendMin)               | Gets or sets the MosaicChartLegendMin.                                                             |
| [`Name`](#AccelerationFrequencyResponse.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                               | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#AccelerationFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#AccelerationFrequencyResponse.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#AccelerationFrequencyResponse.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#AccelerationFrequencyResponse.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`OrderSelection`](#AccelerationFrequencyResponse.OrderSelection)                           | Gets or sets the OrderSelection.                                                                   |
| [`OrdersToDisplay`](#AccelerationFrequencyResponse.OrdersToDisplay)                         | Gets or sets the OrdersToDisplay.                                                                  |
| [`PanelsToDisplay`](#AccelerationFrequencyResponse.PanelsToDisplay)                         | Gets or sets the PanelsToDisplay.                                                                  |
| [`Parent`](#AccelerationFrequencyResponse.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#AccelerationFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#AccelerationFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#AccelerationFrequencyResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#AccelerationFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`RemotePointSelection`](#AccelerationFrequencyResponse.RemotePointSelection)               | Gets or sets the RemotePointSelection.                                                             |
| [`ReportedFrequency`](#AccelerationFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#AccelerationFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#AccelerationFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#AccelerationFrequencyResponse.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`ScopingMethod`](#AccelerationFrequencyResponse.ScopingMethod)                             | Gets or sets the ScopingMethod.                                                                    |
| [`SectorNumber`](#AccelerationFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#AccelerationFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`ShowTextOnMosaic`](#AccelerationFrequencyResponse.ShowTextOnMosaic)                       | Gets or sets the ShowTextOnMosaic.                                                                 |
| [`SpatialResolution`](#AccelerationFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                              | Gets or sets the Spring.                                                                           |
| [`State`](#AccelerationFrequencyResponse.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#AccelerationFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#AccelerationFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#AccelerationFrequencyResponse.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#AccelerationFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseModeContribution`](#AccelerationFrequencyResponse.UseModeContribution)                 | Gets or sets the UseModeContribution.                                                              |
| [`UsePanelContribution`](#AccelerationFrequencyResponse.UsePanelContribution)               | Gets or sets the UsePanelContribution.                                                             |
| [`UseParentFrequencyRange`](#AccelerationFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#AccelerationFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#AccelerationFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#AccelerationFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="AccelerationFrequencyResponse.AccelerationType"></a>

### *property* AccelerationFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.AttachedRefs"></a>

### *property* AccelerationFrequencyResponse.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.BoundaryCondition"></a>

### *property* AccelerationFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ChartDimensions"></a>

### *property* AccelerationFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ChartViewingStyle"></a>

### *property* AccelerationFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Children"></a>

### *property* AccelerationFrequencyResponse.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ClsId"></a>

### *property* AccelerationFrequencyResponse.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Comments"></a>

### *property* AccelerationFrequencyResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.CoordinateSystem"></a>

### *property* AccelerationFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* AccelerationFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.CutFrequency"></a>

### *property* AccelerationFrequencyResponse.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.DataModelObjectCategory"></a>

### *property* AccelerationFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.DeformationType"></a>

### *property* AccelerationFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.DisplayMode"></a>

### *property* AccelerationFrequencyResponse.DisplayMode *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayMode.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.DisplayOrder"></a>

### *property* AccelerationFrequencyResponse.DisplayOrder *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOrder.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.DisplayPanel"></a>

### *property* AccelerationFrequencyResponse.DisplayPanel *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayPanel.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.DpfEvaluation"></a>

### *property* AccelerationFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Duration"></a>

### *property* AccelerationFrequencyResponse.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.EnhancedTracking"></a>

### *property* AccelerationFrequencyResponse.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.FilterMaximum"></a>

### *property* AccelerationFrequencyResponse.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.FilterMinimum"></a>

### *property* AccelerationFrequencyResponse.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.FilterType"></a>

### *property* AccelerationFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AccelerationFrequencyResponse.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.FrequencySelection"></a>

### *property* AccelerationFrequencyResponse.FrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencySelection.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GeometrySelectionString"></a>

### *property* AccelerationFrequencyResponse.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GroupingFolder"></a>

### *property* AccelerationFrequencyResponse.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.IconName"></a>

### *property* AccelerationFrequencyResponse.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Images"></a>

### *property* AccelerationFrequencyResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AccelerationFrequencyResponse.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.InternalObject"></a>

### *property* AccelerationFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.IsSolved"></a>

### *property* AccelerationFrequencyResponse.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.LoadStepNumber"></a>

### *property* AccelerationFrequencyResponse.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Location"></a>

### *property* AccelerationFrequencyResponse.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Maximum"></a>

### *property* AccelerationFrequencyResponse.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.MaximumAmplitude"></a>

### *property* AccelerationFrequencyResponse.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.MaximumFrequency"></a>

### *property* AccelerationFrequencyResponse.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Minimum"></a>

### *property* AccelerationFrequencyResponse.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.MinimumFrequency"></a>

### *property* AccelerationFrequencyResponse.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ModeSelection"></a>

### *property* AccelerationFrequencyResponse.ModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModeSelection.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ModesToDisplay"></a>

### *property* AccelerationFrequencyResponse.ModesToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModesToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.MosaicChartLegendMax"></a>

### *property* AccelerationFrequencyResponse.MosaicChartLegendMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMax.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.MosaicChartLegendMin"></a>

### *property* AccelerationFrequencyResponse.MosaicChartLegendMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMin.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Name"></a>

### *property* AccelerationFrequencyResponse.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.NamedSelections"></a>

### *property* AccelerationFrequencyResponse.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.NormalOrientation"></a>

### *property* AccelerationFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ObjectId"></a>

### *property* AccelerationFrequencyResponse.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ObjectState"></a>

### *property* AccelerationFrequencyResponse.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ObjectTags"></a>

### *property* AccelerationFrequencyResponse.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.OrderSelection"></a>

### *property* AccelerationFrequencyResponse.OrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrderSelection.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.OrdersToDisplay"></a>

### *property* AccelerationFrequencyResponse.OrdersToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrdersToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.PanelsToDisplay"></a>

### *property* AccelerationFrequencyResponse.PanelsToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PanelsToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Parent"></a>

### *property* AccelerationFrequencyResponse.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.PhaseAngle"></a>

### *property* AccelerationFrequencyResponse.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Properties"></a>

### *property* AccelerationFrequencyResponse.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.RPMSelection"></a>

### *property* AccelerationFrequencyResponse.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* AccelerationFrequencyResponse.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.RemotePointSelection"></a>

### *property* AccelerationFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ReportedFrequency"></a>

### *property* AccelerationFrequencyResponse.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.RequestedFrequency"></a>

### *property* AccelerationFrequencyResponse.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ResultChartType"></a>

### *property* AccelerationFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.RpmSetNumber"></a>

### *property* AccelerationFrequencyResponse.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ScopingMethod"></a>

### *property* AccelerationFrequencyResponse.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.SectorNumber"></a>

### *property* AccelerationFrequencyResponse.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ShearOrientation"></a>

### *property* AccelerationFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ShowTextOnMosaic"></a>

### *property* AccelerationFrequencyResponse.ShowTextOnMosaic *: Ansys.Mechanical.DataModel.Enums.ShowTextOnMosaicMode | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowTextOnMosaic.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.SpatialResolution"></a>

### *property* AccelerationFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Spring"></a>

### *property* AccelerationFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.State"></a>

### *property* AccelerationFrequencyResponse.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.StressStrainType"></a>

### *property* AccelerationFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Suppressed"></a>

### *property* AccelerationFrequencyResponse.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.TabularData"></a>

### *property* AccelerationFrequencyResponse.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.TimeHistoryDisplay"></a>

### *property* AccelerationFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.UseModeContribution"></a>

### *property* AccelerationFrequencyResponse.UseModeContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseModeContribution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.UsePanelContribution"></a>

### *property* AccelerationFrequencyResponse.UsePanelContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UsePanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.UseParentFrequencyRange"></a>

### *property* AccelerationFrequencyResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.VelocityType"></a>

### *property* AccelerationFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.VisibleProperties"></a>

### *property* AccelerationFrequencyResponse.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.XAxisValues"></a>

### *property* AccelerationFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AccelerationFrequencyResponse.Activate"></a>

### AccelerationFrequencyResponse.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.AddComment"></a>

### AccelerationFrequencyResponse.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.AddImage"></a>

### AccelerationFrequencyResponse.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ClearGeneratedData"></a>

### AccelerationFrequencyResponse.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Copy"></a>

### AccelerationFrequencyResponse.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.CopyTo"></a>

### AccelerationFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.CreateContourResult"></a>

### AccelerationFrequencyResponse.CreateContourResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Create Contour result for the given result chart.
    An exception is thrown if the chart does not support this option.
```

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.CreateObjRef"></a>

### AccelerationFrequencyResponse.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.CreateParameter"></a>

### AccelerationFrequencyResponse.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Cut"></a>

### AccelerationFrequencyResponse.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Delete"></a>

### AccelerationFrequencyResponse.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Duplicate"></a>

### AccelerationFrequencyResponse.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Equals"></a>

### AccelerationFrequencyResponse.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.EvaluateAllResults"></a>

### AccelerationFrequencyResponse.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.ExportAnimation"></a>

### AccelerationFrequencyResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetAPIName"></a>

### AccelerationFrequencyResponse.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetAllProperties"></a>

### AccelerationFrequencyResponse.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetChildren"></a>

### AccelerationFrequencyResponse.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AccelerationFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetDetailsView"></a>

### AccelerationFrequencyResponse.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetEnumName"></a>

### AccelerationFrequencyResponse.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetHashCode"></a>

### AccelerationFrequencyResponse.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetIconFile"></a>

### AccelerationFrequencyResponse.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetLifetimeService"></a>

### AccelerationFrequencyResponse.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetObjectData"></a>

### AccelerationFrequencyResponse.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetParameter"></a>

### AccelerationFrequencyResponse.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetPath"></a>

### AccelerationFrequencyResponse.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetPropertyName"></a>

### AccelerationFrequencyResponse.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetPropertyValue"></a>

### AccelerationFrequencyResponse.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetQuantityName"></a>

### AccelerationFrequencyResponse.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetQuantityNameFromType"></a>

### AccelerationFrequencyResponse.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetVisibleProperties"></a>

### AccelerationFrequencyResponse.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GetVisiblePropertyNames"></a>

### AccelerationFrequencyResponse.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GroupAllSimilarChildren"></a>

### AccelerationFrequencyResponse.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.GroupSimilarObjects"></a>

### AccelerationFrequencyResponse.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.InitializeLifetimeService"></a>

### AccelerationFrequencyResponse.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.IsPropertyEditable"></a>

### AccelerationFrequencyResponse.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AccelerationFrequencyResponse.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.IsPropertyVisible"></a>

### AccelerationFrequencyResponse.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AccelerationFrequencyResponse.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.Paste"></a>

### AccelerationFrequencyResponse.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.PropertyByAPIName"></a>

### AccelerationFrequencyResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.PropertyById"></a>

### AccelerationFrequencyResponse.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.PropertyByName"></a>

### AccelerationFrequencyResponse.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.RemoveFromGroup"></a>

### AccelerationFrequencyResponse.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.RemoveParameter"></a>

### AccelerationFrequencyResponse.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationFrequencyResponse.RenameBasedOnDefinition"></a>

### AccelerationFrequencyResponse.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

