---
uid: class_speos_n_x__2512_1_1_feature_builder
title: FeatureBuilder
---

# FeatureBuilder Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `Builder`

A base class for all feature Builders.

## Description

A Builder is an object that is used to create and edit Features.


This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.


This is an abstract class, and cannot be instantiated.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Feature` | `str` | Returns the feature being edited, or the created feature if the builder is being used in creation mode. |
| `FullName` | `str` | Gets the full name of the feature being edited. |
| `Name` | `str` | Gets or sets the name of the feature being edited. |
| `NameWithContext` | `str` | Gets the name with context of the feature being edited. |
| `Status` | `str` | Returns the status of the feature being edited. |

## Methods

### ShowResult

```python
ShowResult(self) -> 'None'
```

Updates the feature to reflect the result of an edit to the feature for all builders that support showing results.


