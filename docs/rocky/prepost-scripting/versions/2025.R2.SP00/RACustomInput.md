

# RACustomInput

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RACustomInput"></a>

### *class* RACustomInput

Rocky PrePost Scripting wrapper for a single Custom Input.

This wrapper class corresponds to an individual entry under the “Inputs” item on the project’s
data tree. Particle inputs can be retrieved from the [`RAStudy`](RAStudy.md#generated.RAStudy) or the
[`RAInletsOutletsCollection`](RAInletsOutletsCollection.md#generated.RAInletsOutletsCollection) via:

```python
input_1 = study.GetElement('Custom Input <1>')
input_2 = input_collection.GetParticleInput('Custom Input <2>')
```

Instances of [`RACustomInput`](#generated.RACustomInput) gives access to its two properties:
The id of the Particle that will be used in the particle generation and the path of the csv file which will
contain the information for each desired particle to be generated, such as, positioning, size, release time.

**Methods:**

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [`GetAvailableMotionFrames`](#generated.RACustomInput.GetAvailableMotionFrames)()                              | Get all available Motion Frames.                                                                           |
| [`GetAvailableParticles`](#generated.RACustomInput.GetAvailableParticles)()                                    | Get all available Particles.                                                                               |
| [`GetDefaultTemperature`](#generated.RACustomInput.GetDefaultTemperature)([unit])                              | Get the value of "Default Temperature".                                                                    |
| [`GetFilePath`](#generated.RACustomInput.GetFilePath)()                                                        | Get the value of "File Path".                                                                              |
| [`GetModuleProperties`](#generated.RACustomInput.GetModuleProperties)()                                        | Get the names of the module properties.                                                                    |
| [`GetModuleProperty`](#generated.RACustomInput.GetModuleProperty)(property_name[, unit])                       | Get the value of a module property.                                                                        |
| [`GetMotionFrame`](#generated.RACustomInput.GetMotionFrame)()                                                  | Get the "Motion Frame".                                                                                    |
| [`GetParticle`](#generated.RACustomInput.GetParticle)()                                                        | Get the "Particle".                                                                                        |
| [`GetValidOptionsForModuleProperty`](#generated.RACustomInput.GetValidOptionsForModuleProperty)(property_name) | Get all valid options only for properties that have a list of possible options.                            |
| [`SetDefaultTemperature`](#generated.RACustomInput.SetDefaultTemperature)(value[, unit])                       | Set the value of "Default Temperature".                                                                    |
| [`SetFilePath`](#generated.RACustomInput.SetFilePath)(file_path)                                               | Set the path of the file that will be used to generate the particles described on the content of the file. |
| [`SetModuleProperty`](#generated.RACustomInput.SetModuleProperty)(property_name, value[, unit])                | Set the value of a module property.                                                                        |
| [`SetMotionFrame`](#generated.RACustomInput.SetMotionFrame)(motion_frame)                                      | Assign a Motion Frame to the custom input.                                                                 |
| [`SetParticle`](#generated.RACustomInput.SetParticle)(value)                                                   | Set the "Particle".                                                                                        |

<a id="generated.RACustomInput.GetAvailableMotionFrames"></a>

#### GetAvailableMotionFrames()

Get all available Motion Frames.

* **Return type:**
  List[[`RAMotionFrame`](RAMotionFrame.md#generated.RAMotionFrame)]
  A list of [`RAMotionFrame`](RAMotionFrame.md#generated.RAMotionFrame).

<a id="generated.RACustomInput.GetAvailableParticles"></a>

#### GetAvailableParticles()

Get all available Particles.

* **Return type:**
  List[[`RAParticle`](RAParticle.md#generated.RAParticle)]
  A list of [`RAParticle`](RAParticle.md#generated.RAParticle).

<a id="generated.RACustomInput.GetDefaultTemperature"></a>

#### GetDefaultTemperature(unit: str | None = None)

Get the value of “Default Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

<a id="generated.RACustomInput.GetFilePath"></a>

#### GetFilePath()

Get the value of “File Path”.

* **Return type:**
  str

<a id="generated.RACustomInput.GetModuleProperties"></a>

#### GetModuleProperties()

Get the names of the module properties.

* **Return type:**
  tuple(ModulePropertyIdentifier)

<a id="generated.RACustomInput.GetModuleProperty"></a>

#### GetModuleProperty(property_name: str | ModulePropertyIdentifier, unit: str | None = None)

Get the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *ModulePropertyIdentifier* *]*) – The name of the module property to get.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    the returned value will be in the unit that was set before (via SetModuleProperty()).
* **Return type:**
  float, bool, str or [`RAModulePropertyList`](RAModulePropertyList.md#generated.RAModulePropertyList)
* **Returns:**
  - For basic module properties like numbers and booleans, the returned value is a basic
    Python type (float, bool, or string)
  - For input files, the returned value is the string of the full path to the file
  - For properties that are lists of other properties, the returned value is a
    : [`RAModulePropertyList`](RAModulePropertyList.md#generated.RAModulePropertyList).

<a id="generated.RACustomInput.GetMotionFrame"></a>

#### GetMotionFrame()

Get the “Motion Frame”.

* **Return type:**
  [`RAMotionFrame`](RAMotionFrame.md#generated.RAMotionFrame)

<a id="generated.RACustomInput.GetParticle"></a>

#### GetParticle()

Get the “Particle”.

* **Return type:**
  [`RAParticle`](RAParticle.md#generated.RAParticle)

<a id="generated.RACustomInput.GetValidOptionsForModuleProperty"></a>

#### GetValidOptionsForModuleProperty(property_name)

Get all valid options only for properties that have a list of possible options.

* **Parameters:**
  **property_name** (*str*) – The name of the module property.
* **Return type:**
  List[str]

<a id="generated.RACustomInput.SetDefaultTemperature"></a>

#### SetDefaultTemperature(value: str | float, unit: str | None = None)

Set the value of “Default Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.

<a id="generated.RACustomInput.SetFilePath"></a>

#### SetFilePath(file_path)

Set the path of the file that will be used to generate the particles
described on the content of the file.

The accepted file extensions are [“.csv”, “.xls”, “.xlsx”, “.xlsm”, “.xlsb”, “.odf”].

* **Parameters:**
  **file_path** (*str* *or* *Path*)

<a id="generated.RACustomInput.SetModuleProperty"></a>

#### SetModuleProperty(property_name: str | ModulePropertyIdentifier, value: float | bool | str, unit: str | None = None)

Set the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *ModulePropertyIdentifier* *]*) – The name of the module property to set.
  * **value** (*float* *,* *bool* *or* *str*) – The value to set.
    If the property_name references to an enum property then value must be an str value.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    value is assumed to be the unit was set before.

<a id="generated.RACustomInput.SetMotionFrame"></a>

#### SetMotionFrame(motion_frame: [RAMotionFrame](RAMotionFrame.md#generated.RAMotionFrame) | str | None)

Assign a Motion Frame to the custom input.

* **Parameters:**
  **motion_frame** – Either the API object or its name.

<a id="generated.RACustomInput.SetParticle"></a>

#### SetParticle(value)

Set the “Particle”.

:param unicode, [`RAParticle`](RAParticle.md#generated.RAParticle) value:
: Either the API object wrapping the desired entity or its name.
