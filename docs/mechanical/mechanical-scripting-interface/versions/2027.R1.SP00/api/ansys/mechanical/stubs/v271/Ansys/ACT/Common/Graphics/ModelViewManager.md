# `ModelViewManager`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.ModelViewManager"></a>

#### *class* Ansys.ACT.Common.Graphics.ModelViewManager(wrapper: [Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper](MechanicalGraphicsWrapper.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper), graphics: Ansys.Common.Interop.Gfx.IDSGraphics)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`ApplyModelView`](#ModelViewManager.ApplyModelView)         | Apply the view specified by index.                                                 |
| [`Capture3DImage`](#ModelViewManager.Capture3DImage)         | Exports the active object to a 3d AVZ file.                                        |
| [`CaptureModelView`](#ModelViewManager.CaptureModelView)     | Save the view specified by index as an image to the project userfiles.             |
| [`CaptureObjectImage`](#ModelViewManager.CaptureObjectImage) | Save the object specified as an image. The image have the same name as the object. |
| [`CreateView`](#ModelViewManager.CreateView)                 | Create a view from current graphics with default naming.                           |
| [`DeleteView`](#ModelViewManager.DeleteView)                 | Delete the specified view by name.                                                 |
| [`ExportModelViews`](#ModelViewManager.ExportModelViews)     | Export model views to the specified file.                                          |
| [`GetViewPortSize`](#ModelViewManager.GetViewPortSize)       | Returns the width and height of the specified viewport.                            |
| [`GetViewPorts`](#ModelViewManager.GetViewPorts)             | Get the viewport display style.                                                    |
| [`ImportModelViews`](#ModelViewManager.ImportModelViews)     | Import model views from the specified file.                                        |
| [`RenameView`](#ModelViewManager.RenameView)                 | Rename the model view specified by viewIndex to newLabel.                          |
| [`RotateView`](#ModelViewManager.RotateView)                 | Rotate the current ModelView.                                                      |
| [`SetActiveViewPort`](#ModelViewManager.SetActiveViewPort)   | Set the active of viewport.                                                        |
| [`SetBackView`](#ModelViewManager.SetBackView)               | Change to Back view.                                                               |
| [`SetBottomView`](#ModelViewManager.SetBottomView)           | Change to Bottom view.                                                             |
| [`SetFitView`](#ModelViewManager.SetFitView)                 | Change to Fit view.                                                                |
| [`SetFrontView`](#ModelViewManager.SetFrontView)             | Change to Front view.                                                              |
| [`SetISOView`](#ModelViewManager.SetISOView)                 | Change to ISO view.                                                                |
| [`SetLeftView`](#ModelViewManager.SetLeftView)               | Change to Left view.                                                               |
| [`SetRightView`](#ModelViewManager.SetRightView)             | Change to Right view.                                                              |
| [`SetTopView`](#ModelViewManager.SetTopView)                 | Change to Top view.                                                                |
| [`SetViewPorts`](#ModelViewManager.SetViewPorts)             | Set the number of viewports displayed.                                             |

### Properties

| Name | Description |
|--------------------------------------------------------|----------------------------------------|
| [`ActiveViewPort`](#ModelViewManager.ActiveViewPort)   | ActiveViewPort property.               |
| [`NumberOfViews`](#ModelViewManager.NumberOfViews)     | The number of views currently defined. |

<a id="property-detail"></a>

## Property detail

<a id="ModelViewManager.ActiveViewPort"></a>

### *property* ModelViewManager.ActiveViewPort *: Ansys.ACT.Common.Graphics.MechanicalViewPort | [None](https://docs.python.org/3/builtins/constants.html#None)*

ActiveViewPort property.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.NumberOfViews"></a>

### *property* ModelViewManager.NumberOfViews *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The number of views currently defined.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ModelViewManager.ApplyModelView"></a>

### ModelViewManager.ApplyModelView(viewIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ModelViewManager.ApplyModelView(viewLabel: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Apply the view specified by index.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.Capture3DImage"></a>

### ModelViewManager.Capture3DImage(avzfilepath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Exports the active object to a 3d AVZ file.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.CaptureModelView"></a>

### ModelViewManager.CaptureModelView(index: [int](https://docs.python.org/3/builtins/functions.html#int), mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ModelViewManager.CaptureModelView(viewLabel: [str](https://docs.python.org/3/builtins/stdtypes.html#str), mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ModelViewManager.CaptureModelView(viewLabel: [str](https://docs.python.org/3/builtins/stdtypes.html#str), mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str), folder: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ModelViewManager.CaptureModelView(index: [int](https://docs.python.org/3/builtins/functions.html#int), mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str), folder: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Save the view specified by index as an image to the project userfiles.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.CaptureObjectImage"></a>

### ModelViewManager.CaptureObjectImage(obj: Ansys.ACT.Automation.Mechanical.DataModelObject, mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str), folder: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Save the object specified as an image. The image have the same name as the object.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.CreateView"></a>

### ModelViewManager.CreateView() → [None](https://docs.python.org/3/builtins/constants.html#None)

### ModelViewManager.CreateView(viewName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Create a view from current graphics with default naming.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.DeleteView"></a>

### ModelViewManager.DeleteView(viewLabel: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ModelViewManager.DeleteView(viewIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Delete the specified view by name.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.ExportModelViews"></a>

### ModelViewManager.ExportModelViews(viewfilepath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export model views to the specified file.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.GetViewPortSize"></a>

### ModelViewManager.GetViewPortSize(viewportIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[int](https://docs.python.org/3/builtins/functions.html#int), [int](https://docs.python.org/3/builtins/functions.html#int)]

Returns the width and height of the specified viewport.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.GetViewPorts"></a>

### ModelViewManager.GetViewPorts() → Ansys.Mechanical.DataModel.Enums.ViewportLayoutStyle

Get the viewport display style.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.ImportModelViews"></a>

### ModelViewManager.ImportModelViews(viewfilepath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Import model views from the specified file.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.RenameView"></a>

### ModelViewManager.RenameView(viewIndex: [int](https://docs.python.org/3/builtins/functions.html#int), newLabel: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ModelViewManager.RenameView(viewLabel: [str](https://docs.python.org/3/builtins/stdtypes.html#str), newLabel: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Rename the model view specified by viewIndex to newLabel.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.RotateView"></a>

### ModelViewManager.RotateView(angle: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Rotate the current ModelView.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetActiveViewPort"></a>

### ModelViewManager.SetActiveViewPort(winRowIndex: [int](https://docs.python.org/3/builtins/functions.html#int), winColIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ModelViewManager.SetActiveViewPort(windowsId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set the active of viewport.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetBackView"></a>

### ModelViewManager.SetBackView() → [None](https://docs.python.org/3/builtins/constants.html#None)

Change to Back view.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetBottomView"></a>

### ModelViewManager.SetBottomView() → [None](https://docs.python.org/3/builtins/constants.html#None)

Change to Bottom view.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetFitView"></a>

### ModelViewManager.SetFitView() → [None](https://docs.python.org/3/builtins/constants.html#None)

Change to Fit view.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetFrontView"></a>

### ModelViewManager.SetFrontView() → [None](https://docs.python.org/3/builtins/constants.html#None)

Change to Front view.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetISOView"></a>

### ModelViewManager.SetISOView() → [None](https://docs.python.org/3/builtins/constants.html#None)

Change to ISO view.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetLeftView"></a>

### ModelViewManager.SetLeftView() → [None](https://docs.python.org/3/builtins/constants.html#None)

Change to Left view.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetRightView"></a>

### ModelViewManager.SetRightView() → [None](https://docs.python.org/3/builtins/constants.html#None)

Change to Right view.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetTopView"></a>

### ModelViewManager.SetTopView() → [None](https://docs.python.org/3/builtins/constants.html#None)

Change to Top view.

<!-- !! processed by numpydoc !! -->

<a id="ModelViewManager.SetViewPorts"></a>

### ModelViewManager.SetViewPorts(numViewPorts: [int](https://docs.python.org/3/builtins/functions.html#int), horizontal: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ModelViewManager.SetViewPorts(layout: Ansys.Mechanical.DataModel.Enums.ViewportLayoutStyle) → [None](https://docs.python.org/3/builtins/constants.html#None)

Set the number of viewports displayed.

<!-- !! processed by numpydoc !! -->

