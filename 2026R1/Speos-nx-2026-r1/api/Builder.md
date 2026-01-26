---
uid: class_speos_n_x__2512_1_1_builder
title: Builder
---

# Builder Class

**Namespace:** `SpeosNX`

**Inherits from:** `object`

A base class for all Builders.

## Description

A Builder is an object that is used to create and edit Features.


This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.


This is an abstract class, and cannot be instantiated.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |

## Methods

### Commit

```python
Commit(self) -> 'None'
```

Commits any edits that have been applied to the builder.

Commits any edits that have been applied to the feature being edited, or a new feature if the builder is being used in creation mode.
