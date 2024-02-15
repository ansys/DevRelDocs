# AutomaticMethod

### *class* AutomaticMethod

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AutomaticMethod.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GenerateMesh`](#AutomaticMethod.GenerateMesh)                       | Generate the Mesh.                                                                |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#AutomaticMethod.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AutomaticMethod.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AutomaticMethod.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AutomaticMethod.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AutomaticMethod.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AutomaticMethod.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AutomaticMethod.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AutomaticMethod.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AutomaticMethod.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AutomaticMethod.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AutomaticMethod.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AutomaticMethod.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AutomaticMethod.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AutomaticMethod.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AutomaticMethod.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`AggressiveInflateOption`](#AutomaticMethod.AggressiveInflateOption)                                                  | Gets or sets the AggressiveInflateOption.                                                        |
|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`AggressiveTetImprovement`](#AutomaticMethod.AggressiveTetImprovement)                                                | Gets or sets the AggressiveTetImprovement.                                                       |
| [`ControlMessages`](#AutomaticMethod.ControlMessages)                                                                  | Gets the ControlMessages.                                                                        |
| [`CornerAngle`](#AutomaticMethod.CornerAngle)                                                                          | Gets or sets the CornerAngle.                                                                    |
| [`DefeatureLayerVolume`](#AutomaticMethod.DefeatureLayerVolume)                                                        | Gets or sets the DefeatureLayerVolume.                                                           |
| [`ElementMidsideNodes`](#AutomaticMethod.ElementMidsideNodes)                                                          | Gets or sets the ElementMidsideNodes.                                                            |
| [`ElementOrder`](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ElementOrder)                                  | Gets or sets the ElementOrder.                                                                   |
| [`GenerateLayersUsingFacets`](#AutomaticMethod.GenerateLayersUsingFacets)                                              | Gets or sets the GenerateLayersUsingFacets.                                                      |
| [`InflateRelativeTolerance`](#AutomaticMethod.InflateRelativeTolerance)                                                | Gets or sets the InflateRelativeTolerance.                                                       |
| [`LayerHeight`](#AutomaticMethod.LayerHeight)                                                                          | Gets or sets the LayerHeight.                                                                    |
| [`LayerStart`](#AutomaticMethod.LayerStart)                                                                            | Gets or sets the LayerStart.                                                                     |
| [`MeshInCenter`](#AutomaticMethod.MeshInCenter)                                                                        | Gets or sets the MeshInCenter.                                                                   |
| [`Method`](#AutomaticMethod.Method)                                                                                    | Gets or sets the Method.                                                                         |
| [`OverlappingAngle`](#AutomaticMethod.OverlappingAngle)                                                                | Gets or sets the OverlappingAngle.                                                               |
| [`ProjectCornersToTop`](#AutomaticMethod.ProjectCornersToTop)                                                          | Gets or sets the ProjectCornersToTop.                                                            |
| [`RelativeTolerance`](#AutomaticMethod.RelativeTolerance)                                                              | Gets or sets the PrimeRelativeTolerance.                                                         |
| [`RepairFacets`](#AutomaticMethod.RepairFacets)                                                                        | Gets or sets the RepairFacets.                                                                   |
| [`SlicerFeatureAngle`](#AutomaticMethod.SlicerFeatureAngle)                                                            | Gets or sets the SlicerFeatureAngle.                                                             |
| [`SliverTriangleHeight`](#AutomaticMethod.SliverTriangleHeight)                                                        | Gets or sets the SliverTriangleHeight.                                                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`ProjectionFactor`](#AutomaticMethod.ProjectionFactor)                                                                | Gets or sets the ProjectionFactor.                                                               |
| [`StretchFactorX`](#AutomaticMethod.StretchFactorX)                                                                    | Gets or sets the StretchFactorX.                                                                 |
| [`StretchFactorY`](#AutomaticMethod.StretchFactorY)                                                                    | Gets or sets the StretchFactorY.                                                                 |
| [`StretchFactorZ`](#AutomaticMethod.StretchFactorZ)                                                                    | Gets or sets the StretchFactorZ.                                                                 |
| [`SpacingOption`](#AutomaticMethod.SpacingOption)                                                                      | Gets or sets the SpacingOption.                                                                  |
| [`SubsampleRate`](#AutomaticMethod.SubsampleRate)                                                                      | Gets or sets the SubsampleRate.                                                                  |
| [`BFCartSubType`](#AutomaticMethod.BFCartSubType)                                                                      | Gets the BFCartSubType.                                                                          |
| [`Refinement`](Refinement.md#Refinement)                                                                               | Gets or sets the Refinement.                                                                     |
| [`FillingFraction`](#AutomaticMethod.FillingFraction)                                                                  | Gets or sets the FillingFraction.                                                                |
| [`ApproximativeNumberOfElementsPerPart`](#AutomaticMethod.ApproximativeNumberOfElementsPerPart)                        | Gets or sets the ApproximativeNumberOfElementsPerPart.                                           |
| [`DecompositionType`](#AutomaticMethod.DecompositionType)                                                              | Gets or sets the MZDecompositionType in Multizone ( 0 = Standard, 1 = ThinSweep, 2 = CartSweep). |
| [`CartSweepSpacingOption`](#AutomaticMethod.CartSweepSpacingOption)                                                    | Gets or sets the  CartSweep SpacingOption in Multizone ( 0 = Uniform, 1 = Key-Points).           |
| [`SurfaceMeshMethod`](#AutomaticMethod.SurfaceMeshMethod)                                                              | Gets or sets the SurfaceMeshMethod.                                                              |
| [`SweepNumberDivisions`](#AutomaticMethod.SweepNumberDivisions)                                                        | Gets or sets the SweepNumberDivisions.                                                           |
| [`NumberOfCellsAcrossGap`](#AutomaticMethod.NumberOfCellsAcrossGap)                                                    | Gets or sets the NumberOfCellsAcrossGap.                                                         |
| [`FaceProximityGapFactor`](#AutomaticMethod.FaceProximityGapFactor)                                                    | Gets or sets the FaceProximityGapFactor for PCTet.                                               |
| [`FilletCollapse`](#AutomaticMethod.FilletCollapse)                                                                    | Gets or sets the FilletCollapse for AutoNodeMove under PCTet ( 0 = No, 1 = ProgramControlled ).  |
| [`ImprovementIterations`](#AutomaticMethod.ImprovementIterations)                                                      | Gets or sets the ImprovementIterations for AutoNodeMove under PCTet.                             |
| [`NumberOfElementLayers`](#AutomaticMethod.NumberOfElementLayers)                                                      | Gets or sets the NumberOfElementLayers for PCTet.                                                |
| [`TetraGrowthRate`](#AutomaticMethod.TetraGrowthRate)                                                                  | Gets or sets the TetraGrowthRate.                                                                |
| [`PreserveBoundaries`](#AutomaticMethod.PreserveBoundaries)                                                            | Gets or sets the PreserveBoundaries.                                                             |
| [`SourceTargetSelection`](#AutomaticMethod.SourceTargetSelection)                                                      | Gets or sets the SourceTargetSelection.                                                          |
| [`LateralDefeatureSize`](#AutomaticMethod.LateralDefeatureSize)                                                        | Gets or sets the LateralDefeatureSize.                                                           |
| [`StackingDefeatureSize`](#AutomaticMethod.StackingDefeatureSize)                                                      | Gets or sets the StackingDefeatureSize.                                                          |
| [`FreeMeshType`](#AutomaticMethod.FreeMeshType)                                                                        | Gets or sets the FreeMeshType.                                                                   |
| [`MappedSweptType`](#AutomaticMethod.MappedSweptType)                                                                  | Gets or sets the MappedSweptType.                                                                |
| [`SweepBiasValue`](#AutomaticMethod.SweepBiasValue)                                                                    | Gets or sets the SweepBiasValue.                                                                 |
| [`SweepESizeType`](#AutomaticMethod.SweepESizeType)                                                                    | Gets or sets the SweepESizeType.                                                                 |
| [`RadialGrowthRate`](#AutomaticMethod.RadialGrowthRate)                                                                | Gets or sets the RadialGrowthRate.                                                               |
| [`FreeFaceMeshType`](#AutomaticMethod.FreeFaceMeshType)                                                                | Gets or sets the FreeFaceMeshType.                                                               |
| [`SweepSizeBehavior`](#AutomaticMethod.SweepSizeBehavior)                                                              | Gets or sets the SweepSizeBehavior.                                                              |
| [`WallThickness`](#AutomaticMethod.WallThickness)                                                                      | Gets or sets the WallThickness.                                                                  |
| [`BFCartTolerance`](#AutomaticMethod.BFCartTolerance)                                                                  | Gets the BFCartTolerance.                                                                        |
| [`CartesianSize`](#AutomaticMethod.CartesianSize)                                                                      | Gets or sets the CartesianSize in Multizone.                                                     |
| [`CurvatureNormalAngle`](#AutomaticMethod.CurvatureNormalAngle)                                                        | Gets or sets the CurvatureNormalAngle.                                                           |
| [`Clearence`](#AutomaticMethod.Clearence)                                                                              | Gets or sets the Clearence.                                                                      |
| [`SweepElementSize`](#AutomaticMethod.SweepElementSize)                                                                | Gets or sets the SweepElementSize.                                                               |
| [`MaximumElementSize`](#AutomaticMethod.MaximumElementSize)                                                            | Gets or sets the MaximumElementSize.                                                             |
| [`MinimumSizeLimit`](#AutomaticMethod.MinimumSizeLimit)                                                                | Gets or sets the MinimumSizeLimit.                                                               |
| [`KeyPointsTolerance`](#AutomaticMethod.KeyPointsTolerance)                                                            | Gets or sets the KeyPoints Tolerance in Multizone.                                               |
| [`MinimumEdgeLength`](#AutomaticMethod.MinimumEdgeLength)                                                              | Gets the MinimumEdgeLength.                                                                      |
| [`DefeaturingTolerance`](#AutomaticMethod.DefeaturingTolerance)                                                        | Gets or sets the DefeaturingTolerance.                                                           |
| [`ParticleDiameter`](#AutomaticMethod.ParticleDiameter)                                                                | Gets or sets the ParticleDiameter.                                                               |
| [`FeatureProtectionAngle`](#AutomaticMethod.FeatureProtectionAngle)                                                    | Gets or sets the DihedralAngle for AutoNodeMove under PCTet.                                     |
| [`MinimumThickness`](#AutomaticMethod.MinimumThickness)                                                                | Gets or sets the MinimumThickness for PCTet.                                                     |
| [`FeatureAngle`](#AutomaticMethod.FeatureAngle)                                                                        | Gets or sets the FeatureAngle.                                                                   |
| [`SplitAngle`](#AutomaticMethod.SplitAngle)                                                                            | Gets or sets the SplitAngle in Multizone.                                                        |
| [`SweepThickness`](#AutomaticMethod.SweepThickness)                                                                    | Gets or sets the SweepThickness in Multizone.                                                    |
| [`KeyPointsSelection`](#AutomaticMethod.KeyPointsSelection)                                                            | Gets or sets the KeyPointsSelection.                                                             |
| [`FillingDirection`](#AutomaticMethod.FillingDirection)                                                                | Gets or sets the FillingDirection.                                                               |
| [`DefinedBy`](#AutomaticMethod.DefinedBy)                                                                              | Gets or sets the DefinedBy.                                                                      |
| [`ElementOption`](#AutomaticMethod.ElementOption)                                                                      | Gets or sets the ElementOption.                                                                  |
| [`AutomaticNodeMovement`](#AutomaticMethod.AutomaticNodeMovement)                                                      | Gets or sets the AutomaticNodeMovement method under PCTet.                                       |
| [`MeshFlowControl`](#AutomaticMethod.MeshFlowControl)                                                                  | Gets or sets the MeshFlowControl.                                                                |
| [`MeshType`](#AutomaticMethod.MeshType)                                                                                | Gets or sets the MeshType.                                                                       |
| [`TriangleReduction`](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#TriangleReduction)                   | Gets or sets the TriangleReduction.                                                              |
| [`SolidShellElementForStacker`](#AutomaticMethod.SolidShellElementForStacker)                                          | Gets or sets the SolidShellElementForStacker.                                                    |
| [`SolidShellElementForStackerScopingMethod`](#AutomaticMethod.SolidShellElementForStackerScopingMethod)                | Gets or sets the SolidShellElementForStackerScopingMethod.                                       |
| [`StackingAxis`](#AutomaticMethod.StackingAxis)                                                                        | Gets or sets the StackingAxis.                                                                   |
| [`StackerFreeFaceMeshType`](#AutomaticMethod.StackerFreeFaceMeshType)                                                  | Gets or sets the StackerFreeFaceMeshType.                                                        |
| [`StackerTriangleReduction`](#AutomaticMethod.StackerTriangleReduction)                                                | Gets or sets the StackerTriangleReduction.                                                       |
| [`Algorithm`](#AutomaticMethod.Algorithm)                                                                              | Gets or sets the Algorithm.                                                                      |
| [`SweepBiasType`](#AutomaticMethod.SweepBiasType)                                                                      | Gets or sets the SweepBiasType.                                                                  |
| [`Active`](#AutomaticMethod.Active)                                                                                    | Gets the Active.                                                                                 |
| [`ProjectInConstantZPlane`](#AutomaticMethod.ProjectInConstantZPlane)                                                  | Gets or sets the ProjectInConstantZPlane.                                                        |
| [`MeshUsingVoxelization`](#AutomaticMethod.MeshUsingVoxelization)                                                      | Gets or sets the MeshUsingVoxelization.                                                          |
| [`ConstrainBoundary`](#AutomaticMethod.ConstrainBoundary)                                                              | Gets or sets the ConstrainBoundary.                                                              |
| [`MeshBasedDefeaturing`](#AutomaticMethod.MeshBasedDefeaturing)                                                        | Gets or sets the MeshBasedDefeaturing.                                                           |
| [`PartialFill`](#AutomaticMethod.PartialFill)                                                                          | Gets or sets the PartialFill.                                                                    |
| [`MatchMeshWherePossible`](#AutomaticMethod.MatchMeshWherePossible)                                                    | Gets or sets the MatchMeshWherePossible.                                                         |
| [`SmoothMeshSpacing`](#AutomaticMethod.SmoothMeshSpacing)                                                              | Gets or sets the SmoothMeshSpacing in Multizone.                                                 |
| [`RefineAtThinSection`](#AutomaticMethod.RefineAtThinSection)                                                          | Gets or sets the RefineAtThinSection for PCTet.                                                  |
| [`RefineSurfaceMesh`](#AutomaticMethod.RefineSurfaceMesh)                                                              | Gets or sets the RefineSurfaceMesh for PCTet.                                                    |
| [`RestrictNodeMovementsToSurface`](#AutomaticMethod.RestrictNodeMovementsToSurface)                                    | Gets or sets the RestrictNodeMovementsToSurface for AutoNodeMove under PCTet.                    |
| [`ShowAdvancedImproveOptions`](#AutomaticMethod.ShowAdvancedImproveOptions)                                            | Gets or sets the ShowAdvancedImproveOptions for AutoNodeMove under PCTet.                        |
| [`SmoothTransition`](#AutomaticMethod.SmoothTransition)                                                                | Gets or sets the SmoothTransition.                                                               |
| [`ReuseBlocking`](#AutomaticMethod.ReuseBlocking)                                                                      | Gets or sets the ReuseBlocking.                                                                  |
| [`UseSplitAngle`](#AutomaticMethod.UseSplitAngle)                                                                      | Gets or sets the UseSplitAngle in Multizone.                                                     |
| [`WriteICEMCFDFiles`](#AutomaticMethod.WriteICEMCFDFiles)                                                              | Gets or sets the WriteICEMCFDFiles.                                                              |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                                                               |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                                                                 |
| [`ParticleCoordinateSystem`](#AutomaticMethod.ParticleCoordinateSystem)                                                | Gets or sets the ParticleCoordinateSystem.                                                       |
| [`SolidShellElementForStackerNamedSelection`](#AutomaticMethod.SolidShellElementForStackerNamedSelection)              | Gets or sets the SolidShellElementForStackerNamedSelection.                                      |
| [`StackerCoordinateSystem`](#AutomaticMethod.StackerCoordinateSystem)                                                  | Gets or sets the StackerCoordinateSystem.                                                        |
| [`Location`](#AutomaticMethod.Location)                                                                                | Gets or sets the Location.                                                                       |
| [`SolidShellElementForStackerGeometrySelection`](#AutomaticMethod.SolidShellElementForStackerGeometrySelection)        | Gets or sets the SolidShellElementForStackerGeometrySelection.                                   |
| [`SourceLocation`](#AutomaticMethod.SourceLocation)                                                                    | Gets or sets the SourceLocation.                                                                 |
| [`SweepEdges`](#AutomaticMethod.SweepEdges)                                                                            | Gets or sets the SweepEdges.                                                                     |
| [`TargetLocation`](#AutomaticMethod.TargetLocation)                                                                    | Gets or sets the TargetLocation.                                                                 |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                     |
| [`ScopingMethod`](#AutomaticMethod.ScopingMethod)                                                                      | Gets or sets the ScopingMethod.                                                                  |
| [`Suppressed`](#AutomaticMethod.Suppressed)                                                                            | Gets or sets the Suppressed.                                                                     |
| [`Children`](#AutomaticMethod.Children)                                                                                | Gets the list of children.                                                                       |
| [`Comments`](#AutomaticMethod.Comments)                                                                                | Gets the list of associated comments.                                                            |
| [`Figures`](#AutomaticMethod.Figures)                                                                                  | Gets the list of associated figures.                                                             |
| [`Images`](#AutomaticMethod.Images)                                                                                    | Gets the list of associated images.                                                              |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                                               |
| [`Properties`](#AutomaticMethod.Properties)                                                                            | Gets the list of properties for this object.                                                     |
| [`VisibleProperties`](#AutomaticMethod.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.                                    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import AutomaticMethod
```

