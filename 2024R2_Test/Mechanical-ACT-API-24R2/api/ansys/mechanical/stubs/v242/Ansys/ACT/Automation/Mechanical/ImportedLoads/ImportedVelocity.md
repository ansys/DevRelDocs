# `ImportedVelocity`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedVelocity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------------|
| `GetActivateAtLoadStep`   | GetActivateAtLoadStep method.                                                           |
| `SetActivateAtLoadStep`   | SetActivateAtLoadStep method.                                                           |
| `ExportToTextFile`        | Run the ExportToTextFile action.                                                        |
| `Import`                  | Import.                                                                                 |
| `ImportLoad`              | Run the ImportLoad action.                                                              |
| `ReloadConfiguration`     | Reload the Imported Load's setup from its associated configuration file (if available). |
| `AddMappingValidation`    | Creates a new MappingValidation                                                         |
| `ClearGeneratedData`      | Run the ClearGeneratedData action.                                                      |
| `Delete`                  | Run the Delete action.                                                                  |
| `GetChildren`             | Gets the list of children, filtered by type.                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                            |
| `AddComment`              | Creates a new child Comment.                                                            |
| `AddFigure`               | Creates a new child Figure.                                                             |
| `AddImage`                | Creates a new child Image.                                                              |
| `Activate`                | Activate the current object.                                                            |
| `CopyTo`                  | Copies all visible properties from this object to another.                              |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                          |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                                 |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                                     |
| `PropertyByName`          | Get a property by its unique name.                                                      |
| `PropertyByAPIName`       | Get a property by its API name.                                                         |
| `CreateParameter`         | Creates a new parameter for a Property.                                                 |
| `GetParameter`            | Gets the parameter corresponding to the given property.                                 |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property.       |

### Properties

| Name | Description |
|----------------------------------------|---------------------------------------------------------------------------------------------------------|
| `MappedData`                           | Gets or sets the MappedData.                                                                            |
| `InternalObject`                       | Gets the internal object. For advanced usage only.                                                      |
| `CutoffFrequency`                      | Gets or sets the CutoffFrequency.                                                                       |
| `MaximumTimeRange`                     | Gets or sets the MaximumTimeRange.                                                                      |
| `MinimumTimeRange`                     | Gets or sets the MinimumTimeRange.                                                                      |
| `SourceTimeDefinitionType`             | Gets or sets the SourceTimeDefinitionType.                                                              |
| `WindowType`                           | Gets or sets the WindowType.                                                                            |
| `DataModelObjectCategory`              | Gets the current DataModelObject's category.                                                            |
| `Weighting`                            | Weighting property.                                                                                     |
| `MappingControl`                       | MappingControl property.                                                                                |
| `DisplaySourcePoints`                  | DisplaySourcePoints property.                                                                           |
| `DisplaySourcePointIds`                | DisplaySourcePointIds property.                                                                         |
| `DisplayInteriorPoints`                | DisplayInteriorPoints property.                                                                         |
| `DisplayProjectionPlane`               | DisplayProjectionPlane property.                                                                        |
| `Algorithm`                            | Algorithm property.                                                                                     |
| `BoundingBoxTolerance`                 | BoundingBoxTolerance property.                                                                          |
| `CreateNameSelectionForMappedNodes`    | CreateNameSelectionForMappedNodes property.                                                             |
| `CreateNameSelectionForOutsideNodes`   | CreateNameSelectionForOutsideNodes property.                                                            |
| `CreateNameSelectionForUnmappedNodes`  | CreateNameSelectionForUnmappedNodes property.                                                           |
| `Mapping`                              | Mapping property.                                                                                       |
| `LegendMaximum`                        | LegendMaximum property.                                                                                 |
| `LegendMinimum`                        | LegendMinimum property.                                                                                 |
| `LegendRange`                          | LegendRange property.                                                                                   |
| `MaxOutsideDistance`                   | MaxOutsideDistance property.                                                                            |
| `Method`                               | Method property.                                                                                        |
| `OutsideDistanceCheck`                 | OutsideDistanceCheck property.                                                                          |
| `OutsideOption`                        | OutsideOption property.                                                                                 |
| `Projection`                           | Projection property.                                                                                    |
| `RigidBodyTransformationType`          | RigidBodyTransformationType property.                                                                   |
| `RigidTransformSourceCoordinateSystem` | RigidTransformSourceCoordinateSystem property.                                                          |
| `RigidTransformTargetCoordinateSystem` | RigidTransformTargetCoordinateSystem property.                                                          |
| `ShellThicknessFactor`                 | ShellThicknessFactor property.                                                                          |
| `SourceMaximum`                        | SourceMaximum property.                                                                                 |
| `SourceMinimum`                        | SourceMinimum property.                                                                                 |
| `VariableType`                         | VariableType property.                                                                                  |
| `Interpolation`                        | Interpolation property.                                                                                 |
| `UnmappedNodesName`                    | UnmappedNodesName property.                                                                             |
| `MappedNodesName`                      | MappedNodesName property.                                                                               |
| `OutsideNodesName`                     | OutsideNodesName property.                                                                              |
| `Pinball`                              | Pinball property.                                                                                       |
| `NumberOfPoints`                       | NumberOfPoints property.                                                                                |
| `OrientationRealignment`               | OrientationRealignment property.                                                                        |
| `Limit`                                | Limit property.                                                                                         |
| `KrigingCorrelationFunction`           | KrigingCorrelationFunction property.                                                                    |
| `KrigingPolynom`                       | KrigingPolynom property.                                                                                |
| `ExtrapolationTolerancePercent`        | ExtrapolationTolerancePercent property.                                                                 |
| `ApplyAs`                              | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| `Suppressed`                           | Gets or sets the Suppressed.                                                                            |
| `SharedRefBody`                        | Gets or sets the SharedRefBody.                                                                         |
| `Location`                             | Gets or sets the Location.                                                                              |
| `Children`                             | Gets the list of children.                                                                              |
| `Comments`                             | Gets the list of associated comments.                                                                   |
| `Figures`                              | Gets the list of associated figures.                                                                    |
| `Images`                               | Gets the list of associated images.                                                                     |
| `InternalObject`                       | Gets the internal object. For advanced usage only.                                                      |
| `Properties`                           | Gets the list of properties for this object.                                                            |
| `VisibleProperties`                    | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

### *property* ImportedVelocity.MappedData *: Ansys.Mechanical.DataModel.Enums.MappedData | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MappedData.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.CutoffFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutoffFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.MaximumTimeRange *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeRange.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.MinimumTimeRange *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeRange.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.SourceTimeDefinitionType *: [Ansys.Mechanical.DataModel.Enums.SourceTimeDefinitionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SourceTimeDefinitionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SourceTimeDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceTimeDefinitionType.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.WindowType *: [Ansys.Mechanical.DataModel.Enums.WindowType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/WindowType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WindowType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WindowType.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedVelocity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ImportedVelocity.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.ReloadConfiguration()

Reload the Imported Load's setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedVelocity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

