# `BodyControl`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BodyControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BodyControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#BodyControl.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#BodyControl.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BodyControl.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#BodyControl.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#BodyControl.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#BodyControl.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#BodyControl.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BodyControl.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BodyControl.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BodyControl.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BodyControl.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BodyControl.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#BodyControl.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#BodyControl.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BodyControl.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ViscousCoefficient`](#BodyControl.ViscousCoefficient)                     | Gets or sets the ViscousCoefficient.                          |
| [`ArtificialViscosityForShells`](#BodyControl.ArtificialViscosityForShells) | Gets or sets the ArtificialViscosityForShells.                |
| [`ShellBWCWarpCorrection`](#BodyControl.ShellBWCWarpCorrection)             | Gets or sets the ShellBWCWarpCorrection.                      |
| [`InternalObject`](#id0)                                                    | Gets the internal object. For advanced usage only.            |
| [`BeamTimeStepSafetyFactor`](#BodyControl.BeamTimeStepSafetyFactor)         | Gets or sets the BeamTimeStepSafetyFactor.                    |
| [`PusoStabilityCoefficient`](#BodyControl.PusoStabilityCoefficient)         | Gets or sets the PusoStabilityCoefficient.                    |
| [`ShellShearCorrectionFactor`](#BodyControl.ShellShearCorrectionFactor)     | Gets or sets the ShellShearCorrectionFactor.                  |
| [`ShellSublayers`](#BodyControl.ShellSublayers)                             | Gets or sets the ShellSublayers.                              |
| [`StiffnessCoefficient`](#BodyControl.StiffnessCoefficient)                 | Gets or sets the StiffnessCoefficient.                        |
| [`BeamSolutionType`](#BodyControl.BeamSolutionType)                         | Gets or sets the BeamSolutionType.                            |
| [`HexIntegrationType`](#BodyControl.HexIntegrationType)                     | Gets or sets the HexIntegrationType.                          |
| [`HourglassDampingType`](#BodyControl.HourglassDampingType)                 | Gets or sets the HourglassDampingType.                        |
| [`ShellInertiaUpdate`](#BodyControl.ShellInertiaUpdate)                     | Gets or sets the ShellInertiaUpdate.                          |
| [`ShellThicknessUpdate`](#BodyControl.ShellThicknessUpdate)                 | Gets or sets the ShellThicknessUpdate.                        |
| [`TetIntegrationType`](#BodyControl.TetIntegrationType)                     | Gets or sets the TetIntegrationType.                          |
| [`Location`](#BodyControl.Location)                                         | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#BodyControl.DataModelObjectCategory)           | Gets the current DataModelObject's category.                  |
| [`Suppressed`](#BodyControl.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#BodyControl.SharedRefBody)                               | Gets or sets the SharedRefBody.                               |
| [`Children`](#BodyControl.Children)                                         | Gets the list of children.                                    |
| [`Comments`](#BodyControl.Comments)                                         | Gets the list of associated comments.                         |
| [`Figures`](#BodyControl.Figures)                                           | Gets the list of associated figures.                          |
| [`Images`](#BodyControl.Images)                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#BodyControl.ReadOnly)                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                    | Gets the internal object. For advanced usage only.            |
| [`Properties`](#BodyControl.Properties)                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#BodyControl.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BodyControl.ViscousCoefficient"></a>

### *property* BodyControl.ViscousCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ArtificialViscosityForShells"></a>

### *property* BodyControl.ArtificialViscosityForShells *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ArtificialViscosityForShells.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellBWCWarpCorrection"></a>

### *property* BodyControl.ShellBWCWarpCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellBWCWarpCorrection.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.InternalObject"></a>

### *property* BodyControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.BeamTimeStepSafetyFactor"></a>

### *property* BodyControl.BeamTimeStepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamTimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PusoStabilityCoefficient"></a>

### *property* BodyControl.PusoStabilityCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PusoStabilityCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellShearCorrectionFactor"></a>

### *property* BodyControl.ShellShearCorrectionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellShearCorrectionFactor.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellSublayers"></a>

### *property* BodyControl.ShellSublayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellSublayers.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.StiffnessCoefficient"></a>

### *property* BodyControl.StiffnessCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.BeamSolutionType"></a>

### *property* BodyControl.BeamSolutionType *: [Ansys.Mechanical.DataModel.Enums.BeamSolutionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/BeamSolutionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BeamSolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSolutionType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.HexIntegrationType"></a>

### *property* BodyControl.HexIntegrationType *: [Ansys.Mechanical.DataModel.Enums.HexIntegrationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/HexIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HexIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.HourglassDampingType"></a>

### *property* BodyControl.HourglassDampingType *: [Ansys.Mechanical.DataModel.Enums.HourglassDampingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/HourglassDampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HourglassDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HourglassDampingType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellInertiaUpdate"></a>

### *property* BodyControl.ShellInertiaUpdate *: [Ansys.Mechanical.DataModel.Enums.ShellInertiaUpdate](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellInertiaUpdate.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellInertiaUpdate) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellInertiaUpdate.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ShellThicknessUpdate"></a>

### *property* BodyControl.ShellThicknessUpdate *: [Ansys.Mechanical.DataModel.Enums.ShellThicknessUpdate](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellThicknessUpdate.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellThicknessUpdate) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessUpdate.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.TetIntegrationType"></a>

### *property* BodyControl.TetIntegrationType *: [Ansys.Mechanical.DataModel.Enums.TetIntegrationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TetIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TetIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TetIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Location"></a>

### *property* BodyControl.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.DataModelObjectCategory"></a>

### *property* BodyControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Suppressed"></a>

### *property* BodyControl.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.SharedRefBody"></a>

### *property* BodyControl.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Children"></a>

### *property* BodyControl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Comments"></a>

### *property* BodyControl.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Figures"></a>

### *property* BodyControl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Images"></a>

### *property* BodyControl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.ReadOnly"></a>

### *property* BodyControl.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BodyControl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Properties"></a>

### *property* BodyControl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.VisibleProperties"></a>

### *property* BodyControl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyControl.PromoteToNamedSelection"></a>

### BodyControl.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Delete"></a>

### BodyControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetChildren"></a>

### BodyControl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BodyControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### BodyControl.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Activate"></a>

### BodyControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.CopyTo"></a>

### BodyControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.Duplicate"></a>

### BodyControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GroupAllSimilarChildren"></a>

### BodyControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GroupSimilarObjects"></a>

### BodyControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PropertyByName"></a>

### BodyControl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.PropertyByAPIName"></a>

### BodyControl.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.CreateParameter"></a>

### BodyControl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.GetParameter"></a>

### BodyControl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyControl.RemoveParameter"></a>

### BodyControl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

