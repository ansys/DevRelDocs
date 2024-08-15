# `ImportedPressure`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------------|
| `ExportToTextFile`        | Run the ExportToTextFile action.                                                        |
| `Import`                  | Import.                                                                                 |
| `ImportLoad`              | Run the ImportLoad action.                                                              |
| `ReloadConfiguration`     | Reload the Imported Load's setup from its associated configuration file (if available). |
| `GetActivateAtLoadStep`   | GetActivateAtLoadStep method.                                                           |
| `SetActivateAtLoadStep`   | SetActivateAtLoadStep method.                                                           |
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
| `InternalObject`                       | Gets the internal object. For advanced usage only.                                                      |
| `LoadVectorNumber`                     | Gets or sets the LoadVectorNumber.                                                                      |
| `LoadVectorNumberImaginary`            | Gets or sets the LoadVectorNumberImaginary.                                                             |
| `AppliedBy`                            | Gets or sets the AppliedBy.                                                                             |
| `LoadVectorAssignment`                 | Gets or sets the LoadVectorAssignment.                                                                  |
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

### *property* ImportedPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.LoadVectorNumberImaginary *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumberImaginary.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadAppliedBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadAppliedBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ImportedPressure.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.ReloadConfiguration()

Reload the Imported Load's setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

### ImportedPressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedPressure.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### ImportedPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### ImportedPressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

