# ImportedCutBoundaryRemoteForce

### *class* ImportedCutBoundaryRemoteForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedCutBoundaryRemoteForce.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#ImportedCutBoundaryRemoteForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedCutBoundaryRemoteForce.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedCutBoundaryRemoteForce.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#ImportedCutBoundaryRemoteForce.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedCutBoundaryRemoteForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedCutBoundaryRemoteForce.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedCutBoundaryRemoteForce.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedCutBoundaryRemoteForce.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedCutBoundaryRemoteForce.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedCutBoundaryRemoteForce.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedCutBoundaryRemoteForce.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedCutBoundaryRemoteForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedCutBoundaryRemoteForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedCutBoundaryRemoteForce.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedCutBoundaryRemoteForce.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedCutBoundaryRemoteForce.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedCutBoundaryRemoteForce.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedCutBoundaryRemoteForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedCutBoundaryRemoteForce.Weighting)                                                                           | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedCutBoundaryRemoteForce.MappingControl)                                                                 | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedCutBoundaryRemoteForce.DisplaySourcePoints)                                                       | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedCutBoundaryRemoteForce.DisplaySourcePointIds)                                                   | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedCutBoundaryRemoteForce.DisplayInteriorPoints)                                                   | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedCutBoundaryRemoteForce.DisplayProjectionPlane)                                                 | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedCutBoundaryRemoteForce.Algorithm)                                                                           | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedCutBoundaryRemoteForce.BoundingBoxTolerance)                                                     | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes)                           | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes)                         | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes)                       | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedCutBoundaryRemoteForce.Mapping)                                                                               | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedCutBoundaryRemoteForce.LegendMaximum)                                                                   | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedCutBoundaryRemoteForce.LegendMinimum)                                                                   | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedCutBoundaryRemoteForce.LegendRange)                                                                       | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedCutBoundaryRemoteForce.MaxOutsideDistance)                                                         | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedCutBoundaryRemoteForce.Method)                                                                                 | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedCutBoundaryRemoteForce.OutsideDistanceCheck)                                                     | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedCutBoundaryRemoteForce.OutsideOption)                                                                   | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedCutBoundaryRemoteForce.Projection)                                                                         | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem)                     | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem)                     | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedCutBoundaryRemoteForce.ShellThicknessFactor)                                                     | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedCutBoundaryRemoteForce.SourceMaximum)                                                                   | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedCutBoundaryRemoteForce.SourceMinimum)                                                                   | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedCutBoundaryRemoteForce.Interpolation)                                                                   | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedCutBoundaryRemoteForce.UnmappedNodesName)                                                           | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedCutBoundaryRemoteForce.MappedNodesName)                                                               | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedCutBoundaryRemoteForce.OutsideNodesName)                                                             | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedCutBoundaryRemoteForce.Pinball)                                                                               | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedCutBoundaryRemoteForce.NumberOfPoints)                                                                 | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedCutBoundaryRemoteForce.OrientationRealignment)                                                 | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedCutBoundaryRemoteForce.Limit)                                                                                   | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction)                                         | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedCutBoundaryRemoteForce.KrigingPolynom)                                                                 | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent)                                   | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedCutBoundaryRemoteForce.ApplyAs)                                                                               | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedCutBoundaryRemoteForce.Suppressed)                                                                         | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedCutBoundaryRemoteForce.SharedRefBody)                                                                   | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedCutBoundaryRemoteForce.Location)                                                                             | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedCutBoundaryRemoteForce.Children)                                                                             | Gets the list of children.                                                                              |
| [`Comments`](#ImportedCutBoundaryRemoteForce.Comments)                                                                             | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedCutBoundaryRemoteForce.Figures)                                                                               | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedCutBoundaryRemoteForce.Images)                                                                                 | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedCutBoundaryRemoteForce.Properties)                                                                         | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedCutBoundaryRemoteForce.VisibleProperties)                                                           | Gets the list of properties that are visible for this object.                                           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedCutBoundaryRemoteForce
```

## Property detail

### *property* ImportedCutBoundaryRemoteForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCutBoundaryRemoteForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedCutBoundaryRemoteForce.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedCutBoundaryRemoteForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
