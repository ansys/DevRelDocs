

# RAJointsDataMeshColoring

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAJointsDataMeshColoring"></a>

### *class* RAJointsDataMeshColoring

**Methods:**

| [`GetAvailableGridFunctions`](#generated.RAJointsDataMeshColoring.GetAvailableGridFunctions)()                | Get a list of all possible values for "GridFunctions".       |
|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`GetAvailableGridFunctionsNames`](#generated.RAJointsDataMeshColoring.GetAvailableGridFunctionsNames)()      | Get a list of all possible values for "GridFunctions" names. |
| [`GetJointsColor`](#generated.RAJointsDataMeshColoring.GetJointsColor)()                                      | Get the value of "Node Color".                               |
| [`GetJointsConnectivityColor`](#generated.RAJointsDataMeshColoring.GetJointsConnectivityColor)()              | Get the value of "Joints Connectivity Color".                |
| [`GetJointsConnectivityLineWidth`](#generated.RAJointsDataMeshColoring.GetJointsConnectivityLineWidth)()      | Get the value of "Joints Connectivity Line Width".           |
| [`GetJointsConnectivityProperty`](#generated.RAJointsDataMeshColoring.GetJointsConnectivityProperty)()        | Get the value of "Joints Connectivity GridFunction".         |
| [`GetJointsConnectivityVisible`](#generated.RAJointsDataMeshColoring.GetJointsConnectivityVisible)()          | Get the value of "Joints Connectivity Visible".              |
| [`GetJointsPointSize`](#generated.RAJointsDataMeshColoring.GetJointsPointSize)()                              | Get the value of "Joints Point Size".                        |
| [`GetJointsProperty`](#generated.RAJointsDataMeshColoring.GetJointsProperty)()                                | Get the value of "Joints Property".                          |
| [`GetJointsVisible`](#generated.RAJointsDataMeshColoring.GetJointsVisible)()                                  | Get the value of "Joints Visible".                           |
| [`GetValidColoringModes`](#generated.RAJointsDataMeshColoring.GetValidColoringModes)()                        | Get a list with all possible coloring modes names.           |
| [`SetJointsColor`](#generated.RAJointsDataMeshColoring.SetJointsColor)(values)                                | Set the values of "Joints Color".                            |
| [`SetJointsConnectivityColor`](#generated.RAJointsDataMeshColoring.SetJointsConnectivityColor)(values)        | Set the values of "Joints Connectivity Color".               |
| [`SetJointsConnectivityLineWidth`](#generated.RAJointsDataMeshColoring.SetJointsConnectivityLineWidth)(value) | Set the value of "Joints Connectivity Line Width".           |
| [`SetJointsConnectivityProperty`](#generated.RAJointsDataMeshColoring.SetJointsConnectivityProperty)(value)   | Set the values of "Joints Connectivity GridFunction".        |
| [`SetJointsConnectivityVisible`](#generated.RAJointsDataMeshColoring.SetJointsConnectivityVisible)(value)     | Set the value of "Joints Connectivity Visible".              |
| [`SetJointsPointSize`](#generated.RAJointsDataMeshColoring.SetJointsPointSize)(value)                         | Set the value of "Joints Point Size".                        |
| [`SetJointsProperty`](#generated.RAJointsDataMeshColoring.SetJointsProperty)(value)                           | Set the values of "Joints Property".                         |
| [`SetJointsVisible`](#generated.RAJointsDataMeshColoring.SetJointsVisible)(value)                             | Set the value of "Joints Visible".                           |

<a id="generated.RAJointsDataMeshColoring.GetAvailableGridFunctions"></a>

#### GetAvailableGridFunctions()

Get a list of all possible values for “GridFunctions”.

* **Returns:**
  The returned set contains the SemanticAssociation of the available Grid Functions.

<a id="generated.RAJointsDataMeshColoring.GetAvailableGridFunctionsNames"></a>

#### GetAvailableGridFunctionsNames()

Get a list of all possible values for “GridFunctions” names.

* **Returns:**
  The returned set contains the names of the available Grid Functions.

<a id="generated.RAJointsDataMeshColoring.GetJointsColor"></a>

#### GetJointsColor()

Get the value of “Node Color”.

<a id="generated.RAJointsDataMeshColoring.GetJointsConnectivityColor"></a>

#### GetJointsConnectivityColor()

Get the value of “Joints Connectivity Color”.

<a id="generated.RAJointsDataMeshColoring.GetJointsConnectivityLineWidth"></a>

#### GetJointsConnectivityLineWidth()

Get the value of “Joints Connectivity Line Width”.

<a id="generated.RAJointsDataMeshColoring.GetJointsConnectivityProperty"></a>

#### GetJointsConnectivityProperty()

Get the value of “Joints Connectivity GridFunction”.

<a id="generated.RAJointsDataMeshColoring.GetJointsConnectivityVisible"></a>

#### GetJointsConnectivityVisible()

Get the value of “Joints Connectivity Visible”.

<a id="generated.RAJointsDataMeshColoring.GetJointsPointSize"></a>

#### GetJointsPointSize()

Get the value of “Joints Point Size”.

<a id="generated.RAJointsDataMeshColoring.GetJointsProperty"></a>

#### GetJointsProperty()

Get the value of “Joints Property”.

<a id="generated.RAJointsDataMeshColoring.GetJointsVisible"></a>

#### GetJointsVisible()

Get the value of “Joints Visible”.

<a id="generated.RAJointsDataMeshColoring.GetValidColoringModes"></a>

#### GetValidColoringModes()

Get a list with all possible coloring modes names.

* **Returns:**
  The returned values will be a combination of [‘Joints’, ‘Joints Connectivity’]

<a id="generated.RAJointsDataMeshColoring.SetJointsColor"></a>

#### SetJointsColor(values: tuple[float, float, float])

Set the values of “Joints Color”.

* **Parameters:**
  **values** – The values to set. The values must be a tuple of floats. Must have exactly 3 elements.

<a id="generated.RAJointsDataMeshColoring.SetJointsConnectivityColor"></a>

#### SetJointsConnectivityColor(values: tuple[float, float, float])

Set the values of “Joints Connectivity Color”.

* **Parameters:**
  **values** – The values to set. The values must be a tuple of floats. Must have exactly 3 elements.

<a id="generated.RAJointsDataMeshColoring.SetJointsConnectivityLineWidth"></a>

#### SetJointsConnectivityLineWidth(value: float)

Set the value of “Joints Connectivity Line Width”.

* **Parameters:**
  **value** – The value to set. This value must be a float type.

<a id="generated.RAJointsDataMeshColoring.SetJointsConnectivityProperty"></a>

#### SetJointsConnectivityProperty(value: type[SemanticAssociation] | str | None)

Set the values of “Joints Connectivity GridFunction”.

* **Parameters:**
  **value** – The value to set. The value can be heterogeneous, it can be a SemanticAssociation, a str
  of its name or None for solid colors.

<a id="generated.RAJointsDataMeshColoring.SetJointsConnectivityVisible"></a>

#### SetJointsConnectivityVisible(value: bool)

Set the value of “Joints Connectivity Visible”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAJointsDataMeshColoring.SetJointsPointSize"></a>

#### SetJointsPointSize(value: float)

Set the value of “Joints Point Size”.

* **Parameters:**
  **value** – The value to set. This value must be a float type.

<a id="generated.RAJointsDataMeshColoring.SetJointsProperty"></a>

#### SetJointsProperty(value: type[SemanticAssociation] | str | None)

Set the values of “Joints Property”.

* **Parameters:**
  **value** – The value to set. The value can be heterogeneous, it can be a SemanticAssociation, a str
  of its name or None for solid colors.

<a id="generated.RAJointsDataMeshColoring.SetJointsVisible"></a>

#### SetJointsVisible(value: bool)

Set the value of “Joints Visible”.

* **Parameters:**
  **value** – The value to set.
