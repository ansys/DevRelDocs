# `Filters`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Filters"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.Dataset.Filters

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A class that provides methods to apply mathematical Filters (like Butterworth and SAE filters) to a dataset object.
All filters throw an InvalidOperationException when an invalid dataset is passed in as an input.
An invalid dataset could be null dataset reference, dataset with either of the x or values list empty or dataset with a mismatch in the size of its x and y values list.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [`Butterworth`](#Filters.Butterworth)         | Applies Butterworth filter on the given dataset at the given cutoff frequency and returns the result as a new dataset.   |
| [`ButterworthLSPP`](#Filters.ButterworthLSPP) | Applies Butterworth filter on the given dataset at the given cutoff frequency and returns the result as a new dataset.   |
| [`SAE`](#Filters.SAE)                         | Applies SAE filter on the given dataset at the given cutoff frequency and returns the result as a new dataset.           |

<a id="method-detail"></a>

## Method detail

<a id="Filters.Butterworth"></a>

### *classmethod* Filters.Butterworth(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), cutoff_frequency: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

```text
Applies Butterworth filter on the given dataset at the given cutoff frequency and returns the result as a new dataset.
This is comparable to the native Butterworth filter for Solution Information tracker results.
An InvalidOperationException is thrown if the inputs are incorrect.
Invalid inputs comprise of an invalid dataset or a cutoff frequency out of valid range (negative or exceeding the maximum cutoff frequency possible for that dataset.
The Maximum Cutoff Frequency for a particular dataset can be queried using the GetMaximumCutoffFrequency method in the Ansys.Mechanical.DataModel.Utilities.Dataset.Helpers namespace).
```

<!-- !! processed by numpydoc !! -->

<a id="Filters.ButterworthLSPP"></a>

### *classmethod* Filters.ButterworthLSPP(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), cutoff_frequency: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

```text
Applies Butterworth filter on the given dataset at the given cutoff frequency and returns the result as a new dataset.
This is comparable to the Butterworth filter provided by LSPrePost.
An InvalidOperationException is thrown if the inputs are incorrect.
Invalid inputs comprise of an invalid dataset or a cutoff frequency out of valid range (negative or exceeding the maximum cutoff frequency possible for that dataset.
The Maximum Cutoff Frequency for a particular dataset can be queried using the GetMaximumCutoffFrequency method in the Ansys.Mechanical.DataModel.Utilities.Dataset.Helpers namespace).
```

<!-- !! processed by numpydoc !! -->

<a id="Filters.SAE"></a>

### *classmethod* Filters.SAE(dataset: [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D), cutoff_frequency: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D](Dataset2D.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Utilities.Dataset.Dataset2D)

```text
Applies SAE filter on the given dataset at the given cutoff frequency and returns the result as a new dataset.
An InvalidOperationException is thrown if the inputs are incorrect.
Invalid inputs comprise of an invalid dataset or a cutoff frequency out of valid range (negative or exceeding the maximum cutoff frequency possible for that dataset.
The Maximum Cutoff Frequency for a particular dataset can be queried using the GetMaximumCutoffFrequency method in the Ansys.Mechanical.DataModel.Utilities.Dataset.Helpers namespace).
```

<!-- !! processed by numpydoc !! -->

