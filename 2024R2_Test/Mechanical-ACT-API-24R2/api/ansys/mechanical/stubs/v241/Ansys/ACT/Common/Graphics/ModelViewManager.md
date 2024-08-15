# `ModelViewManager`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Common.Graphics.ModelViewManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

ModelViewManager class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------|--------------------------------------------------------------|
| `CreateView`        | Create a view from current graphics with default naming.     |
| `CreateView`        | Create a view from current graphics with the specified name. |
| `RenameView`        | Rename the model view specified by viewIndex to newLabel.    |
| `RenameView`        | Rename the model view specified  to newLabel.                |
| `DeleteView`        | Delete the specified view by name.                           |
| `DeleteView`        | Delete the specified view by index.                          |
| `ApplyModelView`    | Apply the view specified by index.                           |
| `ApplyModelView`    | Apply the view specified by name.                            |
| `ImportModelViews`  | Import model views from the specified file.                  |
| `ExportModelViews`  | Export model views to the specified file.                    |
| `SetViewPorts`      | Set the number of viewports displayed.                       |
| `SetActiveViewPort` | Set the active of viewport.                                  |
| `SetActiveViewPort` | Active a viewport.                                           |

### Properties

| Name | Description |
|-------------------|------------------------------------------|
| `NumberOfViews`   | The number of views currently defined.   |
| `ActiveViewPort`  | ActiveViewPort property.                 |

<a id="property-detail"></a>

## Property detail

### *property* ModelViewManager.NumberOfViews *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of views currently defined.

<!-- !! processed by numpydoc !! -->

### *property* ModelViewManager.ActiveViewPort *: Ansys.ACT.Common.Graphics.MechanicalViewPort | [None](https://docs.python.org/3/library/constants.html#None)*

ActiveViewPort property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

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

