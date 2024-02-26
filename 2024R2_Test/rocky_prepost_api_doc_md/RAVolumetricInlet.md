# RAVolumetricInlet

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAVolumetricInlet

Rocky API wrapper for a single Volume Fill input.

This wrapper class corresponds to an individual entry under the “Inputs” item on the project’s
data tree. Particle inputs can be retrieved from the [`RAStudy`](RAStudy.md#generated.RAStudy) or the
[`RAInletsOutletsCollection`](RAInletsOutletsCollection.md#generated.RAInletsOutletsCollection) via:

```python
input_1 = study.GetElement('Volume Fill <1>')
input_2 = input_collection.GetParticleInput('Volume Fill <2>')
```

Instances of [`RAVolumetricInlet`](#generated.RAVolumetricInlet) comprise two parts: Properties that can be manipulated
directly, such as the input’s name and the seed point, and the input properties list
that describe which particles enter via this input and with its mass, temperature, etc.
This list must be manipulated via the `RAParticleInputPropertiesList` returned by
[`GetInputPropertiesList()`](#generated.RAVolumetricInlet.GetInputPropertiesList).

**Methods:**

| [`GetAvailableGeometries`](#generated.RAVolumetricInlet.GetAvailableGeometries)()            | Get all available Geometries.                 |
|----------------------------------------------------------------------------------------------|-----------------------------------------------|
| [`GetBoxCenter`](#generated.RAVolumetricInlet.GetBoxCenter)([unit])                          | Get the value of "Box Center".                |
| [`GetBoxDimensions`](#generated.RAVolumetricInlet.GetBoxDimensions)([unit])                  | Get the value of "Box Dimensions".            |
| [`GetGapScaleFactor`](#generated.RAVolumetricInlet.GetGapScaleFactor)()                      | Get the value of "Gap Scale Factor".          |
| [`GetGeometries`](#generated.RAVolumetricInlet.GetGeometries)()                              | Get the "Geometries".                         |
| [`GetInputPropertiesList`](#generated.RAVolumetricInlet.GetInputPropertiesList)()            | Return a list of input properties             |
| [`GetSeedCoordinates`](#generated.RAVolumetricInlet.GetSeedCoordinates)([unit])              | Get the value of "Seed Coordinates".          |
| [`GetSphMass`](#generated.RAVolumetricInlet.GetSphMass)([unit])                              | Get the value of "Sph Mass".                  |
| [`GetSphTemperature`](#generated.RAVolumetricInlet.GetSphTemperature)([unit])                | Get the value of "Sph Temperature".           |
| [`GetUseGeometriesToCompute`](#generated.RAVolumetricInlet.GetUseGeometriesToCompute)()      | Get the value of "Use Geometries To Compute". |
| [`SetBoxCenter`](#generated.RAVolumetricInlet.SetBoxCenter)(values[, unit])                  | Set the values of "Box Center".               |
| [`SetBoxDimensions`](#generated.RAVolumetricInlet.SetBoxDimensions)(values[, unit])          | Set the values of "Box Dimensions".           |
| [`SetGapScaleFactor`](#generated.RAVolumetricInlet.SetGapScaleFactor)(value)                 | Set the value of "Gap Scale Factor".          |
| [`SetGeometries`](#generated.RAVolumetricInlet.SetGeometries)(values)                        | Set the "Geometries".                         |
| [`SetSeedCoordinates`](#generated.RAVolumetricInlet.SetSeedCoordinates)(values[, unit])      | Set the values of "Seed Coordinates".         |
| [`SetSphMass`](#generated.RAVolumetricInlet.SetSphMass)(value[, unit])                       | Set the value of "Sph Mass".                  |
| [`SetSphTemperature`](#generated.RAVolumetricInlet.SetSphTemperature)(value[, unit])         | Set the value of "Sph Temperature".           |
| [`SetUseGeometriesToCompute`](#generated.RAVolumetricInlet.SetUseGeometriesToCompute)(value) | Set the value of "Use Geometries To Compute". |

#### GetAvailableGeometries()

Get all available Geometries.

* **Return type:**
  List[[`RAWall`](RAWall.md#generated.RAWall)]
  A list of [`RAWall`](RAWall.md#generated.RAWall).

#### GetBoxCenter(unit: Optional[str] = None)

Get the value of “Box Center”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetBoxDimensions(unit: Optional[str] = None)

Get the value of “Box Dimensions”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetGapScaleFactor()

Get the value of “Gap Scale Factor”.

#### GetGeometries()

Get the “Geometries”.

* **Return type:**
  List[[`RAWall`](RAWall.md#generated.RAWall)]
  A list of [`RAWall`](RAWall.md#generated.RAWall).

#### GetInputPropertiesList()

Return a list of input properties

#### GetSeedCoordinates(unit: Optional[str] = None)

Get the value of “Seed Coordinates”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetSphMass(unit: Optional[str] = None)

Get the value of “Sph Mass”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “kg”.

#### GetSphTemperature(unit: Optional[str] = None)

Get the value of “Sph Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

#### GetUseGeometriesToCompute()

Get the value of “Use Geometries To Compute”.

#### SetBoxCenter(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Box Center”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetBoxDimensions(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Box Dimensions”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetGapScaleFactor(value: Union[str, float])

Set the value of “Gap Scale Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetGeometries(values)

Set the “Geometries”.

:param List[str, [`RAWall`](RAWall.md#generated.RAWall)] values:
: A list with names, [`RAWall`](RAWall.md#generated.RAWall).

#### SetSeedCoordinates(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Seed Coordinates”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetSphMass(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Sph Mass”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “kg”.

#### SetSphTemperature(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Sph Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.

#### SetUseGeometriesToCompute(value: bool)

Set the value of “Use Geometries To Compute”.

* **Parameters:**
  **value** – The value to set.
