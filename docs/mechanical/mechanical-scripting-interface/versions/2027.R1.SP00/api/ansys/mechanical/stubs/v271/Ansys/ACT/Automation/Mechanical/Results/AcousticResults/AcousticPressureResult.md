# `AcousticPressureResult`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticPressureResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticPressureResult(internalObject: Any)

<a id="AcousticPressureResult"></a>

### *class* AcousticPressureResult(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticPressureResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticPressureResult.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#AcousticPressureResult.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#AcousticPressureResult.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#AcousticPressureResult.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#AcousticPressureResult.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticPressureResult.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#AcousticPressureResult.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#AcousticPressureResult.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AcousticPressureResult.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticPressureResult.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticPressureResult.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticPressureResult.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#AcousticPressureResult.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#AcousticPressureResult.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticPressureResult.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticPressureResult.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#AcousticPressureResult.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#AcousticPressureResult.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AcousticPressureResult.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AcousticPressureResult.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#AcousticPressureResult.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#AcousticPressureResult.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`ExportToWAVFile`](#AcousticPressureResult.ExportToWAVFile)                     | Run the Export To WAVFile action.                                                           |
| [`FetchRemoteResult`](#AcousticPressureResult.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#AcousticPressureResult.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#AcousticPressureResult.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#AcousticPressureResult.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticPressureResult.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticPressureResult.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticPressureResult.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticPressureResult.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticPressureResult.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticPressureResult.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#AcousticPressureResult.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#AcousticPressureResult.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticPressureResult.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticPressureResult.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticPressureResult.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticPressureResult.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AcousticPressureResult.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#AcousticPressureResult.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticPressureResult.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticPressureResult.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticPressureResult.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticPressureResult.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticPressureResult.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticPressureResult.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticPressureResult.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticPressureResult.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticPressureResult.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticPressureResult.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticPressureResult.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticPressureResult.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticPressureResult.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AcousticPressureResult.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#AcousticPressureResult.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#AcousticPressureResult.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#AcousticPressureResult.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#AcousticPressureResult.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#AcousticPressureResult.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#AcousticPressureResult.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#AcousticPressureResult.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#AcousticPressureResult.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#AcousticPressureResult.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#AcousticPressureResult.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#AcousticPressureResult.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                   | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#AcousticPressureResult.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DampedFrequency`](#AcousticPressureResult.DampedFrequency)                                       | Gets the DampedFrequency.                                                                                |
| [`DataModelObjectCategory`](#AcousticPressureResult.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#AcousticPressureResult.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#AcousticPressureResult.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#AcousticPressureResult.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#AcousticPressureResult.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#AcousticPressureResult.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#AcousticPressureResult.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#AcousticPressureResult.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#AcousticPressureResult.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#AcousticPressureResult.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#AcousticPressureResult.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#AcousticPressureResult.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#AcousticPressureResult.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#AcousticPressureResult.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#AcousticPressureResult.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#AcousticPressureResult.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#AcousticPressureResult.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticPressureResult.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticPressureResult.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticPressureResult.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticPressureResult.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#AcousticPressureResult.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#AcousticPressureResult.Location)                                                     | Gets or sets the Location.                                                                               |
| [`LogarithmicDecrement`](#AcousticPressureResult.LogarithmicDecrement)                             | Gets the LogarithmicDecrement.                                                                           |
| [`Maximum`](#AcousticPressureResult.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#AcousticPressureResult.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#AcousticPressureResult.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#AcousticPressureResult.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#AcousticPressureResult.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#AcousticPressureResult.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#AcousticPressureResult.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#AcousticPressureResult.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`ModalDampingRatio`](#AcousticPressureResult.ModalDampingRatio)                                   | Gets the ModalDampingRatio.                                                                              |
| [`Mode`](#AcousticPressureResult.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#AcousticPressureResult.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                      | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#AcousticPressureResult.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#AcousticPressureResult.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#AcousticPressureResult.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#AcousticPressureResult.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                       | Path property.                                                                                           |
| [`PlotData`](#AcousticPressureResult.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#AcousticPressureResult.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#AcousticPressureResult.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ReportedFrequency`](#AcousticPressureResult.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                              |
| [`ResultType`](#AcousticPressureResult.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#AcousticPressureResult.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#AcousticPressureResult.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#AcousticPressureResult.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#AcousticPressureResult.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#AcousticPressureResult.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#AcousticPressureResult.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`Stability`](#AcousticPressureResult.Stability)                                                   | Gets the Stability.                                                                                      |
| [`State`](#AcousticPressureResult.State)                                                           | State property.                                                                                          |
| [`Substep`](#AcousticPressureResult.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#AcousticPressureResult.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                              | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                         | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#AcousticPressureResult.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#AcousticPressureResult.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#AcousticPressureResult.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticPressureResult.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticPressureResult.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticPressureResult.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticPressureResult.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#AcousticPressureResult.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#AcousticPressureResult.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#AcousticPressureResult.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#AcousticPressureResult.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#AcousticPressureResult.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#AcousticPressureResult.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#AcousticPressureResult.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#AcousticPressureResult.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#AcousticPressureResult.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#AcousticPressureResult.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#AcousticPressureResult.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#AcousticPressureResult.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#AcousticPressureResult.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#AcousticPressureResult.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#AcousticPressureResult.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#AcousticPressureResult.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#AcousticPressureResult.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#AcousticPressureResult.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#AcousticPressureResult.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="AcousticPressureResult.Amplitude"></a>

### *property* AcousticPressureResult.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.AttachedRefs"></a>

### *property* AcousticPressureResult.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Average"></a>

### *property* AcousticPressureResult.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.By"></a>

### *property* AcousticPressureResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.CalculateTimeHistory"></a>

### *property* AcousticPressureResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Children"></a>

### *property* AcousticPressureResult.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ClsId"></a>

### *property* AcousticPressureResult.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.CombinationNumber"></a>

### *property* AcousticPressureResult.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Comments"></a>

### *property* AcousticPressureResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.CoordinateSystem"></a>

### *property* AcousticPressureResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.CrackFrontNumber"></a>

### *property* AcousticPressureResult.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.DampedFrequency"></a>

### *property* AcousticPressureResult.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.DataModelObjectCategory"></a>

### *property* AcousticPressureResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.DisplayOption"></a>

### *property* AcousticPressureResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.DisplayTime"></a>

### *property* AcousticPressureResult.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.DpfEvaluation"></a>

### *property* AcousticPressureResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Figures"></a>

### *property* AcousticPressureResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Frequency"></a>

### *property* AcousticPressureResult.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GlobalIDs"></a>

### *property* AcousticPressureResult.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GraphControlsXAxis"></a>

### *property* AcousticPressureResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GroupingFolder"></a>

### *property* AcousticPressureResult.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.IconName"></a>

### *property* AcousticPressureResult.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Identifier"></a>

### *property* AcousticPressureResult.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Images"></a>

### *property* AcousticPressureResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.InternalObject"></a>

### *property* AcousticPressureResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.IsSolved"></a>

### *property* AcousticPressureResult.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ItemType"></a>

### *property* AcousticPressureResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.IterationNumber"></a>

### *property* AcousticPressureResult.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.LoadStep"></a>

### *property* AcousticPressureResult.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticPressureResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticPressureResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticPressureResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticPressureResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.LoadStepNumber"></a>

### *property* AcousticPressureResult.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Location"></a>

### *property* AcousticPressureResult.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.LogarithmicDecrement"></a>

### *property* AcousticPressureResult.LogarithmicDecrement *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Maximum"></a>

### *property* AcousticPressureResult.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.MaximumOccursOn"></a>

### *property* AcousticPressureResult.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.MaximumOfMaximumOverTime"></a>

### *property* AcousticPressureResult.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.MaximumOfMinimumOverTime"></a>

### *property* AcousticPressureResult.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Minimum"></a>

### *property* AcousticPressureResult.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.MinimumOccursOn"></a>

### *property* AcousticPressureResult.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.MinimumOfMaximumOverTime"></a>

### *property* AcousticPressureResult.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.MinimumOfMinimumOverTime"></a>

### *property* AcousticPressureResult.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ModalDampingRatio"></a>

### *property* AcousticPressureResult.ModalDampingRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Mode"></a>

### *property* AcousticPressureResult.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Name"></a>

### *property* AcousticPressureResult.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.NamedSelections"></a>

### *property* AcousticPressureResult.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ObjectId"></a>

### *property* AcousticPressureResult.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ObjectState"></a>

### *property* AcousticPressureResult.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ObjectTags"></a>

### *property* AcousticPressureResult.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Parent"></a>

### *property* AcousticPressureResult.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Path"></a>

### *property* AcousticPressureResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.PlotData"></a>

### *property* AcousticPressureResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Properties"></a>

### *property* AcousticPressureResult.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.RPMSelection"></a>

### *property* AcousticPressureResult.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ReportedFrequency"></a>

### *property* AcousticPressureResult.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ResultType"></a>

### *property* AcousticPressureResult.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.RpmSetNumber"></a>

### *property* AcousticPressureResult.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ScopingMethod"></a>

### *property* AcousticPressureResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.SeparateDataByEntity"></a>

### *property* AcousticPressureResult.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.SetNumber"></a>

### *property* AcousticPressureResult.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.SolutionCombinationDriver"></a>

### *property* AcousticPressureResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.SolverComponentIDs"></a>

### *property* AcousticPressureResult.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Stability"></a>

### *property* AcousticPressureResult.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.State"></a>

### *property* AcousticPressureResult.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Substep"></a>

### *property* AcousticPressureResult.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Suppressed"></a>

### *property* AcousticPressureResult.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Surface"></a>

### *property* AcousticPressureResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.SurfaceCoating"></a>

### *property* AcousticPressureResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.SweepingPhase"></a>

### *property* AcousticPressureResult.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.TabularData"></a>

### *property* AcousticPressureResult.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Time"></a>

### *property* AcousticPressureResult.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticPressureResult.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticPressureResult.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticPressureResult.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticPressureResult.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Total"></a>

### *property* AcousticPressureResult.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.VisibleProperties"></a>

### *property* AcousticPressureResult.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayFilterBy"></a>

### *property* AcousticPressureResult.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayFrequencySelection"></a>

### *property* AcousticPressureResult.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayInterpolateData"></a>

### *property* AcousticPressureResult.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayLowerBand"></a>

### *property* AcousticPressureResult.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayMaxRPM"></a>

### *property* AcousticPressureResult.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayMinRPM"></a>

### *property* AcousticPressureResult.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayModeSelection"></a>

### *property* AcousticPressureResult.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayOrderSelection"></a>

### *property* AcousticPressureResult.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayRpmSelection"></a>

### *property* AcousticPressureResult.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayScopeToOrderLines"></a>

### *property* AcousticPressureResult.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayTimeSelection"></a>

### *property* AcousticPressureResult.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayUpperBand"></a>

### *property* AcousticPressureResult.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayXAxisMaximum"></a>

### *property* AcousticPressureResult.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayXAxisMinimum"></a>

### *property* AcousticPressureResult.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayYAxisMaximum"></a>

### *property* AcousticPressureResult.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallDisplayYAxisMinimum"></a>

### *property* AcousticPressureResult.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.WaterfallShowTextOnMosaic"></a>

### *property* AcousticPressureResult.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPressureResult.Activate"></a>

### AcousticPressureResult.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.AddAlert"></a>

### AcousticPressureResult.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.AddComment"></a>

### AcousticPressureResult.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.AddConvergence"></a>

### AcousticPressureResult.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.AddFigure"></a>

### AcousticPressureResult.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.AddImage"></a>

### AcousticPressureResult.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.BodyWhereMaximumOccurs"></a>

### AcousticPressureResult.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ClearGeneratedData"></a>

### AcousticPressureResult.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Copy"></a>

### AcousticPressureResult.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.CopyTo"></a>

### AcousticPressureResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.CreateObjRef"></a>

### AcousticPressureResult.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.CreateParameter"></a>

### AcousticPressureResult.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.CreateResultsAtAllSets"></a>

### AcousticPressureResult.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Cut"></a>

### AcousticPressureResult.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Delete"></a>

### AcousticPressureResult.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Duplicate"></a>

### AcousticPressureResult.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.DuplicateWithoutResults"></a>

### AcousticPressureResult.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Equals"></a>

### AcousticPressureResult.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.EvaluateAllResults"></a>

### AcousticPressureResult.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ExportAnimation"></a>

### AcousticPressureResult.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ExportToSTLFile"></a>

### AcousticPressureResult.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ExportToTextFile"></a>

### AcousticPressureResult.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### AcousticPressureResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.ExportToWAVFile"></a>

### AcousticPressureResult.ExportToWAVFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Export To WAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.FetchRemoteResult"></a>

### AcousticPressureResult.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.FetchRemoteResults"></a>

### AcousticPressureResult.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetAPIName"></a>

### AcousticPressureResult.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetAllProperties"></a>

### AcousticPressureResult.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetChildren"></a>

### AcousticPressureResult.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticPressureResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetDetailsView"></a>

### AcousticPressureResult.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetEnumName"></a>

### AcousticPressureResult.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetHashCode"></a>

### AcousticPressureResult.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetIconFile"></a>

### AcousticPressureResult.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetLifetimeService"></a>

### AcousticPressureResult.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetNodalValues"></a>

### AcousticPressureResult.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetObjectData"></a>

### AcousticPressureResult.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetParameter"></a>

### AcousticPressureResult.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetPath"></a>

### AcousticPressureResult.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetPropertyName"></a>

### AcousticPressureResult.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetPropertyValue"></a>

### AcousticPressureResult.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetQuantityName"></a>

### AcousticPressureResult.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetVisibleProperties"></a>

### AcousticPressureResult.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GetVisiblePropertyNames"></a>

### AcousticPressureResult.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GroupAllSimilarChildren"></a>

### AcousticPressureResult.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.GroupSimilarObjects"></a>

### AcousticPressureResult.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.InitializeLifetimeService"></a>

### AcousticPressureResult.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.IsPropertyEditable"></a>

### AcousticPressureResult.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPressureResult.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.IsPropertyVisible"></a>

### AcousticPressureResult.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPressureResult.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.Paste"></a>

### AcousticPressureResult.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.PromoteToNamedSelection"></a>

### AcousticPressureResult.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.PropertyByAPIName"></a>

### AcousticPressureResult.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.PropertyById"></a>

### AcousticPressureResult.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.PropertyByName"></a>

### AcousticPressureResult.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.RemoveFromGroup"></a>

### AcousticPressureResult.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.RemoveParameter"></a>

### AcousticPressureResult.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.RenameBasedOnDefinition"></a>

### AcousticPressureResult.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.RetrieveRemoteDPFResults"></a>

### AcousticPressureResult.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPressureResult.RetrieveResult"></a>

### AcousticPressureResult.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

