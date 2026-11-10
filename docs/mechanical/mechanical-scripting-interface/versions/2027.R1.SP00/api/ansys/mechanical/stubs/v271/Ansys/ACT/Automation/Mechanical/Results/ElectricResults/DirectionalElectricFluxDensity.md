# `DirectionalElectricFluxDensity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalElectricFluxDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalElectricFluxDensity(internalObject: Any)

<a id="DirectionalElectricFluxDensity"></a>

### *class* DirectionalElectricFluxDensity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DirectionalElectricFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#DirectionalElectricFluxDensity.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#DirectionalElectricFluxDensity.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#DirectionalElectricFluxDensity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#DirectionalElectricFluxDensity.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#DirectionalElectricFluxDensity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#DirectionalElectricFluxDensity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#DirectionalElectricFluxDensity.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#DirectionalElectricFluxDensity.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#DirectionalElectricFluxDensity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#DirectionalElectricFluxDensity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#DirectionalElectricFluxDensity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#DirectionalElectricFluxDensity.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#DirectionalElectricFluxDensity.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#DirectionalElectricFluxDensity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#DirectionalElectricFluxDensity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#DirectionalElectricFluxDensity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#DirectionalElectricFluxDensity.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#DirectionalElectricFluxDensity.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#DirectionalElectricFluxDensity.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#DirectionalElectricFluxDensity.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#DirectionalElectricFluxDensity.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#DirectionalElectricFluxDensity.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#DirectionalElectricFluxDensity.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#DirectionalElectricFluxDensity.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#DirectionalElectricFluxDensity.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#DirectionalElectricFluxDensity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#DirectionalElectricFluxDensity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#DirectionalElectricFluxDensity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#DirectionalElectricFluxDensity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#DirectionalElectricFluxDensity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#DirectionalElectricFluxDensity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#DirectionalElectricFluxDensity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#DirectionalElectricFluxDensity.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#DirectionalElectricFluxDensity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#DirectionalElectricFluxDensity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#DirectionalElectricFluxDensity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#DirectionalElectricFluxDensity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#DirectionalElectricFluxDensity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#DirectionalElectricFluxDensity.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#DirectionalElectricFluxDensity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#DirectionalElectricFluxDensity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#DirectionalElectricFluxDensity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#DirectionalElectricFluxDensity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#DirectionalElectricFluxDensity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#DirectionalElectricFluxDensity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#DirectionalElectricFluxDensity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#DirectionalElectricFluxDensity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#DirectionalElectricFluxDensity.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#DirectionalElectricFluxDensity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#DirectionalElectricFluxDensity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#DirectionalElectricFluxDensity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#DirectionalElectricFluxDensity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#DirectionalElectricFluxDensity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#DirectionalElectricFluxDensity.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#DirectionalElectricFluxDensity.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#DirectionalElectricFluxDensity.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#DirectionalElectricFluxDensity.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#DirectionalElectricFluxDensity.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#DirectionalElectricFluxDensity.Average)                                                       | Gets the Average.                                                                                        |
| [`AverageAcrossBodies`](#DirectionalElectricFluxDensity.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                    |
| [`By`](#DirectionalElectricFluxDensity.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#DirectionalElectricFluxDensity.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#DirectionalElectricFluxDensity.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#DirectionalElectricFluxDensity.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#DirectionalElectricFluxDensity.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#DirectionalElectricFluxDensity.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                           | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#DirectionalElectricFluxDensity.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#DirectionalElectricFluxDensity.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#DirectionalElectricFluxDensity.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#DirectionalElectricFluxDensity.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#DirectionalElectricFluxDensity.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`ElectricResultType`](#DirectionalElectricFluxDensity.ElectricResultType)                                 | Gets or sets the ElectricResultType.                                                                     |
| [`Figures`](#DirectionalElectricFluxDensity.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#DirectionalElectricFluxDensity.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#DirectionalElectricFluxDensity.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#DirectionalElectricFluxDensity.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#DirectionalElectricFluxDensity.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#DirectionalElectricFluxDensity.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#DirectionalElectricFluxDensity.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#DirectionalElectricFluxDensity.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#DirectionalElectricFluxDensity.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#DirectionalElectricFluxDensity.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#DirectionalElectricFluxDensity.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#DirectionalElectricFluxDensity.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#DirectionalElectricFluxDensity.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalElectricFluxDensity.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalElectricFluxDensity.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalElectricFluxDensity.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalElectricFluxDensity.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#DirectionalElectricFluxDensity.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#DirectionalElectricFluxDensity.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#DirectionalElectricFluxDensity.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#DirectionalElectricFluxDensity.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#DirectionalElectricFluxDensity.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#DirectionalElectricFluxDensity.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#DirectionalElectricFluxDensity.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#DirectionalElectricFluxDensity.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#DirectionalElectricFluxDensity.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#DirectionalElectricFluxDensity.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#DirectionalElectricFluxDensity.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                              | Gets or sets the NamedSelections.                                                                        |
| [`NormalOrientation`](#DirectionalElectricFluxDensity.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                                                      |
| [`ObjectId`](#DirectionalElectricFluxDensity.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#DirectionalElectricFluxDensity.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#DirectionalElectricFluxDensity.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#DirectionalElectricFluxDensity.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                               | Path property.                                                                                           |
| [`PhaseIncrement`](#DirectionalElectricFluxDensity.PhaseIncrement)                                         | Gets or sets the PhaseIncrement.                                                                         |
| [`PlotData`](#DirectionalElectricFluxDensity.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#DirectionalElectricFluxDensity.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#DirectionalElectricFluxDensity.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ReportedFrequency`](#DirectionalElectricFluxDensity.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                              |
| [`ResultType`](#DirectionalElectricFluxDensity.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#DirectionalElectricFluxDensity.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#DirectionalElectricFluxDensity.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#DirectionalElectricFluxDensity.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#DirectionalElectricFluxDensity.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#DirectionalElectricFluxDensity.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#DirectionalElectricFluxDensity.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#DirectionalElectricFluxDensity.State)                                                           | State property.                                                                                          |
| [`Substep`](#DirectionalElectricFluxDensity.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#DirectionalElectricFluxDensity.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                      | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                 | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#DirectionalElectricFluxDensity.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#DirectionalElectricFluxDensity.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#DirectionalElectricFluxDensity.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#DirectionalElectricFluxDensity.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#DirectionalElectricFluxDensity.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#DirectionalElectricFluxDensity.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#DirectionalElectricFluxDensity.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#DirectionalElectricFluxDensity.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#DirectionalElectricFluxDensity.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#DirectionalElectricFluxDensity.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#DirectionalElectricFluxDensity.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#DirectionalElectricFluxDensity.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#DirectionalElectricFluxDensity.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#DirectionalElectricFluxDensity.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#DirectionalElectricFluxDensity.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#DirectionalElectricFluxDensity.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#DirectionalElectricFluxDensity.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#DirectionalElectricFluxDensity.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#DirectionalElectricFluxDensity.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#DirectionalElectricFluxDensity.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#DirectionalElectricFluxDensity.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#DirectionalElectricFluxDensity.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#DirectionalElectricFluxDensity.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#DirectionalElectricFluxDensity.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#DirectionalElectricFluxDensity.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#DirectionalElectricFluxDensity.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalElectricFluxDensity.Amplitude"></a>

### *property* DirectionalElectricFluxDensity.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AttachedRefs"></a>

### *property* DirectionalElectricFluxDensity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Average"></a>

### *property* DirectionalElectricFluxDensity.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AverageAcrossBodies"></a>

### *property* DirectionalElectricFluxDensity.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.By"></a>

### *property* DirectionalElectricFluxDensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CalculateTimeHistory"></a>

### *property* DirectionalElectricFluxDensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Children"></a>

### *property* DirectionalElectricFluxDensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ClsId"></a>

### *property* DirectionalElectricFluxDensity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CombinationNumber"></a>

### *property* DirectionalElectricFluxDensity.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Comments"></a>

### *property* DirectionalElectricFluxDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CoordinateSystem"></a>

### *property* DirectionalElectricFluxDensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CrackFrontNumber"></a>

### *property* DirectionalElectricFluxDensity.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.DataModelObjectCategory"></a>

### *property* DirectionalElectricFluxDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.DisplayOption"></a>

### *property* DirectionalElectricFluxDensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.DisplayTime"></a>

### *property* DirectionalElectricFluxDensity.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.DpfEvaluation"></a>

### *property* DirectionalElectricFluxDensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ElectricResultType"></a>

### *property* DirectionalElectricFluxDensity.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Figures"></a>

### *property* DirectionalElectricFluxDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Frequency"></a>

### *property* DirectionalElectricFluxDensity.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GlobalIDs"></a>

### *property* DirectionalElectricFluxDensity.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GraphControlsXAxis"></a>

### *property* DirectionalElectricFluxDensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GroupingFolder"></a>

### *property* DirectionalElectricFluxDensity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.IconName"></a>

### *property* DirectionalElectricFluxDensity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Identifier"></a>

### *property* DirectionalElectricFluxDensity.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Images"></a>

### *property* DirectionalElectricFluxDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.InternalObject"></a>

### *property* DirectionalElectricFluxDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.IsSolved"></a>

### *property* DirectionalElectricFluxDensity.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ItemType"></a>

### *property* DirectionalElectricFluxDensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.IterationNumber"></a>

### *property* DirectionalElectricFluxDensity.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStep"></a>

### *property* DirectionalElectricFluxDensity.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalElectricFluxDensity.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalElectricFluxDensity.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalElectricFluxDensity.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalElectricFluxDensity.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.LoadStepNumber"></a>

### *property* DirectionalElectricFluxDensity.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Location"></a>

### *property* DirectionalElectricFluxDensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Maximum"></a>

### *property* DirectionalElectricFluxDensity.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MaximumOccursOn"></a>

### *property* DirectionalElectricFluxDensity.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MaximumOfMaximumOverTime"></a>

### *property* DirectionalElectricFluxDensity.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MaximumOfMinimumOverTime"></a>

### *property* DirectionalElectricFluxDensity.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Minimum"></a>

### *property* DirectionalElectricFluxDensity.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MinimumOccursOn"></a>

### *property* DirectionalElectricFluxDensity.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MinimumOfMaximumOverTime"></a>

### *property* DirectionalElectricFluxDensity.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.MinimumOfMinimumOverTime"></a>

### *property* DirectionalElectricFluxDensity.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Name"></a>

### *property* DirectionalElectricFluxDensity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.NamedSelections"></a>

### *property* DirectionalElectricFluxDensity.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.NormalOrientation"></a>

### *property* DirectionalElectricFluxDensity.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ObjectId"></a>

### *property* DirectionalElectricFluxDensity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ObjectState"></a>

### *property* DirectionalElectricFluxDensity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ObjectTags"></a>

### *property* DirectionalElectricFluxDensity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Parent"></a>

### *property* DirectionalElectricFluxDensity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Path"></a>

### *property* DirectionalElectricFluxDensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PhaseIncrement"></a>

### *property* DirectionalElectricFluxDensity.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PlotData"></a>

### *property* DirectionalElectricFluxDensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Properties"></a>

### *property* DirectionalElectricFluxDensity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.RPMSelection"></a>

### *property* DirectionalElectricFluxDensity.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ReportedFrequency"></a>

### *property* DirectionalElectricFluxDensity.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ResultType"></a>

### *property* DirectionalElectricFluxDensity.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.RpmSetNumber"></a>

### *property* DirectionalElectricFluxDensity.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ScopingMethod"></a>

### *property* DirectionalElectricFluxDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.SeparateDataByEntity"></a>

### *property* DirectionalElectricFluxDensity.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.SetNumber"></a>

### *property* DirectionalElectricFluxDensity.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.SolutionCombinationDriver"></a>

### *property* DirectionalElectricFluxDensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.SolverComponentIDs"></a>

### *property* DirectionalElectricFluxDensity.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.State"></a>

### *property* DirectionalElectricFluxDensity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Substep"></a>

### *property* DirectionalElectricFluxDensity.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Suppressed"></a>

### *property* DirectionalElectricFluxDensity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Surface"></a>

### *property* DirectionalElectricFluxDensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.SurfaceCoating"></a>

### *property* DirectionalElectricFluxDensity.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.SweepingPhase"></a>

### *property* DirectionalElectricFluxDensity.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.TabularData"></a>

### *property* DirectionalElectricFluxDensity.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Time"></a>

### *property* DirectionalElectricFluxDensity.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalElectricFluxDensity.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalElectricFluxDensity.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalElectricFluxDensity.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalElectricFluxDensity.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Total"></a>

### *property* DirectionalElectricFluxDensity.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.VisibleProperties"></a>

### *property* DirectionalElectricFluxDensity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayFilterBy"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayFrequencySelection"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayInterpolateData"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayLowerBand"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayMaxRPM"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayMinRPM"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayModeSelection"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayOrderSelection"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayRpmSelection"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayScopeToOrderLines"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayTimeSelection"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayUpperBand"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayXAxisMaximum"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayXAxisMinimum"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayYAxisMaximum"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallDisplayYAxisMinimum"></a>

### *property* DirectionalElectricFluxDensity.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.WaterfallShowTextOnMosaic"></a>

### *property* DirectionalElectricFluxDensity.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalElectricFluxDensity.Activate"></a>

### DirectionalElectricFluxDensity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AddAlert"></a>

### DirectionalElectricFluxDensity.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AddComment"></a>

### DirectionalElectricFluxDensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AddConvergence"></a>

### DirectionalElectricFluxDensity.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AddFigure"></a>

### DirectionalElectricFluxDensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.AddImage"></a>

### DirectionalElectricFluxDensity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.BodyWhereMaximumOccurs"></a>

### DirectionalElectricFluxDensity.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ClearGeneratedData"></a>

### DirectionalElectricFluxDensity.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Copy"></a>

### DirectionalElectricFluxDensity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CopyTo"></a>

### DirectionalElectricFluxDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CreateObjRef"></a>

### DirectionalElectricFluxDensity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CreateParameter"></a>

### DirectionalElectricFluxDensity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.CreateResultsAtAllSets"></a>

### DirectionalElectricFluxDensity.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Cut"></a>

### DirectionalElectricFluxDensity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Delete"></a>

### DirectionalElectricFluxDensity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Duplicate"></a>

### DirectionalElectricFluxDensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.DuplicateWithoutResults"></a>

### DirectionalElectricFluxDensity.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Equals"></a>

### DirectionalElectricFluxDensity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.EvaluateAllResults"></a>

### DirectionalElectricFluxDensity.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ExportAnimation"></a>

### DirectionalElectricFluxDensity.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ExportToSTLFile"></a>

### DirectionalElectricFluxDensity.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.ExportToTextFile"></a>

### DirectionalElectricFluxDensity.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### DirectionalElectricFluxDensity.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.FetchRemoteResult"></a>

### DirectionalElectricFluxDensity.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.FetchRemoteResults"></a>

### DirectionalElectricFluxDensity.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetAPIName"></a>

### DirectionalElectricFluxDensity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetAllProperties"></a>

### DirectionalElectricFluxDensity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetChildren"></a>

### DirectionalElectricFluxDensity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DirectionalElectricFluxDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetDetailsView"></a>

### DirectionalElectricFluxDensity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetEnumName"></a>

### DirectionalElectricFluxDensity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetHashCode"></a>

### DirectionalElectricFluxDensity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetIconFile"></a>

### DirectionalElectricFluxDensity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetLifetimeService"></a>

### DirectionalElectricFluxDensity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetNodalValues"></a>

### DirectionalElectricFluxDensity.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetObjectData"></a>

### DirectionalElectricFluxDensity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetParameter"></a>

### DirectionalElectricFluxDensity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetPath"></a>

### DirectionalElectricFluxDensity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetPropertyName"></a>

### DirectionalElectricFluxDensity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetPropertyValue"></a>

### DirectionalElectricFluxDensity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetQuantityName"></a>

### DirectionalElectricFluxDensity.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetVisibleProperties"></a>

### DirectionalElectricFluxDensity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GetVisiblePropertyNames"></a>

### DirectionalElectricFluxDensity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GroupAllSimilarChildren"></a>

### DirectionalElectricFluxDensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.GroupSimilarObjects"></a>

### DirectionalElectricFluxDensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.InitializeLifetimeService"></a>

### DirectionalElectricFluxDensity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.IsPropertyEditable"></a>

### DirectionalElectricFluxDensity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectionalElectricFluxDensity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.IsPropertyVisible"></a>

### DirectionalElectricFluxDensity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectionalElectricFluxDensity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.Paste"></a>

### DirectionalElectricFluxDensity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PromoteToNamedSelection"></a>

### DirectionalElectricFluxDensity.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PropertyByAPIName"></a>

### DirectionalElectricFluxDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PropertyById"></a>

### DirectionalElectricFluxDensity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.PropertyByName"></a>

### DirectionalElectricFluxDensity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.RemoveFromGroup"></a>

### DirectionalElectricFluxDensity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.RemoveParameter"></a>

### DirectionalElectricFluxDensity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.RenameBasedOnDefinition"></a>

### DirectionalElectricFluxDensity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.RetrieveRemoteDPFResults"></a>

### DirectionalElectricFluxDensity.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFluxDensity.RetrieveResult"></a>

### DirectionalElectricFluxDensity.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

