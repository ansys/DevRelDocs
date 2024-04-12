<a id="module-ansys.mechanical.stubs.Ansys.ACT.Interfaces.Graphics"></a>

<a id="the-graphics-package"></a>

# The `Graphics` package

<a id="summary"></a>

## Summary

### Interfaces

| Name | Summary |
|-----------------------------------------------------------------|----|
| [`IModelViewManager`](IModelViewManager.md#IModelViewManager)   |    |

<a id="description"></a>

## Description

Graphics subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Graphics.IModelViewManager"></a>

### *class* Graphics.IModelViewManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------------------------|---------------------------------------------------------------------------|
| [`ApplyModelView`](#id0)                         | Apply the view specified by index.                                        |
| [`ApplyModelView`](#id0)                         | Apply the view specified by name.                                         |
| [`CaptureModelView`](#id1)                       | Save the view specified by index as a PNG image to the project userfiles. |
| [`CaptureModelView`](#id1)                       | Save the view specified as an image to the project userfiles.             |
| [`CreateView`](#id2)                             | Create a view from current graphics with default naming.                  |
| [`CreateView`](#id2)                             | Create a view from current graphics with the specified name.              |
| [`DeleteView`](#id3)                             | Delete the specified view by index.                                       |
| [`DeleteView`](#id3)                             | Apply the view specified by name.                                         |
| [`ExportModelViews`](#Graphics.ExportModelViews) | Export model views to the specified file.                                 |
| [`ImportModelViews`](#Graphics.ImportModelViews) | Import model views from the specified file.                               |
| [`RenameView`](#id4)                             | Rename the model view specified by viewIndex to newLabel.                 |
| [`RenameView`](#id4)                             | Rename the model view specified  to newLabel.                             |

### Properties

| Name | Summary |
|----------------------------------------------|------------------------------------------|
| [`NumberOfViews`](#Graphics.NumberOfViews)   | The number of views currently defined.   |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Graphics import IModelViewManager
```

<a id="property-detail"></a>

## Property detail

<a id="Graphics.NumberOfViews"></a>

### *property* Graphics.NumberOfViews *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of views currently defined.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Graphics.ApplyModelView"></a>

### Graphics.ApplyModelView(viewIndex: System.Int32)

Apply the view specified by index.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### Graphics.ApplyModelView(viewLabel: System.String)

Apply the view specified by name.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.CaptureModelView"></a>

### Graphics.CaptureModelView(index: System.Int32, mode: System.String)

Save the view specified by index as a PNG image to the project userfiles.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Graphics.CaptureModelView(viewLabel: System.String, mode: System.String)

Save the view specified as an image to the project userfiles.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.CreateView"></a>

### Graphics.CreateView()

Create a view from current graphics with default naming.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### Graphics.CreateView(viewName: System.String)

Create a view from current graphics with the specified name.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.DeleteView"></a>

### Graphics.DeleteView(viewIndex: System.Int32)

Delete the specified view by index.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### Graphics.DeleteView(viewLabel: System.String)

Apply the view specified by name.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ExportModelViews"></a>

### Graphics.ExportModelViews(viewfilepath: System.String)

Export model views to the specified file.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ImportModelViews"></a>

### Graphics.ImportModelViews(viewfilepath: System.String)

Import model views from the specified file.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.RenameView"></a>

### Graphics.RenameView(viewIndex: System.Int32, newLabel: System.String)

Rename the model view specified by viewIndex to newLabel.

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

### Graphics.RenameView(viewLabel: System.String, newLabel: System.String)

Rename the model view specified  to newLabel.

<!-- !! processed by numpydoc !! -->
