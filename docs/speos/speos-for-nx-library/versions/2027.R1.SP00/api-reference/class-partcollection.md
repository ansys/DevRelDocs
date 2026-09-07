# PartCollection

## Description

Represents the collection of all parts in a Speos For NX session.  
/

## Member Summary

| Member | Type | Description |
| --- | --- | --- |
| [Load](#load) | public | Loads all open parts in the session. |
| [FindFromName](#findfromname) | public | Finds the part with the given name. **Prerequisite**: The part must have been loaded in this session. |
| [FindFromTag](#findfromtag) | public | Finds the part with the given Tag. |
| [Work](#work) | public | Returns the current work part of the session. |
| [WorkComponent](#workcomponent) | public | Returns the current work component of the session. |
| [Display](#display) | public | Returns the currently active display part of the session. |

## Public Member Functions

### Load

`void Load(self)`

Loads all open parts in the session.

---

### FindFromName

`Part FindFromName(self, name)`

Finds the part with the given name.  
  
**Prerequisite**: The part must have been loaded in this session.

**Parameters**:

- `str name`: Part name.

---

### FindFromTag

`Part FindFromTag(self, tag)`

Finds the part with the given Tag.

**Parameters**:

- `int tag`: Part tag.

## Public Static Attributes

### Work

`Part Work`

Returns the current work part of the session.

---

### WorkComponent

`Component WorkComponent`

Returns the current work component of the session.

---

### Display

`Part Display`

Returns the currently active display part of the session.
