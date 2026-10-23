# `KrylovResidualNorm`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.KrylovResidualNorm"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.KrylovResidualNorm(internalObject: Any)

<a id="KrylovResidualNorm"></a>

### *class* KrylovResidualNorm(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a KrylovResidualNorm.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#KrylovResidualNorm.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#KrylovResidualNorm.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#KrylovResidualNorm.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#KrylovResidualNorm.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#KrylovResidualNorm.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#KrylovResidualNorm.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateContourResult`](#KrylovResidualNorm.CreateContourResult)             | Create Contour result for the given result chart.                                           |
| [`CreateObjRef`](#KrylovResidualNorm.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#KrylovResidualNorm.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#KrylovResidualNorm.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#KrylovResidualNorm.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#KrylovResidualNorm.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#KrylovResidualNorm.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#KrylovResidualNorm.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#KrylovResidualNorm.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#KrylovResidualNorm.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#KrylovResidualNorm.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#KrylovResidualNorm.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#KrylovResidualNorm.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#KrylovResidualNorm.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#KrylovResidualNorm.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#KrylovResidualNorm.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#KrylovResidualNorm.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#KrylovResidualNorm.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#KrylovResidualNorm.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#KrylovResidualNorm.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#KrylovResidualNorm.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#KrylovResidualNorm.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#KrylovResidualNorm.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#KrylovResidualNorm.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#KrylovResidualNorm.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#KrylovResidualNorm.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#KrylovResidualNorm.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#KrylovResidualNorm.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#KrylovResidualNorm.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#KrylovResidualNorm.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#KrylovResidualNorm.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#KrylovResidualNorm.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#KrylovResidualNorm.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#KrylovResidualNorm.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#KrylovResidualNorm.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#KrylovResidualNorm.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#KrylovResidualNorm.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#KrylovResidualNorm.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#KrylovResidualNorm.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#KrylovResidualNorm.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#KrylovResidualNorm.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#KrylovResidualNorm.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#KrylovResidualNorm.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#KrylovResidualNorm.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#KrylovResidualNorm.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#KrylovResidualNorm.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                 | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.   |
| [`CurvesAppearanceDisplay`](#KrylovResidualNorm.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#KrylovResidualNorm.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#KrylovResidualNorm.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#KrylovResidualNorm.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#KrylovResidualNorm.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#KrylovResidualNorm.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#KrylovResidualNorm.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#KrylovResidualNorm.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#KrylovResidualNorm.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#KrylovResidualNorm.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#KrylovResidualNorm.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`FrequencyAtMaximumResidual`](#KrylovResidualNorm.FrequencyAtMaximumResidual)   | Gets the Frequency at which the Residual is maximum.                                               |
| [`GeometrySelectionString`](#KrylovResidualNorm.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#KrylovResidualNorm.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#KrylovResidualNorm.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#KrylovResidualNorm.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#KrylovResidualNorm.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#KrylovResidualNorm.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#KrylovResidualNorm.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#KrylovResidualNorm.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#KrylovResidualNorm.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#KrylovResidualNorm.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#KrylovResidualNorm.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#KrylovResidualNorm.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`MaximumResidual`](#KrylovResidualNorm.MaximumResidual)                         | Gets the Maximum Residual value across the frequency range.                                        |
| [`Minimum`](#KrylovResidualNorm.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#KrylovResidualNorm.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#KrylovResidualNorm.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                    | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#KrylovResidualNorm.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#KrylovResidualNorm.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#KrylovResidualNorm.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#KrylovResidualNorm.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#KrylovResidualNorm.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#KrylovResidualNorm.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#KrylovResidualNorm.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#KrylovResidualNorm.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#KrylovResidualNorm.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`RemotePointSelection`](#KrylovResidualNorm.RemotePointSelection)               | Gets or sets the RemotePointSelection.                                                             |
| [`ReportedFrequency`](#KrylovResidualNorm.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#KrylovResidualNorm.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#KrylovResidualNorm.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#KrylovResidualNorm.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#KrylovResidualNorm.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#KrylovResidualNorm.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#KrylovResidualNorm.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                   | Gets or sets the Spring.                                                                           |
| [`State`](#KrylovResidualNorm.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#KrylovResidualNorm.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#KrylovResidualNorm.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#KrylovResidualNorm.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#KrylovResidualNorm.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#KrylovResidualNorm.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#KrylovResidualNorm.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#KrylovResidualNorm.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#KrylovResidualNorm.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="KrylovResidualNorm.AccelerationType"></a>

### *property* KrylovResidualNorm.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.AttachedRefs"></a>

### *property* KrylovResidualNorm.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.BoundaryCondition"></a>

### *property* KrylovResidualNorm.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ChartDimensions"></a>

### *property* KrylovResidualNorm.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ChartViewingStyle"></a>

### *property* KrylovResidualNorm.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Children"></a>

### *property* KrylovResidualNorm.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ClsId"></a>

### *property* KrylovResidualNorm.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Comments"></a>

### *property* KrylovResidualNorm.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CoordinateSystem"></a>

### *property* KrylovResidualNorm.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CurvesAppearanceDisplay"></a>

### *property* KrylovResidualNorm.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CutFrequency"></a>

### *property* KrylovResidualNorm.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.DataModelObjectCategory"></a>

### *property* KrylovResidualNorm.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.DeformationType"></a>

### *property* KrylovResidualNorm.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.DpfEvaluation"></a>

### *property* KrylovResidualNorm.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Duration"></a>

### *property* KrylovResidualNorm.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.EnhancedTracking"></a>

### *property* KrylovResidualNorm.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.FilterMaximum"></a>

### *property* KrylovResidualNorm.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.FilterMinimum"></a>

### *property* KrylovResidualNorm.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.FilterType"></a>

### *property* KrylovResidualNorm.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.FrequencyAtMaximumAmplitude"></a>

### *property* KrylovResidualNorm.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.FrequencyAtMaximumResidual"></a>

### *property* KrylovResidualNorm.FrequencyAtMaximumResidual *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Frequency at which the Residual is maximum.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GeometrySelectionString"></a>

### *property* KrylovResidualNorm.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GroupingFolder"></a>

### *property* KrylovResidualNorm.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.IconName"></a>

### *property* KrylovResidualNorm.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Images"></a>

### *property* KrylovResidualNorm.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ImaginaryAtMaximumAmplitude"></a>

### *property* KrylovResidualNorm.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.InternalObject"></a>

### *property* KrylovResidualNorm.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.IsSolved"></a>

### *property* KrylovResidualNorm.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.LoadStepNumber"></a>

### *property* KrylovResidualNorm.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Location"></a>

### *property* KrylovResidualNorm.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Maximum"></a>

### *property* KrylovResidualNorm.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.MaximumAmplitude"></a>

### *property* KrylovResidualNorm.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.MaximumFrequency"></a>

### *property* KrylovResidualNorm.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.MaximumResidual"></a>

### *property* KrylovResidualNorm.MaximumResidual *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum Residual value across the frequency range.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Minimum"></a>

### *property* KrylovResidualNorm.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.MinimumFrequency"></a>

### *property* KrylovResidualNorm.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Name"></a>

### *property* KrylovResidualNorm.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.NamedSelections"></a>

### *property* KrylovResidualNorm.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.NormalOrientation"></a>

### *property* KrylovResidualNorm.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ObjectId"></a>

### *property* KrylovResidualNorm.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ObjectState"></a>

### *property* KrylovResidualNorm.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ObjectTags"></a>

### *property* KrylovResidualNorm.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Parent"></a>

### *property* KrylovResidualNorm.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.PhaseAngle"></a>

### *property* KrylovResidualNorm.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Properties"></a>

### *property* KrylovResidualNorm.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RPMSelection"></a>

### *property* KrylovResidualNorm.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RealAtMaximumAmplitude"></a>

### *property* KrylovResidualNorm.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RemotePointSelection"></a>

### *property* KrylovResidualNorm.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ReportedFrequency"></a>

### *property* KrylovResidualNorm.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RequestedFrequency"></a>

### *property* KrylovResidualNorm.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ResultChartType"></a>

### *property* KrylovResidualNorm.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RpmSetNumber"></a>

### *property* KrylovResidualNorm.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.SectorNumber"></a>

### *property* KrylovResidualNorm.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ShearOrientation"></a>

### *property* KrylovResidualNorm.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.SpatialResolution"></a>

### *property* KrylovResidualNorm.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Spring"></a>

### *property* KrylovResidualNorm.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.State"></a>

### *property* KrylovResidualNorm.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.StressStrainType"></a>

### *property* KrylovResidualNorm.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Suppressed"></a>

### *property* KrylovResidualNorm.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.TabularData"></a>

### *property* KrylovResidualNorm.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.TimeHistoryDisplay"></a>

### *property* KrylovResidualNorm.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.UseParentFrequencyRange"></a>

### *property* KrylovResidualNorm.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.VelocityType"></a>

### *property* KrylovResidualNorm.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.VisibleProperties"></a>

### *property* KrylovResidualNorm.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.XAxisValues"></a>

### *property* KrylovResidualNorm.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="KrylovResidualNorm.Activate"></a>

### KrylovResidualNorm.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.AddComment"></a>

### KrylovResidualNorm.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.AddImage"></a>

### KrylovResidualNorm.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ClearGeneratedData"></a>

### KrylovResidualNorm.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Copy"></a>

### KrylovResidualNorm.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CopyTo"></a>

### KrylovResidualNorm.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CreateContourResult"></a>

### KrylovResidualNorm.CreateContourResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Create Contour result for the given result chart.
    An exception is thrown if the chart does not support this option.
```

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CreateObjRef"></a>

### KrylovResidualNorm.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CreateParameter"></a>

### KrylovResidualNorm.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Cut"></a>

### KrylovResidualNorm.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Delete"></a>

### KrylovResidualNorm.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Duplicate"></a>

### KrylovResidualNorm.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Equals"></a>

### KrylovResidualNorm.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.EvaluateAllResults"></a>

### KrylovResidualNorm.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ExportAnimation"></a>

### KrylovResidualNorm.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetAPIName"></a>

### KrylovResidualNorm.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetAllProperties"></a>

### KrylovResidualNorm.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetChildren"></a>

### KrylovResidualNorm.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### KrylovResidualNorm.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetDetailsView"></a>

### KrylovResidualNorm.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetEnumName"></a>

### KrylovResidualNorm.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetHashCode"></a>

### KrylovResidualNorm.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetIconFile"></a>

### KrylovResidualNorm.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetLifetimeService"></a>

### KrylovResidualNorm.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetObjectData"></a>

### KrylovResidualNorm.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetParameter"></a>

### KrylovResidualNorm.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetPath"></a>

### KrylovResidualNorm.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetPropertyName"></a>

### KrylovResidualNorm.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetPropertyValue"></a>

### KrylovResidualNorm.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetQuantityName"></a>

### KrylovResidualNorm.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetQuantityNameFromType"></a>

### KrylovResidualNorm.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetVisibleProperties"></a>

### KrylovResidualNorm.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetVisiblePropertyNames"></a>

### KrylovResidualNorm.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GroupAllSimilarChildren"></a>

### KrylovResidualNorm.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GroupSimilarObjects"></a>

### KrylovResidualNorm.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.InitializeLifetimeService"></a>

### KrylovResidualNorm.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.IsPropertyEditable"></a>

### KrylovResidualNorm.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### KrylovResidualNorm.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.IsPropertyVisible"></a>

### KrylovResidualNorm.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### KrylovResidualNorm.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Paste"></a>

### KrylovResidualNorm.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.PropertyByAPIName"></a>

### KrylovResidualNorm.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.PropertyById"></a>

### KrylovResidualNorm.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.PropertyByName"></a>

### KrylovResidualNorm.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RemoveFromGroup"></a>

### KrylovResidualNorm.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RemoveParameter"></a>

### KrylovResidualNorm.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RenameBasedOnDefinition"></a>

### KrylovResidualNorm.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