## Property detail

### *property* AutomaticMethod.AggressiveInflateOption *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveInflateOption.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.AggressiveTetImprovement *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveTetImprovement.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ControlMessages *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ControlMessages.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.CornerAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CornerAngle.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.DefeatureLayerVolume *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureLayerVolume.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ElementMidsideNodes *: [Ansys.Mechanical.DataModel.Enums.ElementMidsideNodesType](../../../../Mechanical/DataModel/Enums/ElementMidsideNodesType.md#ElementMidsideNodesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementMidsideNodes.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ElementOrder *: [Ansys.Mechanical.DataModel.Enums.ElementOrder](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ElementOrder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOrder.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.GenerateLayersUsingFacets *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateLayersUsingFacets.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.InflateRelativeTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflateRelativeTolerance.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.LayerHeight *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerHeight.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.LayerStart *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerStart.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MeshInCenter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshInCenter.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Method *: [Ansys.Mechanical.DataModel.Enums.MethodType](../../../../Mechanical/DataModel/Enums/MethodType.md#MethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.OverlappingAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OverlappingAngle.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ProjectCornersToTop *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectCornersToTop.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.RelativeTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimeRelativeTolerance.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.RepairFacets *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RepairFacets.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SlicerFeatureAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlicerFeatureAngle.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SliverTriangleHeight *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SliverTriangleHeight.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ProjectionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectionFactor.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StretchFactorX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorX.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StretchFactorY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorY.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StretchFactorZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorZ.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SpacingOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpacingOption.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SubsampleRate *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.BFCartSubType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BFCartSubType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Refinement *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Refinement.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.FillingFraction *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillingFraction.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ApproximativeNumberOfElementsPerPart *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApproximativeNumberOfElementsPerPart.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.DecompositionType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MZDecompositionType in Multizone ( 0 = Standard, 1 = ThinSweep, 2 = CartSweep).

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.CartSweepSpacingOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  CartSweep SpacingOption in Multizone ( 0 = Uniform, 1 = Key-Points).

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SurfaceMeshMethod *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SurfaceMeshMethod.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SweepNumberDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepNumberDivisions.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.NumberOfCellsAcrossGap *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfCellsAcrossGap.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.FaceProximityGapFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceProximityGapFactor for PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.FilletCollapse *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilletCollapse for AutoNodeMove under PCTet ( 0 = No, 1 = ProgramControlled ).

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ImprovementIterations *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImprovementIterations for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.NumberOfElementLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfElementLayers for PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.TetraGrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TetraGrowthRate.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.PreserveBoundaries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreserveBoundaries.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SourceTargetSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceTargetSelection.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.LateralDefeatureSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LateralDefeatureSize.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StackingDefeatureSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackingDefeatureSize.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.FreeMeshType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeMeshType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MappedSweptType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MappedSweptType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SweepBiasValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepBiasValue.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SweepESizeType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepESizeType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.RadialGrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGrowthRate.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.FreeFaceMeshType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeFaceMeshType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SweepSizeBehavior *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepSizeBehavior.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.BFCartTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BFCartTolerance.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.CartesianSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CartesianSize in Multizone.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Clearence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Clearence.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SweepElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepElementSize.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MaximumElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumElementSize.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MinimumSizeLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSizeLimit.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.KeyPointsTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeyPoints Tolerance in Multizone.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MinimumEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEdgeLength.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.DefeaturingTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeaturingTolerance.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ParticleDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticleDiameter.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.FeatureProtectionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DihedralAngle for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MinimumThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumThickness for PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.FeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FeatureAngle.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SplitAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SplitAngle in Multizone.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SweepThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepThickness in Multizone.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.KeyPointsSelection *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeyPointsSelection.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.FillingDirection *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillingDirection.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.DefinedBy *: [Ansys.Mechanical.DataModel.Enums.PatchIndependentDefineType](../../../../Mechanical/DataModel/Enums/PatchIndependentDefineType.md#PatchIndependentDefineType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefinedBy.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ElementOption *: [Ansys.Mechanical.DataModel.Enums.SweepElementOptionType](../../../../Mechanical/DataModel/Enums/SweepElementOptionType.md#SweepElementOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOption.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.AutomaticNodeMovement *: [Ansys.Mechanical.DataModel.Enums.AutomaticNodeMovementMethod](../../../../Mechanical/DataModel/Enums/AutomaticNodeMovementMethod.md#AutomaticNodeMovementMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticNodeMovement method under PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MeshFlowControl *: [Ansys.Mechanical.DataModel.Enums.MeshFlowControlMethod](../../../../Mechanical/DataModel/Enums/MeshFlowControlMethod.md#MeshFlowControlMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshFlowControl.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MeshType *: [Ansys.Mechanical.DataModel.Enums.MethodMeshType](../../../../Mechanical/DataModel/Enums/MethodMeshType.md#MethodMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.TriangleReduction *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleReduction.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SolidShellElementForStacker *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStacker.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SolidShellElementForStackerScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StackingAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackingAxis.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StackerFreeFaceMeshType *: [Ansys.Mechanical.DataModel.Enums.StackerMethodMeshType](../../../../Mechanical/DataModel/Enums/StackerMethodMeshType.md#StackerMethodMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerFreeFaceMeshType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StackerTriangleReduction *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerTriangleReduction.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MeshMethodAlgorithm](../../../../Mechanical/DataModel/Enums/MeshMethodAlgorithm.md#MeshMethodAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Algorithm.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SweepBiasType *: Ansys.Mechanical.DataModel.Enums.BiasType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepBiasType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ProjectInConstantZPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectInConstantZPlane.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MeshUsingVoxelization *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshUsingVoxelization.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ConstrainBoundary *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstrainBoundary.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MeshBasedDefeaturing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshBasedDefeaturing.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.PartialFill *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartialFill.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MatchMeshWherePossible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MatchMeshWherePossible.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SmoothMeshSpacing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothMeshSpacing in Multizone.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.RefineAtThinSection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefineAtThinSection for PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.RefineSurfaceMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefineSurfaceMesh for PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.RestrictNodeMovementsToSurface *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestrictNodeMovementsToSurface for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ShowAdvancedImproveOptions *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAdvancedImproveOptions for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SmoothTransition *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothTransition.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ReuseBlocking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReuseBlocking.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.UseSplitAngle *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseSplitAngle in Multizone.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.WriteICEMCFDFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WriteICEMCFDFiles.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ParticleCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticleCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SolidShellElementForStackerNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StackerCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SolidShellElementForStackerGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SweepEdges *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepEdges.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AutomaticMethod.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
