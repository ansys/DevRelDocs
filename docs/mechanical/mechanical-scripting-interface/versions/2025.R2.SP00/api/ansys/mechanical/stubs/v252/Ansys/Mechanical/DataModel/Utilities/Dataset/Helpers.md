# `Helpers`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Helpers"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.Dataset.Helpers

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A class that exposes helper methods/properties for a dataset object.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`GetMaximumCutOffFrequency`](#Helpers.GetMaximumCutOffFrequency)   | Gets the maximum cutoff frequency limit of the dataset (useful for Filters like Butterworth and SAE).   |
| [`Import`](#Helpers.Import)                                         | Imports dataset data from text a file.                                                                  |

<a id="method-detail"></a>

## Method detail

<a id="Helpers.GetMaximumCutOffFrequency"></a>

### *classmethod* Helpers.GetMaximumCutOffFrequency(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the maximum cutoff frequency limit of the dataset (useful for Filters like Butterworth and SAE).

<!-- !! processed by numpydoc !! -->

<a id="Helpers.Import"></a>

### *classmethod* Helpers.Import(filename: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

```text
Imports dataset data from text a file.
The import autodetects the file format from the supported options of tab delimited or LSPrePost export format for import.
An InvalidOperationException is thrown if the import format in the input file is incompatible or if the data within the file is invalid.
```

<!-- !! processed by numpydoc !! -->

