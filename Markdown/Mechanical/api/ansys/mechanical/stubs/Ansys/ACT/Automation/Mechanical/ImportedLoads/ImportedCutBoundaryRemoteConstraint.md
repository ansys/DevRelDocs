# ImportedCutBoundaryRemoteConstraint

### *class* ImportedCutBoundaryRemoteConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedCutBoundaryRemoteConstraint.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#ImportedCutBoundaryRemoteConstraint.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#ImportedCutBoundaryRemoteConstraint.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedCutBoundaryRemoteConstraint.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedCutBoundaryRemoteConstraint.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#ImportedCutBoundaryRemoteConstraint.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedCutBoundaryRemoteConstraint.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedCutBoundaryRemoteConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedCutBoundaryRemoteConstraint.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedCutBoundaryRemoteConstraint.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedCutBoundaryRemoteConstraint.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedCutBoundaryRemoteConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedCutBoundaryRemoteConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedCutBoundaryRemoteConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedCutBoundaryRemoteConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedCutBoundaryRemoteConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedCutBoundaryRemoteConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedCutBoundaryRemoteConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedCutBoundaryRemoteConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedCutBoundaryRemoteConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedCutBoundaryRemoteConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedCutBoundaryRemoteConstraint.Weighting)                                                                      | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedCutBoundaryRemoteConstraint.MappingControl)                                                            | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints)                                                  | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds)                                              | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints)                                              | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane)                                            | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedCutBoundaryRemoteConstraint.Algorithm)                                                                      | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance)                                                | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes)                      | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes)                    | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes)                  | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedCutBoundaryRemoteConstraint.Mapping)                                                                          | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedCutBoundaryRemoteConstraint.LegendMaximum)                                                              | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedCutBoundaryRemoteConstraint.LegendMinimum)                                                              | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedCutBoundaryRemoteConstraint.LegendRange)                                                                  | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance)                                                    | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedCutBoundaryRemoteConstraint.Method)                                                                            | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck)                                                | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedCutBoundaryRemoteConstraint.OutsideOption)                                                              | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedCutBoundaryRemoteConstraint.Projection)                                                                    | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem)                | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem)                | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor)                                                | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedCutBoundaryRemoteConstraint.SourceMaximum)                                                              | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedCutBoundaryRemoteConstraint.SourceMinimum)                                                              | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedCutBoundaryRemoteConstraint.Interpolation)                                                              | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedCutBoundaryRemoteConstraint.UnmappedNodesName)                                                      | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedCutBoundaryRemoteConstraint.MappedNodesName)                                                          | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedCutBoundaryRemoteConstraint.OutsideNodesName)                                                        | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedCutBoundaryRemoteConstraint.Pinball)                                                                          | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedCutBoundaryRemoteConstraint.NumberOfPoints)                                                            | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedCutBoundaryRemoteConstraint.OrientationRealignment)                                            | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedCutBoundaryRemoteConstraint.Limit)                                                                              | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction)                                    | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedCutBoundaryRemoteConstraint.KrigingPolynom)                                                            | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent)                              | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedCutBoundaryRemoteConstraint.ApplyAs)                                                                          | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedCutBoundaryRemoteConstraint.Suppressed)                                                                    | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedCutBoundaryRemoteConstraint.SharedRefBody)                                                              | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedCutBoundaryRemoteConstraint.Location)                                                                        | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedCutBoundaryRemoteConstraint.Children)                                                                        | Gets the list of children.                                                                              |
| [`Comments`](#ImportedCutBoundaryRemoteConstraint.Comments)                                                                        | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedCutBoundaryRemoteConstraint.Figures)                                                                          | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedCutBoundaryRemoteConstraint.Images)                                                                            | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedCutBoundaryRemoteConstraint.Properties)                                                                    | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedCutBoundaryRemoteConstraint.VisibleProperties)                                                      | Gets the list of properties that are visible for this object.                                           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedCutBoundaryRemoteConstraint
```

## Property detail

### *property* ImportedCutBoundaryRemoteConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
