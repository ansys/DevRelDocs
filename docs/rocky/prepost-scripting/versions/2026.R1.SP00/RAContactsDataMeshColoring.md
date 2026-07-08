

# RAContactsDataMeshColoring

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAContactsDataMeshColoring"></a>

### *class* RAContactsDataMeshColoring

**Methods:**

| Name | Description |
|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`GetAvailableGridFunctions`](#generated.RAContactsDataMeshColoring.GetAvailableGridFunctions)()           | Get a list of all possible values for "GridFunctions".       |
| [`GetAvailableGridFunctionsNames`](#generated.RAContactsDataMeshColoring.GetAvailableGridFunctionsNames)() | Get a list of all possible values for "GridFunctions" names. |
| [`GetContactsColor`](#generated.RAContactsDataMeshColoring.GetContactsColor)()                             | Get the value of "Node Color".                               |
| [`GetContactsNetworkColor`](#generated.RAContactsDataMeshColoring.GetContactsNetworkColor)()               | Get the value of "Contacts Network Color".                   |
| [`GetContactsNetworkLineWidth`](#generated.RAContactsDataMeshColoring.GetContactsNetworkLineWidth)()       | Get the value of "Contacts Network Line Width".              |
| [`GetContactsNetworkProperty`](#generated.RAContactsDataMeshColoring.GetContactsNetworkProperty)()         | Get the value of "Contacts Network GridFunction".            |
| [`GetContactsNetworkVisible`](#generated.RAContactsDataMeshColoring.GetContactsNetworkVisible)()           | Get the value of "Contacts Network Visible".                 |
| [`GetContactsPointSize`](#generated.RAContactsDataMeshColoring.GetContactsPointSize)()                     | Get the value of "Contacts Point Size".                      |
| [`GetContactsProperty`](#generated.RAContactsDataMeshColoring.GetContactsProperty)()                       | Get the value of "Contacts Property".                        |
| [`GetContactsVisible`](#generated.RAContactsDataMeshColoring.GetContactsVisible)()                         | Get the value of "Contacts Visible".                         |
| [`GetValidColoringModes`](#generated.RAContactsDataMeshColoring.GetValidColoringModes)()                   | Get a list with all possible coloring modes names.           |
| [`SetContactsColor`](#generated.RAContactsDataMeshColoring.SetContactsColor)(values)                       | Set the values of "Contacts Color".                          |
| [`SetContactsNetworkColor`](#generated.RAContactsDataMeshColoring.SetContactsNetworkColor)(values)         | Set the values of "Contacts Network Color".                  |
| [`SetContactsNetworkLineWidth`](#generated.RAContactsDataMeshColoring.SetContactsNetworkLineWidth)(value)  | Set the value of "Contacts Network Line Width".              |
| [`SetContactsNetworkProperty`](#generated.RAContactsDataMeshColoring.SetContactsNetworkProperty)(value)    | Set the values of "Contacts Network GridFunction".           |
| [`SetContactsNetworkVisible`](#generated.RAContactsDataMeshColoring.SetContactsNetworkVisible)(value)      | Set the value of "Contacts Network Visible".                 |
| [`SetContactsPointSize`](#generated.RAContactsDataMeshColoring.SetContactsPointSize)(value)                | Set the value of "Contacts Point Size".                      |
| [`SetContactsProperty`](#generated.RAContactsDataMeshColoring.SetContactsProperty)(value)                  | Set the values of "Contacts Property".                       |
| [`SetContactsVisible`](#generated.RAContactsDataMeshColoring.SetContactsVisible)(value)                    | Set the value of "Contacts Visible".                         |

<a id="generated.RAContactsDataMeshColoring.GetAvailableGridFunctions"></a>

#### GetAvailableGridFunctions()

Get a list of all possible values for “GridFunctions”.

* **Returns:**
  The returned set contains the SemanticAssociation of the available Grid Functions.

<a id="generated.RAContactsDataMeshColoring.GetAvailableGridFunctionsNames"></a>

#### GetAvailableGridFunctionsNames()

Get a list of all possible values for “GridFunctions” names.

* **Returns:**
  The returned set contains the names of the available Grid Functions.

<a id="generated.RAContactsDataMeshColoring.GetContactsColor"></a>

#### GetContactsColor()

Get the value of “Node Color”.

<a id="generated.RAContactsDataMeshColoring.GetContactsNetworkColor"></a>

#### GetContactsNetworkColor()

Get the value of “Contacts Network Color”.

<a id="generated.RAContactsDataMeshColoring.GetContactsNetworkLineWidth"></a>

#### GetContactsNetworkLineWidth()

Get the value of “Contacts Network Line Width”.

<a id="generated.RAContactsDataMeshColoring.GetContactsNetworkProperty"></a>

#### GetContactsNetworkProperty()

Get the value of “Contacts Network GridFunction”.

<a id="generated.RAContactsDataMeshColoring.GetContactsNetworkVisible"></a>

#### GetContactsNetworkVisible()

Get the value of “Contacts Network Visible”.

<a id="generated.RAContactsDataMeshColoring.GetContactsPointSize"></a>

#### GetContactsPointSize()

Get the value of “Contacts Point Size”.

<a id="generated.RAContactsDataMeshColoring.GetContactsProperty"></a>

#### GetContactsProperty()

Get the value of “Contacts Property”.

<a id="generated.RAContactsDataMeshColoring.GetContactsVisible"></a>

#### GetContactsVisible()

Get the value of “Contacts Visible”.

<a id="generated.RAContactsDataMeshColoring.GetValidColoringModes"></a>

#### GetValidColoringModes()

Get a list with all possible coloring modes names.

* **Returns:**
  The returned values will be a combination of [‘Contacts’, ‘Contacts Network’]

<a id="generated.RAContactsDataMeshColoring.SetContactsColor"></a>

#### SetContactsColor(values: tuple[float, float, float])

Set the values of “Contacts Color”.

* **Parameters:**
  **values** – The values to set. The values must be a tuple of floats. Must have exactly 3 elements.

<a id="generated.RAContactsDataMeshColoring.SetContactsNetworkColor"></a>

#### SetContactsNetworkColor(values: tuple[float, float, float])

Set the values of “Contacts Network Color”.

* **Parameters:**
  **values** – The values to set. The values must be a tuple of floats. Must have exactly 3 elements.

<a id="generated.RAContactsDataMeshColoring.SetContactsNetworkLineWidth"></a>

#### SetContactsNetworkLineWidth(value: float)

Set the value of “Contacts Network Line Width”.

* **Parameters:**
  **value** – The value to set. This value must be a float type.

<a id="generated.RAContactsDataMeshColoring.SetContactsNetworkProperty"></a>

#### SetContactsNetworkProperty(value: type[SemanticAssociation] | str | None)

Set the values of “Contacts Network GridFunction”.

* **Parameters:**
  **value** – The value to set. The value can be heterogeneous, it can be a SemanticAssociation, a str
  of its name or None for solid colors.

<a id="generated.RAContactsDataMeshColoring.SetContactsNetworkVisible"></a>

#### SetContactsNetworkVisible(value: bool)

Set the value of “Contacts Network Visible”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAContactsDataMeshColoring.SetContactsPointSize"></a>

#### SetContactsPointSize(value: float)

Set the value of “Contacts Point Size”.

* **Parameters:**
  **value** – The value to set. This value must be a float type.

<a id="generated.RAContactsDataMeshColoring.SetContactsProperty"></a>

#### SetContactsProperty(value: type[SemanticAssociation] | str | None)

Set the values of “Contacts Property”.

* **Parameters:**
  **value** – The value to set. The value can be heterogeneous, it can be a SemanticAssociation, a str
  of its name or None for solid colors.

<a id="generated.RAContactsDataMeshColoring.SetContactsVisible"></a>

#### SetContactsVisible(value: bool)

Set the value of “Contacts Visible”.

* **Parameters:**
  **value** – The value to set.
