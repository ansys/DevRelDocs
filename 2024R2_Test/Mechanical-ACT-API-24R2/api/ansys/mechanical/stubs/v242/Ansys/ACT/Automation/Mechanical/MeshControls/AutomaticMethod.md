# `AutomaticMethod`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshControls.AutomaticMethod

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AutomaticMethod.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `GenerateMesh`            | Generate the Mesh.                                                                |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------|-------------------------------------------------------------------------------------------------|
| `AggressiveInflateOption`                      | Gets or sets the AggressiveInflateOption.                                                       |
| `AggressiveTetImprovement`                     | Gets or sets the AggressiveTetImprovement.                                                      |
| `ControlMessages`                              | Gets the ControlMessages.                                                                       |
| `CornerAngle`                                  | Gets or sets the CornerAngle.                                                                   |
| `DefeatureLayerVolume`                         | Gets or sets the DefeatureLayerVolume.                                                          |
| `ElementMidsideNodes`                          | Gets or sets the ElementMidsideNodes.                                                           |
| `ElementOrder`                                 | Gets or sets the ElementOrder.                                                                  |
| `GenerateLayersUsingFacets`                    | Gets or sets the GenerateLayersUsingFacets.                                                     |
| `InflateRelativeTolerance`                     | Gets or sets the InflateRelativeTolerance.                                                      |
| `LayerHeight`                                  | Gets or sets the LayerHeight.                                                                   |
| `LayerStart`                                   | Gets or sets the LayerStart.                                                                    |
| `MeshInCenter`                                 | Gets or sets the MeshInCenter.                                                                  |
| `Method`                                       | Gets or sets the Method.                                                                        |
| `OverlappingAngle`                             | Gets or sets the OverlappingAngle.                                                              |
| `ProjectCornersToTop`                          | Gets or sets the ProjectCornersToTop.                                                           |
| `RelativeTolerance`                            | Gets or sets the PrimeRelativeTolerance.                                                        |
| `RepairFacets`                                 | Gets or sets the RepairFacets.                                                                  |
| `SlicerFeatureAngle`                           | Gets or sets the SlicerFeatureAngle.                                                            |
| `SliverTriangleHeight`                         | Gets or sets the SliverTriangleHeight.                                                          |
| `InternalObject`                               | Gets the internal object. For advanced usage only.                                              |
| `ProjectionFactor`                             | Gets or sets the ProjectionFactor.                                                              |
| `StretchFactorX`                               | Gets or sets the StretchFactorX.                                                                |
| `StretchFactorY`                               | Gets or sets the StretchFactorY.                                                                |
| `StretchFactorZ`                               | Gets or sets the StretchFactorZ.                                                                |
| `SpacingOption`                                | Gets or sets the SpacingOption.                                                                 |
| `SubsampleRate`                                | Gets or sets the SubsampleRate.                                                                 |
| `BFCartSubType`                                | Gets the BFCartSubType.                                                                         |
| `Refinement`                                   | Gets or sets the Refinement.                                                                    |
| `FillingFraction`                              | Gets or sets the FillingFraction.                                                               |
| `ApproximativeNumberOfElementsPerPart`         | Gets or sets the ApproximativeNumberOfElementsPerPart.                                          |
| `CartSweepSpacingOption`                       | Gets or sets the  CartSweep SpacingOption in Multizone ( 0 = Uniform, 1 = Key-Points).          |
| `SurfaceMeshMethod`                            | Gets or sets the SurfaceMeshMethod.                                                             |
| `MZSweepNumberDivisions`                       |                                                                                                 |
| `SweepNumberDivisions`                         | Gets or sets the SweepNumberDivisions.                                                          |
| `NumberOfCellsAcrossGap`                       | Gets or sets the NumberOfCellsAcrossGap.                                                        |
| `FaceProximityGapFactor`                       | Gets or sets the FaceProximityGapFactor for PCTet.                                              |
| `FilletCollapse`                               | Gets or sets the FilletCollapse for AutoNodeMove under PCTet ( 0 = No, 1 = ProgramControlled ). |
| `ImprovementIterations`                        | Gets or sets the ImprovementIterations for AutoNodeMove under PCTet.                            |
| `NumberOfElementLayers`                        | Gets or sets the NumberOfElementLayers for PCTet.                                               |
| `TetraGrowthRate`                              | Gets or sets the TetraGrowthRate.                                                               |
| `PreserveBoundaries`                           | Gets or sets the PreserveBoundaries.                                                            |
| `SourceTargetSelection`                        | Gets or sets the SourceTargetSelection.                                                         |
| `LateralDefeatureSize`                         | Gets or sets the LateralDefeatureSize.                                                          |
| `StackingDefeatureSize`                        | Gets or sets the StackingDefeatureSize.                                                         |
| `FreeMeshType`                                 | Gets or sets the FreeMeshType.                                                                  |
| `MappedSweptType`                              | Gets or sets the MappedSweptType.                                                               |
| `SweepBiasValue`                               | Gets or sets the SweepBiasValue.                                                                |
| `SweepESizeType`                               | Gets or sets the SweepESizeType.                                                                |
| `RadialGrowthRate`                             | Gets or sets the RadialGrowthRate.                                                              |
| `FreeFaceMeshType`                             | Gets or sets the FreeFaceMeshType.                                                              |
| `SweepSizeBehavior`                            | Gets or sets the SweepSizeBehavior.                                                             |
| `AutoPinchTolerance`                           | Gets or sets the AutoPinchTolerance.                                                            |
| `AutoRepairFeatureAngle`                       | Gets or sets the AutoRepairFeatureAngle.                                                        |
| `AutoSharpAngle`                               | Gets or sets the AutoSharpAngle.                                                                |
| `AutoShortEdgeLength`                          | Gets or sets the AutoShortEdgeLength.                                                           |
| `AutoThinFaceWidth`                            | Gets or sets the AutoThinFaceWidth.                                                             |
| `WallThickness`                                | Gets or sets the WallThickness.                                                                 |
| `BFCartTolerance`                              | Gets the BFCartTolerance.                                                                       |
| `CartesianSize`                                | Gets or sets the CartesianSize in Multizone.                                                    |
| `CurvatureNormalAngle`                         | Gets or sets the CurvatureNormalAngle.                                                          |
| `Clearence`                                    | Gets or sets the Clearence.                                                                     |
| `SweepElementSize`                             | Gets or sets the SweepElementSize.                                                              |
| `MaximumElementSize`                           | Gets or sets the MaximumElementSize.                                                            |
| `MinimumSizeLimit`                             | Gets or sets the MinimumSizeLimit.                                                              |
| `KeyPointsTolerance`                           | Gets or sets the KeyPoints Tolerance in Multizone.                                              |
| `MinimumEdgeLength`                            | Gets the MinimumEdgeLength.                                                                     |
| `DefeaturingTolerance`                         | Gets or sets the DefeaturingTolerance.                                                          |
| `ParticleDiameter`                             | Gets or sets the ParticleDiameter.                                                              |
| `FeatureProtectionAngle`                       | Gets or sets the DihedralAngle for AutoNodeMove under PCTet.                                    |
| `MinimumThickness`                             | Gets or sets the MinimumThickness for PCTet.                                                    |
| `FeatureAngle`                                 | Gets or sets the FeatureAngle.                                                                  |
| `SplitAngle`                                   | Gets or sets the SplitAngle in Multizone.                                                       |
| `SweepThickness`                               | Gets or sets the SweepThickness in Multizone.                                                   |
| `AutoCollapseShortEdges`                       | Gets or sets the AutoCollapseShortEdges.                                                        |
| `AutoPinchFaces`                               | Gets or sets the AutoPinchFaces.                                                                |
| `RemoveSharpAngleFaces`                        | Gets or sets the RemoveSharpAngleFaces.                                                         |
| `AutoRemoveThinFaces`                          | Gets or sets the AutoRemoveThinFaces.                                                           |
| `AutoRepairPartialDefeature`                   | Gets or sets the AutoRepairPartialDefeature.                                                    |
| `KeyPointsSelection`                           | Gets or sets the KeyPointsSelection.                                                            |
| `BodyStackingType`                             | Gets or sets the BodyStackingType.                                                              |
| `FillingDirection`                             | Gets or sets the FillingDirection.                                                              |
| `DefinedBy`                                    | Gets or sets the DefinedBy.                                                                     |
| `ElementOption`                                | Gets or sets the ElementOption.                                                                 |
| `DecompositionType`                            | Gets or sets the DecompositionType in Multizone.                                                |
| `AutomaticNodeMovement`                        | Gets or sets the AutomaticNodeMovement method under PCTet.                                      |
| `PrimeMethodAutoRepair`                        | Gets or sets the PrimeMethodAutoRepair.                                                         |
| `MeshFlowControl`                              | Gets or sets the MeshFlowControl.                                                               |
| `MeshType`                                     | Gets or sets the MeshType.                                                                      |
| `TriangleReduction`                            | Gets or sets the TriangleReduction.                                                             |
| `SolidShellElementForStacker`                  | Gets or sets the SolidShellElementForStacker.                                                   |
| `SolidShellElementForStackerScopingMethod`     | Gets or sets the SolidShellElementForStackerScopingMethod.                                      |
| `StackingAxis`                                 | Gets or sets the StackingAxis.                                                                  |
| `StackerFreeFaceMeshType`                      | Gets or sets the StackerFreeFaceMeshType.                                                       |
| `StackerTriangleReduction`                     | Gets or sets the StackerTriangleReduction.                                                      |
| `Algorithm`                                    | Gets or sets the Algorithm.                                                                     |
| `SweepBiasType`                                | Gets or sets the SweepBiasType.                                                                 |
| `FallBackMeshType`                             | Gets or sets the FallBackMeshType.                                                              |
| `Active`                                       | Gets the Active.                                                                                |
| `ProjectInConstantZPlane`                      | Gets or sets the ProjectInConstantZPlane.                                                       |
| `MeshUsingVoxelization`                        | Gets or sets the MeshUsingVoxelization.                                                         |
| `ConstrainBoundary`                            | Gets or sets the ConstrainBoundary.                                                             |
| `MeshBasedDefeaturing`                         | Gets or sets the MeshBasedDefeaturing.                                                          |
| `PartialFill`                                  | Gets or sets the PartialFill.                                                                   |
| `MatchMeshWherePossible`                       | Gets or sets the MatchMeshWherePossible.                                                        |
| `SmoothMeshSpacing`                            | Gets or sets the SmoothMeshSpacing in Multizone.                                                |
| `RefineAtThinSection`                          | Gets or sets the RefineAtThinSection for PCTet.                                                 |
| `RefineSurfaceMesh`                            | Gets or sets the RefineSurfaceMesh for PCTet.                                                   |
| `RestrictNodeMovementsToSurface`               | Gets or sets the RestrictNodeMovementsToSurface for AutoNodeMove under PCTet.                   |
| `ShowAdvancedImproveOptions`                   | Gets or sets the ShowAdvancedImproveOptions for AutoNodeMove under PCTet.                       |
| `SmoothTransition`                             | Gets or sets the SmoothTransition.                                                              |
| `ReuseBlocking`                                | Gets or sets the ReuseBlocking.                                                                 |
| `UseSplitAngle`                                | Gets or sets the UseSplitAngle in Multizone.                                                    |
| `WriteICEMCFDFiles`                            | Gets or sets the WriteICEMCFDFiles.                                                             |
| `CoordinateSystem`                             | Gets or sets the CoordinateSystem.                                                              |
| `NamedSelection`                               | Gets or sets the NamedSelection.                                                                |
| `ParticleCoordinateSystem`                     | Gets or sets the ParticleCoordinateSystem.                                                      |
| `SolidShellElementForStackerNamedSelection`    | Gets or sets the SolidShellElementForStackerNamedSelection.                                     |
| `StackerCoordinateSystem`                      | Gets or sets the StackerCoordinateSystem.                                                       |
| `Location`                                     | Gets or sets the Location.                                                                      |
| `SolidShellElementForStackerGeometrySelection` | Gets or sets the SolidShellElementForStackerGeometrySelection.                                  |
| `SourceLocation`                               | Gets or sets the SourceLocation.                                                                |
| `SweepEdges`                                   | Gets or sets the SweepEdges.                                                                    |
| `TargetLocation`                               | Gets or sets the TargetLocation.                                                                |
| `DataModelObjectCategory`                      | Gets the current DataModelObject's category.                                                    |
| `ScopingMethod`                                | Gets or sets the ScopingMethod.                                                                 |
| `Suppressed`                                   | Gets or sets the Suppressed.                                                                    |
| `Children`                                     | Gets the list of children.                                                                      |
| `Comments`                                     | Gets the list of associated comments.                                                           |
| `Figures`                                      | Gets the list of associated figures.                                                            |
| `Images`                                       | Gets the list of associated images.                                                             |
| `InternalObject`                               | Gets the internal object. For advanced usage only.                                              |
| `Properties`                                   | Gets the list of properties for this object.                                                    |
| `VisibleProperties`                            | Gets the list of properties that are visible for this object.                                   |

