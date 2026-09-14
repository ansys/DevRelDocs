# Session

## Description

Represents the Speos For NX session.

To obtain an instance of this class, refer to Session::GetSession().

## Member Summary

| Member | Type | Description |
| --- | --- | --- |
| [Session](#session) | public | Gets the unique instance of the Speos For NX session. |
| [NXSessionTag](#nxsessiontag) | public | Gets the NX Session Tag. |
| [Parts](#parts) | public | Gets the part collection. |
| [InitCrashHandler](#initcrashhandler) | public | Initialize a crash handler. |

## Public Static Attributes

### Session

`static CSession Session`

Gets the unique instance of the Speos For NX session.

Returns the singleton for [Session](class-session.md).

**Returns**: The Speos For NX session.

---

### NXSessionTag

`int NXSessionTag`

Gets the NX Session Tag.

Returns the Tag for the NX Session.

**Returns**: The Tag as an integer.

---

### Parts

`PartCollection Parts`

Gets the part collection.

Returns the [PartCollection](class-partcollection.md) belonging to this session.

**Returns**: The [PartCollection](class-partcollection.md).

## Public Member Functions

### InitCrashHandler

`void InitCrashHandler(self, WorkingFolder)`

Initialize a crash handler.

In case of unhandled exception, 0 divide... a dump file is generated in WorkingFolder

**Parameters**:

- `str WorkingFolder`
