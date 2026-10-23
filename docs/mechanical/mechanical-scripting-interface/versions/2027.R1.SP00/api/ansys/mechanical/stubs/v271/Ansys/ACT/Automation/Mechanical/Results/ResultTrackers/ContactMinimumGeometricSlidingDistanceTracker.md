# `ContactMinimumGeometricSlidingDistanceTracker`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMinimumGeometricSlidingDistanceTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMinimumGeometricSlidingDistanceTracker(internalObject: Any)

<a id="ContactMinimumGeometricSlidingDistanceTracker"></a>

### *class* ContactMinimumGeometricSlidingDistanceTracker(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactMinimumGeometricSlidingDistanceTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactMinimumGeometricSlidingDistanceTracker.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactMinimumGeometricSlidingDistanceTracker.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#ContactMinimumGeometricSlidingDistanceTracker.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#ContactMinimumGeometricSlidingDistanceTracker.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ContactMinimumGeometricSlidingDistanceTracker.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactMinimumGeometricSlidingDistanceTracker.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactMinimumGeometricSlidingDistanceTracker.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactMinimumGeometricSlidingDistanceTracker.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactMinimumGeometricSlidingDistanceTracker.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactMinimumGeometricSlidingDistanceTracker.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactMinimumGeometricSlidingDistanceTracker.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactMinimumGeometricSlidingDistanceTracker.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ContactMinimumGeometricSlidingDistanceTracker.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ContactMinimumGeometricSlidingDistanceTracker.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#ContactMinimumGeometricSlidingDistanceTracker.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactMinimumGeometricSlidingDistanceTracker.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactMinimumGeometricSlidingDistanceTracker.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactMinimumGeometricSlidingDistanceTracker.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactMinimumGeometricSlidingDistanceTracker.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactMinimumGeometricSlidingDistanceTracker.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactMinimumGeometricSlidingDistanceTracker.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactMinimumGeometricSlidingDistanceTracker.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactMinimumGeometricSlidingDistanceTracker.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactMinimumGeometricSlidingDistanceTracker.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactMinimumGeometricSlidingDistanceTracker.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactMinimumGeometricSlidingDistanceTracker.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactMinimumGeometricSlidingDistanceTracker.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ContactMinimumGeometricSlidingDistanceTracker.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#ContactMinimumGeometricSlidingDistanceTracker.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#ContactMinimumGeometricSlidingDistanceTracker.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactMinimumGeometricSlidingDistanceTracker.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactMinimumGeometricSlidingDistanceTracker.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactMinimumGeometricSlidingDistanceTracker.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactMinimumGeometricSlidingDistanceTracker.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactMinimumGeometricSlidingDistanceTracker.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactMinimumGeometricSlidingDistanceTracker.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactMinimumGeometricSlidingDistanceTracker.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactMinimumGeometricSlidingDistanceTracker.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactMinimumGeometricSlidingDistanceTracker.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactMinimumGeometricSlidingDistanceTracker.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactMinimumGeometricSlidingDistanceTracker.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactMinimumGeometricSlidingDistanceTracker.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ContactMinimumGeometricSlidingDistanceTracker.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#ContactMinimumGeometricSlidingDistanceTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#ContactMinimumGeometricSlidingDistanceTracker.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#ContactMinimumGeometricSlidingDistanceTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#ContactMinimumGeometricSlidingDistanceTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#ContactMinimumGeometricSlidingDistanceTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#ContactMinimumGeometricSlidingDistanceTracker.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#ContactMinimumGeometricSlidingDistanceTracker.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#ContactMinimumGeometricSlidingDistanceTracker.Comments)                                       | Gets the list of associated comments.                                                              |
| [`ContactRegion`](#ContactRegion)                                         | Gets or sets the ContactRegion.                                                                    |
| [`ContactSide`](#ContactMinimumGeometricSlidingDistanceTracker.ContactSide)                                 | Gets or sets the ContactSide.                                                                      |
| [`CoordinateSystem`](#CoordinateSystem)                                            | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#ContactMinimumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#ContactMinimumGeometricSlidingDistanceTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#ContactMinimumGeometricSlidingDistanceTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#ContactMinimumGeometricSlidingDistanceTracker.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#ContactMinimumGeometricSlidingDistanceTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#ContactMinimumGeometricSlidingDistanceTracker.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#ContactMinimumGeometricSlidingDistanceTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#ContactMinimumGeometricSlidingDistanceTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#ContactMinimumGeometricSlidingDistanceTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#ContactMinimumGeometricSlidingDistanceTracker.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactMinimumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#ContactMinimumGeometricSlidingDistanceTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#ContactMinimumGeometricSlidingDistanceTracker.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#ContactMinimumGeometricSlidingDistanceTracker.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#ContactMinimumGeometricSlidingDistanceTracker.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#ContactMinimumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#ContactMinimumGeometricSlidingDistanceTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#ContactMinimumGeometricSlidingDistanceTracker.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#ContactMinimumGeometricSlidingDistanceTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#ContactMinimumGeometricSlidingDistanceTracker.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#ContactMinimumGeometricSlidingDistanceTracker.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#ContactMinimumGeometricSlidingDistanceTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#ContactMinimumGeometricSlidingDistanceTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#ContactMinimumGeometricSlidingDistanceTracker.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#ContactMinimumGeometricSlidingDistanceTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#ContactMinimumGeometricSlidingDistanceTracker.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                                               | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#ContactMinimumGeometricSlidingDistanceTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#ContactMinimumGeometricSlidingDistanceTracker.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#ContactMinimumGeometricSlidingDistanceTracker.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#ContactMinimumGeometricSlidingDistanceTracker.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#ContactMinimumGeometricSlidingDistanceTracker.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#ContactMinimumGeometricSlidingDistanceTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#ContactMinimumGeometricSlidingDistanceTracker.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#ContactMinimumGeometricSlidingDistanceTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#ContactMinimumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#ContactMinimumGeometricSlidingDistanceTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#ContactMinimumGeometricSlidingDistanceTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#ContactMinimumGeometricSlidingDistanceTracker.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#ContactMinimumGeometricSlidingDistanceTracker.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#ContactMinimumGeometricSlidingDistanceTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#ContactMinimumGeometricSlidingDistanceTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#ContactMinimumGeometricSlidingDistanceTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                                              | Gets or sets the Spring.                                                                           |
| [`State`](#ContactMinimumGeometricSlidingDistanceTracker.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#ContactMinimumGeometricSlidingDistanceTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#ContactMinimumGeometricSlidingDistanceTracker.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#ContactMinimumGeometricSlidingDistanceTracker.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#ContactMinimumGeometricSlidingDistanceTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#ContactMinimumGeometricSlidingDistanceTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#ContactMinimumGeometricSlidingDistanceTracker.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#ContactMinimumGeometricSlidingDistanceTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#ContactMinimumGeometricSlidingDistanceTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="ContactMinimumGeometricSlidingDistanceTracker.AccelerationType"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.AttachedRefs"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.BoundaryCondition"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ChartDimensions"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ChartViewingStyle"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Children"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ClsId"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Comments"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ContactRegion"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ContactSide"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactScopingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.CoordinateSystem"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.CutFrequency"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.DataModelObjectCategory"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.DeformationType"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.DpfEvaluation"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Duration"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.EnhancedTracking"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.FilterMaximum"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.FilterMinimum"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.FilterType"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GeometrySelectionString"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GroupingFolder"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.IconName"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Images"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.InternalObject"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.IsSolved"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.LoadStepNumber"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Location"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Maximum"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.MaximumAmplitude"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.MaximumFrequency"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Minimum"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.MinimumFrequency"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Name"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.NamedSelections"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.NormalOrientation"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ObjectId"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ObjectState"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ObjectTags"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Parent"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.PhaseAngle"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Properties"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.RPMSelection"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ReportedFrequency"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.RequestedFrequency"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ResultChartType"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.RpmSetNumber"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.SectorNumber"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ShearOrientation"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.SpatialResolution"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Spring"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.State"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.StressStrainType"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Suppressed"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.TabularData"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.TimeHistoryDisplay"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.UseParentFrequencyRange"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.VelocityType"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.VisibleProperties"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.XAxisValues"></a>

### *property* ContactMinimumGeometricSlidingDistanceTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMinimumGeometricSlidingDistanceTracker.Activate"></a>

### ContactMinimumGeometricSlidingDistanceTracker.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.AddComment"></a>

### ContactMinimumGeometricSlidingDistanceTracker.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.AddImage"></a>

### ContactMinimumGeometricSlidingDistanceTracker.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ClearGeneratedData"></a>

### ContactMinimumGeometricSlidingDistanceTracker.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Copy"></a>

### ContactMinimumGeometricSlidingDistanceTracker.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.CopyTo"></a>

### ContactMinimumGeometricSlidingDistanceTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.CreateObjRef"></a>

### ContactMinimumGeometricSlidingDistanceTracker.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.CreateParameter"></a>

### ContactMinimumGeometricSlidingDistanceTracker.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Cut"></a>

### ContactMinimumGeometricSlidingDistanceTracker.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Delete"></a>

### ContactMinimumGeometricSlidingDistanceTracker.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Duplicate"></a>

### ContactMinimumGeometricSlidingDistanceTracker.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Equals"></a>

### ContactMinimumGeometricSlidingDistanceTracker.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.EvaluateAllResults"></a>

### ContactMinimumGeometricSlidingDistanceTracker.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.ExportAnimation"></a>

### ContactMinimumGeometricSlidingDistanceTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetAPIName"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetAllProperties"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetChildren"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactMinimumGeometricSlidingDistanceTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetDetailsView"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetEnumName"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetHashCode"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetIconFile"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetLifetimeService"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetObjectData"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetParameter"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetPath"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetPropertyName"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetPropertyValue"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetQuantityName"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetQuantityNameFromType"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetVisibleProperties"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GetVisiblePropertyNames"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GroupAllSimilarChildren"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.GroupSimilarObjects"></a>

### ContactMinimumGeometricSlidingDistanceTracker.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.InitializeLifetimeService"></a>

### ContactMinimumGeometricSlidingDistanceTracker.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.IsPropertyEditable"></a>

### ContactMinimumGeometricSlidingDistanceTracker.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactMinimumGeometricSlidingDistanceTracker.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.IsPropertyVisible"></a>

### ContactMinimumGeometricSlidingDistanceTracker.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactMinimumGeometricSlidingDistanceTracker.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.Paste"></a>

### ContactMinimumGeometricSlidingDistanceTracker.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.PropertyByAPIName"></a>

### ContactMinimumGeometricSlidingDistanceTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.PropertyById"></a>

### ContactMinimumGeometricSlidingDistanceTracker.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.PropertyByName"></a>

### ContactMinimumGeometricSlidingDistanceTracker.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.RemoveFromGroup"></a>

### ContactMinimumGeometricSlidingDistanceTracker.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.RemoveParameter"></a>

### ContactMinimumGeometricSlidingDistanceTracker.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumGeometricSlidingDistanceTracker.RenameBasedOnDefinition"></a>

### ContactMinimumGeometricSlidingDistanceTracker.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

