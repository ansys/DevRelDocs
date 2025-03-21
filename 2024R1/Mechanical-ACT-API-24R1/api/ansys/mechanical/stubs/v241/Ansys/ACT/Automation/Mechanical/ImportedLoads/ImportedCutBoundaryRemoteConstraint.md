# `ImportedCutBoundaryRemoteConstraint`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteConstraint"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedCutBoundaryRemoteConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
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

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](#ImportedCutBoundaryRemoteConstraint.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedCutBoundaryRemoteConstraint.Weighting)                                                       | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedCutBoundaryRemoteConstraint.MappingControl)                                             | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedCutBoundaryRemoteConstraint.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedCutBoundaryRemoteConstraint.Mapping)                                                           | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedCutBoundaryRemoteConstraint.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedCutBoundaryRemoteConstraint.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedCutBoundaryRemoteConstraint.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedCutBoundaryRemoteConstraint.Method)                                                             | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedCutBoundaryRemoteConstraint.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedCutBoundaryRemoteConstraint.Projection)                                                     | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](#ImportedCutBoundaryRemoteConstraint.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedCutBoundaryRemoteConstraint.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedCutBoundaryRemoteConstraint.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`VariableType`](#ImportedCutBoundaryRemoteConstraint.VariableType)                                                 | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedCutBoundaryRemoteConstraint.Interpolation)                                               | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedCutBoundaryRemoteConstraint.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedCutBoundaryRemoteConstraint.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedCutBoundaryRemoteConstraint.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedCutBoundaryRemoteConstraint.Pinball)                                                           | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedCutBoundaryRemoteConstraint.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedCutBoundaryRemoteConstraint.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedCutBoundaryRemoteConstraint.Limit)                                                               | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedCutBoundaryRemoteConstraint.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedCutBoundaryRemoteConstraint.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedCutBoundaryRemoteConstraint.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedCutBoundaryRemoteConstraint.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedCutBoundaryRemoteConstraint.Location)                                                         | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedCutBoundaryRemoteConstraint.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedCutBoundaryRemoteConstraint.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedCutBoundaryRemoteConstraint.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedCutBoundaryRemoteConstraint.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedCutBoundaryRemoteConstraint.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedCutBoundaryRemoteConstraint.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCutBoundaryRemoteConstraint.InternalObject"></a>

### *property* ImportedCutBoundaryRemoteConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DataModelObjectCategory"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Weighting"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.MappingControl"></a>

### *property* ImportedCutBoundaryRemoteConstraint.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Algorithm"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance"></a>

### *property* ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Mapping"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.LegendMaximum"></a>

### *property* ImportedCutBoundaryRemoteConstraint.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.LegendMinimum"></a>

### *property* ImportedCutBoundaryRemoteConstraint.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.LegendRange"></a>

### *property* ImportedCutBoundaryRemoteConstraint.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance"></a>

### *property* ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Method"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OutsideOption"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Projection"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RigidBodyTransformationType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SourceMaximum"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SourceMinimum"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.VariableType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Interpolation"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.UnmappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteConstraint.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.MappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteConstraint.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OutsideNodesName"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Pinball"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.NumberOfPoints"></a>

### *property* ImportedCutBoundaryRemoteConstraint.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OrientationRealignment"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Limit"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction"></a>

### *property* ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.KrigingPolynom"></a>

### *property* ImportedCutBoundaryRemoteConstraint.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ApplyAs"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Suppressed"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SharedRefBody"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Location"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Children"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Comments"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Figures"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Images"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedCutBoundaryRemoteConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Properties"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.VisibleProperties"></a>

### *property* ImportedCutBoundaryRemoteConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteConstraint.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ExportToTextFile"></a>

### ImportedCutBoundaryRemoteConstraint.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Import"></a>

### ImportedCutBoundaryRemoteConstraint.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ImportLoad"></a>

### ImportedCutBoundaryRemoteConstraint.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddMappingValidation"></a>

### ImportedCutBoundaryRemoteConstraint.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ClearGeneratedData"></a>

### ImportedCutBoundaryRemoteConstraint.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Delete"></a>

### ImportedCutBoundaryRemoteConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetChildren"></a>

### ImportedCutBoundaryRemoteConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedCutBoundaryRemoteConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddComment"></a>

### ImportedCutBoundaryRemoteConstraint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddFigure"></a>

### ImportedCutBoundaryRemoteConstraint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddImage"></a>

### ImportedCutBoundaryRemoteConstraint.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Activate"></a>

### ImportedCutBoundaryRemoteConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CopyTo"></a>

### ImportedCutBoundaryRemoteConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Duplicate"></a>

### ImportedCutBoundaryRemoteConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GroupAllSimilarChildren"></a>

### ImportedCutBoundaryRemoteConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GroupSimilarObjects"></a>

### ImportedCutBoundaryRemoteConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.PropertyByName"></a>

### ImportedCutBoundaryRemoteConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.PropertyByAPIName"></a>

### ImportedCutBoundaryRemoteConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateParameter"></a>

### ImportedCutBoundaryRemoteConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetParameter"></a>

### ImportedCutBoundaryRemoteConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RemoveParameter"></a>

### ImportedCutBoundaryRemoteConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

