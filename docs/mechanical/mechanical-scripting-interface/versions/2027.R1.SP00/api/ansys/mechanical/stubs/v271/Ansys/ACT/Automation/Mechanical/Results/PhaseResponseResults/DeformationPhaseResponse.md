# `DeformationPhaseResponse`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.DeformationPhaseResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.DeformationPhaseResponse(internalObject: Any)

<a id="DeformationPhaseResponse"></a>

### *class* DeformationPhaseResponse(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DeformationPhaseResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#DeformationPhaseResponse.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#DeformationPhaseResponse.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#DeformationPhaseResponse.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#DeformationPhaseResponse.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#DeformationPhaseResponse.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#DeformationPhaseResponse.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#DeformationPhaseResponse.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#DeformationPhaseResponse.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#DeformationPhaseResponse.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#DeformationPhaseResponse.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#DeformationPhaseResponse.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#DeformationPhaseResponse.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#DeformationPhaseResponse.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#DeformationPhaseResponse.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#DeformationPhaseResponse.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#DeformationPhaseResponse.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#DeformationPhaseResponse.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#DeformationPhaseResponse.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#DeformationPhaseResponse.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#DeformationPhaseResponse.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#DeformationPhaseResponse.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#DeformationPhaseResponse.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#DeformationPhaseResponse.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#DeformationPhaseResponse.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#DeformationPhaseResponse.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#DeformationPhaseResponse.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#DeformationPhaseResponse.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#DeformationPhaseResponse.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#DeformationPhaseResponse.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#DeformationPhaseResponse.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#DeformationPhaseResponse.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#DeformationPhaseResponse.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#DeformationPhaseResponse.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#DeformationPhaseResponse.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#DeformationPhaseResponse.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#DeformationPhaseResponse.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#DeformationPhaseResponse.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#DeformationPhaseResponse.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#DeformationPhaseResponse.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#DeformationPhaseResponse.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#DeformationPhaseResponse.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#DeformationPhaseResponse.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#DeformationPhaseResponse.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#DeformationPhaseResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#DeformationPhaseResponse.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#DeformationPhaseResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#DeformationPhaseResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#DeformationPhaseResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#DeformationPhaseResponse.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#DeformationPhaseResponse.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#DeformationPhaseResponse.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#DeformationPhaseResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#DeformationPhaseResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#DeformationPhaseResponse.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#DeformationPhaseResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#DeformationPhaseResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#DeformationPhaseResponse.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#DeformationPhaseResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#DeformationPhaseResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#DeformationPhaseResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#DeformationPhaseResponse.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#DeformationPhaseResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#DeformationPhaseResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#DeformationPhaseResponse.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#DeformationPhaseResponse.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#DeformationPhaseResponse.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#DeformationPhaseResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#DeformationPhaseResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#DeformationPhaseResponse.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#DeformationPhaseResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#DeformationPhaseResponse.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#DeformationPhaseResponse.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#DeformationPhaseResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#DeformationPhaseResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#DeformationPhaseResponse.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#DeformationPhaseResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#DeformationPhaseResponse.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                          | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#DeformationPhaseResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#DeformationPhaseResponse.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#DeformationPhaseResponse.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#DeformationPhaseResponse.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#DeformationPhaseResponse.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#DeformationPhaseResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#DeformationPhaseResponse.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#DeformationPhaseResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#DeformationPhaseResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#DeformationPhaseResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#DeformationPhaseResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#DeformationPhaseResponse.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#DeformationPhaseResponse.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#DeformationPhaseResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#DeformationPhaseResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#DeformationPhaseResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                         | Gets or sets the Spring.                                                                           |
| [`State`](#DeformationPhaseResponse.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#DeformationPhaseResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#DeformationPhaseResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#DeformationPhaseResponse.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#DeformationPhaseResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#DeformationPhaseResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#DeformationPhaseResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#DeformationPhaseResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#DeformationPhaseResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="DeformationPhaseResponse.AccelerationType"></a>

### *property* DeformationPhaseResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.AttachedRefs"></a>

### *property* DeformationPhaseResponse.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.BoundaryCondition"></a>

### *property* DeformationPhaseResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ChartDimensions"></a>

### *property* DeformationPhaseResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ChartViewingStyle"></a>

### *property* DeformationPhaseResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Children"></a>

### *property* DeformationPhaseResponse.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ClsId"></a>

### *property* DeformationPhaseResponse.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Comments"></a>

### *property* DeformationPhaseResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CoordinateSystem"></a>

### *property* DeformationPhaseResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CurvesAppearanceDisplay"></a>

### *property* DeformationPhaseResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CutFrequency"></a>

### *property* DeformationPhaseResponse.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.DataModelObjectCategory"></a>

### *property* DeformationPhaseResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.DeformationType"></a>

### *property* DeformationPhaseResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.DpfEvaluation"></a>

### *property* DeformationPhaseResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Duration"></a>

### *property* DeformationPhaseResponse.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.EnhancedTracking"></a>

### *property* DeformationPhaseResponse.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.FilterMaximum"></a>

### *property* DeformationPhaseResponse.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.FilterMinimum"></a>

### *property* DeformationPhaseResponse.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.FilterType"></a>

### *property* DeformationPhaseResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.FrequencyAtMaximumAmplitude"></a>

### *property* DeformationPhaseResponse.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GeometrySelectionString"></a>

### *property* DeformationPhaseResponse.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GroupingFolder"></a>

### *property* DeformationPhaseResponse.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.IconName"></a>

### *property* DeformationPhaseResponse.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Images"></a>

### *property* DeformationPhaseResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* DeformationPhaseResponse.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.InternalObject"></a>

### *property* DeformationPhaseResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.IsSolved"></a>

### *property* DeformationPhaseResponse.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.LoadStepNumber"></a>

### *property* DeformationPhaseResponse.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Location"></a>

### *property* DeformationPhaseResponse.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Maximum"></a>

### *property* DeformationPhaseResponse.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.MaximumAmplitude"></a>

### *property* DeformationPhaseResponse.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.MaximumFrequency"></a>

### *property* DeformationPhaseResponse.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Minimum"></a>

### *property* DeformationPhaseResponse.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.MinimumFrequency"></a>

### *property* DeformationPhaseResponse.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Name"></a>

### *property* DeformationPhaseResponse.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.NamedSelections"></a>

### *property* DeformationPhaseResponse.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.NormalOrientation"></a>

### *property* DeformationPhaseResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ObjectId"></a>

### *property* DeformationPhaseResponse.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ObjectState"></a>

### *property* DeformationPhaseResponse.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ObjectTags"></a>

### *property* DeformationPhaseResponse.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Parent"></a>

### *property* DeformationPhaseResponse.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.PhaseAngle"></a>

### *property* DeformationPhaseResponse.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Properties"></a>

### *property* DeformationPhaseResponse.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RPMSelection"></a>

### *property* DeformationPhaseResponse.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RealAtMaximumAmplitude"></a>

### *property* DeformationPhaseResponse.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ReportedFrequency"></a>

### *property* DeformationPhaseResponse.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RequestedFrequency"></a>

### *property* DeformationPhaseResponse.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ResultChartType"></a>

### *property* DeformationPhaseResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RpmSetNumber"></a>

### *property* DeformationPhaseResponse.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.SectorNumber"></a>

### *property* DeformationPhaseResponse.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ShearOrientation"></a>

### *property* DeformationPhaseResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.SpatialResolution"></a>

### *property* DeformationPhaseResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Spring"></a>

### *property* DeformationPhaseResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.State"></a>

### *property* DeformationPhaseResponse.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.StressStrainType"></a>

### *property* DeformationPhaseResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Suppressed"></a>

### *property* DeformationPhaseResponse.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.TabularData"></a>

### *property* DeformationPhaseResponse.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.TimeHistoryDisplay"></a>

### *property* DeformationPhaseResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.UseParentFrequencyRange"></a>

### *property* DeformationPhaseResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.VelocityType"></a>

### *property* DeformationPhaseResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.VisibleProperties"></a>

### *property* DeformationPhaseResponse.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.XAxisValues"></a>

### *property* DeformationPhaseResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DeformationPhaseResponse.Activate"></a>

### DeformationPhaseResponse.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.AddComment"></a>

### DeformationPhaseResponse.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.AddImage"></a>

### DeformationPhaseResponse.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ClearGeneratedData"></a>

### DeformationPhaseResponse.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Copy"></a>

### DeformationPhaseResponse.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CopyTo"></a>

### DeformationPhaseResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CreateObjRef"></a>

### DeformationPhaseResponse.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CreateParameter"></a>

### DeformationPhaseResponse.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Cut"></a>

### DeformationPhaseResponse.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Delete"></a>

### DeformationPhaseResponse.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Duplicate"></a>

### DeformationPhaseResponse.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Equals"></a>

### DeformationPhaseResponse.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.EvaluateAllResults"></a>

### DeformationPhaseResponse.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ExportAnimation"></a>

### DeformationPhaseResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetAPIName"></a>

### DeformationPhaseResponse.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetAllProperties"></a>

### DeformationPhaseResponse.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetChildren"></a>

### DeformationPhaseResponse.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DeformationPhaseResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetDetailsView"></a>

### DeformationPhaseResponse.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetEnumName"></a>

### DeformationPhaseResponse.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetHashCode"></a>

### DeformationPhaseResponse.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetIconFile"></a>

### DeformationPhaseResponse.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetLifetimeService"></a>

### DeformationPhaseResponse.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetObjectData"></a>

### DeformationPhaseResponse.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetParameter"></a>

### DeformationPhaseResponse.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetPath"></a>

### DeformationPhaseResponse.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetPropertyName"></a>

### DeformationPhaseResponse.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetPropertyValue"></a>

### DeformationPhaseResponse.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetQuantityName"></a>

### DeformationPhaseResponse.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetQuantityNameFromType"></a>

### DeformationPhaseResponse.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetVisibleProperties"></a>

### DeformationPhaseResponse.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetVisiblePropertyNames"></a>

### DeformationPhaseResponse.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GroupAllSimilarChildren"></a>

### DeformationPhaseResponse.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GroupSimilarObjects"></a>

### DeformationPhaseResponse.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.InitializeLifetimeService"></a>

### DeformationPhaseResponse.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.IsPropertyEditable"></a>

### DeformationPhaseResponse.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DeformationPhaseResponse.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.IsPropertyVisible"></a>

### DeformationPhaseResponse.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DeformationPhaseResponse.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Paste"></a>

### DeformationPhaseResponse.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.PropertyByAPIName"></a>

### DeformationPhaseResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.PropertyById"></a>

### DeformationPhaseResponse.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.PropertyByName"></a>

### DeformationPhaseResponse.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RemoveFromGroup"></a>

### DeformationPhaseResponse.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RemoveParameter"></a>

### DeformationPhaseResponse.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RenameBasedOnDefinition"></a>

### DeformationPhaseResponse.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

