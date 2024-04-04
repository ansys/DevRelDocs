# ImportedForce

### *class* ImportedForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedForce.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToTextFile`](#ImportedForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#ImportedForce.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedForce.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedForce.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#ImportedForce.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#ImportedForce.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedForce.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedForce.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedForce.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedForce.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedForce.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedForce.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedForce.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedForce.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedForce.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedForce.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedForce.Weighting)                                                                                            | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedForce.MappingControl)                                                                                  | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedForce.DisplaySourcePoints)                                                                        | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedForce.DisplaySourcePointIds)                                                                    | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedForce.DisplayInteriorPoints)                                                                    | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedForce.DisplayProjectionPlane)                                                                  | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedForce.Algorithm)                                                                                            | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedForce.BoundingBoxTolerance)                                                                      | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedForce.CreateNameSelectionForMappedNodes)                                            | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedForce.CreateNameSelectionForOutsideNodes)                                          | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedForce.CreateNameSelectionForUnmappedNodes)                                        | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedForce.Mapping)                                                                                                | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedForce.LegendMaximum)                                                                                    | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedForce.LegendMinimum)                                                                                    | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedForce.LegendRange)                                                                                        | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedForce.MaxOutsideDistance)                                                                          | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedForce.Method)                                                                                                  | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedForce.OutsideDistanceCheck)                                                                      | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedForce.OutsideOption)                                                                                    | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedForce.Projection)                                                                                          | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedForce.RigidTransformSourceCoordinateSystem)                                      | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedForce.RigidTransformTargetCoordinateSystem)                                      | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedForce.ShellThicknessFactor)                                                                      | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedForce.SourceMaximum)                                                                                    | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedForce.SourceMinimum)                                                                                    | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedForce.Interpolation)                                                                                    | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedForce.UnmappedNodesName)                                                                            | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedForce.MappedNodesName)                                                                                | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedForce.OutsideNodesName)                                                                              | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedForce.Pinball)                                                                                                | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedForce.NumberOfPoints)                                                                                  | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedForce.OrientationRealignment)                                                                  | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedForce.Limit)                                                                                                    | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedForce.KrigingCorrelationFunction)                                                          | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedForce.KrigingPolynom)                                                                                  | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedForce.ExtrapolationTolerancePercent)                                                    | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedForce.ApplyAs)                                                                                                | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedForce.Suppressed)                                                                                          | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedForce.SharedRefBody)                                                                                    | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedForce.Location)                                                                                              | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedForce.Children)                                                                                              | Gets the list of children.                                                                              |
| [`Comments`](#ImportedForce.Comments)                                                                                              | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedForce.Figures)                                                                                                | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedForce.Images)                                                                                                  | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedForce.Properties)                                                                                          | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedForce.VisibleProperties)                                                                            | Gets the list of properties that are visible for this object.                                           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedForce
```

## Property detail

### *property* ImportedForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedForce.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedForce.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedForce.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedForce.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedForce.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedForce.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedForce.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
