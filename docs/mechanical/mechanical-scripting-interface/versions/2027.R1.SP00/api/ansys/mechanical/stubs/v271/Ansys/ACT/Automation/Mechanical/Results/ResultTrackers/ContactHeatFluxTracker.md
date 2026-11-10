# `ContactHeatFluxTracker`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactHeatFluxTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactHeatFluxTracker(internalObject: Any)

<a id="ContactHeatFluxTracker"></a>

### *class* ContactHeatFluxTracker(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactHeatFluxTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactHeatFluxTracker.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactHeatFluxTracker.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#ContactHeatFluxTracker.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#ContactHeatFluxTracker.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ContactHeatFluxTracker.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactHeatFluxTracker.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactHeatFluxTracker.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactHeatFluxTracker.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactHeatFluxTracker.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactHeatFluxTracker.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactHeatFluxTracker.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactHeatFluxTracker.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ContactHeatFluxTracker.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ContactHeatFluxTracker.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#ContactHeatFluxTracker.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactHeatFluxTracker.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactHeatFluxTracker.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactHeatFluxTracker.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactHeatFluxTracker.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactHeatFluxTracker.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactHeatFluxTracker.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactHeatFluxTracker.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactHeatFluxTracker.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactHeatFluxTracker.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactHeatFluxTracker.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactHeatFluxTracker.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactHeatFluxTracker.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ContactHeatFluxTracker.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#ContactHeatFluxTracker.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#ContactHeatFluxTracker.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactHeatFluxTracker.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactHeatFluxTracker.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactHeatFluxTracker.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactHeatFluxTracker.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactHeatFluxTracker.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactHeatFluxTracker.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactHeatFluxTracker.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactHeatFluxTracker.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactHeatFluxTracker.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactHeatFluxTracker.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactHeatFluxTracker.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactHeatFluxTracker.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ContactHeatFluxTracker.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#ContactHeatFluxTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#ContactHeatFluxTracker.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#ContactHeatFluxTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#ContactHeatFluxTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#ContactHeatFluxTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#ContactHeatFluxTracker.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#ContactHeatFluxTracker.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#ContactHeatFluxTracker.Comments)                                       | Gets the list of associated comments.                                                              |
| [`ContactRegion`](#ContactRegion)                  | Gets or sets the ContactRegion.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                     | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#ContactHeatFluxTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#ContactHeatFluxTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#ContactHeatFluxTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#ContactHeatFluxTracker.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#ContactHeatFluxTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#ContactHeatFluxTracker.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#ContactHeatFluxTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#ContactHeatFluxTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#ContactHeatFluxTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#ContactHeatFluxTracker.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactHeatFluxTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#ContactHeatFluxTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#ContactHeatFluxTracker.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#ContactHeatFluxTracker.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#ContactHeatFluxTracker.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#ContactHeatFluxTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#ContactHeatFluxTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#ContactHeatFluxTracker.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#ContactHeatFluxTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#ContactHeatFluxTracker.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#ContactHeatFluxTracker.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#ContactHeatFluxTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#ContactHeatFluxTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#ContactHeatFluxTracker.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#ContactHeatFluxTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#ContactHeatFluxTracker.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                        | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#ContactHeatFluxTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#ContactHeatFluxTracker.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#ContactHeatFluxTracker.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#ContactHeatFluxTracker.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#ContactHeatFluxTracker.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#ContactHeatFluxTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#ContactHeatFluxTracker.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#ContactHeatFluxTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#ContactHeatFluxTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#ContactHeatFluxTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#ContactHeatFluxTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#ContactHeatFluxTracker.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#ContactHeatFluxTracker.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#ContactHeatFluxTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#ContactHeatFluxTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#ContactHeatFluxTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                       | Gets or sets the Spring.                                                                           |
| [`State`](#ContactHeatFluxTracker.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#ContactHeatFluxTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#ContactHeatFluxTracker.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#ContactHeatFluxTracker.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#ContactHeatFluxTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#ContactHeatFluxTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#ContactHeatFluxTracker.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#ContactHeatFluxTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#ContactHeatFluxTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="ContactHeatFluxTracker.AccelerationType"></a>

### *property* ContactHeatFluxTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.AttachedRefs"></a>

### *property* ContactHeatFluxTracker.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.BoundaryCondition"></a>

### *property* ContactHeatFluxTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ChartDimensions"></a>

### *property* ContactHeatFluxTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ChartViewingStyle"></a>

### *property* ContactHeatFluxTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Children"></a>

### *property* ContactHeatFluxTracker.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ClsId"></a>

### *property* ContactHeatFluxTracker.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Comments"></a>

### *property* ContactHeatFluxTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ContactRegion"></a>

### *property* ContactHeatFluxTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.CoordinateSystem"></a>

### *property* ContactHeatFluxTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.CurvesAppearanceDisplay"></a>

### *property* ContactHeatFluxTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.CutFrequency"></a>

### *property* ContactHeatFluxTracker.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.DataModelObjectCategory"></a>

### *property* ContactHeatFluxTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.DeformationType"></a>

### *property* ContactHeatFluxTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.DpfEvaluation"></a>

### *property* ContactHeatFluxTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Duration"></a>

### *property* ContactHeatFluxTracker.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.EnhancedTracking"></a>

### *property* ContactHeatFluxTracker.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.FilterMaximum"></a>

### *property* ContactHeatFluxTracker.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.FilterMinimum"></a>

### *property* ContactHeatFluxTracker.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.FilterType"></a>

### *property* ContactHeatFluxTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactHeatFluxTracker.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GeometrySelectionString"></a>

### *property* ContactHeatFluxTracker.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GroupingFolder"></a>

### *property* ContactHeatFluxTracker.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.IconName"></a>

### *property* ContactHeatFluxTracker.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Images"></a>

### *property* ContactHeatFluxTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactHeatFluxTracker.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.InternalObject"></a>

### *property* ContactHeatFluxTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.IsSolved"></a>

### *property* ContactHeatFluxTracker.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.LoadStepNumber"></a>

### *property* ContactHeatFluxTracker.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Location"></a>

### *property* ContactHeatFluxTracker.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Maximum"></a>

### *property* ContactHeatFluxTracker.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.MaximumAmplitude"></a>

### *property* ContactHeatFluxTracker.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.MaximumFrequency"></a>

### *property* ContactHeatFluxTracker.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Minimum"></a>

### *property* ContactHeatFluxTracker.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.MinimumFrequency"></a>

### *property* ContactHeatFluxTracker.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Name"></a>

### *property* ContactHeatFluxTracker.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.NamedSelections"></a>

### *property* ContactHeatFluxTracker.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.NormalOrientation"></a>

### *property* ContactHeatFluxTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ObjectId"></a>

### *property* ContactHeatFluxTracker.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ObjectState"></a>

### *property* ContactHeatFluxTracker.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ObjectTags"></a>

### *property* ContactHeatFluxTracker.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Parent"></a>

### *property* ContactHeatFluxTracker.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.PhaseAngle"></a>

### *property* ContactHeatFluxTracker.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Properties"></a>

### *property* ContactHeatFluxTracker.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.RPMSelection"></a>

### *property* ContactHeatFluxTracker.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.RealAtMaximumAmplitude"></a>

### *property* ContactHeatFluxTracker.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ReportedFrequency"></a>

### *property* ContactHeatFluxTracker.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.RequestedFrequency"></a>

### *property* ContactHeatFluxTracker.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ResultChartType"></a>

### *property* ContactHeatFluxTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.RpmSetNumber"></a>

### *property* ContactHeatFluxTracker.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.SectorNumber"></a>

### *property* ContactHeatFluxTracker.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ShearOrientation"></a>

### *property* ContactHeatFluxTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.SpatialResolution"></a>

### *property* ContactHeatFluxTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Spring"></a>

### *property* ContactHeatFluxTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.State"></a>

### *property* ContactHeatFluxTracker.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.StressStrainType"></a>

### *property* ContactHeatFluxTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Suppressed"></a>

### *property* ContactHeatFluxTracker.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.TabularData"></a>

### *property* ContactHeatFluxTracker.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.TimeHistoryDisplay"></a>

### *property* ContactHeatFluxTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.UseParentFrequencyRange"></a>

### *property* ContactHeatFluxTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.VelocityType"></a>

### *property* ContactHeatFluxTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.VisibleProperties"></a>

### *property* ContactHeatFluxTracker.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.XAxisValues"></a>

### *property* ContactHeatFluxTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactHeatFluxTracker.Activate"></a>

### ContactHeatFluxTracker.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.AddComment"></a>

### ContactHeatFluxTracker.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.AddImage"></a>

### ContactHeatFluxTracker.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ClearGeneratedData"></a>

### ContactHeatFluxTracker.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Copy"></a>

### ContactHeatFluxTracker.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.CopyTo"></a>

### ContactHeatFluxTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.CreateObjRef"></a>

### ContactHeatFluxTracker.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.CreateParameter"></a>

### ContactHeatFluxTracker.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Cut"></a>

### ContactHeatFluxTracker.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Delete"></a>

### ContactHeatFluxTracker.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Duplicate"></a>

### ContactHeatFluxTracker.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Equals"></a>

### ContactHeatFluxTracker.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.EvaluateAllResults"></a>

### ContactHeatFluxTracker.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.ExportAnimation"></a>

### ContactHeatFluxTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetAPIName"></a>

### ContactHeatFluxTracker.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetAllProperties"></a>

### ContactHeatFluxTracker.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetChildren"></a>

### ContactHeatFluxTracker.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactHeatFluxTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetDetailsView"></a>

### ContactHeatFluxTracker.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetEnumName"></a>

### ContactHeatFluxTracker.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetHashCode"></a>

### ContactHeatFluxTracker.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetIconFile"></a>

### ContactHeatFluxTracker.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetLifetimeService"></a>

### ContactHeatFluxTracker.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetObjectData"></a>

### ContactHeatFluxTracker.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetParameter"></a>

### ContactHeatFluxTracker.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetPath"></a>

### ContactHeatFluxTracker.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetPropertyName"></a>

### ContactHeatFluxTracker.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetPropertyValue"></a>

### ContactHeatFluxTracker.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetQuantityName"></a>

### ContactHeatFluxTracker.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetQuantityNameFromType"></a>

### ContactHeatFluxTracker.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetVisibleProperties"></a>

### ContactHeatFluxTracker.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GetVisiblePropertyNames"></a>

### ContactHeatFluxTracker.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GroupAllSimilarChildren"></a>

### ContactHeatFluxTracker.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.GroupSimilarObjects"></a>

### ContactHeatFluxTracker.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.InitializeLifetimeService"></a>

### ContactHeatFluxTracker.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.IsPropertyEditable"></a>

### ContactHeatFluxTracker.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactHeatFluxTracker.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.IsPropertyVisible"></a>

### ContactHeatFluxTracker.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactHeatFluxTracker.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.Paste"></a>

### ContactHeatFluxTracker.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.PropertyByAPIName"></a>

### ContactHeatFluxTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.PropertyById"></a>

### ContactHeatFluxTracker.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.PropertyByName"></a>

### ContactHeatFluxTracker.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.RemoveFromGroup"></a>

### ContactHeatFluxTracker.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.RemoveParameter"></a>

### ContactHeatFluxTracker.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactHeatFluxTracker.RenameBasedOnDefinition"></a>

### ContactHeatFluxTracker.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

