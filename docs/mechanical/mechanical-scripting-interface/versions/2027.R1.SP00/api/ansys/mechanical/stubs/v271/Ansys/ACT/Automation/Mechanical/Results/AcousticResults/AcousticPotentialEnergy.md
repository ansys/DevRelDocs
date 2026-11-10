# `AcousticPotentialEnergy`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticPotentialEnergy"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticPotentialEnergy(internalObject: Any)

<a id="AcousticPotentialEnergy"></a>

### *class* AcousticPotentialEnergy(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticPotentialEnergy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticPotentialEnergy.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#AcousticPotentialEnergy.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#AcousticPotentialEnergy.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#AcousticPotentialEnergy.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#AcousticPotentialEnergy.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticPotentialEnergy.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#AcousticPotentialEnergy.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#AcousticPotentialEnergy.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AcousticPotentialEnergy.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticPotentialEnergy.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticPotentialEnergy.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticPotentialEnergy.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#AcousticPotentialEnergy.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#AcousticPotentialEnergy.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticPotentialEnergy.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticPotentialEnergy.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#AcousticPotentialEnergy.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#AcousticPotentialEnergy.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AcousticPotentialEnergy.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AcousticPotentialEnergy.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#AcousticPotentialEnergy.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#AcousticPotentialEnergy.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#AcousticPotentialEnergy.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#AcousticPotentialEnergy.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#AcousticPotentialEnergy.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#AcousticPotentialEnergy.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticPotentialEnergy.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticPotentialEnergy.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticPotentialEnergy.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticPotentialEnergy.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticPotentialEnergy.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticPotentialEnergy.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#AcousticPotentialEnergy.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#AcousticPotentialEnergy.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticPotentialEnergy.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticPotentialEnergy.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticPotentialEnergy.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticPotentialEnergy.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AcousticPotentialEnergy.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#AcousticPotentialEnergy.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticPotentialEnergy.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticPotentialEnergy.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticPotentialEnergy.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticPotentialEnergy.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticPotentialEnergy.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticPotentialEnergy.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticPotentialEnergy.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticPotentialEnergy.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticPotentialEnergy.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticPotentialEnergy.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticPotentialEnergy.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticPotentialEnergy.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticPotentialEnergy.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AcousticPotentialEnergy.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#AcousticPotentialEnergy.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#AcousticPotentialEnergy.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#AcousticPotentialEnergy.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#AcousticPotentialEnergy.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#AcousticPotentialEnergy.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#AcousticPotentialEnergy.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#AcousticPotentialEnergy.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#AcousticPotentialEnergy.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#AcousticPotentialEnergy.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#AcousticPotentialEnergy.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#AcousticPotentialEnergy.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                    | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#AcousticPotentialEnergy.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DampedFrequency`](#AcousticPotentialEnergy.DampedFrequency)                                       | Gets the DampedFrequency.                                                                                |
| [`DataModelObjectCategory`](#AcousticPotentialEnergy.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#AcousticPotentialEnergy.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#AcousticPotentialEnergy.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#AcousticPotentialEnergy.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#AcousticPotentialEnergy.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#AcousticPotentialEnergy.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#AcousticPotentialEnergy.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#AcousticPotentialEnergy.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#AcousticPotentialEnergy.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#AcousticPotentialEnergy.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#AcousticPotentialEnergy.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#AcousticPotentialEnergy.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#AcousticPotentialEnergy.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#AcousticPotentialEnergy.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#AcousticPotentialEnergy.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#AcousticPotentialEnergy.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#AcousticPotentialEnergy.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticPotentialEnergy.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticPotentialEnergy.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticPotentialEnergy.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticPotentialEnergy.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#AcousticPotentialEnergy.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#AcousticPotentialEnergy.Location)                                                     | Gets or sets the Location.                                                                               |
| [`LogarithmicDecrement`](#AcousticPotentialEnergy.LogarithmicDecrement)                             | Gets the LogarithmicDecrement.                                                                           |
| [`Maximum`](#AcousticPotentialEnergy.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#AcousticPotentialEnergy.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#AcousticPotentialEnergy.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#AcousticPotentialEnergy.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#AcousticPotentialEnergy.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#AcousticPotentialEnergy.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#AcousticPotentialEnergy.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#AcousticPotentialEnergy.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`ModalDampingRatio`](#AcousticPotentialEnergy.ModalDampingRatio)                                   | Gets the ModalDampingRatio.                                                                              |
| [`Mode`](#AcousticPotentialEnergy.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#AcousticPotentialEnergy.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                       | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#AcousticPotentialEnergy.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#AcousticPotentialEnergy.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#AcousticPotentialEnergy.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#AcousticPotentialEnergy.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                        | Path property.                                                                                           |
| [`PlotData`](#AcousticPotentialEnergy.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#AcousticPotentialEnergy.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#AcousticPotentialEnergy.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ReportedFrequency`](#AcousticPotentialEnergy.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                              |
| [`ResultType`](#AcousticPotentialEnergy.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#AcousticPotentialEnergy.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#AcousticPotentialEnergy.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#AcousticPotentialEnergy.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#AcousticPotentialEnergy.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#AcousticPotentialEnergy.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#AcousticPotentialEnergy.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`Stability`](#AcousticPotentialEnergy.Stability)                                                   | Gets the Stability.                                                                                      |
| [`State`](#AcousticPotentialEnergy.State)                                                           | State property.                                                                                          |
| [`Substep`](#AcousticPotentialEnergy.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#AcousticPotentialEnergy.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                               | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                          | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#AcousticPotentialEnergy.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#AcousticPotentialEnergy.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#AcousticPotentialEnergy.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticPotentialEnergy.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticPotentialEnergy.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticPotentialEnergy.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticPotentialEnergy.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#AcousticPotentialEnergy.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#AcousticPotentialEnergy.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#AcousticPotentialEnergy.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#AcousticPotentialEnergy.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#AcousticPotentialEnergy.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#AcousticPotentialEnergy.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#AcousticPotentialEnergy.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#AcousticPotentialEnergy.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#AcousticPotentialEnergy.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#AcousticPotentialEnergy.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#AcousticPotentialEnergy.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#AcousticPotentialEnergy.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#AcousticPotentialEnergy.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#AcousticPotentialEnergy.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#AcousticPotentialEnergy.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#AcousticPotentialEnergy.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#AcousticPotentialEnergy.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#AcousticPotentialEnergy.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#AcousticPotentialEnergy.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="AcousticPotentialEnergy.Amplitude"></a>

### *property* AcousticPotentialEnergy.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.AttachedRefs"></a>

### *property* AcousticPotentialEnergy.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Average"></a>

### *property* AcousticPotentialEnergy.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.By"></a>

### *property* AcousticPotentialEnergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.CalculateTimeHistory"></a>

### *property* AcousticPotentialEnergy.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Children"></a>

### *property* AcousticPotentialEnergy.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ClsId"></a>

### *property* AcousticPotentialEnergy.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.CombinationNumber"></a>

### *property* AcousticPotentialEnergy.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Comments"></a>

### *property* AcousticPotentialEnergy.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.CoordinateSystem"></a>

### *property* AcousticPotentialEnergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.CrackFrontNumber"></a>

### *property* AcousticPotentialEnergy.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.DampedFrequency"></a>

### *property* AcousticPotentialEnergy.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.DataModelObjectCategory"></a>

### *property* AcousticPotentialEnergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.DisplayOption"></a>

### *property* AcousticPotentialEnergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.DisplayTime"></a>

### *property* AcousticPotentialEnergy.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.DpfEvaluation"></a>

### *property* AcousticPotentialEnergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Figures"></a>

### *property* AcousticPotentialEnergy.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Frequency"></a>

### *property* AcousticPotentialEnergy.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GlobalIDs"></a>

### *property* AcousticPotentialEnergy.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GraphControlsXAxis"></a>

### *property* AcousticPotentialEnergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GroupingFolder"></a>

### *property* AcousticPotentialEnergy.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.IconName"></a>

### *property* AcousticPotentialEnergy.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Identifier"></a>

### *property* AcousticPotentialEnergy.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Images"></a>

### *property* AcousticPotentialEnergy.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.InternalObject"></a>

### *property* AcousticPotentialEnergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.IsSolved"></a>

### *property* AcousticPotentialEnergy.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ItemType"></a>

### *property* AcousticPotentialEnergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.IterationNumber"></a>

### *property* AcousticPotentialEnergy.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.LoadStep"></a>

### *property* AcousticPotentialEnergy.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticPotentialEnergy.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticPotentialEnergy.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticPotentialEnergy.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticPotentialEnergy.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.LoadStepNumber"></a>

### *property* AcousticPotentialEnergy.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Location"></a>

### *property* AcousticPotentialEnergy.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.LogarithmicDecrement"></a>

### *property* AcousticPotentialEnergy.LogarithmicDecrement *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Maximum"></a>

### *property* AcousticPotentialEnergy.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.MaximumOccursOn"></a>

### *property* AcousticPotentialEnergy.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.MaximumOfMaximumOverTime"></a>

### *property* AcousticPotentialEnergy.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.MaximumOfMinimumOverTime"></a>

### *property* AcousticPotentialEnergy.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Minimum"></a>

### *property* AcousticPotentialEnergy.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.MinimumOccursOn"></a>

### *property* AcousticPotentialEnergy.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.MinimumOfMaximumOverTime"></a>

### *property* AcousticPotentialEnergy.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.MinimumOfMinimumOverTime"></a>

### *property* AcousticPotentialEnergy.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ModalDampingRatio"></a>

### *property* AcousticPotentialEnergy.ModalDampingRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Mode"></a>

### *property* AcousticPotentialEnergy.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Name"></a>

### *property* AcousticPotentialEnergy.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.NamedSelections"></a>

### *property* AcousticPotentialEnergy.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ObjectId"></a>

### *property* AcousticPotentialEnergy.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ObjectState"></a>

### *property* AcousticPotentialEnergy.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ObjectTags"></a>

### *property* AcousticPotentialEnergy.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Parent"></a>

### *property* AcousticPotentialEnergy.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Path"></a>

### *property* AcousticPotentialEnergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.PlotData"></a>

### *property* AcousticPotentialEnergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Properties"></a>

### *property* AcousticPotentialEnergy.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.RPMSelection"></a>

### *property* AcousticPotentialEnergy.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ReportedFrequency"></a>

### *property* AcousticPotentialEnergy.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ResultType"></a>

### *property* AcousticPotentialEnergy.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.RpmSetNumber"></a>

### *property* AcousticPotentialEnergy.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ScopingMethod"></a>

### *property* AcousticPotentialEnergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.SeparateDataByEntity"></a>

### *property* AcousticPotentialEnergy.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.SetNumber"></a>

### *property* AcousticPotentialEnergy.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.SolutionCombinationDriver"></a>

### *property* AcousticPotentialEnergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.SolverComponentIDs"></a>

### *property* AcousticPotentialEnergy.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Stability"></a>

### *property* AcousticPotentialEnergy.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.State"></a>

### *property* AcousticPotentialEnergy.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Substep"></a>

### *property* AcousticPotentialEnergy.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Suppressed"></a>

### *property* AcousticPotentialEnergy.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Surface"></a>

### *property* AcousticPotentialEnergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.SurfaceCoating"></a>

### *property* AcousticPotentialEnergy.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.SweepingPhase"></a>

### *property* AcousticPotentialEnergy.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.TabularData"></a>

### *property* AcousticPotentialEnergy.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Time"></a>

### *property* AcousticPotentialEnergy.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticPotentialEnergy.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticPotentialEnergy.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticPotentialEnergy.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticPotentialEnergy.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Total"></a>

### *property* AcousticPotentialEnergy.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.VisibleProperties"></a>

### *property* AcousticPotentialEnergy.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayFilterBy"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayFrequencySelection"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayInterpolateData"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayLowerBand"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayMaxRPM"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayMinRPM"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayModeSelection"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayOrderSelection"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayRpmSelection"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayScopeToOrderLines"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayTimeSelection"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayUpperBand"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayXAxisMaximum"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayXAxisMinimum"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayYAxisMaximum"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallDisplayYAxisMinimum"></a>

### *property* AcousticPotentialEnergy.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.WaterfallShowTextOnMosaic"></a>

### *property* AcousticPotentialEnergy.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPotentialEnergy.Activate"></a>

### AcousticPotentialEnergy.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.AddAlert"></a>

### AcousticPotentialEnergy.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.AddComment"></a>

### AcousticPotentialEnergy.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.AddConvergence"></a>

### AcousticPotentialEnergy.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.AddFigure"></a>

### AcousticPotentialEnergy.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.AddImage"></a>

### AcousticPotentialEnergy.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.BodyWhereMaximumOccurs"></a>

### AcousticPotentialEnergy.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ClearGeneratedData"></a>

### AcousticPotentialEnergy.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Copy"></a>

### AcousticPotentialEnergy.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.CopyTo"></a>

### AcousticPotentialEnergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.CreateObjRef"></a>

### AcousticPotentialEnergy.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.CreateParameter"></a>

### AcousticPotentialEnergy.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.CreateResultsAtAllSets"></a>

### AcousticPotentialEnergy.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Cut"></a>

### AcousticPotentialEnergy.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Delete"></a>

### AcousticPotentialEnergy.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Duplicate"></a>

### AcousticPotentialEnergy.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.DuplicateWithoutResults"></a>

### AcousticPotentialEnergy.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Equals"></a>

### AcousticPotentialEnergy.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.EvaluateAllResults"></a>

### AcousticPotentialEnergy.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ExportAnimation"></a>

### AcousticPotentialEnergy.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ExportToSTLFile"></a>

### AcousticPotentialEnergy.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.ExportToTextFile"></a>

### AcousticPotentialEnergy.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### AcousticPotentialEnergy.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.FetchRemoteResult"></a>

### AcousticPotentialEnergy.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.FetchRemoteResults"></a>

### AcousticPotentialEnergy.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetAPIName"></a>

### AcousticPotentialEnergy.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetAllProperties"></a>

### AcousticPotentialEnergy.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetChildren"></a>

### AcousticPotentialEnergy.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticPotentialEnergy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetDetailsView"></a>

### AcousticPotentialEnergy.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetEnumName"></a>

### AcousticPotentialEnergy.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetHashCode"></a>

### AcousticPotentialEnergy.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetIconFile"></a>

### AcousticPotentialEnergy.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetLifetimeService"></a>

### AcousticPotentialEnergy.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetNodalValues"></a>

### AcousticPotentialEnergy.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetObjectData"></a>

### AcousticPotentialEnergy.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetParameter"></a>

### AcousticPotentialEnergy.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetPath"></a>

### AcousticPotentialEnergy.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetPropertyName"></a>

### AcousticPotentialEnergy.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetPropertyValue"></a>

### AcousticPotentialEnergy.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetQuantityName"></a>

### AcousticPotentialEnergy.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetVisibleProperties"></a>

### AcousticPotentialEnergy.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GetVisiblePropertyNames"></a>

### AcousticPotentialEnergy.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GroupAllSimilarChildren"></a>

### AcousticPotentialEnergy.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.GroupSimilarObjects"></a>

### AcousticPotentialEnergy.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.InitializeLifetimeService"></a>

### AcousticPotentialEnergy.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.IsPropertyEditable"></a>

### AcousticPotentialEnergy.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPotentialEnergy.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.IsPropertyVisible"></a>

### AcousticPotentialEnergy.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPotentialEnergy.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.Paste"></a>

### AcousticPotentialEnergy.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.PromoteToNamedSelection"></a>

### AcousticPotentialEnergy.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.PropertyByAPIName"></a>

### AcousticPotentialEnergy.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.PropertyById"></a>

### AcousticPotentialEnergy.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.PropertyByName"></a>

### AcousticPotentialEnergy.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.RemoveFromGroup"></a>

### AcousticPotentialEnergy.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.RemoveParameter"></a>

### AcousticPotentialEnergy.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.RenameBasedOnDefinition"></a>

### AcousticPotentialEnergy.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.RetrieveRemoteDPFResults"></a>

### AcousticPotentialEnergy.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPotentialEnergy.RetrieveResult"></a>

### AcousticPotentialEnergy.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

