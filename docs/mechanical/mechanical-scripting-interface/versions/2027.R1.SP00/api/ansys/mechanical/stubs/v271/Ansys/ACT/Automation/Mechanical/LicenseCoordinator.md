# `LicenseCoordinator`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.LicenseCoordinator"></a>

#### *class* Ansys.ACT.Automation.Mechanical.LicenseCoordinator

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A coordinator for tuning license usage in Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------|
| [`Activate`](#LicenseCoordinator.Activate)                           | Activate method.                                                |
| [`ActivateLicenses`](#LicenseCoordinator.ActivateLicenses)           | ActivateLicenses method.                                        |
| [`Cancel`](#LicenseCoordinator.Cancel)                               | Cancel method.                                                  |
| [`DeactivateLicenses`](#LicenseCoordinator.DeactivateLicenses)       | Deactivates all licenses. Mechanical will enter Read-Only Mode. |
| [`GetAllLegacyLicenses`](#LicenseCoordinator.GetAllLegacyLicenses)   | GetAllLegacyLicenses method.                                    |
| [`GetAllLicenses`](#LicenseCoordinator.GetAllLicenses)               | GetAllLicenses method.                                          |
| [`GetAllMainLicenses`](#LicenseCoordinator.GetAllMainLicenses)       | GetAllMainLicenses method.                                      |
| [`GetLicenseStatus`](#LicenseCoordinator.GetLicenseStatus)           | GetLicenseStatus method.                                        |
| [`MoveLicenseToLocation`](#LicenseCoordinator.MoveLicenseToLocation) | MoveLicenseToLocation method.                                   |
| [`Reset`](#LicenseCoordinator.Reset)                                 | Reset method.                                                   |
| [`Save`](#LicenseCoordinator.Save)                                   | Save method.                                                    |
| [`SetExistingOrder`](#LicenseCoordinator.SetExistingOrder)           | SetExistingOrder method.                                        |
| [`SetLicenseStatus`](#LicenseCoordinator.SetLicenseStatus)           | SetLicenseStatus method.                                        |

### Properties

| Name | Description |
|----------------------------------------------------------------|-----------------------------------------------|
| [`AvailableLicenses`](#LicenseCoordinator.AvailableLicenses)   | Gets a list of available licenses.            |
| [`CurrentLicenses`](#LicenseCoordinator.CurrentLicenses)       | Gets a list of the currently active licenses. |

<a id="property-detail"></a>

## Property detail

<a id="LicenseCoordinator.AvailableLicenses"></a>

### *property* LicenseCoordinator.AvailableLicenses *: Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets a list of available licenses.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.CurrentLicenses"></a>

### *property* LicenseCoordinator.CurrentLicenses *: Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets a list of the currently active licenses.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LicenseCoordinator.Activate"></a>

### LicenseCoordinator.Activate(message: [str](https://docs.python.org/3/builtins/stdtypes.html#str), existing_license_order: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)], existing_license_status: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [bool](https://docs.python.org/3/builtins/functions.html#bool)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.ActivateLicenses"></a>

### LicenseCoordinator.ActivateLicenses(licenses: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ActivateLicenses method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.Cancel"></a>

### LicenseCoordinator.Cancel() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cancel method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.DeactivateLicenses"></a>

### LicenseCoordinator.DeactivateLicenses() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Deactivates all licenses. Mechanical will enter Read-Only Mode.
Note: with no active licenses, the Mechanical session will enter Read-Only Mode.
```

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.GetAllLegacyLicenses"></a>

### LicenseCoordinator.GetAllLegacyLicenses() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetAllLegacyLicenses method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.GetAllLicenses"></a>

### LicenseCoordinator.GetAllLicenses() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetAllLicenses method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.GetAllMainLicenses"></a>

### LicenseCoordinator.GetAllMainLicenses() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetAllMainLicenses method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.GetLicenseStatus"></a>

### LicenseCoordinator.GetLicenseStatus(license_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.Mechanical.DataModel.Enums.LicenseStatus

GetLicenseStatus method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.MoveLicenseToLocation"></a>

### LicenseCoordinator.MoveLicenseToLocation(license_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), pos: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

MoveLicenseToLocation method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.Reset"></a>

### LicenseCoordinator.Reset() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reset method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.Save"></a>

### LicenseCoordinator.Save() → [None](https://docs.python.org/3/builtins/constants.html#None)

Save method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.SetExistingOrder"></a>

### LicenseCoordinator.SetExistingOrder(existing_license_order: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)], existing_license_status: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [bool](https://docs.python.org/3/builtins/functions.html#bool)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetExistingOrder method.

<!-- !! processed by numpydoc !! -->

<a id="LicenseCoordinator.SetLicenseStatus"></a>

### LicenseCoordinator.SetLicenseStatus(license_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), status: Ansys.Mechanical.DataModel.Enums.LicenseStatus) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetLicenseStatus method.

<!-- !! processed by numpydoc !! -->

