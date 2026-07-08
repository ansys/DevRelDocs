# `ImportedAeroacousticSource`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedAeroacousticSource"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedAeroacousticSource

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedAeroacousticSource.Activate)                               | Activate the current object.                                                                  |
| [`AddComment`](#ImportedAeroacousticSource.AddComment)                           | Creates a new child Comment.                                                                  |
| [`AddFigure`](#ImportedAeroacousticSource.AddFigure)                             | Creates a new child Figure.                                                                   |
| [`AddImage`](#ImportedAeroacousticSource.AddImage)                               | Creates a new child Image.                                                                    |
| [`AddMappingValidation`](#ImportedAeroacousticSource.AddMappingValidation)       | Creates a new MappingValidation                                                               |
| [`ClearGeneratedData`](#ImportedAeroacousticSource.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                            |
| [`CopyTo`](#ImportedAeroacousticSource.CopyTo)                                   | Copies all visible properties from this object to another.                                    |
| [`CreateParameter`](#ImportedAeroacousticSource.CreateParameter)                 | Creates a new parameter for a Property.                                                       |
| [`Delete`](#ImportedAeroacousticSource.Delete)                                   | Run the Delete action.                                                                        |
| [`Duplicate`](#ImportedAeroacousticSource.Duplicate)                             | Creates a copy of the current DataModelObject.                                                |
| [`ExportToTextFile`](#ImportedAeroacousticSource.ExportToTextFile)               | Run the ExportToTextFile action.                                                              |
| [`GetActivateAtLoadStep`](#ImportedAeroacousticSource.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                                 |
| [`GetChildren`](#ImportedAeroacousticSource.GetChildren)                         | Gets the list of children, filtered by type.                                                  |
| [`GetParameter`](#ImportedAeroacousticSource.GetParameter)                       | Gets the parameter corresponding to the given property.                                       |
| [`GroupAllSimilarChildren`](#ImportedAeroacousticSource.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                       |
| [`GroupSimilarObjects`](#ImportedAeroacousticSource.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                           |
| [`Import`](#ImportedAeroacousticSource.Import)                                   | Import.                                                                                       |
| [`ImportLoad`](#ImportedAeroacousticSource.ImportLoad)                           | Run the ImportLoad action.                                                                    |
| [`PropertyByAPIName`](#ImportedAeroacousticSource.PropertyByAPIName)             | Get a property by its API name.                                                               |
| [`PropertyByName`](#ImportedAeroacousticSource.PropertyByName)                   | Get a property by its unique name.                                                            |
| [`ReloadConfiguration`](#ImportedAeroacousticSource.ReloadConfiguration)         | Reload the Imported Load’s setup from its associated configuration file (if available).       |
| [`RemoveParameter`](#ImportedAeroacousticSource.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.             |
| [`SetActivateAtLoadStep`](#ImportedAeroacousticSource.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                                 |
| [`SyncAnalysisFrequencies`](#ImportedAeroacousticSource.SyncAnalysisFrequencies) | Synchronizes the analysis settings’ RPMs and frequencies based on the selected imported load. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Algorithm`](#ImportedAeroacousticSource.Algorithm)                                                       | Algorithm property.                                                                                     |
| [`ApplyAs`](#ImportedAeroacousticSource.ApplyAs)                                                           | This controls how the imported load is applied, either as a boundary condition or an initial condition. |
| [`BoundingBoxTolerance`](#ImportedAeroacousticSource.BoundingBoxTolerance)                                 | BoundingBoxTolerance property.                                                                          |
| [`Children`](#ImportedAeroacousticSource.Children)                                                         | Gets the list of children.                                                                              |
| [`Comments`](#ImportedAeroacousticSource.Comments)                                                         | Gets the list of associated comments.                                                                   |
| [`CreateNameSelectionForMappedNodes`](#ImportedAeroacousticSource.CreateNameSelectionForMappedNodes)       | CreateNameSelectionForMappedNodes property.                                                             |
| [`CreateNameSelectionForOutsideNodes`](#ImportedAeroacousticSource.CreateNameSelectionForOutsideNodes)     | CreateNameSelectionForOutsideNodes property.                                                            |
| [`CreateNameSelectionForUnmappedNodes`](#ImportedAeroacousticSource.CreateNameSelectionForUnmappedNodes)   | CreateNameSelectionForUnmappedNodes property.                                                           |
| [`DataModelObjectCategory`](#ImportedAeroacousticSource.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                            |
| [`DisplayInteriorPoints`](#ImportedAeroacousticSource.DisplayInteriorPoints)                               | DisplayInteriorPoints property.                                                                         |
| [`DisplayProjectionPlane`](#ImportedAeroacousticSource.DisplayProjectionPlane)                             | DisplayProjectionPlane property.                                                                        |
| [`DisplaySourcePointIds`](#ImportedAeroacousticSource.DisplaySourcePointIds)                               | DisplaySourcePointIds property.                                                                         |
| [`DisplaySourcePoints`](#ImportedAeroacousticSource.DisplaySourcePoints)                                   | DisplaySourcePoints property.                                                                           |
| [`ExtrapolationTolerancePercent`](#ImportedAeroacousticSource.ExtrapolationTolerancePercent)               | ExtrapolationTolerancePercent property.                                                                 |
| [`Figures`](#ImportedAeroacousticSource.Figures)                                                           | Gets the list of associated figures.                                                                    |
| [`Images`](#ImportedAeroacousticSource.Images)                                                             | Gets the list of associated images.                                                                     |
| [`InternalObject`](#ImportedAeroacousticSource.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                      |
| [`Interpolation`](#ImportedAeroacousticSource.Interpolation)                                               | Interpolation property.                                                                                 |
| [`KrigingCorrelationFunction`](#ImportedAeroacousticSource.KrigingCorrelationFunction)                     | KrigingCorrelationFunction property.                                                                    |
| [`KrigingPolynom`](#ImportedAeroacousticSource.KrigingPolynom)                                             | KrigingPolynom property.                                                                                |
| [`Limit`](#ImportedAeroacousticSource.Limit)                                                               | Limit property.                                                                                         |
| [`Location`](#ImportedAeroacousticSource.Location)                                                         | Gets or sets the Location.                                                                              |
| [`MappedNodesName`](#ImportedAeroacousticSource.MappedNodesName)                                           | MappedNodesName property.                                                                               |
| [`Mapping`](#ImportedAeroacousticSource.Mapping)                                                           | Mapping property.                                                                                       |
| [`MappingControl`](#ImportedAeroacousticSource.MappingControl)                                             | MappingControl property.                                                                                |
| [`MaxOutsideDistance`](#ImportedAeroacousticSource.MaxOutsideDistance)                                     | MaxOutsideDistance property.                                                                            |
| [`Method`](#ImportedAeroacousticSource.Method)                                                             | Method property.                                                                                        |
| [`NumberOfPoints`](#ImportedAeroacousticSource.NumberOfPoints)                                             | NumberOfPoints property.                                                                                |
| [`OrientationRealignment`](#ImportedAeroacousticSource.OrientationRealignment)                             | OrientationRealignment property.                                                                        |
| [`OutsideDistanceCheck`](#ImportedAeroacousticSource.OutsideDistanceCheck)                                 | OutsideDistanceCheck property.                                                                          |
| [`OutsideNodesName`](#ImportedAeroacousticSource.OutsideNodesName)                                         | OutsideNodesName property.                                                                              |
| [`OutsideOption`](#ImportedAeroacousticSource.OutsideOption)                                               | OutsideOption property.                                                                                 |
| [`Pinball`](#ImportedAeroacousticSource.Pinball)                                                           | Pinball property.                                                                                       |
| [`Projection`](#ImportedAeroacousticSource.Projection)                                                     | Projection property.                                                                                    |
| [`Properties`](#ImportedAeroacousticSource.Properties)                                                     | Gets the list of properties for this object.                                                            |
| [`RigidBodyTransformationType`](#ImportedAeroacousticSource.RigidBodyTransformationType)                   | RigidBodyTransformationType property.                                                                   |
| [`RigidTransformSourceCoordinateSystem`](#ImportedAeroacousticSource.RigidTransformSourceCoordinateSystem) | RigidTransformSourceCoordinateSystem property.                                                          |
| [`RigidTransformTargetCoordinateSystem`](#ImportedAeroacousticSource.RigidTransformTargetCoordinateSystem) | RigidTransformTargetCoordinateSystem property.                                                          |
| [`SharedRefBody`](#ImportedAeroacousticSource.SharedRefBody)                                               | Gets or sets the SharedRefBody.                                                                         |
| [`ShellThicknessFactor`](#ImportedAeroacousticSource.ShellThicknessFactor)                                 | ShellThicknessFactor property.                                                                          |
| [`SourceMaximum`](#ImportedAeroacousticSource.SourceMaximum)                                               | SourceMaximum property.                                                                                 |
| [`SourceMinimum`](#ImportedAeroacousticSource.SourceMinimum)                                               | SourceMinimum property.                                                                                 |
| [`Suppressed`](#ImportedAeroacousticSource.Suppressed)                                                     | Gets or sets the Suppressed.                                                                            |
| [`UnmappedNodesName`](#ImportedAeroacousticSource.UnmappedNodesName)                                       | UnmappedNodesName property.                                                                             |
| [`VariableType`](#ImportedAeroacousticSource.VariableType)                                                 | VariableType property.                                                                                  |
| [`VisibleProperties`](#ImportedAeroacousticSource.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                           |
| [`Weighting`](#ImportedAeroacousticSource.Weighting)                                                       | Weighting property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="ImportedAeroacousticSource.Algorithm"></a>

### *property* ImportedAeroacousticSource.Algorithm *: [Ansys.Mechanical.DataModel.Enums.MappingAlgorithm](../../../../Mechanical/DataModel/Enums/MappingAlgorithm.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingAlgorithm) | [None](https://docs.python.org/3/library/constants.html#None)*

Algorithm property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.ApplyAs"></a>

### *property* ImportedAeroacousticSource.ApplyAs *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType](../../../../Mechanical/DataModel/Enums/ExternalLoadApplicationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ExternalLoadApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

This controls how the imported load is applied, either as a boundary condition or an initial condition.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.BoundingBoxTolerance"></a>

### *property* ImportedAeroacousticSource.BoundingBoxTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

BoundingBoxTolerance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Children"></a>

### *property* ImportedAeroacousticSource.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Comments"></a>

### *property* ImportedAeroacousticSource.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.CreateNameSelectionForMappedNodes"></a>

### *property* ImportedAeroacousticSource.CreateNameSelectionForMappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForMappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.CreateNameSelectionForOutsideNodes"></a>

### *property* ImportedAeroacousticSource.CreateNameSelectionForOutsideNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForOutsideNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.CreateNameSelectionForUnmappedNodes"></a>

### *property* ImportedAeroacousticSource.CreateNameSelectionForUnmappedNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

CreateNameSelectionForUnmappedNodes property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.DataModelObjectCategory"></a>

### *property* ImportedAeroacousticSource.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.DisplayInteriorPoints"></a>

### *property* ImportedAeroacousticSource.DisplayInteriorPoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayInteriorPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.DisplayProjectionPlane"></a>

### *property* ImportedAeroacousticSource.DisplayProjectionPlane *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplayProjectionPlane property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.DisplaySourcePointIds"></a>

### *property* ImportedAeroacousticSource.DisplaySourcePointIds *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePointIds property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.DisplaySourcePoints"></a>

### *property* ImportedAeroacousticSource.DisplaySourcePoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

DisplaySourcePoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.ExtrapolationTolerancePercent"></a>

### *property* ImportedAeroacousticSource.ExtrapolationTolerancePercent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ExtrapolationTolerancePercent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Figures"></a>

### *property* ImportedAeroacousticSource.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Images"></a>

### *property* ImportedAeroacousticSource.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.InternalObject"></a>

### *property* ImportedAeroacousticSource.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Interpolation"></a>

### *property* ImportedAeroacousticSource.Interpolation *: [Ansys.Mechanical.DataModel.Enums.InterpolationType](../../../../Mechanical/DataModel/Enums/InterpolationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.InterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Interpolation property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.KrigingCorrelationFunction"></a>

### *property* ImportedAeroacousticSource.KrigingCorrelationFunction *: [Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType](../../../../Mechanical/DataModel/Enums/KrigingCorrFuncType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingCorrFuncType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingCorrelationFunction property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.KrigingPolynom"></a>

### *property* ImportedAeroacousticSource.KrigingPolynom *: [Ansys.Mechanical.DataModel.Enums.KrigingPolynomType](../../../../Mechanical/DataModel/Enums/KrigingPolynomType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.KrigingPolynomType) | [None](https://docs.python.org/3/library/constants.html#None)*

KrigingPolynom property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Limit"></a>

### *property* ImportedAeroacousticSource.Limit *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Limit property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Location"></a>

### *property* ImportedAeroacousticSource.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.MappedNodesName"></a>

### *property* ImportedAeroacousticSource.MappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Mapping"></a>

### *property* ImportedAeroacousticSource.Mapping *: [Ansys.Mechanical.DataModel.Enums.MappingInterpolationType](../../../../Mechanical/DataModel/Enums/MappingInterpolationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingInterpolationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Mapping property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.MappingControl"></a>

### *property* ImportedAeroacousticSource.MappingControl *: [Ansys.Mechanical.DataModel.Enums.MappingControlType](../../../../Mechanical/DataModel/Enums/MappingControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

MappingControl property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.MaxOutsideDistance"></a>

### *property* ImportedAeroacousticSource.MaxOutsideDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

MaxOutsideDistance property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Method"></a>

### *property* ImportedAeroacousticSource.Method *: [Ansys.Mechanical.DataModel.Enums.MappingMethod](../../../../Mechanical/DataModel/Enums/MappingMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Method property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.NumberOfPoints"></a>

### *property* ImportedAeroacousticSource.NumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfPoints property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.OrientationRealignment"></a>

### *property* ImportedAeroacousticSource.OrientationRealignment *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OrientationRealignment property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.OutsideDistanceCheck"></a>

### *property* ImportedAeroacousticSource.OutsideDistanceCheck *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideDistanceCheck property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.OutsideNodesName"></a>

### *property* ImportedAeroacousticSource.OutsideNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.OutsideOption"></a>

### *property* ImportedAeroacousticSource.OutsideOption *: [Ansys.Mechanical.DataModel.Enums.MappingOutsideOption](../../../../Mechanical/DataModel/Enums/MappingOutsideOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingOutsideOption) | [None](https://docs.python.org/3/library/constants.html#None)*

OutsideOption property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Pinball"></a>

### *property* ImportedAeroacousticSource.Pinball *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Pinball property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Projection"></a>

### *property* ImportedAeroacousticSource.Projection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Projection property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Properties"></a>

### *property* ImportedAeroacousticSource.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.RigidBodyTransformationType"></a>

### *property* ImportedAeroacousticSource.RigidBodyTransformationType *: [Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType](../../../../Mechanical/DataModel/Enums/RigidBodyTransformationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RigidBodyTransformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidBodyTransformationType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.RigidTransformSourceCoordinateSystem"></a>

### *property* ImportedAeroacousticSource.RigidTransformSourceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformSourceCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.RigidTransformTargetCoordinateSystem"></a>

### *property* ImportedAeroacousticSource.RigidTransformTargetCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

RigidTransformTargetCoordinateSystem property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.SharedRefBody"></a>

### *property* ImportedAeroacousticSource.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.ShellThicknessFactor"></a>

### *property* ImportedAeroacousticSource.ShellThicknessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ShellThicknessFactor property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.SourceMaximum"></a>

### *property* ImportedAeroacousticSource.SourceMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMaximum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.SourceMinimum"></a>

### *property* ImportedAeroacousticSource.SourceMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

SourceMinimum property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Suppressed"></a>

### *property* ImportedAeroacousticSource.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.UnmappedNodesName"></a>

### *property* ImportedAeroacousticSource.UnmappedNodesName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

UnmappedNodesName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.VariableType"></a>

### *property* ImportedAeroacousticSource.VariableType *: [Ansys.Mechanical.DataModel.Enums.MappingVariableType](../../../../Mechanical/DataModel/Enums/MappingVariableType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MappingVariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

VariableType property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.VisibleProperties"></a>

### *property* ImportedAeroacousticSource.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Weighting"></a>

### *property* ImportedAeroacousticSource.Weighting *: [Ansys.Mechanical.DataModel.Enums.WeightingType](../../../../Mechanical/DataModel/Enums/WeightingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Weighting property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedAeroacousticSource.Activate"></a>

### ImportedAeroacousticSource.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.AddComment"></a>

### ImportedAeroacousticSource.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.AddFigure"></a>

### ImportedAeroacousticSource.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.AddImage"></a>

### ImportedAeroacousticSource.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.AddMappingValidation"></a>

### ImportedAeroacousticSource.AddMappingValidation() → [Ansys.ACT.Automation.Mechanical.MappingValidation](../MappingValidation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MappingValidation)

Creates a new MappingValidation

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.ClearGeneratedData"></a>

### ImportedAeroacousticSource.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.CopyTo"></a>

### ImportedAeroacousticSource.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.CreateParameter"></a>

### ImportedAeroacousticSource.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Delete"></a>

### ImportedAeroacousticSource.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Duplicate"></a>

### ImportedAeroacousticSource.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.ExportToTextFile"></a>

### ImportedAeroacousticSource.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.GetActivateAtLoadStep"></a>

### ImportedAeroacousticSource.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.GetChildren"></a>

### ImportedAeroacousticSource.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.GetParameter"></a>

### ImportedAeroacousticSource.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.GroupAllSimilarChildren"></a>

### ImportedAeroacousticSource.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.GroupSimilarObjects"></a>

### ImportedAeroacousticSource.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.Import"></a>

### ImportedAeroacousticSource.Import() → [None](https://docs.python.org/3/library/constants.html#None)

Import.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.ImportLoad"></a>

### ImportedAeroacousticSource.ImportLoad() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ImportLoad action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.PropertyByAPIName"></a>

### ImportedAeroacousticSource.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.PropertyByName"></a>

### ImportedAeroacousticSource.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.ReloadConfiguration"></a>

### ImportedAeroacousticSource.ReloadConfiguration() → [None](https://docs.python.org/3/library/constants.html#None)

Reload the Imported Load’s setup from its associated configuration file (if available).

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.RemoveParameter"></a>

### ImportedAeroacousticSource.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.SetActivateAtLoadStep"></a>

### ImportedAeroacousticSource.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedAeroacousticSource.SyncAnalysisFrequencies"></a>

### ImportedAeroacousticSource.SyncAnalysisFrequencies() → [None](https://docs.python.org/3/library/constants.html#None)

```text
Synchronizes the analysis settings' RPMs and frequencies based on the selected imported load.
    A `NotSupportedException` exception will be thrown when called with any non-supported imported loads.
```

<!-- !! processed by numpydoc !! -->

