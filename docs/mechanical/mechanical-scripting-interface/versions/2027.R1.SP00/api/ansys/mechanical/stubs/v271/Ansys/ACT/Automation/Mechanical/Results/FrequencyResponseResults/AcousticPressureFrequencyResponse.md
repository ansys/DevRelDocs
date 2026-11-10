# `AcousticPressureFrequencyResponse`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPressureFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPressureFrequencyResponse(internalObject: Any)

<a id="AcousticPressureFrequencyResponse"></a>

### *class* AcousticPressureFrequencyResponse(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticPressureFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticPressureFrequencyResponse.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticPressureFrequencyResponse.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#AcousticPressureFrequencyResponse.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#AcousticPressureFrequencyResponse.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AcousticPressureFrequencyResponse.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticPressureFrequencyResponse.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticPressureFrequencyResponse.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticPressureFrequencyResponse.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticPressureFrequencyResponse.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticPressureFrequencyResponse.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticPressureFrequencyResponse.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticPressureFrequencyResponse.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AcousticPressureFrequencyResponse.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AcousticPressureFrequencyResponse.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#AcousticPressureFrequencyResponse.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticPressureFrequencyResponse.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticPressureFrequencyResponse.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticPressureFrequencyResponse.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticPressureFrequencyResponse.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticPressureFrequencyResponse.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticPressureFrequencyResponse.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticPressureFrequencyResponse.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticPressureFrequencyResponse.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticPressureFrequencyResponse.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticPressureFrequencyResponse.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticPressureFrequencyResponse.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticPressureFrequencyResponse.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AcousticPressureFrequencyResponse.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#AcousticPressureFrequencyResponse.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#AcousticPressureFrequencyResponse.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticPressureFrequencyResponse.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticPressureFrequencyResponse.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticPressureFrequencyResponse.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticPressureFrequencyResponse.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticPressureFrequencyResponse.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticPressureFrequencyResponse.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticPressureFrequencyResponse.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AcousticPressureFrequencyResponse.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticPressureFrequencyResponse.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticPressureFrequencyResponse.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticPressureFrequencyResponse.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticPressureFrequencyResponse.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AcousticPressureFrequencyResponse.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#AcousticPressureFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#AcousticPressureFrequencyResponse.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#AcousticPressureFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#AcousticPressureFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#AcousticPressureFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#AcousticPressureFrequencyResponse.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#AcousticPressureFrequencyResponse.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#AcousticPressureFrequencyResponse.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                                | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#AcousticPressureFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#AcousticPressureFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#AcousticPressureFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#AcousticPressureFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#AcousticPressureFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#AcousticPressureFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#AcousticPressureFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#AcousticPressureFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#AcousticPressureFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#AcousticPressureFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#AcousticPressureFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#AcousticPressureFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#AcousticPressureFrequencyResponse.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#AcousticPressureFrequencyResponse.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#AcousticPressureFrequencyResponse.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#AcousticPressureFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#AcousticPressureFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#AcousticPressureFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#AcousticPressureFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#AcousticPressureFrequencyResponse.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#AcousticPressureFrequencyResponse.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#AcousticPressureFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#AcousticPressureFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#AcousticPressureFrequencyResponse.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#AcousticPressureFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#AcousticPressureFrequencyResponse.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                                   | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#AcousticPressureFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#AcousticPressureFrequencyResponse.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#AcousticPressureFrequencyResponse.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#AcousticPressureFrequencyResponse.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#AcousticPressureFrequencyResponse.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#AcousticPressureFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#AcousticPressureFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#AcousticPressureFrequencyResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#AcousticPressureFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#AcousticPressureFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#AcousticPressureFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#AcousticPressureFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#AcousticPressureFrequencyResponse.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#AcousticPressureFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#AcousticPressureFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#AcousticPressureFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                                  | Gets or sets the Spring.                                                                           |
| [`State`](#AcousticPressureFrequencyResponse.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#AcousticPressureFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#AcousticPressureFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#AcousticPressureFrequencyResponse.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#AcousticPressureFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#AcousticPressureFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#AcousticPressureFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#AcousticPressureFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#AcousticPressureFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="AcousticPressureFrequencyResponse.AccelerationType"></a>

### *property* AcousticPressureFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.AttachedRefs"></a>

### *property* AcousticPressureFrequencyResponse.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.BoundaryCondition"></a>

### *property* AcousticPressureFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ChartDimensions"></a>

### *property* AcousticPressureFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ChartViewingStyle"></a>

### *property* AcousticPressureFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Children"></a>

### *property* AcousticPressureFrequencyResponse.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ClsId"></a>

### *property* AcousticPressureFrequencyResponse.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Comments"></a>

### *property* AcousticPressureFrequencyResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CoordinateSystem"></a>

### *property* AcousticPressureFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* AcousticPressureFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CutFrequency"></a>

### *property* AcousticPressureFrequencyResponse.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.DataModelObjectCategory"></a>

### *property* AcousticPressureFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.DeformationType"></a>

### *property* AcousticPressureFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.DpfEvaluation"></a>

### *property* AcousticPressureFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Duration"></a>

### *property* AcousticPressureFrequencyResponse.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.EnhancedTracking"></a>

### *property* AcousticPressureFrequencyResponse.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.FilterMaximum"></a>

### *property* AcousticPressureFrequencyResponse.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.FilterMinimum"></a>

### *property* AcousticPressureFrequencyResponse.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.FilterType"></a>

### *property* AcousticPressureFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AcousticPressureFrequencyResponse.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GeometrySelectionString"></a>

### *property* AcousticPressureFrequencyResponse.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GroupingFolder"></a>

### *property* AcousticPressureFrequencyResponse.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.IconName"></a>

### *property* AcousticPressureFrequencyResponse.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Images"></a>

### *property* AcousticPressureFrequencyResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AcousticPressureFrequencyResponse.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.InternalObject"></a>

### *property* AcousticPressureFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.IsSolved"></a>

### *property* AcousticPressureFrequencyResponse.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.LoadStepNumber"></a>

### *property* AcousticPressureFrequencyResponse.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Location"></a>

### *property* AcousticPressureFrequencyResponse.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Maximum"></a>

### *property* AcousticPressureFrequencyResponse.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.MaximumAmplitude"></a>

### *property* AcousticPressureFrequencyResponse.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.MaximumFrequency"></a>

### *property* AcousticPressureFrequencyResponse.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Minimum"></a>

### *property* AcousticPressureFrequencyResponse.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.MinimumFrequency"></a>

### *property* AcousticPressureFrequencyResponse.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Name"></a>

### *property* AcousticPressureFrequencyResponse.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.NamedSelections"></a>

### *property* AcousticPressureFrequencyResponse.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.NormalOrientation"></a>

### *property* AcousticPressureFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ObjectId"></a>

### *property* AcousticPressureFrequencyResponse.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ObjectState"></a>

### *property* AcousticPressureFrequencyResponse.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ObjectTags"></a>

### *property* AcousticPressureFrequencyResponse.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Parent"></a>

### *property* AcousticPressureFrequencyResponse.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.PhaseAngle"></a>

### *property* AcousticPressureFrequencyResponse.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Properties"></a>

### *property* AcousticPressureFrequencyResponse.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RPMSelection"></a>

### *property* AcousticPressureFrequencyResponse.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* AcousticPressureFrequencyResponse.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ReportedFrequency"></a>

### *property* AcousticPressureFrequencyResponse.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RequestedFrequency"></a>

### *property* AcousticPressureFrequencyResponse.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ResultChartType"></a>

### *property* AcousticPressureFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RpmSetNumber"></a>

### *property* AcousticPressureFrequencyResponse.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.SectorNumber"></a>

### *property* AcousticPressureFrequencyResponse.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ShearOrientation"></a>

### *property* AcousticPressureFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.SpatialResolution"></a>

### *property* AcousticPressureFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Spring"></a>

### *property* AcousticPressureFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.State"></a>

### *property* AcousticPressureFrequencyResponse.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.StressStrainType"></a>

### *property* AcousticPressureFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Suppressed"></a>

### *property* AcousticPressureFrequencyResponse.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.TabularData"></a>

### *property* AcousticPressureFrequencyResponse.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.TimeHistoryDisplay"></a>

### *property* AcousticPressureFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.UseParentFrequencyRange"></a>

### *property* AcousticPressureFrequencyResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.VelocityType"></a>

### *property* AcousticPressureFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.VisibleProperties"></a>

### *property* AcousticPressureFrequencyResponse.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.XAxisValues"></a>

### *property* AcousticPressureFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPressureFrequencyResponse.Activate"></a>

### AcousticPressureFrequencyResponse.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.AddComment"></a>

### AcousticPressureFrequencyResponse.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.AddImage"></a>

### AcousticPressureFrequencyResponse.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ClearGeneratedData"></a>

### AcousticPressureFrequencyResponse.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Copy"></a>

### AcousticPressureFrequencyResponse.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CopyTo"></a>

### AcousticPressureFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CreateObjRef"></a>

### AcousticPressureFrequencyResponse.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.CreateParameter"></a>

### AcousticPressureFrequencyResponse.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Cut"></a>

### AcousticPressureFrequencyResponse.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Delete"></a>

### AcousticPressureFrequencyResponse.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Duplicate"></a>

### AcousticPressureFrequencyResponse.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Equals"></a>

### AcousticPressureFrequencyResponse.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.EvaluateAllResults"></a>

### AcousticPressureFrequencyResponse.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.ExportAnimation"></a>

### AcousticPressureFrequencyResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetAPIName"></a>

### AcousticPressureFrequencyResponse.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetAllProperties"></a>

### AcousticPressureFrequencyResponse.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetChildren"></a>

### AcousticPressureFrequencyResponse.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticPressureFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetDetailsView"></a>

### AcousticPressureFrequencyResponse.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetEnumName"></a>

### AcousticPressureFrequencyResponse.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetHashCode"></a>

### AcousticPressureFrequencyResponse.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetIconFile"></a>

### AcousticPressureFrequencyResponse.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetLifetimeService"></a>

### AcousticPressureFrequencyResponse.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetObjectData"></a>

### AcousticPressureFrequencyResponse.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetParameter"></a>

### AcousticPressureFrequencyResponse.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetPath"></a>

### AcousticPressureFrequencyResponse.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetPropertyName"></a>

### AcousticPressureFrequencyResponse.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetPropertyValue"></a>

### AcousticPressureFrequencyResponse.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetQuantityName"></a>

### AcousticPressureFrequencyResponse.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetQuantityNameFromType"></a>

### AcousticPressureFrequencyResponse.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetVisibleProperties"></a>

### AcousticPressureFrequencyResponse.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GetVisiblePropertyNames"></a>

### AcousticPressureFrequencyResponse.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GroupAllSimilarChildren"></a>

### AcousticPressureFrequencyResponse.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.GroupSimilarObjects"></a>

### AcousticPressureFrequencyResponse.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.InitializeLifetimeService"></a>

### AcousticPressureFrequencyResponse.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.IsPropertyEditable"></a>

### AcousticPressureFrequencyResponse.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPressureFrequencyResponse.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.IsPropertyVisible"></a>

### AcousticPressureFrequencyResponse.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPressureFrequencyResponse.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.Paste"></a>

### AcousticPressureFrequencyResponse.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.PropertyByAPIName"></a>

### AcousticPressureFrequencyResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.PropertyById"></a>

### AcousticPressureFrequencyResponse.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.PropertyByName"></a>

### AcousticPressureFrequencyResponse.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RemoveFromGroup"></a>

### AcousticPressureFrequencyResponse.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RemoveParameter"></a>

### AcousticPressureFrequencyResponse.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureFrequencyResponse.RenameBasedOnDefinition"></a>

### AcousticPressureFrequencyResponse.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

