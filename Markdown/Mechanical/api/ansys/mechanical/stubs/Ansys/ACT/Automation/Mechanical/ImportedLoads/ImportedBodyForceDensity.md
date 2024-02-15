# ImportedBodyForceDensity

### *class* ImportedBodyForceDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedBodyForceDensity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#ImportedBodyForceDensity.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#ImportedBodyForceDensity.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#ImportedBodyForceDensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedBodyForceDensity.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedBodyForceDensity.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#ImportedBodyForceDensity.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedBodyForceDensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedBodyForceDensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedBodyForceDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedBodyForceDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedBodyForceDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedBodyForceDensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedBodyForceDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedBodyForceDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedBodyForceDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedBodyForceDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedBodyForceDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedBodyForceDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedBodyForceDensity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedBodyForceDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedBodyForceDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedBodyForceDensity.Weighting)                                                                                 | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedBodyForceDensity.MappingControl)                                                                       | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedBodyForceDensity.DisplaySourcePoints)                                                             | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedBodyForceDensity.DisplaySourcePointIds)                                                         | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedBodyForceDensity.DisplayInteriorPoints)                                                         | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedBodyForceDensity.DisplayProjectionPlane)                                                       | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedBodyForceDensity.Algorithm)                                                                                 | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedBodyForceDensity.BoundingBoxTolerance)                                                           | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedBodyForceDensity.CreateNameSelectionForMappedNodes)                                 | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedBodyForceDensity.CreateNameSelectionForOutsideNodes)                               | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedBodyForceDensity.CreateNameSelectionForUnmappedNodes)                             | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedBodyForceDensity.Mapping)                                                                                     | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedBodyForceDensity.LegendMaximum)                                                                         | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedBodyForceDensity.LegendMinimum)                                                                         | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedBodyForceDensity.LegendRange)                                                                             | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedBodyForceDensity.MaxOutsideDistance)                                                               | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedBodyForceDensity.Method)                                                                                       | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedBodyForceDensity.OutsideDistanceCheck)                                                           | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedBodyForceDensity.OutsideOption)                                                                         | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedBodyForceDensity.Projection)                                                                               | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedBodyForceDensity.RigidTransformSourceCoordinateSystem)                           | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedBodyForceDensity.RigidTransformTargetCoordinateSystem)                           | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedBodyForceDensity.ShellThicknessFactor)                                                           | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedBodyForceDensity.SourceMaximum)                                                                         | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedBodyForceDensity.SourceMinimum)                                                                         | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedBodyForceDensity.Interpolation)                                                                         | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedBodyForceDensity.UnmappedNodesName)                                                                 | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedBodyForceDensity.MappedNodesName)                                                                     | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedBodyForceDensity.OutsideNodesName)                                                                   | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedBodyForceDensity.Pinball)                                                                                     | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedBodyForceDensity.NumberOfPoints)                                                                       | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedBodyForceDensity.OrientationRealignment)                                                       | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedBodyForceDensity.Limit)                                                                                         | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedBodyForceDensity.KrigingCorrelationFunction)                                               | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedBodyForceDensity.KrigingPolynom)                                                                       | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedBodyForceDensity.ExtrapolationTolerancePercent)                                         | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedBodyForceDensity.ApplyAs)                                                                                     | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedBodyForceDensity.Suppressed)                                                                               | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedBodyForceDensity.SharedRefBody)                                                                         | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedBodyForceDensity.Location)                                                                                   | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedBodyForceDensity.Children)                                                                                   | Gets the list of children.                                                                              |
| [`Comments`](#ImportedBodyForceDensity.Comments)                                                                                   | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedBodyForceDensity.Figures)                                                                                     | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedBodyForceDensity.Images)                                                                                       | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedBodyForceDensity.Properties)                                                                               | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedBodyForceDensity.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object.                                           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedBodyForceDensity
```

## Property detail

### *property* ImportedBodyForceDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedBodyForceDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedBodyForceDensity.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedBodyForceDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
