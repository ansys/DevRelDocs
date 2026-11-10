# `ContactPossibleOverconstraintTracker`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPossibleOverconstraintTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPossibleOverconstraintTracker(internalObject: Any)

<a id="ContactPossibleOverconstraintTracker"></a>

### *class* ContactPossibleOverconstraintTracker(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactPossibleOverconstraintTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactPossibleOverconstraintTracker.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactPossibleOverconstraintTracker.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#ContactPossibleOverconstraintTracker.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#ContactPossibleOverconstraintTracker.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ContactPossibleOverconstraintTracker.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactPossibleOverconstraintTracker.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactPossibleOverconstraintTracker.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactPossibleOverconstraintTracker.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactPossibleOverconstraintTracker.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactPossibleOverconstraintTracker.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactPossibleOverconstraintTracker.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactPossibleOverconstraintTracker.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ContactPossibleOverconstraintTracker.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ContactPossibleOverconstraintTracker.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`GetAPIName`](#ContactPossibleOverconstraintTracker.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactPossibleOverconstraintTracker.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactPossibleOverconstraintTracker.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactPossibleOverconstraintTracker.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactPossibleOverconstraintTracker.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactPossibleOverconstraintTracker.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactPossibleOverconstraintTracker.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactPossibleOverconstraintTracker.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactPossibleOverconstraintTracker.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactPossibleOverconstraintTracker.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactPossibleOverconstraintTracker.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactPossibleOverconstraintTracker.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactPossibleOverconstraintTracker.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ContactPossibleOverconstraintTracker.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetQuantityNameFromType`](#ContactPossibleOverconstraintTracker.GetQuantityNameFromType)     | GetQuantityNameFromType method.                                                             |
| [`GetVisibleProperties`](#ContactPossibleOverconstraintTracker.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactPossibleOverconstraintTracker.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactPossibleOverconstraintTracker.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactPossibleOverconstraintTracker.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactPossibleOverconstraintTracker.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactPossibleOverconstraintTracker.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactPossibleOverconstraintTracker.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactPossibleOverconstraintTracker.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactPossibleOverconstraintTracker.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactPossibleOverconstraintTracker.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactPossibleOverconstraintTracker.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactPossibleOverconstraintTracker.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactPossibleOverconstraintTracker.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ContactPossibleOverconstraintTracker.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#ContactPossibleOverconstraintTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                                                 |
| [`AttachedRefs`](#ContactPossibleOverconstraintTracker.AttachedRefs)                               | AttachedRefs property.                                                                             |
| [`BoundaryCondition`](#ContactPossibleOverconstraintTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                                |
| [`ChartDimensions`](#ContactPossibleOverconstraintTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`ChartViewingStyle`](#ContactPossibleOverconstraintTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                                |
| [`Children`](#ContactPossibleOverconstraintTracker.Children)                                       | Gets the list of children.                                                                         |
| [`ClsId`](#ContactPossibleOverconstraintTracker.ClsId)                                             | ClsId property.                                                                                    |
| [`Comments`](#ContactPossibleOverconstraintTracker.Comments)                                       | Gets the list of associated comments.                                                              |
| [`ContactRegion`](#ContactRegion)                                | Gets or sets the ContactRegion.                                                                    |
| [`ContactSide`](#ContactPossibleOverconstraintTracker.ContactSide)                                 | Gets or sets the ContactSide.                                                                      |
| [`CoordinateSystem`](#CoordinateSystem)                                   | Gets or sets the CoordinateSystem.                                                                 |
| [`CurvesAppearanceDisplay`](#ContactPossibleOverconstraintTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`CutFrequency`](#ContactPossibleOverconstraintTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                                                     |
| [`DataModelObjectCategory`](#ContactPossibleOverconstraintTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                                                       |
| [`DeformationType`](#ContactPossibleOverconstraintTracker.DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`DpfEvaluation`](#ContactPossibleOverconstraintTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                    |
| [`Duration`](#ContactPossibleOverconstraintTracker.Duration)                                       | Gets or sets the Duration.                                                                         |
| [`EnhancedTracking`](#ContactPossibleOverconstraintTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                         |
| [`FilterMaximum`](#ContactPossibleOverconstraintTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#ContactPossibleOverconstraintTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                                            |
| [`FilterType`](#ContactPossibleOverconstraintTracker.FilterType)                                   | Gets or sets the FilterType.                                                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactPossibleOverconstraintTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`GeometrySelectionString`](#ContactPossibleOverconstraintTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                          |
| [`GroupingFolder`](#ContactPossibleOverconstraintTracker.GroupingFolder)                           | GroupingFolder property.                                                                           |
| [`IconName`](#ContactPossibleOverconstraintTracker.IconName)                                       | IconName property.                                                                                 |
| [`Images`](#ContactPossibleOverconstraintTracker.Images)                                           | Gets the list of associated images.                                                                |
| [`ImaginaryAtMaximumAmplitude`](#ContactPossibleOverconstraintTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`InternalObject`](#ContactPossibleOverconstraintTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                                                 |
| [`IsSolved`](#ContactPossibleOverconstraintTracker.IsSolved)                                       | Gets the IsSolved.                                                                                 |
| [`LoadStepNumber`](#ContactPossibleOverconstraintTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                   |
| [`Location`](#ContactPossibleOverconstraintTracker.Location)                                       | Gets or sets the Location.                                                                         |
| [`Maximum`](#ContactPossibleOverconstraintTracker.Maximum)                                         | Gets the Maximum.                                                                                  |
| [`MaximumAmplitude`](#ContactPossibleOverconstraintTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#ContactPossibleOverconstraintTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                                 |
| [`Minimum`](#ContactPossibleOverconstraintTracker.Minimum)                                         | Gets the Minimum.                                                                                  |
| [`MinimumFrequency`](#ContactPossibleOverconstraintTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                                 |
| [`Name`](#ContactPossibleOverconstraintTracker.Name)                                               | Name property.                                                                                     |
| [`NamedSelections`](#NamedSelections)                                      | Gets or sets the NamedSelections.                                                                  |
| [`NormalOrientation`](#ContactPossibleOverconstraintTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                                |
| [`ObjectId`](#ContactPossibleOverconstraintTracker.ObjectId)                                       | ObjectId property.                                                                                 |
| [`ObjectState`](#ContactPossibleOverconstraintTracker.ObjectState)                                 | ObjectState property.                                                                              |
| [`ObjectTags`](#ContactPossibleOverconstraintTracker.ObjectTags)                                   | ObjectTags property.                                                                               |
| [`Parent`](#ContactPossibleOverconstraintTracker.Parent)                                           | Parent property.                                                                                   |
| [`PhaseAngle`](#ContactPossibleOverconstraintTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                                               |
| [`Properties`](#ContactPossibleOverconstraintTracker.Properties)                                   | Gets the list of properties for this object.                                                       |
| [`RPMSelection`](#ContactPossibleOverconstraintTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                           |
| [`RealAtMaximumAmplitude`](#ContactPossibleOverconstraintTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                   |
| [`ReportedFrequency`](#ContactPossibleOverconstraintTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                        |
| [`RequestedFrequency`](#ContactPossibleOverconstraintTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                               |
| [`ResultChartType`](#ContactPossibleOverconstraintTracker.ResultChartType)                         | Gets the ResultChartType.                                                                          |
| [`RpmSetNumber`](#ContactPossibleOverconstraintTracker.RpmSetNumber)                               | Gets or sets the RpmSetNumber.                                                                     |
| [`SectorNumber`](#ContactPossibleOverconstraintTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                                                     |
| [`ShearOrientation`](#ContactPossibleOverconstraintTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                                 |
| [`SpatialResolution`](#ContactPossibleOverconstraintTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                                |
| [`Spring`](#Spring)                                                     | Gets or sets the Spring.                                                                           |
| [`State`](#ContactPossibleOverconstraintTracker.State)                                             | State property.                                                                                    |
| [`StressStrainType`](#ContactPossibleOverconstraintTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                                                 |
| [`Suppressed`](#ContactPossibleOverconstraintTracker.Suppressed)                                   | Gets or sets the Suppressed.                                                                       |
| [`TabularData`](#ContactPossibleOverconstraintTracker.TabularData)                                 | Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data. |
| [`TimeHistoryDisplay`](#ContactPossibleOverconstraintTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                               |
| [`UseParentFrequencyRange`](#ContactPossibleOverconstraintTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                          |
| [`VelocityType`](#ContactPossibleOverconstraintTracker.VelocityType)                               | Gets or sets the VelocityType.                                                                     |
| [`VisibleProperties`](#ContactPossibleOverconstraintTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                      |
| [`XAxisValues`](#ContactPossibleOverconstraintTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="ContactPossibleOverconstraintTracker.AccelerationType"></a>

### *property* ContactPossibleOverconstraintTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.AttachedRefs"></a>

### *property* ContactPossibleOverconstraintTracker.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.BoundaryCondition"></a>

### *property* ContactPossibleOverconstraintTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ChartDimensions"></a>

### *property* ContactPossibleOverconstraintTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ChartViewingStyle"></a>

### *property* ContactPossibleOverconstraintTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Children"></a>

### *property* ContactPossibleOverconstraintTracker.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ClsId"></a>

### *property* ContactPossibleOverconstraintTracker.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Comments"></a>

### *property* ContactPossibleOverconstraintTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ContactRegion"></a>

### *property* ContactPossibleOverconstraintTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ContactSide"></a>

### *property* ContactPossibleOverconstraintTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactScopingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CoordinateSystem"></a>

### *property* ContactPossibleOverconstraintTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CurvesAppearanceDisplay"></a>

### *property* ContactPossibleOverconstraintTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CutFrequency"></a>

### *property* ContactPossibleOverconstraintTracker.CutFrequency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.DataModelObjectCategory"></a>

### *property* ContactPossibleOverconstraintTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.DeformationType"></a>

### *property* ContactPossibleOverconstraintTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.DpfEvaluation"></a>

### *property* ContactPossibleOverconstraintTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Duration"></a>

### *property* ContactPossibleOverconstraintTracker.Duration *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.EnhancedTracking"></a>

### *property* ContactPossibleOverconstraintTracker.EnhancedTracking *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.FilterMaximum"></a>

### *property* ContactPossibleOverconstraintTracker.FilterMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.FilterMinimum"></a>

### *property* ContactPossibleOverconstraintTracker.FilterMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.FilterType"></a>

### *property* ContactPossibleOverconstraintTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactPossibleOverconstraintTracker.FrequencyAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GeometrySelectionString"></a>

### *property* ContactPossibleOverconstraintTracker.GeometrySelectionString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GroupingFolder"></a>

### *property* ContactPossibleOverconstraintTracker.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.IconName"></a>

### *property* ContactPossibleOverconstraintTracker.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Images"></a>

### *property* ContactPossibleOverconstraintTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactPossibleOverconstraintTracker.ImaginaryAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.InternalObject"></a>

### *property* ContactPossibleOverconstraintTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.IsSolved"></a>

### *property* ContactPossibleOverconstraintTracker.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.LoadStepNumber"></a>

### *property* ContactPossibleOverconstraintTracker.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Location"></a>

### *property* ContactPossibleOverconstraintTracker.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Maximum"></a>

### *property* ContactPossibleOverconstraintTracker.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.MaximumAmplitude"></a>

### *property* ContactPossibleOverconstraintTracker.MaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.MaximumFrequency"></a>

### *property* ContactPossibleOverconstraintTracker.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Minimum"></a>

### *property* ContactPossibleOverconstraintTracker.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.MinimumFrequency"></a>

### *property* ContactPossibleOverconstraintTracker.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Name"></a>

### *property* ContactPossibleOverconstraintTracker.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.NamedSelections"></a>

### *property* ContactPossibleOverconstraintTracker.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.NormalOrientation"></a>

### *property* ContactPossibleOverconstraintTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ObjectId"></a>

### *property* ContactPossibleOverconstraintTracker.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ObjectState"></a>

### *property* ContactPossibleOverconstraintTracker.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ObjectTags"></a>

### *property* ContactPossibleOverconstraintTracker.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Parent"></a>

### *property* ContactPossibleOverconstraintTracker.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.PhaseAngle"></a>

### *property* ContactPossibleOverconstraintTracker.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Properties"></a>

### *property* ContactPossibleOverconstraintTracker.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RPMSelection"></a>

### *property* ContactPossibleOverconstraintTracker.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RealAtMaximumAmplitude"></a>

### *property* ContactPossibleOverconstraintTracker.RealAtMaximumAmplitude *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ReportedFrequency"></a>

### *property* ContactPossibleOverconstraintTracker.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RequestedFrequency"></a>

### *property* ContactPossibleOverconstraintTracker.RequestedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ResultChartType"></a>

### *property* ContactPossibleOverconstraintTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RpmSetNumber"></a>

### *property* ContactPossibleOverconstraintTracker.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.SectorNumber"></a>

### *property* ContactPossibleOverconstraintTracker.SectorNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ShearOrientation"></a>

### *property* ContactPossibleOverconstraintTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.SpatialResolution"></a>

### *property* ContactPossibleOverconstraintTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Spring"></a>

### *property* ContactPossibleOverconstraintTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.State"></a>

### *property* ContactPossibleOverconstraintTracker.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.StressStrainType"></a>

### *property* ContactPossibleOverconstraintTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Suppressed"></a>

### *property* ContactPossibleOverconstraintTracker.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.TabularData"></a>

### *property* ContactPossibleOverconstraintTracker.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result chart.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.TimeHistoryDisplay"></a>

### *property* ContactPossibleOverconstraintTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.UseParentFrequencyRange"></a>

### *property* ContactPossibleOverconstraintTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.VelocityType"></a>

### *property* ContactPossibleOverconstraintTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.VisibleProperties"></a>

### *property* ContactPossibleOverconstraintTracker.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.XAxisValues"></a>

### *property* ContactPossibleOverconstraintTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactPossibleOverconstraintTracker.Activate"></a>

### ContactPossibleOverconstraintTracker.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.AddComment"></a>

### ContactPossibleOverconstraintTracker.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.AddImage"></a>

### ContactPossibleOverconstraintTracker.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ClearGeneratedData"></a>

### ContactPossibleOverconstraintTracker.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Copy"></a>

### ContactPossibleOverconstraintTracker.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CopyTo"></a>

### ContactPossibleOverconstraintTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CreateObjRef"></a>

### ContactPossibleOverconstraintTracker.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CreateParameter"></a>

### ContactPossibleOverconstraintTracker.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Cut"></a>

### ContactPossibleOverconstraintTracker.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Delete"></a>

### ContactPossibleOverconstraintTracker.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Duplicate"></a>

### ContactPossibleOverconstraintTracker.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Equals"></a>

### ContactPossibleOverconstraintTracker.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.EvaluateAllResults"></a>

### ContactPossibleOverconstraintTracker.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ExportAnimation"></a>

### ContactPossibleOverconstraintTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetAPIName"></a>

### ContactPossibleOverconstraintTracker.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetAllProperties"></a>

### ContactPossibleOverconstraintTracker.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetChildren"></a>

### ContactPossibleOverconstraintTracker.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactPossibleOverconstraintTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetDetailsView"></a>

### ContactPossibleOverconstraintTracker.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetEnumName"></a>

### ContactPossibleOverconstraintTracker.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetHashCode"></a>

### ContactPossibleOverconstraintTracker.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetIconFile"></a>

### ContactPossibleOverconstraintTracker.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetLifetimeService"></a>

### ContactPossibleOverconstraintTracker.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetObjectData"></a>

### ContactPossibleOverconstraintTracker.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetParameter"></a>

### ContactPossibleOverconstraintTracker.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetPath"></a>

### ContactPossibleOverconstraintTracker.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetPropertyName"></a>

### ContactPossibleOverconstraintTracker.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetPropertyValue"></a>

### ContactPossibleOverconstraintTracker.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetQuantityName"></a>

### ContactPossibleOverconstraintTracker.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetQuantityNameFromType"></a>

### ContactPossibleOverconstraintTracker.GetQuantityNameFromType(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameFromType method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetVisibleProperties"></a>

### ContactPossibleOverconstraintTracker.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetVisiblePropertyNames"></a>

### ContactPossibleOverconstraintTracker.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GroupAllSimilarChildren"></a>

### ContactPossibleOverconstraintTracker.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GroupSimilarObjects"></a>

### ContactPossibleOverconstraintTracker.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.InitializeLifetimeService"></a>

### ContactPossibleOverconstraintTracker.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.IsPropertyEditable"></a>

### ContactPossibleOverconstraintTracker.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactPossibleOverconstraintTracker.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.IsPropertyVisible"></a>

### ContactPossibleOverconstraintTracker.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactPossibleOverconstraintTracker.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Paste"></a>

### ContactPossibleOverconstraintTracker.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.PropertyByAPIName"></a>

### ContactPossibleOverconstraintTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.PropertyById"></a>

### ContactPossibleOverconstraintTracker.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.PropertyByName"></a>

### ContactPossibleOverconstraintTracker.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RemoveFromGroup"></a>

### ContactPossibleOverconstraintTracker.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RemoveParameter"></a>

### ContactPossibleOverconstraintTracker.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RenameBasedOnDefinition"></a>

### ContactPossibleOverconstraintTracker.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

