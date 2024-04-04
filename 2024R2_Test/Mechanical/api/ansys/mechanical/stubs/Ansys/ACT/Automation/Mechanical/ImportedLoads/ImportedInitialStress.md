# ImportedInitialStress

### *class* ImportedInitialStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedInitialStress.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToTextFile`](#ImportedInitialStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#ImportedInitialStress.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedInitialStress.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedInitialStress.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#ImportedInitialStress.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#ImportedInitialStress.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedInitialStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedInitialStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedInitialStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedInitialStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedInitialStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedInitialStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedInitialStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedInitialStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedInitialStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedInitialStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedInitialStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedInitialStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedInitialStress.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedInitialStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedInitialStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedInitialStress.Weighting)                                                                                    | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedInitialStress.MappingControl)                                                                          | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedInitialStress.DisplaySourcePoints)                                                                | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedInitialStress.DisplaySourcePointIds)                                                            | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedInitialStress.DisplayInteriorPoints)                                                            | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedInitialStress.DisplayProjectionPlane)                                                          | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedInitialStress.Algorithm)                                                                                    | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedInitialStress.BoundingBoxTolerance)                                                              | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedInitialStress.CreateNameSelectionForMappedNodes)                                    | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedInitialStress.CreateNameSelectionForOutsideNodes)                                  | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedInitialStress.CreateNameSelectionForUnmappedNodes)                                | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedInitialStress.Mapping)                                                                                        | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedInitialStress.LegendMaximum)                                                                            | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedInitialStress.LegendMinimum)                                                                            | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedInitialStress.LegendRange)                                                                                | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedInitialStress.MaxOutsideDistance)                                                                  | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedInitialStress.Method)                                                                                          | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedInitialStress.OutsideDistanceCheck)                                                              | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedInitialStress.OutsideOption)                                                                            | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedInitialStress.Projection)                                                                                  | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedInitialStress.RigidTransformSourceCoordinateSystem)                              | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedInitialStress.RigidTransformTargetCoordinateSystem)                              | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedInitialStress.ShellThicknessFactor)                                                              | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedInitialStress.SourceMaximum)                                                                            | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedInitialStress.SourceMinimum)                                                                            | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedInitialStress.Interpolation)                                                                            | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedInitialStress.UnmappedNodesName)                                                                    | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedInitialStress.MappedNodesName)                                                                        | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedInitialStress.OutsideNodesName)                                                                      | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedInitialStress.Pinball)                                                                                        | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedInitialStress.NumberOfPoints)                                                                          | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedInitialStress.OrientationRealignment)                                                          | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedInitialStress.Limit)                                                                                            | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedInitialStress.KrigingCorrelationFunction)                                                  | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedInitialStress.KrigingPolynom)                                                                          | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedInitialStress.ExtrapolationTolerancePercent)                                            | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedInitialStress.ApplyAs)                                                                                        | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedInitialStress.Suppressed)                                                                                  | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedInitialStress.SharedRefBody)                                                                            | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedInitialStress.Location)                                                                                      | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedInitialStress.Children)                                                                                      | Gets the list of children.                                                                              |
| [`Comments`](#ImportedInitialStress.Comments)                                                                                      | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedInitialStress.Figures)                                                                                        | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedInitialStress.Images)                                                                                          | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedInitialStress.Properties)                                                                                  | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedInitialStress.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object.                                           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedInitialStress
```

## Property detail

### *property* ImportedInitialStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedInitialStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedInitialStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedInitialStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
