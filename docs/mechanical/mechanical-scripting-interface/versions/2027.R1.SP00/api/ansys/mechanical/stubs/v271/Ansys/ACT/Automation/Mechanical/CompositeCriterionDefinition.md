# `CompositeCriterionDefinition`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterionDefinition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CompositeCriterionDefinition

<a id="CompositeCriterionDefinition"></a>

### *class* CompositeCriterionDefinition(critDef: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeCriterionDefinition)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Add`](#CompositeCriterionDefinition.Add)                     | Adds a CompositeCriterionTerm at the end in the definition.                          |
| [`Clear`](#CompositeCriterionDefinition.Clear)                 | Clears all the CompositeCriterionTerms in the definition.                            |
| [`Contains`](#CompositeCriterionDefinition.Contains)           | Contains method.                                                                     |
| [`CopyTo`](#CompositeCriterionDefinition.CopyTo)               | CopyTo method.                                                                       |
| [`GetEnumerator`](#CompositeCriterionDefinition.GetEnumerator) | GetEnumerator method.                                                                |
| [`IndexOf`](#CompositeCriterionDefinition.IndexOf)             | Gives the index where the specified CompositeCriterionTerm exists in the definition. |
| [`Insert`](#CompositeCriterionDefinition.Insert)               | Inserts a CompositeCriterionTerm at a specified index in the definition.             |
| [`Remove`](#CompositeCriterionDefinition.Remove)               | Remove method.                                                                       |
| [`RemoveAt`](#CompositeCriterionDefinition.RemoveAt)           | Removes the CompositeCriterionTerm at a specified index in the definition.           |

### Properties

| Name | Description |
|----------------------------------------------------------|------------------------------------------------------------------|
| [`Count`](#CompositeCriterionDefinition.Count)           | Gives the number of CompositeCriterionTerms in the definition.   |
| [`IsReadOnly`](#CompositeCriterionDefinition.IsReadOnly) | IsReadOnly property.                                             |
| [`Item`](#CompositeCriterionDefinition.Item)             | Item property.                                                   |

<a id="property-detail"></a>

## Property detail

<a id="CompositeCriterionDefinition.Count"></a>

### *property* CompositeCriterionDefinition.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gives the number of CompositeCriterionTerms in the definition.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.IsReadOnly"></a>

### *property* CompositeCriterionDefinition.IsReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsReadOnly property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.Item"></a>

### *property* CompositeCriterionDefinition.Item *: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeCriterionDefinition.Add"></a>

### CompositeCriterionDefinition.Add(item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Adds a CompositeCriterionTerm at the end in the definition.
Usage:
    CriterionDefinition.Add(Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm(primCritObj, 1.3))
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.Clear"></a>

### CompositeCriterionDefinition.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears all the CompositeCriterionTerms in the definition.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.Contains"></a>

### CompositeCriterionDefinition.Contains(item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Contains method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.CopyTo"></a>

### CompositeCriterionDefinition.CopyTo(array: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm), arrayIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.GetEnumerator"></a>

### CompositeCriterionDefinition.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm)]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.IndexOf"></a>

### CompositeCriterionDefinition.IndexOf(item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm)) → [int](https://docs.python.org/3/builtins/functions.html#int)

```text
Gives the index where the specified CompositeCriterionTerm exists in the definition.
Returns -1 if the term is not found in the definition.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.Insert"></a>

### CompositeCriterionDefinition.Insert(index: [int](https://docs.python.org/3/builtins/functions.html#int), item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Inserts a CompositeCriterionTerm at a specified index in the definition.
Returns IndexOutOfRangeException for invalid index.
Usage:
    CriterionDefinition.Insert(1, Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm(primCritObj, 1.3))
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.Remove"></a>

### CompositeCriterionDefinition.Remove(item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Remove method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeCriterionDefinition.RemoveAt"></a>

### CompositeCriterionDefinition.RemoveAt(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Removes the CompositeCriterionTerm at a specified index in the definition.
Returns IndexOutOfRangeException for invalid index.
```

<!-- !! processed by numpydoc !! -->

