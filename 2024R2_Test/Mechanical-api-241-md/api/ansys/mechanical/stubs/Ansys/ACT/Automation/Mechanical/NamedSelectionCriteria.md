<a id="namedselectioncriteria"></a>

# NamedSelectionCriteria

<a id="NamedSelectionCriteria"></a>

### *class* NamedSelectionCriteria

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A collection of named selection criteria.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`Add`](#NamedSelectionCriteria.Add)           | Adds the given criterion to the collection.                                                                          |
|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [`Clear`](#NamedSelectionCriteria.Clear)       | Clears the collection.                                                                                               |
| [`Contains`](#NamedSelectionCriteria.Contains) | Returns whether the collection contains the given criterion.                                                         |
| [`IndexOf`](#NamedSelectionCriteria.IndexOf)   | Returns the index of the given criterion if it exists in the collection.  Returns -1 if it does not                  |
| [`Insert`](#NamedSelectionCriteria.Insert)     | Inserts the given criterion into the collection at the given index.                                                  |
| [`Remove`](#NamedSelectionCriteria.Remove)     | Removes the given criterion from the collection if it exists in the collection.  Throws an exception if it does not. |
| [`RemoveAt`](#NamedSelectionCriteria.RemoveAt) | Removes the criterion at the given index.  Throws an exception if the given index is not valid.                      |

### Properties

| [`Count`](#NamedSelectionCriteria.Count)   | The number of criteria in the collection.   |
|--------------------------------------------|---------------------------------------------|
| [`Item`](#NamedSelectionCriteria.Item)     | Item property.                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import NamedSelectionCriteria
```

<a id="property-detail"></a>

## Property detail

<a id="NamedSelectionCriteria.Count"></a>

### *property* NamedSelectionCriteria.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of criteria in the collection.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.Item"></a>

### *property* NamedSelectionCriteria.Item *: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#NamedSelectionCriterion) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NamedSelectionCriteria.Add"></a>

### NamedSelectionCriteria.Add(criterion: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#NamedSelectionCriterion))

Adds the given criterion to the collection.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.Clear"></a>

### NamedSelectionCriteria.Clear()

Clears the collection.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.Contains"></a>

### NamedSelectionCriteria.Contains(criterion: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#NamedSelectionCriterion))

Returns whether the collection contains the given criterion.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.IndexOf"></a>

### NamedSelectionCriteria.IndexOf(criterion: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#NamedSelectionCriterion))

Returns the index of the given criterion if it exists in the collection.  Returns -1 if it does not

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.Insert"></a>

### NamedSelectionCriteria.Insert(index: System.Int32, criterion: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#NamedSelectionCriterion))

Inserts the given criterion into the collection at the given index.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.Remove"></a>

### NamedSelectionCriteria.Remove(criterion: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#NamedSelectionCriterion))

Removes the given criterion from the collection if it exists in the collection.  Throws an exception if it does not.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.RemoveAt"></a>

### NamedSelectionCriteria.RemoveAt(index: System.Int32)

Removes the criterion at the given index.  Throws an exception if the given index is not valid.

<!-- !! processed by numpydoc !! -->
