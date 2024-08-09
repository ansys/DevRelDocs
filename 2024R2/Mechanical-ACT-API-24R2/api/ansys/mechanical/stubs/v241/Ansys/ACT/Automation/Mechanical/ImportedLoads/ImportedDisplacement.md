# `ImportedDisplacement`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`ExportToTextFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`Import`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Import)                                   | Import.                                                                           |
| [`ImportLoad`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.ImportLoad)                           | Run the ImportLoad action.                                                        |
| [`AddMappingValidation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.AddMappingValidation)       | Creates a new MappingValidation                                                   |
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`ApplyToInitialMesh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.ApplyToInitialMesh)                                     | Gets or sets the ApplyToInitialMesh.                                                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#id0)                                                                             | Gets the internal object. For advanced usage only.                                                      |
| [`DisplacementType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.DisplacementType)                                         | Gets or sets the DisplacementType.                                                                      |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                                                            |
| [`Weighting`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Weighting)                                                       | Weighting property.                                                                                     |
| [`MappingControl`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.MappingControl)                                             | MappingControl property.                                                                                |
| [`DisplaySourcePoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`DisplaySourcePointIds`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplayInteriorPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`Algorithm`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`BoundingBoxTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`CreateNameSelectionForMappedNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`Mapping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Mapping)                                                           | Mapping property.                                                                                       |
| [`LegendMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.LegendMaximum)                                               | LegendMaximum property.                                                                                 |
| [`LegendMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.LegendMinimum)                                               | LegendMinimum property.                                                                                 |
| [`LegendRange`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.LegendRange)                                                   | LegendRange property.                                                                                   |
| [`MaxOutsideDistance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Method)                                                             | Method property.                                                                                        |
| [`OutsideDistanceCheck`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Projection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Projection)                                                     | Projection property.                                                                                    |
| [`RigidBodyTransformationType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`ShellThicknessFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`VariableType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.VariableType)                                                 | VariableType property.                                                                                  |
| [`Interpolation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Interpolation)                                               | Interpolation property.                                                                                 |
| [`UnmappedNodesName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`MappedNodesName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`OutsideNodesName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`Pinball`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Pinball)                                                           | Pinball property.                                                                                       |
| [`NumberOfPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`Limit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Limit)                                                               | Limit property.                                                                                         |
| [`KrigingCorrelationFunction`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`ExtrapolationTolerancePercent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`ApplyAs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`SharedRefBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Location)                                                         | Gets or sets the Location.                                                                              |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#id0)                                                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedLoads/ImportedDisplacement.md#ImportedDisplacement.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |

<a id="property-detail"></a>

## Property detail

<a id="ImportedDisplacement.ApplyToInitialMesh"></a>

### *property* ImportedDisplacement.ApplyToInitialMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyToInitialMesh.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.InternalObject"></a>

### *property* ImportedDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DisplacementType"></a>

### *property* ImportedDisplacement.DisplacementType *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplacementType](../../../../Mechanical/DataModel/Enums/ExternalLoadDisplacementType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplacementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementType.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DataModelObjectCategory"></a>

### *property* ImportedDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Weighting"></a>

### *property* ImportedDisplacement.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.MappingControl"></a>

### *property* ImportedDisplacement.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DisplaySourcePoints"></a>

### *property* ImportedDisplacement.DisplaySourcePoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DisplaySourcePointIds"></a>

### *property* ImportedDisplacement.DisplaySourcePointIds *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DisplayInteriorPoints"></a>

### *property* ImportedDisplacement.DisplayInteriorPoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.DisplayProjectionPlane"></a>

### *property* ImportedDisplacement.DisplayProjectionPlane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Algorithm"></a>

### *property* ImportedDisplacement.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.BoundingBoxTolerance"></a>

### *property* ImportedDisplacement.BoundingBoxTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedDisplacement.CreateNameSelectionForMappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedDisplacement.CreateNameSelectionForOutsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedDisplacement.CreateNameSelectionForUnmappedNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Mapping"></a>

### *property* ImportedDisplacement.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.LegendMaximum"></a>

