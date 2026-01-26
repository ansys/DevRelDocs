---
uid: class_speos_n_x__2512_1_1_folder_builder
title: FolderBuilder
---

# FolderBuilder Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `FeatureBuilder`

Represents a Folder Builder.

## Description

The Folder Builder creates or edits Folder features. 



To create a new instance of this class, use FeatureCollection.CreateFolderBuilder.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Category` | `str` | Gets or sets the category type of the folder. |
| `Features` | `str` | Gets or sets features belonging to this folder. |

## Methods

### Remove

```python
Remove(self, *args) -> 'None'
```

Removes the specified feature object from the folder.

The specified feature object must be a member of the folder to be removed from it. 
**Parameters:**
- `feature`: the feature object.

**Parameters:**

- `args` (*)

### Add

```python
Add(self, feature) -> 'bool'
```

Adds the specified feature object into the folder.

**Parameters:**
- `feature`: the feature object.


**Returns:** True if successfully added into the folder; Otherwise, returns False.

**Parameters:**

- `feature` (feature)

### Insert

```python
Insert(self, feature, after=None) -> 'bool'
```

Inserts the specified feature object into the folder after another specified feature.

**Parameters:**
- `feature`: the feature object to add.
- `after`: a feature object after which the feature object should be insert.


**Returns:** True if successfully inserted into the folder; Otherwise, returns False.

**Parameters:**

- `feature` (feature)
- `after` (after)

### IsCompatible

```python
IsCompatible(self, feature) -> 'bool'
```

Checks if the specified feature object is compatible with this folder.

**Parameters:**
- `feature`: the feature object.


**Returns:** True if the specified feature object is compatible with this folder; Otherwise, returns False.

**Parameters:**

- `feature` (feature)
