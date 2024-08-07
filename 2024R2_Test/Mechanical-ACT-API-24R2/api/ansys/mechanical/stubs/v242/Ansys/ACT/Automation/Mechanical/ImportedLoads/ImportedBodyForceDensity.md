# `ImportedBodyForceDensity`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedBodyForceDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedBodyForceDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#ImportedBodyForceDensity.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                           |
| [`SetActivateAtLoadStep`](#ImportedBodyForceDensity.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                           |
| [`ExportToTextFile`](#ImportedBodyForceDensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                        |
| [`Import`](#ImportedBodyForceDensity.Import)                                   | Import.                                                                                 |
| [`ImportLoad`](#ImportedBodyForceDensity.ImportLoad)                           | Run the ImportLoad action.                                                              |
| [`ReloadConfiguration`](#ImportedBodyForceDensity.ReloadConfiguration)         | Reload the Imported Loadâ€™s setup from its associated configuration file (if available). |
| [`AddMappingValidation`](#ImportedBodyForceDensity.AddMappingValidation)       | Creates a new MappingValidation                                                         |
| [`ClearGeneratedData`](#ImportedBodyForceDensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                      |
| [`Delete`](#ImportedBodyForceDensity.Delete)                                   | Run the Delete action.                                                                  |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                            |
| [`AddComment`](#ImportedBodyForceDensity.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](#ImportedBodyForceDensity.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](#ImportedBodyForceDensity.AddImage)                               | Creates a new child Image.                                                              |
| [`Activate`](#ImportedBodyForceDensity.Activate)                               | Activate the current object.                                                            |
| [`CopyTo`](#ImportedBodyForceDensity.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`Duplicate`](#ImportedBodyForceDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`GroupAllSimilarChildren`](#ImportedBodyForceDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](#ImportedBodyForceDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`PropertyByName`](#ImportedBodyForceDensity.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`PropertyByAPIName`](#ImportedBodyForceDensity.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`CreateParameter`](#ImportedBodyForceDensity.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`GetParameter`](#ImportedBodyForceDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`RemoveParameter`](#ImportedBodyForceDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                 | Gets the internal object. For advanced usage only.                                                      |
| [`DataModelObjectCategory`](#ImportedBodyForceDensity.DataModelObjectCategory)                           | Gets the current DataModelObjectâ€™s category.                                                            |
| [`Weighting`](#ImportedBodyForceDensity.Weighting)                                                       | Weighting property.                                                                                     |
| [`MappingControl`](#ImportedBodyForceDensity.MappingControl)                                             | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](#ImportedBodyForceDensity.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](#ImportedBodyForceDensity.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](#ImportedBodyForceDensity.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedBodyForceDensity.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](#ImportedBodyForceDensity.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](#ImportedBodyForceDensity.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](#ImportedBodyForceDensity.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedBodyForceDensity.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedBodyForceDensity.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](#ImportedBodyForceDensity.Mapping)                                                           | Mapping property.                                                                                       |
| [`LegendMaximum`](#ImportedBodyForceDensity.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](#ImportedBodyForceDensity.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](#ImportedBodyForceDensity.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](#ImportedBodyForceDensity.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedBodyForceDensity.Method)                                                             | Method property.                                                                                        |
| [`OutsideDistanceCheck`](#ImportedBodyForceDensity.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](#ImportedBodyForceDensity.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Projection`](#ImportedBodyForceDensity.Projection)                                                     | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](#ImportedBodyForceDensity.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedBodyForceDensity.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedBodyForceDensity.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](#ImportedBodyForceDensity.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedBodyForceDensity.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedBodyForceDensity.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`VariableType`](#ImportedBodyForceDensity.VariableType)                                                 | VariableType property.                                                                                  |
| [`Interpolation`](#ImportedBodyForceDensity.Interpolation)                                               | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](#ImportedBodyForceDensity.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](#ImportedBodyForceDensity.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](#ImportedBodyForceDensity.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`Pinball`](#ImportedBodyForceDensity.Pinball)                                                           | Pinball property.                                                                                       |
| [`NumberOfPoints`](#ImportedBodyForceDensity.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedBodyForceDensity.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`Limit`](#ImportedBodyForceDensity.Limit)                                                               | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](#ImportedBodyForceDensity.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedBodyForceDensity.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](#ImportedBodyForceDensity.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](#ImportedBodyForceDensity.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](#ImportedBodyForceDensity.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](#ImportedBodyForceDensity.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](#ImportedBodyForceDensity.Location)                                                         | Gets or sets the Location.                                                                              |
| [`Children`](#ImportedBodyForceDensity.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedBodyForceDensity.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`Figures`](#ImportedBodyForceDensity.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedBodyForceDensity.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#id0)                                                                                 | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](#ImportedBodyForceDensity.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](#ImportedBodyForceDensity.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedBodyForceDensity.InternalObject"></a>

### *property* ImportedBodyForceDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.DataModelObjectCategory"></a>

### *property* ImportedBodyForceDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Weighting"></a>

### *property* ImportedBodyForceDensity.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.MappingControl"></a>

### *property* ImportedBodyForceDensity.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.DisplaySourcePoints"></a>

### *property* ImportedBodyForceDensity.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.DisplaySourcePointIds"></a>

### *property* ImportedBodyForceDensity.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.DisplayInteriorPoints"></a>

### *property* ImportedBodyForceDensity.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.DisplayProjectionPlane"></a>

### *property* ImportedBodyForceDensity.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Algorithm"></a>

### *property* ImportedBodyForceDensity.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.BoundingBoxTolerance"></a>

### *property* ImportedBodyForceDensity.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedBodyForceDensity.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedBodyForceDensity.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedBodyForceDensity.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Mapping"></a>

### *property* ImportedBodyForceDensity.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.LegendMaximum"></a>

### *property* ImportedBodyForceDensity.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.LegendMinimum"></a>

### *property* ImportedBodyForceDensity.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.LegendRange"></a>

### *property* ImportedBodyForceDensity.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.MaxOutsideDistance"></a>

### *property* ImportedBodyForceDensity.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Method"></a>

### *property* ImportedBodyForceDensity.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.OutsideDistanceCheck"></a>

### *property* ImportedBodyForceDensity.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.OutsideOption"></a>

### *property* ImportedBodyForceDensity.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Projection"></a>

### *property* ImportedBodyForceDensity.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.RigidBodyTransformationType"></a>

### *property* ImportedBodyForceDensity.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedBodyForceDensity.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedBodyForceDensity.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.ShellThicknessFactor"></a>

### *property* ImportedBodyForceDensity.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.SourceMaximum"></a>

### *property* ImportedBodyForceDensity.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.SourceMinimum"></a>

### *property* ImportedBodyForceDensity.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.VariableType"></a>

### *property* ImportedBodyForceDensity.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Interpolation"></a>

### *property* ImportedBodyForceDensity.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.UnmappedNodesName"></a>

### *property* ImportedBodyForceDensity.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.MappedNodesName"></a>

### *property* ImportedBodyForceDensity.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.OutsideNodesName"></a>

### *property* ImportedBodyForceDensity.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Pinball"></a>

### *property* ImportedBodyForceDensity.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.NumberOfPoints"></a>

### *property* ImportedBodyForceDensity.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.OrientationRealignment"></a>

### *property* ImportedBodyForceDensity.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Limit"></a>

### *property* ImportedBodyForceDensity.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.KrigingCorrelationFunction"></a>

### *property* ImportedBodyForceDensity.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.KrigingPolynom"></a>

### *property* ImportedBodyForceDensity.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.ExtrapolationTolerancePercent"></a>

### *property* ImportedBodyForceDensity.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.ApplyAs"></a>

### *property* ImportedBodyForceDensity.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Suppressed"></a>

### *property* ImportedBodyForceDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.SharedRefBody"></a>

### *property* ImportedBodyForceDensity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Location"></a>

### *property* ImportedBodyForceDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Children"></a>

### *property* ImportedBodyForceDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Comments"></a>

### *property* ImportedBodyForceDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Figures"></a>

### *property* ImportedBodyForceDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Images"></a>

### *property* ImportedBodyForceDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedBodyForceDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Properties"></a>

### *property* ImportedBodyForceDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.VisibleProperties"></a>

### *property* ImportedBodyForceDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedBodyForceDensity.GetActivateAtLoadStep"></a>

### ImportedBodyForceDensity.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.SetActivateAtLoadStep"></a>

### ImportedBodyForceDensity.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.ExportToTextFile"></a>

### ImportedBodyForceDensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Import"></a>

### ImportedBodyForceDensity.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.ImportLoad"></a>

### ImportedBodyForceDensity.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.ReloadConfiguration"></a>

### ImportedBodyForceDensity.ReloadConfiguration()

Reload the Imported Loadâ€™s setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.AddMappingValidation"></a>

### ImportedBodyForceDensity.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.ClearGeneratedData"></a>

### ImportedBodyForceDensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Delete"></a>

### ImportedBodyForceDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.GetChildren"></a>

### ImportedBodyForceDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedBodyForceDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.AddComment"></a>

### ImportedBodyForceDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.AddFigure"></a>

### ImportedBodyForceDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.AddImage"></a>

### ImportedBodyForceDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Activate"></a>

### ImportedBodyForceDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.CopyTo"></a>

### ImportedBodyForceDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.Duplicate"></a>

### ImportedBodyForceDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.GroupAllSimilarChildren"></a>

### ImportedBodyForceDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.GroupSimilarObjects"></a>

### ImportedBodyForceDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.PropertyByName"></a>

### ImportedBodyForceDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.PropertyByAPIName"></a>

### ImportedBodyForceDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.CreateParameter"></a>

### ImportedBodyForceDensity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.GetParameter"></a>

### ImportedBodyForceDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBodyForceDensity.RemoveParameter"></a>

### ImportedBodyForceDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

