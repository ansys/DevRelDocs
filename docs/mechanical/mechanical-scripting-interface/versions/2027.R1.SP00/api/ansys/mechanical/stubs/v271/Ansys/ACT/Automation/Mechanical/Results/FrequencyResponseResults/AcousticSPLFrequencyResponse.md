# `AcousticSPLFrequencyResponse`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticSPLFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticSPLFrequencyResponse(internalObject: Any)

<a id="AcousticSPLFrequencyResponse"></a>

### *class* AcousticSPLFrequencyResponse(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticSPLFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticSPLFrequencyResponse.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticSPLFrequencyResponse.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#AcousticSPLFrequencyResponse.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#AcousticSPLFrequencyResponse.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AcousticSPLFrequencyResponse.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticSPLFrequencyResponse.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticSPLFrequencyResponse.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticSPLFrequencyResponse.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticSPLFrequencyResponse.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticSPLFrequencyResponse.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticSPLFrequencyResponse.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticSPLFrequencyResponse.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AcousticSPLFrequencyResponse.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AcousticSPLFrequencyResponse.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToWAVFile`](#AcousticSPLFrequencyResponse.ExportToWAVFile)                     | Run the ExportToWAVFile action.                                                             |
| [`ExportToXMLFile`](#AcousticSPLFrequencyResponse.ExportToXMLFile)                     | Run the ExportToXMLFile action.                                                             |
| [`GetAPIName`](#AcousticSPLFrequencyResponse.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticSPLFrequencyResponse.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticSPLFrequencyResponse.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticSPLFrequencyResponse.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticSPLFrequencyResponse.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticSPLFrequencyResponse.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticSPLFrequencyResponse.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticSPLFrequencyResponse.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticSPLFrequencyResponse.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticSPLFrequencyResponse.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticSPLFrequencyResponse.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticSPLFrequencyResponse.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticSPLFrequencyResponse.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AcousticSPLFrequencyResponse.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#AcousticSPLFrequencyResponse.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#AcousticSPLFrequencyResponse.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticSPLFrequencyResponse.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticSPLFrequencyResponse.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticSPLFrequencyResponse.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticSPLFrequencyResponse.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticSPLFrequencyResponse.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticSPLFrequencyResponse.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticSPLFrequencyResponse.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AcousticSPLFrequencyResponse.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticSPLFrequencyResponse.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticSPLFrequencyResponse.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticSPLFrequencyResponse.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticSPLFrequencyResponse.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AcousticSPLFrequencyResponse.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#AcousticSPLFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#AcousticSPLFrequencyResponse.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#AcousticSPLFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#AcousticSPLFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#AcousticSPLFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#AcousticSPLFrequencyResponse.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#AcousticSPLFrequencyResponse.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#AcousticSPLFrequencyResponse.Comments)                                       | Gets the list of associated comments.                                                              |
| [`CoordinateSystem`](#CoordinateSystem)                           | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#AcousticSPLFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#AcousticSPLFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#AcousticSPLFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#AcousticSPLFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#AcousticSPLFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#AcousticSPLFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#AcousticSPLFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#AcousticSPLFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#AcousticSPLFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#AcousticSPLFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#AcousticSPLFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#AcousticSPLFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#AcousticSPLFrequencyResponse.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#AcousticSPLFrequencyResponse.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#AcousticSPLFrequencyResponse.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#AcousticSPLFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#AcousticSPLFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#AcousticSPLFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#AcousticSPLFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#AcousticSPLFrequencyResponse.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#AcousticSPLFrequencyResponse.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#AcousticSPLFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#AcousticSPLFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#AcousticSPLFrequencyResponse.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#AcousticSPLFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#AcousticSPLFrequencyResponse.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                              | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#AcousticSPLFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#AcousticSPLFrequencyResponse.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#AcousticSPLFrequencyResponse.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#AcousticSPLFrequencyResponse.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#AcousticSPLFrequencyResponse.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#AcousticSPLFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#AcousticSPLFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#AcousticSPLFrequencyResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#AcousticSPLFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#AcousticSPLFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#AcousticSPLFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#AcousticSPLFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#AcousticSPLFrequencyResponse.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#AcousticSPLFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#AcousticSPLFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#AcousticSPLFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                             | Gets or sets the Spring.                                                                           |
| [`State`](#AcousticSPLFrequencyResponse.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#AcousticSPLFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#AcousticSPLFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#AcousticSPLFrequencyResponse.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#AcousticSPLFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#AcousticSPLFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#AcousticSPLFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#AcousticSPLFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#AcousticSPLFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="AcousticSPLFrequencyResponse.AccelerationType"></a>

### *property* AcousticSPLFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.AttachedRefs"></a>

### *property* AcousticSPLFrequencyResponse.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.BoundaryCondition"></a>

### *property* AcousticSPLFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ChartDimensions"></a>

### *property* AcousticSPLFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ChartViewingStyle"></a>

### *property* AcousticSPLFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Children"></a>

### *property* AcousticSPLFrequencyResponse.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ClsId"></a>

### *property* AcousticSPLFrequencyResponse.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Comments"></a>

### *property* AcousticSPLFrequencyResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.CoordinateSystem"></a>

### *property* AcousticSPLFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* AcousticSPLFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.CutFrequency"></a>

### *property* AcousticSPLFrequencyResponse.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.DataModelObjectCategory"></a>

### *property* AcousticSPLFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.DeformationType"></a>

### *property* AcousticSPLFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.DpfEvaluation"></a>

### *property* AcousticSPLFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Duration"></a>

### *property* AcousticSPLFrequencyResponse.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.EnhancedTracking"></a>

### *property* AcousticSPLFrequencyResponse.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.FilterMaximum"></a>

### *property* AcousticSPLFrequencyResponse.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.FilterMinimum"></a>

### *property* AcousticSPLFrequencyResponse.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.FilterType"></a>

### *property* AcousticSPLFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AcousticSPLFrequencyResponse.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GeometrySelectionString"></a>

### *property* AcousticSPLFrequencyResponse.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GroupingFolder"></a>

### *property* AcousticSPLFrequencyResponse.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.IconName"></a>

### *property* AcousticSPLFrequencyResponse.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Images"></a>

### *property* AcousticSPLFrequencyResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AcousticSPLFrequencyResponse.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.InternalObject"></a>

### *property* AcousticSPLFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.IsSolved"></a>

### *property* AcousticSPLFrequencyResponse.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.LoadStepNumber"></a>

### *property* AcousticSPLFrequencyResponse.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Location"></a>

### *property* AcousticSPLFrequencyResponse.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Maximum"></a>

### *property* AcousticSPLFrequencyResponse.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.MaximumAmplitude"></a>

### *property* AcousticSPLFrequencyResponse.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.MaximumFrequency"></a>

### *property* AcousticSPLFrequencyResponse.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Minimum"></a>

### *property* AcousticSPLFrequencyResponse.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.MinimumFrequency"></a>

### *property* AcousticSPLFrequencyResponse.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Name"></a>

### *property* AcousticSPLFrequencyResponse.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.NamedSelections"></a>

### *property* AcousticSPLFrequencyResponse.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.NormalOrientation"></a>

### *property* AcousticSPLFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ObjectId"></a>

### *property* AcousticSPLFrequencyResponse.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ObjectState"></a>

### *property* AcousticSPLFrequencyResponse.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ObjectTags"></a>

### *property* AcousticSPLFrequencyResponse.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Parent"></a>

### *property* AcousticSPLFrequencyResponse.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.PhaseAngle"></a>

### *property* AcousticSPLFrequencyResponse.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Properties"></a>

### *property* AcousticSPLFrequencyResponse.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.RPMSelection"></a>

### *property* AcousticSPLFrequencyResponse.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* AcousticSPLFrequencyResponse.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ReportedFrequency"></a>

### *property* AcousticSPLFrequencyResponse.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.RequestedFrequency"></a>

### *property* AcousticSPLFrequencyResponse.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ResultChartType"></a>

### *property* AcousticSPLFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.RpmSetNumber"></a>

### *property* AcousticSPLFrequencyResponse.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.SectorNumber"></a>

### *property* AcousticSPLFrequencyResponse.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ShearOrientation"></a>

### *property* AcousticSPLFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.SpatialResolution"></a>

### *property* AcousticSPLFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Spring"></a>

### *property* AcousticSPLFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.State"></a>

### *property* AcousticSPLFrequencyResponse.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.StressStrainType"></a>

### *property* AcousticSPLFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Suppressed"></a>

### *property* AcousticSPLFrequencyResponse.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.TabularData"></a>

### *property* AcousticSPLFrequencyResponse.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.TimeHistoryDisplay"></a>

### *property* AcousticSPLFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.UseParentFrequencyRange"></a>

### *property* AcousticSPLFrequencyResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.VelocityType"></a>

### *property* AcousticSPLFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.VisibleProperties"></a>

### *property* AcousticSPLFrequencyResponse.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.XAxisValues"></a>

### *property* AcousticSPLFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticSPLFrequencyResponse.Activate"></a>

### AcousticSPLFrequencyResponse.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.AddComment"></a>

### AcousticSPLFrequencyResponse.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.AddImage"></a>

### AcousticSPLFrequencyResponse.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ClearGeneratedData"></a>

### AcousticSPLFrequencyResponse.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Copy"></a>

### AcousticSPLFrequencyResponse.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.CopyTo"></a>

### AcousticSPLFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.CreateObjRef"></a>

### AcousticSPLFrequencyResponse.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.CreateParameter"></a>

### AcousticSPLFrequencyResponse.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Cut"></a>

### AcousticSPLFrequencyResponse.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Delete"></a>

### AcousticSPLFrequencyResponse.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Duplicate"></a>

### AcousticSPLFrequencyResponse.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Equals"></a>

### AcousticSPLFrequencyResponse.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.EvaluateAllResults"></a>

### AcousticSPLFrequencyResponse.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ExportAnimation"></a>

### AcousticSPLFrequencyResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ExportToWAVFile"></a>

### AcousticSPLFrequencyResponse.ExportToWAVFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.ExportToXMLFile"></a>

### AcousticSPLFrequencyResponse.ExportToXMLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetAPIName"></a>

### AcousticSPLFrequencyResponse.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetAllProperties"></a>

### AcousticSPLFrequencyResponse.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetChildren"></a>

### AcousticSPLFrequencyResponse.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticSPLFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetDetailsView"></a>

### AcousticSPLFrequencyResponse.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetEnumName"></a>

### AcousticSPLFrequencyResponse.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetHashCode"></a>

### AcousticSPLFrequencyResponse.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetIconFile"></a>

### AcousticSPLFrequencyResponse.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetLifetimeService"></a>

### AcousticSPLFrequencyResponse.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetObjectData"></a>

### AcousticSPLFrequencyResponse.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetParameter"></a>

### AcousticSPLFrequencyResponse.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetPath"></a>

### AcousticSPLFrequencyResponse.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetPropertyName"></a>

### AcousticSPLFrequencyResponse.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetPropertyValue"></a>

### AcousticSPLFrequencyResponse.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetQuantityName"></a>

### AcousticSPLFrequencyResponse.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetQuantityNameFromType"></a>

### AcousticSPLFrequencyResponse.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetVisibleProperties"></a>

### AcousticSPLFrequencyResponse.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GetVisiblePropertyNames"></a>

### AcousticSPLFrequencyResponse.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GroupAllSimilarChildren"></a>

### AcousticSPLFrequencyResponse.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.GroupSimilarObjects"></a>

### AcousticSPLFrequencyResponse.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.InitializeLifetimeService"></a>

### AcousticSPLFrequencyResponse.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.IsPropertyEditable"></a>

### AcousticSPLFrequencyResponse.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticSPLFrequencyResponse.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.IsPropertyVisible"></a>

### AcousticSPLFrequencyResponse.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticSPLFrequencyResponse.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.Paste"></a>

### AcousticSPLFrequencyResponse.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.PropertyByAPIName"></a>

### AcousticSPLFrequencyResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.PropertyById"></a>

### AcousticSPLFrequencyResponse.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.PropertyByName"></a>

### AcousticSPLFrequencyResponse.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.RemoveFromGroup"></a>

### AcousticSPLFrequencyResponse.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.RemoveParameter"></a>

### AcousticSPLFrequencyResponse.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticSPLFrequencyResponse.RenameBasedOnDefinition"></a>

### AcousticSPLFrequencyResponse.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

