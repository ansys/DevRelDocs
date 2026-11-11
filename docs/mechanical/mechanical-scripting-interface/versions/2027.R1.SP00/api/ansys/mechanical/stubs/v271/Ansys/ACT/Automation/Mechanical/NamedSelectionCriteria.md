# `NamedSelectionCriteria`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelectionCriteria"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NamedSelectionCriteria

<a id="NamedSelectionCriteria"></a>

### *class* NamedSelectionCriteria(ns: Ansys.Common.Interop.DSObjectsAuto.IDSComponentAuto)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A collection of named selection criteria.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [`Add`](#NamedSelectionCriteria.Add)                     | Adds the given criterion to the collection.                                                                          |
| [`Clear`](#NamedSelectionCriteria.Clear)                 | Clears the collection.                                                                                               |
| [`Contains`](#NamedSelectionCriteria.Contains)           | Returns whether the collection contains the given criterion.                                                         |
| [`CopyTo`](#NamedSelectionCriteria.CopyTo)               | CopyTo method.                                                                                                       |
| [`GetEnumerator`](#NamedSelectionCriteria.GetEnumerator) | GetEnumerator method.                                                                                                |
| [`IndexOf`](#NamedSelectionCriteria.IndexOf)             | Returns the index of the given criterion if it exists in the collection.  Returns -1 if it does not                  |
| [`Insert`](#NamedSelectionCriteria.Insert)               | Inserts the given criterion into the collection at the given index.                                                  |
| [`Remove`](#NamedSelectionCriteria.Remove)               | Removes the given criterion from the collection if it exists in the collection.  Throws an exception if it does not. |
| [`RemoveAt`](#NamedSelectionCriteria.RemoveAt)           | Removes the criterion at the given index.  Throws an exception if the given index is not valid.                      |

### Properties

| Name | Description |
|----------------------------------------------------|---------------------------------------------|
| [`Count`](#NamedSelectionCriteria.Count)           | The number of criteria in the collection.   |
| [`IsReadOnly`](#NamedSelectionCriteria.IsReadOnly) | IsReadOnly property.                        |
| [`Item`](#NamedSelectionCriteria.Item)             | Item property.                              |

<a id="property-detail"></a>

## Property detail

<a id="NamedSelectionCriteria.Count"></a>

### *property* NamedSelectionCriteria.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The number of criteria in the collection.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.IsReadOnly"></a>

### *property* NamedSelectionCriteria.IsReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsReadOnly property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.Item"></a>

### *property* NamedSelectionCriteria.Item *: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NamedSelectionCriteria.Add"></a>

### NamedSelectionCriteria.Add(criterion: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds the given criterion to the collection.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.Clear"></a>

### NamedSelectionCriteria.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the collection.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.Contains"></a>

### NamedSelectionCriteria.Contains(criterion: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether the collection contains the given criterion.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.CopyTo"></a>

### NamedSelectionCriteria.CopyTo(criteria: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion), index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.GetEnumerator"></a>

### NamedSelectionCriteria.GetEnumerator() → Ansys.ACT.Automation.Mechanical.CriterionEnumerator

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.IndexOf"></a>

### NamedSelectionCriteria.IndexOf(criterion: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion)) → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the index of the given criterion if it exists in the collection.  Returns -1 if it does not

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.Insert"></a>

### NamedSelectionCriteria.Insert(index: [int](https://docs.python.org/3/builtins/functions.html#int), criterion: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Inserts the given criterion into the collection at the given index.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.Remove"></a>

### NamedSelectionCriteria.Remove(criterion: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion](NamedSelectionCriterion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelectionCriterion)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Removes the given criterion from the collection if it exists in the collection.  Throws an exception if it does not.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelectionCriteria.RemoveAt"></a>

### NamedSelectionCriteria.RemoveAt(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the criterion at the given index.  Throws an exception if the given index is not valid.

<!-- !! processed by numpydoc !! -->

