# `ContactMaximumGeometricSlidingDistanceTracker`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumGeometricSlidingDistanceTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactMaximumGeometricSlidingDistanceTracker(internalObject: Any)

<a id="ContactMaximumGeometricSlidingDistanceTracker"></a>

### *class* ContactMaximumGeometricSlidingDistanceTracker(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactMaximumGeometricSlidingDistanceTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactMaximumGeometricSlidingDistanceTracker.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactMaximumGeometricSlidingDistanceTracker.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#ContactMaximumGeometricSlidingDistanceTracker.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#ContactMaximumGeometricSlidingDistanceTracker.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ContactMaximumGeometricSlidingDistanceTracker.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactMaximumGeometricSlidingDistanceTracker.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactMaximumGeometricSlidingDistanceTracker.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactMaximumGeometricSlidingDistanceTracker.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactMaximumGeometricSlidingDistanceTracker.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactMaximumGeometricSlidingDistanceTracker.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactMaximumGeometricSlidingDistanceTracker.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactMaximumGeometricSlidingDistanceTracker.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ContactMaximumGeometricSlidingDistanceTracker.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ContactMaximumGeometricSlidingDistanceTracker.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#ContactMaximumGeometricSlidingDistanceTracker.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactMaximumGeometricSlidingDistanceTracker.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactMaximumGeometricSlidingDistanceTracker.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactMaximumGeometricSlidingDistanceTracker.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactMaximumGeometricSlidingDistanceTracker.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactMaximumGeometricSlidingDistanceTracker.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactMaximumGeometricSlidingDistanceTracker.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactMaximumGeometricSlidingDistanceTracker.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactMaximumGeometricSlidingDistanceTracker.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactMaximumGeometricSlidingDistanceTracker.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactMaximumGeometricSlidingDistanceTracker.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactMaximumGeometricSlidingDistanceTracker.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactMaximumGeometricSlidingDistanceTracker.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ContactMaximumGeometricSlidingDistanceTracker.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#ContactMaximumGeometricSlidingDistanceTracker.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#ContactMaximumGeometricSlidingDistanceTracker.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactMaximumGeometricSlidingDistanceTracker.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactMaximumGeometricSlidingDistanceTracker.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactMaximumGeometricSlidingDistanceTracker.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactMaximumGeometricSlidingDistanceTracker.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactMaximumGeometricSlidingDistanceTracker.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactMaximumGeometricSlidingDistanceTracker.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactMaximumGeometricSlidingDistanceTracker.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactMaximumGeometricSlidingDistanceTracker.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactMaximumGeometricSlidingDistanceTracker.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactMaximumGeometricSlidingDistanceTracker.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactMaximumGeometricSlidingDistanceTracker.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactMaximumGeometricSlidingDistanceTracker.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ContactMaximumGeometricSlidingDistanceTracker.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#ContactMaximumGeometricSlidingDistanceTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#ContactMaximumGeometricSlidingDistanceTracker.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#ContactMaximumGeometricSlidingDistanceTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#ContactMaximumGeometricSlidingDistanceTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#ContactMaximumGeometricSlidingDistanceTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#ContactMaximumGeometricSlidingDistanceTracker.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#ContactMaximumGeometricSlidingDistanceTracker.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#ContactMaximumGeometricSlidingDistanceTracker.Comments)                                       | Gets the list of associated comments.                                                              |
| [`ContactRegion`](#ContactRegion)                                         | Gets or sets the ContactRegion.                                                                    |
| [`ContactSide`](#ContactMaximumGeometricSlidingDistanceTracker.ContactSide)                                 | Gets or sets the ContactSide.                                                                      |
| [`CoordinateSystem`](#CoordinateSystem)                                            | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#ContactMaximumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#ContactMaximumGeometricSlidingDistanceTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#ContactMaximumGeometricSlidingDistanceTracker.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#ContactMaximumGeometricSlidingDistanceTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#ContactMaximumGeometricSlidingDistanceTracker.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#ContactMaximumGeometricSlidingDistanceTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#ContactMaximumGeometricSlidingDistanceTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#ContactMaximumGeometricSlidingDistanceTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#ContactMaximumGeometricSlidingDistanceTracker.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#ContactMaximumGeometricSlidingDistanceTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#ContactMaximumGeometricSlidingDistanceTracker.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#ContactMaximumGeometricSlidingDistanceTracker.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#ContactMaximumGeometricSlidingDistanceTracker.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#ContactMaximumGeometricSlidingDistanceTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#ContactMaximumGeometricSlidingDistanceTracker.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#ContactMaximumGeometricSlidingDistanceTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#ContactMaximumGeometricSlidingDistanceTracker.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#ContactMaximumGeometricSlidingDistanceTracker.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#ContactMaximumGeometricSlidingDistanceTracker.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#ContactMaximumGeometricSlidingDistanceTracker.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                                               | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#ContactMaximumGeometricSlidingDistanceTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#ContactMaximumGeometricSlidingDistanceTracker.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#ContactMaximumGeometricSlidingDistanceTracker.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#ContactMaximumGeometricSlidingDistanceTracker.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#ContactMaximumGeometricSlidingDistanceTracker.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#ContactMaximumGeometricSlidingDistanceTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#ContactMaximumGeometricSlidingDistanceTracker.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#ContactMaximumGeometricSlidingDistanceTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#ContactMaximumGeometricSlidingDistanceTracker.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#ContactMaximumGeometricSlidingDistanceTracker.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#ContactMaximumGeometricSlidingDistanceTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#ContactMaximumGeometricSlidingDistanceTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#ContactMaximumGeometricSlidingDistanceTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                                              | Gets or sets the Spring.                                                                           |
| [`State`](#ContactMaximumGeometricSlidingDistanceTracker.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#ContactMaximumGeometricSlidingDistanceTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#ContactMaximumGeometricSlidingDistanceTracker.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#ContactMaximumGeometricSlidingDistanceTracker.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#ContactMaximumGeometricSlidingDistanceTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#ContactMaximumGeometricSlidingDistanceTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#ContactMaximumGeometricSlidingDistanceTracker.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#ContactMaximumGeometricSlidingDistanceTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#ContactMaximumGeometricSlidingDistanceTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="ContactMaximumGeometricSlidingDistanceTracker.AccelerationType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.AttachedRefs"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.BoundaryCondition"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ChartDimensions"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ChartViewingStyle"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Children"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ClsId"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Comments"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ContactRegion"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ContactSide"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactScopingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CoordinateSystem"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CutFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.DataModelObjectCategory"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.DeformationType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.DpfEvaluation"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Duration"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.EnhancedTracking"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FilterMaximum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FilterMinimum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FilterType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GeometrySelectionString"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GroupingFolder"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.IconName"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Images"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.InternalObject"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.IsSolved"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.LoadStepNumber"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Location"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Maximum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.MaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.MaximumFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Minimum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.MinimumFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Name"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.NamedSelections"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.NormalOrientation"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ObjectId"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ObjectState"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ObjectTags"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Parent"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.PhaseAngle"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Properties"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RPMSelection"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ReportedFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RequestedFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ResultChartType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RpmSetNumber"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.SectorNumber"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ShearOrientation"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.SpatialResolution"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Spring"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.State"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.StressStrainType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Suppressed"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.TabularData"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.TimeHistoryDisplay"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.UseParentFrequencyRange"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.VelocityType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.VisibleProperties"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.XAxisValues"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMaximumGeometricSlidingDistanceTracker.Activate"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.AddComment"></a>

### ContactMaximumGeometricSlidingDistanceTracker.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.AddImage"></a>

### ContactMaximumGeometricSlidingDistanceTracker.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ClearGeneratedData"></a>

### ContactMaximumGeometricSlidingDistanceTracker.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Copy"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CopyTo"></a>

### ContactMaximumGeometricSlidingDistanceTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CreateObjRef"></a>

### ContactMaximumGeometricSlidingDistanceTracker.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CreateParameter"></a>

### ContactMaximumGeometricSlidingDistanceTracker.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Cut"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Delete"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Duplicate"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Equals"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.EvaluateAllResults"></a>

### ContactMaximumGeometricSlidingDistanceTracker.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ExportAnimation"></a>

### ContactMaximumGeometricSlidingDistanceTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetAPIName"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetAllProperties"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetChildren"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactMaximumGeometricSlidingDistanceTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetDetailsView"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetEnumName"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetHashCode"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetIconFile"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetLifetimeService"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetObjectData"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetParameter"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetPath"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetPropertyName"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetPropertyValue"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetQuantityName"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetQuantityNameFromType"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetVisibleProperties"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetVisiblePropertyNames"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GroupAllSimilarChildren"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GroupSimilarObjects"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.InitializeLifetimeService"></a>

### ContactMaximumGeometricSlidingDistanceTracker.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.IsPropertyEditable"></a>

### ContactMaximumGeometricSlidingDistanceTracker.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactMaximumGeometricSlidingDistanceTracker.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.IsPropertyVisible"></a>

### ContactMaximumGeometricSlidingDistanceTracker.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactMaximumGeometricSlidingDistanceTracker.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Paste"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.PropertyByAPIName"></a>

### ContactMaximumGeometricSlidingDistanceTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.PropertyById"></a>

### ContactMaximumGeometricSlidingDistanceTracker.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.PropertyByName"></a>

### ContactMaximumGeometricSlidingDistanceTracker.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RemoveFromGroup"></a>

### ContactMaximumGeometricSlidingDistanceTracker.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RemoveParameter"></a>

### ContactMaximumGeometricSlidingDistanceTracker.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RenameBasedOnDefinition"></a>

### ContactMaximumGeometricSlidingDistanceTracker.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

