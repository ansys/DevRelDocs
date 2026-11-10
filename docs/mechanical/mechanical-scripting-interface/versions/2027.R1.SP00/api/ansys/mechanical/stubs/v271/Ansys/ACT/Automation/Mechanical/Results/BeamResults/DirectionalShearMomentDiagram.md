# `DirectionalShearMomentDiagram`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram(internalObject: Any)

<a id="DirectionalShearMomentDiagram"></a>

### *class* DirectionalShearMomentDiagram(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DirectionalShearMomentDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#DirectionalShearMomentDiagram.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#DirectionalShearMomentDiagram.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#DirectionalShearMomentDiagram.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#DirectionalShearMomentDiagram.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#DirectionalShearMomentDiagram.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#DirectionalShearMomentDiagram.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#DirectionalShearMomentDiagram.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#DirectionalShearMomentDiagram.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#DirectionalShearMomentDiagram.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#DirectionalShearMomentDiagram.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#DirectionalShearMomentDiagram.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#DirectionalShearMomentDiagram.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#DirectionalShearMomentDiagram.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#DirectionalShearMomentDiagram.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#DirectionalShearMomentDiagram.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#DirectionalShearMomentDiagram.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#DirectionalShearMomentDiagram.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#DirectionalShearMomentDiagram.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#DirectionalShearMomentDiagram.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#DirectionalShearMomentDiagram.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#DirectionalShearMomentDiagram.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#DirectionalShearMomentDiagram.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#DirectionalShearMomentDiagram.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#DirectionalShearMomentDiagram.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#DirectionalShearMomentDiagram.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#DirectionalShearMomentDiagram.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#DirectionalShearMomentDiagram.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#DirectionalShearMomentDiagram.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#DirectionalShearMomentDiagram.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#DirectionalShearMomentDiagram.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#DirectionalShearMomentDiagram.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#DirectionalShearMomentDiagram.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#DirectionalShearMomentDiagram.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#DirectionalShearMomentDiagram.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#DirectionalShearMomentDiagram.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#DirectionalShearMomentDiagram.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#DirectionalShearMomentDiagram.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#DirectionalShearMomentDiagram.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#DirectionalShearMomentDiagram.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#DirectionalShearMomentDiagram.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#DirectionalShearMomentDiagram.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#DirectionalShearMomentDiagram.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#DirectionalShearMomentDiagram.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#DirectionalShearMomentDiagram.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#DirectionalShearMomentDiagram.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#DirectionalShearMomentDiagram.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#DirectionalShearMomentDiagram.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#DirectionalShearMomentDiagram.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#DirectionalShearMomentDiagram.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#DirectionalShearMomentDiagram.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#DirectionalShearMomentDiagram.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#DirectionalShearMomentDiagram.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#DirectionalShearMomentDiagram.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#DirectionalShearMomentDiagram.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#DirectionalShearMomentDiagram.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#DirectionalShearMomentDiagram.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#DirectionalShearMomentDiagram.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#DirectionalShearMomentDiagram.Average)                                                       | Gets the Average.                                                                                        |
| [`BeamResultType`](#DirectionalShearMomentDiagram.BeamResultType)                                         | Gets or sets the BeamResultType.                                                                         |
| [`By`](#DirectionalShearMomentDiagram.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#DirectionalShearMomentDiagram.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#DirectionalShearMomentDiagram.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#DirectionalShearMomentDiagram.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#DirectionalShearMomentDiagram.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#DirectionalShearMomentDiagram.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                          | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#DirectionalShearMomentDiagram.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#DirectionalShearMomentDiagram.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#DirectionalShearMomentDiagram.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#DirectionalShearMomentDiagram.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#DirectionalShearMomentDiagram.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#DirectionalShearMomentDiagram.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#DirectionalShearMomentDiagram.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#DirectionalShearMomentDiagram.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GraphicsDisplay`](#DirectionalShearMomentDiagram.GraphicsDisplay)                                       | Gets or sets the GraphicsDisplay.                                                                        |
| [`GroupingFolder`](#DirectionalShearMomentDiagram.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#DirectionalShearMomentDiagram.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#DirectionalShearMomentDiagram.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#DirectionalShearMomentDiagram.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#DirectionalShearMomentDiagram.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#DirectionalShearMomentDiagram.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#DirectionalShearMomentDiagram.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#DirectionalShearMomentDiagram.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#DirectionalShearMomentDiagram.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalShearMomentDiagram.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalShearMomentDiagram.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalShearMomentDiagram.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalShearMomentDiagram.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#DirectionalShearMomentDiagram.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#DirectionalShearMomentDiagram.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#DirectionalShearMomentDiagram.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#DirectionalShearMomentDiagram.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#DirectionalShearMomentDiagram.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#DirectionalShearMomentDiagram.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#DirectionalShearMomentDiagram.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#DirectionalShearMomentDiagram.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#DirectionalShearMomentDiagram.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#DirectionalShearMomentDiagram.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#DirectionalShearMomentDiagram.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                             | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#DirectionalShearMomentDiagram.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#DirectionalShearMomentDiagram.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#DirectionalShearMomentDiagram.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#DirectionalShearMomentDiagram.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                              | Path property.                                                                                           |
| [`PlotData`](#DirectionalShearMomentDiagram.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#DirectionalShearMomentDiagram.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#DirectionalShearMomentDiagram.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#DirectionalShearMomentDiagram.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#DirectionalShearMomentDiagram.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#DirectionalShearMomentDiagram.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#DirectionalShearMomentDiagram.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#DirectionalShearMomentDiagram.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`ShearMomentType`](#DirectionalShearMomentDiagram.ShearMomentType)                                       | Gets or sets the ShearMomentType.                                                                        |
| [`SolutionCombinationDriver`](#DirectionalShearMomentDiagram.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#DirectionalShearMomentDiagram.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#DirectionalShearMomentDiagram.State)                                                           | State property.                                                                                          |
| [`Substep`](#DirectionalShearMomentDiagram.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#DirectionalShearMomentDiagram.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                     | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                | SurfaceCoating property.                                                                                 |
| [`TabularData`](#DirectionalShearMomentDiagram.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#DirectionalShearMomentDiagram.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#DirectionalShearMomentDiagram.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#DirectionalShearMomentDiagram.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#DirectionalShearMomentDiagram.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#DirectionalShearMomentDiagram.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#DirectionalShearMomentDiagram.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#DirectionalShearMomentDiagram.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#DirectionalShearMomentDiagram.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#DirectionalShearMomentDiagram.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#DirectionalShearMomentDiagram.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#DirectionalShearMomentDiagram.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#DirectionalShearMomentDiagram.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#DirectionalShearMomentDiagram.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#DirectionalShearMomentDiagram.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#DirectionalShearMomentDiagram.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#DirectionalShearMomentDiagram.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#DirectionalShearMomentDiagram.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#DirectionalShearMomentDiagram.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#DirectionalShearMomentDiagram.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#DirectionalShearMomentDiagram.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#DirectionalShearMomentDiagram.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#DirectionalShearMomentDiagram.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#DirectionalShearMomentDiagram.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#DirectionalShearMomentDiagram.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalShearMomentDiagram.AttachedRefs"></a>

### *property* DirectionalShearMomentDiagram.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Average"></a>

### *property* DirectionalShearMomentDiagram.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.BeamResultType"></a>

### *property* DirectionalShearMomentDiagram.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.By"></a>

### *property* DirectionalShearMomentDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.CalculateTimeHistory"></a>

### *property* DirectionalShearMomentDiagram.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Children"></a>

### *property* DirectionalShearMomentDiagram.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ClsId"></a>

### *property* DirectionalShearMomentDiagram.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.CombinationNumber"></a>

### *property* DirectionalShearMomentDiagram.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Comments"></a>

### *property* DirectionalShearMomentDiagram.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.CoordinateSystem"></a>

### *property* DirectionalShearMomentDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.CrackFrontNumber"></a>

### *property* DirectionalShearMomentDiagram.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.DataModelObjectCategory"></a>

### *property* DirectionalShearMomentDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.DisplayOption"></a>

### *property* DirectionalShearMomentDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.DisplayTime"></a>

### *property* DirectionalShearMomentDiagram.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.DpfEvaluation"></a>

### *property* DirectionalShearMomentDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Figures"></a>

### *property* DirectionalShearMomentDiagram.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GlobalIDs"></a>

### *property* DirectionalShearMomentDiagram.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GraphControlsXAxis"></a>

### *property* DirectionalShearMomentDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GraphicsDisplay"></a>

### *property* DirectionalShearMomentDiagram.GraphicsDisplay *: [Ansys.Mechanical.DataModel.Enums.ShearMomentDiagramOrientationType](../../../../../Mechanical/DataModel/Enums/ShearMomentDiagramOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearMomentDiagramOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphicsDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GroupingFolder"></a>

### *property* DirectionalShearMomentDiagram.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.IconName"></a>

### *property* DirectionalShearMomentDiagram.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Identifier"></a>

### *property* DirectionalShearMomentDiagram.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Images"></a>

### *property* DirectionalShearMomentDiagram.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.InternalObject"></a>

### *property* DirectionalShearMomentDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.IsSolved"></a>

### *property* DirectionalShearMomentDiagram.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ItemType"></a>

### *property* DirectionalShearMomentDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.IterationNumber"></a>

### *property* DirectionalShearMomentDiagram.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.LoadStep"></a>

### *property* DirectionalShearMomentDiagram.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalShearMomentDiagram.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalShearMomentDiagram.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalShearMomentDiagram.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalShearMomentDiagram.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.LoadStepNumber"></a>

### *property* DirectionalShearMomentDiagram.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Location"></a>

### *property* DirectionalShearMomentDiagram.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Maximum"></a>

### *property* DirectionalShearMomentDiagram.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.MaximumOccursOn"></a>

### *property* DirectionalShearMomentDiagram.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.MaximumOfMaximumOverTime"></a>

### *property* DirectionalShearMomentDiagram.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.MaximumOfMinimumOverTime"></a>

### *property* DirectionalShearMomentDiagram.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Minimum"></a>

### *property* DirectionalShearMomentDiagram.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.MinimumOccursOn"></a>

### *property* DirectionalShearMomentDiagram.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.MinimumOfMaximumOverTime"></a>

### *property* DirectionalShearMomentDiagram.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.MinimumOfMinimumOverTime"></a>

### *property* DirectionalShearMomentDiagram.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Name"></a>

### *property* DirectionalShearMomentDiagram.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.NamedSelections"></a>

### *property* DirectionalShearMomentDiagram.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ObjectId"></a>

### *property* DirectionalShearMomentDiagram.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ObjectState"></a>

### *property* DirectionalShearMomentDiagram.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ObjectTags"></a>

### *property* DirectionalShearMomentDiagram.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Parent"></a>

### *property* DirectionalShearMomentDiagram.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Path"></a>

### *property* DirectionalShearMomentDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.PlotData"></a>

### *property* DirectionalShearMomentDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Properties"></a>

### *property* DirectionalShearMomentDiagram.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.RPMSelection"></a>

### *property* DirectionalShearMomentDiagram.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ResultType"></a>

### *property* DirectionalShearMomentDiagram.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.RpmSetNumber"></a>

### *property* DirectionalShearMomentDiagram.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ScopingMethod"></a>

### *property* DirectionalShearMomentDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.SeparateDataByEntity"></a>

### *property* DirectionalShearMomentDiagram.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.SetNumber"></a>

### *property* DirectionalShearMomentDiagram.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ShearMomentType"></a>

### *property* DirectionalShearMomentDiagram.ShearMomentType *: [Ansys.Mechanical.DataModel.Enums.ShearMomentType](../../../../../Mechanical/DataModel/Enums/ShearMomentType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearMomentType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearMomentType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.SolutionCombinationDriver"></a>

### *property* DirectionalShearMomentDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.SolverComponentIDs"></a>

### *property* DirectionalShearMomentDiagram.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.State"></a>

### *property* DirectionalShearMomentDiagram.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Substep"></a>

### *property* DirectionalShearMomentDiagram.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Suppressed"></a>

### *property* DirectionalShearMomentDiagram.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Surface"></a>

### *property* DirectionalShearMomentDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.SurfaceCoating"></a>

### *property* DirectionalShearMomentDiagram.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.TabularData"></a>

### *property* DirectionalShearMomentDiagram.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Time"></a>

### *property* DirectionalShearMomentDiagram.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalShearMomentDiagram.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalShearMomentDiagram.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalShearMomentDiagram.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalShearMomentDiagram.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Total"></a>

### *property* DirectionalShearMomentDiagram.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.VisibleProperties"></a>

### *property* DirectionalShearMomentDiagram.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayFilterBy"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayFrequencySelection"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayInterpolateData"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayLowerBand"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayMaxRPM"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayMinRPM"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayModeSelection"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayOrderSelection"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayRpmSelection"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayScopeToOrderLines"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayTimeSelection"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayUpperBand"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayXAxisMaximum"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayXAxisMinimum"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayYAxisMaximum"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallDisplayYAxisMinimum"></a>

### *property* DirectionalShearMomentDiagram.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.WaterfallShowTextOnMosaic"></a>

### *property* DirectionalShearMomentDiagram.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalShearMomentDiagram.Activate"></a>

### DirectionalShearMomentDiagram.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.AddAlert"></a>

### DirectionalShearMomentDiagram.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.AddComment"></a>

### DirectionalShearMomentDiagram.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.AddConvergence"></a>

### DirectionalShearMomentDiagram.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.AddFigure"></a>

### DirectionalShearMomentDiagram.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.AddImage"></a>

### DirectionalShearMomentDiagram.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.BodyWhereMaximumOccurs"></a>

### DirectionalShearMomentDiagram.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ClearGeneratedData"></a>

### DirectionalShearMomentDiagram.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Copy"></a>

### DirectionalShearMomentDiagram.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.CopyTo"></a>

### DirectionalShearMomentDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.CreateObjRef"></a>

### DirectionalShearMomentDiagram.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.CreateParameter"></a>

### DirectionalShearMomentDiagram.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.CreateResultsAtAllSets"></a>

### DirectionalShearMomentDiagram.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Cut"></a>

### DirectionalShearMomentDiagram.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Delete"></a>

### DirectionalShearMomentDiagram.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Duplicate"></a>

### DirectionalShearMomentDiagram.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.DuplicateWithoutResults"></a>

### DirectionalShearMomentDiagram.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Equals"></a>

### DirectionalShearMomentDiagram.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.EvaluateAllResults"></a>

### DirectionalShearMomentDiagram.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ExportAnimation"></a>

### DirectionalShearMomentDiagram.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ExportToSTLFile"></a>

### DirectionalShearMomentDiagram.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.ExportToTextFile"></a>

### DirectionalShearMomentDiagram.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### DirectionalShearMomentDiagram.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.FetchRemoteResult"></a>

### DirectionalShearMomentDiagram.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.FetchRemoteResults"></a>

### DirectionalShearMomentDiagram.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetAPIName"></a>

### DirectionalShearMomentDiagram.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetAllProperties"></a>

### DirectionalShearMomentDiagram.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetChildren"></a>

### DirectionalShearMomentDiagram.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DirectionalShearMomentDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetDetailsView"></a>

### DirectionalShearMomentDiagram.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetEnumName"></a>

### DirectionalShearMomentDiagram.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetHashCode"></a>

### DirectionalShearMomentDiagram.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetIconFile"></a>

### DirectionalShearMomentDiagram.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetLifetimeService"></a>

### DirectionalShearMomentDiagram.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetNodalValues"></a>

### DirectionalShearMomentDiagram.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetObjectData"></a>

### DirectionalShearMomentDiagram.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetParameter"></a>

### DirectionalShearMomentDiagram.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetPath"></a>

### DirectionalShearMomentDiagram.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetPropertyName"></a>

### DirectionalShearMomentDiagram.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetPropertyValue"></a>

### DirectionalShearMomentDiagram.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetQuantityName"></a>

### DirectionalShearMomentDiagram.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetVisibleProperties"></a>

### DirectionalShearMomentDiagram.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GetVisiblePropertyNames"></a>

### DirectionalShearMomentDiagram.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GroupAllSimilarChildren"></a>

### DirectionalShearMomentDiagram.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.GroupSimilarObjects"></a>

### DirectionalShearMomentDiagram.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.InitializeLifetimeService"></a>

### DirectionalShearMomentDiagram.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.IsPropertyEditable"></a>

### DirectionalShearMomentDiagram.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectionalShearMomentDiagram.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.IsPropertyVisible"></a>

### DirectionalShearMomentDiagram.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectionalShearMomentDiagram.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.Paste"></a>

### DirectionalShearMomentDiagram.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.PromoteToNamedSelection"></a>

### DirectionalShearMomentDiagram.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.PropertyByAPIName"></a>

### DirectionalShearMomentDiagram.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.PropertyById"></a>

### DirectionalShearMomentDiagram.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.PropertyByName"></a>

### DirectionalShearMomentDiagram.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.RemoveFromGroup"></a>

### DirectionalShearMomentDiagram.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.RemoveParameter"></a>

### DirectionalShearMomentDiagram.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.RenameBasedOnDefinition"></a>

### DirectionalShearMomentDiagram.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.RetrieveRemoteDPFResults"></a>

### DirectionalShearMomentDiagram.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalShearMomentDiagram.RetrieveResult"></a>

### DirectionalShearMomentDiagram.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

