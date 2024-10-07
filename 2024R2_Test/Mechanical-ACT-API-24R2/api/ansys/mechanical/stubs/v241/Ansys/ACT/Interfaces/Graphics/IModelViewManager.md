# `IModelViewManager`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Interfaces.Graphics.IModelViewManager"></a>

#### *class* Ansys.ACT.Interfaces.Graphics.IModelViewManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------|---------------------------------------------------------------------------|
| [`ApplyModelView`](#IModelViewManager.ApplyModelView)     | Apply the view specified by index.                                        |
| [`CaptureModelView`](#IModelViewManager.CaptureModelView) | Save the view specified by index as a PNG image to the project userfiles. |
| [`CreateView`](#IModelViewManager.CreateView)             | Create a view from current graphics with default naming.                  |
| [`DeleteView`](#IModelViewManager.DeleteView)             | Delete the specified view by index.                                       |
| [`ExportModelViews`](#IModelViewManager.ExportModelViews) | Export model views to the specified file.                                 |
| [`ImportModelViews`](#IModelViewManager.ImportModelViews) | Import model views from the specified file.                               |
| [`RenameView`](#IModelViewManager.RenameView)             | Rename the model view specified by viewIndex to newLabel.                 |

### Properties

| Name | Description |
|-------------------------------------------------------|------------------------------------------|
| [`NumberOfViews`](#IModelViewManager.NumberOfViews)   | The number of views currently defined.   |

<a id="property-detail"></a>

## Property detail

<a id="IModelViewManager.NumberOfViews"></a>

### *property* IModelViewManager.NumberOfViews *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of views currently defined.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IModelViewManager.ApplyModelView"></a>

### IModelViewManager.ApplyModelView(viewIndex: System.Int32)

Apply the view specified by index.

<!-- !! processed by numpydoc !! -->

<a id="IModelViewManager.CaptureModelView"></a>

### IModelViewManager.CaptureModelView(index: System.Int32, mode: System.String)

Save the view specified by index as a PNG image to the project userfiles.

<!-- !! processed by numpydoc !! -->

<a id="IModelViewManager.CreateView"></a>

### IModelViewManager.CreateView()

Create a view from current graphics with default naming.

<!-- !! processed by numpydoc !! -->

<a id="IModelViewManager.DeleteView"></a>

### IModelViewManager.DeleteView(viewIndex: System.Int32)

Delete the specified view by index.

<!-- !! processed by numpydoc !! -->

<a id="IModelViewManager.ExportModelViews"></a>

### IModelViewManager.ExportModelViews(viewfilepath: System.String)

Export model views to the specified file.

<!-- !! processed by numpydoc !! -->

<a id="IModelViewManager.ImportModelViews"></a>

### IModelViewManager.ImportModelViews(viewfilepath: System.String)

Import model views from the specified file.

<!-- !! processed by numpydoc !! -->

<a id="IModelViewManager.RenameView"></a>

### IModelViewManager.RenameView(viewIndex: System.Int32, newLabel: System.String)

Rename the model view specified by viewIndex to newLabel.

<!-- !! processed by numpydoc !! -->

