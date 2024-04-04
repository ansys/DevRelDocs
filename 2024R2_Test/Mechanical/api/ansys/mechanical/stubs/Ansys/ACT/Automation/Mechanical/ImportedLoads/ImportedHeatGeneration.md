# ImportedHeatGeneration

### *class* ImportedHeatGeneration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedHeatGeneration.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToTextFile`](#ImportedHeatGeneration.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Import`](#ImportedHeatGeneration.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedHeatGeneration.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`GetActivateAtLoadStep`](#ImportedHeatGeneration.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#ImportedHeatGeneration.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddMappingValidation`](#ImportedHeatGeneration.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedHeatGeneration.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedHeatGeneration.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedHeatGeneration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedHeatGeneration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedHeatGeneration.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedHeatGeneration.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedHeatGeneration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedHeatGeneration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedHeatGeneration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedHeatGeneration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedHeatGeneration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedHeatGeneration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedHeatGeneration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedHeatGeneration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedHeatGeneration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedHeatGeneration.Weighting)                                                                                   | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedHeatGeneration.MappingControl)                                                                         | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedHeatGeneration.DisplaySourcePoints)                                                               | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedHeatGeneration.DisplaySourcePointIds)                                                           | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedHeatGeneration.DisplayInteriorPoints)                                                           | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedHeatGeneration.DisplayProjectionPlane)                                                         | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedHeatGeneration.Algorithm)                                                                                   | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedHeatGeneration.BoundingBoxTolerance)                                                             | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedHeatGeneration.CreateNameSelectionForMappedNodes)                                   | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedHeatGeneration.CreateNameSelectionForOutsideNodes)                                 | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedHeatGeneration.CreateNameSelectionForUnmappedNodes)                               | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedHeatGeneration.Mapping)                                                                                       | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedHeatGeneration.LegendMaximum)                                                                           | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedHeatGeneration.LegendMinimum)                                                                           | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedHeatGeneration.LegendRange)                                                                               | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedHeatGeneration.MaxOutsideDistance)                                                                 | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedHeatGeneration.Method)                                                                                         | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedHeatGeneration.OutsideDistanceCheck)                                                             | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedHeatGeneration.OutsideOption)                                                                           | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedHeatGeneration.Projection)                                                                                 | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedHeatGeneration.RigidTransformSourceCoordinateSystem)                             | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedHeatGeneration.RigidTransformTargetCoordinateSystem)                             | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedHeatGeneration.ShellThicknessFactor)                                                             | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedHeatGeneration.SourceMaximum)                                                                           | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedHeatGeneration.SourceMinimum)                                                                           | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedHeatGeneration.Interpolation)                                                                           | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedHeatGeneration.UnmappedNodesName)                                                                   | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedHeatGeneration.MappedNodesName)                                                                       | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedHeatGeneration.OutsideNodesName)                                                                     | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedHeatGeneration.Pinball)                                                                                       | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedHeatGeneration.NumberOfPoints)                                                                         | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedHeatGeneration.OrientationRealignment)                                                         | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedHeatGeneration.Limit)                                                                                           | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedHeatGeneration.KrigingCorrelationFunction)                                                 | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedHeatGeneration.KrigingPolynom)                                                                         | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedHeatGeneration.ExtrapolationTolerancePercent)                                           | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedHeatGeneration.ApplyAs)                                                                                       | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedHeatGeneration.Suppressed)                                                                                 | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedHeatGeneration.SharedRefBody)                                                                           | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedHeatGeneration.Location)                                                                                     | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedHeatGeneration.Children)                                                                                     | Gets the list of children.                                                                              |
| [`Comments`](#ImportedHeatGeneration.Comments)                                                                                     | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedHeatGeneration.Figures)                                                                                       | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedHeatGeneration.Images)                                                                                         | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedHeatGeneration.Properties)                                                                                 | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedHeatGeneration.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object.                                           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedHeatGeneration
```

## Property detail

### *property* ImportedHeatGeneration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedHeatGeneration.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedHeatGeneration.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedHeatGeneration.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
