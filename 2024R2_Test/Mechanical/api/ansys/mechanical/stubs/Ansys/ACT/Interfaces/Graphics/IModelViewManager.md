<a id="imodelviewmanager"></a>

# IModelViewManager

<a id="IModelViewManager"></a>

### *class* IModelViewManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-----------------------------------------------------------|---------------------------------------------------------------------------|
| [`ApplyModelView`](#id0)                                  | Apply the view specified by index.                                        |
| [`ApplyModelView`](#id0)                                  | Apply the view specified by name.                                         |
| [`CaptureModelView`](#id1)                                | Save the view specified by index as a PNG image to the project userfiles. |
| [`CaptureModelView`](#id1)                                | Save the view specified as an image to the project userfiles.             |
| [`CreateView`](#id2)                                      | Create a view from current graphics with default naming.                  |
| [`CreateView`](#id2)                                      | Create a view from current graphics with the specified name.              |
| [`DeleteView`](#id3)                                      | Delete the specified view by index.                                       |
| [`DeleteView`](#id3)                                      | Apply the view specified by name.                                         |
| [`ExportModelViews`](#IModelViewManager.ExportModelViews) | Export model views to the specified file.                                 |
| [`ImportModelViews`](#IModelViewManager.ImportModelViews) | Import model views from the specified file.                               |
| [`RenameView`](#id4)                                      | Rename the model view specified by viewIndex to newLabel.                 |
| [`RenameView`](#id4)                                      | Rename the model view specified  to newLabel.                             |

### Properties

| Name | Summary |
|-------------------------------------------------------|------------------------------------------|
| [`NumberOfViews`](#IModelViewManager.NumberOfViews)   | The number of views currently defined.   |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Graphics import IModelViewManager
```

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

<a id="id0"></a>

### IModelViewManager.ApplyModelView(viewLabel: System.String)

Apply the view specified by name.

<!-- !! processed by numpydoc !! -->

<a id="IModelViewManager.CaptureModelView"></a>

### IModelViewManager.CaptureModelView(index: System.Int32, mode: System.String)

Save the view specified by index as a PNG image to the project userfiles.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### IModelViewManager.CaptureModelView(viewLabel: System.String, mode: System.String)

Save the view specified as an image to the project userfiles.

<!-- !! processed by numpydoc !! -->

<a id="IModelViewManager.CreateView"></a>

### IModelViewManager.CreateView()

Create a view from current graphics with default naming.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### IModelViewManager.CreateView(viewName: System.String)

Create a view from current graphics with the specified name.

<!-- !! processed by numpydoc !! -->

<a id="IModelViewManager.DeleteView"></a>

### IModelViewManager.DeleteView(viewIndex: System.Int32)

Delete the specified view by index.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### IModelViewManager.DeleteView(viewLabel: System.String)

Apply the view specified by name.

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

<a id="id4"></a>

### IModelViewManager.RenameView(viewLabel: System.String, newLabel: System.String)

Rename the model view specified  to newLabel.

<!-- !! processed by numpydoc !! -->
