# `ImportedYarnAngle`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedYarnAngle"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedYarnAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedYarnAngle.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedYarnAngle.Activate)                               | Activate the current object.                                                                  |
| [`AddComment`](#ImportedYarnAngle.AddComment)                           | Creates a new child Comment.                                                                  |
| [`AddFigure`](#ImportedYarnAngle.AddFigure)                             | Creates a new child Figure.                                                                   |
| [`AddImage`](#ImportedYarnAngle.AddImage)                               | Creates a new child Image.                                                                    |
| [`AddMappingValidation`](#ImportedYarnAngle.AddMappingValidation)       | Creates a new MappingValidation                                                               |
| [`ClearGeneratedData`](#ImportedYarnAngle.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                            |
| [`CopyTo`](#ImportedYarnAngle.CopyTo)                                   | Copies all visible properties from this object to another.                                    |
| [`CreateParameter`](#ImportedYarnAngle.CreateParameter)                 | Creates a new parameter for a Property.                                                       |
| [`Delete`](#ImportedYarnAngle.Delete)                                   | Run the Delete action.                                                                        |
| [`Duplicate`](#ImportedYarnAngle.Duplicate)                             | Creates a copy of the current DataModelObject.                                                |
| [`ExportToTextFile`](#ImportedYarnAngle.ExportToTextFile)               | Run the ExportToTextFile action.                                                              |
| [`GetActivateAtLoadStep`](#ImportedYarnAngle.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                                 |
| [`GetChildren`](#ImportedYarnAngle.GetChildren)                         | Gets the list of children, filtered by type.                                                  |
| [`GetParameter`](#ImportedYarnAngle.GetParameter)                       | Gets the parameter corresponding to the given property.                                       |
| [`GroupAllSimilarChildren`](#ImportedYarnAngle.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                       |
| [`GroupSimilarObjects`](#ImportedYarnAngle.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                           |
| [`Import`](#ImportedYarnAngle.Import)                                   | Import.                                                                                       |
| [`ImportLoad`](#ImportedYarnAngle.ImportLoad)                           | Run the ImportLoad action.                                                                    |
| [`PropertyByAPIName`](#ImportedYarnAngle.PropertyByAPIName)             | Get a property by its API name.                                                               |
| [`PropertyByName`](#ImportedYarnAngle.PropertyByName)                   | Get a property by its unique name.                                                            |
| [`ReloadConfiguration`](#ImportedYarnAngle.ReloadConfiguration)         | Reload the Imported Load’s setup from its associated configuration file (if available).       |
| [`RemoveParameter`](#ImportedYarnAngle.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.             |
| [`SetActivateAtLoadStep`](#ImportedYarnAngle.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                                 |
| [`SyncAnalysisFrequencies`](#ImportedYarnAngle.SyncAnalysisFrequencies) | Synchronizes the analysis settings’ RPMs and frequencies based on the selected imported load. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedYarnAngle.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedYarnAngle.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`BoundingBoxTolerance`](#ImportedYarnAngle.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedYarnAngle.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedYarnAngle.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedYarnAngle.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedYarnAngle.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedYarnAngle.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedYarnAngle.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedYarnAngle.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedYarnAngle.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedYarnAngle.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedYarnAngle.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedYarnAngle.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedYarnAngle.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedYarnAngle.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedYarnAngle.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedYarnAngle.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedYarnAngle.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedYarnAngle.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`Limit`](#ImportedYarnAngle.Limit)                                                               | Limit property.                                                                                         |
| [`Location`](#ImportedYarnAngle.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedNodesName`](#ImportedYarnAngle.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedYarnAngle.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedYarnAngle.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedYarnAngle.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedYarnAngle.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedYarnAngle.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedYarnAngle.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedYarnAngle.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedYarnAngle.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedYarnAngle.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedYarnAngle.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedYarnAngle.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedYarnAngle.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedYarnAngle.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedYarnAngle.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedYarnAngle.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedYarnAngle.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedYarnAngle.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedYarnAngle.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedYarnAngle.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedYarnAngle.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedYarnAngle.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedYarnAngle.VariableType)                                                 | VariableType property.                                                                                  |
| [`VisibleProperties`](#ImportedYarnAngle.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedYarnAngle.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedYarnAngle.Algorithm"></a>

### *property* ImportedYarnAngle.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ApplyAs"></a>

### *property* ImportedYarnAngle.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.BoundingBoxTolerance"></a>

### *property* ImportedYarnAngle.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Children"></a>

### *property* ImportedYarnAngle.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Comments"></a>

### *property* ImportedYarnAngle.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedYarnAngle.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedYarnAngle.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedYarnAngle.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.DataModelObjectCategory"></a>

### *property* ImportedYarnAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.DisplayInteriorPoints"></a>

### *property* ImportedYarnAngle.DisplayInteriorPoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.DisplayProjectionPlane"></a>

### *property* ImportedYarnAngle.DisplayProjectionPlane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.DisplaySourcePointIds"></a>

### *property* ImportedYarnAngle.DisplaySourcePointIds *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.DisplaySourcePoints"></a>

### *property* ImportedYarnAngle.DisplaySourcePoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ExtrapolationTolerancePercent"></a>

### *property* ImportedYarnAngle.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Figures"></a>

### *property* ImportedYarnAngle.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Images"></a>

### *property* ImportedYarnAngle.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.InternalObject"></a>

### *property* ImportedYarnAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Interpolation"></a>

### *property* ImportedYarnAngle.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.KrigingCorrelationFunction"></a>

### *property* ImportedYarnAngle.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.KrigingPolynom"></a>

### *property* ImportedYarnAngle.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Limit"></a>

### *property* ImportedYarnAngle.Limit *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Location"></a>

### *property* ImportedYarnAngle.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.MappedNodesName"></a>

### *property* ImportedYarnAngle.MappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Mapping"></a>

### *property* ImportedYarnAngle.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.MappingControl"></a>

### *property* ImportedYarnAngle.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.MaxOutsideDistance"></a>

### *property* ImportedYarnAngle.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Method"></a>

### *property* ImportedYarnAngle.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.NumberOfPoints"></a>

### *property* ImportedYarnAngle.NumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.OrientationRealignment"></a>

### *property* ImportedYarnAngle.OrientationRealignment *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.OutsideDistanceCheck"></a>

### *property* ImportedYarnAngle.OutsideDistanceCheck *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.OutsideNodesName"></a>

### *property* ImportedYarnAngle.OutsideNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.OutsideOption"></a>

### *property* ImportedYarnAngle.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Pinball"></a>

### *property* ImportedYarnAngle.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Projection"></a>

### *property* ImportedYarnAngle.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Properties"></a>

### *property* ImportedYarnAngle.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.RigidBodyTransformationType"></a>

### *property* ImportedYarnAngle.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedYarnAngle.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedYarnAngle.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.SharedRefBody"></a>

### *property* ImportedYarnAngle.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ShellThicknessFactor"></a>

### *property* ImportedYarnAngle.ShellThicknessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.SourceMaximum"></a>

### *property* ImportedYarnAngle.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.SourceMinimum"></a>

### *property* ImportedYarnAngle.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Suppressed"></a>

### *property* ImportedYarnAngle.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.UnmappedNodesName"></a>

### *property* ImportedYarnAngle.UnmappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.VariableType"></a>

### *property* ImportedYarnAngle.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.VisibleProperties"></a>

### *property* ImportedYarnAngle.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Weighting"></a>

### *property* ImportedYarnAngle.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedYarnAngle.Activate"></a>

### ImportedYarnAngle.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.AddComment"></a>

### ImportedYarnAngle.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.AddFigure"></a>

### ImportedYarnAngle.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.AddImage"></a>

### ImportedYarnAngle.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.AddMappingValidation"></a>

### ImportedYarnAngle.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ClearGeneratedData"></a>

### ImportedYarnAngle.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.CopyTo"></a>

### ImportedYarnAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.CreateParameter"></a>

### ImportedYarnAngle.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Delete"></a>

### ImportedYarnAngle.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Duplicate"></a>

### ImportedYarnAngle.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ExportToTextFile"></a>

### ImportedYarnAngle.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.GetActivateAtLoadStep"></a>

### ImportedYarnAngle.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.GetChildren"></a>

### ImportedYarnAngle.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.GetParameter"></a>

### ImportedYarnAngle.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.GroupAllSimilarChildren"></a>

### ImportedYarnAngle.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.GroupSimilarObjects"></a>

### ImportedYarnAngle.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.Import"></a>

### ImportedYarnAngle.Import() → [None](https://docs.python.org/3/library/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ImportLoad"></a>

### ImportedYarnAngle.ImportLoad() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.PropertyByAPIName"></a>

### ImportedYarnAngle.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.PropertyByName"></a>

### ImportedYarnAngle.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.ReloadConfiguration"></a>

### ImportedYarnAngle.ReloadConfiguration() → [None](https://docs.python.org/3/library/constants.html#None)

Reload the Imported Load’s setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.RemoveParameter"></a>

### ImportedYarnAngle.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.SetActivateAtLoadStep"></a>

### ImportedYarnAngle.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedYarnAngle.SyncAnalysisFrequencies"></a>

### ImportedYarnAngle.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/library/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

