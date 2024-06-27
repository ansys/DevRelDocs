# CompositeCriterionDefinition

<a id="CompositeCriterionDefinition"></a>

### *class* CompositeCriterionDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> CompositeCriterionDefinition class.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Add`](#CompositeCriterionDefinition.Add)           | Adds a CompositeCriterionTerm at the end in the definition.                          |
| [`Clear`](#CompositeCriterionDefinition.Clear)       | Clears all the CompositeCriterionTerms in the definition.                            |
| [`IndexOf`](#CompositeCriterionDefinition.IndexOf)   | Gives the index where the specified CompositeCriterionTerm exists in the definition. |
| [`Insert`](#CompositeCriterionDefinition.Insert)     | Inserts a CompositeCriterionTerm at a specified index in the definition.             |
| [`RemoveAt`](#CompositeCriterionDefinition.RemoveAt) | Removes the CompositeCriterionTerm at a specified index in the definition.           |

### Properties

| Name | Description |
|------------------------------------------------|----------------------------------------------------------------|
| [`Item`](#CompositeCriterionDefinition.Item)   | Item property.                                                 |
| [`Count`](#CompositeCriterionDefinition.Count) | Gives the number of CompositeCriterionTerms in the definition. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CompositeCriterionDefinition
```

<a id="property-detail"></a>

## Property detail

<a id="CompositeCriterionDefinition.Item"></a>

### *property* CompositeCriterionDefinition.Item *: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#CompositeCriterionTerm) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.Count"></a>

### *property* CompositeCriterionDefinition.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gives the number of CompositeCriterionTerms in the definition.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeCriterionDefinition.Add"></a>

### CompositeCriterionDefinition.Add(item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#CompositeCriterionTerm))

Adds a CompositeCriterionTerm at the end in the definition.
Usage:

> CriterionDefinition.Add(Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm(primCritObj, 1.3))
<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.Clear"></a>

### CompositeCriterionDefinition.Clear()

Clears all the CompositeCriterionTerms in the definition.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.IndexOf"></a>

### CompositeCriterionDefinition.IndexOf(item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#CompositeCriterionTerm))

Gives the index where the specified CompositeCriterionTerm exists in the definition.
Returns -1 if the term is not found in the definition.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.Insert"></a>

### CompositeCriterionDefinition.Insert(index: System.Int32, item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#CompositeCriterionTerm))

Inserts a CompositeCriterionTerm at a specified index in the definition.
Returns IndexOutOfRangeException for invalid index.
Usage:

> CriterionDefinition.Insert(1, Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm(primCritObj, 1.3))
<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.RemoveAt"></a>

### CompositeCriterionDefinition.RemoveAt(index: System.Int32)

Removes the CompositeCriterionTerm at a specified index in the definition.
Returns IndexOutOfRangeException for invalid index.

<!-- !! processed by numpydoc !! -->
