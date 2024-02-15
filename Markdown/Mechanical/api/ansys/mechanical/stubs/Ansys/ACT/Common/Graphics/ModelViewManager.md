# ModelViewManager

### *class* ModelViewManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ModelViewManager class.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`CreateView`](#id0)                                     | Create a view from current graphics with default naming.     |
|----------------------------------------------------------|--------------------------------------------------------------|
| [`CreateView`](#id0)                                     | Create a view from current graphics with the specified name. |
| [`RenameView`](#id1)                                     | Rename the model view specified by viewIndex to newLabel.    |
| [`RenameView`](#id1)                                     | Rename the model view specified  to newLabel.                |
| [`DeleteView`](#id2)                                     | Delete the specified view by name.                           |
| [`DeleteView`](#id2)                                     | Delete the specified view by index.                          |
| [`ApplyModelView`](#id3)                                 | Apply the view specified by index.                           |
| [`ApplyModelView`](#id3)                                 | Apply the view specified by name.                            |
| [`ImportModelViews`](#ModelViewManager.ImportModelViews) | Import model views from the specified file.                  |
| [`ExportModelViews`](#ModelViewManager.ExportModelViews) | Export model views to the specified file.                    |
| [`SetViewPorts`](#ModelViewManager.SetViewPorts)         | Set the number of viewports displayed.                       |
| [`SetActiveViewPort`](#id4)                              | Set the active of viewport.                                  |
| [`SetActiveViewPort`](#id4)                              | Active a viewport.                                           |

### Properties

| [`NumberOfViews`](#ModelViewManager.NumberOfViews)   | The number of views currently defined.   |
|------------------------------------------------------|------------------------------------------|
| [`ActiveViewPort`](#ModelViewManager.ActiveViewPort) | ActiveViewPort property.                 |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common.Graphics import ModelViewManager
```

## Property detail

### *property* ModelViewManager.NumberOfViews *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of views currently defined.

<!-- !! processed by numpydoc !! -->

### *property* ModelViewManager.ActiveViewPort *: Ansys.ACT.Common.Graphics.MechanicalViewPort | [None](https://docs.python.org/3/library/constants.html#None)*

ActiveViewPort property.

<!-- !! processed by numpydoc !! -->

## Method detail

### ModelViewManager.CreateView()

Create a view from current graphics with default naming.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.CreateView(viewName: System.String)

Create a view from current graphics with the specified name.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.RenameView(viewIndex: System.Int32, newLabel: System.String)

Rename the model view specified by viewIndex to newLabel.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.RenameView(viewLabel: System.String, newLabel: System.String)

Rename the model view specified  to newLabel.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.DeleteView(viewLabel: System.String)

Delete the specified view by name.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.DeleteView(viewIndex: System.Int32)

Delete the specified view by index.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.ApplyModelView(viewIndex: System.Int32)

Apply the view specified by index.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.ApplyModelView(viewLabel: System.String)

Apply the view specified by name.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.ImportModelViews(viewfilepath: System.String)

Import model views from the specified file.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.ExportModelViews(viewfilepath: System.String)

Export model views to the specified file.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.SetViewPorts(numViewPorts: System.Int32, horizontal: System.Boolean)

Set the number of viewports displayed.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.SetActiveViewPort(winRowIndex: System.Int32, winColIndex: System.Int32)

Set the active of viewport.

<!-- !! processed by numpydoc !! -->

### ModelViewManager.SetActiveViewPort(windowsId: System.Int32)

Active a viewport.

<!-- !! processed by numpydoc !! -->
