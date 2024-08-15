# `IModelViewManager`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Interfaces.Graphics.IModelViewManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------|---------------------------------------------------------------------------|
| `ApplyModelView`   | Apply the view specified by index.                                        |
| `ApplyModelView`   | Apply the view specified by name.                                         |
| `CaptureModelView` | Save the view specified by index as a PNG image to the project userfiles. |
| `CaptureModelView` | Save the view specified as an image to the project userfiles.             |
| `CreateView`       | Create a view from current graphics with default naming.                  |
| `CreateView`       | Create a view from current graphics with the specified name.              |
| `DeleteView`       | Delete the specified view by index.                                       |
| `DeleteView`       | Apply the view specified by name.                                         |
| `ExportModelViews` | Export model views to the specified file.                                 |
| `ImportModelViews` | Import model views from the specified file.                               |
| `RenameView`       | Rename the model view specified by viewIndex to newLabel.                 |
| `RenameView`       | Rename the model view specified  to newLabel.                             |

### Properties

| Name | Description |
|-------------------|------------------------------------------|
| `NumberOfViews`   | The number of views currently defined.   |

<a id="property-detail"></a>

## Property detail

### *property* IModelViewManager.NumberOfViews *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of views currently defined.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### IModelViewManager.ApplyModelView(viewIndex: System.Int32)

Apply the view specified by index.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.ApplyModelView(viewLabel: System.String)

Apply the view specified by name.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.CaptureModelView(index: System.Int32, mode: System.String)

Save the view specified by index as a PNG image to the project userfiles.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.CaptureModelView(viewLabel: System.String, mode: System.String)

Save the view specified as an image to the project userfiles.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.CreateView()

Create a view from current graphics with default naming.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.CreateView(viewName: System.String)

Create a view from current graphics with the specified name.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.DeleteView(viewIndex: System.Int32)

Delete the specified view by index.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.DeleteView(viewLabel: System.String)

Apply the view specified by name.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.ExportModelViews(viewfilepath: System.String)

Export model views to the specified file.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.ImportModelViews(viewfilepath: System.String)

Import model views from the specified file.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.RenameView(viewIndex: System.Int32, newLabel: System.String)

Rename the model view specified by viewIndex to newLabel.

<!-- !! processed by numpydoc !! -->

### IModelViewManager.RenameView(viewLabel: System.String, newLabel: System.String)

Rename the model view specified  to newLabel.

<!-- !! processed by numpydoc !! -->

