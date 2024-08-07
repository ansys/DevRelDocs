# `FractureCrackExtensionProbe`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureCrackExtensionProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FractureCrackExtensionProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#id0)                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`ResultProbeValue`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.ResultProbeValue)                     | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MaximumValueOverTime)             | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MinimumValueOverTime)             | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.DataModelObjectCategory)       | Gets the current DataModelObjectâ€™s category.                                                                                                                               |
| [`ActiveContour`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.ActiveContour)                           | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.CrackLengthPercentage)           | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.SolverID)                                     | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option â€˜WeakSpringsâ€™, please use the property â€˜LocationMethod = LocationDefinitionMethod.WeakSpringsâ€™. |
| [`ContactRegionSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#id0)                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureCrackExtensionProbe.md#FractureCrackExtensionProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="FractureCrackExtensionProbe.InternalObject"></a>

### *property* FractureCrackExtensionProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.ResultProbeValue"></a>

### *property* FractureCrackExtensionProbe.ResultProbeValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MaximumValueOverTime"></a>

### *property* FractureCrackExtensionProbe.MaximumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MinimumValueOverTime"></a>

### *property* FractureCrackExtensionProbe.MinimumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.DataModelObjectCategory"></a>

### *property* FractureCrackExtensionProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.ActiveContour"></a>

### *property* FractureCrackExtensionProbe.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.CrackLengthPercentage"></a>

### *property* FractureCrackExtensionProbe.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.SolverID"></a>

### *property* FractureCrackExtensionProbe.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Summation"></a>

### *property* FractureCrackExtensionProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.LocationMethod"></a>

### *property* FractureCrackExtensionProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.GeometryLocation"></a>

### *property* FractureCrackExtensionProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.CoordinateSystemSelection"></a>

### *property* FractureCrackExtensionProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.BoundaryConditionSelection"></a>

### *property* FractureCrackExtensionProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option â€˜WeakSpringsâ€™, please use the property â€˜LocationMethod = LocationDefinitionMethod.WeakSpringsâ€™.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.ContactRegionSelection"></a>

### *property* FractureCrackExtensionProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.RemotePointSelection"></a>

### *property* FractureCrackExtensionProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.BeamSelection"></a>

### *property* FractureCrackExtensionProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MeshConnectionSelection"></a>

### *property* FractureCrackExtensionProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.SurfaceSelection"></a>

### *property* FractureCrackExtensionProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.SpringSelection"></a>

### *property* FractureCrackExtensionProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.IsSolved"></a>

### *property* FractureCrackExtensionProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Orientation"></a>

### *property* FractureCrackExtensionProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.IterationNumber"></a>

### *property* FractureCrackExtensionProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.LoadStep"></a>

### *property* FractureCrackExtensionProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.LoadStepNumber"></a>

### *property* FractureCrackExtensionProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Substep"></a>

### *property* FractureCrackExtensionProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.DisplayTime"></a>

### *property* FractureCrackExtensionProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MaximumTotal"></a>

### *property* FractureCrackExtensionProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MaximumXAxis"></a>

### *property* FractureCrackExtensionProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MaximumYAxis"></a>

### *property* FractureCrackExtensionProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MaximumZAxis"></a>

### *property* FractureCrackExtensionProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MinimumTotal"></a>

### *property* FractureCrackExtensionProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MinimumXAxis"></a>

### *property* FractureCrackExtensionProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MinimumYAxis"></a>

### *property* FractureCrackExtensionProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.MinimumZAxis"></a>

### *property* FractureCrackExtensionProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Time"></a>

### *property* FractureCrackExtensionProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Total"></a>

### *property* FractureCrackExtensionProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.XAxis"></a>

### *property* FractureCrackExtensionProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.YAxis"></a>

### *property* FractureCrackExtensionProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.ZAxis"></a>

### *property* FractureCrackExtensionProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.ResultSelection"></a>

### *property* FractureCrackExtensionProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.SpatialResolution"></a>

### *property* FractureCrackExtensionProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Type"></a>

### *property* FractureCrackExtensionProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.DpfEvaluation"></a>

### *property* FractureCrackExtensionProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Suppressed"></a>

### *property* FractureCrackExtensionProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Children"></a>

### *property* FractureCrackExtensionProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Comments"></a>

### *property* FractureCrackExtensionProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Figures"></a>

### *property* FractureCrackExtensionProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Images"></a>

### *property* FractureCrackExtensionProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FractureCrackExtensionProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Properties"></a>

### *property* FractureCrackExtensionProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.VisibleProperties"></a>

### *property* FractureCrackExtensionProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FractureCrackExtensionProbe.ExportAnimation"></a>

### FractureCrackExtensionProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.ClearGeneratedData"></a>

### FractureCrackExtensionProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.DuplicateWithoutResults"></a>

### FractureCrackExtensionProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.EvaluateAllResults"></a>

### FractureCrackExtensionProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.SnapToMeshNodes"></a>

### FractureCrackExtensionProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.RenameBasedOnDefinition"></a>

### FractureCrackExtensionProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Delete"></a>

### FractureCrackExtensionProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.GetChildren"></a>

### FractureCrackExtensionProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FractureCrackExtensionProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.AddComment"></a>

### FractureCrackExtensionProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.AddFigure"></a>

### FractureCrackExtensionProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.AddImage"></a>

### FractureCrackExtensionProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Activate"></a>

### FractureCrackExtensionProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.CopyTo"></a>

### FractureCrackExtensionProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.Duplicate"></a>

### FractureCrackExtensionProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.GroupAllSimilarChildren"></a>

### FractureCrackExtensionProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.GroupSimilarObjects"></a>

### FractureCrackExtensionProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.PropertyByName"></a>

### FractureCrackExtensionProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.PropertyByAPIName"></a>

### FractureCrackExtensionProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.CreateParameter"></a>

### FractureCrackExtensionProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.GetParameter"></a>

### FractureCrackExtensionProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureCrackExtensionProbe.RemoveParameter"></a>

### FractureCrackExtensionProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

