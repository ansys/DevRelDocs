# Session

## Description

Represents the Speos For NX session.

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

---

### NXSessionTag

`int NXSessionTag`

Gets the NX Session Tag.

Returns the Tag for the NX Session.

---

### Parts

`PartCollection Parts`

Gets the part collection.

Returns the [PartCollection](class-partcollection.md) belonging to this session.

## Public Member Functions

### InitCrashHandler

`void InitCrashHandler(self, WorkingFolder)`

Initialize a crash handler.

In case of unhandled exception, 0 divide... a dump file is generated in WorkingFolder

**Parameters**:

- `str WorkingFolder`
