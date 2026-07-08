# `AutomaticMethod`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshControls.AutomaticMethod"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.AutomaticMethod

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AutomaticMethod.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AutomaticMethod.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AutomaticMethod.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AutomaticMethod.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AutomaticMethod.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AutomaticMethod.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AutomaticMethod.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AutomaticMethod.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AutomaticMethod.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#AutomaticMethod.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#AutomaticMethod.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AutomaticMethod.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AutomaticMethod.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AutomaticMethod.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#AutomaticMethod.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AutomaticMethod.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AutomaticMethod.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#AutomaticMethod.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Active`](#AutomaticMethod.Active)                                                                             | Gets the Active.                                                                                                                                                                                                                                         |
| [`AggressiveInflateOption`](#AutomaticMethod.AggressiveInflateOption)                                           | Gets or sets the AggressiveInflateOption.                                                                                                                                                                                                                |
| [`AggressiveTetImprovement`](#AutomaticMethod.AggressiveTetImprovement)                                         | Gets or sets the AggressiveTetImprovement.                                                                                                                                                                                                               |
| [`Algorithm`](#AutomaticMethod.Algorithm)                                                                       | Gets or sets the Algorithm.                                                                                                                                                                                                                              |
| [`ApproximativeNumberOfElementsPerPart`](#AutomaticMethod.ApproximativeNumberOfElementsPerPart)                 | Gets or sets the ApproximativeNumberOfElementsPerPart.                                                                                                                                                                                                   |
| [`AutoCollapseShortEdges`](#AutomaticMethod.AutoCollapseShortEdges)                                             | Gets or sets the AutoCollapseShortEdges.                                                                                                                                                                                                                 |
| [`AutoPinchFaces`](#AutomaticMethod.AutoPinchFaces)                                                             | Gets or sets the AutoPinchFaces.                                                                                                                                                                                                                         |
| [`AutoPinchTolerance`](#AutomaticMethod.AutoPinchTolerance)                                                     | Gets or sets the AutoPinchTolerance.                                                                                                                                                                                                                     |
| [`AutoRemoveThinFaces`](#AutomaticMethod.AutoRemoveThinFaces)                                                   | Gets or sets the AutoRemoveThinFaces.                                                                                                                                                                                                                    |
| [`AutoRepairFeatureAngle`](#AutomaticMethod.AutoRepairFeatureAngle)                                             | Gets or sets the AutoRepairFeatureAngle.                                                                                                                                                                                                                 |
| [`AutoRepairPartialDefeature`](#AutomaticMethod.AutoRepairPartialDefeature)                                     | Gets or sets the use of partial defeature, which partially removes thin faces and sharp angles within provided tolerances, such that only topology impacting mesh quality is removed.                                                                    |
| [`AutoSharpAngle`](#AutomaticMethod.AutoSharpAngle)                                                             | Gets or sets the AutoSharpAngle.                                                                                                                                                                                                                         |
| [`AutoShortEdgeLength`](#AutomaticMethod.AutoShortEdgeLength)                                                   | Gets or sets the AutoShortEdgeLength.                                                                                                                                                                                                                    |
| [`AutoThinFaceWidth`](#AutomaticMethod.AutoThinFaceWidth)                                                       | Gets or sets the AutoThinFaceWidth.                                                                                                                                                                                                                      |
| [`AutomaticNodeMovement`](#AutomaticMethod.AutomaticNodeMovement)                                               | Gets or sets the AutomaticNodeMovement method under PCTet.                                                                                                                                                                                               |
| [`BFCartSubType`](#AutomaticMethod.BFCartSubType)                                                               | Gets the BFCartSubType.                                                                                                                                                                                                                                  |
| [`BFCartTolerance`](#AutomaticMethod.BFCartTolerance)                                                           | Gets the BFCartTolerance.                                                                                                                                                                                                                                |
| [`BodyStackingType`](#AutomaticMethod.BodyStackingType)                                                         | Gets or sets the BodyStackingType.                                                                                                                                                                                                                       |
| [`CartSweepSpacingOption`](#AutomaticMethod.CartSweepSpacingOption)                                             | Gets or sets the  CartSweep SpacingOption in Multizone ( 0 = Uniform, 1 = Key-Points).                                                                                                                                                                   |
| [`CartesianSize`](#AutomaticMethod.CartesianSize)                                                               | Gets or sets the CartesianSize in Multizone.                                                                                                                                                                                                             |
| [`Children`](#AutomaticMethod.Children)                                                                         | Gets the list of children.                                                                                                                                                                                                                               |
| [`Clearence`](#AutomaticMethod.Clearence)                                                                       | Gets or sets the Clearence.                                                                                                                                                                                                                              |
| [`Comments`](#AutomaticMethod.Comments)                                                                         | Gets the list of associated comments.                                                                                                                                                                                                                    |
| [`ConstrainBoundary`](#AutomaticMethod.ConstrainBoundary)                                                       | Gets or sets the ConstrainBoundary.                                                                                                                                                                                                                      |
| [`ControlMessages`](#AutomaticMethod.ControlMessages)                                                           | Gets the ControlMessages.                                                                                                                                                                                                                                |
| [`CoordinateSystem`](#AutomaticMethod.CoordinateSystem)                                                         | Gets or sets the CoordinateSystem.                                                                                                                                                                                                                       |
| [`CornerAngle`](#AutomaticMethod.CornerAngle)                                                                   | Gets or sets the CornerAngle.                                                                                                                                                                                                                            |
| [`CurvatureNormalAngle`](#AutomaticMethod.CurvatureNormalAngle)                                                 | Gets or sets the CurvatureNormalAngle.                                                                                                                                                                                                                   |
| [`DataModelObjectCategory`](#AutomaticMethod.DataModelObjectCategory)                                           | Gets the current DataModelObject’s category.                                                                                                                                                                                                             |
| [`DecompositionType`](#AutomaticMethod.DecompositionType)                                                       | Gets or sets the DecompositionType in Multizone.                                                                                                                                                                                                         |
| [`DefeatureLayerVolume`](#AutomaticMethod.DefeatureLayerVolume)                                                 | Gets or sets the DefeatureLayerVolume.                                                                                                                                                                                                                   |
| [`DefeaturingTolerance`](#AutomaticMethod.DefeaturingTolerance)                                                 | Gets or sets the DefeaturingTolerance.                                                                                                                                                                                                                   |
| [`DefinedBy`](#AutomaticMethod.DefinedBy)                                                                       | Gets or sets the DefinedBy.                                                                                                                                                                                                                              |
| [`ElementMidsideNodes`](#AutomaticMethod.ElementMidsideNodes)                                                   | Gets or sets the ElementMidsideNodes.                                                                                                                                                                                                                    |
| [`ElementOption`](#AutomaticMethod.ElementOption)                                                               | Gets or sets the ElementOption.                                                                                                                                                                                                                          |
| [`ElementOrder`](#AutomaticMethod.ElementOrder)                                                                 | Gets or sets the ElementOrder.                                                                                                                                                                                                                           |
| [`FaceProximityGapFactor`](#AutomaticMethod.FaceProximityGapFactor)                                             | Gets or sets the FaceProximityGapFactor for PCTet.                                                                                                                                                                                                       |
| [`FallBackMeshType`](#AutomaticMethod.FallBackMeshType)                                                         | Gets or sets the FallBackMeshType.                                                                                                                                                                                                                       |
| [`FeatureAngle`](#AutomaticMethod.FeatureAngle)                                                                 | Gets or sets the FeatureAngle.                                                                                                                                                                                                                           |
| [`FeatureProtectionAngle`](#AutomaticMethod.FeatureProtectionAngle)                                             | Gets or sets the DihedralAngle for AutoNodeMove under PCTet.                                                                                                                                                                                             |
| [`Figures`](#AutomaticMethod.Figures)                                                                           | Gets the list of associated figures.                                                                                                                                                                                                                     |
| [`FilletCollapse`](#AutomaticMethod.FilletCollapse)                                                             | Gets or sets the FilletCollapse for AutoNodeMove under PCTet ( 0 = No, 1 = ProgramControlled ).                                                                                                                                                          |
| [`FillingDirection`](#AutomaticMethod.FillingDirection)                                                         | Gets or sets the FillingDirection.                                                                                                                                                                                                                       |
| [`FillingFraction`](#AutomaticMethod.FillingFraction)                                                           | Gets or sets the FillingFraction.                                                                                                                                                                                                                        |
| [`FreeFaceMeshType`](#AutomaticMethod.FreeFaceMeshType)                                                         | Gets or sets the FreeFaceMeshType.                                                                                                                                                                                                                       |
| [`FreeMeshType`](#AutomaticMethod.FreeMeshType)                                                                 | Gets or sets the FreeMeshType.                                                                                                                                                                                                                           |
| [`GenerateLayersUsingFacets`](#AutomaticMethod.GenerateLayersUsingFacets)                                       | Gets or sets the GenerateLayersUsingFacets.                                                                                                                                                                                                              |
| [`Images`](#AutomaticMethod.Images)                                                                             | Gets the list of associated images.                                                                                                                                                                                                                      |
| [`ImprovementIterations`](#AutomaticMethod.ImprovementIterations)                                               | Gets or sets the ImprovementIterations for AutoNodeMove under PCTet.                                                                                                                                                                                     |
| [`InflateRelativeTolerance`](#AutomaticMethod.InflateRelativeTolerance)                                         | Gets or sets the InflateRelativeTolerance.                                                                                                                                                                                                               |
| [`InternalObject`](#AutomaticMethod.InternalObject)                                                             | Gets the internal object. For advanced usage only.                                                                                                                                                                                                       |
| [`KeyPointsSelection`](#AutomaticMethod.KeyPointsSelection)                                                     | Gets or sets the KeyPointsSelection.                                                                                                                                                                                                                     |
| [`KeyPointsTolerance`](#AutomaticMethod.KeyPointsTolerance)                                                     | Gets or sets the KeyPoints Tolerance in Multizone.                                                                                                                                                                                                       |
| [`LateralDefeatureSize`](#AutomaticMethod.LateralDefeatureSize)                                                 | Gets or sets the LateralDefeatureSize.                                                                                                                                                                                                                   |
| [`LayerHeight`](#AutomaticMethod.LayerHeight)                                                                   | Gets or sets the LayerHeight.                                                                                                                                                                                                                            |
| [`LayerStart`](#AutomaticMethod.LayerStart)                                                                     | Gets or sets the LayerStart.                                                                                                                                                                                                                             |
| [`Location`](#AutomaticMethod.Location)                                                                         | Gets or sets the Location.                                                                                                                                                                                                                               |
| [`MZSweepNumberDivisions`](#AutomaticMethod.MZSweepNumberDivisions)                                             |                                                                                                                                                                                                                                                          |
| [`MappedSweptType`](#AutomaticMethod.MappedSweptType)                                                           | Gets or sets the MappedSweptType.                                                                                                                                                                                                                        |
| [`MatchMeshWherePossible`](#AutomaticMethod.MatchMeshWherePossible)                                             | Gets or sets the MatchMeshWherePossible.                                                                                                                                                                                                                 |
| [`MaximumElementSize`](#AutomaticMethod.MaximumElementSize)                                                     | Gets or sets the MaximumElementSize.                                                                                                                                                                                                                     |
| [`MeshBasedDefeaturing`](#AutomaticMethod.MeshBasedDefeaturing)                                                 | Gets or sets the MeshBasedDefeaturing.                                                                                                                                                                                                                   |
| [`MeshFlowControl`](#AutomaticMethod.MeshFlowControl)                                                           | Gets or sets the MeshFlowControl.                                                                                                                                                                                                                        |
| [`MeshInCenter`](#AutomaticMethod.MeshInCenter)                                                                 | Gets or sets the MeshInCenter.                                                                                                                                                                                                                           |
| [`MeshType`](#AutomaticMethod.MeshType)                                                                         | Gets or sets the MeshType.                                                                                                                                                                                                                               |
| [`MeshUsingVoxelization`](#AutomaticMethod.MeshUsingVoxelization)                                               | Gets or sets the MeshUsingVoxelization.                                                                                                                                                                                                                  |
| [`Method`](#AutomaticMethod.Method)                                                                             | Gets or sets the Method.                                                                                                                                                                                                                                 |
| [`MinimumEdgeLength`](#AutomaticMethod.MinimumEdgeLength)                                                       | Gets the MinimumEdgeLength.                                                                                                                                                                                                                              |
| [`MinimumSizeLimit`](#AutomaticMethod.MinimumSizeLimit)                                                         | Gets or sets the MinimumSizeLimit.                                                                                                                                                                                                                       |
| [`MinimumThickness`](#AutomaticMethod.MinimumThickness)                                                         | Gets or sets the MinimumThickness for PCTet.                                                                                                                                                                                                             |
| [`NamedSelection`](#AutomaticMethod.NamedSelection)                                                             | Gets or sets the NamedSelection.                                                                                                                                                                                                                         |
| [`NumberOfCellsAcrossGap`](#AutomaticMethod.NumberOfCellsAcrossGap)                                             | Gets or sets the NumberOfCellsAcrossGap.                                                                                                                                                                                                                 |
| [`NumberOfElementLayers`](#AutomaticMethod.NumberOfElementLayers)                                               | Gets or sets the NumberOfElementLayers for PCTet.                                                                                                                                                                                                        |
| [`OverlappingAngle`](#AutomaticMethod.OverlappingAngle)                                                         | Gets or sets the OverlappingAngle.                                                                                                                                                                                                                       |
| [`PartialFill`](#AutomaticMethod.PartialFill)                                                                   | Gets or sets the PartialFill.                                                                                                                                                                                                                            |
| [`ParticleCoordinateSystem`](#AutomaticMethod.ParticleCoordinateSystem)                                         | Gets or sets the ParticleCoordinateSystem.                                                                                                                                                                                                               |
| [`ParticleDiameter`](#AutomaticMethod.ParticleDiameter)                                                         | Gets or sets the ParticleDiameter.                                                                                                                                                                                                                       |
| [`PreserveBoundaries`](#AutomaticMethod.PreserveBoundaries)                                                     | Gets or sets the PreserveBoundaries.                                                                                                                                                                                                                     |
| [`PrimeMethodAutoRepair`](#AutomaticMethod.PrimeMethodAutoRepair)                                               | Gets or sets the PrimeMethodAutoRepair.                                                                                                                                                                                                                  |
| [`PrimeRepairTolerance`](#AutomaticMethod.PrimeRepairTolerance)                                                 | Gets or sets repair tolerance length for Prime meshing. This can be used to reduce variability of output topology, prevent the collapse and defeature of thin or short topologies, and allow the creation of a coarse mesh while keeping topology as-is. |
| [`ProjectCornersToTop`](#AutomaticMethod.ProjectCornersToTop)                                                   | Gets or sets the ProjectCornersToTop.                                                                                                                                                                                                                    |
| [`ProjectInConstantZPlane`](#AutomaticMethod.ProjectInConstantZPlane)                                           | Gets or sets the ProjectInConstantZPlane.                                                                                                                                                                                                                |
| [`ProjectionFactor`](#AutomaticMethod.ProjectionFactor)                                                         | Gets or sets the ProjectionFactor.                                                                                                                                                                                                                       |
| [`Properties`](#AutomaticMethod.Properties)                                                                     | Gets the list of properties for this object.                                                                                                                                                                                                             |
| [`RadialGrowthRate`](#AutomaticMethod.RadialGrowthRate)                                                         | Gets or sets the RadialGrowthRate.                                                                                                                                                                                                                       |
| [`RefineAtThinSection`](#AutomaticMethod.RefineAtThinSection)                                                   | Gets or sets the RefineAtThinSection for PCTet.                                                                                                                                                                                                          |
| [`RefineSurfaceMesh`](#AutomaticMethod.RefineSurfaceMesh)                                                       | Gets or sets the RefineSurfaceMesh for PCTet.                                                                                                                                                                                                            |
| [`Refinement`](#AutomaticMethod.Refinement)                                                                     | Gets or sets the Refinement.                                                                                                                                                                                                                             |
| [`RelativeTolerance`](#AutomaticMethod.RelativeTolerance)                                                       | Gets or sets the PrimeRelativeTolerance.                                                                                                                                                                                                                 |
| [`RemoveSharpAngleFaces`](#AutomaticMethod.RemoveSharpAngleFaces)                                               | Gets or sets the RemoveSharpAngleFaces.                                                                                                                                                                                                                  |
| [`RepairFacets`](#AutomaticMethod.RepairFacets)                                                                 | Gets or sets the RepairFacets.                                                                                                                                                                                                                           |
| [`RestrictNodeMovementsToSurface`](#AutomaticMethod.RestrictNodeMovementsToSurface)                             | Gets or sets the RestrictNodeMovementsToSurface for AutoNodeMove under PCTet.                                                                                                                                                                            |
| [`ReuseBlocking`](#AutomaticMethod.ReuseBlocking)                                                               | Gets or sets the ReuseBlocking.                                                                                                                                                                                                                          |
| [`ScopingMethod`](#AutomaticMethod.ScopingMethod)                                                               | Gets or sets the ScopingMethod.                                                                                                                                                                                                                          |
| [`ShowAdvancedImproveOptions`](#AutomaticMethod.ShowAdvancedImproveOptions)                                     | Gets or sets the ShowAdvancedImproveOptions for AutoNodeMove under PCTet.                                                                                                                                                                                |
| [`SlicerFeatureAngle`](#AutomaticMethod.SlicerFeatureAngle)                                                     | Gets or sets the SlicerFeatureAngle.                                                                                                                                                                                                                     |
| [`SliverTriangleHeight`](#AutomaticMethod.SliverTriangleHeight)                                                 | Gets or sets the SliverTriangleHeight.                                                                                                                                                                                                                   |
| [`SmoothMeshSpacing`](#AutomaticMethod.SmoothMeshSpacing)                                                       | Gets or sets the SmoothMeshSpacing in Multizone.                                                                                                                                                                                                         |
| [`SmoothTransition`](#AutomaticMethod.SmoothTransition)                                                         | Gets or sets the SmoothTransition.                                                                                                                                                                                                                       |
| [`SolidShellElementForStacker`](#AutomaticMethod.SolidShellElementForStacker)                                   | Gets or sets the SolidShellElementForStacker.                                                                                                                                                                                                            |
| [`SolidShellElementForStackerGeometrySelection`](#AutomaticMethod.SolidShellElementForStackerGeometrySelection) | Gets or sets the SolidShellElementForStackerGeometrySelection.                                                                                                                                                                                           |
| [`SolidShellElementForStackerNamedSelection`](#AutomaticMethod.SolidShellElementForStackerNamedSelection)       | Gets or sets the SolidShellElementForStackerNamedSelection.                                                                                                                                                                                              |
| [`SolidShellElementForStackerScopingMethod`](#AutomaticMethod.SolidShellElementForStackerScopingMethod)         | Gets or sets the SolidShellElementForStackerScopingMethod.                                                                                                                                                                                               |
| [`SourceLocation`](#AutomaticMethod.SourceLocation)                                                             | Gets or sets the SourceLocation.                                                                                                                                                                                                                         |
| [`SourceTargetSelection`](#AutomaticMethod.SourceTargetSelection)                                               | Gets or sets the SourceTargetSelection.                                                                                                                                                                                                                  |
| [`SpacingOption`](#AutomaticMethod.SpacingOption)                                                               | Gets or sets the SpacingOption.                                                                                                                                                                                                                          |
| [`SplitAngle`](#AutomaticMethod.SplitAngle)                                                                     | Gets or sets the SplitAngle in Multizone.                                                                                                                                                                                                                |
| [`SrcTrgNamedSelection`](#AutomaticMethod.SrcTrgNamedSelection)                                                 | Sets Named selection as Source/Target for MultiZone control.                                                                                                                                                                                             |
| [`SrcTrgScopingMethod`](#AutomaticMethod.SrcTrgScopingMethod)                                                   | Sets Scoping method for Source/Target selection for MultiZone control.                                                                                                                                                                                   |
| [`StackerCoordinateSystem`](#AutomaticMethod.StackerCoordinateSystem)                                           | Gets or sets the StackerCoordinateSystem.                                                                                                                                                                                                                |
| [`StackerFreeFaceMeshType`](#AutomaticMethod.StackerFreeFaceMeshType)                                           | Gets or sets the StackerFreeFaceMeshType.                                                                                                                                                                                                                |
| [`StackerTriangleReduction`](#AutomaticMethod.StackerTriangleReduction)                                         | Gets or sets the StackerTriangleReduction.                                                                                                                                                                                                               |
| [`StackingAxis`](#AutomaticMethod.StackingAxis)                                                                 | Gets or sets the StackingAxis.                                                                                                                                                                                                                           |
| [`StackingDefeatureSize`](#AutomaticMethod.StackingDefeatureSize)                                               | Gets or sets the StackingDefeatureSize.                                                                                                                                                                                                                  |
| [`StretchFactorX`](#AutomaticMethod.StretchFactorX)                                                             | Gets or sets the StretchFactorX.                                                                                                                                                                                                                         |
| [`StretchFactorY`](#AutomaticMethod.StretchFactorY)                                                             | Gets or sets the StretchFactorY.                                                                                                                                                                                                                         |
| [`StretchFactorZ`](#AutomaticMethod.StretchFactorZ)                                                             | Gets or sets the StretchFactorZ.                                                                                                                                                                                                                         |
| [`SubsampleRate`](#AutomaticMethod.SubsampleRate)                                                               | Gets or sets the SubsampleRate.                                                                                                                                                                                                                          |
| [`Suppressed`](#AutomaticMethod.Suppressed)                                                                     | Gets or sets the Suppressed.                                                                                                                                                                                                                             |
| [`SurfaceMeshMethod`](#AutomaticMethod.SurfaceMeshMethod)                                                       | Gets or sets the SurfaceMeshMethod.                                                                                                                                                                                                                      |
| [`SweepBiasType`](#AutomaticMethod.SweepBiasType)                                                               | Gets or sets the SweepBiasType.                                                                                                                                                                                                                          |
| [`SweepBiasValue`](#AutomaticMethod.SweepBiasValue)                                                             | Gets or sets the SweepBiasValue.                                                                                                                                                                                                                         |
| [`SweepESizeType`](#AutomaticMethod.SweepESizeType)                                                             | Gets or sets the SweepESizeType.                                                                                                                                                                                                                         |
| [`SweepEdges`](#AutomaticMethod.SweepEdges)                                                                     | Gets or sets the SweepEdges.                                                                                                                                                                                                                             |
| [`SweepElementSize`](#AutomaticMethod.SweepElementSize)                                                         | Gets or sets the SweepElementSize.                                                                                                                                                                                                                       |
| [`SweepNumberDivisions`](#AutomaticMethod.SweepNumberDivisions)                                                 | Gets or sets the SweepNumberDivisions.                                                                                                                                                                                                                   |
| [`SweepSizeBehavior`](#AutomaticMethod.SweepSizeBehavior)                                                       | Gets or sets the SweepSizeBehavior.                                                                                                                                                                                                                      |
| [`SweepThickness`](#AutomaticMethod.SweepThickness)                                                             | Gets or sets the SweepThickness in Multizone.                                                                                                                                                                                                            |
| [`TargetLocation`](#AutomaticMethod.TargetLocation)                                                             | Gets or sets the TargetLocation.                                                                                                                                                                                                                         |
| [`TetraGrowthRate`](#AutomaticMethod.TetraGrowthRate)                                                           | Gets or sets the TetraGrowthRate.                                                                                                                                                                                                                        |
| [`TriangleReduction`](#AutomaticMethod.TriangleReduction)                                                       | Gets or sets the TriangleReduction.                                                                                                                                                                                                                      |
| [`UseSplitAngle`](#AutomaticMethod.UseSplitAngle)                                                               | Gets or sets the UseSplitAngle in Multizone.                                                                                                                                                                                                             |
| [`VisibleProperties`](#AutomaticMethod.VisibleProperties)                                                       | Gets the list of properties that are visible for this object.                                                                                                                                                                                            |
| [`WallThickness`](#AutomaticMethod.WallThickness)                                                               | Gets or sets the WallThickness.                                                                                                                                                                                                                          |
| [`WriteICEMCFDFiles`](#AutomaticMethod.WriteICEMCFDFiles)                                                       | Gets or sets the WriteICEMCFDFiles.                                                                                                                                                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="AutomaticMethod.Active"></a>

### *property* AutomaticMethod.Active *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AggressiveInflateOption"></a>

### *property* AutomaticMethod.AggressiveInflateOption *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveInflateOption.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AggressiveTetImprovement"></a>

### *property* AutomaticMethod.AggressiveTetImprovement *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveTetImprovement.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Algorithm"></a>

### *property* AutomaticMethod.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MeshMethodAlgorithm](../../../../Mechanical/DataModel/Enums/MeshMethodAlgorithm.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MeshMethodAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Algorithm.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ApproximativeNumberOfElementsPerPart"></a>

### *property* AutomaticMethod.ApproximativeNumberOfElementsPerPart *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApproximativeNumberOfElementsPerPart.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutoCollapseShortEdges"></a>

### *property* AutomaticMethod.AutoCollapseShortEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoCollapseShortEdges.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutoPinchFaces"></a>

### *property* AutomaticMethod.AutoPinchFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoPinchFaces.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutoPinchTolerance"></a>

### *property* AutomaticMethod.AutoPinchTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoPinchTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutoRemoveThinFaces"></a>

### *property* AutomaticMethod.AutoRemoveThinFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoRemoveThinFaces.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutoRepairFeatureAngle"></a>

### *property* AutomaticMethod.AutoRepairFeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoRepairFeatureAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutoRepairPartialDefeature"></a>

### *property* AutomaticMethod.AutoRepairPartialDefeature *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the use of partial defeature, which partially removes thin faces and sharp angles within provided tolerances, such that only topology impacting mesh quality is removed.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutoSharpAngle"></a>

### *property* AutomaticMethod.AutoSharpAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoSharpAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutoShortEdgeLength"></a>

### *property* AutomaticMethod.AutoShortEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoShortEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutoThinFaceWidth"></a>

### *property* AutomaticMethod.AutoThinFaceWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoThinFaceWidth.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.AutomaticNodeMovement"></a>

### *property* AutomaticMethod.AutomaticNodeMovement *: [Ansys.Mechanical.DataModel.Enums.AutomaticNodeMovementMethod](../../../../Mechanical/DataModel/Enums/AutomaticNodeMovementMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutomaticNodeMovementMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticNodeMovement method under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.BFCartSubType"></a>

### *property* AutomaticMethod.BFCartSubType *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BFCartSubType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.BFCartTolerance"></a>

### *property* AutomaticMethod.BFCartTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BFCartTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.BodyStackingType"></a>

### *property* AutomaticMethod.BodyStackingType *: [Ansys.Mechanical.DataModel.Enums.BodyStackingType](../../../../Mechanical/DataModel/Enums/BodyStackingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.BodyStackingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyStackingType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CartSweepSpacingOption"></a>

### *property* AutomaticMethod.CartSweepSpacingOption *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  CartSweep SpacingOption in Multizone ( 0 = Uniform, 1 = Key-Points).

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CartesianSize"></a>

### *property* AutomaticMethod.CartesianSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CartesianSize in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Children"></a>

### *property* AutomaticMethod.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Clearence"></a>

### *property* AutomaticMethod.Clearence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Clearence.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Comments"></a>

### *property* AutomaticMethod.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ConstrainBoundary"></a>

### *property* AutomaticMethod.ConstrainBoundary *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstrainBoundary.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ControlMessages"></a>

### *property* AutomaticMethod.ControlMessages *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ControlMessages.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CoordinateSystem"></a>

### *property* AutomaticMethod.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CornerAngle"></a>

### *property* AutomaticMethod.CornerAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CornerAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CurvatureNormalAngle"></a>

### *property* AutomaticMethod.CurvatureNormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.DataModelObjectCategory"></a>

### *property* AutomaticMethod.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.DecompositionType"></a>

### *property* AutomaticMethod.DecompositionType *: [Ansys.Mechanical.DataModel.Enums.DecompositionType](../../../../Mechanical/DataModel/Enums/DecompositionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DecompositionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DecompositionType in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.DefeatureLayerVolume"></a>

### *property* AutomaticMethod.DefeatureLayerVolume *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeatureLayerVolume.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.DefeaturingTolerance"></a>

### *property* AutomaticMethod.DefeaturingTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefeaturingTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.DefinedBy"></a>

### *property* AutomaticMethod.DefinedBy *: [Ansys.Mechanical.DataModel.Enums.PatchIndependentDefineType](../../../../Mechanical/DataModel/Enums/PatchIndependentDefineType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PatchIndependentDefineType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefinedBy.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ElementMidsideNodes"></a>

### *property* AutomaticMethod.ElementMidsideNodes *: [Ansys.Mechanical.DataModel.Enums.ElementMidsideNodesType](../../../../Mechanical/DataModel/Enums/ElementMidsideNodesType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElementMidsideNodesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementMidsideNodes.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ElementOption"></a>

### *property* AutomaticMethod.ElementOption *: [Ansys.Mechanical.DataModel.Enums.SweepElementOptionType](../../../../Mechanical/DataModel/Enums/SweepElementOptionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SweepElementOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOption.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ElementOrder"></a>

### *property* AutomaticMethod.ElementOrder *: [Ansys.Mechanical.DataModel.Enums.ElementOrder](../../../../Mechanical/DataModel/Enums/ElementOrder.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElementOrder) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOrder.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FaceProximityGapFactor"></a>

### *property* AutomaticMethod.FaceProximityGapFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceProximityGapFactor for PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FallBackMeshType"></a>

### *property* AutomaticMethod.FallBackMeshType *: [Ansys.Mechanical.DataModel.Enums.SweepAxisymmetricFallBackMeshType](../../../../Mechanical/DataModel/Enums/SweepAxisymmetricFallBackMeshType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SweepAxisymmetricFallBackMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FallBackMeshType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FeatureAngle"></a>

### *property* AutomaticMethod.FeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FeatureAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FeatureProtectionAngle"></a>

### *property* AutomaticMethod.FeatureProtectionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DihedralAngle for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Figures"></a>

### *property* AutomaticMethod.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FilletCollapse"></a>

### *property* AutomaticMethod.FilletCollapse *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilletCollapse for AutoNodeMove under PCTet ( 0 = No, 1 = ProgramControlled ).

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FillingDirection"></a>

### *property* AutomaticMethod.FillingDirection *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillingDirection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FillingFraction"></a>

### *property* AutomaticMethod.FillingFraction *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillingFraction.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FreeFaceMeshType"></a>

### *property* AutomaticMethod.FreeFaceMeshType *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeFaceMeshType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.FreeMeshType"></a>

### *property* AutomaticMethod.FreeMeshType *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeMeshType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GenerateLayersUsingFacets"></a>

### *property* AutomaticMethod.GenerateLayersUsingFacets *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateLayersUsingFacets.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Images"></a>

### *property* AutomaticMethod.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ImprovementIterations"></a>

### *property* AutomaticMethod.ImprovementIterations *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImprovementIterations for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.InflateRelativeTolerance"></a>

### *property* AutomaticMethod.InflateRelativeTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InflateRelativeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.InternalObject"></a>

### *property* AutomaticMethod.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.KeyPointsSelection"></a>

### *property* AutomaticMethod.KeyPointsSelection *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeyPointsSelection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.KeyPointsTolerance"></a>

### *property* AutomaticMethod.KeyPointsTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeyPoints Tolerance in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.LateralDefeatureSize"></a>

### *property* AutomaticMethod.LateralDefeatureSize *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LateralDefeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.LayerHeight"></a>

### *property* AutomaticMethod.LayerHeight *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.LayerStart"></a>

### *property* AutomaticMethod.LayerStart *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerStart.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Location"></a>

### *property* AutomaticMethod.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MZSweepNumberDivisions"></a>

### *property* AutomaticMethod.MZSweepNumberDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="AutomaticMethod.MappedSweptType"></a>

### *property* AutomaticMethod.MappedSweptType *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MappedSweptType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MatchMeshWherePossible"></a>

### *property* AutomaticMethod.MatchMeshWherePossible *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MatchMeshWherePossible.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MaximumElementSize"></a>

### *property* AutomaticMethod.MaximumElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumElementSize.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MeshBasedDefeaturing"></a>

### *property* AutomaticMethod.MeshBasedDefeaturing *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshBasedDefeaturing.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MeshFlowControl"></a>

### *property* AutomaticMethod.MeshFlowControl *: [Ansys.Mechanical.DataModel.Enums.MeshFlowControlMethod](../../../../Mechanical/DataModel/Enums/MeshFlowControlMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MeshFlowControlMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshFlowControl.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MeshInCenter"></a>

### *property* AutomaticMethod.MeshInCenter *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshInCenter.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MeshType"></a>

### *property* AutomaticMethod.MeshType *: [Ansys.Mechanical.DataModel.Enums.MethodMeshType](../../../../Mechanical/DataModel/Enums/MethodMeshType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MethodMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MeshUsingVoxelization"></a>

### *property* AutomaticMethod.MeshUsingVoxelization *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshUsingVoxelization.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Method"></a>

### *property* AutomaticMethod.Method *: [Ansys.Mechanical.DataModel.Enums.MethodType](../../../../Mechanical/DataModel/Enums/MethodType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MinimumEdgeLength"></a>

### *property* AutomaticMethod.MinimumEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MinimumSizeLimit"></a>

### *property* AutomaticMethod.MinimumSizeLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSizeLimit.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.MinimumThickness"></a>

### *property* AutomaticMethod.MinimumThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumThickness for PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.NamedSelection"></a>

### *property* AutomaticMethod.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.NumberOfCellsAcrossGap"></a>

### *property* AutomaticMethod.NumberOfCellsAcrossGap *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfCellsAcrossGap.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.NumberOfElementLayers"></a>

### *property* AutomaticMethod.NumberOfElementLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfElementLayers for PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.OverlappingAngle"></a>

### *property* AutomaticMethod.OverlappingAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OverlappingAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.PartialFill"></a>

### *property* AutomaticMethod.PartialFill *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartialFill.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ParticleCoordinateSystem"></a>

### *property* AutomaticMethod.ParticleCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticleCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ParticleDiameter"></a>

### *property* AutomaticMethod.ParticleDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticleDiameter.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.PreserveBoundaries"></a>

### *property* AutomaticMethod.PreserveBoundaries *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreserveBoundaries.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.PrimeMethodAutoRepair"></a>

### *property* AutomaticMethod.PrimeMethodAutoRepair *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimeMethodAutoRepair.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.PrimeRepairTolerance"></a>

### *property* AutomaticMethod.PrimeRepairTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets repair tolerance length for Prime meshing. This can be used to reduce variability of output topology, prevent the collapse and defeature of thin or short topologies, and allow the creation of a coarse mesh while keeping topology as-is.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ProjectCornersToTop"></a>

### *property* AutomaticMethod.ProjectCornersToTop *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectCornersToTop.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ProjectInConstantZPlane"></a>

### *property* AutomaticMethod.ProjectInConstantZPlane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectInConstantZPlane.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ProjectionFactor"></a>

### *property* AutomaticMethod.ProjectionFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectionFactor.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Properties"></a>

### *property* AutomaticMethod.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RadialGrowthRate"></a>

### *property* AutomaticMethod.RadialGrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RefineAtThinSection"></a>

### *property* AutomaticMethod.RefineAtThinSection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefineAtThinSection for PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RefineSurfaceMesh"></a>

### *property* AutomaticMethod.RefineSurfaceMesh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefineSurfaceMesh for PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Refinement"></a>

### *property* AutomaticMethod.Refinement *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Refinement.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RelativeTolerance"></a>

### *property* AutomaticMethod.RelativeTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimeRelativeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RemoveSharpAngleFaces"></a>

### *property* AutomaticMethod.RemoveSharpAngleFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveSharpAngleFaces.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RepairFacets"></a>

### *property* AutomaticMethod.RepairFacets *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RepairFacets.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RestrictNodeMovementsToSurface"></a>

### *property* AutomaticMethod.RestrictNodeMovementsToSurface *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestrictNodeMovementsToSurface for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ReuseBlocking"></a>

### *property* AutomaticMethod.ReuseBlocking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReuseBlocking.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ScopingMethod"></a>

### *property* AutomaticMethod.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.ShowAdvancedImproveOptions"></a>

### *property* AutomaticMethod.ShowAdvancedImproveOptions *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAdvancedImproveOptions for AutoNodeMove under PCTet.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SlicerFeatureAngle"></a>

### *property* AutomaticMethod.SlicerFeatureAngle *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlicerFeatureAngle.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SliverTriangleHeight"></a>

### *property* AutomaticMethod.SliverTriangleHeight *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SliverTriangleHeight.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SmoothMeshSpacing"></a>

### *property* AutomaticMethod.SmoothMeshSpacing *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothMeshSpacing in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SmoothTransition"></a>

### *property* AutomaticMethod.SmoothTransition *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmoothTransition.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SolidShellElementForStacker"></a>

### *property* AutomaticMethod.SolidShellElementForStacker *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStacker.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SolidShellElementForStackerGeometrySelection"></a>

### *property* AutomaticMethod.SolidShellElementForStackerGeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SolidShellElementForStackerNamedSelection"></a>

### *property* AutomaticMethod.SolidShellElementForStackerNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SolidShellElementForStackerScopingMethod"></a>

### *property* AutomaticMethod.SolidShellElementForStackerScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SourceLocation"></a>

### *property* AutomaticMethod.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SourceTargetSelection"></a>

### *property* AutomaticMethod.SourceTargetSelection *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceTargetSelection.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SpacingOption"></a>

### *property* AutomaticMethod.SpacingOption *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpacingOption.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SplitAngle"></a>

### *property* AutomaticMethod.SplitAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SplitAngle in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SrcTrgNamedSelection"></a>

### *property* AutomaticMethod.SrcTrgNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets Named selection as Source/Target for MultiZone control.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SrcTrgScopingMethod"></a>

### *property* AutomaticMethod.SrcTrgScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Sets Scoping method for Source/Target selection for MultiZone control.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StackerCoordinateSystem"></a>

### *property* AutomaticMethod.StackerCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StackerFreeFaceMeshType"></a>

### *property* AutomaticMethod.StackerFreeFaceMeshType *: [Ansys.Mechanical.DataModel.Enums.StackerMethodMeshType](../../../../Mechanical/DataModel/Enums/StackerMethodMeshType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StackerMethodMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerFreeFaceMeshType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StackerTriangleReduction"></a>

### *property* AutomaticMethod.StackerTriangleReduction *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerTriangleReduction.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StackingAxis"></a>

### *property* AutomaticMethod.StackingAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackingAxis.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StackingDefeatureSize"></a>

### *property* AutomaticMethod.StackingDefeatureSize *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackingDefeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StretchFactorX"></a>

### *property* AutomaticMethod.StretchFactorX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorX.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StretchFactorY"></a>

### *property* AutomaticMethod.StretchFactorY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorY.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.StretchFactorZ"></a>

### *property* AutomaticMethod.StretchFactorZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StretchFactorZ.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SubsampleRate"></a>

### *property* AutomaticMethod.SubsampleRate *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Suppressed"></a>

### *property* AutomaticMethod.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SurfaceMeshMethod"></a>

### *property* AutomaticMethod.SurfaceMeshMethod *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SurfaceMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepBiasType"></a>

### *property* AutomaticMethod.SweepBiasType *: Ansys.Mechanical.DataModel.Enums.BiasType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepBiasType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepBiasValue"></a>

### *property* AutomaticMethod.SweepBiasValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepBiasValue.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepESizeType"></a>

### *property* AutomaticMethod.SweepESizeType *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepESizeType.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepEdges"></a>

### *property* AutomaticMethod.SweepEdges *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepEdges.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepElementSize"></a>

### *property* AutomaticMethod.SweepElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepElementSize.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepNumberDivisions"></a>

### *property* AutomaticMethod.SweepNumberDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepNumberDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepSizeBehavior"></a>

### *property* AutomaticMethod.SweepSizeBehavior *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepSizeBehavior.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.SweepThickness"></a>

### *property* AutomaticMethod.SweepThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepThickness in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.TargetLocation"></a>

### *property* AutomaticMethod.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.TetraGrowthRate"></a>

### *property* AutomaticMethod.TetraGrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TetraGrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.TriangleReduction"></a>

### *property* AutomaticMethod.TriangleReduction *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../Mechanical/DataModel/Enums/TriangleReduction.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleReduction.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.UseSplitAngle"></a>

### *property* AutomaticMethod.UseSplitAngle *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseSplitAngle in Multizone.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.VisibleProperties"></a>

### *property* AutomaticMethod.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.WallThickness"></a>

### *property* AutomaticMethod.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.WriteICEMCFDFiles"></a>

### *property* AutomaticMethod.WriteICEMCFDFiles *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WriteICEMCFDFiles.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AutomaticMethod.Activate"></a>

### AutomaticMethod.Activate()

Activate the current object.

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

### AutomaticMethod.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CopyTo"></a>

### AutomaticMethod.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.CreateParameter"></a>

### AutomaticMethod.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Delete"></a>

### AutomaticMethod.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.Duplicate"></a>

### AutomaticMethod.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GenerateMesh"></a>

### AutomaticMethod.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GetChildren"></a>

### AutomaticMethod.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GetParameter"></a>

### AutomaticMethod.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GroupAllSimilarChildren"></a>

### AutomaticMethod.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.GroupSimilarObjects"></a>

### AutomaticMethod.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.PropertyByAPIName"></a>

### AutomaticMethod.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.PropertyByName"></a>

### AutomaticMethod.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RemoveParameter"></a>

### AutomaticMethod.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AutomaticMethod.RenameBasedOnDefinition"></a>

### AutomaticMethod.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

