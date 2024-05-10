<a id="automaticmethod"></a>

# AutomaticMethod

<a id="AutomaticMethod"></a>

### *class* AutomaticMethod

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AutomaticMethod.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import AutomaticMethod
```

<a id="property-detail"></a>

## Property detail

<a id="AutomaticMethod.AggressiveInflateOption"></a>

### *property* AutomaticMethod.AggressiveInflateOption *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveInflateOption.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AggressiveTetImprovement"></a>

### *property* AutomaticMethod.AggressiveTetImprovement *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveTetImprovement.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ControlMessages"></a>

### *property* AutomaticMethod.ControlMessages *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ControlMessages.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CornerAngle"></a>

### *property* AutomaticMethod.CornerAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CornerAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.DefeatureLayerVolume"></a>

### *property* AutomaticMethod.DefeatureLayerVolume *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureLayerVolume.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ElementMidsideNodes"></a>

### *property* AutomaticMethod.ElementMidsideNodes *: [Ansys.Mechanical.DataModel.Enums.ElementMidsideNodesType](../../../../Mechanical/DataModel/Enums/ElementMidsideNodesType.md#ElementMidsideNodesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementMidsideNodes.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ElementOrder"></a>

### *property* AutomaticMethod.ElementOrder *: [Ansys.Mechanical.DataModel.Enums.ElementOrder](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ElementOrder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOrder.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GenerateLayersUsingFacets"></a>

### *property* AutomaticMethod.GenerateLayersUsingFacets *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateLayersUsingFacets.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.InflateRelativeTolerance"></a>

### *property* AutomaticMethod.InflateRelativeTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflateRelativeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.LayerHeight"></a>

### *property* AutomaticMethod.LayerHeight *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.LayerStart"></a>

### *property* AutomaticMethod.LayerStart *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerStart.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MeshInCenter"></a>

### *property* AutomaticMethod.MeshInCenter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshInCenter.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Method"></a>

### *property* AutomaticMethod.Method *: [Ansys.Mechanical.DataModel.Enums.MethodType](../../../../Mechanical/DataModel/Enums/MethodType.md#MethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.OverlappingAngle"></a>

### *property* AutomaticMethod.OverlappingAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OverlappingAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ProjectCornersToTop"></a>

### *property* AutomaticMethod.ProjectCornersToTop *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectCornersToTop.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RelativeTolerance"></a>

### *property* AutomaticMethod.RelativeTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimeRelativeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RepairFacets"></a>

### *property* AutomaticMethod.RepairFacets *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RepairFacets.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SlicerFeatureAngle"></a>

### *property* AutomaticMethod.SlicerFeatureAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlicerFeatureAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SliverTriangleHeight"></a>

### *property* AutomaticMethod.SliverTriangleHeight *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SliverTriangleHeight.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.InternalObject"></a>

### *property* AutomaticMethod.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ProjectionFactor"></a>

### *property* AutomaticMethod.ProjectionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectionFactor.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StretchFactorX"></a>

### *property* AutomaticMethod.StretchFactorX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorX.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StretchFactorY"></a>

### *property* AutomaticMethod.StretchFactorY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorY.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StretchFactorZ"></a>

### *property* AutomaticMethod.StretchFactorZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorZ.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SpacingOption"></a>

### *property* AutomaticMethod.SpacingOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpacingOption.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SubsampleRate"></a>

### *property* AutomaticMethod.SubsampleRate *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.BFCartSubType"></a>

### *property* AutomaticMethod.BFCartSubType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BFCartSubType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Refinement"></a>

### *property* AutomaticMethod.Refinement *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Refinement.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FillingFraction"></a>

### *property* AutomaticMethod.FillingFraction *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillingFraction.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ApproximativeNumberOfElementsPerPart"></a>

### *property* AutomaticMethod.ApproximativeNumberOfElementsPerPart *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApproximativeNumberOfElementsPerPart.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.DecompositionType"></a>

### *property* AutomaticMethod.DecompositionType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MZDecompositionType in Multizone ( 0 = Standard, 1 = ThinSweep, 2 = CartSweep).

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CartSweepSpacingOption"></a>

### *property* AutomaticMethod.CartSweepSpacingOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  CartSweep SpacingOption in Multizone ( 0 = Uniform, 1 = Key-Points).

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SurfaceMeshMethod"></a>

### *property* AutomaticMethod.SurfaceMeshMethod *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SurfaceMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepNumberDivisions"></a>

### *property* AutomaticMethod.SweepNumberDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepNumberDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.NumberOfCellsAcrossGap"></a>

### *property* AutomaticMethod.NumberOfCellsAcrossGap *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfCellsAcrossGap.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FaceProximityGapFactor"></a>

### *property* AutomaticMethod.FaceProximityGapFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceProximityGapFactor for PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FilletCollapse"></a>

### *property* AutomaticMethod.FilletCollapse *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilletCollapse for AutoNodeMove under PCTet ( 0 = No, 1 = ProgramControlled ).

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ImprovementIterations"></a>

### *property* AutomaticMethod.ImprovementIterations *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImprovementIterations for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.NumberOfElementLayers"></a>

### *property* AutomaticMethod.NumberOfElementLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfElementLayers for PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.TetraGrowthRate"></a>

### *property* AutomaticMethod.TetraGrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TetraGrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.PreserveBoundaries"></a>

### *property* AutomaticMethod.PreserveBoundaries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreserveBoundaries.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SourceTargetSelection"></a>

### *property* AutomaticMethod.SourceTargetSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceTargetSelection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.LateralDefeatureSize"></a>

### *property* AutomaticMethod.LateralDefeatureSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LateralDefeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StackingDefeatureSize"></a>

### *property* AutomaticMethod.StackingDefeatureSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackingDefeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FreeMeshType"></a>

### *property* AutomaticMethod.FreeMeshType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeMeshType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MappedSweptType"></a>

### *property* AutomaticMethod.MappedSweptType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MappedSweptType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepBiasValue"></a>

### *property* AutomaticMethod.SweepBiasValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepBiasValue.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepESizeType"></a>

### *property* AutomaticMethod.SweepESizeType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepESizeType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RadialGrowthRate"></a>

### *property* AutomaticMethod.RadialGrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FreeFaceMeshType"></a>

### *property* AutomaticMethod.FreeFaceMeshType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeFaceMeshType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepSizeBehavior"></a>

### *property* AutomaticMethod.SweepSizeBehavior *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepSizeBehavior.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.WallThickness"></a>

### *property* AutomaticMethod.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.BFCartTolerance"></a>

### *property* AutomaticMethod.BFCartTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BFCartTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CartesianSize"></a>

### *property* AutomaticMethod.CartesianSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CartesianSize in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CurvatureNormalAngle"></a>

### *property* AutomaticMethod.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Clearence"></a>

### *property* AutomaticMethod.Clearence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Clearence.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepElementSize"></a>

### *property* AutomaticMethod.SweepElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepElementSize.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MaximumElementSize"></a>

### *property* AutomaticMethod.MaximumElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumElementSize.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MinimumSizeLimit"></a>

### *property* AutomaticMethod.MinimumSizeLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSizeLimit.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.KeyPointsTolerance"></a>

### *property* AutomaticMethod.KeyPointsTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeyPoints Tolerance in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MinimumEdgeLength"></a>

### *property* AutomaticMethod.MinimumEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.DefeaturingTolerance"></a>

### *property* AutomaticMethod.DefeaturingTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeaturingTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ParticleDiameter"></a>

### *property* AutomaticMethod.ParticleDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticleDiameter.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FeatureProtectionAngle"></a>

### *property* AutomaticMethod.FeatureProtectionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DihedralAngle for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MinimumThickness"></a>

### *property* AutomaticMethod.MinimumThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumThickness for PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FeatureAngle"></a>

### *property* AutomaticMethod.FeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FeatureAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SplitAngle"></a>

### *property* AutomaticMethod.SplitAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SplitAngle in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepThickness"></a>

### *property* AutomaticMethod.SweepThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepThickness in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.KeyPointsSelection"></a>

### *property* AutomaticMethod.KeyPointsSelection *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeyPointsSelection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FillingDirection"></a>

### *property* AutomaticMethod.FillingDirection *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillingDirection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.DefinedBy"></a>

### *property* AutomaticMethod.DefinedBy *: [Ansys.Mechanical.DataModel.Enums.PatchIndependentDefineType](../../../../Mechanical/DataModel/Enums/PatchIndependentDefineType.md#PatchIndependentDefineType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefinedBy.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ElementOption"></a>

### *property* AutomaticMethod.ElementOption *: [Ansys.Mechanical.DataModel.Enums.SweepElementOptionType](../../../../Mechanical/DataModel/Enums/SweepElementOptionType.md#SweepElementOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOption.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutomaticNodeMovement"></a>

### *property* AutomaticMethod.AutomaticNodeMovement *: [Ansys.Mechanical.DataModel.Enums.AutomaticNodeMovementMethod](../../../../Mechanical/DataModel/Enums/AutomaticNodeMovementMethod.md#AutomaticNodeMovementMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticNodeMovement method under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MeshFlowControl"></a>

### *property* AutomaticMethod.MeshFlowControl *: [Ansys.Mechanical.DataModel.Enums.MeshFlowControlMethod](../../../../Mechanical/DataModel/Enums/MeshFlowControlMethod.md#MeshFlowControlMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshFlowControl.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MeshType"></a>

### *property* AutomaticMethod.MeshType *: [Ansys.Mechanical.DataModel.Enums.MethodMeshType](../../../../Mechanical/DataModel/Enums/MethodMeshType.md#MethodMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.TriangleReduction"></a>

### *property* AutomaticMethod.TriangleReduction *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleReduction.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SolidShellElementForStacker"></a>

### *property* AutomaticMethod.SolidShellElementForStacker *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStacker.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SolidShellElementForStackerScopingMethod"></a>

### *property* AutomaticMethod.SolidShellElementForStackerScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StackingAxis"></a>

### *property* AutomaticMethod.StackingAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackingAxis.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StackerFreeFaceMeshType"></a>

### *property* AutomaticMethod.StackerFreeFaceMeshType *: [Ansys.Mechanical.DataModel.Enums.StackerMethodMeshType](../../../../Mechanical/DataModel/Enums/StackerMethodMeshType.md#StackerMethodMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerFreeFaceMeshType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StackerTriangleReduction"></a>

### *property* AutomaticMethod.StackerTriangleReduction *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerTriangleReduction.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Algorithm"></a>

### *property* AutomaticMethod.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MeshMethodAlgorithm](../../../../Mechanical/DataModel/Enums/MeshMethodAlgorithm.md#MeshMethodAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Algorithm.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepBiasType"></a>

### *property* AutomaticMethod.SweepBiasType *: Ansys.Mechanical.DataModel.Enums.BiasType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepBiasType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Active"></a>

### *property* AutomaticMethod.Active *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ProjectInConstantZPlane"></a>

### *property* AutomaticMethod.ProjectInConstantZPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectInConstantZPlane.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MeshUsingVoxelization"></a>

### *property* AutomaticMethod.MeshUsingVoxelization *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshUsingVoxelization.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ConstrainBoundary"></a>

### *property* AutomaticMethod.ConstrainBoundary *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstrainBoundary.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MeshBasedDefeaturing"></a>

### *property* AutomaticMethod.MeshBasedDefeaturing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshBasedDefeaturing.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.PartialFill"></a>

### *property* AutomaticMethod.PartialFill *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartialFill.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MatchMeshWherePossible"></a>

### *property* AutomaticMethod.MatchMeshWherePossible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MatchMeshWherePossible.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SmoothMeshSpacing"></a>

### *property* AutomaticMethod.SmoothMeshSpacing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothMeshSpacing in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RefineAtThinSection"></a>

### *property* AutomaticMethod.RefineAtThinSection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefineAtThinSection for PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RefineSurfaceMesh"></a>

### *property* AutomaticMethod.RefineSurfaceMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefineSurfaceMesh for PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RestrictNodeMovementsToSurface"></a>

### *property* AutomaticMethod.RestrictNodeMovementsToSurface *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestrictNodeMovementsToSurface for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ShowAdvancedImproveOptions"></a>

### *property* AutomaticMethod.ShowAdvancedImproveOptions *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAdvancedImproveOptions for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SmoothTransition"></a>

### *property* AutomaticMethod.SmoothTransition *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothTransition.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ReuseBlocking"></a>

### *property* AutomaticMethod.ReuseBlocking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReuseBlocking.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.UseSplitAngle"></a>

### *property* AutomaticMethod.UseSplitAngle *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseSplitAngle in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.WriteICEMCFDFiles"></a>

### *property* AutomaticMethod.WriteICEMCFDFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WriteICEMCFDFiles.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CoordinateSystem"></a>

### *property* AutomaticMethod.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.NamedSelection"></a>

### *property* AutomaticMethod.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ParticleCoordinateSystem"></a>

### *property* AutomaticMethod.ParticleCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticleCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SolidShellElementForStackerNamedSelection"></a>

### *property* AutomaticMethod.SolidShellElementForStackerNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StackerCoordinateSystem"></a>

### *property* AutomaticMethod.StackerCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Location"></a>

### *property* AutomaticMethod.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SolidShellElementForStackerGeometrySelection"></a>

### *property* AutomaticMethod.SolidShellElementForStackerGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SourceLocation"></a>

### *property* AutomaticMethod.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepEdges"></a>

### *property* AutomaticMethod.SweepEdges *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepEdges.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.TargetLocation"></a>

### *property* AutomaticMethod.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.DataModelObjectCategory"></a>

### *property* AutomaticMethod.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ScopingMethod"></a>

### *property* AutomaticMethod.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Suppressed"></a>

### *property* AutomaticMethod.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Children"></a>

### *property* AutomaticMethod.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Comments"></a>

### *property* AutomaticMethod.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Figures"></a>

### *property* AutomaticMethod.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Images"></a>

### *property* AutomaticMethod.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AutomaticMethod.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Properties"></a>

### *property* AutomaticMethod.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.VisibleProperties"></a>

### *property* AutomaticMethod.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AutomaticMethod.GenerateMesh"></a>

### AutomaticMethod.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RenameBasedOnDefinition"></a>

### AutomaticMethod.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Delete"></a>

### AutomaticMethod.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GetChildren"></a>

### AutomaticMethod.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AutomaticMethod.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AddComment"></a>

### AutomaticMethod.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AddFigure"></a>

### AutomaticMethod.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AddImage"></a>

### AutomaticMethod.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Activate"></a>

### AutomaticMethod.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CopyTo"></a>

### AutomaticMethod.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Duplicate"></a>

### AutomaticMethod.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GroupAllSimilarChildren"></a>

### AutomaticMethod.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GroupSimilarObjects"></a>

### AutomaticMethod.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.PropertyByName"></a>

### AutomaticMethod.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.PropertyByAPIName"></a>

### AutomaticMethod.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CreateParameter"></a>

### AutomaticMethod.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GetParameter"></a>

### AutomaticMethod.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RemoveParameter"></a>

### AutomaticMethod.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