<a id="property-detail"></a>

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

### *property* AutomaticMethod.ElementMidsideNodes *: [Ansys.Mechanical.DataModel.Enums.ElementMidsideNodesType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ElementMidsideNodesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementMidsideNodesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementMidsideNodes.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ElementOrder *: [Ansys.Mechanical.DataModel.Enums.ElementOrder](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ElementOrder.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ElementOrder) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* AutomaticMethod.Method *: [Ansys.Mechanical.DataModel.Enums.MethodType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MethodType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* AutomaticMethod.CartSweepSpacingOption *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  CartSweep SpacingOption in Multizone ( 0 = Uniform, 1 = Key-Points).

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SurfaceMeshMethod *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SurfaceMeshMethod.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MZSweepNumberDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* AutomaticMethod.AutoPinchTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoPinchTolerance.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.AutoRepairFeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoRepairFeatureAngle.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.AutoSharpAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoSharpAngle.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.AutoShortEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoShortEdgeLength.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.AutoThinFaceWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoThinFaceWidth.

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

### *property* AutomaticMethod.AutoCollapseShortEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoCollapseShortEdges.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.AutoPinchFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoPinchFaces.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.RemoveSharpAngleFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemoveSharpAngleFaces.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.AutoRemoveThinFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoRemoveThinFaces.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.AutoRepairPartialDefeature *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutoRepairPartialDefeature.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.KeyPointsSelection *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeyPointsSelection.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.BodyStackingType *: [Ansys.Mechanical.DataModel.Enums.BodyStackingType](../../../../Mechanical/DataModel/Enums/BodyStackingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.BodyStackingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyStackingType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.FillingDirection *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FillingDirection.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.DefinedBy *: [Ansys.Mechanical.DataModel.Enums.PatchIndependentDefineType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/PatchIndependentDefineType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PatchIndependentDefineType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefinedBy.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ElementOption *: [Ansys.Mechanical.DataModel.Enums.SweepElementOptionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SweepElementOptionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SweepElementOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOption.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.DecompositionType *: [Ansys.Mechanical.DataModel.Enums.DecompositionType](../../../../Mechanical/DataModel/Enums/DecompositionType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DecompositionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DecompositionType in Multizone.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.AutomaticNodeMovement *: [Ansys.Mechanical.DataModel.Enums.AutomaticNodeMovementMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticNodeMovementMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticNodeMovementMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticNodeMovement method under PCTet.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.PrimeMethodAutoRepair *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PrimeMethodAutoRepair.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MeshFlowControl *: [Ansys.Mechanical.DataModel.Enums.MeshFlowControlMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MeshFlowControlMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshFlowControlMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshFlowControl.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.MeshType *: [Ansys.Mechanical.DataModel.Enums.MethodMeshType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MethodMeshType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MethodMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.TriangleReduction *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TriangleReduction.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TriangleReduction.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SolidShellElementForStacker *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStacker.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SolidShellElementForStackerScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StackingAxis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackingAxis.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StackerFreeFaceMeshType *: [Ansys.Mechanical.DataModel.Enums.StackerMethodMeshType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StackerMethodMeshType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StackerMethodMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerFreeFaceMeshType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StackerTriangleReduction *: [Ansys.Mechanical.DataModel.Enums.TriangleReduction](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TriangleReduction.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TriangleReduction) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StackerTriangleReduction.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MeshMethodAlgorithm](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MeshMethodAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMethodAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Algorithm.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SweepBiasType *: Ansys.Mechanical.DataModel.Enums.BiasType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepBiasType.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.FallBackMeshType *: [Ansys.Mechanical.DataModel.Enums.SweepAxisymmetricFallBackMeshType](../../../../Mechanical/DataModel/Enums/SweepAxisymmetricFallBackMeshType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SweepAxisymmetricFallBackMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FallBackMeshType.

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

### *property* AutomaticMethod.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ParticleCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticleCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.SolidShellElementForStackerNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolidShellElementForStackerNamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.StackerCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* AutomaticMethod.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AutomaticMethod.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### AutomaticMethod.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AutomaticMethod.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

