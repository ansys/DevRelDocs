# ImportedSurfaceForceDensity

### *class* ImportedSurfaceForceDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedSurfaceForceDensity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#ImportedSurfaceForceDensity.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#ImportedSurfaceForceDensity.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#ImportedSurfaceForceDensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedSurfaceForceDensity.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedSurfaceForceDensity.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#ImportedSurfaceForceDensity.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedSurfaceForceDensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedSurfaceForceDensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedSurfaceForceDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedSurfaceForceDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedSurfaceForceDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedSurfaceForceDensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedSurfaceForceDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedSurfaceForceDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedSurfaceForceDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedSurfaceForceDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedSurfaceForceDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedSurfaceForceDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedSurfaceForceDensity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedSurfaceForceDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedSurfaceForceDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedSurfaceForceDensity.Weighting)                                                                              | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedSurfaceForceDensity.MappingControl)                                                                    | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedSurfaceForceDensity.DisplaySourcePoints)                                                          | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedSurfaceForceDensity.DisplaySourcePointIds)                                                      | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedSurfaceForceDensity.DisplayInteriorPoints)                                                      | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedSurfaceForceDensity.DisplayProjectionPlane)                                                    | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedSurfaceForceDensity.Algorithm)                                                                              | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedSurfaceForceDensity.BoundingBoxTolerance)                                                        | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedSurfaceForceDensity.CreateNameSelectionForMappedNodes)                              | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedSurfaceForceDensity.CreateNameSelectionForOutsideNodes)                            | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedSurfaceForceDensity.CreateNameSelectionForUnmappedNodes)                          | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedSurfaceForceDensity.Mapping)                                                                                  | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedSurfaceForceDensity.LegendMaximum)                                                                      | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedSurfaceForceDensity.LegendMinimum)                                                                      | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedSurfaceForceDensity.LegendRange)                                                                          | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedSurfaceForceDensity.MaxOutsideDistance)                                                            | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedSurfaceForceDensity.Method)                                                                                    | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedSurfaceForceDensity.OutsideDistanceCheck)                                                        | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedSurfaceForceDensity.OutsideOption)                                                                      | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedSurfaceForceDensity.Projection)                                                                            | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedSurfaceForceDensity.RigidTransformSourceCoordinateSystem)                        | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedSurfaceForceDensity.RigidTransformTargetCoordinateSystem)                        | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedSurfaceForceDensity.ShellThicknessFactor)                                                        | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedSurfaceForceDensity.SourceMaximum)                                                                      | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedSurfaceForceDensity.SourceMinimum)                                                                      | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedSurfaceForceDensity.Interpolation)                                                                      | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedSurfaceForceDensity.UnmappedNodesName)                                                              | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedSurfaceForceDensity.MappedNodesName)                                                                  | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedSurfaceForceDensity.OutsideNodesName)                                                                | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedSurfaceForceDensity.Pinball)                                                                                  | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedSurfaceForceDensity.NumberOfPoints)                                                                    | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedSurfaceForceDensity.OrientationRealignment)                                                    | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedSurfaceForceDensity.Limit)                                                                                      | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedSurfaceForceDensity.KrigingCorrelationFunction)                                            | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedSurfaceForceDensity.KrigingPolynom)                                                                    | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedSurfaceForceDensity.ExtrapolationTolerancePercent)                                      | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedSurfaceForceDensity.ApplyAs)                                                                                  | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedSurfaceForceDensity.Suppressed)                                                                            | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedSurfaceForceDensity.SharedRefBody)                                                                      | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedSurfaceForceDensity.Location)                                                                                | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedSurfaceForceDensity.Children)                                                                                | Gets the list of children.                                                                              |
| [`Comments`](#ImportedSurfaceForceDensity.Comments)                                                                                | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedSurfaceForceDensity.Figures)                                                                                  | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedSurfaceForceDensity.Images)                                                                                    | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedSurfaceForceDensity.Properties)                                                                            | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedSurfaceForceDensity.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.                                           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedSurfaceForceDensity
```

## Property detail

### *property* ImportedSurfaceForceDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedSurfaceForceDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedSurfaceForceDensity.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedSurfaceForceDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
