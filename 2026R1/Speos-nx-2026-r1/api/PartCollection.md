---
uid: class_speos_n_x__2512_1_1_part_collection
title: PartCollection
---

# PartCollection Class

**Namespace:** `SpeosNX`

**Inherits from:** `object`

Represents the collection of all parts in a Speos For NX session.

## Description



## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Display` | `str` | Returns the currently active display part of the session. |
| `Work` | `str` | Returns the current work part of the session. |

## Methods

### Load

```python
Load(self) -> 'None'
```

Loads all open parts in the session.



### FindFromName

```python
FindFromName(self, name) -> '`Part`'
```

Finds the part with the given name.

**Prerequisite**: The part must have been loaded in this session. 
**Parameters:**
- `name`: : String.


**Returns:** The part with the given name.

**Parameters:**

- `name` (name)

### FindFromTag

```python
FindFromTag(self, tag) -> '`Part`'
```

Finds the part with the given Tag.

**Parameters:**
- `tag`: : Integer. The Part Tag.


**Returns:** The part with the given Tag.

**Parameters:**

- `tag` (tag)
