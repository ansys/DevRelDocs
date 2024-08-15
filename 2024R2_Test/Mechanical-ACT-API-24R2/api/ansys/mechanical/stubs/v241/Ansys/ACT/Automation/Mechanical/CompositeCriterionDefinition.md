# `CompositeCriterionDefinition`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CompositeCriterionDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

CompositeCriterionDefinition class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------|--------------------------------------------------------------------------------------|
| `Add`      | Adds a CompositeCriterionTerm at the end in the definition.                          |
| `Clear`    | Clears all the CompositeCriterionTerms in the definition.                            |
| `IndexOf`  | Gives the index where the specified CompositeCriterionTerm exists in the definition. |
| `Insert`   | Inserts a CompositeCriterionTerm at a specified index in the definition.             |
| `RemoveAt` | Removes the CompositeCriterionTerm at a specified index in the definition.           |

### Properties

| Name | Description |
|----------|----------------------------------------------------------------|
| `Item`   | Item property.                                                 |
| `Count`  | Gives the number of CompositeCriterionTerms in the definition. |

<a id="property-detail"></a>

## Property detail

### *property* CompositeCriterionDefinition.Item *: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* CompositeCriterionDefinition.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gives the number of CompositeCriterionTerms in the definition.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CompositeCriterionDefinition.Add(item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm))

```text
Adds a CompositeCriterionTerm at the end in the definition.
Usage:
    CriterionDefinition.Add(Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm(primCritObj, 1.3))
```

<!-- !! processed by numpydoc !! -->

### CompositeCriterionDefinition.Clear()

Clears all the CompositeCriterionTerms in the definition.

<!-- !! processed by numpydoc !! -->

### CompositeCriterionDefinition.IndexOf(item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm))

```text
Gives the index where the specified CompositeCriterionTerm exists in the definition.
Returns -1 if the term is not found in the definition.
```

<!-- !! processed by numpydoc !! -->

### CompositeCriterionDefinition.Insert(index: System.Int32, item: [Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm](CompositeCriterionTerm.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm))

```text
Inserts a CompositeCriterionTerm at a specified index in the definition.
Returns IndexOutOfRangeException for invalid index.
Usage:
    CriterionDefinition.Insert(1, Ansys.ACT.Automation.Mechanical.CompositeCriterionTerm(primCritObj, 1.3))
```

<!-- !! processed by numpydoc !! -->

### CompositeCriterionDefinition.RemoveAt(index: System.Int32)

```text
Removes the CompositeCriterionTerm at a specified index in the definition.
Returns IndexOutOfRangeException for invalid index.
```

<!-- !! processed by numpydoc !! -->

