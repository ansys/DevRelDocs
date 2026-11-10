# `AcousticPotentialEnergyFrequencyResponse`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPotentialEnergyFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPotentialEnergyFrequencyResponse(internalObject: Any)

<a id="AcousticPotentialEnergyFrequencyResponse"></a>

### *class* AcousticPotentialEnergyFrequencyResponse(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticPotentialEnergyFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticPotentialEnergyFrequencyResponse.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticPotentialEnergyFrequencyResponse.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#AcousticPotentialEnergyFrequencyResponse.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#AcousticPotentialEnergyFrequencyResponse.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AcousticPotentialEnergyFrequencyResponse.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticPotentialEnergyFrequencyResponse.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticPotentialEnergyFrequencyResponse.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticPotentialEnergyFrequencyResponse.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticPotentialEnergyFrequencyResponse.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticPotentialEnergyFrequencyResponse.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticPotentialEnergyFrequencyResponse.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticPotentialEnergyFrequencyResponse.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AcousticPotentialEnergyFrequencyResponse.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AcousticPotentialEnergyFrequencyResponse.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#AcousticPotentialEnergyFrequencyResponse.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticPotentialEnergyFrequencyResponse.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticPotentialEnergyFrequencyResponse.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticPotentialEnergyFrequencyResponse.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticPotentialEnergyFrequencyResponse.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticPotentialEnergyFrequencyResponse.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticPotentialEnergyFrequencyResponse.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticPotentialEnergyFrequencyResponse.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticPotentialEnergyFrequencyResponse.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticPotentialEnergyFrequencyResponse.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticPotentialEnergyFrequencyResponse.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticPotentialEnergyFrequencyResponse.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticPotentialEnergyFrequencyResponse.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AcousticPotentialEnergyFrequencyResponse.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#AcousticPotentialEnergyFrequencyResponse.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#AcousticPotentialEnergyFrequencyResponse.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticPotentialEnergyFrequencyResponse.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticPotentialEnergyFrequencyResponse.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticPotentialEnergyFrequencyResponse.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticPotentialEnergyFrequencyResponse.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticPotentialEnergyFrequencyResponse.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticPotentialEnergyFrequencyResponse.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticPotentialEnergyFrequencyResponse.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AcousticPotentialEnergyFrequencyResponse.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticPotentialEnergyFrequencyResponse.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticPotentialEnergyFrequencyResponse.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticPotentialEnergyFrequencyResponse.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticPotentialEnergyFrequencyResponse.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AcousticPotentialEnergyFrequencyResponse.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#AcousticPotentialEnergyFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#AcousticPotentialEnergyFrequencyResponse.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#AcousticPotentialEnergyFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#AcousticPotentialEnergyFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#AcousticPotentialEnergyFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#AcousticPotentialEnergyFrequencyResponse.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#AcousticPotentialEnergyFrequencyResponse.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#AcousticPotentialEnergyFrequencyResponse.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                                       | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#AcousticPotentialEnergyFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#AcousticPotentialEnergyFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#AcousticPotentialEnergyFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#AcousticPotentialEnergyFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#AcousticPotentialEnergyFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#AcousticPotentialEnergyFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#AcousticPotentialEnergyFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#AcousticPotentialEnergyFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#AcousticPotentialEnergyFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#AcousticPotentialEnergyFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#AcousticPotentialEnergyFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#AcousticPotentialEnergyFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#AcousticPotentialEnergyFrequencyResponse.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#AcousticPotentialEnergyFrequencyResponse.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#AcousticPotentialEnergyFrequencyResponse.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#AcousticPotentialEnergyFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#AcousticPotentialEnergyFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#AcousticPotentialEnergyFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#AcousticPotentialEnergyFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#AcousticPotentialEnergyFrequencyResponse.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#AcousticPotentialEnergyFrequencyResponse.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#AcousticPotentialEnergyFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#AcousticPotentialEnergyFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#AcousticPotentialEnergyFrequencyResponse.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#AcousticPotentialEnergyFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#AcousticPotentialEnergyFrequencyResponse.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                                          | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#AcousticPotentialEnergyFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#AcousticPotentialEnergyFrequencyResponse.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#AcousticPotentialEnergyFrequencyResponse.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#AcousticPotentialEnergyFrequencyResponse.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#AcousticPotentialEnergyFrequencyResponse.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#AcousticPotentialEnergyFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#AcousticPotentialEnergyFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#AcousticPotentialEnergyFrequencyResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#AcousticPotentialEnergyFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#AcousticPotentialEnergyFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#AcousticPotentialEnergyFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#AcousticPotentialEnergyFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#AcousticPotentialEnergyFrequencyResponse.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#AcousticPotentialEnergyFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#AcousticPotentialEnergyFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#AcousticPotentialEnergyFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                                         | Gets or sets the Spring.                                                                           |
| [`State`](#AcousticPotentialEnergyFrequencyResponse.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#AcousticPotentialEnergyFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#AcousticPotentialEnergyFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#AcousticPotentialEnergyFrequencyResponse.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#AcousticPotentialEnergyFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#AcousticPotentialEnergyFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#AcousticPotentialEnergyFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#AcousticPotentialEnergyFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#AcousticPotentialEnergyFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="AcousticPotentialEnergyFrequencyResponse.AccelerationType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.AttachedRefs"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.BoundaryCondition"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ChartDimensions"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ChartViewingStyle"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Children"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ClsId"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Comments"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CoordinateSystem"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CutFrequency"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.DataModelObjectCategory"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.DeformationType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.DpfEvaluation"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Duration"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.EnhancedTracking"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.FilterMaximum"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.FilterMinimum"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.FilterType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GeometrySelectionString"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GroupingFolder"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.IconName"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Images"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.InternalObject"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.IsSolved"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.LoadStepNumber"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Location"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Maximum"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.MaximumAmplitude"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.MaximumFrequency"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Minimum"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.MinimumFrequency"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Name"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.NamedSelections"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.NormalOrientation"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ObjectId"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ObjectState"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ObjectTags"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Parent"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.PhaseAngle"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Properties"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RPMSelection"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ReportedFrequency"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RequestedFrequency"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ResultChartType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RpmSetNumber"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.SectorNumber"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ShearOrientation"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.SpatialResolution"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Spring"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.State"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.StressStrainType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Suppressed"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.TabularData"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.TimeHistoryDisplay"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.UseParentFrequencyRange"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.VelocityType"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.VisibleProperties"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.XAxisValues"></a>

### *property* AcousticPotentialEnergyFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPotentialEnergyFrequencyResponse.Activate"></a>

### AcousticPotentialEnergyFrequencyResponse.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.AddComment"></a>

### AcousticPotentialEnergyFrequencyResponse.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.AddImage"></a>

### AcousticPotentialEnergyFrequencyResponse.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ClearGeneratedData"></a>

### AcousticPotentialEnergyFrequencyResponse.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Copy"></a>

### AcousticPotentialEnergyFrequencyResponse.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CopyTo"></a>

### AcousticPotentialEnergyFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CreateObjRef"></a>

### AcousticPotentialEnergyFrequencyResponse.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.CreateParameter"></a>

### AcousticPotentialEnergyFrequencyResponse.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Cut"></a>

### AcousticPotentialEnergyFrequencyResponse.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Delete"></a>

### AcousticPotentialEnergyFrequencyResponse.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Duplicate"></a>

### AcousticPotentialEnergyFrequencyResponse.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Equals"></a>

### AcousticPotentialEnergyFrequencyResponse.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.EvaluateAllResults"></a>

### AcousticPotentialEnergyFrequencyResponse.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.ExportAnimation"></a>

### AcousticPotentialEnergyFrequencyResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetAPIName"></a>

### AcousticPotentialEnergyFrequencyResponse.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetAllProperties"></a>

### AcousticPotentialEnergyFrequencyResponse.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetChildren"></a>

### AcousticPotentialEnergyFrequencyResponse.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticPotentialEnergyFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetDetailsView"></a>

### AcousticPotentialEnergyFrequencyResponse.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetEnumName"></a>

### AcousticPotentialEnergyFrequencyResponse.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetHashCode"></a>

### AcousticPotentialEnergyFrequencyResponse.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetIconFile"></a>

### AcousticPotentialEnergyFrequencyResponse.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetLifetimeService"></a>

### AcousticPotentialEnergyFrequencyResponse.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetObjectData"></a>

### AcousticPotentialEnergyFrequencyResponse.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetParameter"></a>

### AcousticPotentialEnergyFrequencyResponse.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetPath"></a>

### AcousticPotentialEnergyFrequencyResponse.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetPropertyName"></a>

### AcousticPotentialEnergyFrequencyResponse.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetPropertyValue"></a>

### AcousticPotentialEnergyFrequencyResponse.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetQuantityName"></a>

### AcousticPotentialEnergyFrequencyResponse.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetQuantityNameFromType"></a>

### AcousticPotentialEnergyFrequencyResponse.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetVisibleProperties"></a>

### AcousticPotentialEnergyFrequencyResponse.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GetVisiblePropertyNames"></a>

### AcousticPotentialEnergyFrequencyResponse.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GroupAllSimilarChildren"></a>

### AcousticPotentialEnergyFrequencyResponse.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.GroupSimilarObjects"></a>

### AcousticPotentialEnergyFrequencyResponse.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.InitializeLifetimeService"></a>

### AcousticPotentialEnergyFrequencyResponse.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.IsPropertyEditable"></a>

### AcousticPotentialEnergyFrequencyResponse.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPotentialEnergyFrequencyResponse.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.IsPropertyVisible"></a>

### AcousticPotentialEnergyFrequencyResponse.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPotentialEnergyFrequencyResponse.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.Paste"></a>

### AcousticPotentialEnergyFrequencyResponse.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.PropertyByAPIName"></a>

### AcousticPotentialEnergyFrequencyResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.PropertyById"></a>

### AcousticPotentialEnergyFrequencyResponse.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.PropertyByName"></a>

### AcousticPotentialEnergyFrequencyResponse.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RemoveFromGroup"></a>

### AcousticPotentialEnergyFrequencyResponse.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RemoveParameter"></a>

### AcousticPotentialEnergyFrequencyResponse.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergyFrequencyResponse.RenameBasedOnDefinition"></a>

### AcousticPotentialEnergyFrequencyResponse.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

