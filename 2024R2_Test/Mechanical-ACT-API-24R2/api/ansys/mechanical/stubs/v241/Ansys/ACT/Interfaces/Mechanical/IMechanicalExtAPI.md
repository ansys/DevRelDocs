# `IMechanicalExtAPI`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Interfaces.Mechanical.IMechanicalExtAPI

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Exposes the main entry point of all ATC APIs.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [`UnlockPrePostLicense`](../../../../../v242/Ansys/ACT/Interfaces/Mechanical/IMechanicalExtAPI.md#IMechanicalExtAPI.UnlockPrePostLicense)   | R                                                   |
| [`LockPrePostLicense`](../../../../../v242/Ansys/ACT/Interfaces/Mechanical/IMechanicalExtAPI.md#IMechanicalExtAPI.LockPrePostLicense)       | Locks the license used by the PRE/POST application. |

<a id="method-detail"></a>

## Method detail

<a id="IMechanicalExtAPI.UnlockPrePostLicense"></a>

### IMechanicalExtAPI.UnlockPrePostLicense()

R
: Unlocks the license used by the PRE/POST application. This is required if you want to manually launch the Ansys solver.
  You must relock the license after its use. If you don’t relock the license, the PRE/POST application will be in read-only mode.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.LockPrePostLicense"></a>

### IMechanicalExtAPI.LockPrePostLicense()

Locks the license used by the PRE/POST application.

<!-- !! processed by numpydoc !! -->

