# `MullinsMaximumPreviousStrainEnergy`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MullinsMaximumPreviousStrainEnergy"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.MullinsMaximumPreviousStrainEnergy(internalObject: Any)

<a id="MullinsMaximumPreviousStrainEnergy"></a>

### *class* MullinsMaximumPreviousStrainEnergy(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MullinsMaximumPreviousStrainEnergy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MullinsMaximumPreviousStrainEnergy.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#MullinsMaximumPreviousStrainEnergy.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#MullinsMaximumPreviousStrainEnergy.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#MullinsMaximumPreviousStrainEnergy.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#MullinsMaximumPreviousStrainEnergy.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MullinsMaximumPreviousStrainEnergy.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#MullinsMaximumPreviousStrainEnergy.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#MullinsMaximumPreviousStrainEnergy.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#MullinsMaximumPreviousStrainEnergy.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MullinsMaximumPreviousStrainEnergy.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MullinsMaximumPreviousStrainEnergy.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MullinsMaximumPreviousStrainEnergy.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#MullinsMaximumPreviousStrainEnergy.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#MullinsMaximumPreviousStrainEnergy.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MullinsMaximumPreviousStrainEnergy.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MullinsMaximumPreviousStrainEnergy.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#MullinsMaximumPreviousStrainEnergy.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#MullinsMaximumPreviousStrainEnergy.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#MullinsMaximumPreviousStrainEnergy.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#MullinsMaximumPreviousStrainEnergy.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#MullinsMaximumPreviousStrainEnergy.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#MullinsMaximumPreviousStrainEnergy.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#MullinsMaximumPreviousStrainEnergy.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#MullinsMaximumPreviousStrainEnergy.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#MullinsMaximumPreviousStrainEnergy.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#MullinsMaximumPreviousStrainEnergy.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MullinsMaximumPreviousStrainEnergy.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MullinsMaximumPreviousStrainEnergy.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MullinsMaximumPreviousStrainEnergy.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MullinsMaximumPreviousStrainEnergy.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MullinsMaximumPreviousStrainEnergy.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MullinsMaximumPreviousStrainEnergy.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#MullinsMaximumPreviousStrainEnergy.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#MullinsMaximumPreviousStrainEnergy.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MullinsMaximumPreviousStrainEnergy.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MullinsMaximumPreviousStrainEnergy.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MullinsMaximumPreviousStrainEnergy.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MullinsMaximumPreviousStrainEnergy.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#MullinsMaximumPreviousStrainEnergy.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#MullinsMaximumPreviousStrainEnergy.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MullinsMaximumPreviousStrainEnergy.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MullinsMaximumPreviousStrainEnergy.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MullinsMaximumPreviousStrainEnergy.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MullinsMaximumPreviousStrainEnergy.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MullinsMaximumPreviousStrainEnergy.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MullinsMaximumPreviousStrainEnergy.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MullinsMaximumPreviousStrainEnergy.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#MullinsMaximumPreviousStrainEnergy.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#MullinsMaximumPreviousStrainEnergy.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MullinsMaximumPreviousStrainEnergy.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MullinsMaximumPreviousStrainEnergy.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MullinsMaximumPreviousStrainEnergy.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MullinsMaximumPreviousStrainEnergy.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MullinsMaximumPreviousStrainEnergy.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#MullinsMaximumPreviousStrainEnergy.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#MullinsMaximumPreviousStrainEnergy.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#MullinsMaximumPreviousStrainEnergy.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#MullinsMaximumPreviousStrainEnergy.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#MullinsMaximumPreviousStrainEnergy.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#MullinsMaximumPreviousStrainEnergy.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#MullinsMaximumPreviousStrainEnergy.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#MullinsMaximumPreviousStrainEnergy.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#MullinsMaximumPreviousStrainEnergy.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#MullinsMaximumPreviousStrainEnergy.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                               | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#MullinsMaximumPreviousStrainEnergy.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DamageResultType`](#MullinsMaximumPreviousStrainEnergy.DamageResultType)                                     | Gets the DamageResultType.                                                                               |
| [`DataModelObjectCategory`](#MullinsMaximumPreviousStrainEnergy.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#MullinsMaximumPreviousStrainEnergy.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#MullinsMaximumPreviousStrainEnergy.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#MullinsMaximumPreviousStrainEnergy.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#MullinsMaximumPreviousStrainEnergy.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#MullinsMaximumPreviousStrainEnergy.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#MullinsMaximumPreviousStrainEnergy.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#MullinsMaximumPreviousStrainEnergy.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#MullinsMaximumPreviousStrainEnergy.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#MullinsMaximumPreviousStrainEnergy.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#MullinsMaximumPreviousStrainEnergy.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#MullinsMaximumPreviousStrainEnergy.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#MullinsMaximumPreviousStrainEnergy.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#MullinsMaximumPreviousStrainEnergy.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#MullinsMaximumPreviousStrainEnergy.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#MullinsMaximumPreviousStrainEnergy.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#MullinsMaximumPreviousStrainEnergy.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#MullinsMaximumPreviousStrainEnergy.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#MullinsMaximumPreviousStrainEnergy.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#MullinsMaximumPreviousStrainEnergy.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#MullinsMaximumPreviousStrainEnergy.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#MullinsMaximumPreviousStrainEnergy.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#MullinsMaximumPreviousStrainEnergy.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#MullinsMaximumPreviousStrainEnergy.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#MullinsMaximumPreviousStrainEnergy.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#MullinsMaximumPreviousStrainEnergy.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Mode`](#MullinsMaximumPreviousStrainEnergy.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#MullinsMaximumPreviousStrainEnergy.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                                  | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#MullinsMaximumPreviousStrainEnergy.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#MullinsMaximumPreviousStrainEnergy.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#MullinsMaximumPreviousStrainEnergy.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#MullinsMaximumPreviousStrainEnergy.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                   | Path property.                                                                                           |
| [`Plies`](#MullinsMaximumPreviousStrainEnergy.Plies)                                                           | Plies property.                                                                                          |
| [`PlotData`](#MullinsMaximumPreviousStrainEnergy.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Ply`](#MullinsMaximumPreviousStrainEnergy.Ply)                                                               | Gets or sets the Ply selection.                                                                          |
| [`Position`](#Position)                                                             | Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.                  |
| [`Properties`](#MullinsMaximumPreviousStrainEnergy.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#MullinsMaximumPreviousStrainEnergy.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#MullinsMaximumPreviousStrainEnergy.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#MullinsMaximumPreviousStrainEnergy.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#MullinsMaximumPreviousStrainEnergy.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#MullinsMaximumPreviousStrainEnergy.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#MullinsMaximumPreviousStrainEnergy.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#MullinsMaximumPreviousStrainEnergy.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#MullinsMaximumPreviousStrainEnergy.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#MullinsMaximumPreviousStrainEnergy.State)                                                           | State property.                                                                                          |
| [`Substep`](#MullinsMaximumPreviousStrainEnergy.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#MullinsMaximumPreviousStrainEnergy.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                          | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                     | SurfaceCoating property.                                                                                 |
| [`TabularData`](#MullinsMaximumPreviousStrainEnergy.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#MullinsMaximumPreviousStrainEnergy.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#MullinsMaximumPreviousStrainEnergy.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#MullinsMaximumPreviousStrainEnergy.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#MullinsMaximumPreviousStrainEnergy.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#MullinsMaximumPreviousStrainEnergy.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="MullinsMaximumPreviousStrainEnergy.AttachedRefs"></a>

### *property* MullinsMaximumPreviousStrainEnergy.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Average"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.By"></a>

### *property* MullinsMaximumPreviousStrainEnergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CalculateTimeHistory"></a>

### *property* MullinsMaximumPreviousStrainEnergy.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Children"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ClsId"></a>

### *property* MullinsMaximumPreviousStrainEnergy.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CombinationNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Comments"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CoordinateSystem"></a>

### *property* MullinsMaximumPreviousStrainEnergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CrackFrontNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DamageResultType"></a>

### *property* MullinsMaximumPreviousStrainEnergy.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DataModelObjectCategory"></a>

### *property* MullinsMaximumPreviousStrainEnergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DisplayOption"></a>

### *property* MullinsMaximumPreviousStrainEnergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DisplayTime"></a>

### *property* MullinsMaximumPreviousStrainEnergy.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DpfEvaluation"></a>

### *property* MullinsMaximumPreviousStrainEnergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Figures"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GlobalIDs"></a>

### *property* MullinsMaximumPreviousStrainEnergy.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GraphControlsXAxis"></a>

### *property* MullinsMaximumPreviousStrainEnergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GroupingFolder"></a>

### *property* MullinsMaximumPreviousStrainEnergy.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.IconName"></a>

### *property* MullinsMaximumPreviousStrainEnergy.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Identifier"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Images"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.InternalObject"></a>

### *property* MullinsMaximumPreviousStrainEnergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.IsSolved"></a>

### *property* MullinsMaximumPreviousStrainEnergy.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ItemType"></a>

### *property* MullinsMaximumPreviousStrainEnergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.IterationNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStep"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMaximumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMinimumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMaximumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMinimumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.LoadStepNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Location"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Maximum"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MaximumOccursOn"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MaximumOfMaximumOverTime"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MaximumOfMinimumOverTime"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Minimum"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MinimumOccursOn"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MinimumOfMaximumOverTime"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.MinimumOfMinimumOverTime"></a>

### *property* MullinsMaximumPreviousStrainEnergy.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Mode"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Name"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.NamedSelections"></a>

### *property* MullinsMaximumPreviousStrainEnergy.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ObjectId"></a>

### *property* MullinsMaximumPreviousStrainEnergy.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ObjectState"></a>

### *property* MullinsMaximumPreviousStrainEnergy.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ObjectTags"></a>

### *property* MullinsMaximumPreviousStrainEnergy.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Parent"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Path"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Plies"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.PlotData"></a>

### *property* MullinsMaximumPreviousStrainEnergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Ply"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Position"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Properties"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.RPMSelection"></a>

### *property* MullinsMaximumPreviousStrainEnergy.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ResultType"></a>

### *property* MullinsMaximumPreviousStrainEnergy.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.RpmSetNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ScopingMethod"></a>

### *property* MullinsMaximumPreviousStrainEnergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.SeparateDataByEntity"></a>

### *property* MullinsMaximumPreviousStrainEnergy.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.SetNumber"></a>

### *property* MullinsMaximumPreviousStrainEnergy.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.SolutionCombinationDriver"></a>

### *property* MullinsMaximumPreviousStrainEnergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.SolverComponentIDs"></a>

### *property* MullinsMaximumPreviousStrainEnergy.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.State"></a>

### *property* MullinsMaximumPreviousStrainEnergy.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Substep"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Suppressed"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Surface"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.SurfaceCoating"></a>

### *property* MullinsMaximumPreviousStrainEnergy.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.TabularData"></a>

### *property* MullinsMaximumPreviousStrainEnergy.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Time"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMaximumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMinimumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMaximumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMinimumValues"></a>

### *property* MullinsMaximumPreviousStrainEnergy.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Total"></a>

### *property* MullinsMaximumPreviousStrainEnergy.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.VisibleProperties"></a>

### *property* MullinsMaximumPreviousStrainEnergy.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayFilterBy"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayFrequencySelection"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayInterpolateData"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayLowerBand"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayMaxRPM"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayMinRPM"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayModeSelection"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayOrderSelection"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayRpmSelection"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayScopeToOrderLines"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayTimeSelection"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayUpperBand"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayXAxisMaximum"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayXAxisMinimum"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayYAxisMaximum"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallDisplayYAxisMinimum"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.WaterfallShowTextOnMosaic"></a>

### *property* MullinsMaximumPreviousStrainEnergy.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MullinsMaximumPreviousStrainEnergy.Activate"></a>

### MullinsMaximumPreviousStrainEnergy.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.AddAlert"></a>

### MullinsMaximumPreviousStrainEnergy.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.AddComment"></a>

### MullinsMaximumPreviousStrainEnergy.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.AddConvergence"></a>

### MullinsMaximumPreviousStrainEnergy.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.AddFigure"></a>

### MullinsMaximumPreviousStrainEnergy.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.AddImage"></a>

### MullinsMaximumPreviousStrainEnergy.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.BodyWhereMaximumOccurs"></a>

### MullinsMaximumPreviousStrainEnergy.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ClearGeneratedData"></a>

### MullinsMaximumPreviousStrainEnergy.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Copy"></a>

### MullinsMaximumPreviousStrainEnergy.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CopyTo"></a>

### MullinsMaximumPreviousStrainEnergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CreateObjRef"></a>

### MullinsMaximumPreviousStrainEnergy.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CreateParameter"></a>

### MullinsMaximumPreviousStrainEnergy.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.CreateResultsAtAllSets"></a>

### MullinsMaximumPreviousStrainEnergy.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Cut"></a>

### MullinsMaximumPreviousStrainEnergy.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Delete"></a>

### MullinsMaximumPreviousStrainEnergy.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Duplicate"></a>

### MullinsMaximumPreviousStrainEnergy.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.DuplicateWithoutResults"></a>

### MullinsMaximumPreviousStrainEnergy.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Equals"></a>

### MullinsMaximumPreviousStrainEnergy.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.EvaluateAllResults"></a>

### MullinsMaximumPreviousStrainEnergy.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ExportAnimation"></a>

### MullinsMaximumPreviousStrainEnergy.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ExportToSTLFile"></a>

### MullinsMaximumPreviousStrainEnergy.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.ExportToTextFile"></a>

### MullinsMaximumPreviousStrainEnergy.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MullinsMaximumPreviousStrainEnergy.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.FetchRemoteResult"></a>

### MullinsMaximumPreviousStrainEnergy.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.FetchRemoteResults"></a>

### MullinsMaximumPreviousStrainEnergy.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetAPIName"></a>

### MullinsMaximumPreviousStrainEnergy.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetAllProperties"></a>

### MullinsMaximumPreviousStrainEnergy.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetChildren"></a>

### MullinsMaximumPreviousStrainEnergy.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MullinsMaximumPreviousStrainEnergy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetDetailsView"></a>

### MullinsMaximumPreviousStrainEnergy.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetEnumName"></a>

### MullinsMaximumPreviousStrainEnergy.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetHashCode"></a>

### MullinsMaximumPreviousStrainEnergy.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetIconFile"></a>

### MullinsMaximumPreviousStrainEnergy.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetLifetimeService"></a>

### MullinsMaximumPreviousStrainEnergy.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetNodalValues"></a>

### MullinsMaximumPreviousStrainEnergy.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetObjectData"></a>

### MullinsMaximumPreviousStrainEnergy.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetParameter"></a>

### MullinsMaximumPreviousStrainEnergy.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetPath"></a>

### MullinsMaximumPreviousStrainEnergy.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetPropertyName"></a>

### MullinsMaximumPreviousStrainEnergy.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetPropertyValue"></a>

### MullinsMaximumPreviousStrainEnergy.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetQuantityName"></a>

### MullinsMaximumPreviousStrainEnergy.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetVisibleProperties"></a>

### MullinsMaximumPreviousStrainEnergy.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GetVisiblePropertyNames"></a>

### MullinsMaximumPreviousStrainEnergy.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GroupAllSimilarChildren"></a>

### MullinsMaximumPreviousStrainEnergy.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.GroupSimilarObjects"></a>

### MullinsMaximumPreviousStrainEnergy.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.InitializeLifetimeService"></a>

### MullinsMaximumPreviousStrainEnergy.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.IsPropertyEditable"></a>

### MullinsMaximumPreviousStrainEnergy.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MullinsMaximumPreviousStrainEnergy.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.IsPropertyVisible"></a>

### MullinsMaximumPreviousStrainEnergy.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MullinsMaximumPreviousStrainEnergy.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.Paste"></a>

### MullinsMaximumPreviousStrainEnergy.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.PromoteToNamedSelection"></a>

### MullinsMaximumPreviousStrainEnergy.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.PropertyByAPIName"></a>

### MullinsMaximumPreviousStrainEnergy.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.PropertyById"></a>

### MullinsMaximumPreviousStrainEnergy.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.PropertyByName"></a>

### MullinsMaximumPreviousStrainEnergy.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.RemoveFromGroup"></a>

### MullinsMaximumPreviousStrainEnergy.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.RemoveParameter"></a>

### MullinsMaximumPreviousStrainEnergy.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.RenameBasedOnDefinition"></a>

### MullinsMaximumPreviousStrainEnergy.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.RetrieveRemoteDPFResults"></a>

### MullinsMaximumPreviousStrainEnergy.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="MullinsMaximumPreviousStrainEnergy.RetrieveResult"></a>

### MullinsMaximumPreviousStrainEnergy.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

