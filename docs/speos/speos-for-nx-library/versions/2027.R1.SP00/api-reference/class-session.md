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
| [ForceDllToNotUnload](#forcedlltonotunload) | public |

## Public Static Attributes

### Session

`static CSession Session`

Gets the unique instance of the Speos For NX session.

Returns the singleton for [Session](class-session.md).

---

### NXSessionTag

`Tag NXSessionTag`

Gets the NX Session Tag.

Returns the Tag for the NX Session.

---

### Parts

`list[Part] Parts`

Gets the part collection.

Returns the [PartCollection](class-partcollection.md) belonging to this session.

## Public Member Functions

### InitCrashHandler

`void InitCrashHandler(self, WorkingFolder)`

Initialize a crash handler.

In case of unhandled exception, 0 divide... a dump file is generated in WorkingFolder

**Parameters**:

- `str WorkingFolder`

---

### ForceDllToNotUnload

`private: void ForceDllToNotUnload(self)`

Gets the session Speos Preferences.

Returns the [Preferences](class-preferences.md) belonging to this session.