### *property* ImportedDisplacement.LegendMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.LegendMinimum"></a>

### *property* ImportedDisplacement.LegendMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

LegendMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.LegendRange"></a>

### *property* ImportedDisplacement.LegendRange *: [Ansys.Mechanical.DataModel.Enums.LegendRangeType](../../../../Mechanical/DataModel/Enums/LegendRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LegendRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendRange property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.MaxOutsideDistance"></a>

### *property* ImportedDisplacement.MaxOutsideDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Method"></a>

### *property* ImportedDisplacement.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OutsideDistanceCheck"></a>

### *property* ImportedDisplacement.OutsideDistanceCheck *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OutsideOption"></a>

### *property* ImportedDisplacement.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Projection"></a>

### *property* ImportedDisplacement.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.RigidBodyTransformationType"></a>

### *property* ImportedDisplacement.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedDisplacement.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedDisplacement.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ShellThicknessFactor"></a>

### *property* ImportedDisplacement.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SourceMaximum"></a>

### *property* ImportedDisplacement.SourceMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SourceMinimum"></a>

### *property* ImportedDisplacement.SourceMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.VariableType"></a>

### *property* ImportedDisplacement.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Interpolation"></a>

### *property* ImportedDisplacement.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.UnmappedNodesName"></a>

### *property* ImportedDisplacement.UnmappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.MappedNodesName"></a>

### *property* ImportedDisplacement.MappedNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OutsideNodesName"></a>

### *property* ImportedDisplacement.OutsideNodesName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Pinball"></a>

### *property* ImportedDisplacement.Pinball *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.NumberOfPoints"></a>

### *property* ImportedDisplacement.NumberOfPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.OrientationRealignment"></a>

### *property* ImportedDisplacement.OrientationRealignment *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Limit"></a>

### *property* ImportedDisplacement.Limit *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.KrigingCorrelationFunction"></a>

### *property* ImportedDisplacement.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.KrigingPolynom"></a>

### *property* ImportedDisplacement.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ExtrapolationTolerancePercent"></a>

### *property* ImportedDisplacement.ExtrapolationTolerancePercent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ApplyAs"></a>

### *property* ImportedDisplacement.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Suppressed"></a>

### *property* ImportedDisplacement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SharedRefBody"></a>

### *property* ImportedDisplacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Location"></a>

### *property* ImportedDisplacement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Children"></a>

### *property* ImportedDisplacement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Comments"></a>

### *property* ImportedDisplacement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Figures"></a>

### *property* ImportedDisplacement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Images"></a>

### *property* ImportedDisplacement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedDisplacement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Properties"></a>

### *property* ImportedDisplacement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.VisibleProperties"></a>

### *property* ImportedDisplacement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedDisplacement.GetActivateAtLoadStep"></a>

### ImportedDisplacement.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.SetActivateAtLoadStep"></a>

### ImportedDisplacement.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ExportToTextFile"></a>

### ImportedDisplacement.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Import"></a>

### ImportedDisplacement.Import()

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ImportLoad"></a>

### ImportedDisplacement.ImportLoad()

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AddMappingValidation"></a>

### ImportedDisplacement.AddMappingValidation()

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.ClearGeneratedData"></a>

### ImportedDisplacement.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Delete"></a>

### ImportedDisplacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetChildren"></a>

### ImportedDisplacement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AddComment"></a>

### ImportedDisplacement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AddFigure"></a>

### ImportedDisplacement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.AddImage"></a>

### ImportedDisplacement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Activate"></a>

### ImportedDisplacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CopyTo"></a>

### ImportedDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.Duplicate"></a>

### ImportedDisplacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GroupAllSimilarChildren"></a>

### ImportedDisplacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GroupSimilarObjects"></a>

### ImportedDisplacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.PropertyByName"></a>

### ImportedDisplacement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.PropertyByAPIName"></a>

### ImportedDisplacement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.CreateParameter"></a>

### ImportedDisplacement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.GetParameter"></a>

### ImportedDisplacement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedDisplacement.RemoveParameter"></a>

### ImportedDisplacement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

