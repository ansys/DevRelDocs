# `FatigueRainflowMatrix`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueRainflowMatrix"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueRainflowMatrix(internalObject: Any)

<a id="FatigueRainflowMatrix"></a>

### *class* FatigueRainflowMatrix(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FatigueRainflowMatrix.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FatigueRainflowMatrix.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FatigueRainflowMatrix.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#FatigueRainflowMatrix.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#FatigueRainflowMatrix.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#FatigueRainflowMatrix.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FatigueRainflowMatrix.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FatigueRainflowMatrix.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FatigueRainflowMatrix.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FatigueRainflowMatrix.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FatigueRainflowMatrix.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FatigueRainflowMatrix.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FatigueRainflowMatrix.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#FatigueRainflowMatrix.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#FatigueRainflowMatrix.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#FatigueRainflowMatrix.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FatigueRainflowMatrix.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FatigueRainflowMatrix.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FatigueRainflowMatrix.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FatigueRainflowMatrix.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FatigueRainflowMatrix.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FatigueRainflowMatrix.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FatigueRainflowMatrix.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FatigueRainflowMatrix.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FatigueRainflowMatrix.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FatigueRainflowMatrix.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FatigueRainflowMatrix.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FatigueRainflowMatrix.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#FatigueRainflowMatrix.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#FatigueRainflowMatrix.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#FatigueRainflowMatrix.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FatigueRainflowMatrix.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FatigueRainflowMatrix.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FatigueRainflowMatrix.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FatigueRainflowMatrix.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FatigueRainflowMatrix.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FatigueRainflowMatrix.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FatigueRainflowMatrix.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FatigueRainflowMatrix.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FatigueRainflowMatrix.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FatigueRainflowMatrix.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FatigueRainflowMatrix.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FatigueRainflowMatrix.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FatigueRainflowMatrix.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#FatigueRainflowMatrix.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#FatigueRainflowMatrix.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#FatigueRainflowMatrix.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#FatigueRainflowMatrix.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#FatigueRainflowMatrix.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#FatigueRainflowMatrix.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#FatigueRainflowMatrix.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#FatigueRainflowMatrix.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                    | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#FatigueRainflowMatrix.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#FatigueRainflowMatrix.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#FatigueRainflowMatrix.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#FatigueRainflowMatrix.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#FatigueRainflowMatrix.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#FatigueRainflowMatrix.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#FatigueRainflowMatrix.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#FatigueRainflowMatrix.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#FatigueRainflowMatrix.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#FatigueRainflowMatrix.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#FatigueRainflowMatrix.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#FatigueRainflowMatrix.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#FatigueRainflowMatrix.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#FatigueRainflowMatrix.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#FatigueRainflowMatrix.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#FatigueRainflowMatrix.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#FatigueRainflowMatrix.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#FatigueRainflowMatrix.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#FatigueRainflowMatrix.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#FatigueRainflowMatrix.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#FatigueRainflowMatrix.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#FatigueRainflowMatrix.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#FatigueRainflowMatrix.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`MaximumMean`](#FatigueRainflowMatrix.MaximumMean)                                 | Gets the MaximumMean.                                                                              |
| [`MaximumRange`](#FatigueRainflowMatrix.MaximumRange)                               | Gets the MaximumRange.                                                                             |
| [`Minimum`](#FatigueRainflowMatrix.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#FatigueRainflowMatrix.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`MinimumMean`](#FatigueRainflowMatrix.MinimumMean)                                 | Gets the MinimumMean.                                                                              |
| [`MinimumRange`](#FatigueRainflowMatrix.MinimumRange)                               | Gets the MinimumRange.                                                                             |
| [`Name`](#FatigueRainflowMatrix.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                       | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#FatigueRainflowMatrix.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#FatigueRainflowMatrix.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#FatigueRainflowMatrix.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#FatigueRainflowMatrix.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`OutputUnit`](#FatigueRainflowMatrix.OutputUnit)                                   | Gets or sets the OutputUnit.                                                                       |
| [`Parent`](#FatigueRainflowMatrix.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#FatigueRainflowMatrix.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#FatigueRainflowMatrix.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#FatigueRainflowMatrix.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#FatigueRainflowMatrix.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#FatigueRainflowMatrix.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#FatigueRainflowMatrix.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#FatigueRainflowMatrix.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#FatigueRainflowMatrix.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#FatigueRainflowMatrix.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#FatigueRainflowMatrix.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#FatigueRainflowMatrix.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                      | Gets or sets the Spring.                                                                           |
| [`State`](#FatigueRainflowMatrix.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#FatigueRainflowMatrix.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#FatigueRainflowMatrix.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#FatigueRainflowMatrix.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#FatigueRainflowMatrix.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#FatigueRainflowMatrix.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#FatigueRainflowMatrix.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#FatigueRainflowMatrix.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#FatigueRainflowMatrix.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="FatigueRainflowMatrix.AccelerationType"></a>

### *property* FatigueRainflowMatrix.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.AttachedRefs"></a>

### *property* FatigueRainflowMatrix.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.BoundaryCondition"></a>

### *property* FatigueRainflowMatrix.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ChartDimensions"></a>

### *property* FatigueRainflowMatrix.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ChartViewingStyle"></a>

### *property* FatigueRainflowMatrix.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Children"></a>

### *property* FatigueRainflowMatrix.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ClsId"></a>

### *property* FatigueRainflowMatrix.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Comments"></a>

### *property* FatigueRainflowMatrix.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CoordinateSystem"></a>

### *property* FatigueRainflowMatrix.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CurvesAppearanceDisplay"></a>

### *property* FatigueRainflowMatrix.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CutFrequency"></a>

### *property* FatigueRainflowMatrix.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.DataModelObjectCategory"></a>

### *property* FatigueRainflowMatrix.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.DeformationType"></a>

### *property* FatigueRainflowMatrix.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.DpfEvaluation"></a>

### *property* FatigueRainflowMatrix.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Duration"></a>

### *property* FatigueRainflowMatrix.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.EnhancedTracking"></a>

### *property* FatigueRainflowMatrix.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FilterMaximum"></a>

### *property* FatigueRainflowMatrix.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FilterMinimum"></a>

### *property* FatigueRainflowMatrix.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FilterType"></a>

### *property* FatigueRainflowMatrix.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FrequencyAtMaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GeometrySelectionString"></a>

### *property* FatigueRainflowMatrix.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GroupingFolder"></a>

### *property* FatigueRainflowMatrix.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.IconName"></a>

### *property* FatigueRainflowMatrix.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Images"></a>

### *property* FatigueRainflowMatrix.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ImaginaryAtMaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.InternalObject"></a>

### *property* FatigueRainflowMatrix.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.IsSolved"></a>

### *property* FatigueRainflowMatrix.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.LoadStepNumber"></a>

### *property* FatigueRainflowMatrix.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Location"></a>

### *property* FatigueRainflowMatrix.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Maximum"></a>

### *property* FatigueRainflowMatrix.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumFrequency"></a>

### *property* FatigueRainflowMatrix.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumMean"></a>

### *property* FatigueRainflowMatrix.MaximumMean *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumRange"></a>

### *property* FatigueRainflowMatrix.MaximumRange *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Minimum"></a>

### *property* FatigueRainflowMatrix.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MinimumFrequency"></a>

### *property* FatigueRainflowMatrix.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MinimumMean"></a>

### *property* FatigueRainflowMatrix.MinimumMean *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MinimumRange"></a>

### *property* FatigueRainflowMatrix.MinimumRange *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Name"></a>

### *property* FatigueRainflowMatrix.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.NamedSelections"></a>

### *property* FatigueRainflowMatrix.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.NormalOrientation"></a>

### *property* FatigueRainflowMatrix.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ObjectId"></a>

### *property* FatigueRainflowMatrix.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ObjectState"></a>

### *property* FatigueRainflowMatrix.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ObjectTags"></a>

### *property* FatigueRainflowMatrix.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.OutputUnit"></a>

### *property* FatigueRainflowMatrix.OutputUnit *: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](../../../../../Mechanical/DataModel/Enums/UnitCategoryType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.UnitCategoryType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OutputUnit.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Parent"></a>

### *property* FatigueRainflowMatrix.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.PhaseAngle"></a>

### *property* FatigueRainflowMatrix.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Properties"></a>

### *property* FatigueRainflowMatrix.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RPMSelection"></a>

### *property* FatigueRainflowMatrix.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RealAtMaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ReportedFrequency"></a>

### *property* FatigueRainflowMatrix.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RequestedFrequency"></a>

### *property* FatigueRainflowMatrix.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ResultChartType"></a>

### *property* FatigueRainflowMatrix.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RpmSetNumber"></a>

### *property* FatigueRainflowMatrix.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.SectorNumber"></a>

### *property* FatigueRainflowMatrix.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ShearOrientation"></a>

### *property* FatigueRainflowMatrix.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.SpatialResolution"></a>

### *property* FatigueRainflowMatrix.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Spring"></a>

### *property* FatigueRainflowMatrix.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.State"></a>

### *property* FatigueRainflowMatrix.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.StressStrainType"></a>

### *property* FatigueRainflowMatrix.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Suppressed"></a>

### *property* FatigueRainflowMatrix.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.TabularData"></a>

### *property* FatigueRainflowMatrix.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.TimeHistoryDisplay"></a>

### *property* FatigueRainflowMatrix.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.UseParentFrequencyRange"></a>

### *property* FatigueRainflowMatrix.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.VelocityType"></a>

### *property* FatigueRainflowMatrix.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.VisibleProperties"></a>

### *property* FatigueRainflowMatrix.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.XAxisValues"></a>

### *property* FatigueRainflowMatrix.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueRainflowMatrix.Activate"></a>

### FatigueRainflowMatrix.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.AddComment"></a>

### FatigueRainflowMatrix.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.AddImage"></a>

### FatigueRainflowMatrix.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ClearGeneratedData"></a>

### FatigueRainflowMatrix.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Copy"></a>

### FatigueRainflowMatrix.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CopyTo"></a>

### FatigueRainflowMatrix.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CreateObjRef"></a>

### FatigueRainflowMatrix.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CreateParameter"></a>

### FatigueRainflowMatrix.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Cut"></a>

### FatigueRainflowMatrix.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Delete"></a>

### FatigueRainflowMatrix.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Duplicate"></a>

### FatigueRainflowMatrix.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Equals"></a>

### FatigueRainflowMatrix.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.EvaluateAllResults"></a>

### FatigueRainflowMatrix.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ExportAnimation"></a>

### FatigueRainflowMatrix.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetAPIName"></a>

### FatigueRainflowMatrix.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetAllProperties"></a>

### FatigueRainflowMatrix.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetChildren"></a>

### FatigueRainflowMatrix.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FatigueRainflowMatrix.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetDetailsView"></a>

### FatigueRainflowMatrix.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetEnumName"></a>

### FatigueRainflowMatrix.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetHashCode"></a>

### FatigueRainflowMatrix.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetIconFile"></a>

### FatigueRainflowMatrix.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetLifetimeService"></a>

### FatigueRainflowMatrix.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetObjectData"></a>

### FatigueRainflowMatrix.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetParameter"></a>

### FatigueRainflowMatrix.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetPath"></a>

### FatigueRainflowMatrix.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetPropertyName"></a>

### FatigueRainflowMatrix.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetPropertyValue"></a>

### FatigueRainflowMatrix.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetQuantityName"></a>

### FatigueRainflowMatrix.GetQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

### FatigueRainflowMatrix.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetQuantityNameFromType"></a>

### FatigueRainflowMatrix.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetVisibleProperties"></a>

### FatigueRainflowMatrix.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetVisiblePropertyNames"></a>

### FatigueRainflowMatrix.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GroupAllSimilarChildren"></a>

### FatigueRainflowMatrix.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GroupSimilarObjects"></a>

### FatigueRainflowMatrix.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.InitializeLifetimeService"></a>

### FatigueRainflowMatrix.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.IsPropertyEditable"></a>

### FatigueRainflowMatrix.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueRainflowMatrix.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.IsPropertyVisible"></a>

### FatigueRainflowMatrix.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueRainflowMatrix.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Paste"></a>

### FatigueRainflowMatrix.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.PropertyByAPIName"></a>

### FatigueRainflowMatrix.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.PropertyById"></a>

### FatigueRainflowMatrix.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.PropertyByName"></a>

### FatigueRainflowMatrix.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RemoveFromGroup"></a>

### FatigueRainflowMatrix.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RemoveParameter"></a>

### FatigueRainflowMatrix.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RenameBasedOnDefinition"></a>

### FatigueRainflowMatrix.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

