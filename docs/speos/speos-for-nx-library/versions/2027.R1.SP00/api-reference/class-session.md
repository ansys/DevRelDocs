# Session

## Description

Represents the Speos For NX session.

## Member Summary

| Member | Type |
| --- | --- |
| [Session](#session) | public |
| [NXSessionTag](#nxsessiontag) | public |
| [Parts](#parts) | public |
| [InitCrashHandler](#initcrashhandler) | public |

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
