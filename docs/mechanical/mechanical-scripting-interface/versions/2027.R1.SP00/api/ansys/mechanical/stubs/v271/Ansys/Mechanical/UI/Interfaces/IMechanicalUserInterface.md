# `IMechanicalUserInterface`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.UI.Interfaces.IMechanicalUserInterface"></a>

#### *class* Ansys.Mechanical.UI.Interfaces.IMechanicalUserInterface

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|--------------------------------|
| [`GetExtensionToolbars`](#IMechanicalUserInterface.GetExtensionToolbars)   | GetExtensionToolbars method.   |

### Properties

| Name | Description |
|----------------------------------------------------------------|----------------------------------------------------------|
| [`IsBatchMode`](#IMechanicalUserInterface.IsBatchMode)         | IsBatchMode property.                                    |
| [`MainHandle`](#IMechanicalUserInterface.MainHandle)           | MainHandle property.                                     |
| [`MainWindow`](#IMechanicalUserInterface.MainWindow)           | MainWindow property.                                     |
| [`ProgressMonitor`](#IMechanicalUserInterface.ProgressMonitor) | ProgressMonitor property.                                |
| [`Theme`](#IMechanicalUserInterface.Theme)                     | Information about the current theme being in Mechanical. |
| [`Toolbars`](#IMechanicalUserInterface.Toolbars)               | Toolbars property.                                       |
| [`UIRenderer`](#IMechanicalUserInterface.UIRenderer)           | UIRenderer property.                                     |

<a id="property-detail"></a>

## Property detail

<a id="IMechanicalUserInterface.IsBatchMode"></a>

### *property* IMechanicalUserInterface.IsBatchMode *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsBatchMode property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserInterface.MainHandle"></a>

### *property* IMechanicalUserInterface.MainHandle *: System.IntPtr | [None](https://docs.python.org/3/builtins/constants.html#None)*

MainHandle property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserInterface.MainWindow"></a>

### *property* IMechanicalUserInterface.MainWindow *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

MainWindow property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserInterface.ProgressMonitor"></a>

### *property* IMechanicalUserInterface.ProgressMonitor *: Ansys.ACT.Interfaces.UserInterface.IProgressMonitor | [None](https://docs.python.org/3/builtins/constants.html#None)*

ProgressMonitor property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserInterface.Theme"></a>

### *property* IMechanicalUserInterface.Theme *: [Ansys.Mechanical.UI.Interfaces.IMechanicalTheme](IMechanicalTheme.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.UI.Interfaces.IMechanicalTheme) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Information about the current theme being in Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserInterface.Toolbars"></a>

### *property* IMechanicalUserInterface.Toolbars *: System.Collections.ObjectModel.ReadOnlyCollection[Ansys.ACT.Interfaces.UserInterface.IToolbar] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Toolbars property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserInterface.UIRenderer"></a>

### *property* IMechanicalUserInterface.UIRenderer *: Ansys.ACT.Interfaces.UserInterface.IRenderer | [None](https://docs.python.org/3/builtins/constants.html#None)*

UIRenderer property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IMechanicalUserInterface.GetExtensionToolbars"></a>

### IMechanicalUserInterface.GetExtensionToolbars(extension: [Ansys.ACT.Interfaces.Common.IExtension](../../../ACT/Interfaces/Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension)) → Ansys.ACT.Interfaces.UserInterface.INamedCollection[Ansys.ACT.Interfaces.UserInterface.IToolbar]

GetExtensionToolbars method.

<!-- !! processed by numpydoc !! -->

