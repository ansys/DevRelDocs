# `BodyControl`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BodyControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.BodyControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BodyControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BodyControl.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#BodyControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BodyControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BodyControl.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#BodyControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BodyControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#BodyControl.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#BodyControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#BodyControl.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#BodyControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BodyControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BodyControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#BodyControl.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#BodyControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#BodyControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BodyControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ArtificialViscosityForShells`](#BodyControl.ArtificialViscosityForShells)   | Gets or sets the ArtificialViscosityForShells.                |
| [`BeamSolutionType`](#BodyControl.BeamSolutionType)                           | Gets or sets the BeamSolutionType.                            |
| [`BeamTimeStepSafetyFactor`](#BodyControl.BeamTimeStepSafetyFactor)           | Gets or sets the BeamTimeStepSafetyFactor.                    |
| [`Children`](#BodyControl.Children)                                           | Gets the list of children.                                    |
| [`Comments`](#BodyControl.Comments)                                           | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#BodyControl.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                  |
| [`Figures`](#BodyControl.Figures)                                             | Gets the list of associated figures.                          |
| [`HexIntegrationType`](#BodyControl.HexIntegrationType)                       | Gets or sets the HexIntegrationType.                          |
| [`HourglassDampingType`](#BodyControl.HourglassDampingType)                   | Gets or sets the HourglassDampingType.                        |
| [`Images`](#BodyControl.Images)                                               | Gets the list of associated images.                           |
| [`InternalObject`](#BodyControl.InternalObject)                               | Gets the internal object. For advanced usage only.            |
| [`Location`](#BodyControl.Location)                                           | Gets or sets the Location.                                    |
| [`Properties`](#BodyControl.Properties)                                       | Gets the list of properties for this object.                  |
| [`PusoStabilityCoefficient`](#BodyControl.PusoStabilityCoefficient)           | Gets or sets the PusoStabilityCoefficient.                    |
| [`ReadOnly`](#BodyControl.ReadOnly)                                           | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#BodyControl.SharedRefBody)                                 | Gets or sets the SharedRefBody.                               |
| [`ShellBWCWarpCorrection`](#BodyControl.ShellBWCWarpCorrection)               | Gets or sets the ShellBWCWarpCorrection.                      |
| [`ShellInertiaUpdate`](#BodyControl.ShellInertiaUpdate)                       | Gets or sets the ShellInertiaUpdate.                          |
| [`ShellShearCorrectionFactor`](#BodyControl.ShellShearCorrectionFactor)       | Gets or sets the ShellShearCorrectionFactor.                  |
| [`ShellSublayers`](#BodyControl.ShellSublayers)                               | Gets or sets the ShellSublayers.                              |
| [`ShellThicknessUpdate`](#BodyControl.ShellThicknessUpdate)                   | Gets or sets the ShellThicknessUpdate.                        |
| [`StiffnessCoefficient`](#BodyControl.StiffnessCoefficient)                   | Gets or sets the StiffnessCoefficient.                        |
| [`Suppressed`](#BodyControl.Suppressed)                                       | Gets or sets the Suppressed.                                  |
| [`TetIntegrationType`](#BodyControl.TetIntegrationType)                       | Gets or sets the TetIntegrationType.                          |
| [`ViscousCoefficient`](#BodyControl.ViscousCoefficient)                       | Gets or sets the ViscousCoefficient.                          |
| [`VisibleProperties`](#BodyControl.VisibleProperties)                         | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BodyControl.ArtificialViscosityForShells"></a>

### *property* BodyControl.ArtificialViscosityForShells *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ArtificialViscosityForShells.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.BeamSolutionType"></a>

### *property* BodyControl.BeamSolutionType *: [Ansys.Mechanical.DataModel.Enums.BeamSolutionType](../../../../Mechanical/DataModel/Enums/BeamSolutionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.BeamSolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSolutionType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.BeamTimeStepSafetyFactor"></a>

### *property* BodyControl.BeamTimeStepSafetyFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamTimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Children"></a>

### *property* BodyControl.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Comments"></a>

### *property* BodyControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.DataModelObjectCategory"></a>

### *property* BodyControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Figures"></a>

### *property* BodyControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.HexIntegrationType"></a>

### *property* BodyControl.HexIntegrationType *: [Ansys.Mechanical.DataModel.Enums.HexIntegrationType](../../../../Mechanical/DataModel/Enums/HexIntegrationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.HexIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.HourglassDampingType"></a>

### *property* BodyControl.HourglassDampingType *: [Ansys.Mechanical.DataModel.Enums.HourglassDampingType](../../../../Mechanical/DataModel/Enums/HourglassDampingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.HourglassDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HourglassDampingType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Images"></a>

### *property* BodyControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.InternalObject"></a>

### *property* BodyControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Location"></a>

### *property* BodyControl.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Properties"></a>

### *property* BodyControl.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PusoStabilityCoefficient"></a>

### *property* BodyControl.PusoStabilityCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PusoStabilityCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ReadOnly"></a>

### *property* BodyControl.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.SharedRefBody"></a>

### *property* BodyControl.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellBWCWarpCorrection"></a>

### *property* BodyControl.ShellBWCWarpCorrection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellBWCWarpCorrection.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellInertiaUpdate"></a>

### *property* BodyControl.ShellInertiaUpdate *: [Ansys.Mechanical.DataModel.Enums.ShellInertiaUpdate](../../../../Mechanical/DataModel/Enums/ShellInertiaUpdate.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellInertiaUpdate) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellInertiaUpdate.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellShearCorrectionFactor"></a>

### *property* BodyControl.ShellShearCorrectionFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellShearCorrectionFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellSublayers"></a>

### *property* BodyControl.ShellSublayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellSublayers.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellThicknessUpdate"></a>

### *property* BodyControl.ShellThicknessUpdate *: [Ansys.Mechanical.DataModel.Enums.ShellThicknessUpdate](../../../../Mechanical/DataModel/Enums/ShellThicknessUpdate.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellThicknessUpdate) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessUpdate.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.StiffnessCoefficient"></a>

### *property* BodyControl.StiffnessCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Suppressed"></a>

### *property* BodyControl.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.TetIntegrationType"></a>

### *property* BodyControl.TetIntegrationType *: [Ansys.Mechanical.DataModel.Enums.TetIntegrationType](../../../../Mechanical/DataModel/Enums/TetIntegrationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TetIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TetIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ViscousCoefficient"></a>

### *property* BodyControl.ViscousCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.VisibleProperties"></a>

### *property* BodyControl.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyControl.Activate"></a>

### BodyControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.AddComment"></a>

### BodyControl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.AddFigure"></a>

### BodyControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.AddImage"></a>

### BodyControl.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.CopyTo"></a>

### BodyControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.CreateParameter"></a>

### BodyControl.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Delete"></a>

### BodyControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Duplicate"></a>

### BodyControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetChildren"></a>

### BodyControl.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetParameter"></a>

### BodyControl.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GroupAllSimilarChildren"></a>

### BodyControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GroupSimilarObjects"></a>

### BodyControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PromoteToNamedSelection"></a>

### BodyControl.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PropertyByAPIName"></a>

### BodyControl.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PropertyByName"></a>

### BodyControl.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.RemoveParameter"></a>

### BodyControl.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

