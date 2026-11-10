# `ContactNumberWithLargePenetrationTracker`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactNumberWithLargePenetrationTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactNumberWithLargePenetrationTracker(internalObject: Any)

<a id="ContactNumberWithLargePenetrationTracker"></a>

### *class* ContactNumberWithLargePenetrationTracker(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactNumberWithLargePenetrationTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactNumberWithLargePenetrationTracker.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactNumberWithLargePenetrationTracker.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#ContactNumberWithLargePenetrationTracker.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#ContactNumberWithLargePenetrationTracker.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ContactNumberWithLargePenetrationTracker.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactNumberWithLargePenetrationTracker.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactNumberWithLargePenetrationTracker.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactNumberWithLargePenetrationTracker.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactNumberWithLargePenetrationTracker.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactNumberWithLargePenetrationTracker.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactNumberWithLargePenetrationTracker.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactNumberWithLargePenetrationTracker.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ContactNumberWithLargePenetrationTracker.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ContactNumberWithLargePenetrationTracker.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#ContactNumberWithLargePenetrationTracker.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactNumberWithLargePenetrationTracker.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactNumberWithLargePenetrationTracker.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactNumberWithLargePenetrationTracker.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactNumberWithLargePenetrationTracker.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactNumberWithLargePenetrationTracker.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactNumberWithLargePenetrationTracker.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactNumberWithLargePenetrationTracker.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactNumberWithLargePenetrationTracker.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactNumberWithLargePenetrationTracker.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactNumberWithLargePenetrationTracker.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactNumberWithLargePenetrationTracker.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactNumberWithLargePenetrationTracker.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ContactNumberWithLargePenetrationTracker.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#ContactNumberWithLargePenetrationTracker.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#ContactNumberWithLargePenetrationTracker.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactNumberWithLargePenetrationTracker.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactNumberWithLargePenetrationTracker.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactNumberWithLargePenetrationTracker.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactNumberWithLargePenetrationTracker.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactNumberWithLargePenetrationTracker.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactNumberWithLargePenetrationTracker.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactNumberWithLargePenetrationTracker.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactNumberWithLargePenetrationTracker.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactNumberWithLargePenetrationTracker.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactNumberWithLargePenetrationTracker.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactNumberWithLargePenetrationTracker.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactNumberWithLargePenetrationTracker.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ContactNumberWithLargePenetrationTracker.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#ContactNumberWithLargePenetrationTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#ContactNumberWithLargePenetrationTracker.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#ContactNumberWithLargePenetrationTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#ContactNumberWithLargePenetrationTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#ContactNumberWithLargePenetrationTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#ContactNumberWithLargePenetrationTracker.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#ContactNumberWithLargePenetrationTracker.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#ContactNumberWithLargePenetrationTracker.Comments)                                       | Gets the list of associated comments.                                                              |
| [`ContactRegion`](#ContactRegion)                                    | Gets or sets the ContactRegion.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                       | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#ContactNumberWithLargePenetrationTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#ContactNumberWithLargePenetrationTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#ContactNumberWithLargePenetrationTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#ContactNumberWithLargePenetrationTracker.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#ContactNumberWithLargePenetrationTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#ContactNumberWithLargePenetrationTracker.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#ContactNumberWithLargePenetrationTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#ContactNumberWithLargePenetrationTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#ContactNumberWithLargePenetrationTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#ContactNumberWithLargePenetrationTracker.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactNumberWithLargePenetrationTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#ContactNumberWithLargePenetrationTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#ContactNumberWithLargePenetrationTracker.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#ContactNumberWithLargePenetrationTracker.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#ContactNumberWithLargePenetrationTracker.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#ContactNumberWithLargePenetrationTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#ContactNumberWithLargePenetrationTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#ContactNumberWithLargePenetrationTracker.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#ContactNumberWithLargePenetrationTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#ContactNumberWithLargePenetrationTracker.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#ContactNumberWithLargePenetrationTracker.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#ContactNumberWithLargePenetrationTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#ContactNumberWithLargePenetrationTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#ContactNumberWithLargePenetrationTracker.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#ContactNumberWithLargePenetrationTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#ContactNumberWithLargePenetrationTracker.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                                          | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#ContactNumberWithLargePenetrationTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#ContactNumberWithLargePenetrationTracker.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#ContactNumberWithLargePenetrationTracker.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#ContactNumberWithLargePenetrationTracker.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#ContactNumberWithLargePenetrationTracker.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#ContactNumberWithLargePenetrationTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#ContactNumberWithLargePenetrationTracker.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#ContactNumberWithLargePenetrationTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#ContactNumberWithLargePenetrationTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#ContactNumberWithLargePenetrationTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#ContactNumberWithLargePenetrationTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#ContactNumberWithLargePenetrationTracker.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#ContactNumberWithLargePenetrationTracker.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#ContactNumberWithLargePenetrationTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#ContactNumberWithLargePenetrationTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#ContactNumberWithLargePenetrationTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                                         | Gets or sets the Spring.                                                                           |
| [`State`](#ContactNumberWithLargePenetrationTracker.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#ContactNumberWithLargePenetrationTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#ContactNumberWithLargePenetrationTracker.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#ContactNumberWithLargePenetrationTracker.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#ContactNumberWithLargePenetrationTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#ContactNumberWithLargePenetrationTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#ContactNumberWithLargePenetrationTracker.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#ContactNumberWithLargePenetrationTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#ContactNumberWithLargePenetrationTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="ContactNumberWithLargePenetrationTracker.AccelerationType"></a>

### *property* ContactNumberWithLargePenetrationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.AttachedRefs"></a>

### *property* ContactNumberWithLargePenetrationTracker.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.BoundaryCondition"></a>

### *property* ContactNumberWithLargePenetrationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ChartDimensions"></a>

### *property* ContactNumberWithLargePenetrationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ChartViewingStyle"></a>

### *property* ContactNumberWithLargePenetrationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Children"></a>

### *property* ContactNumberWithLargePenetrationTracker.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ClsId"></a>

### *property* ContactNumberWithLargePenetrationTracker.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Comments"></a>

### *property* ContactNumberWithLargePenetrationTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ContactRegion"></a>

### *property* ContactNumberWithLargePenetrationTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CoordinateSystem"></a>

### *property* ContactNumberWithLargePenetrationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CurvesAppearanceDisplay"></a>

### *property* ContactNumberWithLargePenetrationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CutFrequency"></a>

### *property* ContactNumberWithLargePenetrationTracker.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.DataModelObjectCategory"></a>

### *property* ContactNumberWithLargePenetrationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.DeformationType"></a>

### *property* ContactNumberWithLargePenetrationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.DpfEvaluation"></a>

### *property* ContactNumberWithLargePenetrationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Duration"></a>

### *property* ContactNumberWithLargePenetrationTracker.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.EnhancedTracking"></a>

### *property* ContactNumberWithLargePenetrationTracker.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.FilterMaximum"></a>

### *property* ContactNumberWithLargePenetrationTracker.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.FilterMinimum"></a>

### *property* ContactNumberWithLargePenetrationTracker.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.FilterType"></a>

### *property* ContactNumberWithLargePenetrationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactNumberWithLargePenetrationTracker.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GeometrySelectionString"></a>

### *property* ContactNumberWithLargePenetrationTracker.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GroupingFolder"></a>

### *property* ContactNumberWithLargePenetrationTracker.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.IconName"></a>

### *property* ContactNumberWithLargePenetrationTracker.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Images"></a>

### *property* ContactNumberWithLargePenetrationTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactNumberWithLargePenetrationTracker.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.InternalObject"></a>

### *property* ContactNumberWithLargePenetrationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.IsSolved"></a>

### *property* ContactNumberWithLargePenetrationTracker.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.LoadStepNumber"></a>

### *property* ContactNumberWithLargePenetrationTracker.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Location"></a>

### *property* ContactNumberWithLargePenetrationTracker.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Maximum"></a>

### *property* ContactNumberWithLargePenetrationTracker.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.MaximumAmplitude"></a>

### *property* ContactNumberWithLargePenetrationTracker.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.MaximumFrequency"></a>

### *property* ContactNumberWithLargePenetrationTracker.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Minimum"></a>

### *property* ContactNumberWithLargePenetrationTracker.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.MinimumFrequency"></a>

### *property* ContactNumberWithLargePenetrationTracker.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Name"></a>

### *property* ContactNumberWithLargePenetrationTracker.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.NamedSelections"></a>

### *property* ContactNumberWithLargePenetrationTracker.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.NormalOrientation"></a>

### *property* ContactNumberWithLargePenetrationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ObjectId"></a>

### *property* ContactNumberWithLargePenetrationTracker.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ObjectState"></a>

### *property* ContactNumberWithLargePenetrationTracker.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ObjectTags"></a>

### *property* ContactNumberWithLargePenetrationTracker.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Parent"></a>

### *property* ContactNumberWithLargePenetrationTracker.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.PhaseAngle"></a>

### *property* ContactNumberWithLargePenetrationTracker.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Properties"></a>

### *property* ContactNumberWithLargePenetrationTracker.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RPMSelection"></a>

### *property* ContactNumberWithLargePenetrationTracker.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RealAtMaximumAmplitude"></a>

### *property* ContactNumberWithLargePenetrationTracker.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ReportedFrequency"></a>

### *property* ContactNumberWithLargePenetrationTracker.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RequestedFrequency"></a>

### *property* ContactNumberWithLargePenetrationTracker.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ResultChartType"></a>

### *property* ContactNumberWithLargePenetrationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RpmSetNumber"></a>

### *property* ContactNumberWithLargePenetrationTracker.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.SectorNumber"></a>

### *property* ContactNumberWithLargePenetrationTracker.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ShearOrientation"></a>

### *property* ContactNumberWithLargePenetrationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.SpatialResolution"></a>

### *property* ContactNumberWithLargePenetrationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Spring"></a>

### *property* ContactNumberWithLargePenetrationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.State"></a>

### *property* ContactNumberWithLargePenetrationTracker.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.StressStrainType"></a>

### *property* ContactNumberWithLargePenetrationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Suppressed"></a>

### *property* ContactNumberWithLargePenetrationTracker.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.TabularData"></a>

### *property* ContactNumberWithLargePenetrationTracker.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.TimeHistoryDisplay"></a>

### *property* ContactNumberWithLargePenetrationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.UseParentFrequencyRange"></a>

### *property* ContactNumberWithLargePenetrationTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.VelocityType"></a>

### *property* ContactNumberWithLargePenetrationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.VisibleProperties"></a>

### *property* ContactNumberWithLargePenetrationTracker.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.XAxisValues"></a>

### *property* ContactNumberWithLargePenetrationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactNumberWithLargePenetrationTracker.Activate"></a>

### ContactNumberWithLargePenetrationTracker.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.AddComment"></a>

### ContactNumberWithLargePenetrationTracker.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.AddImage"></a>

### ContactNumberWithLargePenetrationTracker.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ClearGeneratedData"></a>

### ContactNumberWithLargePenetrationTracker.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Copy"></a>

### ContactNumberWithLargePenetrationTracker.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CopyTo"></a>

### ContactNumberWithLargePenetrationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CreateObjRef"></a>

### ContactNumberWithLargePenetrationTracker.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CreateParameter"></a>

### ContactNumberWithLargePenetrationTracker.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Cut"></a>

### ContactNumberWithLargePenetrationTracker.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Delete"></a>

### ContactNumberWithLargePenetrationTracker.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Duplicate"></a>

### ContactNumberWithLargePenetrationTracker.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Equals"></a>

### ContactNumberWithLargePenetrationTracker.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.EvaluateAllResults"></a>

### ContactNumberWithLargePenetrationTracker.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ExportAnimation"></a>

### ContactNumberWithLargePenetrationTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetAPIName"></a>

### ContactNumberWithLargePenetrationTracker.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetAllProperties"></a>

### ContactNumberWithLargePenetrationTracker.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetChildren"></a>

### ContactNumberWithLargePenetrationTracker.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactNumberWithLargePenetrationTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetDetailsView"></a>

### ContactNumberWithLargePenetrationTracker.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetEnumName"></a>

### ContactNumberWithLargePenetrationTracker.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetHashCode"></a>

### ContactNumberWithLargePenetrationTracker.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetIconFile"></a>

### ContactNumberWithLargePenetrationTracker.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetLifetimeService"></a>

### ContactNumberWithLargePenetrationTracker.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetObjectData"></a>

### ContactNumberWithLargePenetrationTracker.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetParameter"></a>

### ContactNumberWithLargePenetrationTracker.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetPath"></a>

### ContactNumberWithLargePenetrationTracker.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetPropertyName"></a>

### ContactNumberWithLargePenetrationTracker.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetPropertyValue"></a>

### ContactNumberWithLargePenetrationTracker.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetQuantityName"></a>

### ContactNumberWithLargePenetrationTracker.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetQuantityNameFromType"></a>

### ContactNumberWithLargePenetrationTracker.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetVisibleProperties"></a>

### ContactNumberWithLargePenetrationTracker.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetVisiblePropertyNames"></a>

### ContactNumberWithLargePenetrationTracker.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GroupAllSimilarChildren"></a>

### ContactNumberWithLargePenetrationTracker.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GroupSimilarObjects"></a>

### ContactNumberWithLargePenetrationTracker.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.InitializeLifetimeService"></a>

### ContactNumberWithLargePenetrationTracker.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.IsPropertyEditable"></a>

### ContactNumberWithLargePenetrationTracker.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactNumberWithLargePenetrationTracker.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.IsPropertyVisible"></a>

### ContactNumberWithLargePenetrationTracker.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactNumberWithLargePenetrationTracker.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Paste"></a>

### ContactNumberWithLargePenetrationTracker.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.PropertyByAPIName"></a>

### ContactNumberWithLargePenetrationTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.PropertyById"></a>

### ContactNumberWithLargePenetrationTracker.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.PropertyByName"></a>

### ContactNumberWithLargePenetrationTracker.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RemoveFromGroup"></a>

### ContactNumberWithLargePenetrationTracker.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RemoveParameter"></a>

### ContactNumberWithLargePenetrationTracker.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RenameBasedOnDefinition"></a>

### ContactNumberWithLargePenetrationTracker.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

