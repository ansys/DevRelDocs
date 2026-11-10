# `TotalElectricFluxDensity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectricFluxDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectricFluxDensity(internalObject: Any)

<a id="TotalElectricFluxDensity"></a>

### *class* TotalElectricFluxDensity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TotalElectricFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TotalElectricFluxDensity.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#TotalElectricFluxDensity.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#TotalElectricFluxDensity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#TotalElectricFluxDensity.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#TotalElectricFluxDensity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#TotalElectricFluxDensity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#TotalElectricFluxDensity.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#TotalElectricFluxDensity.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#TotalElectricFluxDensity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TotalElectricFluxDensity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TotalElectricFluxDensity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TotalElectricFluxDensity.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#TotalElectricFluxDensity.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#TotalElectricFluxDensity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#TotalElectricFluxDensity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#TotalElectricFluxDensity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#TotalElectricFluxDensity.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#TotalElectricFluxDensity.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#TotalElectricFluxDensity.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#TotalElectricFluxDensity.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#TotalElectricFluxDensity.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#TotalElectricFluxDensity.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#TotalElectricFluxDensity.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#TotalElectricFluxDensity.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#TotalElectricFluxDensity.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#TotalElectricFluxDensity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TotalElectricFluxDensity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TotalElectricFluxDensity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TotalElectricFluxDensity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TotalElectricFluxDensity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TotalElectricFluxDensity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TotalElectricFluxDensity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#TotalElectricFluxDensity.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#TotalElectricFluxDensity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TotalElectricFluxDensity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TotalElectricFluxDensity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TotalElectricFluxDensity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TotalElectricFluxDensity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#TotalElectricFluxDensity.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#TotalElectricFluxDensity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TotalElectricFluxDensity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TotalElectricFluxDensity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TotalElectricFluxDensity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TotalElectricFluxDensity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TotalElectricFluxDensity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TotalElectricFluxDensity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TotalElectricFluxDensity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#TotalElectricFluxDensity.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#TotalElectricFluxDensity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TotalElectricFluxDensity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TotalElectricFluxDensity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TotalElectricFluxDensity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TotalElectricFluxDensity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#TotalElectricFluxDensity.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#TotalElectricFluxDensity.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#TotalElectricFluxDensity.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#TotalElectricFluxDensity.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#TotalElectricFluxDensity.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#TotalElectricFluxDensity.Average)                                                       | Gets the Average.                                                                                        |
| [`AverageAcrossBodies`](#TotalElectricFluxDensity.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                    |
| [`By`](#TotalElectricFluxDensity.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#TotalElectricFluxDensity.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#TotalElectricFluxDensity.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#TotalElectricFluxDensity.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#TotalElectricFluxDensity.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#TotalElectricFluxDensity.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                     | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#TotalElectricFluxDensity.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#TotalElectricFluxDensity.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#TotalElectricFluxDensity.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#TotalElectricFluxDensity.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#TotalElectricFluxDensity.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`ElectricResultType`](#TotalElectricFluxDensity.ElectricResultType)                                 | Gets or sets the ElectricResultType.                                                                     |
| [`Figures`](#TotalElectricFluxDensity.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#TotalElectricFluxDensity.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#TotalElectricFluxDensity.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#TotalElectricFluxDensity.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#TotalElectricFluxDensity.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#TotalElectricFluxDensity.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#TotalElectricFluxDensity.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#TotalElectricFluxDensity.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#TotalElectricFluxDensity.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#TotalElectricFluxDensity.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#TotalElectricFluxDensity.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#TotalElectricFluxDensity.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#TotalElectricFluxDensity.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#TotalElectricFluxDensity.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#TotalElectricFluxDensity.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#TotalElectricFluxDensity.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#TotalElectricFluxDensity.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#TotalElectricFluxDensity.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#TotalElectricFluxDensity.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#TotalElectricFluxDensity.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#TotalElectricFluxDensity.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#TotalElectricFluxDensity.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#TotalElectricFluxDensity.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#TotalElectricFluxDensity.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#TotalElectricFluxDensity.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#TotalElectricFluxDensity.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#TotalElectricFluxDensity.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#TotalElectricFluxDensity.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                        | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#TotalElectricFluxDensity.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#TotalElectricFluxDensity.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#TotalElectricFluxDensity.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#TotalElectricFluxDensity.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                         | Path property.                                                                                           |
| [`PhaseIncrement`](#TotalElectricFluxDensity.PhaseIncrement)                                         | Gets or sets the PhaseIncrement.                                                                         |
| [`PlotData`](#TotalElectricFluxDensity.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#TotalElectricFluxDensity.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#TotalElectricFluxDensity.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ReportedFrequency`](#TotalElectricFluxDensity.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                              |
| [`ResultType`](#TotalElectricFluxDensity.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#TotalElectricFluxDensity.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#TotalElectricFluxDensity.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#TotalElectricFluxDensity.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#TotalElectricFluxDensity.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#TotalElectricFluxDensity.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#TotalElectricFluxDensity.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#TotalElectricFluxDensity.State)                                                           | State property.                                                                                          |
| [`Substep`](#TotalElectricFluxDensity.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#TotalElectricFluxDensity.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                           | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#TotalElectricFluxDensity.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#TotalElectricFluxDensity.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#TotalElectricFluxDensity.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#TotalElectricFluxDensity.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#TotalElectricFluxDensity.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#TotalElectricFluxDensity.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#TotalElectricFluxDensity.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#TotalElectricFluxDensity.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#TotalElectricFluxDensity.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#TotalElectricFluxDensity.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#TotalElectricFluxDensity.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#TotalElectricFluxDensity.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#TotalElectricFluxDensity.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#TotalElectricFluxDensity.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#TotalElectricFluxDensity.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#TotalElectricFluxDensity.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#TotalElectricFluxDensity.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#TotalElectricFluxDensity.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#TotalElectricFluxDensity.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#TotalElectricFluxDensity.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#TotalElectricFluxDensity.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#TotalElectricFluxDensity.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#TotalElectricFluxDensity.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#TotalElectricFluxDensity.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#TotalElectricFluxDensity.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#TotalElectricFluxDensity.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="TotalElectricFluxDensity.Amplitude"></a>

### *property* TotalElectricFluxDensity.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AttachedRefs"></a>

### *property* TotalElectricFluxDensity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Average"></a>

### *property* TotalElectricFluxDensity.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AverageAcrossBodies"></a>

### *property* TotalElectricFluxDensity.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.By"></a>

### *property* TotalElectricFluxDensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CalculateTimeHistory"></a>

### *property* TotalElectricFluxDensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Children"></a>

### *property* TotalElectricFluxDensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ClsId"></a>

### *property* TotalElectricFluxDensity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CombinationNumber"></a>

### *property* TotalElectricFluxDensity.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Comments"></a>

### *property* TotalElectricFluxDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CoordinateSystem"></a>

### *property* TotalElectricFluxDensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CrackFrontNumber"></a>

### *property* TotalElectricFluxDensity.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DataModelObjectCategory"></a>

### *property* TotalElectricFluxDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DisplayOption"></a>

### *property* TotalElectricFluxDensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DisplayTime"></a>

### *property* TotalElectricFluxDensity.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DpfEvaluation"></a>

### *property* TotalElectricFluxDensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ElectricResultType"></a>

### *property* TotalElectricFluxDensity.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Figures"></a>

### *property* TotalElectricFluxDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Frequency"></a>

### *property* TotalElectricFluxDensity.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GlobalIDs"></a>

### *property* TotalElectricFluxDensity.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GraphControlsXAxis"></a>

### *property* TotalElectricFluxDensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GroupingFolder"></a>

### *property* TotalElectricFluxDensity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.IconName"></a>

### *property* TotalElectricFluxDensity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Identifier"></a>

### *property* TotalElectricFluxDensity.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Images"></a>

### *property* TotalElectricFluxDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.InternalObject"></a>

### *property* TotalElectricFluxDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.IsSolved"></a>

### *property* TotalElectricFluxDensity.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ItemType"></a>

### *property* TotalElectricFluxDensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.IterationNumber"></a>

### *property* TotalElectricFluxDensity.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStep"></a>

### *property* TotalElectricFluxDensity.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepNumber"></a>

### *property* TotalElectricFluxDensity.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Location"></a>

### *property* TotalElectricFluxDensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Maximum"></a>

### *property* TotalElectricFluxDensity.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MaximumOccursOn"></a>

### *property* TotalElectricFluxDensity.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MaximumOfMaximumOverTime"></a>

### *property* TotalElectricFluxDensity.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MaximumOfMinimumOverTime"></a>

### *property* TotalElectricFluxDensity.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Minimum"></a>

### *property* TotalElectricFluxDensity.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MinimumOccursOn"></a>

### *property* TotalElectricFluxDensity.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MinimumOfMaximumOverTime"></a>

### *property* TotalElectricFluxDensity.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MinimumOfMinimumOverTime"></a>

### *property* TotalElectricFluxDensity.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Name"></a>

### *property* TotalElectricFluxDensity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.NamedSelections"></a>

### *property* TotalElectricFluxDensity.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ObjectId"></a>

### *property* TotalElectricFluxDensity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ObjectState"></a>

### *property* TotalElectricFluxDensity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ObjectTags"></a>

### *property* TotalElectricFluxDensity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Parent"></a>

### *property* TotalElectricFluxDensity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Path"></a>

### *property* TotalElectricFluxDensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PhaseIncrement"></a>

### *property* TotalElectricFluxDensity.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PlotData"></a>

### *property* TotalElectricFluxDensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Properties"></a>

### *property* TotalElectricFluxDensity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RPMSelection"></a>

### *property* TotalElectricFluxDensity.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ReportedFrequency"></a>

### *property* TotalElectricFluxDensity.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ResultType"></a>

### *property* TotalElectricFluxDensity.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RpmSetNumber"></a>

### *property* TotalElectricFluxDensity.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ScopingMethod"></a>

### *property* TotalElectricFluxDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SeparateDataByEntity"></a>

### *property* TotalElectricFluxDensity.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SetNumber"></a>

### *property* TotalElectricFluxDensity.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SolutionCombinationDriver"></a>

### *property* TotalElectricFluxDensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SolverComponentIDs"></a>

### *property* TotalElectricFluxDensity.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.State"></a>

### *property* TotalElectricFluxDensity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Substep"></a>

### *property* TotalElectricFluxDensity.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Suppressed"></a>

### *property* TotalElectricFluxDensity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Surface"></a>

### *property* TotalElectricFluxDensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SurfaceCoating"></a>

### *property* TotalElectricFluxDensity.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SweepingPhase"></a>

### *property* TotalElectricFluxDensity.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TabularData"></a>

### *property* TotalElectricFluxDensity.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Time"></a>

### *property* TotalElectricFluxDensity.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMaximumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMaximumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMinimumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMinimumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Total"></a>

### *property* TotalElectricFluxDensity.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.VisibleProperties"></a>

### *property* TotalElectricFluxDensity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayFilterBy"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayFrequencySelection"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayInterpolateData"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayLowerBand"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayMaxRPM"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayMinRPM"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayModeSelection"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayOrderSelection"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayRpmSelection"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayScopeToOrderLines"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayTimeSelection"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayUpperBand"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayXAxisMaximum"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayXAxisMinimum"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayYAxisMaximum"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallDisplayYAxisMinimum"></a>

### *property* TotalElectricFluxDensity.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.WaterfallShowTextOnMosaic"></a>

### *property* TotalElectricFluxDensity.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalElectricFluxDensity.Activate"></a>

### TotalElectricFluxDensity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddAlert"></a>

### TotalElectricFluxDensity.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddComment"></a>

### TotalElectricFluxDensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddConvergence"></a>

### TotalElectricFluxDensity.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddFigure"></a>

### TotalElectricFluxDensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddImage"></a>

### TotalElectricFluxDensity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.BodyWhereMaximumOccurs"></a>

### TotalElectricFluxDensity.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ClearGeneratedData"></a>

### TotalElectricFluxDensity.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Copy"></a>

### TotalElectricFluxDensity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CopyTo"></a>

### TotalElectricFluxDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CreateObjRef"></a>

### TotalElectricFluxDensity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CreateParameter"></a>

### TotalElectricFluxDensity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CreateResultsAtAllSets"></a>

### TotalElectricFluxDensity.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Cut"></a>

### TotalElectricFluxDensity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Delete"></a>

### TotalElectricFluxDensity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Duplicate"></a>

### TotalElectricFluxDensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DuplicateWithoutResults"></a>

### TotalElectricFluxDensity.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Equals"></a>

### TotalElectricFluxDensity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.EvaluateAllResults"></a>

### TotalElectricFluxDensity.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ExportAnimation"></a>

### TotalElectricFluxDensity.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ExportToSTLFile"></a>

### TotalElectricFluxDensity.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ExportToTextFile"></a>

### TotalElectricFluxDensity.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### TotalElectricFluxDensity.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.FetchRemoteResult"></a>

### TotalElectricFluxDensity.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.FetchRemoteResults"></a>

### TotalElectricFluxDensity.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetAPIName"></a>

### TotalElectricFluxDensity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetAllProperties"></a>

### TotalElectricFluxDensity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetChildren"></a>

### TotalElectricFluxDensity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TotalElectricFluxDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetDetailsView"></a>

### TotalElectricFluxDensity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetEnumName"></a>

### TotalElectricFluxDensity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetHashCode"></a>

### TotalElectricFluxDensity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetIconFile"></a>

### TotalElectricFluxDensity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetLifetimeService"></a>

### TotalElectricFluxDensity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetNodalValues"></a>

### TotalElectricFluxDensity.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetObjectData"></a>

### TotalElectricFluxDensity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetParameter"></a>

### TotalElectricFluxDensity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetPath"></a>

### TotalElectricFluxDensity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetPropertyName"></a>

### TotalElectricFluxDensity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetPropertyValue"></a>

### TotalElectricFluxDensity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetQuantityName"></a>

### TotalElectricFluxDensity.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetVisibleProperties"></a>

### TotalElectricFluxDensity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetVisiblePropertyNames"></a>

### TotalElectricFluxDensity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GroupAllSimilarChildren"></a>

### TotalElectricFluxDensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GroupSimilarObjects"></a>

### TotalElectricFluxDensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.InitializeLifetimeService"></a>

### TotalElectricFluxDensity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.IsPropertyEditable"></a>

### TotalElectricFluxDensity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TotalElectricFluxDensity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.IsPropertyVisible"></a>

### TotalElectricFluxDensity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TotalElectricFluxDensity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Paste"></a>

### TotalElectricFluxDensity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PromoteToNamedSelection"></a>

### TotalElectricFluxDensity.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PropertyByAPIName"></a>

### TotalElectricFluxDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PropertyById"></a>

### TotalElectricFluxDensity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PropertyByName"></a>

### TotalElectricFluxDensity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RemoveFromGroup"></a>

### TotalElectricFluxDensity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RemoveParameter"></a>

### TotalElectricFluxDensity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RenameBasedOnDefinition"></a>

### TotalElectricFluxDensity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RetrieveRemoteDPFResults"></a>

### TotalElectricFluxDensity.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RetrieveResult"></a>

### TotalElectricFluxDensity.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

