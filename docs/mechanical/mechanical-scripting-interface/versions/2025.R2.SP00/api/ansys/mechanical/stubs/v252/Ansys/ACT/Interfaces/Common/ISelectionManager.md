# `ISelectionManager`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionManager"></a>

#### *class* Ansys.ACT.Interfaces.Common.ISelectionManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a selection manager.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|--------------------------------------------------------|
| [`AddSelection`](#ISelectionManager.AddSelection)               | Adds a new selection to the current selection.         |
| [`ClearSelection`](#ISelectionManager.ClearSelection)           | Clears the current selection.                          |
| [`CreateSelectionInfo`](#ISelectionManager.CreateSelectionInfo) | Creates a new selection information based on its type. |
| [`NewSelection`](#ISelectionManager.NewSelection)               | Creates a new selection.                               |

### Properties

| Name | Description |
|-------------------------------------------------------------|-------------------------------|
| [`CurrentSelection`](#ISelectionManager.CurrentSelection)   | Gets the current selection.   |

<a id="property-detail"></a>

## Property detail

<a id="ISelectionManager.CurrentSelection"></a>

### *property* ISelectionManager.CurrentSelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current selection.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ISelectionManager.AddSelection"></a>

### ISelectionManager.AddSelection(info: [Ansys.ACT.Interfaces.Common.ISelectionInfo](ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo)) → [None](https://docs.python.org/3/library/constants.html#None)

Adds a new selection to the current selection.

<!-- !! processed by numpydoc !! -->

<a id="ISelectionManager.ClearSelection"></a>

### ISelectionManager.ClearSelection() → [None](https://docs.python.org/3/library/constants.html#None)

Clears the current selection.

<!-- !! processed by numpydoc !! -->

<a id="ISelectionManager.CreateSelectionInfo"></a>

### ISelectionManager.CreateSelectionInfo(selectionType: [Ansys.ACT.Interfaces.Common.SelectionTypeEnum](SelectionTypeEnum.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.SelectionTypeEnum)) → [Ansys.ACT.Interfaces.Common.ISelectionInfo](ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo)

Creates a new selection information based on its type.

<!-- !! processed by numpydoc !! -->

<a id="ISelectionManager.NewSelection"></a>

### ISelectionManager.NewSelection(info: [Ansys.ACT.Interfaces.Common.ISelectionInfo](ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo)) → [None](https://docs.python.org/3/library/constants.html#None)

Creates a new selection.

<!-- !! processed by numpydoc !! -->

