# `FatigueHysteresis`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueHysteresis"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueHysteresis(internalObject: Any)

<a id="FatigueHysteresis"></a>

### *class* FatigueHysteresis(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FatigueHysteresis.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FatigueHysteresis.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FatigueHysteresis.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#FatigueHysteresis.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#FatigueHysteresis.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#FatigueHysteresis.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FatigueHysteresis.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FatigueHysteresis.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FatigueHysteresis.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FatigueHysteresis.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FatigueHysteresis.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FatigueHysteresis.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FatigueHysteresis.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#FatigueHysteresis.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#FatigueHysteresis.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#FatigueHysteresis.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FatigueHysteresis.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FatigueHysteresis.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FatigueHysteresis.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FatigueHysteresis.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FatigueHysteresis.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FatigueHysteresis.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FatigueHysteresis.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FatigueHysteresis.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FatigueHysteresis.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FatigueHysteresis.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FatigueHysteresis.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FatigueHysteresis.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#FatigueHysteresis.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#FatigueHysteresis.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#FatigueHysteresis.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FatigueHysteresis.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FatigueHysteresis.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FatigueHysteresis.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FatigueHysteresis.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FatigueHysteresis.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FatigueHysteresis.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FatigueHysteresis.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FatigueHysteresis.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FatigueHysteresis.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FatigueHysteresis.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FatigueHysteresis.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FatigueHysteresis.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FatigueHysteresis.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#FatigueHysteresis.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#FatigueHysteresis.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#FatigueHysteresis.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#FatigueHysteresis.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#FatigueHysteresis.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#FatigueHysteresis.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#FatigueHysteresis.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#FatigueHysteresis.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#FatigueHysteresis.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#FatigueHysteresis.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#FatigueHysteresis.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#FatigueHysteresis.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#FatigueHysteresis.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#FatigueHysteresis.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#FatigueHysteresis.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#FatigueHysteresis.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#FatigueHysteresis.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#FatigueHysteresis.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#FatigueHysteresis.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#FatigueHysteresis.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#FatigueHysteresis.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#FatigueHysteresis.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#FatigueHysteresis.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#FatigueHysteresis.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#FatigueHysteresis.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#FatigueHysteresis.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#FatigueHysteresis.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#FatigueHysteresis.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#FatigueHysteresis.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#FatigueHysteresis.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#FatigueHysteresis.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`MaximumStrain`](#FatigueHysteresis.MaximumStrain)                             | Gets the  MaximumStrain.                                                                           |
| [`MaximumStress`](#FatigueHysteresis.MaximumStress)                             | Gets the  MaximumStress.                                                                           |
| [`Minimum`](#FatigueHysteresis.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#FatigueHysteresis.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`MinimumStrain`](#FatigueHysteresis.MinimumStrain)                             | Gets the  MinimumStrain.                                                                           |
| [`MinimumStress`](#FatigueHysteresis.MinimumStress)                             | Gets the  MinimumStress.                                                                           |
| [`Name`](#FatigueHysteresis.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                   | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#FatigueHysteresis.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#FatigueHysteresis.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#FatigueHysteresis.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#FatigueHysteresis.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#FatigueHysteresis.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#FatigueHysteresis.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`PointsPerSegment`](#FatigueHysteresis.PointsPerSegment)                       | Gets or sets the PointsPerSegment.                                                                 |
| [`Properties`](#FatigueHysteresis.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#FatigueHysteresis.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#FatigueHysteresis.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#FatigueHysteresis.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#FatigueHysteresis.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#FatigueHysteresis.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#FatigueHysteresis.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#FatigueHysteresis.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#FatigueHysteresis.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#FatigueHysteresis.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                  | Gets or sets the Spring.                                                                           |
| [`State`](#FatigueHysteresis.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#FatigueHysteresis.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#FatigueHysteresis.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#FatigueHysteresis.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#FatigueHysteresis.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#FatigueHysteresis.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#FatigueHysteresis.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#FatigueHysteresis.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#FatigueHysteresis.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="FatigueHysteresis.AccelerationType"></a>

### *property* FatigueHysteresis.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.AttachedRefs"></a>

### *property* FatigueHysteresis.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.BoundaryCondition"></a>

### *property* FatigueHysteresis.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ChartDimensions"></a>

### *property* FatigueHysteresis.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ChartViewingStyle"></a>

### *property* FatigueHysteresis.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Children"></a>

### *property* FatigueHysteresis.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ClsId"></a>

### *property* FatigueHysteresis.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Comments"></a>

### *property* FatigueHysteresis.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CoordinateSystem"></a>

### *property* FatigueHysteresis.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CurvesAppearanceDisplay"></a>

### *property* FatigueHysteresis.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CutFrequency"></a>

### *property* FatigueHysteresis.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.DataModelObjectCategory"></a>

### *property* FatigueHysteresis.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.DeformationType"></a>

### *property* FatigueHysteresis.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.DpfEvaluation"></a>

### *property* FatigueHysteresis.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Duration"></a>

### *property* FatigueHysteresis.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.EnhancedTracking"></a>

### *property* FatigueHysteresis.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.FilterMaximum"></a>

### *property* FatigueHysteresis.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.FilterMinimum"></a>

### *property* FatigueHysteresis.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.FilterType"></a>

### *property* FatigueHysteresis.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.FrequencyAtMaximumAmplitude"></a>

### *property* FatigueHysteresis.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GeometrySelectionString"></a>

### *property* FatigueHysteresis.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GroupingFolder"></a>

### *property* FatigueHysteresis.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.IconName"></a>

### *property* FatigueHysteresis.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Images"></a>

### *property* FatigueHysteresis.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ImaginaryAtMaximumAmplitude"></a>

### *property* FatigueHysteresis.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.InternalObject"></a>

### *property* FatigueHysteresis.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.IsSolved"></a>

### *property* FatigueHysteresis.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.LoadStepNumber"></a>

### *property* FatigueHysteresis.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Location"></a>

### *property* FatigueHysteresis.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Maximum"></a>

### *property* FatigueHysteresis.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MaximumAmplitude"></a>

### *property* FatigueHysteresis.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MaximumFrequency"></a>

### *property* FatigueHysteresis.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MaximumStrain"></a>

### *property* FatigueHysteresis.MaximumStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the  MaximumStrain.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MaximumStress"></a>

### *property* FatigueHysteresis.MaximumStress *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the  MaximumStress.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Minimum"></a>

### *property* FatigueHysteresis.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MinimumFrequency"></a>

### *property* FatigueHysteresis.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MinimumStrain"></a>

### *property* FatigueHysteresis.MinimumStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the  MinimumStrain.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.MinimumStress"></a>

### *property* FatigueHysteresis.MinimumStress *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the  MinimumStress.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Name"></a>

### *property* FatigueHysteresis.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.NamedSelections"></a>

### *property* FatigueHysteresis.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.NormalOrientation"></a>

### *property* FatigueHysteresis.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ObjectId"></a>

### *property* FatigueHysteresis.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ObjectState"></a>

### *property* FatigueHysteresis.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ObjectTags"></a>

### *property* FatigueHysteresis.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Parent"></a>

### *property* FatigueHysteresis.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.PhaseAngle"></a>

### *property* FatigueHysteresis.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.PointsPerSegment"></a>

### *property* FatigueHysteresis.PointsPerSegment *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PointsPerSegment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Properties"></a>

### *property* FatigueHysteresis.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RPMSelection"></a>

### *property* FatigueHysteresis.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RealAtMaximumAmplitude"></a>

### *property* FatigueHysteresis.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ReportedFrequency"></a>

### *property* FatigueHysteresis.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RequestedFrequency"></a>

### *property* FatigueHysteresis.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ResultChartType"></a>

### *property* FatigueHysteresis.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RpmSetNumber"></a>

### *property* FatigueHysteresis.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.SectorNumber"></a>

### *property* FatigueHysteresis.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ShearOrientation"></a>

### *property* FatigueHysteresis.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.SpatialResolution"></a>

### *property* FatigueHysteresis.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Spring"></a>

### *property* FatigueHysteresis.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.State"></a>

### *property* FatigueHysteresis.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.StressStrainType"></a>

### *property* FatigueHysteresis.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Suppressed"></a>

### *property* FatigueHysteresis.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.TabularData"></a>

### *property* FatigueHysteresis.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.TimeHistoryDisplay"></a>

### *property* FatigueHysteresis.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.UseParentFrequencyRange"></a>

### *property* FatigueHysteresis.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.VelocityType"></a>

### *property* FatigueHysteresis.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.VisibleProperties"></a>

### *property* FatigueHysteresis.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.XAxisValues"></a>

### *property* FatigueHysteresis.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueHysteresis.Activate"></a>

### FatigueHysteresis.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.AddComment"></a>

### FatigueHysteresis.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.AddImage"></a>

### FatigueHysteresis.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ClearGeneratedData"></a>

### FatigueHysteresis.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Copy"></a>

### FatigueHysteresis.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CopyTo"></a>

### FatigueHysteresis.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CreateObjRef"></a>

### FatigueHysteresis.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.CreateParameter"></a>

### FatigueHysteresis.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Cut"></a>

### FatigueHysteresis.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Delete"></a>

### FatigueHysteresis.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Duplicate"></a>

### FatigueHysteresis.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Equals"></a>

### FatigueHysteresis.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.EvaluateAllResults"></a>

### FatigueHysteresis.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.ExportAnimation"></a>

### FatigueHysteresis.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetAPIName"></a>

### FatigueHysteresis.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetAllProperties"></a>

### FatigueHysteresis.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetChildren"></a>

### FatigueHysteresis.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FatigueHysteresis.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetDetailsView"></a>

### FatigueHysteresis.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetEnumName"></a>

### FatigueHysteresis.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetHashCode"></a>

### FatigueHysteresis.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetIconFile"></a>

### FatigueHysteresis.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetLifetimeService"></a>

### FatigueHysteresis.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetObjectData"></a>

### FatigueHysteresis.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetParameter"></a>

### FatigueHysteresis.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetPath"></a>

### FatigueHysteresis.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetPropertyName"></a>

### FatigueHysteresis.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetPropertyValue"></a>

### FatigueHysteresis.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetQuantityName"></a>

### FatigueHysteresis.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetQuantityNameFromType"></a>

### FatigueHysteresis.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetVisibleProperties"></a>

### FatigueHysteresis.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GetVisiblePropertyNames"></a>

### FatigueHysteresis.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GroupAllSimilarChildren"></a>

### FatigueHysteresis.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.GroupSimilarObjects"></a>

### FatigueHysteresis.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.InitializeLifetimeService"></a>

### FatigueHysteresis.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.IsPropertyEditable"></a>

### FatigueHysteresis.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueHysteresis.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.IsPropertyVisible"></a>

### FatigueHysteresis.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueHysteresis.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.Paste"></a>

### FatigueHysteresis.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.PropertyByAPIName"></a>

### FatigueHysteresis.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.PropertyById"></a>

### FatigueHysteresis.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.PropertyByName"></a>

### FatigueHysteresis.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RemoveFromGroup"></a>

### FatigueHysteresis.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RemoveParameter"></a>

### FatigueHysteresis.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueHysteresis.RenameBasedOnDefinition"></a>

### FatigueHysteresis.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

