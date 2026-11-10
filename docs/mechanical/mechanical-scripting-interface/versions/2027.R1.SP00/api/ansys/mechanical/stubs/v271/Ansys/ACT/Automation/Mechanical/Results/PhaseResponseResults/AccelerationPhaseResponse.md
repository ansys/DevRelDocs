# `AccelerationPhaseResponse`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.AccelerationPhaseResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.AccelerationPhaseResponse(internalObject: Any)

<a id="AccelerationPhaseResponse"></a>

### *class* AccelerationPhaseResponse(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AccelerationPhaseResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AccelerationPhaseResponse.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AccelerationPhaseResponse.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#AccelerationPhaseResponse.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#AccelerationPhaseResponse.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AccelerationPhaseResponse.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AccelerationPhaseResponse.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AccelerationPhaseResponse.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AccelerationPhaseResponse.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AccelerationPhaseResponse.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AccelerationPhaseResponse.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AccelerationPhaseResponse.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AccelerationPhaseResponse.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AccelerationPhaseResponse.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AccelerationPhaseResponse.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#AccelerationPhaseResponse.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AccelerationPhaseResponse.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AccelerationPhaseResponse.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AccelerationPhaseResponse.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AccelerationPhaseResponse.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AccelerationPhaseResponse.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AccelerationPhaseResponse.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AccelerationPhaseResponse.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AccelerationPhaseResponse.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AccelerationPhaseResponse.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AccelerationPhaseResponse.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AccelerationPhaseResponse.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AccelerationPhaseResponse.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AccelerationPhaseResponse.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#AccelerationPhaseResponse.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#AccelerationPhaseResponse.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AccelerationPhaseResponse.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AccelerationPhaseResponse.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AccelerationPhaseResponse.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AccelerationPhaseResponse.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AccelerationPhaseResponse.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AccelerationPhaseResponse.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AccelerationPhaseResponse.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AccelerationPhaseResponse.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AccelerationPhaseResponse.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AccelerationPhaseResponse.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AccelerationPhaseResponse.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AccelerationPhaseResponse.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AccelerationPhaseResponse.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#AccelerationPhaseResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#AccelerationPhaseResponse.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#AccelerationPhaseResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#AccelerationPhaseResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#AccelerationPhaseResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#AccelerationPhaseResponse.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#AccelerationPhaseResponse.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#AccelerationPhaseResponse.Comments)                                       | Gets the list of associated comments.                                                              |
| [`ContactRegion`](#ContactRegion)                     | Gets or sets the ContactRegion.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                        | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#AccelerationPhaseResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#AccelerationPhaseResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#AccelerationPhaseResponse.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#AccelerationPhaseResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#AccelerationPhaseResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#AccelerationPhaseResponse.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#AccelerationPhaseResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#AccelerationPhaseResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#AccelerationPhaseResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#AccelerationPhaseResponse.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#AccelerationPhaseResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#AccelerationPhaseResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#AccelerationPhaseResponse.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#AccelerationPhaseResponse.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#AccelerationPhaseResponse.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#AccelerationPhaseResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#AccelerationPhaseResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#AccelerationPhaseResponse.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#AccelerationPhaseResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#AccelerationPhaseResponse.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#AccelerationPhaseResponse.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#AccelerationPhaseResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#AccelerationPhaseResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#AccelerationPhaseResponse.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#AccelerationPhaseResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#AccelerationPhaseResponse.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                           | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#AccelerationPhaseResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#AccelerationPhaseResponse.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#AccelerationPhaseResponse.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#AccelerationPhaseResponse.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#AccelerationPhaseResponse.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#AccelerationPhaseResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#AccelerationPhaseResponse.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#AccelerationPhaseResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#AccelerationPhaseResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#AccelerationPhaseResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#AccelerationPhaseResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#AccelerationPhaseResponse.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#AccelerationPhaseResponse.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#AccelerationPhaseResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#AccelerationPhaseResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#AccelerationPhaseResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                          | Gets or sets the Spring.                                                                           |
| [`State`](#AccelerationPhaseResponse.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#AccelerationPhaseResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#AccelerationPhaseResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#AccelerationPhaseResponse.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#AccelerationPhaseResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#AccelerationPhaseResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#AccelerationPhaseResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#AccelerationPhaseResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#AccelerationPhaseResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="AccelerationPhaseResponse.AccelerationType"></a>

### *property* AccelerationPhaseResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.AttachedRefs"></a>

### *property* AccelerationPhaseResponse.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.BoundaryCondition"></a>

### *property* AccelerationPhaseResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ChartDimensions"></a>

### *property* AccelerationPhaseResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ChartViewingStyle"></a>

### *property* AccelerationPhaseResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Children"></a>

### *property* AccelerationPhaseResponse.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ClsId"></a>

### *property* AccelerationPhaseResponse.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Comments"></a>

### *property* AccelerationPhaseResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ContactRegion"></a>

### *property* AccelerationPhaseResponse.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CoordinateSystem"></a>

### *property* AccelerationPhaseResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CurvesAppearanceDisplay"></a>

### *property* AccelerationPhaseResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CutFrequency"></a>

### *property* AccelerationPhaseResponse.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.DataModelObjectCategory"></a>

### *property* AccelerationPhaseResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.DeformationType"></a>

### *property* AccelerationPhaseResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.DpfEvaluation"></a>

### *property* AccelerationPhaseResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Duration"></a>

### *property* AccelerationPhaseResponse.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.EnhancedTracking"></a>

### *property* AccelerationPhaseResponse.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.FilterMaximum"></a>

### *property* AccelerationPhaseResponse.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.FilterMinimum"></a>

### *property* AccelerationPhaseResponse.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.FilterType"></a>

### *property* AccelerationPhaseResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AccelerationPhaseResponse.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GeometrySelectionString"></a>

### *property* AccelerationPhaseResponse.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GroupingFolder"></a>

### *property* AccelerationPhaseResponse.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.IconName"></a>

### *property* AccelerationPhaseResponse.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Images"></a>

### *property* AccelerationPhaseResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AccelerationPhaseResponse.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.InternalObject"></a>

### *property* AccelerationPhaseResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.IsSolved"></a>

### *property* AccelerationPhaseResponse.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.LoadStepNumber"></a>

### *property* AccelerationPhaseResponse.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Location"></a>

### *property* AccelerationPhaseResponse.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Maximum"></a>

### *property* AccelerationPhaseResponse.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.MaximumAmplitude"></a>

### *property* AccelerationPhaseResponse.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.MaximumFrequency"></a>

### *property* AccelerationPhaseResponse.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Minimum"></a>

### *property* AccelerationPhaseResponse.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.MinimumFrequency"></a>

### *property* AccelerationPhaseResponse.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Name"></a>

### *property* AccelerationPhaseResponse.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.NamedSelections"></a>

### *property* AccelerationPhaseResponse.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.NormalOrientation"></a>

### *property* AccelerationPhaseResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ObjectId"></a>

### *property* AccelerationPhaseResponse.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ObjectState"></a>

### *property* AccelerationPhaseResponse.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ObjectTags"></a>

### *property* AccelerationPhaseResponse.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Parent"></a>

### *property* AccelerationPhaseResponse.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.PhaseAngle"></a>

### *property* AccelerationPhaseResponse.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Properties"></a>

### *property* AccelerationPhaseResponse.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RPMSelection"></a>

### *property* AccelerationPhaseResponse.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RealAtMaximumAmplitude"></a>

### *property* AccelerationPhaseResponse.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ReportedFrequency"></a>

### *property* AccelerationPhaseResponse.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RequestedFrequency"></a>

### *property* AccelerationPhaseResponse.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ResultChartType"></a>

### *property* AccelerationPhaseResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RpmSetNumber"></a>

### *property* AccelerationPhaseResponse.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.SectorNumber"></a>

### *property* AccelerationPhaseResponse.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ShearOrientation"></a>

### *property* AccelerationPhaseResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.SpatialResolution"></a>

### *property* AccelerationPhaseResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Spring"></a>

### *property* AccelerationPhaseResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.State"></a>

### *property* AccelerationPhaseResponse.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.StressStrainType"></a>

### *property* AccelerationPhaseResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Suppressed"></a>

### *property* AccelerationPhaseResponse.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.TabularData"></a>

### *property* AccelerationPhaseResponse.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.TimeHistoryDisplay"></a>

### *property* AccelerationPhaseResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.UseParentFrequencyRange"></a>

### *property* AccelerationPhaseResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.VelocityType"></a>

### *property* AccelerationPhaseResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.VisibleProperties"></a>

### *property* AccelerationPhaseResponse.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.XAxisValues"></a>

### *property* AccelerationPhaseResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AccelerationPhaseResponse.Activate"></a>

### AccelerationPhaseResponse.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.AddComment"></a>

### AccelerationPhaseResponse.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.AddImage"></a>

### AccelerationPhaseResponse.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ClearGeneratedData"></a>

### AccelerationPhaseResponse.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Copy"></a>

### AccelerationPhaseResponse.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CopyTo"></a>

### AccelerationPhaseResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CreateObjRef"></a>

### AccelerationPhaseResponse.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.CreateParameter"></a>

### AccelerationPhaseResponse.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Cut"></a>

### AccelerationPhaseResponse.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Delete"></a>

### AccelerationPhaseResponse.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Duplicate"></a>

### AccelerationPhaseResponse.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Equals"></a>

### AccelerationPhaseResponse.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.EvaluateAllResults"></a>

### AccelerationPhaseResponse.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.ExportAnimation"></a>

### AccelerationPhaseResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetAPIName"></a>

### AccelerationPhaseResponse.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetAllProperties"></a>

### AccelerationPhaseResponse.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetChildren"></a>

### AccelerationPhaseResponse.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AccelerationPhaseResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetDetailsView"></a>

### AccelerationPhaseResponse.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetEnumName"></a>

### AccelerationPhaseResponse.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetHashCode"></a>

### AccelerationPhaseResponse.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetIconFile"></a>

### AccelerationPhaseResponse.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetLifetimeService"></a>

### AccelerationPhaseResponse.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetObjectData"></a>

### AccelerationPhaseResponse.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetParameter"></a>

### AccelerationPhaseResponse.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetPath"></a>

### AccelerationPhaseResponse.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetPropertyName"></a>

### AccelerationPhaseResponse.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetPropertyValue"></a>

### AccelerationPhaseResponse.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetQuantityName"></a>

### AccelerationPhaseResponse.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetQuantityNameFromType"></a>

### AccelerationPhaseResponse.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetVisibleProperties"></a>

### AccelerationPhaseResponse.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GetVisiblePropertyNames"></a>

### AccelerationPhaseResponse.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GroupAllSimilarChildren"></a>

### AccelerationPhaseResponse.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.GroupSimilarObjects"></a>

### AccelerationPhaseResponse.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.InitializeLifetimeService"></a>

### AccelerationPhaseResponse.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.IsPropertyEditable"></a>

### AccelerationPhaseResponse.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AccelerationPhaseResponse.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.IsPropertyVisible"></a>

### AccelerationPhaseResponse.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AccelerationPhaseResponse.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.Paste"></a>

### AccelerationPhaseResponse.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.PropertyByAPIName"></a>

### AccelerationPhaseResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.PropertyById"></a>

### AccelerationPhaseResponse.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.PropertyByName"></a>

### AccelerationPhaseResponse.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RemoveFromGroup"></a>

### AccelerationPhaseResponse.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RemoveParameter"></a>

### AccelerationPhaseResponse.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccelerationPhaseResponse.RenameBasedOnDefinition"></a>

### AccelerationPhaseResponse.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

