# ImportedWarpWeftRatio

### *class* ImportedWarpWeftRatio

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedWarpWeftRatio.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToTextFile`](#ImportedWarpWeftRatio.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#ImportedWarpWeftRatio.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedWarpWeftRatio.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedWarpWeftRatio.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#ImportedWarpWeftRatio.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#ImportedWarpWeftRatio.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedWarpWeftRatio.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedWarpWeftRatio.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedWarpWeftRatio.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedWarpWeftRatio.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedWarpWeftRatio.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedWarpWeftRatio.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedWarpWeftRatio.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedWarpWeftRatio.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedWarpWeftRatio.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedWarpWeftRatio.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedWarpWeftRatio.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedWarpWeftRatio.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedWarpWeftRatio.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedWarpWeftRatio.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedWarpWeftRatio.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedWarpWeftRatio.Weighting)                                                                                    | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedWarpWeftRatio.MappingControl)                                                                          | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedWarpWeftRatio.DisplaySourcePoints)                                                                | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedWarpWeftRatio.DisplaySourcePointIds)                                                            | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedWarpWeftRatio.DisplayInteriorPoints)                                                            | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedWarpWeftRatio.DisplayProjectionPlane)                                                          | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedWarpWeftRatio.Algorithm)                                                                                    | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedWarpWeftRatio.BoundingBoxTolerance)                                                              | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedWarpWeftRatio.CreateNameSelectionForMappedNodes)                                    | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedWarpWeftRatio.CreateNameSelectionForOutsideNodes)                                  | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedWarpWeftRatio.CreateNameSelectionForUnmappedNodes)                                | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedWarpWeftRatio.Mapping)                                                                                        | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedWarpWeftRatio.LegendMaximum)                                                                            | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedWarpWeftRatio.LegendMinimum)                                                                            | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedWarpWeftRatio.LegendRange)                                                                                | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedWarpWeftRatio.MaxOutsideDistance)                                                                  | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedWarpWeftRatio.Method)                                                                                          | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedWarpWeftRatio.OutsideDistanceCheck)                                                              | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedWarpWeftRatio.OutsideOption)                                                                            | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedWarpWeftRatio.Projection)                                                                                  | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedWarpWeftRatio.RigidTransformSourceCoordinateSystem)                              | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedWarpWeftRatio.RigidTransformTargetCoordinateSystem)                              | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedWarpWeftRatio.ShellThicknessFactor)                                                              | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedWarpWeftRatio.SourceMaximum)                                                                            | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedWarpWeftRatio.SourceMinimum)                                                                            | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedWarpWeftRatio.Interpolation)                                                                            | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedWarpWeftRatio.UnmappedNodesName)                                                                    | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedWarpWeftRatio.MappedNodesName)                                                                        | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedWarpWeftRatio.OutsideNodesName)                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedWarpWeftRatio.Pinball)                                                                                        | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedWarpWeftRatio.NumberOfPoints)                                                                          | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedWarpWeftRatio.OrientationRealignment)                                                          | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedWarpWeftRatio.Limit)                                                                                            | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedWarpWeftRatio.KrigingCorrelationFunction)                                                  | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedWarpWeftRatio.KrigingPolynom)                                                                          | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedWarpWeftRatio.ExtrapolationTolerancePercent)                                            | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedWarpWeftRatio.ApplyAs)                                                                                        | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedWarpWeftRatio.Suppressed)                                                                                  | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedWarpWeftRatio.SharedRefBody)                                                                            | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedWarpWeftRatio.Location)                                                                                      | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedWarpWeftRatio.Children)                                                                                      | Gets the list of children.                                                                              |
| [`Comments`](#ImportedWarpWeftRatio.Comments)                                                                                      | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedWarpWeftRatio.Figures)                                                                                        | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedWarpWeftRatio.Images)                                                                                          | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedWarpWeftRatio.Properties)                                                                                  | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedWarpWeftRatio.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object.                                           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedWarpWeftRatio
```

## Property detail

### *property* ImportedWarpWeftRatio.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedWarpWeftRatio.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedWarpWeftRatio.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedWarpWeftRatio.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
