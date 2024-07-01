<!-- vale off -->

<a id="importedheatgeneration"></a>

# `ImportedHeatGeneration`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatGeneration"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedHeatGeneration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedHeatGeneration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToTextFile`](#ImportedHeatGeneration.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
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

| Name | Description |
|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                               | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](#ImportedHeatGeneration.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedHeatGeneration.Weighting)                                                       | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedHeatGeneration.MappingControl)                                             | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedHeatGeneration.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedHeatGeneration.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedHeatGeneration.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedHeatGeneration.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedHeatGeneration.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedHeatGeneration.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedHeatGeneration.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedHeatGeneration.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedHeatGeneration.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedHeatGeneration.Mapping)                                                           | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedHeatGeneration.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedHeatGeneration.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedHeatGeneration.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedHeatGeneration.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedHeatGeneration.Method)                                                             | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedHeatGeneration.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedHeatGeneration.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedHeatGeneration.Projection)                                                     | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](#ImportedHeatGeneration.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedHeatGeneration.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedHeatGeneration.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedHeatGeneration.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedHeatGeneration.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedHeatGeneration.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`VariableType`](#ImportedHeatGeneration.VariableType)                                                 | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedHeatGeneration.Interpolation)                                               | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedHeatGeneration.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedHeatGeneration.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedHeatGeneration.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedHeatGeneration.Pinball)                                                           | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedHeatGeneration.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedHeatGeneration.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedHeatGeneration.Limit)                                                               | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedHeatGeneration.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedHeatGeneration.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedHeatGeneration.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedHeatGeneration.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedHeatGeneration.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedHeatGeneration.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedHeatGeneration.Location)                                                         | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedHeatGeneration.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedHeatGeneration.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedHeatGeneration.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedHeatGeneration.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                               | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedHeatGeneration.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedHeatGeneration.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedHeatGeneration.InternalObject"></a>

### *property* ImportedHeatGeneration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.DataModelObjectCategory"></a>

### *property* ImportedHeatGeneration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Weighting"></a>

### *property* ImportedHeatGeneration.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.MappingControl"></a>

### *property* ImportedHeatGeneration.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.DisplaySourcePoints"></a>

### *property* ImportedHeatGeneration.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.DisplaySourcePointIds"></a>

### *property* ImportedHeatGeneration.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.DisplayInteriorPoints"></a>

### *property* ImportedHeatGeneration.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.DisplayProjectionPlane"></a>

### *property* ImportedHeatGeneration.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Algorithm"></a>

### *property* ImportedHeatGeneration.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.BoundingBoxTolerance"></a>

### *property* ImportedHeatGeneration.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedHeatGeneration.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedHeatGeneration.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedHeatGeneration.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Mapping"></a>

### *property* ImportedHeatGeneration.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.LegendMaximum"></a>

### *property* ImportedHeatGeneration.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.LegendMinimum"></a>

### *property* ImportedHeatGeneration.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.LegendRange"></a>

### *property* ImportedHeatGeneration.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.MaxOutsideDistance"></a>

### *property* ImportedHeatGeneration.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Method"></a>

### *property* ImportedHeatGeneration.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.OutsideDistanceCheck"></a>

### *property* ImportedHeatGeneration.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.OutsideOption"></a>

### *property* ImportedHeatGeneration.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Projection"></a>

### *property* ImportedHeatGeneration.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.RigidBodyTransformationType"></a>

### *property* ImportedHeatGeneration.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedHeatGeneration.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedHeatGeneration.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ShellThicknessFactor"></a>

### *property* ImportedHeatGeneration.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.SourceMaximum"></a>

### *property* ImportedHeatGeneration.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.SourceMinimum"></a>

### *property* ImportedHeatGeneration.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.VariableType"></a>

### *property* ImportedHeatGeneration.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Interpolation"></a>

### *property* ImportedHeatGeneration.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.UnmappedNodesName"></a>

### *property* ImportedHeatGeneration.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.MappedNodesName"></a>

### *property* ImportedHeatGeneration.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.OutsideNodesName"></a>

### *property* ImportedHeatGeneration.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Pinball"></a>

### *property* ImportedHeatGeneration.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.NumberOfPoints"></a>

### *property* ImportedHeatGeneration.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.OrientationRealignment"></a>

### *property* ImportedHeatGeneration.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Limit"></a>

### *property* ImportedHeatGeneration.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.KrigingCorrelationFunction"></a>

### *property* ImportedHeatGeneration.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.KrigingPolynom"></a>

### *property* ImportedHeatGeneration.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ExtrapolationTolerancePercent"></a>

### *property* ImportedHeatGeneration.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ApplyAs"></a>

### *property* ImportedHeatGeneration.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Suppressed"></a>

### *property* ImportedHeatGeneration.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.SharedRefBody"></a>

### *property* ImportedHeatGeneration.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Location"></a>

### *property* ImportedHeatGeneration.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Children"></a>

### *property* ImportedHeatGeneration.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Comments"></a>

### *property* ImportedHeatGeneration.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Figures"></a>

### *property* ImportedHeatGeneration.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Images"></a>

### *property* ImportedHeatGeneration.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedHeatGeneration.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Properties"></a>

### *property* ImportedHeatGeneration.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.VisibleProperties"></a>

### *property* ImportedHeatGeneration.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedHeatGeneration.ExportToTextFile"></a>

### ImportedHeatGeneration.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Import"></a>

### ImportedHeatGeneration.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ImportLoad"></a>

### ImportedHeatGeneration.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.GetActivateAtLoadStep"></a>

### ImportedHeatGeneration.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.SetActivateAtLoadStep"></a>

### ImportedHeatGeneration.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.AddMappingValidation"></a>

### ImportedHeatGeneration.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.ClearGeneratedData"></a>

### ImportedHeatGeneration.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Delete"></a>

### ImportedHeatGeneration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.GetChildren"></a>

### ImportedHeatGeneration.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedHeatGeneration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.AddComment"></a>

### ImportedHeatGeneration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.AddFigure"></a>

### ImportedHeatGeneration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.AddImage"></a>

### ImportedHeatGeneration.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Activate"></a>

### ImportedHeatGeneration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.CopyTo"></a>

### ImportedHeatGeneration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.Duplicate"></a>

### ImportedHeatGeneration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.GroupAllSimilarChildren"></a>

### ImportedHeatGeneration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.GroupSimilarObjects"></a>

### ImportedHeatGeneration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.PropertyByName"></a>

### ImportedHeatGeneration.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.PropertyByAPIName"></a>

### ImportedHeatGeneration.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.CreateParameter"></a>

### ImportedHeatGeneration.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.GetParameter"></a>

### ImportedHeatGeneration.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedHeatGeneration.RemoveParameter"></a>

### ImportedHeatGeneration.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
