<!-- vale off -->

<a id="importedinitialstress"></a>

# `ImportedInitialStress`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedInitialStress"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedInitialStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedInitialStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToTextFile`](#ImportedInitialStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
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

| Name | Description |
|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                              | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](#ImportedInitialStress.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`Weighting`](#ImportedInitialStress.Weighting)                                                       | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedInitialStress.MappingControl)                                             | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedInitialStress.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedInitialStress.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedInitialStress.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedInitialStress.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedInitialStress.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedInitialStress.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedInitialStress.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedInitialStress.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedInitialStress.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedInitialStress.Mapping)                                                           | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedInitialStress.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedInitialStress.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedInitialStress.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedInitialStress.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedInitialStress.Method)                                                             | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedInitialStress.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedInitialStress.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedInitialStress.Projection)                                                     | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](#ImportedInitialStress.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedInitialStress.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedInitialStress.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedInitialStress.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedInitialStress.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedInitialStress.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`VariableType`](#ImportedInitialStress.VariableType)                                                 | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedInitialStress.Interpolation)                                               | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedInitialStress.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedInitialStress.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedInitialStress.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedInitialStress.Pinball)                                                           | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedInitialStress.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedInitialStress.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedInitialStress.Limit)                                                               | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedInitialStress.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedInitialStress.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedInitialStress.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedInitialStress.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedInitialStress.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedInitialStress.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedInitialStress.Location)                                                         | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedInitialStress.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedInitialStress.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedInitialStress.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedInitialStress.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                              | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedInitialStress.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedInitialStress.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedInitialStress.InternalObject"></a>

### *property* ImportedInitialStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.DataModelObjectCategory"></a>

### *property* ImportedInitialStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Weighting"></a>

### *property* ImportedInitialStress.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.MappingControl"></a>

### *property* ImportedInitialStress.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.DisplaySourcePoints"></a>

### *property* ImportedInitialStress.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.DisplaySourcePointIds"></a>

### *property* ImportedInitialStress.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.DisplayInteriorPoints"></a>

### *property* ImportedInitialStress.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.DisplayProjectionPlane"></a>

### *property* ImportedInitialStress.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Algorithm"></a>

### *property* ImportedInitialStress.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.BoundingBoxTolerance"></a>

### *property* ImportedInitialStress.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedInitialStress.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedInitialStress.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedInitialStress.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Mapping"></a>

### *property* ImportedInitialStress.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.LegendMaximum"></a>

### *property* ImportedInitialStress.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.LegendMinimum"></a>

### *property* ImportedInitialStress.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.LegendRange"></a>

### *property* ImportedInitialStress.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.MaxOutsideDistance"></a>

### *property* ImportedInitialStress.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Method"></a>

### *property* ImportedInitialStress.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.OutsideDistanceCheck"></a>

### *property* ImportedInitialStress.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.OutsideOption"></a>

### *property* ImportedInitialStress.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Projection"></a>

### *property* ImportedInitialStress.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.RigidBodyTransformationType"></a>

### *property* ImportedInitialStress.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedInitialStress.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedInitialStress.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.ShellThicknessFactor"></a>

### *property* ImportedInitialStress.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.SourceMaximum"></a>

### *property* ImportedInitialStress.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.SourceMinimum"></a>

### *property* ImportedInitialStress.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.VariableType"></a>

### *property* ImportedInitialStress.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Interpolation"></a>

### *property* ImportedInitialStress.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.UnmappedNodesName"></a>

### *property* ImportedInitialStress.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.MappedNodesName"></a>

### *property* ImportedInitialStress.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.OutsideNodesName"></a>

### *property* ImportedInitialStress.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Pinball"></a>

### *property* ImportedInitialStress.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.NumberOfPoints"></a>

### *property* ImportedInitialStress.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.OrientationRealignment"></a>

### *property* ImportedInitialStress.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Limit"></a>

### *property* ImportedInitialStress.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.KrigingCorrelationFunction"></a>

### *property* ImportedInitialStress.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.KrigingPolynom"></a>

### *property* ImportedInitialStress.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.ExtrapolationTolerancePercent"></a>

### *property* ImportedInitialStress.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.ApplyAs"></a>

### *property* ImportedInitialStress.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Suppressed"></a>

### *property* ImportedInitialStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.SharedRefBody"></a>

### *property* ImportedInitialStress.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Location"></a>

### *property* ImportedInitialStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Children"></a>

### *property* ImportedInitialStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Comments"></a>

### *property* ImportedInitialStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Figures"></a>

### *property* ImportedInitialStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Images"></a>

### *property* ImportedInitialStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedInitialStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Properties"></a>

### *property* ImportedInitialStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.VisibleProperties"></a>

### *property* ImportedInitialStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedInitialStress.ExportToTextFile"></a>

### ImportedInitialStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Import"></a>

### ImportedInitialStress.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.ImportLoad"></a>

### ImportedInitialStress.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.GetActivateAtLoadStep"></a>

### ImportedInitialStress.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.SetActivateAtLoadStep"></a>

### ImportedInitialStress.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.AddMappingValidation"></a>

### ImportedInitialStress.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.ClearGeneratedData"></a>

### ImportedInitialStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Delete"></a>

### ImportedInitialStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.GetChildren"></a>

### ImportedInitialStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedInitialStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.AddComment"></a>

### ImportedInitialStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.AddFigure"></a>

### ImportedInitialStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.AddImage"></a>

### ImportedInitialStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Activate"></a>

### ImportedInitialStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.CopyTo"></a>

### ImportedInitialStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.Duplicate"></a>

### ImportedInitialStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.GroupAllSimilarChildren"></a>

### ImportedInitialStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.GroupSimilarObjects"></a>

### ImportedInitialStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.PropertyByName"></a>

### ImportedInitialStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.PropertyByAPIName"></a>

### ImportedInitialStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.CreateParameter"></a>

### ImportedInitialStress.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.GetParameter"></a>

### ImportedInitialStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedInitialStress.RemoveParameter"></a>

### ImportedInitialStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
