# `NonLinearStabilizationEnergyTracker`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.NonLinearStabilizationEnergyTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.NonLinearStabilizationEnergyTracker(internalObject: Any)

<a id="NonLinearStabilizationEnergyTracker"></a>

### *class* NonLinearStabilizationEnergyTracker(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NonLinearStabilizationEnergyTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NonLinearStabilizationEnergyTracker.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#NonLinearStabilizationEnergyTracker.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#NonLinearStabilizationEnergyTracker.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#NonLinearStabilizationEnergyTracker.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#NonLinearStabilizationEnergyTracker.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NonLinearStabilizationEnergyTracker.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NonLinearStabilizationEnergyTracker.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NonLinearStabilizationEnergyTracker.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#NonLinearStabilizationEnergyTracker.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NonLinearStabilizationEnergyTracker.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#NonLinearStabilizationEnergyTracker.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#NonLinearStabilizationEnergyTracker.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#NonLinearStabilizationEnergyTracker.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#NonLinearStabilizationEnergyTracker.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#NonLinearStabilizationEnergyTracker.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#NonLinearStabilizationEnergyTracker.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#NonLinearStabilizationEnergyTracker.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#NonLinearStabilizationEnergyTracker.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NonLinearStabilizationEnergyTracker.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#NonLinearStabilizationEnergyTracker.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#NonLinearStabilizationEnergyTracker.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NonLinearStabilizationEnergyTracker.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#NonLinearStabilizationEnergyTracker.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#NonLinearStabilizationEnergyTracker.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NonLinearStabilizationEnergyTracker.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#NonLinearStabilizationEnergyTracker.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NonLinearStabilizationEnergyTracker.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#NonLinearStabilizationEnergyTracker.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#NonLinearStabilizationEnergyTracker.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#NonLinearStabilizationEnergyTracker.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NonLinearStabilizationEnergyTracker.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#NonLinearStabilizationEnergyTracker.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NonLinearStabilizationEnergyTracker.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NonLinearStabilizationEnergyTracker.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NonLinearStabilizationEnergyTracker.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NonLinearStabilizationEnergyTracker.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#NonLinearStabilizationEnergyTracker.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#NonLinearStabilizationEnergyTracker.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#NonLinearStabilizationEnergyTracker.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#NonLinearStabilizationEnergyTracker.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NonLinearStabilizationEnergyTracker.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NonLinearStabilizationEnergyTracker.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#NonLinearStabilizationEnergyTracker.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#NonLinearStabilizationEnergyTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#NonLinearStabilizationEnergyTracker.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#NonLinearStabilizationEnergyTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#NonLinearStabilizationEnergyTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#NonLinearStabilizationEnergyTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#NonLinearStabilizationEnergyTracker.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#NonLinearStabilizationEnergyTracker.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#NonLinearStabilizationEnergyTracker.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                                  | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#NonLinearStabilizationEnergyTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#NonLinearStabilizationEnergyTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#NonLinearStabilizationEnergyTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#NonLinearStabilizationEnergyTracker.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#NonLinearStabilizationEnergyTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#NonLinearStabilizationEnergyTracker.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#NonLinearStabilizationEnergyTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#NonLinearStabilizationEnergyTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#NonLinearStabilizationEnergyTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#NonLinearStabilizationEnergyTracker.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#NonLinearStabilizationEnergyTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#NonLinearStabilizationEnergyTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#NonLinearStabilizationEnergyTracker.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#NonLinearStabilizationEnergyTracker.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#NonLinearStabilizationEnergyTracker.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#NonLinearStabilizationEnergyTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#NonLinearStabilizationEnergyTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#NonLinearStabilizationEnergyTracker.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#NonLinearStabilizationEnergyTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#NonLinearStabilizationEnergyTracker.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#NonLinearStabilizationEnergyTracker.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#NonLinearStabilizationEnergyTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#NonLinearStabilizationEnergyTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#NonLinearStabilizationEnergyTracker.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#NonLinearStabilizationEnergyTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#NonLinearStabilizationEnergyTracker.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                                     | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#NonLinearStabilizationEnergyTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#NonLinearStabilizationEnergyTracker.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#NonLinearStabilizationEnergyTracker.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#NonLinearStabilizationEnergyTracker.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#NonLinearStabilizationEnergyTracker.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#NonLinearStabilizationEnergyTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#NonLinearStabilizationEnergyTracker.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#NonLinearStabilizationEnergyTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#NonLinearStabilizationEnergyTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#NonLinearStabilizationEnergyTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#NonLinearStabilizationEnergyTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#NonLinearStabilizationEnergyTracker.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#NonLinearStabilizationEnergyTracker.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#NonLinearStabilizationEnergyTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#NonLinearStabilizationEnergyTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#NonLinearStabilizationEnergyTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                                    | Gets or sets the Spring.                                                                           |
| [`State`](#NonLinearStabilizationEnergyTracker.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#NonLinearStabilizationEnergyTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#NonLinearStabilizationEnergyTracker.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#NonLinearStabilizationEnergyTracker.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#NonLinearStabilizationEnergyTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#NonLinearStabilizationEnergyTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#NonLinearStabilizationEnergyTracker.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#NonLinearStabilizationEnergyTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#NonLinearStabilizationEnergyTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="NonLinearStabilizationEnergyTracker.AccelerationType"></a>

### *property* NonLinearStabilizationEnergyTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.AttachedRefs"></a>

### *property* NonLinearStabilizationEnergyTracker.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.BoundaryCondition"></a>

### *property* NonLinearStabilizationEnergyTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ChartDimensions"></a>

### *property* NonLinearStabilizationEnergyTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ChartViewingStyle"></a>

### *property* NonLinearStabilizationEnergyTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Children"></a>

### *property* NonLinearStabilizationEnergyTracker.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ClsId"></a>

### *property* NonLinearStabilizationEnergyTracker.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Comments"></a>

### *property* NonLinearStabilizationEnergyTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CoordinateSystem"></a>

### *property* NonLinearStabilizationEnergyTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CurvesAppearanceDisplay"></a>

### *property* NonLinearStabilizationEnergyTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CutFrequency"></a>

### *property* NonLinearStabilizationEnergyTracker.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.DataModelObjectCategory"></a>

### *property* NonLinearStabilizationEnergyTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.DeformationType"></a>

### *property* NonLinearStabilizationEnergyTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.DpfEvaluation"></a>

### *property* NonLinearStabilizationEnergyTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Duration"></a>

### *property* NonLinearStabilizationEnergyTracker.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.EnhancedTracking"></a>

### *property* NonLinearStabilizationEnergyTracker.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.FilterMaximum"></a>

### *property* NonLinearStabilizationEnergyTracker.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.FilterMinimum"></a>

### *property* NonLinearStabilizationEnergyTracker.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.FilterType"></a>

### *property* NonLinearStabilizationEnergyTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.FrequencyAtMaximumAmplitude"></a>

### *property* NonLinearStabilizationEnergyTracker.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GeometrySelectionString"></a>

### *property* NonLinearStabilizationEnergyTracker.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GroupingFolder"></a>

### *property* NonLinearStabilizationEnergyTracker.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.IconName"></a>

### *property* NonLinearStabilizationEnergyTracker.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Images"></a>

### *property* NonLinearStabilizationEnergyTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* NonLinearStabilizationEnergyTracker.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.InternalObject"></a>

### *property* NonLinearStabilizationEnergyTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.IsSolved"></a>

### *property* NonLinearStabilizationEnergyTracker.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.LoadStepNumber"></a>

### *property* NonLinearStabilizationEnergyTracker.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Location"></a>

### *property* NonLinearStabilizationEnergyTracker.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Maximum"></a>

### *property* NonLinearStabilizationEnergyTracker.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.MaximumAmplitude"></a>

### *property* NonLinearStabilizationEnergyTracker.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.MaximumFrequency"></a>

### *property* NonLinearStabilizationEnergyTracker.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Minimum"></a>

### *property* NonLinearStabilizationEnergyTracker.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.MinimumFrequency"></a>

### *property* NonLinearStabilizationEnergyTracker.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Name"></a>

### *property* NonLinearStabilizationEnergyTracker.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.NamedSelections"></a>

### *property* NonLinearStabilizationEnergyTracker.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.NormalOrientation"></a>

### *property* NonLinearStabilizationEnergyTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ObjectId"></a>

### *property* NonLinearStabilizationEnergyTracker.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ObjectState"></a>

### *property* NonLinearStabilizationEnergyTracker.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ObjectTags"></a>

### *property* NonLinearStabilizationEnergyTracker.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Parent"></a>

### *property* NonLinearStabilizationEnergyTracker.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.PhaseAngle"></a>

### *property* NonLinearStabilizationEnergyTracker.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Properties"></a>

### *property* NonLinearStabilizationEnergyTracker.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RPMSelection"></a>

### *property* NonLinearStabilizationEnergyTracker.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RealAtMaximumAmplitude"></a>

### *property* NonLinearStabilizationEnergyTracker.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ReportedFrequency"></a>

### *property* NonLinearStabilizationEnergyTracker.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RequestedFrequency"></a>

### *property* NonLinearStabilizationEnergyTracker.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ResultChartType"></a>

### *property* NonLinearStabilizationEnergyTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RpmSetNumber"></a>

### *property* NonLinearStabilizationEnergyTracker.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.SectorNumber"></a>

### *property* NonLinearStabilizationEnergyTracker.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ShearOrientation"></a>

### *property* NonLinearStabilizationEnergyTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.SpatialResolution"></a>

### *property* NonLinearStabilizationEnergyTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Spring"></a>

### *property* NonLinearStabilizationEnergyTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.State"></a>

### *property* NonLinearStabilizationEnergyTracker.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.StressStrainType"></a>

### *property* NonLinearStabilizationEnergyTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Suppressed"></a>

### *property* NonLinearStabilizationEnergyTracker.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.TabularData"></a>

### *property* NonLinearStabilizationEnergyTracker.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.TimeHistoryDisplay"></a>

### *property* NonLinearStabilizationEnergyTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.UseParentFrequencyRange"></a>

### *property* NonLinearStabilizationEnergyTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.VelocityType"></a>

### *property* NonLinearStabilizationEnergyTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.VisibleProperties"></a>

### *property* NonLinearStabilizationEnergyTracker.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.XAxisValues"></a>

### *property* NonLinearStabilizationEnergyTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NonLinearStabilizationEnergyTracker.Activate"></a>

### NonLinearStabilizationEnergyTracker.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.AddComment"></a>

### NonLinearStabilizationEnergyTracker.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.AddImage"></a>

### NonLinearStabilizationEnergyTracker.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ClearGeneratedData"></a>

### NonLinearStabilizationEnergyTracker.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Copy"></a>

### NonLinearStabilizationEnergyTracker.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CopyTo"></a>

### NonLinearStabilizationEnergyTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CreateObjRef"></a>

### NonLinearStabilizationEnergyTracker.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CreateParameter"></a>

### NonLinearStabilizationEnergyTracker.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Cut"></a>

### NonLinearStabilizationEnergyTracker.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Delete"></a>

### NonLinearStabilizationEnergyTracker.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Duplicate"></a>

### NonLinearStabilizationEnergyTracker.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Equals"></a>

### NonLinearStabilizationEnergyTracker.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.EvaluateAllResults"></a>

### NonLinearStabilizationEnergyTracker.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ExportAnimation"></a>

### NonLinearStabilizationEnergyTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetAPIName"></a>

### NonLinearStabilizationEnergyTracker.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetAllProperties"></a>

### NonLinearStabilizationEnergyTracker.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetChildren"></a>

### NonLinearStabilizationEnergyTracker.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NonLinearStabilizationEnergyTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetDetailsView"></a>

### NonLinearStabilizationEnergyTracker.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetEnumName"></a>

### NonLinearStabilizationEnergyTracker.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetHashCode"></a>

### NonLinearStabilizationEnergyTracker.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetIconFile"></a>

### NonLinearStabilizationEnergyTracker.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetLifetimeService"></a>

### NonLinearStabilizationEnergyTracker.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetObjectData"></a>

### NonLinearStabilizationEnergyTracker.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetParameter"></a>

### NonLinearStabilizationEnergyTracker.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetPath"></a>

### NonLinearStabilizationEnergyTracker.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetPropertyName"></a>

### NonLinearStabilizationEnergyTracker.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetPropertyValue"></a>

### NonLinearStabilizationEnergyTracker.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetQuantityName"></a>

### NonLinearStabilizationEnergyTracker.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetQuantityNameFromType"></a>

### NonLinearStabilizationEnergyTracker.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetVisibleProperties"></a>

### NonLinearStabilizationEnergyTracker.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetVisiblePropertyNames"></a>

### NonLinearStabilizationEnergyTracker.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GroupAllSimilarChildren"></a>

### NonLinearStabilizationEnergyTracker.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GroupSimilarObjects"></a>

### NonLinearStabilizationEnergyTracker.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.InitializeLifetimeService"></a>

### NonLinearStabilizationEnergyTracker.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.IsPropertyEditable"></a>

### NonLinearStabilizationEnergyTracker.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NonLinearStabilizationEnergyTracker.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.IsPropertyVisible"></a>

### NonLinearStabilizationEnergyTracker.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NonLinearStabilizationEnergyTracker.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Paste"></a>

### NonLinearStabilizationEnergyTracker.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.PropertyByAPIName"></a>

### NonLinearStabilizationEnergyTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.PropertyById"></a>

### NonLinearStabilizationEnergyTracker.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.PropertyByName"></a>

### NonLinearStabilizationEnergyTracker.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RemoveFromGroup"></a>

### NonLinearStabilizationEnergyTracker.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RemoveParameter"></a>

### NonLinearStabilizationEnergyTracker.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RenameBasedOnDefinition"></a>

### NonLinearStabilizationEnergyTracker.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

