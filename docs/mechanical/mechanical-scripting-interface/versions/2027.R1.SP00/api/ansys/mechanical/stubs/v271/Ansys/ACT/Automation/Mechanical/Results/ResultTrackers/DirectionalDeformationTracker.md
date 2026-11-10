# `DirectionalDeformationTracker`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DirectionalDeformationTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.DirectionalDeformationTracker(internalObject: Any)

<a id="DirectionalDeformationTracker"></a>

### *class* DirectionalDeformationTracker(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DirectionalDeformationTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#DirectionalDeformationTracker.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#DirectionalDeformationTracker.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#DirectionalDeformationTracker.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#DirectionalDeformationTracker.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#DirectionalDeformationTracker.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#DirectionalDeformationTracker.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#DirectionalDeformationTracker.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#DirectionalDeformationTracker.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#DirectionalDeformationTracker.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#DirectionalDeformationTracker.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#DirectionalDeformationTracker.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#DirectionalDeformationTracker.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#DirectionalDeformationTracker.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#DirectionalDeformationTracker.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#DirectionalDeformationTracker.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#DirectionalDeformationTracker.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#DirectionalDeformationTracker.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#DirectionalDeformationTracker.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#DirectionalDeformationTracker.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#DirectionalDeformationTracker.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#DirectionalDeformationTracker.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#DirectionalDeformationTracker.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#DirectionalDeformationTracker.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#DirectionalDeformationTracker.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#DirectionalDeformationTracker.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#DirectionalDeformationTracker.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#DirectionalDeformationTracker.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#DirectionalDeformationTracker.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#DirectionalDeformationTracker.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#DirectionalDeformationTracker.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#DirectionalDeformationTracker.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#DirectionalDeformationTracker.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#DirectionalDeformationTracker.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#DirectionalDeformationTracker.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#DirectionalDeformationTracker.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#DirectionalDeformationTracker.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#DirectionalDeformationTracker.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#DirectionalDeformationTracker.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#DirectionalDeformationTracker.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#DirectionalDeformationTracker.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#DirectionalDeformationTracker.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#DirectionalDeformationTracker.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#DirectionalDeformationTracker.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#DirectionalDeformationTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#DirectionalDeformationTracker.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#DirectionalDeformationTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#DirectionalDeformationTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#DirectionalDeformationTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#DirectionalDeformationTracker.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#DirectionalDeformationTracker.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#DirectionalDeformationTracker.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                            | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#DirectionalDeformationTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#DirectionalDeformationTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#DirectionalDeformationTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#DirectionalDeformationTracker.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#DirectionalDeformationTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#DirectionalDeformationTracker.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#DirectionalDeformationTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#DirectionalDeformationTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#DirectionalDeformationTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#DirectionalDeformationTracker.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#DirectionalDeformationTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#DirectionalDeformationTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#DirectionalDeformationTracker.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#DirectionalDeformationTracker.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#DirectionalDeformationTracker.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#DirectionalDeformationTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#DirectionalDeformationTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#DirectionalDeformationTracker.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#DirectionalDeformationTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#DirectionalDeformationTracker.Location)                                       | Gets or sets the Location.                                                                         |
| [`LocationCoordinateSystem`](#DirectionalDeformationTracker.LocationCoordinateSystem)       | Gets or sets the LocationCoordinateSystem.                                                         |
| [`LocationMethod`](#DirectionalDeformationTracker.LocationMethod)                           | Gets or sets the LocationMethod.                                                                   |
| [`LocationXCoordinate`](#DirectionalDeformationTracker.LocationXCoordinate)                 | Gets or sets the LocationXCoordinate.                                                              |
| [`LocationYCoordinate`](#DirectionalDeformationTracker.LocationYCoordinate)                 | Gets or sets the LocationYCoordinate.                                                              |
| [`LocationZCoordinate`](#DirectionalDeformationTracker.LocationZCoordinate)                 | Gets or sets the LocationZCoordinate.                                                              |
| [`Maximum`](#DirectionalDeformationTracker.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#DirectionalDeformationTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#DirectionalDeformationTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#DirectionalDeformationTracker.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#DirectionalDeformationTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#DirectionalDeformationTracker.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                               | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#DirectionalDeformationTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#DirectionalDeformationTracker.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#DirectionalDeformationTracker.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#DirectionalDeformationTracker.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#DirectionalDeformationTracker.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#DirectionalDeformationTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#DirectionalDeformationTracker.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#DirectionalDeformationTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#DirectionalDeformationTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#DirectionalDeformationTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#DirectionalDeformationTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#DirectionalDeformationTracker.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#DirectionalDeformationTracker.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#DirectionalDeformationTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#DirectionalDeformationTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#DirectionalDeformationTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                              | Gets or sets the Spring.                                                                           |
| [`State`](#DirectionalDeformationTracker.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#DirectionalDeformationTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#DirectionalDeformationTracker.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#DirectionalDeformationTracker.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#DirectionalDeformationTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#DirectionalDeformationTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#DirectionalDeformationTracker.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#DirectionalDeformationTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#DirectionalDeformationTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalDeformationTracker.AccelerationType"></a>

### *property* DirectionalDeformationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.AttachedRefs"></a>

### *property* DirectionalDeformationTracker.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.BoundaryCondition"></a>

### *property* DirectionalDeformationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ChartDimensions"></a>

### *property* DirectionalDeformationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ChartViewingStyle"></a>

### *property* DirectionalDeformationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Children"></a>

### *property* DirectionalDeformationTracker.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ClsId"></a>

### *property* DirectionalDeformationTracker.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Comments"></a>

### *property* DirectionalDeformationTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CoordinateSystem"></a>

### *property* DirectionalDeformationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CurvesAppearanceDisplay"></a>

### *property* DirectionalDeformationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CutFrequency"></a>

### *property* DirectionalDeformationTracker.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.DataModelObjectCategory"></a>

### *property* DirectionalDeformationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.DeformationType"></a>

### *property* DirectionalDeformationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.DpfEvaluation"></a>

### *property* DirectionalDeformationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Duration"></a>

### *property* DirectionalDeformationTracker.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.EnhancedTracking"></a>

### *property* DirectionalDeformationTracker.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.FilterMaximum"></a>

### *property* DirectionalDeformationTracker.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.FilterMinimum"></a>

### *property* DirectionalDeformationTracker.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.FilterType"></a>

### *property* DirectionalDeformationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.FrequencyAtMaximumAmplitude"></a>

### *property* DirectionalDeformationTracker.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GeometrySelectionString"></a>

### *property* DirectionalDeformationTracker.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GroupingFolder"></a>

### *property* DirectionalDeformationTracker.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.IconName"></a>

### *property* DirectionalDeformationTracker.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Images"></a>

### *property* DirectionalDeformationTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* DirectionalDeformationTracker.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.InternalObject"></a>

### *property* DirectionalDeformationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.IsSolved"></a>

### *property* DirectionalDeformationTracker.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LoadStepNumber"></a>

### *property* DirectionalDeformationTracker.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Location"></a>

### *property* DirectionalDeformationTracker.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LocationCoordinateSystem"></a>

### *property* DirectionalDeformationTracker.LocationCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LocationMethod"></a>

### *property* DirectionalDeformationTracker.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LocationXCoordinate"></a>

### *property* DirectionalDeformationTracker.LocationXCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LocationYCoordinate"></a>

### *property* DirectionalDeformationTracker.LocationYCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.LocationZCoordinate"></a>

### *property* DirectionalDeformationTracker.LocationZCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Maximum"></a>

### *property* DirectionalDeformationTracker.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.MaximumAmplitude"></a>

### *property* DirectionalDeformationTracker.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.MaximumFrequency"></a>

### *property* DirectionalDeformationTracker.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Minimum"></a>

### *property* DirectionalDeformationTracker.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.MinimumFrequency"></a>

### *property* DirectionalDeformationTracker.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Name"></a>

### *property* DirectionalDeformationTracker.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.NamedSelections"></a>

### *property* DirectionalDeformationTracker.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.NormalOrientation"></a>

### *property* DirectionalDeformationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ObjectId"></a>

### *property* DirectionalDeformationTracker.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ObjectState"></a>

### *property* DirectionalDeformationTracker.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ObjectTags"></a>

### *property* DirectionalDeformationTracker.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Parent"></a>

### *property* DirectionalDeformationTracker.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.PhaseAngle"></a>

### *property* DirectionalDeformationTracker.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Properties"></a>

### *property* DirectionalDeformationTracker.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RPMSelection"></a>

### *property* DirectionalDeformationTracker.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RealAtMaximumAmplitude"></a>

### *property* DirectionalDeformationTracker.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ReportedFrequency"></a>

### *property* DirectionalDeformationTracker.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RequestedFrequency"></a>

### *property* DirectionalDeformationTracker.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ResultChartType"></a>

### *property* DirectionalDeformationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RpmSetNumber"></a>

### *property* DirectionalDeformationTracker.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.SectorNumber"></a>

### *property* DirectionalDeformationTracker.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ShearOrientation"></a>

### *property* DirectionalDeformationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.SpatialResolution"></a>

### *property* DirectionalDeformationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Spring"></a>

### *property* DirectionalDeformationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.State"></a>

### *property* DirectionalDeformationTracker.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.StressStrainType"></a>

### *property* DirectionalDeformationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Suppressed"></a>

### *property* DirectionalDeformationTracker.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.TabularData"></a>

### *property* DirectionalDeformationTracker.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.TimeHistoryDisplay"></a>

### *property* DirectionalDeformationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.UseParentFrequencyRange"></a>

### *property* DirectionalDeformationTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.VelocityType"></a>

### *property* DirectionalDeformationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.VisibleProperties"></a>

### *property* DirectionalDeformationTracker.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.XAxisValues"></a>

### *property* DirectionalDeformationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalDeformationTracker.Activate"></a>

### DirectionalDeformationTracker.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.AddComment"></a>

### DirectionalDeformationTracker.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.AddImage"></a>

### DirectionalDeformationTracker.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ClearGeneratedData"></a>

### DirectionalDeformationTracker.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Copy"></a>

### DirectionalDeformationTracker.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CopyTo"></a>

### DirectionalDeformationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CreateObjRef"></a>

### DirectionalDeformationTracker.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.CreateParameter"></a>

### DirectionalDeformationTracker.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Cut"></a>

### DirectionalDeformationTracker.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Delete"></a>

### DirectionalDeformationTracker.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Duplicate"></a>

### DirectionalDeformationTracker.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Equals"></a>

### DirectionalDeformationTracker.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.EvaluateAllResults"></a>

### DirectionalDeformationTracker.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.ExportAnimation"></a>

### DirectionalDeformationTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetAPIName"></a>

### DirectionalDeformationTracker.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetAllProperties"></a>

### DirectionalDeformationTracker.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetChildren"></a>

### DirectionalDeformationTracker.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DirectionalDeformationTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetDetailsView"></a>

### DirectionalDeformationTracker.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetEnumName"></a>

### DirectionalDeformationTracker.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetHashCode"></a>

### DirectionalDeformationTracker.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetIconFile"></a>

### DirectionalDeformationTracker.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetLifetimeService"></a>

### DirectionalDeformationTracker.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetObjectData"></a>

### DirectionalDeformationTracker.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetParameter"></a>

### DirectionalDeformationTracker.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetPath"></a>

### DirectionalDeformationTracker.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetPropertyName"></a>

### DirectionalDeformationTracker.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetPropertyValue"></a>

### DirectionalDeformationTracker.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetQuantityName"></a>

### DirectionalDeformationTracker.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetQuantityNameFromType"></a>

### DirectionalDeformationTracker.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetVisibleProperties"></a>

### DirectionalDeformationTracker.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GetVisiblePropertyNames"></a>

### DirectionalDeformationTracker.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GroupAllSimilarChildren"></a>

### DirectionalDeformationTracker.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.GroupSimilarObjects"></a>

### DirectionalDeformationTracker.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.InitializeLifetimeService"></a>

### DirectionalDeformationTracker.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.IsPropertyEditable"></a>

### DirectionalDeformationTracker.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectionalDeformationTracker.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.IsPropertyVisible"></a>

### DirectionalDeformationTracker.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectionalDeformationTracker.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.Paste"></a>

### DirectionalDeformationTracker.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.PropertyByAPIName"></a>

### DirectionalDeformationTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.PropertyById"></a>

### DirectionalDeformationTracker.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.PropertyByName"></a>

### DirectionalDeformationTracker.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RemoveFromGroup"></a>

### DirectionalDeformationTracker.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RemoveParameter"></a>

### DirectionalDeformationTracker.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformationTracker.RenameBasedOnDefinition"></a>

### DirectionalDeformationTracker.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

