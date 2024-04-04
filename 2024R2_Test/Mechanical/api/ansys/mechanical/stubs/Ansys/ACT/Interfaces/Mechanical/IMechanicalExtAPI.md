# IMechanicalExtAPI

### *class* IMechanicalExtAPI

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Exposes the main entry point of all ATC APIs.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`UnlockPrePostLicense`](#IMechanicalExtAPI.UnlockPrePostLicense)   | R                                                   |
|---------------------------------------------------------------------|-----------------------------------------------------|
| [`LockPrePostLicense`](#IMechanicalExtAPI.LockPrePostLicense)       | Locks the license used by the PRE/POST application. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Interfaces.Mechanical import IMechanicalExtAPI
```

## Method detail

### IMechanicalExtAPI.UnlockPrePostLicense()

R
: Unlocks the license used by the PRE/POST application. This is required if you want to manually launch the Ansys solver.
  You must relock the license after its use. If you don’t relock the license, the PRE/POST application will be in read-only mode.

<!-- !! processed by numpydoc !! -->

### IMechanicalExtAPI.LockPrePostLicense()

Locks the license used by the PRE/POST application.

<!-- !! processed by numpydoc !! -->
