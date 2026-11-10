# `StrainResult`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StrainResults.StrainResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.StrainResult(internalObject: Any)

<a id="StrainResult"></a>

### *class* StrainResult(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a StrainResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#StrainResult.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#StrainResult.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#StrainResult.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#StrainResult.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#StrainResult.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#StrainResult.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#StrainResult.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#StrainResult.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#StrainResult.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#StrainResult.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#StrainResult.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#StrainResult.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#StrainResult.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#StrainResult.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#StrainResult.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#StrainResult.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#StrainResult.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#StrainResult.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#StrainResult.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#StrainResult.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#StrainResult.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#StrainResult.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#StrainResult.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#StrainResult.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#StrainResult.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#StrainResult.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#StrainResult.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#StrainResult.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#StrainResult.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#StrainResult.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#StrainResult.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#StrainResult.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#StrainResult.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#StrainResult.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#StrainResult.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#StrainResult.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#StrainResult.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#StrainResult.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#StrainResult.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#StrainResult.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#StrainResult.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#StrainResult.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#StrainResult.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#StrainResult.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#StrainResult.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#StrainResult.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#StrainResult.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#StrainResult.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#StrainResult.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#StrainResult.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#StrainResult.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#StrainResult.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#StrainResult.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#StrainResult.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#StrainResult.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#StrainResult.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#StrainResult.Amplitude)                                                   | Gets or sets the Amplitude.                                                                                                                                                                         |
| [`AttachedRefs`](#StrainResult.AttachedRefs)                                             | AttachedRefs property.                                                                                                                                                                              |
| [`Average`](#StrainResult.Average)                                                       | Gets the Average.                                                                                                                                                                                   |
| [`AverageAcrossBodies`](#StrainResult.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                                                                                                               |
| [`By`](#StrainResult.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                                            |
| [`CalculateTimeHistory`](#StrainResult.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                                                                                                              |
| [`Children`](#StrainResult.Children)                                                     | Gets the list of children.                                                                                                                                                                          |
| [`ClsId`](#StrainResult.ClsId)                                                           | ClsId property.                                                                                                                                                                                     |
| [`CombinationNumber`](#StrainResult.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                                                                                                              |
| [`Comments`](#StrainResult.Comments)                                                     | Gets the list of associated comments.                                                                                                                                                               |
| [`CoordinateSystem`](#CoordinateSystem)                         | Gets or sets the Coordinate System.                                                                                                                                                                 |
| [`CrackFrontNumber`](#StrainResult.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                                                                                                                  |
| [`CyclicMode`](#StrainResult.CyclicMode)                                                 | Gets or sets the CyclicMode.                                                                                                                                                                        |
| [`DataModelObjectCategory`](#StrainResult.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                                                                                                                        |
| [`DisplayOption`](#StrainResult.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                                                                                                                     |
| [`DisplayTime`](#StrainResult.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                                                                                                                       |
| [`DpfEvaluation`](#StrainResult.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                                                                                                                     |
| [`EnvironmentSelection`](#StrainResult.EnvironmentSelection)                             | Gets or sets the EnvironmentSelection.                                                                                                                                                              |
| [`Figures`](#StrainResult.Figures)                                                       | Gets the list of associated figures.                                                                                                                                                                |
| [`Frequency`](#StrainResult.Frequency)                                                   | Gets or sets the Frequency.                                                                                                                                                                         |
| [`GlobalIDs`](#StrainResult.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                                                                                                                         |
| [`GraphControlsXAxis`](#StrainResult.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                                                                                                                |
| [`GroupingFolder`](#StrainResult.GroupingFolder)                                         | GroupingFolder property.                                                                                                                                                                            |
| [`HarmonicIndex`](#StrainResult.HarmonicIndex)                                           | Gets or sets the HarmonicIndex.                                                                                                                                                                     |
| [`IconName`](#StrainResult.IconName)                                                     | IconName property.                                                                                                                                                                                  |
| [`Identifier`](#StrainResult.Identifier)                                                 | Gets or sets the Identifier.                                                                                                                                                                        |
| [`Images`](#StrainResult.Images)                                                         | Gets the list of associated images.                                                                                                                                                                 |
| [`InternalObject`](#StrainResult.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                                                                  |
| [`IsSolved`](#StrainResult.IsSolved)                                                     | Gets the IsSolved.                                                                                                                                                                                  |
| [`ItemType`](#StrainResult.ItemType)                                                     | Gets or sets the ItemType.                                                                                                                                                                          |
| [`IterationNumber`](#StrainResult.IterationNumber)                                       | Gets the IterationNumber.                                                                                                                                                                           |
| [`IterationStep`](#StrainResult.IterationStep)                                           | Gets or sets the IterationStep.                                                                                                                                                                     |
| [`LoadMultiplier`](#StrainResult.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                                                                                                            |
| [`LoadStep`](#StrainResult.LoadStep)                                                     | Gets the LoadStep.                                                                                                                                                                                  |
| [`LoadStepForMaximumOfMaximumValues`](#StrainResult.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                                                                                                                |
| [`LoadStepForMaximumOfMinimumValues`](#StrainResult.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMaximumValues`](#StrainResult.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMinimumValues`](#StrainResult.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                                                                                                                |
| [`LoadStepNumber`](#StrainResult.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                                                                                                                    |
| [`Location`](#StrainResult.Location)                                                     | Gets or sets the Location.                                                                                                                                                                          |
| [`Maximum`](#StrainResult.Maximum)                                                       | Gets the Maximum.                                                                                                                                                                                   |
| [`MaximumOccursOn`](#StrainResult.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                                                                                                           |
| [`MaximumOfMaximumOverTime`](#StrainResult.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                                                                                                                  |
| [`MaximumOfMinimumOverTime`](#StrainResult.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                                                                                                                  |
| [`Minimum`](#StrainResult.Minimum)                                                       | Gets the Minimum.                                                                                                                                                                                   |
| [`MinimumOccursOn`](#StrainResult.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                                                                                                           |
| [`MinimumOfMaximumOverTime`](#StrainResult.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                                                                                                                  |
| [`MinimumOfMinimumOverTime`](#StrainResult.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                                                                                                                  |
| [`Mode`](#StrainResult.Mode)                                                             | Gets or sets the Mode.                                                                                                                                                                              |
| [`Name`](#StrainResult.Name)                                                             | Name property.                                                                                                                                                                                      |
| [`NamedSelections`](#NamedSelections)                            | Gets or sets the NamedSelections.                                                                                                                                                                   |
| [`ObjectId`](#StrainResult.ObjectId)                                                     | ObjectId property.                                                                                                                                                                                  |
| [`ObjectState`](#StrainResult.ObjectState)                                               | ObjectState property.                                                                                                                                                                               |
| [`ObjectTags`](#StrainResult.ObjectTags)                                                 | ObjectTags property.                                                                                                                                                                                |
| [`Parent`](#StrainResult.Parent)                                                         | Parent property.                                                                                                                                                                                    |
| [`Path`](#Path)                                                             | Path property.                                                                                                                                                                                      |
| [`PhaseIncrement`](#StrainResult.PhaseIncrement)                                         | Gets or sets the PhaseIncrement.                                                                                                                                                                    |
| [`Plies`](#StrainResult.Plies)                                                           | Plies property.                                                                                                                                                                                     |
| [`PlotData`](#StrainResult.PlotData)                                                     | Gets the result table.                                                                                                                                                                              |
| [`Ply`](#StrainResult.Ply)                                                               | Gets or sets the Ply selection.                                                                                                                                                                     |
| [`Position`](#Position)                                       | Gets or sets the Position.                                                                                                                                                                          |
| [`Properties`](#StrainResult.Properties)                                                 | Gets the list of properties for this object.                                                                                                                                                        |
| [`RPMSelection`](#StrainResult.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                                            |
| [`ReportedFrequency`](#StrainResult.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                                                                                                                         |
| [`ResultType`](#StrainResult.ResultType)                                                 | Gets or sets the ResultType.                                                                                                                                                                        |
| [`RpmSetNumber`](#StrainResult.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                                                                                                                      |
| [`SaveAuxiliaryResult`](#StrainResult.SaveAuxiliaryResult)                               | Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise. |
| [`ScopingMethod`](#StrainResult.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                                                                                                                     |
| [`SeparateDataByEntity`](#StrainResult.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                                                                                                              |
| [`SetNumber`](#StrainResult.SetNumber)                                                   | Gets or sets the Set Number.                                                                                                                                                                        |
| [`SolutionCombinationDriver`](#StrainResult.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                                                                                                                         |
| [`SolverComponentIDs`](#StrainResult.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                                                                                                                |
| [`State`](#StrainResult.State)                                                           | State property.                                                                                                                                                                                     |
| [`StressStrainType`](#StrainResult.StressStrainType)                                     | Gets or sets the StressStrainType.                                                                                                                                                                  |
| [`SubScopeBy`](#StrainResult.SubScopeBy)                                                 | Gets or sets the SubScopeBy.                                                                                                                                                                        |
| [`Substep`](#StrainResult.Substep)                                                       | Gets the Substep.                                                                                                                                                                                   |
| [`Suppressed`](#StrainResult.Suppressed)                                                 | Gets or sets the Suppressed.                                                                                                                                                                        |
| [`Surface`](#Surface)                                                    | Surface property.                                                                                                                                                                                   |
| [`SurfaceCoating`](#SurfaceCoating)                               | SurfaceCoating property.                                                                                                                                                                            |
| [`SweepingPhase`](#StrainResult.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                                                                                                                     |
| [`TabularData`](#StrainResult.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.                                                                                                        |
| [`Time`](#StrainResult.Time)                                                             | Gets the Time.                                                                                                                                                                                      |
| [`TimeForMaximumOfMaximumValues`](#StrainResult.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                                                                                                                     |
| [`TimeForMaximumOfMinimumValues`](#StrainResult.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                                                                                                                     |
| [`TimeForMinimumOfMaximumValues`](#StrainResult.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                                                                                                                     |
| [`TimeForMinimumOfMinimumValues`](#StrainResult.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                                                                                                                     |
| [`Total`](#StrainResult.Total)                                                           | Gets the Total.                                                                                                                                                                                     |
| [`VisibleProperties`](#StrainResult.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                                                                       |
| [`WaterfallDisplayFilterBy`](#StrainResult.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                                                                                                                |
| [`WaterfallDisplayFrequencySelection`](#StrainResult.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                                                                                                               |
| [`WaterfallDisplayInterpolateData`](#StrainResult.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                                                                                                                         |
| [`WaterfallDisplayLowerBand`](#StrainResult.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayMaxRPM`](#StrainResult.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                                                                                                                   |
| [`WaterfallDisplayMinRPM`](#StrainResult.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                                                                                                                   |
| [`WaterfallDisplayModeSelection`](#StrainResult.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                                                                                                                    |
| [`WaterfallDisplayOrderSelection`](#StrainResult.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                                                                                                                   |
| [`WaterfallDisplayRpmSelection`](#StrainResult.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                                                                                                                     |
| [`WaterfallDisplayScopeToOrderLines`](#StrainResult.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                                                                                                                     |
| [`WaterfallDisplayTimeSelection`](#StrainResult.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                                                                                                                    |
| [`WaterfallDisplayUpperBand`](#StrainResult.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayXAxisMaximum`](#StrainResult.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayXAxisMinimum`](#StrainResult.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMaximum`](#StrainResult.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMinimum`](#StrainResult.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallShowTextOnMosaic`](#StrainResult.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="StrainResult.Amplitude"></a>

### *property* StrainResult.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AttachedRefs"></a>

### *property* StrainResult.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Average"></a>

### *property* StrainResult.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AverageAcrossBodies"></a>

### *property* StrainResult.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.By"></a>

### *property* StrainResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CalculateTimeHistory"></a>

### *property* StrainResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Children"></a>

### *property* StrainResult.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ClsId"></a>

### *property* StrainResult.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CombinationNumber"></a>

### *property* StrainResult.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Comments"></a>

### *property* StrainResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CoordinateSystem"></a>

### *property* StrainResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CrackFrontNumber"></a>

### *property* StrainResult.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CyclicMode"></a>

### *property* StrainResult.CyclicMode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.DataModelObjectCategory"></a>

### *property* StrainResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.DisplayOption"></a>

### *property* StrainResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.DisplayTime"></a>

### *property* StrainResult.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.DpfEvaluation"></a>

### *property* StrainResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.EnvironmentSelection"></a>

### *property* StrainResult.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Figures"></a>

### *property* StrainResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Frequency"></a>

### *property* StrainResult.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GlobalIDs"></a>

### *property* StrainResult.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GraphControlsXAxis"></a>

### *property* StrainResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GroupingFolder"></a>

### *property* StrainResult.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.HarmonicIndex"></a>

### *property* StrainResult.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.IconName"></a>

### *property* StrainResult.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Identifier"></a>

### *property* StrainResult.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Images"></a>

### *property* StrainResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.InternalObject"></a>

### *property* StrainResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.IsSolved"></a>

### *property* StrainResult.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ItemType"></a>

### *property* StrainResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.IterationNumber"></a>

### *property* StrainResult.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.IterationStep"></a>

### *property* StrainResult.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadMultiplier"></a>

### *property* StrainResult.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStep"></a>

### *property* StrainResult.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* StrainResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* StrainResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* StrainResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* StrainResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStepNumber"></a>

### *property* StrainResult.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Location"></a>

### *property* StrainResult.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Maximum"></a>

### *property* StrainResult.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MaximumOccursOn"></a>

### *property* StrainResult.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MaximumOfMaximumOverTime"></a>

### *property* StrainResult.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MaximumOfMinimumOverTime"></a>

### *property* StrainResult.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Minimum"></a>

### *property* StrainResult.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MinimumOccursOn"></a>

### *property* StrainResult.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MinimumOfMaximumOverTime"></a>

### *property* StrainResult.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MinimumOfMinimumOverTime"></a>

### *property* StrainResult.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Mode"></a>

### *property* StrainResult.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Name"></a>

### *property* StrainResult.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.NamedSelections"></a>

### *property* StrainResult.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ObjectId"></a>

### *property* StrainResult.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ObjectState"></a>

### *property* StrainResult.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ObjectTags"></a>

### *property* StrainResult.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Parent"></a>

### *property* StrainResult.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Path"></a>

### *property* StrainResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PhaseIncrement"></a>

### *property* StrainResult.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Plies"></a>

### *property* StrainResult.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PlotData"></a>

### *property* StrainResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Ply"></a>

### *property* StrainResult.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Position"></a>

### *property* StrainResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Properties"></a>

### *property* StrainResult.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.RPMSelection"></a>

### *property* StrainResult.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ReportedFrequency"></a>

### *property* StrainResult.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ResultType"></a>

### *property* StrainResult.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.RpmSetNumber"></a>

### *property* StrainResult.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SaveAuxiliaryResult"></a>

### *property* StrainResult.SaveAuxiliaryResult *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise.
Saving result data to disk improves result retrieval and display performance.
Note: The project file size will increase.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ScopingMethod"></a>

### *property* StrainResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SeparateDataByEntity"></a>

### *property* StrainResult.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SetNumber"></a>

### *property* StrainResult.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SolutionCombinationDriver"></a>

### *property* StrainResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SolverComponentIDs"></a>

### *property* StrainResult.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.State"></a>

### *property* StrainResult.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.StressStrainType"></a>

### *property* StrainResult.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SubScopeBy"></a>

### *property* StrainResult.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Substep"></a>

### *property* StrainResult.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Suppressed"></a>

### *property* StrainResult.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Surface"></a>

### *property* StrainResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SurfaceCoating"></a>

### *property* StrainResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SweepingPhase"></a>

### *property* StrainResult.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.TabularData"></a>

### *property* StrainResult.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Time"></a>

### *property* StrainResult.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.TimeForMaximumOfMaximumValues"></a>

### *property* StrainResult.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.TimeForMaximumOfMinimumValues"></a>

### *property* StrainResult.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.TimeForMinimumOfMaximumValues"></a>

### *property* StrainResult.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.TimeForMinimumOfMinimumValues"></a>

### *property* StrainResult.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Total"></a>

### *property* StrainResult.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.VisibleProperties"></a>

### *property* StrainResult.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayFilterBy"></a>

### *property* StrainResult.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayFrequencySelection"></a>

### *property* StrainResult.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayInterpolateData"></a>

### *property* StrainResult.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayLowerBand"></a>

### *property* StrainResult.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayMaxRPM"></a>

### *property* StrainResult.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayMinRPM"></a>

### *property* StrainResult.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayModeSelection"></a>

### *property* StrainResult.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayOrderSelection"></a>

### *property* StrainResult.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayRpmSelection"></a>

### *property* StrainResult.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayScopeToOrderLines"></a>

### *property* StrainResult.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayTimeSelection"></a>

### *property* StrainResult.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayUpperBand"></a>

### *property* StrainResult.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayXAxisMaximum"></a>

### *property* StrainResult.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayXAxisMinimum"></a>

### *property* StrainResult.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayYAxisMaximum"></a>

### *property* StrainResult.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallDisplayYAxisMinimum"></a>

### *property* StrainResult.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallShowTextOnMosaic"></a>

### *property* StrainResult.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StrainResult.Activate"></a>

### StrainResult.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AddAlert"></a>

### StrainResult.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AddComment"></a>

### StrainResult.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AddConvergence"></a>

### StrainResult.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AddFigure"></a>

### StrainResult.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AddImage"></a>

### StrainResult.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.BodyWhereMaximumOccurs"></a>

### StrainResult.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ClearGeneratedData"></a>

### StrainResult.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Copy"></a>

### StrainResult.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CopyTo"></a>

### StrainResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CreateObjRef"></a>

### StrainResult.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CreateParameter"></a>

### StrainResult.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CreateResultsAtAllSets"></a>

### StrainResult.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Cut"></a>

### StrainResult.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Delete"></a>

### StrainResult.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Duplicate"></a>

### StrainResult.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.DuplicateWithoutResults"></a>

### StrainResult.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Equals"></a>

### StrainResult.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.EvaluateAllResults"></a>

### StrainResult.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ExportAnimation"></a>

### StrainResult.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ExportToSTLFile"></a>

### StrainResult.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ExportToTextFile"></a>

### StrainResult.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### StrainResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.FetchRemoteResult"></a>

### StrainResult.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.FetchRemoteResults"></a>

### StrainResult.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetAPIName"></a>

### StrainResult.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetAllProperties"></a>

### StrainResult.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetChildren"></a>

### StrainResult.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### StrainResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetDetailsView"></a>

### StrainResult.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetEnumName"></a>

### StrainResult.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetHashCode"></a>

### StrainResult.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetIconFile"></a>

### StrainResult.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetLifetimeService"></a>

### StrainResult.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetNodalValues"></a>

### StrainResult.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetObjectData"></a>

### StrainResult.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetParameter"></a>

### StrainResult.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetPath"></a>

### StrainResult.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetPropertyName"></a>

### StrainResult.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetPropertyValue"></a>

### StrainResult.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetQuantityName"></a>

### StrainResult.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetVisibleProperties"></a>

### StrainResult.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetVisiblePropertyNames"></a>

### StrainResult.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GroupAllSimilarChildren"></a>

### StrainResult.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GroupSimilarObjects"></a>

### StrainResult.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.InitializeLifetimeService"></a>

### StrainResult.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.IsPropertyEditable"></a>

### StrainResult.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### StrainResult.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.IsPropertyVisible"></a>

### StrainResult.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### StrainResult.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Paste"></a>

### StrainResult.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PromoteToNamedSelection"></a>

### StrainResult.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PropertyByAPIName"></a>

### StrainResult.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PropertyById"></a>

### StrainResult.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PropertyByName"></a>

### StrainResult.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.RemoveFromGroup"></a>

### StrainResult.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.RemoveParameter"></a>

### StrainResult.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.RenameBasedOnDefinition"></a>

### StrainResult.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.RetrieveRemoteDPFResults"></a>

### StrainResult.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.RetrieveResult"></a>

### StrainResult.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

