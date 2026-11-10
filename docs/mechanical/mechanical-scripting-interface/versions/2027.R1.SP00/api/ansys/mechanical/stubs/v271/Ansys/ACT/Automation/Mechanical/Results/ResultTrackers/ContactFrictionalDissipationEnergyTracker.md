# `ContactFrictionalDissipationEnergyTracker`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactFrictionalDissipationEnergyTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactFrictionalDissipationEnergyTracker(internalObject: Any)

<a id="ContactFrictionalDissipationEnergyTracker"></a>

### *class* ContactFrictionalDissipationEnergyTracker(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactFrictionalDissipationEnergyTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactFrictionalDissipationEnergyTracker.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactFrictionalDissipationEnergyTracker.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#ContactFrictionalDissipationEnergyTracker.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#ContactFrictionalDissipationEnergyTracker.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ContactFrictionalDissipationEnergyTracker.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactFrictionalDissipationEnergyTracker.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactFrictionalDissipationEnergyTracker.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactFrictionalDissipationEnergyTracker.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactFrictionalDissipationEnergyTracker.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactFrictionalDissipationEnergyTracker.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactFrictionalDissipationEnergyTracker.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactFrictionalDissipationEnergyTracker.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ContactFrictionalDissipationEnergyTracker.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ContactFrictionalDissipationEnergyTracker.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#ContactFrictionalDissipationEnergyTracker.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactFrictionalDissipationEnergyTracker.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactFrictionalDissipationEnergyTracker.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactFrictionalDissipationEnergyTracker.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactFrictionalDissipationEnergyTracker.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactFrictionalDissipationEnergyTracker.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactFrictionalDissipationEnergyTracker.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactFrictionalDissipationEnergyTracker.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactFrictionalDissipationEnergyTracker.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactFrictionalDissipationEnergyTracker.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactFrictionalDissipationEnergyTracker.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactFrictionalDissipationEnergyTracker.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactFrictionalDissipationEnergyTracker.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ContactFrictionalDissipationEnergyTracker.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#ContactFrictionalDissipationEnergyTracker.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#ContactFrictionalDissipationEnergyTracker.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactFrictionalDissipationEnergyTracker.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactFrictionalDissipationEnergyTracker.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactFrictionalDissipationEnergyTracker.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactFrictionalDissipationEnergyTracker.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactFrictionalDissipationEnergyTracker.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactFrictionalDissipationEnergyTracker.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactFrictionalDissipationEnergyTracker.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactFrictionalDissipationEnergyTracker.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactFrictionalDissipationEnergyTracker.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactFrictionalDissipationEnergyTracker.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactFrictionalDissipationEnergyTracker.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactFrictionalDissipationEnergyTracker.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ContactFrictionalDissipationEnergyTracker.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#ContactFrictionalDissipationEnergyTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#ContactFrictionalDissipationEnergyTracker.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#ContactFrictionalDissipationEnergyTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#ContactFrictionalDissipationEnergyTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#ContactFrictionalDissipationEnergyTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#ContactFrictionalDissipationEnergyTracker.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#ContactFrictionalDissipationEnergyTracker.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#ContactFrictionalDissipationEnergyTracker.Comments)                                       | Gets the list of associated comments.                                                              |
| [`ContactRegion`](#ContactRegion)                                     | Gets or sets the ContactRegion.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                        | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#ContactFrictionalDissipationEnergyTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#ContactFrictionalDissipationEnergyTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#ContactFrictionalDissipationEnergyTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#ContactFrictionalDissipationEnergyTracker.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#ContactFrictionalDissipationEnergyTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#ContactFrictionalDissipationEnergyTracker.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#ContactFrictionalDissipationEnergyTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#ContactFrictionalDissipationEnergyTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#ContactFrictionalDissipationEnergyTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#ContactFrictionalDissipationEnergyTracker.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactFrictionalDissipationEnergyTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#ContactFrictionalDissipationEnergyTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#ContactFrictionalDissipationEnergyTracker.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#ContactFrictionalDissipationEnergyTracker.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#ContactFrictionalDissipationEnergyTracker.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#ContactFrictionalDissipationEnergyTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#ContactFrictionalDissipationEnergyTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#ContactFrictionalDissipationEnergyTracker.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#ContactFrictionalDissipationEnergyTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#ContactFrictionalDissipationEnergyTracker.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#ContactFrictionalDissipationEnergyTracker.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#ContactFrictionalDissipationEnergyTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#ContactFrictionalDissipationEnergyTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#ContactFrictionalDissipationEnergyTracker.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#ContactFrictionalDissipationEnergyTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#ContactFrictionalDissipationEnergyTracker.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                                           | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#ContactFrictionalDissipationEnergyTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#ContactFrictionalDissipationEnergyTracker.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#ContactFrictionalDissipationEnergyTracker.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#ContactFrictionalDissipationEnergyTracker.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#ContactFrictionalDissipationEnergyTracker.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#ContactFrictionalDissipationEnergyTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#ContactFrictionalDissipationEnergyTracker.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#ContactFrictionalDissipationEnergyTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#ContactFrictionalDissipationEnergyTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#ContactFrictionalDissipationEnergyTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#ContactFrictionalDissipationEnergyTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#ContactFrictionalDissipationEnergyTracker.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#ContactFrictionalDissipationEnergyTracker.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#ContactFrictionalDissipationEnergyTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#ContactFrictionalDissipationEnergyTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#ContactFrictionalDissipationEnergyTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                                          | Gets or sets the Spring.                                                                           |
| [`State`](#ContactFrictionalDissipationEnergyTracker.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#ContactFrictionalDissipationEnergyTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#ContactFrictionalDissipationEnergyTracker.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#ContactFrictionalDissipationEnergyTracker.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#ContactFrictionalDissipationEnergyTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#ContactFrictionalDissipationEnergyTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#ContactFrictionalDissipationEnergyTracker.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#ContactFrictionalDissipationEnergyTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#ContactFrictionalDissipationEnergyTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="ContactFrictionalDissipationEnergyTracker.AccelerationType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.AttachedRefs"></a>

### *property* ContactFrictionalDissipationEnergyTracker.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.BoundaryCondition"></a>

### *property* ContactFrictionalDissipationEnergyTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ChartDimensions"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ChartViewingStyle"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Children"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ClsId"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Comments"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ContactRegion"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CoordinateSystem"></a>

### *property* ContactFrictionalDissipationEnergyTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CurvesAppearanceDisplay"></a>

### *property* ContactFrictionalDissipationEnergyTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CutFrequency"></a>

### *property* ContactFrictionalDissipationEnergyTracker.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.DataModelObjectCategory"></a>

### *property* ContactFrictionalDissipationEnergyTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.DeformationType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.DpfEvaluation"></a>

### *property* ContactFrictionalDissipationEnergyTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Duration"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.EnhancedTracking"></a>

### *property* ContactFrictionalDissipationEnergyTracker.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.FilterMaximum"></a>

### *property* ContactFrictionalDissipationEnergyTracker.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.FilterMinimum"></a>

### *property* ContactFrictionalDissipationEnergyTracker.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.FilterType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactFrictionalDissipationEnergyTracker.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GeometrySelectionString"></a>

### *property* ContactFrictionalDissipationEnergyTracker.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GroupingFolder"></a>

### *property* ContactFrictionalDissipationEnergyTracker.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.IconName"></a>

### *property* ContactFrictionalDissipationEnergyTracker.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Images"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.InternalObject"></a>

### *property* ContactFrictionalDissipationEnergyTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.IsSolved"></a>

### *property* ContactFrictionalDissipationEnergyTracker.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.LoadStepNumber"></a>

### *property* ContactFrictionalDissipationEnergyTracker.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Location"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Maximum"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.MaximumAmplitude"></a>

### *property* ContactFrictionalDissipationEnergyTracker.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.MaximumFrequency"></a>

### *property* ContactFrictionalDissipationEnergyTracker.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Minimum"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.MinimumFrequency"></a>

### *property* ContactFrictionalDissipationEnergyTracker.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Name"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.NamedSelections"></a>

### *property* ContactFrictionalDissipationEnergyTracker.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.NormalOrientation"></a>

### *property* ContactFrictionalDissipationEnergyTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ObjectId"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ObjectState"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ObjectTags"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Parent"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.PhaseAngle"></a>

### *property* ContactFrictionalDissipationEnergyTracker.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Properties"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RPMSelection"></a>

### *property* ContactFrictionalDissipationEnergyTracker.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RealAtMaximumAmplitude"></a>

### *property* ContactFrictionalDissipationEnergyTracker.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ReportedFrequency"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RequestedFrequency"></a>

### *property* ContactFrictionalDissipationEnergyTracker.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ResultChartType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RpmSetNumber"></a>

### *property* ContactFrictionalDissipationEnergyTracker.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.SectorNumber"></a>

### *property* ContactFrictionalDissipationEnergyTracker.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ShearOrientation"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.SpatialResolution"></a>

### *property* ContactFrictionalDissipationEnergyTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Spring"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.State"></a>

### *property* ContactFrictionalDissipationEnergyTracker.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.StressStrainType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Suppressed"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.TabularData"></a>

### *property* ContactFrictionalDissipationEnergyTracker.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.TimeHistoryDisplay"></a>

### *property* ContactFrictionalDissipationEnergyTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.UseParentFrequencyRange"></a>

### *property* ContactFrictionalDissipationEnergyTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.VelocityType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.VisibleProperties"></a>

### *property* ContactFrictionalDissipationEnergyTracker.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.XAxisValues"></a>

### *property* ContactFrictionalDissipationEnergyTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactFrictionalDissipationEnergyTracker.Activate"></a>

### ContactFrictionalDissipationEnergyTracker.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.AddComment"></a>

### ContactFrictionalDissipationEnergyTracker.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.AddImage"></a>

### ContactFrictionalDissipationEnergyTracker.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ClearGeneratedData"></a>

### ContactFrictionalDissipationEnergyTracker.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Copy"></a>

### ContactFrictionalDissipationEnergyTracker.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CopyTo"></a>

### ContactFrictionalDissipationEnergyTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CreateObjRef"></a>

### ContactFrictionalDissipationEnergyTracker.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CreateParameter"></a>

### ContactFrictionalDissipationEnergyTracker.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Cut"></a>

### ContactFrictionalDissipationEnergyTracker.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Delete"></a>

### ContactFrictionalDissipationEnergyTracker.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Duplicate"></a>

### ContactFrictionalDissipationEnergyTracker.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Equals"></a>

### ContactFrictionalDissipationEnergyTracker.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.EvaluateAllResults"></a>

### ContactFrictionalDissipationEnergyTracker.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ExportAnimation"></a>

### ContactFrictionalDissipationEnergyTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetAPIName"></a>

### ContactFrictionalDissipationEnergyTracker.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetAllProperties"></a>

### ContactFrictionalDissipationEnergyTracker.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetChildren"></a>

### ContactFrictionalDissipationEnergyTracker.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactFrictionalDissipationEnergyTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetDetailsView"></a>

### ContactFrictionalDissipationEnergyTracker.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetEnumName"></a>

### ContactFrictionalDissipationEnergyTracker.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetHashCode"></a>

### ContactFrictionalDissipationEnergyTracker.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetIconFile"></a>

### ContactFrictionalDissipationEnergyTracker.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetLifetimeService"></a>

### ContactFrictionalDissipationEnergyTracker.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetObjectData"></a>

### ContactFrictionalDissipationEnergyTracker.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetParameter"></a>

### ContactFrictionalDissipationEnergyTracker.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetPath"></a>

### ContactFrictionalDissipationEnergyTracker.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetPropertyName"></a>

### ContactFrictionalDissipationEnergyTracker.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetPropertyValue"></a>

### ContactFrictionalDissipationEnergyTracker.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetQuantityName"></a>

### ContactFrictionalDissipationEnergyTracker.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetQuantityNameFromType"></a>

### ContactFrictionalDissipationEnergyTracker.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetVisibleProperties"></a>

### ContactFrictionalDissipationEnergyTracker.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetVisiblePropertyNames"></a>

### ContactFrictionalDissipationEnergyTracker.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GroupAllSimilarChildren"></a>

### ContactFrictionalDissipationEnergyTracker.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GroupSimilarObjects"></a>

### ContactFrictionalDissipationEnergyTracker.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.InitializeLifetimeService"></a>

### ContactFrictionalDissipationEnergyTracker.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.IsPropertyEditable"></a>

### ContactFrictionalDissipationEnergyTracker.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactFrictionalDissipationEnergyTracker.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.IsPropertyVisible"></a>

### ContactFrictionalDissipationEnergyTracker.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactFrictionalDissipationEnergyTracker.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Paste"></a>

### ContactFrictionalDissipationEnergyTracker.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.PropertyByAPIName"></a>

### ContactFrictionalDissipationEnergyTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.PropertyById"></a>

### ContactFrictionalDissipationEnergyTracker.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.PropertyByName"></a>

### ContactFrictionalDissipationEnergyTracker.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RemoveFromGroup"></a>

### ContactFrictionalDissipationEnergyTracker.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RemoveParameter"></a>

### ContactFrictionalDissipationEnergyTracker.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RenameBasedOnDefinition"></a>

### ContactFrictionalDissipationEnergyTracker.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

