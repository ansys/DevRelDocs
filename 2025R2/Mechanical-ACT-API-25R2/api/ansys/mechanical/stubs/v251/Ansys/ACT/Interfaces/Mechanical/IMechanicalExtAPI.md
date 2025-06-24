# `IMechanicalExtAPI`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Interfaces.Mechanical.IMechanicalExtAPI"></a>

#### *class* Ansys.ACT.Interfaces.Mechanical.IMechanicalExtAPI

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Exposes the main entry point of all ATC APIs.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-------------------------------------------------------|
| [`LockPrePostLicense`](#IMechanicalExtAPI.LockPrePostLicense)     | Locks the license used by the PRE/POST application.   |
| [`UnlockPrePostLicense`](#IMechanicalExtAPI.UnlockPrePostLicense) | R                                                     |

<a id="method-detail"></a>

## Method detail

<a id="IMechanicalExtAPI.LockPrePostLicense"></a>

### IMechanicalExtAPI.LockPrePostLicense()

Locks the license used by the PRE/POST application.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.UnlockPrePostLicense"></a>

### IMechanicalExtAPI.UnlockPrePostLicense()

```text
R
    Unlocks the license used by the PRE/POST application. This is required if you want to manually launch the Ansys solver.
    You must relock the license after its use. If you don't relock the license, the PRE/POST application will be in read-only mode.
```

<!-- !! processed by numpydoc !! -->

