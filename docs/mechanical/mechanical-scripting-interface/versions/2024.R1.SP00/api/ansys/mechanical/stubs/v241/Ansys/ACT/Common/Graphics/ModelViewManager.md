# `ModelViewManager`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Common.Graphics.ModelViewManager"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Common.Graphics.ModelViewManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

ModelViewManager class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------|--------------------------------------------------------------|
| [`CreateView`](#id0)                                     | Create a view from current graphics with default naming.     |
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

| Name | Description |
|------------------------------------------------------|------------------------------------------|
| [`NumberOfViews`](#ModelViewManager.NumberOfViews)   | The number of views currently defined.   |
| [`ActiveViewPort`](#ModelViewManager.ActiveViewPort) | ActiveViewPort property.                 |

<a id="property-detail"></a>

## Property detail

<a id="ModelViewManager.NumberOfViews"></a>

### *property* ModelViewManager.NumberOfViews *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of views currently defined.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.ActiveViewPort"></a>

### *property* ModelViewManager.ActiveViewPort *: Ansys.ACT.Common.Graphics.MechanicalViewPort | [None](https://docs.python.org/3/library/constants.html#None)*

ActiveViewPort property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ModelViewManager.CreateView"></a>

### ModelViewManager.CreateView()

Create a view from current graphics with default naming.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### ModelViewManager.CreateView(viewName: System.String)

Create a view from current graphics with the specified name.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.RenameView"></a>

### ModelViewManager.RenameView(viewIndex: System.Int32, newLabel: System.String)

Rename the model view specified by viewIndex to newLabel.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ModelViewManager.RenameView(viewLabel: System.String, newLabel: System.String)

Rename the model view specified  to newLabel.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.DeleteView"></a>

### ModelViewManager.DeleteView(viewLabel: System.String)

Delete the specified view by name.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### ModelViewManager.DeleteView(viewIndex: System.Int32)

Delete the specified view by index.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.ApplyModelView"></a>

### ModelViewManager.ApplyModelView(viewIndex: System.Int32)

Apply the view specified by index.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### ModelViewManager.ApplyModelView(viewLabel: System.String)

Apply the view specified by name.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.ImportModelViews"></a>

### ModelViewManager.ImportModelViews(viewfilepath: System.String)

Import model views from the specified file.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.ExportModelViews"></a>

### ModelViewManager.ExportModelViews(viewfilepath: System.String)

Export model views to the specified file.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetViewPorts"></a>

### ModelViewManager.SetViewPorts(numViewPorts: System.Int32, horizontal: System.Boolean)

Set the number of viewports displayed.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetActiveViewPort"></a>

### ModelViewManager.SetActiveViewPort(winRowIndex: System.Int32, winColIndex: System.Int32)

Set the active of viewport.

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

### ModelViewManager.SetActiveViewPort(windowsId: System.Int32)

Active a viewport.

<!-- !! processed by numpydoc !! -->

