# RADomainSettings

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RADomainSettings

Rocky API wrapper for Domain Setings properties.

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

#### DisablePeriodicAtGeometryLimits()

Set the value of “Periodic At Geometry Limits” to False.

#### DisableUseBoundaryLimits()

Set the value of “Use Boundary Limits” to False.

#### EnablePeriodicAtGeometryLimits()

Set the value of “Periodic At Geometry Limits” to True.

#### EnableUseBoundaryLimits()

Set the value of “Use Boundary Limits” to True.

#### GetBoundariesDirections()

Deprecated: use GetCartesianPeriodicDirections() instead.

#### GetCartesianPeriodicDirections()

Get “Cartesian Periodic Directions” as a string.

* **Returns:**
  The returned value will be one of [‘NONE’, ‘X’, ‘Y’, ‘XY’, ‘Z’, ‘XZ’, ‘YZ’, ‘XYZ’].

#### GetCoordinateLimitsMaxValues(unit: Optional[str] = None)

Get the value of “Coordinate Limits Max Values”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetCoordinateLimitsMinValues(unit: Optional[str] = None)

Get the value of “Coordinate Limits Min Values”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetCylindricalPeriodicDirections()

Get “Cylindrical Periodic Directions” as a string.

* **Returns:**
  The returned value will be one of [‘X’, ‘Y’, ‘Z’].

#### GetDomainType()

Get “Domain Type” as a string.

* **Returns:**
  The returned value will be one of [‘NONE’, ‘CARTESIAN’, ‘CYLINDRICAL’].

#### GetInitialAngle(unit: Optional[str] = None)

Get the value of “Initial Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

#### GetNumberOfDivisions()

Get the value of “Number of Divisions”.

#### GetPeriodicAtGeometryLimits()

Get the value of “Periodic At Geometry Limits”.

#### GetPeriodicLimitsMaxCoordinates(unit: Optional[str] = None)

Get the value of “Periodic Limits Max Coordinates”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetPeriodicLimitsMinCoordinates(unit: Optional[str] = None)

Get the value of “Periodic Limits Min Coordinates”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetUseBoundaryLimits()

Get the value of “Use Boundary Limits”.

#### GetValidBoundariesDirectionsValues()

Deprecated: use GetValidPeriodicDirectionsValues() instead.

#### GetValidCartesianPeriodicDirectionsValues()

Get a list of all possible values for “Cartesian Periodic Directions”.

* **Returns:**
  The returned list is [‘NONE’, ‘X’, ‘Y’, ‘XY’, ‘Z’, ‘XZ’, ‘YZ’, ‘XYZ’].

#### GetValidCylindricalPeriodicDirectionsValues()

Get a list of all possible values for “Cylindrical Periodic Directions”.

* **Returns:**
  The returned list is [‘X’, ‘Y’, ‘Z’].

#### GetValidDomainTypeValues()

Get a list of all possible values for “Domain Type”.

* **Returns:**
  The returned list is [‘NONE’, ‘CARTESIAN’, ‘CYLINDRICAL’].

#### IsPeriodicAtGeometryLimitsEnabled()

Check if the “Periodic At Geometry Limits” is enabled.

#### IsUseBoundaryLimitsEnabled()

Check if the “Use Boundary Limits” is enabled.

#### SetBoundariesDirections(value)

Deprecated: use SetCartesianPeriodicDirections(value) instead.

#### SetCartesianPeriodicDirections(value: str)

Set the value of “Cartesian Periodic Directions”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘NONE’, ‘X’, ‘Y’, ‘XY’, ‘Z’, ‘XZ’, ‘YZ’, ‘XYZ’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Cartesian Periodic Directions” option.

#### SetCoordinateLimitsMaxValues(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Coordinate Limits Max Values”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetCoordinateLimitsMinValues(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Coordinate Limits Min Values”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetCylindricalPeriodicDirections(value: str)

Set the value of “Cylindrical Periodic Directions”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘X’, ‘Y’, ‘Z’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Cylindrical Periodic Directions” option.

#### SetDomainType(value: str)

Set the value of “Domain Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘NONE’, ‘CARTESIAN’, ‘CYLINDRICAL’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Domain Type” option.

#### SetInitialAngle(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Initial Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.

#### SetNumberOfDivisions(value: Union[str, int])

Set the value of “Number of Divisions”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetPeriodicAtGeometryLimits(value: bool)

Set the value of “Periodic At Geometry Limits”.

* **Parameters:**
  **value** – The value to set.

#### SetPeriodicLimitsMaxCoordinates(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Periodic Limits Max Coordinates”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetPeriodicLimitsMinCoordinates(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Periodic Limits Min Coordinates”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetUseBoundaryLimits(value: bool)

Set the value of “Use Boundary Limits”.

* **Parameters:**
  **value** – The value to set.
