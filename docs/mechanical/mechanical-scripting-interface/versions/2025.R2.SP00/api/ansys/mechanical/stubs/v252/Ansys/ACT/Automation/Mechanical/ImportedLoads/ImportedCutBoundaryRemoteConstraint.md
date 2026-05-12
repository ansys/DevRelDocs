# `ImportedCutBoundaryRemoteConstraint`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedCutBoundaryRemoteConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedCutBoundaryRemoteConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedCutBoundaryRemoteConstraint.Activate)                               | Activate the current object.                                                                   |
| [`AddComment`](#ImportedCutBoundaryRemoteConstraint.AddComment)                           | Creates a new child Comment.                                                                   |
| [`AddFigure`](#ImportedCutBoundaryRemoteConstraint.AddFigure)                             | Creates a new child Figure.                                                                    |
| [`AddImage`](#ImportedCutBoundaryRemoteConstraint.AddImage)                               | Creates a new child Image.                                                                     |
| [`AddMappingValidation`](#ImportedCutBoundaryRemoteConstraint.AddMappingValidation)       | Creates a new MappingValidation                                                                |
| [`ClearGeneratedData`](#ImportedCutBoundaryRemoteConstraint.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                             |
| [`CopyTo`](#ImportedCutBoundaryRemoteConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                                     |
| [`CreateParameter`](#ImportedCutBoundaryRemoteConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                                        |
| [`Delete`](#ImportedCutBoundaryRemoteConstraint.Delete)                                   | Run the Delete action.                                                                         |
| [`Duplicate`](#ImportedCutBoundaryRemoteConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                                 |
| [`ExportToTextFile`](#ImportedCutBoundaryRemoteConstraint.ExportToTextFile)               | Run the ExportToTextFile action.                                                               |
| [`GetActivateAtLoadStep`](#ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep)     | Gets whether the imported cut boundary remote constraint is active at the specified load step. |
| [`GetChildren`](#ImportedCutBoundaryRemoteConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                                   |
| [`GetParameter`](#ImportedCutBoundaryRemoteConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                                        |
| [`GroupAllSimilarChildren`](#ImportedCutBoundaryRemoteConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#ImportedCutBoundaryRemoteConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                            |
| [`Import`](#ImportedCutBoundaryRemoteConstraint.Import)                                   | Import.                                                                                        |
| [`ImportLoad`](#ImportedCutBoundaryRemoteConstraint.ImportLoad)                           | Run the ImportLoad action.                                                                     |
| [`PropertyByAPIName`](#ImportedCutBoundaryRemoteConstraint.PropertyByAPIName)             | Get a property by its API name.                                                                |
| [`PropertyByName`](#ImportedCutBoundaryRemoteConstraint.PropertyByName)                   | Get a property by its unique name.                                                             |
| [`ReloadConfiguration`](#ImportedCutBoundaryRemoteConstraint.ReloadConfiguration)         | Reload the Imported Load’s setup from its associated configuration file (if available).        |
| [`RemoveParameter`](#ImportedCutBoundaryRemoteConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.              |
| [`SetActivateAtLoadStep`](#ImportedCutBoundaryRemoteConstraint.SetActivateAtLoadStep)     | Sets whether the imported cut boundary remote constraint is active at the specified load step. |
| [`SyncAnalysisFrequencies`](#ImportedCutBoundaryRemoteConstraint.SyncAnalysisFrequencies) | Synchronizes the analysis settings’ RPMs and frequencies based on the selected imported load.  |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedCutBoundaryRemoteConstraint.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedCutBoundaryRemoteConstraint.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`BoundingBoxTolerance`](#ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedCutBoundaryRemoteConstraint.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedCutBoundaryRemoteConstraint.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedCutBoundaryRemoteConstraint.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedCutBoundaryRemoteConstraint.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedCutBoundaryRemoteConstraint.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedCutBoundaryRemoteConstraint.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedCutBoundaryRemoteConstraint.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedCutBoundaryRemoteConstraint.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`Limit`](#ImportedCutBoundaryRemoteConstraint.Limit)                                                               | Limit property.                                                                                         |
| [`Location`](#ImportedCutBoundaryRemoteConstraint.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedNodesName`](#ImportedCutBoundaryRemoteConstraint.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedCutBoundaryRemoteConstraint.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedCutBoundaryRemoteConstraint.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedCutBoundaryRemoteConstraint.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedCutBoundaryRemoteConstraint.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedCutBoundaryRemoteConstraint.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedCutBoundaryRemoteConstraint.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedCutBoundaryRemoteConstraint.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedCutBoundaryRemoteConstraint.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedCutBoundaryRemoteConstraint.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedCutBoundaryRemoteConstraint.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedCutBoundaryRemoteConstraint.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedCutBoundaryRemoteConstraint.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedCutBoundaryRemoteConstraint.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedCutBoundaryRemoteConstraint.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedCutBoundaryRemoteConstraint.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedCutBoundaryRemoteConstraint.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedCutBoundaryRemoteConstraint.VariableType)                                                 | VariableType property.                                                                                  |
| [`VisibleProperties`](#ImportedCutBoundaryRemoteConstraint.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedCutBoundaryRemoteConstraint.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCutBoundaryRemoteConstraint.Algorithm"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ApplyAs"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance"></a>

### *property* ImportedCutBoundaryRemoteConstraint.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Children"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Comments"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedCutBoundaryRemoteConstraint.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DataModelObjectCategory"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplayInteriorPoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplayProjectionPlane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplaySourcePointIds *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints"></a>

### *property* ImportedCutBoundaryRemoteConstraint.DisplaySourcePoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Figures"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Images"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.InternalObject"></a>

### *property* ImportedCutBoundaryRemoteConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Interpolation"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction"></a>

### *property* ImportedCutBoundaryRemoteConstraint.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.KrigingPolynom"></a>

### *property* ImportedCutBoundaryRemoteConstraint.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Limit"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Limit *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Location"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.MappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteConstraint.MappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Mapping"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.MappingControl"></a>

### *property* ImportedCutBoundaryRemoteConstraint.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance"></a>

### *property* ImportedCutBoundaryRemoteConstraint.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Method"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.NumberOfPoints"></a>

### *property* ImportedCutBoundaryRemoteConstraint.NumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OrientationRealignment"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OrientationRealignment *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OutsideDistanceCheck *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OutsideNodesName"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OutsideNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.OutsideOption"></a>

### *property* ImportedCutBoundaryRemoteConstraint.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Pinball"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Projection"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Properties"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RigidBodyTransformationType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteConstraint.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedCutBoundaryRemoteConstraint.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SharedRefBody"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor"></a>

### *property* ImportedCutBoundaryRemoteConstraint.ShellThicknessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SourceMaximum"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SourceMinimum"></a>

### *property* ImportedCutBoundaryRemoteConstraint.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Suppressed"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.UnmappedNodesName"></a>

### *property* ImportedCutBoundaryRemoteConstraint.UnmappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.VariableType"></a>

### *property* ImportedCutBoundaryRemoteConstraint.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.VisibleProperties"></a>

### *property* ImportedCutBoundaryRemoteConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Weighting"></a>

### *property* ImportedCutBoundaryRemoteConstraint.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCutBoundaryRemoteConstraint.Activate"></a>

### ImportedCutBoundaryRemoteConstraint.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddComment"></a>

### ImportedCutBoundaryRemoteConstraint.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddFigure"></a>

### ImportedCutBoundaryRemoteConstraint.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddImage"></a>

### ImportedCutBoundaryRemoteConstraint.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.AddMappingValidation"></a>

### ImportedCutBoundaryRemoteConstraint.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ClearGeneratedData"></a>

### ImportedCutBoundaryRemoteConstraint.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CopyTo"></a>

### ImportedCutBoundaryRemoteConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.CreateParameter"></a>

### ImportedCutBoundaryRemoteConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Delete"></a>

### ImportedCutBoundaryRemoteConstraint.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Duplicate"></a>

### ImportedCutBoundaryRemoteConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ExportToTextFile"></a>

### ImportedCutBoundaryRemoteConstraint.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteConstraint.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the imported cut boundary remote constraint is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetChildren"></a>

### ImportedCutBoundaryRemoteConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GetParameter"></a>

### ImportedCutBoundaryRemoteConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GroupAllSimilarChildren"></a>

### ImportedCutBoundaryRemoteConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.GroupSimilarObjects"></a>

### ImportedCutBoundaryRemoteConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.Import"></a>

### ImportedCutBoundaryRemoteConstraint.Import() → [None](https://docs.python.org/3/library/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ImportLoad"></a>

### ImportedCutBoundaryRemoteConstraint.ImportLoad() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.PropertyByAPIName"></a>

### ImportedCutBoundaryRemoteConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.PropertyByName"></a>

### ImportedCutBoundaryRemoteConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.ReloadConfiguration"></a>

### ImportedCutBoundaryRemoteConstraint.ReloadConfiguration() → [None](https://docs.python.org/3/library/constants.html#None)

Reload the Imported Load’s setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.RemoveParameter"></a>

### ImportedCutBoundaryRemoteConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SetActivateAtLoadStep"></a>

### ImportedCutBoundaryRemoteConstraint.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the imported cut boundary remote constraint is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCutBoundaryRemoteConstraint.SyncAnalysisFrequencies"></a>

### ImportedCutBoundaryRemoteConstraint.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/library/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

