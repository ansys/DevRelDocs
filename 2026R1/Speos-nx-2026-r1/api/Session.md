---
uid: class_speos_n_x__2512_1_1_session
title: Session
---

# Session Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `object`

Represents the Speos For NX session.

## Description

To obtain an instance of this class, refer to `Session::GetSession()`.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `NXSessionTag` | `str` | Gets the NX Session Tag. |
| `Parts` | `str` | Gets the part collection. |

## Methods

### GetSession

```python
GetSession() -> '`Session`'
```

Gets the unique instance of the Speos For NX session.

Returns the singleton for `Session`. 
**Returns:** The Speos For NX session.

### Preferences

```python
Preferences(self) -> '`Preferences`'
```

Gets the session Speos Preferences.

Returns the `Preferences` belonging to this session. 
**Returns:** The `Preferences`.
