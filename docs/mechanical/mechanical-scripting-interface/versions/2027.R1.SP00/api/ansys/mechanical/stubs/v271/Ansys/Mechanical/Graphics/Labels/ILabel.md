# `ILabel`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.ILabel"></a>

#### *class* Ansys.Mechanical.Graphics.Labels.ILabel

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

This interface contains methods and properties common to all labels.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|--------------------------------------------------------|----------------------------------------------------------------------------|
| [`AssociatedObject`](#ILabel.AssociatedObject)         | Gets the associated object.                                                |
| [`Color`](#Color) | Gets or sets the label's color.                                            |
| [`Note`](#ILabel.Note)                                 | Gets or sets the note on the label. The note refers to user-provided text, |
| [`UserLabelPosition`](#ILabel.UserLabelPosition)       | Get or sets the label's position on the screen                             |

<a id="property-detail"></a>

## Property detail

<a id="ILabel.AssociatedObject"></a>

### *property* ILabel.AssociatedObject *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the associated object.

<!-- !! processed by numpydoc !! -->

<a id="ILabel.Color"></a>

### *property* ILabel.Color *: [Ansys.ACT.Common.Graphics.Color](../../../ACT/Common/Graphics/Color.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.Color) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label's color.

<!-- !! processed by numpydoc !! -->

<a id="ILabel.Note"></a>

### *property* ILabel.Note *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

> Gets or sets the note on the label. The note refers to user-provided text,
> which is separate from the program-provided information (such as mesh
> entity IDs and result values). Multi-line notes are supported through the
> newline character '

'. If the note consists of more than 10 lines then only
: the first 10 will be rendered and “…” will be appended to the 10th line.
  Setting this to None is treated the same way as setting it to an empty string.

<!-- !! processed by numpydoc !! -->

<a id="ILabel.UserLabelPosition"></a>

### *property* ILabel.UserLabelPosition *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get or sets the label's position on the screen
The position is the tip of the label arrow.
The position is represented as a double array of size 2,
Where the first element is the percentage of the x-axis measured from bottom-left.
Where the second element is the percentage of the y-axis measured from bottom-left.
Note: This property is not intended for long term use

<!-- !! processed by numpydoc !! -->

