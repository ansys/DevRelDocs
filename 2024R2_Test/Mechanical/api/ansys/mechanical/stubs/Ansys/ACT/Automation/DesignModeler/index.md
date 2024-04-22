# The `DesignModeler` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|--------------------------------------------------------------------|-----------------------------|
| [`FeatureManager`](FeatureManager.md#FeatureManager)               | Defines a FeatureManager.   |
| [`NamedSelection`](../Mechanical/NamedSelection.md#NamedSelection) | Defines a NamedSelection.   |
| [`Feature`](Feature.md#Feature)                                    | Defines a Feature.          |
| [`Extrusion`](Extrusion.md#Extrusion)                              | Defines a Extrusion.        |

<a id="description"></a>

## Description

DesignModeler subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="DesignModeler.FeatureManager"></a>

### *class* DesignModeler.FeatureManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FeatureManager.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|---------------------------------------------------------------|--------------------------------------------|
| [`Generate`](#DesignModeler.Generate)                         | Generates non-generated features if any.   |
| [`CreateNamedSelection`](#DesignModeler.CreateNamedSelection) | Creates a new NamedSelection feature.      |

### Properties

| Name | Summary |
|-----------------------------------|--------------------------------|
| [`Count`](#DesignModeler.Count)   | Gets the number of features.   |
| [`Item`](#DesignModeler.Item)     | Item property.                 |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.DesignModeler import FeatureManager
```

<a id="property-detail"></a>

## Property detail

<a id="DesignModeler.Count"></a>

### *property* DesignModeler.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of features.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Item"></a>

### *property* DesignModeler.Item *: [Ansys.ACT.Automation.DesignModeler.Feature](Feature.md#Feature) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DesignModeler.Generate"></a>

### DesignModeler.Generate()

Generates non-generated features if any.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.CreateNamedSelection"></a>

### DesignModeler.CreateNamedSelection()

Creates a new NamedSelection feature.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.NamedSelection"></a>

### *class* DesignModeler.NamedSelection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NamedSelection.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|---------------------------------------------------------------------|-------------------------------------------|
| [`NumGeometry`](#DesignModeler.NumGeometry)                         | Gets the NumGeometry.                     |
| [`ExportNamedSelection`](#DesignModeler.ExportNamedSelection)       | Gets or sets the ExportNamedSelection.    |
| [`IncludeInLegend`](#DesignModeler.IncludeInLegend)                 | Gets or sets the IncludeInLegend.         |
| [`PropagateNamedSelection`](#DesignModeler.PropagateNamedSelection) | Gets or sets the PropagateNamedSelection. |
| [`Name`](#id8)                                                      | Gets the name of the feature.             |
| [`Id`](#id9)                                                        | Gets the id of the feature.               |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.DesignModeler import NamedSelection
```

<a id="id2"></a>

## Property detail

<a id="DesignModeler.NumGeometry"></a>

### *property* DesignModeler.NumGeometry *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumGeometry.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.ExportNamedSelection"></a>

### *property* DesignModeler.ExportNamedSelection *: Ansys.ACT.Automation.YesNo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.IncludeInLegend"></a>

### *property* DesignModeler.IncludeInLegend *: Ansys.ACT.Automation.YesNo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeInLegend.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.PropagateNamedSelection"></a>

### *property* DesignModeler.PropagateNamedSelection *: Ansys.ACT.Automation.YesNo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PropagateNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Name"></a>

### *property* DesignModeler.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of the feature.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Id"></a>

### *property* DesignModeler.Id *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the id of the feature.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Feature"></a>

### *class* DesignModeler.Feature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Feature.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|------------------|---------------------------------|
| [`Name`](#id8)   | Gets the name of the feature.   |
| [`Id`](#id9)     | Gets the id of the feature.     |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.DesignModeler import Feature
```

<a id="id4"></a>

## Property detail

<a id="id0"></a>

### *property* DesignModeler.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of the feature.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* DesignModeler.Id *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the id of the feature.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Extrusion"></a>

### *class* DesignModeler.Extrusion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Extrusion.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|--------------------------------------------------------------------------|-------------------------------|
| [`Depth`](../../Interfaces/DesignModeler/index.md#DesignModeler.Depth)   | Gets or sets the Depth.       |
| [`Depth2`](#DesignModeler.Depth2)                                        | Gets or sets the Depth2.      |
| [`Thin1`](#DesignModeler.Thin1)                                          | Gets or sets the Thin1.       |
| [`Thin2`](#DesignModeler.Thin2)                                          | Gets or sets the Thin2.       |
| [`Walled`](../../Interfaces/DesignModeler/index.md#id34)                 | Gets or sets the Walled.      |
| [`Name`](#id8)                                                           | Gets the name of the feature. |
| [`Id`](#id9)                                                             | Gets the id of the feature.   |

<a id="id6"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.DesignModeler import Extrusion
```

<a id="id7"></a>

## Property detail

<a id="DesignModeler.Depth"></a>

### *property* DesignModeler.Depth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Depth.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Depth2"></a>

### *property* DesignModeler.Depth2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Depth2.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Thin1"></a>

### *property* DesignModeler.Thin1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thin1.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Thin2"></a>

### *property* DesignModeler.Thin2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thin2.

<!-- !! processed by numpydoc !! -->

<a id="DesignModeler.Walled"></a>

### *property* DesignModeler.Walled *: Ansys.ACT.Automation.YesNo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Walled.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* DesignModeler.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of the feature.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* DesignModeler.Id *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the id of the feature.

<!-- !! processed by numpydoc !! -->
