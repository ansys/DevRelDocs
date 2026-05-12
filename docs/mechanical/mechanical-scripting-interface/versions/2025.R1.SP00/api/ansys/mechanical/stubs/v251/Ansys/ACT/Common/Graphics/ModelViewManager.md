# `ModelViewManager`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Common.Graphics.ModelViewManager"></a>

#### *class* Ansys.ACT.Common.Graphics.ModelViewManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

ModelViewManager class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------|-----------------------------------------------------------|
| [`ApplyModelView`](#ModelViewManager.ApplyModelView)       | Apply the view specified by index.                        |
| [`CreateView`](#ModelViewManager.CreateView)               | Create a view from current graphics with default naming.  |
| [`DeleteView`](#ModelViewManager.DeleteView)               | Delete the specified view by name.                        |
| [`ExportModelViews`](#ModelViewManager.ExportModelViews)   | Export model views to the specified file.                 |
| [`ImportModelViews`](#ModelViewManager.ImportModelViews)   | Import model views from the specified file.               |
| [`RenameView`](#ModelViewManager.RenameView)               | Rename the model view specified by viewIndex to newLabel. |
| [`SetActiveViewPort`](#ModelViewManager.SetActiveViewPort) | Set the active of viewport.                               |
| [`SetViewPorts`](#ModelViewManager.SetViewPorts)           | Set the number of viewports displayed.                    |

### Properties

| Name | Description |
|--------------------------------------------------------|----------------------------------------|
| [`ActiveViewPort`](#ModelViewManager.ActiveViewPort)   | ActiveViewPort property.               |
| [`NumberOfViews`](#ModelViewManager.NumberOfViews)     | The number of views currently defined. |

<a id="property-detail"></a>

## Property detail

<a id="ModelViewManager.ActiveViewPort"></a>

### *property* ModelViewManager.ActiveViewPort *: Ansys.ACT.Common.Graphics.MechanicalViewPort | [None](https://docs.python.org/3/library/constants.html#None)*

ActiveViewPort property.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.NumberOfViews"></a>

### *property* ModelViewManager.NumberOfViews *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

The number of views currently defined.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ModelViewManager.ApplyModelView"></a>

### ModelViewManager.ApplyModelView(viewIndex: [int](https://docs.python.org/3/library/functions.html#int))

Apply the view specified by index.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.CreateView"></a>

### ModelViewManager.CreateView()

Create a view from current graphics with default naming.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.DeleteView"></a>

### ModelViewManager.DeleteView(viewLabel: [str](https://docs.python.org/3/library/stdtypes.html#str))

Delete the specified view by name.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.ExportModelViews"></a>

### ModelViewManager.ExportModelViews(viewfilepath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Export model views to the specified file.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.ImportModelViews"></a>

### ModelViewManager.ImportModelViews(viewfilepath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Import model views from the specified file.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.RenameView"></a>

### ModelViewManager.RenameView(viewIndex: [int](https://docs.python.org/3/library/functions.html#int), newLabel: [str](https://docs.python.org/3/library/stdtypes.html#str))

Rename the model view specified by viewIndex to newLabel.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetActiveViewPort"></a>

### ModelViewManager.SetActiveViewPort(winRowIndex: [int](https://docs.python.org/3/library/functions.html#int), winColIndex: [int](https://docs.python.org/3/library/functions.html#int))

Set the active of viewport.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetViewPorts"></a>

### ModelViewManager.SetViewPorts(numViewPorts: [int](https://docs.python.org/3/library/functions.html#int), horizontal: [bool](https://docs.python.org/3/library/functions.html#bool))

Set the number of viewports displayed.

<!-- !! processed by numpydoc !! -->

