

# RADomainSettings

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RADomainSettings"></a>

### *class* RADomainSettings

Rocky PrePost Scripting wrapper for Domain Setings properties.

This wrapper corresponds to the “Domain Settings” item on a project’s data tree. Access it from
the [`RAStudy`](RAStudy.md#generated.RAStudy) with:

```python
domain_settings = study.GetDomainSettings()
```

**Methods:**

| [`DisablePeriodicAtGeometryLimits`](#generated.RADomainSettings.DisablePeriodicAtGeometryLimits)()                         | Set the value of "Periodic At Geometry Limits" to False.                 |
|----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`DisableUseBoundaryLimits`](#generated.RADomainSettings.DisableUseBoundaryLimits)()                                       | Set the value of "Use Boundary Limits" to False.                         |
| [`EnablePeriodicAtGeometryLimits`](#generated.RADomainSettings.EnablePeriodicAtGeometryLimits)()                           | Set the value of "Periodic At Geometry Limits" to True.                  |
| [`EnableUseBoundaryLimits`](#generated.RADomainSettings.EnableUseBoundaryLimits)()                                         | Set the value of "Use Boundary Limits" to True.                          |
| [`GetBoundariesDirections`](#generated.RADomainSettings.GetBoundariesDirections)()                                         | Deprecated: use GetCartesianPeriodicDirections() instead.                |
| [`GetCartesianPeriodicDirections`](#generated.RADomainSettings.GetCartesianPeriodicDirections)()                           | Get "Cartesian Periodic Directions" as a string.                         |
| [`GetCoordinateLimitsMaxValues`](#generated.RADomainSettings.GetCoordinateLimitsMaxValues)([unit])                         | Get the value of "Coordinate Limits Max Values".                         |
| [`GetCoordinateLimitsMinValues`](#generated.RADomainSettings.GetCoordinateLimitsMinValues)([unit])                         | Get the value of "Coordinate Limits Min Values".                         |
| [`GetCylindricalPeriodicDirections`](#generated.RADomainSettings.GetCylindricalPeriodicDirections)()                       | Get "Cylindrical Periodic Directions" as a string.                       |
| [`GetDomainType`](#generated.RADomainSettings.GetDomainType)()                                                             | Get "Domain Type" as a string.                                           |
| [`GetInitialAngle`](#generated.RADomainSettings.GetInitialAngle)([unit])                                                   | Get the value of "Initial Angle".                                        |
| [`GetNumberOfDivisions`](#generated.RADomainSettings.GetNumberOfDivisions)()                                               | Get the value of "Number of Divisions".                                  |
| [`GetPeriodicAtGeometryLimits`](#generated.RADomainSettings.GetPeriodicAtGeometryLimits)()                                 | Get the value of "Periodic At Geometry Limits".                          |
| [`GetPeriodicLimitsMaxCoordinates`](#generated.RADomainSettings.GetPeriodicLimitsMaxCoordinates)([unit])                   | Get the value of "Periodic Limits Max Coordinates".                      |
| [`GetPeriodicLimitsMinCoordinates`](#generated.RADomainSettings.GetPeriodicLimitsMinCoordinates)([unit])                   | Get the value of "Periodic Limits Min Coordinates".                      |
| [`GetUseBoundaryLimits`](#generated.RADomainSettings.GetUseBoundaryLimits)()                                               | Get the value of "Use Boundary Limits".                                  |
| [`GetValidBoundariesDirectionsValues`](#generated.RADomainSettings.GetValidBoundariesDirectionsValues)()                   | Deprecated: use GetValidPeriodicDirectionsValues() instead.              |
| [`GetValidCartesianPeriodicDirectionsValues`](#generated.RADomainSettings.GetValidCartesianPeriodicDirectionsValues)()     | Get a list of all possible values for "Cartesian Periodic Directions".   |
| [`GetValidCylindricalPeriodicDirectionsValues`](#generated.RADomainSettings.GetValidCylindricalPeriodicDirectionsValues)() | Get a list of all possible values for "Cylindrical Periodic Directions". |
| [`GetValidDomainTypeValues`](#generated.RADomainSettings.GetValidDomainTypeValues)()                                       | Get a list of all possible values for "Domain Type".                     |
| [`IsPeriodicAtGeometryLimitsEnabled`](#generated.RADomainSettings.IsPeriodicAtGeometryLimitsEnabled)()                     | Check if the "Periodic At Geometry Limits" is enabled.                   |
| [`IsUseBoundaryLimitsEnabled`](#generated.RADomainSettings.IsUseBoundaryLimitsEnabled)()                                   | Check if the "Use Boundary Limits" is enabled.                           |
| [`SetBoundariesDirections`](#generated.RADomainSettings.SetBoundariesDirections)(value)                                    | Deprecated: use SetCartesianPeriodicDirections(value) instead.           |
| [`SetCartesianPeriodicDirections`](#generated.RADomainSettings.SetCartesianPeriodicDirections)(value)                      | Set the value of "Cartesian Periodic Directions".                        |
| [`SetCoordinateLimitsMaxValues`](#generated.RADomainSettings.SetCoordinateLimitsMaxValues)(values[, unit])                 | Set the values of "Coordinate Limits Max Values".                        |
| [`SetCoordinateLimitsMinValues`](#generated.RADomainSettings.SetCoordinateLimitsMinValues)(values[, unit])                 | Set the values of "Coordinate Limits Min Values".                        |
| [`SetCylindricalPeriodicDirections`](#generated.RADomainSettings.SetCylindricalPeriodicDirections)(value)                  | Set the value of "Cylindrical Periodic Directions".                      |
| [`SetDomainType`](#generated.RADomainSettings.SetDomainType)(value)                                                        | Set the value of "Domain Type".                                          |
| [`SetInitialAngle`](#generated.RADomainSettings.SetInitialAngle)(value[, unit])                                            | Set the value of "Initial Angle".                                        |
| [`SetNumberOfDivisions`](#generated.RADomainSettings.SetNumberOfDivisions)(value)                                          | Set the value of "Number of Divisions".                                  |
| [`SetPeriodicAtGeometryLimits`](#generated.RADomainSettings.SetPeriodicAtGeometryLimits)(value)                            | Set the value of "Periodic At Geometry Limits".                          |
| [`SetPeriodicLimitsMaxCoordinates`](#generated.RADomainSettings.SetPeriodicLimitsMaxCoordinates)(values[, unit])           | Set the values of "Periodic Limits Max Coordinates".                     |
| [`SetPeriodicLimitsMinCoordinates`](#generated.RADomainSettings.SetPeriodicLimitsMinCoordinates)(values[, unit])           | Set the values of "Periodic Limits Min Coordinates".                     |
| [`SetUseBoundaryLimits`](#generated.RADomainSettings.SetUseBoundaryLimits)(value)                                          | Set the value of "Use Boundary Limits".                                  |

<a id="generated.RADomainSettings.DisablePeriodicAtGeometryLimits"></a>

#### DisablePeriodicAtGeometryLimits()

Set the value of “Periodic At Geometry Limits” to False.

<a id="generated.RADomainSettings.DisableUseBoundaryLimits"></a>

#### DisableUseBoundaryLimits()

Set the value of “Use Boundary Limits” to False.

<a id="generated.RADomainSettings.EnablePeriodicAtGeometryLimits"></a>

#### EnablePeriodicAtGeometryLimits()

Set the value of “Periodic At Geometry Limits” to True.

<a id="generated.RADomainSettings.EnableUseBoundaryLimits"></a>

#### EnableUseBoundaryLimits()

Set the value of “Use Boundary Limits” to True.

<a id="generated.RADomainSettings.GetBoundariesDirections"></a>

#### GetBoundariesDirections()

Deprecated: use GetCartesianPeriodicDirections() instead.

<a id="generated.RADomainSettings.GetCartesianPeriodicDirections"></a>

#### GetCartesianPeriodicDirections()

Get “Cartesian Periodic Directions” as a string.

* **Returns:**
  The returned value will be one of [‘NONE’, ‘X’, ‘Y’, ‘XY’, ‘Z’, ‘XZ’, ‘YZ’, ‘XYZ’].

<a id="generated.RADomainSettings.GetCoordinateLimitsMaxValues"></a>

#### GetCoordinateLimitsMaxValues(unit: str | None = None)

Get the value of “Coordinate Limits Max Values”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RADomainSettings.GetCoordinateLimitsMinValues"></a>

#### GetCoordinateLimitsMinValues(unit: str | None = None)

Get the value of “Coordinate Limits Min Values”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RADomainSettings.GetCylindricalPeriodicDirections"></a>

#### GetCylindricalPeriodicDirections()

Get “Cylindrical Periodic Directions” as a string.

* **Returns:**
  The returned value will be one of [‘X’, ‘Y’, ‘Z’].

<a id="generated.RADomainSettings.GetDomainType"></a>

#### GetDomainType()

Get “Domain Type” as a string.

* **Returns:**
  The returned value will be one of [‘NONE’, ‘CARTESIAN’, ‘CYLINDRICAL’].

<a id="generated.RADomainSettings.GetInitialAngle"></a>

#### GetInitialAngle(unit: str | None = None)

Get the value of “Initial Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

<a id="generated.RADomainSettings.GetNumberOfDivisions"></a>

#### GetNumberOfDivisions()

Get the value of “Number of Divisions”.

<a id="generated.RADomainSettings.GetPeriodicAtGeometryLimits"></a>

#### GetPeriodicAtGeometryLimits()

Get the value of “Periodic At Geometry Limits”.

<a id="generated.RADomainSettings.GetPeriodicLimitsMaxCoordinates"></a>

#### GetPeriodicLimitsMaxCoordinates(unit: str | None = None)

Get the value of “Periodic Limits Max Coordinates”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RADomainSettings.GetPeriodicLimitsMinCoordinates"></a>

#### GetPeriodicLimitsMinCoordinates(unit: str | None = None)

Get the value of “Periodic Limits Min Coordinates”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RADomainSettings.GetUseBoundaryLimits"></a>

#### GetUseBoundaryLimits()

Get the value of “Use Boundary Limits”.

<a id="generated.RADomainSettings.GetValidBoundariesDirectionsValues"></a>

#### GetValidBoundariesDirectionsValues()

Deprecated: use GetValidPeriodicDirectionsValues() instead.

<a id="generated.RADomainSettings.GetValidCartesianPeriodicDirectionsValues"></a>

#### GetValidCartesianPeriodicDirectionsValues()

Get a list of all possible values for “Cartesian Periodic Directions”.

* **Returns:**
  The returned list is [‘NONE’, ‘X’, ‘Y’, ‘XY’, ‘Z’, ‘XZ’, ‘YZ’, ‘XYZ’].

<a id="generated.RADomainSettings.GetValidCylindricalPeriodicDirectionsValues"></a>

#### GetValidCylindricalPeriodicDirectionsValues()

Get a list of all possible values for “Cylindrical Periodic Directions”.

* **Returns:**
  The returned list is [‘X’, ‘Y’, ‘Z’].

<a id="generated.RADomainSettings.GetValidDomainTypeValues"></a>

#### GetValidDomainTypeValues()

Get a list of all possible values for “Domain Type”.

* **Returns:**
  The returned list is [‘NONE’, ‘CARTESIAN’, ‘CYLINDRICAL’].

<a id="generated.RADomainSettings.IsPeriodicAtGeometryLimitsEnabled"></a>

#### IsPeriodicAtGeometryLimitsEnabled()

Check if the “Periodic At Geometry Limits” is enabled.

<a id="generated.RADomainSettings.IsUseBoundaryLimitsEnabled"></a>

#### IsUseBoundaryLimitsEnabled()

Check if the “Use Boundary Limits” is enabled.

<a id="generated.RADomainSettings.SetBoundariesDirections"></a>

#### SetBoundariesDirections(value)

Deprecated: use SetCartesianPeriodicDirections(value) instead.

<a id="generated.RADomainSettings.SetCartesianPeriodicDirections"></a>

#### SetCartesianPeriodicDirections(value: str)

Set the value of “Cartesian Periodic Directions”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘NONE’, ‘X’, ‘Y’, ‘XY’, ‘Z’, ‘XZ’, ‘YZ’, ‘XYZ’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Cartesian Periodic Directions” option.

<a id="generated.RADomainSettings.SetCoordinateLimitsMaxValues"></a>

#### SetCoordinateLimitsMaxValues(values: Sequence[str | float], unit: str | None = None)

Set the values of “Coordinate Limits Max Values”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RADomainSettings.SetCoordinateLimitsMinValues"></a>

#### SetCoordinateLimitsMinValues(values: Sequence[str | float], unit: str | None = None)

Set the values of “Coordinate Limits Min Values”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RADomainSettings.SetCylindricalPeriodicDirections"></a>

#### SetCylindricalPeriodicDirections(value: str)

Set the value of “Cylindrical Periodic Directions”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘X’, ‘Y’, ‘Z’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Cylindrical Periodic Directions” option.

<a id="generated.RADomainSettings.SetDomainType"></a>

#### SetDomainType(value: str)

Set the value of “Domain Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘NONE’, ‘CARTESIAN’, ‘CYLINDRICAL’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Domain Type” option.

<a id="generated.RADomainSettings.SetInitialAngle"></a>

#### SetInitialAngle(value: str | float, unit: str | None = None)

Set the value of “Initial Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.

<a id="generated.RADomainSettings.SetNumberOfDivisions"></a>

#### SetNumberOfDivisions(value: str | int)

Set the value of “Number of Divisions”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RADomainSettings.SetPeriodicAtGeometryLimits"></a>

#### SetPeriodicAtGeometryLimits(value: bool)

Set the value of “Periodic At Geometry Limits”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RADomainSettings.SetPeriodicLimitsMaxCoordinates"></a>

#### SetPeriodicLimitsMaxCoordinates(values: Sequence[str | float], unit: str | None = None)

Set the values of “Periodic Limits Max Coordinates”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RADomainSettings.SetPeriodicLimitsMinCoordinates"></a>

#### SetPeriodicLimitsMinCoordinates(values: Sequence[str | float], unit: str | None = None)

Set the values of “Periodic Limits Min Coordinates”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RADomainSettings.SetUseBoundaryLimits"></a>

#### SetUseBoundaryLimits(value: bool)

Set the value of “Use Boundary Limits”.

* **Parameters:**
  **value** – The value to set.
