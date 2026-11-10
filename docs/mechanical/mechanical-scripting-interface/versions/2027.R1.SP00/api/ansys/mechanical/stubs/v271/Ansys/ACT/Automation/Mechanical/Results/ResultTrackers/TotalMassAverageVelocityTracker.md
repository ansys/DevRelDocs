# `TotalMassAverageVelocityTracker`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TotalMassAverageVelocityTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TotalMassAverageVelocityTracker(internalObject: Any)

<a id="TotalMassAverageVelocityTracker"></a>

### *class* TotalMassAverageVelocityTracker(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TotalMassAverageVelocityTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TotalMassAverageVelocityTracker.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#TotalMassAverageVelocityTracker.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#TotalMassAverageVelocityTracker.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#TotalMassAverageVelocityTracker.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#TotalMassAverageVelocityTracker.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TotalMassAverageVelocityTracker.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TotalMassAverageVelocityTracker.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TotalMassAverageVelocityTracker.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#TotalMassAverageVelocityTracker.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#TotalMassAverageVelocityTracker.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#TotalMassAverageVelocityTracker.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#TotalMassAverageVelocityTracker.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#TotalMassAverageVelocityTracker.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#TotalMassAverageVelocityTracker.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#TotalMassAverageVelocityTracker.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#TotalMassAverageVelocityTracker.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TotalMassAverageVelocityTracker.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TotalMassAverageVelocityTracker.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TotalMassAverageVelocityTracker.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TotalMassAverageVelocityTracker.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TotalMassAverageVelocityTracker.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TotalMassAverageVelocityTracker.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#TotalMassAverageVelocityTracker.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TotalMassAverageVelocityTracker.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TotalMassAverageVelocityTracker.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TotalMassAverageVelocityTracker.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TotalMassAverageVelocityTracker.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#TotalMassAverageVelocityTracker.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#TotalMassAverageVelocityTracker.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#TotalMassAverageVelocityTracker.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TotalMassAverageVelocityTracker.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TotalMassAverageVelocityTracker.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TotalMassAverageVelocityTracker.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TotalMassAverageVelocityTracker.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TotalMassAverageVelocityTracker.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TotalMassAverageVelocityTracker.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TotalMassAverageVelocityTracker.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#TotalMassAverageVelocityTracker.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TotalMassAverageVelocityTracker.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TotalMassAverageVelocityTracker.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TotalMassAverageVelocityTracker.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TotalMassAverageVelocityTracker.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#TotalMassAverageVelocityTracker.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#TotalMassAverageVelocityTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#TotalMassAverageVelocityTracker.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#TotalMassAverageVelocityTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#TotalMassAverageVelocityTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#TotalMassAverageVelocityTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#TotalMassAverageVelocityTracker.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#TotalMassAverageVelocityTracker.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#TotalMassAverageVelocityTracker.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                              | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#TotalMassAverageVelocityTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#TotalMassAverageVelocityTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#TotalMassAverageVelocityTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#TotalMassAverageVelocityTracker.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#TotalMassAverageVelocityTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#TotalMassAverageVelocityTracker.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#TotalMassAverageVelocityTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#TotalMassAverageVelocityTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#TotalMassAverageVelocityTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#TotalMassAverageVelocityTracker.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#TotalMassAverageVelocityTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#TotalMassAverageVelocityTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#TotalMassAverageVelocityTracker.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#TotalMassAverageVelocityTracker.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#TotalMassAverageVelocityTracker.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#TotalMassAverageVelocityTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#TotalMassAverageVelocityTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#TotalMassAverageVelocityTracker.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#TotalMassAverageVelocityTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#TotalMassAverageVelocityTracker.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#TotalMassAverageVelocityTracker.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#TotalMassAverageVelocityTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#TotalMassAverageVelocityTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#TotalMassAverageVelocityTracker.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#TotalMassAverageVelocityTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#TotalMassAverageVelocityTracker.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                                 | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#TotalMassAverageVelocityTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#TotalMassAverageVelocityTracker.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#TotalMassAverageVelocityTracker.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#TotalMassAverageVelocityTracker.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#TotalMassAverageVelocityTracker.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#TotalMassAverageVelocityTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#TotalMassAverageVelocityTracker.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#TotalMassAverageVelocityTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#TotalMassAverageVelocityTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#TotalMassAverageVelocityTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#TotalMassAverageVelocityTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#TotalMassAverageVelocityTracker.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#TotalMassAverageVelocityTracker.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#TotalMassAverageVelocityTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#TotalMassAverageVelocityTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#TotalMassAverageVelocityTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                                | Gets or sets the Spring.                                                                           |
| [`State`](#TotalMassAverageVelocityTracker.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#TotalMassAverageVelocityTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#TotalMassAverageVelocityTracker.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#TotalMassAverageVelocityTracker.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#TotalMassAverageVelocityTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#TotalMassAverageVelocityTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#TotalMassAverageVelocityTracker.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#TotalMassAverageVelocityTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#TotalMassAverageVelocityTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="TotalMassAverageVelocityTracker.AccelerationType"></a>

### *property* TotalMassAverageVelocityTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.AttachedRefs"></a>

### *property* TotalMassAverageVelocityTracker.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.BoundaryCondition"></a>

### *property* TotalMassAverageVelocityTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ChartDimensions"></a>

### *property* TotalMassAverageVelocityTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ChartViewingStyle"></a>

### *property* TotalMassAverageVelocityTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Children"></a>

### *property* TotalMassAverageVelocityTracker.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ClsId"></a>

### *property* TotalMassAverageVelocityTracker.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Comments"></a>

### *property* TotalMassAverageVelocityTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CoordinateSystem"></a>

### *property* TotalMassAverageVelocityTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CurvesAppearanceDisplay"></a>

### *property* TotalMassAverageVelocityTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CutFrequency"></a>

### *property* TotalMassAverageVelocityTracker.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.DataModelObjectCategory"></a>

### *property* TotalMassAverageVelocityTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.DeformationType"></a>

### *property* TotalMassAverageVelocityTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.DpfEvaluation"></a>

### *property* TotalMassAverageVelocityTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Duration"></a>

### *property* TotalMassAverageVelocityTracker.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.EnhancedTracking"></a>

### *property* TotalMassAverageVelocityTracker.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.FilterMaximum"></a>

### *property* TotalMassAverageVelocityTracker.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.FilterMinimum"></a>

### *property* TotalMassAverageVelocityTracker.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.FilterType"></a>

### *property* TotalMassAverageVelocityTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.FrequencyAtMaximumAmplitude"></a>

### *property* TotalMassAverageVelocityTracker.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GeometrySelectionString"></a>

### *property* TotalMassAverageVelocityTracker.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GroupingFolder"></a>

### *property* TotalMassAverageVelocityTracker.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.IconName"></a>

### *property* TotalMassAverageVelocityTracker.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Images"></a>

### *property* TotalMassAverageVelocityTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* TotalMassAverageVelocityTracker.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.InternalObject"></a>

### *property* TotalMassAverageVelocityTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.IsSolved"></a>

### *property* TotalMassAverageVelocityTracker.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.LoadStepNumber"></a>

### *property* TotalMassAverageVelocityTracker.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Location"></a>

### *property* TotalMassAverageVelocityTracker.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Maximum"></a>

### *property* TotalMassAverageVelocityTracker.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.MaximumAmplitude"></a>

### *property* TotalMassAverageVelocityTracker.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.MaximumFrequency"></a>

### *property* TotalMassAverageVelocityTracker.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Minimum"></a>

### *property* TotalMassAverageVelocityTracker.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.MinimumFrequency"></a>

### *property* TotalMassAverageVelocityTracker.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Name"></a>

### *property* TotalMassAverageVelocityTracker.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.NamedSelections"></a>

### *property* TotalMassAverageVelocityTracker.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.NormalOrientation"></a>

### *property* TotalMassAverageVelocityTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ObjectId"></a>

### *property* TotalMassAverageVelocityTracker.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ObjectState"></a>

### *property* TotalMassAverageVelocityTracker.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ObjectTags"></a>

### *property* TotalMassAverageVelocityTracker.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Parent"></a>

### *property* TotalMassAverageVelocityTracker.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.PhaseAngle"></a>

### *property* TotalMassAverageVelocityTracker.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Properties"></a>

### *property* TotalMassAverageVelocityTracker.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RPMSelection"></a>

### *property* TotalMassAverageVelocityTracker.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RealAtMaximumAmplitude"></a>

### *property* TotalMassAverageVelocityTracker.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ReportedFrequency"></a>

### *property* TotalMassAverageVelocityTracker.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RequestedFrequency"></a>

### *property* TotalMassAverageVelocityTracker.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ResultChartType"></a>

### *property* TotalMassAverageVelocityTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RpmSetNumber"></a>

### *property* TotalMassAverageVelocityTracker.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.SectorNumber"></a>

### *property* TotalMassAverageVelocityTracker.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ShearOrientation"></a>

### *property* TotalMassAverageVelocityTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.SpatialResolution"></a>

### *property* TotalMassAverageVelocityTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Spring"></a>

### *property* TotalMassAverageVelocityTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.State"></a>

### *property* TotalMassAverageVelocityTracker.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.StressStrainType"></a>

### *property* TotalMassAverageVelocityTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Suppressed"></a>

### *property* TotalMassAverageVelocityTracker.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.TabularData"></a>

### *property* TotalMassAverageVelocityTracker.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.TimeHistoryDisplay"></a>

### *property* TotalMassAverageVelocityTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.UseParentFrequencyRange"></a>

### *property* TotalMassAverageVelocityTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.VelocityType"></a>

### *property* TotalMassAverageVelocityTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.VisibleProperties"></a>

### *property* TotalMassAverageVelocityTracker.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.XAxisValues"></a>

### *property* TotalMassAverageVelocityTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalMassAverageVelocityTracker.Activate"></a>

### TotalMassAverageVelocityTracker.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.AddComment"></a>

### TotalMassAverageVelocityTracker.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.AddImage"></a>

### TotalMassAverageVelocityTracker.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ClearGeneratedData"></a>

### TotalMassAverageVelocityTracker.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Copy"></a>

### TotalMassAverageVelocityTracker.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CopyTo"></a>

### TotalMassAverageVelocityTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CreateObjRef"></a>

### TotalMassAverageVelocityTracker.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CreateParameter"></a>

### TotalMassAverageVelocityTracker.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Cut"></a>

### TotalMassAverageVelocityTracker.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Delete"></a>

### TotalMassAverageVelocityTracker.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Duplicate"></a>

### TotalMassAverageVelocityTracker.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Equals"></a>

### TotalMassAverageVelocityTracker.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.EvaluateAllResults"></a>

### TotalMassAverageVelocityTracker.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ExportAnimation"></a>

### TotalMassAverageVelocityTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetAPIName"></a>

### TotalMassAverageVelocityTracker.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetAllProperties"></a>

### TotalMassAverageVelocityTracker.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetChildren"></a>

### TotalMassAverageVelocityTracker.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TotalMassAverageVelocityTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetDetailsView"></a>

### TotalMassAverageVelocityTracker.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetEnumName"></a>

### TotalMassAverageVelocityTracker.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetHashCode"></a>

### TotalMassAverageVelocityTracker.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetIconFile"></a>

### TotalMassAverageVelocityTracker.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetLifetimeService"></a>

### TotalMassAverageVelocityTracker.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetObjectData"></a>

### TotalMassAverageVelocityTracker.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetParameter"></a>

### TotalMassAverageVelocityTracker.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetPath"></a>

### TotalMassAverageVelocityTracker.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetPropertyName"></a>

### TotalMassAverageVelocityTracker.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetPropertyValue"></a>

### TotalMassAverageVelocityTracker.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetQuantityName"></a>

### TotalMassAverageVelocityTracker.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetQuantityNameFromType"></a>

### TotalMassAverageVelocityTracker.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetVisibleProperties"></a>

### TotalMassAverageVelocityTracker.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetVisiblePropertyNames"></a>

### TotalMassAverageVelocityTracker.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GroupAllSimilarChildren"></a>

### TotalMassAverageVelocityTracker.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GroupSimilarObjects"></a>

### TotalMassAverageVelocityTracker.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.InitializeLifetimeService"></a>

### TotalMassAverageVelocityTracker.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.IsPropertyEditable"></a>

### TotalMassAverageVelocityTracker.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TotalMassAverageVelocityTracker.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.IsPropertyVisible"></a>

### TotalMassAverageVelocityTracker.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TotalMassAverageVelocityTracker.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Paste"></a>

### TotalMassAverageVelocityTracker.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.PropertyByAPIName"></a>

### TotalMassAverageVelocityTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.PropertyById"></a>

### TotalMassAverageVelocityTracker.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.PropertyByName"></a>

### TotalMassAverageVelocityTracker.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RemoveFromGroup"></a>

### TotalMassAverageVelocityTracker.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RemoveParameter"></a>

### TotalMassAverageVelocityTracker.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RenameBasedOnDefinition"></a>

### TotalMassAverageVelocityTracker.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

