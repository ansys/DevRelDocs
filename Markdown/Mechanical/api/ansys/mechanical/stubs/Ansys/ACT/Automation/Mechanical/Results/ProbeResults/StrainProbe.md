# StrainProbe

### *class* StrainProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StrainProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#StrainProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#StrainProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#StrainProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#StrainProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#StrainProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#StrainProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#StrainProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#StrainProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#StrainProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#StrainProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#StrainProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#StrainProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#StrainProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#StrainProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StrainProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#StrainProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#StrainProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#StrainProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#StrainProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#StrainProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`EquivalentStrain`](#StrainProbe.EquivalentStrain)                                                                       | Gets the EquivalentStrain.                                                                                                                                                 |
| [`MaximumEquivalentStrain`](#StrainProbe.MaximumEquivalentStrain)                                                         | Gets the MaximumEquivalentStrain.                                                                                                                                          |
| [`MaximumMaximumPrincipalStrain`](#StrainProbe.MaximumMaximumPrincipalStrain)                                             | Gets the MaximumMaximumPrincipalStrain.                                                                                                                                    |
| [`MaximumMiddlePrincipalStrain`](#StrainProbe.MaximumMiddlePrincipalStrain)                                               | Gets the MaximumMiddlePrincipalStrain.                                                                                                                                     |
| [`MaximumMinimumPrincipalStrain`](#StrainProbe.MaximumMinimumPrincipalStrain)                                             | Gets the MaximumMinimumPrincipalStrain.                                                                                                                                    |
| [`MaximumNormalXAxisStrain`](#StrainProbe.MaximumNormalXAxisStrain)                                                       | Gets the MaximumNormalXAxisStrain.                                                                                                                                         |
| [`MaximumNormalYAxisStrain`](#StrainProbe.MaximumNormalYAxisStrain)                                                       | Gets the MaximumNormalYAxisStrain.                                                                                                                                         |
| [`MaximumNormalZAxisStrain`](#StrainProbe.MaximumNormalZAxisStrain)                                                       | Gets the MaximumNormalZAxisStrain.                                                                                                                                         |
| [`MaximumPrincipalStrain`](#StrainProbe.MaximumPrincipalStrain)                                                           | Gets the MaximumPrincipalStrain.                                                                                                                                           |
| [`MaximumXYShearStrain`](#StrainProbe.MaximumXYShearStrain)                                                               | Gets the MaximumXYShearStrain.                                                                                                                                             |
| [`MaximumXZShearStrain`](#StrainProbe.MaximumXZShearStrain)                                                               | Gets the MaximumXZShearStrain.                                                                                                                                             |
| [`MaximumYZShearStrain`](#StrainProbe.MaximumYZShearStrain)                                                               | Gets the MaximumYZShearStrain.                                                                                                                                             |
| [`MaximumStrainIntensity`](#StrainProbe.MaximumStrainIntensity)                                                           | Gets the MaximumStrainIntensity.                                                                                                                                           |
| [`MiddlePrincipalStrain`](#StrainProbe.MiddlePrincipalStrain)                                                             | Gets the MiddlePrincipalStrain.                                                                                                                                            |
| [`MinimumEquivalentStrain`](#StrainProbe.MinimumEquivalentStrain)                                                         | Gets the MinimumEquivalentStrain.                                                                                                                                          |
| [`MinimumStrainMaximumPrincipal`](#StrainProbe.MinimumStrainMaximumPrincipal)                                             | Gets the MinimumStrainMaximumPrincipal.                                                                                                                                    |
| [`MinimumMiddlePrincipalStrain`](#StrainProbe.MinimumMiddlePrincipalStrain)                                               | Gets the MinimumMiddlePrincipalStrain.                                                                                                                                     |
| [`MinimumMinimumPrincipalStrain`](#StrainProbe.MinimumMinimumPrincipalStrain)                                             | Gets the MinimumMinimumPrincipalStrain.                                                                                                                                    |
| [`MinimumNormalXAxisStrain`](#StrainProbe.MinimumNormalXAxisStrain)                                                       | Gets the MinimumNormalXAxisStrain.                                                                                                                                         |
| [`MinimumNormalYAxisStrain`](#StrainProbe.MinimumNormalYAxisStrain)                                                       | Gets the MinimumNormalYAxisStrain.                                                                                                                                         |
| [`MinimumNormalZAxisStrain`](#StrainProbe.MinimumNormalZAxisStrain)                                                       | Gets the MinimumNormalZAxisStrain.                                                                                                                                         |
| [`MinimumPrincipalStrain`](#StrainProbe.MinimumPrincipalStrain)                                                           | Gets the MinimumPrincipalStrain.                                                                                                                                           |
| [`MinimumXYShearStrain`](#StrainProbe.MinimumXYShearStrain)                                                               | Gets the MinimumXYShearStrain.                                                                                                                                             |
| [`MinimumXZShearStrain`](#StrainProbe.MinimumXZShearStrain)                                                               | Gets the MinimumXZShearStrain.                                                                                                                                             |
| [`MinimumYZShearStrain`](#StrainProbe.MinimumYZShearStrain)                                                               | Gets the MinimumYZShearStrain.                                                                                                                                             |
| [`MinimumStrain`](#StrainProbe.MinimumStrain)                                                                             | Gets the MinimumStrain.                                                                                                                                                    |
| [`MinimumStrainIntensity`](#StrainProbe.MinimumStrainIntensity)                                                           | Gets the MinimumStrainIntensity.                                                                                                                                           |
| [`NormalXAxisStrain`](#StrainProbe.NormalXAxisStrain)                                                                     | Gets the NormalXAxisStrain.                                                                                                                                                |
| [`NormalYAxisStrain`](#StrainProbe.NormalYAxisStrain)                                                                     | Gets the NormalYAxisStrain.                                                                                                                                                |
| [`NormalZAxisStrain`](#StrainProbe.NormalZAxisStrain)                                                                     | Gets the NormalZAxisStrain.                                                                                                                                                |
| [`XYShearStrain`](#StrainProbe.XYShearStrain)                                                                             | Gets the XYShearStrain.                                                                                                                                                    |
| [`XZShearStrain`](#StrainProbe.XZShearStrain)                                                                             | Gets the XZShearStrain.                                                                                                                                                    |
| [`YZShearStrain`](#StrainProbe.YZShearStrain)                                                                             | Gets the YZShearStrain.                                                                                                                                                    |
| [`Strain`](#StrainProbe.Strain)                                                                                           | Gets the Strain.                                                                                                                                                           |
| [`StrainIntensity`](#StrainProbe.StrainIntensity)                                                                         | Gets the StrainIntensity.                                                                                                                                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#StrainProbe.Summation)                                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#StrainProbe.LocationMethod)                                                                           | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#StrainProbe.GeometryLocation)                                                                       | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#StrainProbe.CoordinateSystemSelection)                                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#StrainProbe.BoundaryConditionSelection)                                                   | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#StrainProbe.ContactRegionSelection)                                                           | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#StrainProbe.RemotePointSelection)                                                               | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#StrainProbe.BeamSelection)                                                                             | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#StrainProbe.MeshConnectionSelection)                                                         | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#StrainProbe.SurfaceSelection)                                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#StrainProbe.SpringSelection)                                                                         | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#StrainProbe.IsSolved)                                                                                       | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#StrainProbe.Orientation)                                                                                 | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#StrainProbe.IterationNumber)                                                                         | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#StrainProbe.LoadStep)                                                                                       | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#StrainProbe.LoadStepNumber)                                                                           | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#StrainProbe.Substep)                                                                                         | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#StrainProbe.DisplayTime)                                                                                 | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#StrainProbe.MaximumTotal)                                                                               | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#StrainProbe.MaximumXAxis)                                                                               | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#StrainProbe.MaximumYAxis)                                                                               | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#StrainProbe.MaximumZAxis)                                                                               | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#StrainProbe.MinimumTotal)                                                                               | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#StrainProbe.MinimumXAxis)                                                                               | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#StrainProbe.MinimumYAxis)                                                                               | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#StrainProbe.MinimumZAxis)                                                                               | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#StrainProbe.Time)                                                                                               | Gets the Time.                                                                                                                                                             |
| [`Total`](#StrainProbe.Total)                                                                                             | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#StrainProbe.XAxis)                                                                                             | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#StrainProbe.YAxis)                                                                                             | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#StrainProbe.ZAxis)                                                                                             | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#StrainProbe.ResultSelection)                                                                         | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#StrainProbe.SpatialResolution)                                                                     | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#StrainProbe.Type)                                                                                               | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#StrainProbe.DpfEvaluation)                                                                             | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#StrainProbe.Suppressed)                                                                                   | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#StrainProbe.Children)                                                                                       | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#StrainProbe.Comments)                                                                                       | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#StrainProbe.Figures)                                                                                         | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#StrainProbe.Images)                                                                                           | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#StrainProbe.Properties)                                                                                   | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#StrainProbe.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import StrainProbe
```

## Property detail

### *property* StrainProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.EquivalentStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EquivalentStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumEquivalentStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumEquivalentStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumMaximumPrincipalStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMaximumPrincipalStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumMiddlePrincipalStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMiddlePrincipalStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumMinimumPrincipalStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMinimumPrincipalStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumNormalXAxisStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalXAxisStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumNormalYAxisStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalYAxisStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumNormalZAxisStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalZAxisStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumPrincipalStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumPrincipalStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumXYShearStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXYShearStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumXZShearStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXZShearStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumYZShearStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYZShearStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumStrainIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumStrainIntensity.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MiddlePrincipalStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MiddlePrincipalStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumEquivalentStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEquivalentStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumStrainMaximumPrincipal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumStrainMaximumPrincipal.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumMiddlePrincipalStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMiddlePrincipalStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumMinimumPrincipalStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMinimumPrincipalStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumNormalXAxisStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalXAxisStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumNormalYAxisStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalYAxisStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumNormalZAxisStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalZAxisStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumPrincipalStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumPrincipalStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumXYShearStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXYShearStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumXZShearStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXZShearStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumYZShearStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYZShearStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumStrainIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumStrainIntensity.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.NormalXAxisStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalXAxisStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.NormalYAxisStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalYAxisStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.NormalZAxisStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalZAxisStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.XYShearStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XYShearStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.XZShearStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XZShearStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.YZShearStrain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YZShearStrain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Strain *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Strain.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.StrainIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StrainIntensity.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* StrainProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### StrainProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### StrainProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### StrainProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### StrainProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### StrainProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### StrainProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### StrainProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### StrainProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### StrainProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### StrainProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### StrainProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### StrainProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### StrainProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### StrainProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### StrainProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### StrainProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### StrainProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### StrainProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### StrainProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### StrainProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### StrainProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### StrainProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
