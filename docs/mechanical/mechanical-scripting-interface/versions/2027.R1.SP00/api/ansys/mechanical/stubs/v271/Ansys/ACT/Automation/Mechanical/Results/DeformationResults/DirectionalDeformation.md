# `DirectionalDeformation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalDeformation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalDeformation(internalObject: Any)

<a id="DirectionalDeformation"></a>

### *class* DirectionalDeformation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DirectionalDeformation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#DirectionalDeformation.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#DirectionalDeformation.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#DirectionalDeformation.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#DirectionalDeformation.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#DirectionalDeformation.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#DirectionalDeformation.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#DirectionalDeformation.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#DirectionalDeformation.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#DirectionalDeformation.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#DirectionalDeformation.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#DirectionalDeformation.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#DirectionalDeformation.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#DirectionalDeformation.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#DirectionalDeformation.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#DirectionalDeformation.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#DirectionalDeformation.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#DirectionalDeformation.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#DirectionalDeformation.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#DirectionalDeformation.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#DirectionalDeformation.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#DirectionalDeformation.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#DirectionalDeformation.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#DirectionalDeformation.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#DirectionalDeformation.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#DirectionalDeformation.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#DirectionalDeformation.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#DirectionalDeformation.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#DirectionalDeformation.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#DirectionalDeformation.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#DirectionalDeformation.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#DirectionalDeformation.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#DirectionalDeformation.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#DirectionalDeformation.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#DirectionalDeformation.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#DirectionalDeformation.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#DirectionalDeformation.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#DirectionalDeformation.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#DirectionalDeformation.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#DirectionalDeformation.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#DirectionalDeformation.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#DirectionalDeformation.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#DirectionalDeformation.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#DirectionalDeformation.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#DirectionalDeformation.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#DirectionalDeformation.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#DirectionalDeformation.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#DirectionalDeformation.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#DirectionalDeformation.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#DirectionalDeformation.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#DirectionalDeformation.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#DirectionalDeformation.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#DirectionalDeformation.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#DirectionalDeformation.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#DirectionalDeformation.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#DirectionalDeformation.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#DirectionalDeformation.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AccelerationInG`](#DirectionalDeformation.AccelerationInG)                                       | Gets or sets the AccelerationInG.                                                                                                                                                                   |
| [`AllowPhaseSweep`](#DirectionalDeformation.AllowPhaseSweep)                                       | Gets or sets the AllowPhaseSweep.                                                                                                                                                                   |
| [`Amplitude`](#DirectionalDeformation.Amplitude)                                                   | Gets or sets the Amplitude.                                                                                                                                                                         |
| [`AttachedRefs`](#DirectionalDeformation.AttachedRefs)                                             | AttachedRefs property.                                                                                                                                                                              |
| [`Average`](#DirectionalDeformation.Average)                                                       | Gets the Average.                                                                                                                                                                                   |
| [`By`](#DirectionalDeformation.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                                            |
| [`CalculateTimeHistory`](#DirectionalDeformation.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                                                                                                              |
| [`Children`](#DirectionalDeformation.Children)                                                     | Gets the list of children.                                                                                                                                                                          |
| [`ClsId`](#DirectionalDeformation.ClsId)                                                           | ClsId property.                                                                                                                                                                                     |
| [`CombinationNumber`](#DirectionalDeformation.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                                                                                                              |
| [`Comments`](#DirectionalDeformation.Comments)                                                     | Gets the list of associated comments.                                                                                                                                                               |
| [`CoordinateSystem`](#CoordinateSystem)                                   | Gets or sets the Coordinate System.                                                                                                                                                                 |
| [`CrackFrontNumber`](#DirectionalDeformation.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                                                                                                                  |
| [`CyclicMode`](#DirectionalDeformation.CyclicMode)                                                 | Gets or sets the CyclicMode.                                                                                                                                                                        |
| [`CyclicPhase`](#DirectionalDeformation.CyclicPhase)                                               | Gets or sets the CyclicPhase.                                                                                                                                                                       |
| [`DampedFrequency`](#DirectionalDeformation.DampedFrequency)                                       | Gets the DampedFrequency.                                                                                                                                                                           |
| [`DataModelObjectCategory`](#DirectionalDeformation.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                                                                                                                        |
| [`DeformationType`](#DirectionalDeformation.DeformationType)                                       | Gets or sets the DeformationType.                                                                                                                                                                   |
| [`DisplayOption`](#DirectionalDeformation.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                                                                                                                     |
| [`DisplayTime`](#DirectionalDeformation.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                                                                                                                       |
| [`DpfEvaluation`](#DirectionalDeformation.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                                                                                                                     |
| [`EnvironmentSelection`](#DirectionalDeformation.EnvironmentSelection)                             | Gets or sets the EnvironmentSelection.                                                                                                                                                              |
| [`Figures`](#DirectionalDeformation.Figures)                                                       | Gets the list of associated figures.                                                                                                                                                                |
| [`Frequency`](#DirectionalDeformation.Frequency)                                                   | Gets or sets the Frequency.                                                                                                                                                                         |
| [`GlobalIDs`](#DirectionalDeformation.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                                                                                                                         |
| [`GraphControlsXAxis`](#DirectionalDeformation.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                                                                                                                |
| [`GroupingFolder`](#DirectionalDeformation.GroupingFolder)                                         | GroupingFolder property.                                                                                                                                                                            |
| [`HarmonicIndex`](#DirectionalDeformation.HarmonicIndex)                                           | Gets or sets the HarmonicIndex.                                                                                                                                                                     |
| [`IconName`](#DirectionalDeformation.IconName)                                                     | IconName property.                                                                                                                                                                                  |
| [`Identifier`](#DirectionalDeformation.Identifier)                                                 | Gets or sets the Identifier.                                                                                                                                                                        |
| [`Images`](#DirectionalDeformation.Images)                                                         | Gets the list of associated images.                                                                                                                                                                 |
| [`InternalObject`](#DirectionalDeformation.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                                                                  |
| [`IsSolved`](#DirectionalDeformation.IsSolved)                                                     | Gets the IsSolved.                                                                                                                                                                                  |
| [`ItemType`](#DirectionalDeformation.ItemType)                                                     | Gets or sets the ItemType.                                                                                                                                                                          |
| [`IterationNumber`](#DirectionalDeformation.IterationNumber)                                       | Gets the IterationNumber.                                                                                                                                                                           |
| [`IterationStep`](#DirectionalDeformation.IterationStep)                                           | Gets or sets the IterationStep.                                                                                                                                                                     |
| [`LoadMultiplier`](#DirectionalDeformation.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                                                                                                            |
| [`LoadStep`](#DirectionalDeformation.LoadStep)                                                     | Gets the LoadStep.                                                                                                                                                                                  |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalDeformation.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                                                                                                                |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalDeformation.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalDeformation.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalDeformation.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                                                                                                                |
| [`LoadStepNumber`](#DirectionalDeformation.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                                                                                                                    |
| [`Location`](#DirectionalDeformation.Location)                                                     | Gets or sets the Location.                                                                                                                                                                          |
| [`LogarithmicDecrement`](#DirectionalDeformation.LogarithmicDecrement)                             | Gets the LogarithmicDecrement.                                                                                                                                                                      |
| [`Maximum`](#DirectionalDeformation.Maximum)                                                       | Gets the Maximum.                                                                                                                                                                                   |
| [`MaximumOccursOn`](#DirectionalDeformation.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                                                                                                           |
| [`MaximumOfMaximumOverTime`](#DirectionalDeformation.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                                                                                                                  |
| [`MaximumOfMinimumOverTime`](#DirectionalDeformation.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                                                                                                                  |
| [`Minimum`](#DirectionalDeformation.Minimum)                                                       | Gets the Minimum.                                                                                                                                                                                   |
| [`MinimumOccursOn`](#DirectionalDeformation.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                                                                                                           |
| [`MinimumOfMaximumOverTime`](#DirectionalDeformation.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                                                                                                                  |
| [`MinimumOfMinimumOverTime`](#DirectionalDeformation.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                                                                                                                  |
| [`ModalDampingRatio`](#DirectionalDeformation.ModalDampingRatio)                                   | Gets the ModalDampingRatio.                                                                                                                                                                         |
| [`ModalResultInMSUPAnalysis`](#DirectionalDeformation.ModalResultInMSUPAnalysis)                   | Gets or sets the ModalResultInMSUPAnalysis. Enables/disables the Modal Result option in Mode Superposition analysis.                                                                                |
| [`Mode`](#DirectionalDeformation.Mode)                                                             | Gets or sets the Mode.                                                                                                                                                                              |
| [`ModeNumber`](#DirectionalDeformation.ModeNumber)                                                 | Gets or sets the mode number (index of eigenmode) to visualize the corresponding mode shape.                                                                                                        |
| [`Name`](#DirectionalDeformation.Name)                                                             | Name property.                                                                                                                                                                                      |
| [`NamedSelections`](#NamedSelections)                                      | Gets or sets the NamedSelections.                                                                                                                                                                   |
| [`NormalOrientation`](#DirectionalDeformation.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                                                                                                                                                 |
| [`ObjectId`](#DirectionalDeformation.ObjectId)                                                     | ObjectId property.                                                                                                                                                                                  |
| [`ObjectState`](#DirectionalDeformation.ObjectState)                                               | ObjectState property.                                                                                                                                                                               |
| [`ObjectTags`](#DirectionalDeformation.ObjectTags)                                                 | ObjectTags property.                                                                                                                                                                                |
| [`Parent`](#DirectionalDeformation.Parent)                                                         | Parent property.                                                                                                                                                                                    |
| [`Path`](#Path)                                                                       | Path property.                                                                                                                                                                                      |
| [`PhaseIncrement`](#DirectionalDeformation.PhaseIncrement)                                         | Gets or sets the PhaseIncrement.                                                                                                                                                                    |
| [`PlotData`](#DirectionalDeformation.PlotData)                                                     | Gets the result table.                                                                                                                                                                              |
| [`Probability`](#DirectionalDeformation.Probability)                                               | Gets the Probability.                                                                                                                                                                               |
| [`Properties`](#DirectionalDeformation.Properties)                                                 | Gets the list of properties for this object.                                                                                                                                                        |
| [`RPMSelection`](#DirectionalDeformation.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                                            |
| [`Reference`](#DirectionalDeformation.Reference)                                                   | Gets the Reference.                                                                                                                                                                                 |
| [`ReportedFrequency`](#DirectionalDeformation.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                                                                                                                         |
| [`ResultType`](#DirectionalDeformation.ResultType)                                                 | Gets or sets the ResultType.                                                                                                                                                                        |
| [`RpmSetNumber`](#DirectionalDeformation.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                                                                                                                      |
| [`SaveAuxiliaryResult`](#DirectionalDeformation.SaveAuxiliaryResult)                               | Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise. |
| [`ScaleFactor`](#DirectionalDeformation.ScaleFactor)                                               | Gets or sets the ScaleFactor.                                                                                                                                                                       |
| [`ScaleFactorValue`](#DirectionalDeformation.ScaleFactorValue)                                     | Gets or sets the ScaleFactorValue.                                                                                                                                                                  |
| [`ScopingMethod`](#DirectionalDeformation.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                                                                                                                     |
| [`SeparateDataByEntity`](#DirectionalDeformation.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                                                                                                              |
| [`SetNumber`](#DirectionalDeformation.SetNumber)                                                   | Gets or sets the Set Number.                                                                                                                                                                        |
| [`SolutionCombinationDriver`](#DirectionalDeformation.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                                                                                                                         |
| [`SolverComponentIDs`](#DirectionalDeformation.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                                                                                                                |
| [`Stability`](#DirectionalDeformation.Stability)                                                   | Gets the Stability.                                                                                                                                                                                 |
| [`State`](#DirectionalDeformation.State)                                                           | State property.                                                                                                                                                                                     |
| [`Substep`](#DirectionalDeformation.Substep)                                                       | Gets the Substep.                                                                                                                                                                                   |
| [`Suppressed`](#DirectionalDeformation.Suppressed)                                                 | Gets or sets the Suppressed.                                                                                                                                                                        |
| [`Surface`](#Surface)                                                              | Surface property.                                                                                                                                                                                   |
| [`SurfaceCoating`](#SurfaceCoating)                                         | SurfaceCoating property.                                                                                                                                                                            |
| [`SweepingPhase`](#DirectionalDeformation.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                                                                                                                     |
| [`TabularData`](#DirectionalDeformation.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.                                                                                                        |
| [`Time`](#DirectionalDeformation.Time)                                                             | Gets the Time.                                                                                                                                                                                      |
| [`TimeForMaximumOfMaximumValues`](#DirectionalDeformation.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                                                                                                                     |
| [`TimeForMaximumOfMinimumValues`](#DirectionalDeformation.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                                                                                                                     |
| [`TimeForMinimumOfMaximumValues`](#DirectionalDeformation.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                                                                                                                     |
| [`TimeForMinimumOfMinimumValues`](#DirectionalDeformation.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                                                                                                                     |
| [`Total`](#DirectionalDeformation.Total)                                                           | Gets the Total.                                                                                                                                                                                     |
| [`VisibleProperties`](#DirectionalDeformation.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                                                                       |
| [`WaterfallDisplayFilterBy`](#DirectionalDeformation.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                                                                                                                |
| [`WaterfallDisplayFrequencySelection`](#DirectionalDeformation.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                                                                                                               |
| [`WaterfallDisplayInterpolateData`](#DirectionalDeformation.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                                                                                                                         |
| [`WaterfallDisplayLowerBand`](#DirectionalDeformation.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayMaxRPM`](#DirectionalDeformation.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                                                                                                                   |
| [`WaterfallDisplayMinRPM`](#DirectionalDeformation.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                                                                                                                   |
| [`WaterfallDisplayModeSelection`](#DirectionalDeformation.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                                                                                                                    |
| [`WaterfallDisplayOrderSelection`](#DirectionalDeformation.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                                                                                                                   |
| [`WaterfallDisplayRpmSelection`](#DirectionalDeformation.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                                                                                                                     |
| [`WaterfallDisplayScopeToOrderLines`](#DirectionalDeformation.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                                                                                                                     |
| [`WaterfallDisplayTimeSelection`](#DirectionalDeformation.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                                                                                                                    |
| [`WaterfallDisplayUpperBand`](#DirectionalDeformation.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayXAxisMaximum`](#DirectionalDeformation.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayXAxisMinimum`](#DirectionalDeformation.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMaximum`](#DirectionalDeformation.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMinimum`](#DirectionalDeformation.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallShowTextOnMosaic`](#DirectionalDeformation.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalDeformation.AccelerationInG"></a>

### *property* DirectionalDeformation.AccelerationInG *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.AllowPhaseSweep"></a>

### *property* DirectionalDeformation.AllowPhaseSweep *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Amplitude"></a>

### *property* DirectionalDeformation.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.AttachedRefs"></a>

### *property* DirectionalDeformation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Average"></a>

### *property* DirectionalDeformation.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.By"></a>

### *property* DirectionalDeformation.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.CalculateTimeHistory"></a>

### *property* DirectionalDeformation.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Children"></a>

### *property* DirectionalDeformation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ClsId"></a>

### *property* DirectionalDeformation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.CombinationNumber"></a>

### *property* DirectionalDeformation.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Comments"></a>

### *property* DirectionalDeformation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.CoordinateSystem"></a>

### *property* DirectionalDeformation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.CrackFrontNumber"></a>

### *property* DirectionalDeformation.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.CyclicMode"></a>

### *property* DirectionalDeformation.CyclicMode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.CyclicPhase"></a>

### *property* DirectionalDeformation.CyclicPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.DampedFrequency"></a>

### *property* DirectionalDeformation.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.DataModelObjectCategory"></a>

### *property* DirectionalDeformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.DeformationType"></a>

### *property* DirectionalDeformation.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.DisplayOption"></a>

### *property* DirectionalDeformation.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.DisplayTime"></a>

### *property* DirectionalDeformation.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.DpfEvaluation"></a>

### *property* DirectionalDeformation.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.EnvironmentSelection"></a>

### *property* DirectionalDeformation.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Figures"></a>

### *property* DirectionalDeformation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Frequency"></a>

### *property* DirectionalDeformation.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GlobalIDs"></a>

### *property* DirectionalDeformation.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GraphControlsXAxis"></a>

### *property* DirectionalDeformation.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GroupingFolder"></a>

### *property* DirectionalDeformation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.HarmonicIndex"></a>

### *property* DirectionalDeformation.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.IconName"></a>

### *property* DirectionalDeformation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Identifier"></a>

### *property* DirectionalDeformation.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Images"></a>

### *property* DirectionalDeformation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.InternalObject"></a>

### *property* DirectionalDeformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.IsSolved"></a>

### *property* DirectionalDeformation.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ItemType"></a>

### *property* DirectionalDeformation.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.IterationNumber"></a>

### *property* DirectionalDeformation.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.IterationStep"></a>

### *property* DirectionalDeformation.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.LoadMultiplier"></a>

### *property* DirectionalDeformation.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.LoadStep"></a>

### *property* DirectionalDeformation.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalDeformation.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalDeformation.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalDeformation.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalDeformation.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.LoadStepNumber"></a>

### *property* DirectionalDeformation.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Location"></a>

### *property* DirectionalDeformation.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.LogarithmicDecrement"></a>

### *property* DirectionalDeformation.LogarithmicDecrement *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Maximum"></a>

### *property* DirectionalDeformation.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.MaximumOccursOn"></a>

### *property* DirectionalDeformation.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.MaximumOfMaximumOverTime"></a>

### *property* DirectionalDeformation.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.MaximumOfMinimumOverTime"></a>

### *property* DirectionalDeformation.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Minimum"></a>

### *property* DirectionalDeformation.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.MinimumOccursOn"></a>

### *property* DirectionalDeformation.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.MinimumOfMaximumOverTime"></a>

### *property* DirectionalDeformation.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.MinimumOfMinimumOverTime"></a>

### *property* DirectionalDeformation.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ModalDampingRatio"></a>

### *property* DirectionalDeformation.ModalDampingRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ModalResultInMSUPAnalysis"></a>

### *property* DirectionalDeformation.ModalResultInMSUPAnalysis *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModalResultInMSUPAnalysis. Enables/disables the Modal Result option in Mode Superposition analysis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Mode"></a>

### *property* DirectionalDeformation.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ModeNumber"></a>

### *property* DirectionalDeformation.ModeNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the mode number (index of eigenmode) to visualize the corresponding mode shape.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Name"></a>

### *property* DirectionalDeformation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.NamedSelections"></a>

### *property* DirectionalDeformation.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.NormalOrientation"></a>

### *property* DirectionalDeformation.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ObjectId"></a>

### *property* DirectionalDeformation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ObjectState"></a>

### *property* DirectionalDeformation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ObjectTags"></a>

### *property* DirectionalDeformation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Parent"></a>

### *property* DirectionalDeformation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Path"></a>

### *property* DirectionalDeformation.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.PhaseIncrement"></a>

### *property* DirectionalDeformation.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.PlotData"></a>

### *property* DirectionalDeformation.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Probability"></a>

### *property* DirectionalDeformation.Probability *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Properties"></a>

### *property* DirectionalDeformation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.RPMSelection"></a>

### *property* DirectionalDeformation.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Reference"></a>

### *property* DirectionalDeformation.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ReportedFrequency"></a>

### *property* DirectionalDeformation.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ResultType"></a>

### *property* DirectionalDeformation.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.RpmSetNumber"></a>

### *property* DirectionalDeformation.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.SaveAuxiliaryResult"></a>

### *property* DirectionalDeformation.SaveAuxiliaryResult *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise.
Saving result data to disk improves result retrieval and display performance.
Note: The project file size will increase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ScaleFactor"></a>

### *property* DirectionalDeformation.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ScaleFactorValue"></a>

### *property* DirectionalDeformation.ScaleFactorValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ScopingMethod"></a>

### *property* DirectionalDeformation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.SeparateDataByEntity"></a>

### *property* DirectionalDeformation.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.SetNumber"></a>

### *property* DirectionalDeformation.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.SolutionCombinationDriver"></a>

### *property* DirectionalDeformation.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.SolverComponentIDs"></a>

### *property* DirectionalDeformation.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Stability"></a>

### *property* DirectionalDeformation.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.State"></a>

### *property* DirectionalDeformation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Substep"></a>

### *property* DirectionalDeformation.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Suppressed"></a>

### *property* DirectionalDeformation.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Surface"></a>

### *property* DirectionalDeformation.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.SurfaceCoating"></a>

### *property* DirectionalDeformation.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.SweepingPhase"></a>

### *property* DirectionalDeformation.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.TabularData"></a>

### *property* DirectionalDeformation.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Time"></a>

### *property* DirectionalDeformation.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalDeformation.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalDeformation.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalDeformation.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalDeformation.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Total"></a>

### *property* DirectionalDeformation.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.VisibleProperties"></a>

### *property* DirectionalDeformation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayFilterBy"></a>

### *property* DirectionalDeformation.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayFrequencySelection"></a>

### *property* DirectionalDeformation.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayInterpolateData"></a>

### *property* DirectionalDeformation.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayLowerBand"></a>

### *property* DirectionalDeformation.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayMaxRPM"></a>

### *property* DirectionalDeformation.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayMinRPM"></a>

### *property* DirectionalDeformation.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayModeSelection"></a>

### *property* DirectionalDeformation.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayOrderSelection"></a>

### *property* DirectionalDeformation.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayRpmSelection"></a>

### *property* DirectionalDeformation.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayScopeToOrderLines"></a>

### *property* DirectionalDeformation.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayTimeSelection"></a>

### *property* DirectionalDeformation.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayUpperBand"></a>

### *property* DirectionalDeformation.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayXAxisMaximum"></a>

### *property* DirectionalDeformation.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayXAxisMinimum"></a>

### *property* DirectionalDeformation.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayYAxisMaximum"></a>

### *property* DirectionalDeformation.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallDisplayYAxisMinimum"></a>

### *property* DirectionalDeformation.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.WaterfallShowTextOnMosaic"></a>

### *property* DirectionalDeformation.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalDeformation.Activate"></a>

### DirectionalDeformation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.AddAlert"></a>

### DirectionalDeformation.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.AddComment"></a>

### DirectionalDeformation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.AddConvergence"></a>

### DirectionalDeformation.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.AddFigure"></a>

### DirectionalDeformation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.AddImage"></a>

### DirectionalDeformation.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.BodyWhereMaximumOccurs"></a>

### DirectionalDeformation.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ClearGeneratedData"></a>

### DirectionalDeformation.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Copy"></a>

### DirectionalDeformation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.CopyTo"></a>

### DirectionalDeformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.CreateObjRef"></a>

### DirectionalDeformation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.CreateParameter"></a>

### DirectionalDeformation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.CreateResultsAtAllSets"></a>

### DirectionalDeformation.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Cut"></a>

### DirectionalDeformation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Delete"></a>

### DirectionalDeformation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Duplicate"></a>

### DirectionalDeformation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.DuplicateWithoutResults"></a>

### DirectionalDeformation.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Equals"></a>

### DirectionalDeformation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.EvaluateAllResults"></a>

### DirectionalDeformation.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ExportAnimation"></a>

### DirectionalDeformation.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ExportToSTLFile"></a>

### DirectionalDeformation.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.ExportToTextFile"></a>

### DirectionalDeformation.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### DirectionalDeformation.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.FetchRemoteResult"></a>

### DirectionalDeformation.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.FetchRemoteResults"></a>

### DirectionalDeformation.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetAPIName"></a>

### DirectionalDeformation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetAllProperties"></a>

### DirectionalDeformation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetChildren"></a>

### DirectionalDeformation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DirectionalDeformation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetDetailsView"></a>

### DirectionalDeformation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetEnumName"></a>

### DirectionalDeformation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetHashCode"></a>

### DirectionalDeformation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetIconFile"></a>

### DirectionalDeformation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetLifetimeService"></a>

### DirectionalDeformation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetNodalValues"></a>

### DirectionalDeformation.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetObjectData"></a>

### DirectionalDeformation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetParameter"></a>

### DirectionalDeformation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetPath"></a>

### DirectionalDeformation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetPropertyName"></a>

### DirectionalDeformation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetPropertyValue"></a>

### DirectionalDeformation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetQuantityName"></a>

### DirectionalDeformation.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetVisibleProperties"></a>

### DirectionalDeformation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GetVisiblePropertyNames"></a>

### DirectionalDeformation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GroupAllSimilarChildren"></a>

### DirectionalDeformation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.GroupSimilarObjects"></a>

### DirectionalDeformation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.InitializeLifetimeService"></a>

### DirectionalDeformation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.IsPropertyEditable"></a>

### DirectionalDeformation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectionalDeformation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.IsPropertyVisible"></a>

### DirectionalDeformation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectionalDeformation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.Paste"></a>

### DirectionalDeformation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.PromoteToNamedSelection"></a>

### DirectionalDeformation.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.PropertyByAPIName"></a>

### DirectionalDeformation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.PropertyById"></a>

### DirectionalDeformation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.PropertyByName"></a>

### DirectionalDeformation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.RemoveFromGroup"></a>

### DirectionalDeformation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.RemoveParameter"></a>

### DirectionalDeformation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.RenameBasedOnDefinition"></a>

### DirectionalDeformation.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.RetrieveRemoteDPFResults"></a>

### DirectionalDeformation.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalDeformation.RetrieveResult"></a>

### DirectionalDeformation.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

