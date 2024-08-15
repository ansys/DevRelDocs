# `BodyControl`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BodyControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BodyControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------|-----------------------------------------------------------------------------------|
| `PromoteToNamedSelection`   | Run the PromoteToNamedSelection action.                                           |
| `Delete`                    | Run the Delete action.                                                            |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `AddComment`                | Creates a new child Comment.                                                      |
| `AddFigure`                 | Creates a new child Figure.                                                       |
| `AddImage`                  | Creates a new child Image.                                                        |
| `Activate`                  | Activate the current object.                                                      |
| `CopyTo`                    | Copies all visible properties from this object to another.                        |
| `Duplicate`                 | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`   | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`       | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`            | Get a property by its unique name.                                                |
| `PropertyByAPIName`         | Get a property by its API name.                                                   |
| `CreateParameter`           | Creates a new parameter for a Property.                                           |
| `GetParameter`              | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------|---------------------------------------------------------------|
| `ViscousCoefficient`           | Gets or sets the ViscousCoefficient.                          |
| `ArtificialViscosityForShells` | Gets or sets the ArtificialViscosityForShells.                |
| `ShellBWCWarpCorrection`       | Gets or sets the ShellBWCWarpCorrection.                      |
| `InternalObject`               | Gets the internal object. For advanced usage only.            |
| `BeamTimeStepSafetyFactor`     | Gets or sets the BeamTimeStepSafetyFactor.                    |
| `PusoStabilityCoefficient`     | Gets or sets the PusoStabilityCoefficient.                    |
| `ShellShearCorrectionFactor`   | Gets or sets the ShellShearCorrectionFactor.                  |
| `ShellSublayers`               | Gets or sets the ShellSublayers.                              |
| `StiffnessCoefficient`         | Gets or sets the StiffnessCoefficient.                        |
| `BeamSolutionType`             | Gets or sets the BeamSolutionType.                            |
| `HexIntegrationType`           | Gets or sets the HexIntegrationType.                          |
| `HourglassDampingType`         | Gets or sets the HourglassDampingType.                        |
| `ShellInertiaUpdate`           | Gets or sets the ShellInertiaUpdate.                          |
| `ShellThicknessUpdate`         | Gets or sets the ShellThicknessUpdate.                        |
| `TetIntegrationType`           | Gets or sets the TetIntegrationType.                          |
| `Location`                     | Gets or sets the Location.                                    |
| `DataModelObjectCategory`      | Gets the current DataModelObject's category.                  |
| `Suppressed`                   | Gets or sets the Suppressed.                                  |
| `SharedRefBody`                | Gets or sets the SharedRefBody.                               |
| `Children`                     | Gets the list of children.                                    |
| `Comments`                     | Gets the list of associated comments.                         |
| `Figures`                      | Gets the list of associated figures.                          |
| `Images`                       | Gets the list of associated images.                           |
| `ReadOnly`                     | Gets or sets the ReadOnly.                                    |
| `InternalObject`               | Gets the internal object. For advanced usage only.            |
| `Properties`                   | Gets the list of properties for this object.                  |
| `VisibleProperties`            | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* BodyControl.ViscousCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.ArtificialViscosityForShells *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ArtificialViscosityForShells.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.ShellBWCWarpCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellBWCWarpCorrection.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.BeamTimeStepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamTimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.PusoStabilityCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PusoStabilityCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.ShellShearCorrectionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellShearCorrectionFactor.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.ShellSublayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellSublayers.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.StiffnessCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.BeamSolutionType *: [Ansys.Mechanical.DataModel.Enums.BeamSolutionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/BeamSolutionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BeamSolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSolutionType.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.HexIntegrationType *: [Ansys.Mechanical.DataModel.Enums.HexIntegrationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/HexIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HexIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexIntegrationType.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.HourglassDampingType *: [Ansys.Mechanical.DataModel.Enums.HourglassDampingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/HourglassDampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HourglassDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HourglassDampingType.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.ShellInertiaUpdate *: [Ansys.Mechanical.DataModel.Enums.ShellInertiaUpdate](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellInertiaUpdate.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellInertiaUpdate) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellInertiaUpdate.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.ShellThicknessUpdate *: [Ansys.Mechanical.DataModel.Enums.ShellThicknessUpdate](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellThicknessUpdate.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellThicknessUpdate) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessUpdate.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.TetIntegrationType *: [Ansys.Mechanical.DataModel.Enums.TetIntegrationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TetIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TetIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TetIntegrationType.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BodyControl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### BodyControl.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### BodyControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BodyControl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BodyControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BodyControl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BodyControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BodyControl.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### BodyControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BodyControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BodyControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BodyControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BodyControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BodyControl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BodyControl.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### BodyControl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### BodyControl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BodyControl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

