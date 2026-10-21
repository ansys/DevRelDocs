# `ProbeLabel`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ProbeLabel"></a>

#### *class* Ansys.Mechanical.Graphics.Labels.ProbeLabel

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A class of labels that allows you to probe a value at a specific location.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AssociatedObject`](#ProbeLabel.AssociatedObject)                                         | AssociatedObject property.                                                                                                                                   |
| [`Color`](#Color)                                     | Color property.                                                                                                                                              |
| [`CreatedFromHotspot`](#ProbeLabel.CreatedFromHotspot)                                     | Assigns whether this probe label was created from a hotspot result                                                                                           |
| [`DeformedPosition`](#ProbeLabel.DeformedPosition)                                         | Gets the post-solution position of the probe, based on Scoping.                                                                                              |
| [`Note`](#ProbeLabel.Note)                                                                 | Note property.                                                                                                                                               |
| [`Position`](#Position) | Gets the pre-solution position of the probe, based on Scoping.                                                                                               |
| [`Scoping`](#ProbeLabel.Scoping)                                                           | Gets or sets the scoping of the label.                                                                                                                       |
| [`ShellSide`](#ProbeLabel.ShellSide)                                                       | Gets or sets the side of the shell the probe is attached to. Default is Top.                                                                                 |
| [`UserLabelPosition`](#ProbeLabel.UserLabelPosition)                                       | UserLabelPosition property.                                                                                                                                  |
| [`Value`](#ProbeLabel.Value)                                                               | Gets the last evaluated value from AssociatedObject at Scoping. If AssociatedObject is not evaluated or has no value at Scoping, this property returns None. |

<a id="property-detail"></a>

## Property detail

<a id="ProbeLabel.AssociatedObject"></a>

### *property* ProbeLabel.AssociatedObject *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AssociatedObject property.

<!-- !! processed by numpydoc !! -->

<a id="ProbeLabel.Color"></a>

### *property* ProbeLabel.Color *: [Ansys.ACT.Common.Graphics.Color](../../../ACT/Common/Graphics/Color.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.Color) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Color property.

<!-- !! processed by numpydoc !! -->

<a id="ProbeLabel.CreatedFromHotspot"></a>

### *property* ProbeLabel.CreatedFromHotspot *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Assigns whether this probe label was created from a hotspot result

<!-- !! processed by numpydoc !! -->

<a id="ProbeLabel.DeformedPosition"></a>

### *property* ProbeLabel.DeformedPosition *: [Ansys.Mechanical.Graphics.Point](../Point.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the post-solution position of the probe, based on Scoping.
If AssociatedObject is not evaluated, this property returns None.
If AssociatedObject is evaluated but does not have deformation data, this property returns Position.

<!-- !! processed by numpydoc !! -->

<a id="ProbeLabel.Note"></a>

### *property* ProbeLabel.Note *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Note property.

<!-- !! processed by numpydoc !! -->

<a id="ProbeLabel.Position"></a>

### *property* ProbeLabel.Position *: [Ansys.Mechanical.Graphics.Point](../Point.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the pre-solution position of the probe, based on Scoping.

<!-- !! processed by numpydoc !! -->

<a id="ProbeLabel.Scoping"></a>

### *property* ProbeLabel.Scoping *: [Ansys.Mechanical.Graphics.Labels.IProbeScoping](IProbeScoping.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.IProbeScoping) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping of the label.

<!-- !! processed by numpydoc !! -->

<a id="ProbeLabel.ShellSide"></a>

### *property* ProbeLabel.ShellSide *: [Ansys.Mechanical.DataModel.MechanicalEnums.Graphics.Labels.ShellSide](../../DataModel/MechanicalEnums/Graphics/Labels/ShellSide.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Graphics.Labels.ShellSide) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the side of the shell the probe is attached to. Default is Top.
An exception is thrown if the label shell side is not Top or Bottom.
An exception is thrown if the label does not exist or it failed to get or set the shell side.

<!-- !! processed by numpydoc !! -->

<a id="ProbeLabel.UserLabelPosition"></a>

### *property* ProbeLabel.UserLabelPosition *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

UserLabelPosition property.

<!-- !! processed by numpydoc !! -->

<a id="ProbeLabel.Value"></a>

### *property* ProbeLabel.Value *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the last evaluated value from AssociatedObject at Scoping. If AssociatedObject is not evaluated or has no value at Scoping, this property returns None.

<!-- !! processed by numpydoc !! -->

