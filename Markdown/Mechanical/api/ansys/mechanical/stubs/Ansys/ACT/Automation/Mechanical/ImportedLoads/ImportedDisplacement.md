# ImportedDisplacement

### *class* ImportedDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedDisplacement.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#ImportedDisplacement.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#ImportedDisplacement.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](#ImportedDisplacement.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](#ImportedDisplacement.Import)                                   | Import.                                                                           |
| [`ImportLoad`](#ImportedDisplacement.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](#ImportedDisplacement.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](#ImportedDisplacement.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedDisplacement.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedDisplacement.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedDisplacement.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedDisplacement.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedDisplacement.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedDisplacement.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedDisplacement.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedDisplacement.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedDisplacement.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedDisplacement.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedDisplacement.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedDisplacement.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedDisplacement.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedDisplacement.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ApplyToInitialMesh`](#ImportedDisplacement.ApplyToInitialMesh)                                                                   | Gets or sets the ApplyToInitialMesh.                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`DisplacementType`](#ImportedDisplacement.DisplacementType)                                                                       | Gets or sets the DisplacementType.                                                                      |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedDisplacement.Weighting)                                                                                     | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedDisplacement.MappingControl)                                                                           | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedDisplacement.DisplaySourcePoints)                                                                 | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedDisplacement.DisplaySourcePointIds)                                                             | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedDisplacement.DisplayInteriorPoints)                                                             | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedDisplacement.DisplayProjectionPlane)                                                           | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedDisplacement.Algorithm)                                                                                     | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedDisplacement.BoundingBoxTolerance)                                                               | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedDisplacement.CreateNameSelectionForMappedNodes)                                     | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedDisplacement.CreateNameSelectionForOutsideNodes)                                   | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedDisplacement.CreateNameSelectionForUnmappedNodes)                                 | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedDisplacement.Mapping)                                                                                         | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedDisplacement.LegendMaximum)                                                                             | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedDisplacement.LegendMinimum)                                                                             | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedDisplacement.LegendRange)                                                                                 | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedDisplacement.MaxOutsideDistance)                                                                   | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedDisplacement.Method)                                                                                           | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedDisplacement.OutsideDistanceCheck)                                                               | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedDisplacement.OutsideOption)                                                                             | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedDisplacement.Projection)                                                                                   | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedDisplacement.RigidTransformSourceCoordinateSystem)                               | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedDisplacement.RigidTransformTargetCoordinateSystem)                               | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedDisplacement.ShellThicknessFactor)                                                               | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedDisplacement.SourceMaximum)                                                                             | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedDisplacement.SourceMinimum)                                                                             | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                              | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedDisplacement.Interpolation)                                                                             | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedDisplacement.UnmappedNodesName)                                                                     | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedDisplacement.MappedNodesName)                                                                         | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedDisplacement.OutsideNodesName)                                                                       | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedDisplacement.Pinball)                                                                                         | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedDisplacement.NumberOfPoints)                                                                           | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedDisplacement.OrientationRealignment)                                                           | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedDisplacement.Limit)                                                                                             | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedDisplacement.KrigingCorrelationFunction)                                                   | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedDisplacement.KrigingPolynom)                                                                           | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedDisplacement.ExtrapolationTolerancePercent)                                             | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedDisplacement.ApplyAs)                                                                                         | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedDisplacement.Suppressed)                                                                                   | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedDisplacement.SharedRefBody)                                                                             | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedDisplacement.Location)                                                                                       | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedDisplacement.Children)                                                                                       | Gets the list of children.                                                                              |
| [`Comments`](#ImportedDisplacement.Comments)                                                                                       | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedDisplacement.Figures)                                                                                         | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedDisplacement.Images)                                                                                           | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedDisplacement.Properties)                                                                                   | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedDisplacement.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object.                                           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ImportedLoads import ImportedDisplacement
```

## Property detail

### *property* ImportedDisplacement.ApplyToInitialMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyToInitialMesh.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.DisplacementType *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplacementType](../../../../Mechanical/DataModel/Enums/ExternalLoadDisplacementType.md#ExternalLoadDisplacementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementType.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedDisplacement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ImportedDisplacement.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.Import()

Import.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedDisplacement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
