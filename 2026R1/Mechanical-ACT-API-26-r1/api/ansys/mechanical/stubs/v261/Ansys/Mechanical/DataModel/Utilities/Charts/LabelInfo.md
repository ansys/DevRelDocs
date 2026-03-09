# `LabelInfo`

<a id="ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Utilities.Charts.LabelInfo"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.Charts.LabelInfo

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Move`](#LabelInfo.Move)   | Moves the label to the position on the X axis and the Y axis. An InvalidOperationException will be thrown when moving a Label that does not exist.   |

### Properties

| Name | Description |
|-------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`DefaultText`](#LabelInfo.DefaultText)               | DefaultText property. This is a pre-defined string: “x: {xvalue} [{xunit}] y: {yvalue} [{yunit}]”. It is provided to enable a simple reset to the Text property.   |
| [`FormattedLabelText`](#LabelInfo.FormattedLabelText) | FormattedLabelText property.                                                                                                                                       |
| [`IsVisible`](#LabelInfo.IsVisible)                   | IsVisible property.                                                                                                                                                |
| [`Text`](#LabelInfo.Text)                             | Text property.                                                                                                                                                     |
| [`X`](#LabelInfo.X)                                   | X property.                                                                                                                                                        |
| [`XDisplay`](#LabelInfo.XDisplay)                     | XDisplay property.                                                                                                                                                 |
| [`Y`](#LabelInfo.Y)                                   | Y property.                                                                                                                                                        |
| [`YDisplay`](#LabelInfo.YDisplay)                     | YDisplay property.                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="LabelInfo.DefaultText"></a>

### *property* LabelInfo.DefaultText *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

* **Classmethod:**

DefaultText property. This is a pre-defined string: “x: {xvalue} [{xunit}] y: {yvalue} [{yunit}]”. It is provided to enable a simple reset to the Text property.

<!-- !! processed by numpydoc !! -->

<a id="LabelInfo.FormattedLabelText"></a>

### *property* LabelInfo.FormattedLabelText *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

FormattedLabelText property.

<!-- !! processed by numpydoc !! -->

<a id="LabelInfo.IsVisible"></a>

### *property* LabelInfo.IsVisible *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

IsVisible property.

<!-- !! processed by numpydoc !! -->

<a id="LabelInfo.Text"></a>

### *property* LabelInfo.Text *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Text property.

<!-- !! processed by numpydoc !! -->

<a id="LabelInfo.X"></a>

### *property* LabelInfo.X *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

X property.

<!-- !! processed by numpydoc !! -->

<a id="LabelInfo.XDisplay"></a>

### *property* LabelInfo.XDisplay *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

XDisplay property.

<!-- !! processed by numpydoc !! -->

<a id="LabelInfo.Y"></a>

### *property* LabelInfo.Y *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Y property.

<!-- !! processed by numpydoc !! -->

<a id="LabelInfo.YDisplay"></a>

### *property* LabelInfo.YDisplay *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

YDisplay property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LabelInfo.Move"></a>

### LabelInfo.Move(x_display: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity), y_display: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Moves the label to the position on the X axis and the Y axis. An InvalidOperationException will be thrown when moving a Label that does not exist.

<!-- !! processed by numpydoc !! -->

