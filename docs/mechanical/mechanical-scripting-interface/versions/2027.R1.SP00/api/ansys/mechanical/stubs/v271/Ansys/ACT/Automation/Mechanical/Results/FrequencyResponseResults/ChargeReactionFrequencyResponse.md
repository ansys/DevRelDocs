# `ChargeReactionFrequencyResponse`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ChargeReactionFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ChargeReactionFrequencyResponse(internalObject: Any)

<a id="ChargeReactionFrequencyResponse"></a>

### *class* ChargeReactionFrequencyResponse(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ChargeReactionFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ChargeReactionFrequencyResponse.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ChargeReactionFrequencyResponse.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#ChargeReactionFrequencyResponse.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#ChargeReactionFrequencyResponse.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ChargeReactionFrequencyResponse.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ChargeReactionFrequencyResponse.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateContourResult`](#ChargeReactionFrequencyResponse.CreateContourResult)             | Create Contour result for the given result chart.                                           |
| [`CreateObjRef`](#ChargeReactionFrequencyResponse.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ChargeReactionFrequencyResponse.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ChargeReactionFrequencyResponse.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ChargeReactionFrequencyResponse.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ChargeReactionFrequencyResponse.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ChargeReactionFrequencyResponse.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ChargeReactionFrequencyResponse.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ChargeReactionFrequencyResponse.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#ChargeReactionFrequencyResponse.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ChargeReactionFrequencyResponse.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ChargeReactionFrequencyResponse.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ChargeReactionFrequencyResponse.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ChargeReactionFrequencyResponse.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ChargeReactionFrequencyResponse.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ChargeReactionFrequencyResponse.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ChargeReactionFrequencyResponse.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ChargeReactionFrequencyResponse.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ChargeReactionFrequencyResponse.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ChargeReactionFrequencyResponse.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ChargeReactionFrequencyResponse.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ChargeReactionFrequencyResponse.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ChargeReactionFrequencyResponse.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#ChargeReactionFrequencyResponse.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#ChargeReactionFrequencyResponse.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ChargeReactionFrequencyResponse.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ChargeReactionFrequencyResponse.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ChargeReactionFrequencyResponse.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ChargeReactionFrequencyResponse.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ChargeReactionFrequencyResponse.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ChargeReactionFrequencyResponse.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ChargeReactionFrequencyResponse.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ChargeReactionFrequencyResponse.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ChargeReactionFrequencyResponse.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ChargeReactionFrequencyResponse.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ChargeReactionFrequencyResponse.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ChargeReactionFrequencyResponse.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ChargeReactionFrequencyResponse.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#ChargeReactionFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#ChargeReactionFrequencyResponse.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#ChargeReactionFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#ChargeReactionFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#ChargeReactionFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#ChargeReactionFrequencyResponse.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#ChargeReactionFrequencyResponse.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#ChargeReactionFrequencyResponse.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                              | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.   |
| [`CurvesAppearanceDisplay`](#ChargeReactionFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#ChargeReactionFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#ChargeReactionFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#ChargeReactionFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#ChargeReactionFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#ChargeReactionFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#ChargeReactionFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#ChargeReactionFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#ChargeReactionFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#ChargeReactionFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#ChargeReactionFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#ChargeReactionFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#ChargeReactionFrequencyResponse.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#ChargeReactionFrequencyResponse.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#ChargeReactionFrequencyResponse.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#ChargeReactionFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#ChargeReactionFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#ChargeReactionFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#ChargeReactionFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#ChargeReactionFrequencyResponse.Location)                                       | Gets or sets the Location.                                                                         |
| [`LocationMethod`](#ChargeReactionFrequencyResponse.LocationMethod)                           | Gets or sets the LocationMethod.                                                                   |
| [`Maximum`](#ChargeReactionFrequencyResponse.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#ChargeReactionFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#ChargeReactionFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#ChargeReactionFrequencyResponse.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#ChargeReactionFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#ChargeReactionFrequencyResponse.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                                 | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#ChargeReactionFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#ChargeReactionFrequencyResponse.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#ChargeReactionFrequencyResponse.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#ChargeReactionFrequencyResponse.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#ChargeReactionFrequencyResponse.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#ChargeReactionFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#ChargeReactionFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#ChargeReactionFrequencyResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#ChargeReactionFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`RemotePointSelection`](#ChargeReactionFrequencyResponse.RemotePointSelection)               | Gets or sets the RemotePointSelection.                                                             |
| [`ReportedFrequency`](#ChargeReactionFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#ChargeReactionFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#ChargeReactionFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#ChargeReactionFrequencyResponse.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#ChargeReactionFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#ChargeReactionFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#ChargeReactionFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                                | Gets or sets the Spring.                                                                           |
| [`State`](#ChargeReactionFrequencyResponse.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#ChargeReactionFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#ChargeReactionFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#ChargeReactionFrequencyResponse.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#ChargeReactionFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#ChargeReactionFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#ChargeReactionFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#ChargeReactionFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#ChargeReactionFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="ChargeReactionFrequencyResponse.AccelerationType"></a>

### *property* ChargeReactionFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.AttachedRefs"></a>

### *property* ChargeReactionFrequencyResponse.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.BoundaryCondition"></a>

### *property* ChargeReactionFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ChartDimensions"></a>

### *property* ChargeReactionFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ChartViewingStyle"></a>

### *property* ChargeReactionFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Children"></a>

### *property* ChargeReactionFrequencyResponse.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ClsId"></a>

### *property* ChargeReactionFrequencyResponse.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Comments"></a>

### *property* ChargeReactionFrequencyResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CoordinateSystem"></a>

### *property* ChargeReactionFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* ChargeReactionFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CutFrequency"></a>

### *property* ChargeReactionFrequencyResponse.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.DataModelObjectCategory"></a>

### *property* ChargeReactionFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.DeformationType"></a>

### *property* ChargeReactionFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.DpfEvaluation"></a>

### *property* ChargeReactionFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Duration"></a>

### *property* ChargeReactionFrequencyResponse.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.EnhancedTracking"></a>

### *property* ChargeReactionFrequencyResponse.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FilterMaximum"></a>

### *property* ChargeReactionFrequencyResponse.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FilterMinimum"></a>

### *property* ChargeReactionFrequencyResponse.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FilterType"></a>

### *property* ChargeReactionFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GeometrySelectionString"></a>

### *property* ChargeReactionFrequencyResponse.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GroupingFolder"></a>

### *property* ChargeReactionFrequencyResponse.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.IconName"></a>

### *property* ChargeReactionFrequencyResponse.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Images"></a>

### *property* ChargeReactionFrequencyResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.InternalObject"></a>

### *property* ChargeReactionFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.IsSolved"></a>

### *property* ChargeReactionFrequencyResponse.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.LoadStepNumber"></a>

### *property* ChargeReactionFrequencyResponse.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Location"></a>

### *property* ChargeReactionFrequencyResponse.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.LocationMethod"></a>

### *property* ChargeReactionFrequencyResponse.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Maximum"></a>

### *property* ChargeReactionFrequencyResponse.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.MaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.MaximumFrequency"></a>

### *property* ChargeReactionFrequencyResponse.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Minimum"></a>

### *property* ChargeReactionFrequencyResponse.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.MinimumFrequency"></a>

### *property* ChargeReactionFrequencyResponse.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Name"></a>

### *property* ChargeReactionFrequencyResponse.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.NamedSelections"></a>

### *property* ChargeReactionFrequencyResponse.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.NormalOrientation"></a>

### *property* ChargeReactionFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ObjectId"></a>

### *property* ChargeReactionFrequencyResponse.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ObjectState"></a>

### *property* ChargeReactionFrequencyResponse.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ObjectTags"></a>

### *property* ChargeReactionFrequencyResponse.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Parent"></a>

### *property* ChargeReactionFrequencyResponse.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.PhaseAngle"></a>

### *property* ChargeReactionFrequencyResponse.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Properties"></a>

### *property* ChargeReactionFrequencyResponse.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RPMSelection"></a>

### *property* ChargeReactionFrequencyResponse.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RemotePointSelection"></a>

### *property* ChargeReactionFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ReportedFrequency"></a>

### *property* ChargeReactionFrequencyResponse.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RequestedFrequency"></a>

### *property* ChargeReactionFrequencyResponse.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ResultChartType"></a>

### *property* ChargeReactionFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RpmSetNumber"></a>

### *property* ChargeReactionFrequencyResponse.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.SectorNumber"></a>

### *property* ChargeReactionFrequencyResponse.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ShearOrientation"></a>

### *property* ChargeReactionFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.SpatialResolution"></a>

### *property* ChargeReactionFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Spring"></a>

### *property* ChargeReactionFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.State"></a>

### *property* ChargeReactionFrequencyResponse.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.StressStrainType"></a>

### *property* ChargeReactionFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Suppressed"></a>

### *property* ChargeReactionFrequencyResponse.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.TabularData"></a>

### *property* ChargeReactionFrequencyResponse.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.TimeHistoryDisplay"></a>

### *property* ChargeReactionFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.UseParentFrequencyRange"></a>

### *property* ChargeReactionFrequencyResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.VelocityType"></a>

### *property* ChargeReactionFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.VisibleProperties"></a>

### *property* ChargeReactionFrequencyResponse.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.XAxisValues"></a>

### *property* ChargeReactionFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ChargeReactionFrequencyResponse.Activate"></a>

### ChargeReactionFrequencyResponse.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.AddComment"></a>

### ChargeReactionFrequencyResponse.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.AddImage"></a>

### ChargeReactionFrequencyResponse.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ClearGeneratedData"></a>

### ChargeReactionFrequencyResponse.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Copy"></a>

### ChargeReactionFrequencyResponse.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CopyTo"></a>

### ChargeReactionFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CreateContourResult"></a>

### ChargeReactionFrequencyResponse.CreateContourResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Create Contour result for the given result chart.
    An exception is thrown if the chart does not support this option.
```

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CreateObjRef"></a>

### ChargeReactionFrequencyResponse.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CreateParameter"></a>

### ChargeReactionFrequencyResponse.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Cut"></a>

### ChargeReactionFrequencyResponse.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Delete"></a>

### ChargeReactionFrequencyResponse.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Duplicate"></a>

### ChargeReactionFrequencyResponse.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Equals"></a>

### ChargeReactionFrequencyResponse.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.EvaluateAllResults"></a>

### ChargeReactionFrequencyResponse.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ExportAnimation"></a>

### ChargeReactionFrequencyResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetAPIName"></a>

### ChargeReactionFrequencyResponse.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetAllProperties"></a>

### ChargeReactionFrequencyResponse.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetChildren"></a>

### ChargeReactionFrequencyResponse.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ChargeReactionFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetDetailsView"></a>

### ChargeReactionFrequencyResponse.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetEnumName"></a>

### ChargeReactionFrequencyResponse.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetHashCode"></a>

### ChargeReactionFrequencyResponse.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetIconFile"></a>

### ChargeReactionFrequencyResponse.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetLifetimeService"></a>

### ChargeReactionFrequencyResponse.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetObjectData"></a>

### ChargeReactionFrequencyResponse.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetParameter"></a>

### ChargeReactionFrequencyResponse.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetPath"></a>

### ChargeReactionFrequencyResponse.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetPropertyName"></a>

### ChargeReactionFrequencyResponse.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetPropertyValue"></a>

### ChargeReactionFrequencyResponse.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetQuantityName"></a>

### ChargeReactionFrequencyResponse.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetQuantityNameFromType"></a>

### ChargeReactionFrequencyResponse.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetVisibleProperties"></a>

### ChargeReactionFrequencyResponse.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetVisiblePropertyNames"></a>

### ChargeReactionFrequencyResponse.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GroupAllSimilarChildren"></a>

### ChargeReactionFrequencyResponse.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GroupSimilarObjects"></a>

### ChargeReactionFrequencyResponse.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.InitializeLifetimeService"></a>

### ChargeReactionFrequencyResponse.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.IsPropertyEditable"></a>

### ChargeReactionFrequencyResponse.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ChargeReactionFrequencyResponse.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.IsPropertyVisible"></a>

### ChargeReactionFrequencyResponse.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ChargeReactionFrequencyResponse.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Paste"></a>

### ChargeReactionFrequencyResponse.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.PropertyByAPIName"></a>

### ChargeReactionFrequencyResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.PropertyById"></a>

### ChargeReactionFrequencyResponse.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.PropertyByName"></a>

### ChargeReactionFrequencyResponse.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RemoveFromGroup"></a>

### ChargeReactionFrequencyResponse.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RemoveParameter"></a>

### ChargeReactionFrequencyResponse.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RenameBasedOnDefinition"></a>

### ChargeReactionFrequencyResponse.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

