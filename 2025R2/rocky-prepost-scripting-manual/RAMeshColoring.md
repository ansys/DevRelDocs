

# RAMeshColoring

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMeshColoring"></a>

### *class* RAMeshColoring

Rocky PrePost Scripting wrapper to manipulate Mesh Colorings.

This wrapper can be accessed via the project’s classes `GetMeshColoring` that allow
coloring:

```python
window = app.Create3DWindow('Win 01')
particles = study.GetParticles()
particles_coloring = particles.GetMeshColoring('Win 01')
particles_coloring.SetNodeVisible(True)
```

Valid coloring modes, i.e. Node, Edges, Faces or Vectors can be accessed via
[`GetValidColoringModes`](#generated.RAMeshColoring.GetValidColoringModes). The property being shown can be additionally modified:

```python
particles_coloring.SetNodeGridFunction(None)  # for solid colors
particles_coloring.SetNodeColor((1.0, 1.0, 1.0))
particles_coloring.SetNodeGridFunction('Absolute Rotational Velocity')  # for properties
```

**Methods:**

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`GetAvailableGridFunctions`](#generated.RAMeshColoring.GetAvailableGridFunctions)()                           | Get a list of all possible values for "GridFunctions".                     |
| [`GetAvailableGridFunctionsNames`](#generated.RAMeshColoring.GetAvailableGridFunctionsNames)()                 | Get a list of all possible values for "GridFunctions" names.               |
| [`GetAvailableVectorGridFunctions`](#generated.RAMeshColoring.GetAvailableVectorGridFunctions)()               | Get a list of all possible values for Vector "GridFunctions".              |
| [`GetAvailableVectorGridFunctionsNames`](#generated.RAMeshColoring.GetAvailableVectorGridFunctionsNames)()     | Get a list of all possible values for Vector "GridFunctions" names.        |
| [`GetEdgeColor`](#generated.RAMeshColoring.GetEdgeColor)()                                                     | Get the value of "Edge Color".                                             |
| [`GetEdgeGridFunction`](#generated.RAMeshColoring.GetEdgeGridFunction)()                                       | Get the value of "Edge GridFunction".                                      |
| [`GetEdgeLineWidth`](#generated.RAMeshColoring.GetEdgeLineWidth)()                                             | Get the value of "Edge Line Width".                                        |
| [`GetEdgeVisible`](#generated.RAMeshColoring.GetEdgeVisible)()                                                 | Get the value of "Edge Visible".                                           |
| [`GetFaceColor`](#generated.RAMeshColoring.GetFaceColor)()                                                     | Get the value of "Face Color".                                             |
| [`GetFaceCustomStructuredPartitions`](#generated.RAMeshColoring.GetFaceCustomStructuredPartitions)()           | Get the value of "Face Custom Structured Partitions".                      |
| [`GetFaceGridFunction`](#generated.RAMeshColoring.GetFaceGridFunction)()                                       | Get the value of "Face GridFunction".                                      |
| [`GetFaceScope`](#generated.RAMeshColoring.GetFaceScope)()                                                     | Get "Face Scope" as a string.                                              |
| [`GetFaceShowOnNode`](#generated.RAMeshColoring.GetFaceShowOnNode)()                                           | Get the value of "Show On Node".                                           |
| [`GetFaceStructuredPartitions`](#generated.RAMeshColoring.GetFaceStructuredPartitions)()                       | Get "Face Structured Partitions" as a string.                              |
| [`GetFaceVisible`](#generated.RAMeshColoring.GetFaceVisible)()                                                 | Get the value of "Face Visible".                                           |
| [`GetLevelOfDetail`](#generated.RAMeshColoring.GetLevelOfDetail)()                                             | Get "Level of Detail" as a string.                                         |
| [`GetNodeColor`](#generated.RAMeshColoring.GetNodeColor)()                                                     | Get the value of "Node Color".                                             |
| [`GetNodeGridFunction`](#generated.RAMeshColoring.GetNodeGridFunction)()                                       | Get the value of "Node GridFunction".                                      |
| [`GetNodePointSize`](#generated.RAMeshColoring.GetNodePointSize)()                                             | Get the value of "Node Point Size".                                        |
| [`GetNodeVisible`](#generated.RAMeshColoring.GetNodeVisible)()                                                 | Get the value of "Node Visible".                                           |
| [`GetNormalizedVectorsEnabled`](#generated.RAMeshColoring.GetNormalizedVectorsEnabled)()                       | Get the value of "Normalized Vector".                                      |
| [`GetStride`](#generated.RAMeshColoring.GetStride)()                                                           | Get the value of "Stride".                                                 |
| [`GetTransparency`](#generated.RAMeshColoring.GetTransparency)()                                               | Get the value of "Transparency".                                           |
| [`GetTransparencyEnabled`](#generated.RAMeshColoring.GetTransparencyEnabled)()                                 | Get the value of "Transparency".                                           |
| [`GetValidColoringModes`](#generated.RAMeshColoring.GetValidColoringModes)()                                   | Get a list with all possible coloring modes names.                         |
| [`GetValidFaceCustomStructuredPartitions`](#generated.RAMeshColoring.GetValidFaceCustomStructuredPartitions)() | Get a list of all possible values for "Face Custom Structured Partitions". |
| [`GetValidFaceScopes`](#generated.RAMeshColoring.GetValidFaceScopes)()                                         | Get a list of all possible values for "Face Scope".                        |
| [`GetValidFaceStructuredPartitionsValues`](#generated.RAMeshColoring.GetValidFaceStructuredPartitionsValues)() | Get a list of all possible values for "Face Structured Partitions".        |
| [`GetValidLevelOfDetailValues`](#generated.RAMeshColoring.GetValidLevelOfDetailValues)()                       | Get a list of all possible values for "Level of Detail".                   |
| [`GetVectorGridFunction`](#generated.RAMeshColoring.GetVectorGridFunction)()                                   | Get the value of "Vector GridFunction".                                    |
| [`GetVectorScale`](#generated.RAMeshColoring.GetVectorScale)()                                                 | Get the value of "Vector Scale".                                           |
| [`GetVectorVisible`](#generated.RAMeshColoring.GetVectorVisible)()                                             | Get the value of "Vector Visible".                                         |
| [`GetVisible`](#generated.RAMeshColoring.GetVisible)()                                                         | Get the value of "Visible".                                                |
| [`SetEdgeColor`](#generated.RAMeshColoring.SetEdgeColor)(values)                                               | Set the values of "Edge Color".                                            |
| [`SetEdgeGridFunction`](#generated.RAMeshColoring.SetEdgeGridFunction)(value)                                  | Set the values of "Edge GridFunction".                                     |
| [`SetEdgeLineWidth`](#generated.RAMeshColoring.SetEdgeLineWidth)(value)                                        | Set the value of "Edge Line Width".                                        |
| [`SetEdgeVisible`](#generated.RAMeshColoring.SetEdgeVisible)(value)                                            | Set the value of "Edge Visible".                                           |
| [`SetFaceColor`](#generated.RAMeshColoring.SetFaceColor)(values)                                               | Set the values of "Face Color".                                            |
| [`SetFaceCustomStructuredPartitions`](#generated.RAMeshColoring.SetFaceCustomStructuredPartitions)(values)     | Set the value of "Face Custom Structured Partitions".                      |
| [`SetFaceGridFunction`](#generated.RAMeshColoring.SetFaceGridFunction)(value)                                  | Set the values of "Face GridFunction".                                     |
| [`SetFaceScope`](#generated.RAMeshColoring.SetFaceScope)(value)                                                | Set the value of "Face Scope".                                             |
| [`SetFaceShowOnNode`](#generated.RAMeshColoring.SetFaceShowOnNode)(value)                                      | Set the value of "Show On Node".                                           |
| [`SetFaceStructuredPartitions`](#generated.RAMeshColoring.SetFaceStructuredPartitions)(value)                  | Set the value of "Face Structured Partitions".                             |
| [`SetFaceVisible`](#generated.RAMeshColoring.SetFaceVisible)(value)                                            | Set the value of "Face Visible".                                           |
| [`SetLevelOfDetail`](#generated.RAMeshColoring.SetLevelOfDetail)(value)                                        | Set the value of "Level of Detail".                                        |
| [`SetNodeColor`](#generated.RAMeshColoring.SetNodeColor)(values)                                               | Set the values of "Node Color".                                            |
| [`SetNodeGridFunction`](#generated.RAMeshColoring.SetNodeGridFunction)(value)                                  | Set the values of "Node GridFunction".                                     |
| [`SetNodePointSize`](#generated.RAMeshColoring.SetNodePointSize)(value)                                        | Set the value of "Node Point Size".                                        |
| [`SetNodeVisible`](#generated.RAMeshColoring.SetNodeVisible)(value)                                            | Set the value of "Node Visible".                                           |
| [`SetNormalizedVectorsEnabled`](#generated.RAMeshColoring.SetNormalizedVectorsEnabled)(value)                  | Set the value of "Normalized Vectors".                                     |
| [`SetStride`](#generated.RAMeshColoring.SetStride)(value)                                                      | Set the value of "Stride".                                                 |
| [`SetTransparency`](#generated.RAMeshColoring.SetTransparency)(value)                                          | Set the value of "Transparency".                                           |
| [`SetTransparencyEnabled`](#generated.RAMeshColoring.SetTransparencyEnabled)(value)                            | Set the value of "Transparency".                                           |
| [`SetVectorGridFunction`](#generated.RAMeshColoring.SetVectorGridFunction)(value)                              | Set the values of "Vector GridFunction".                                   |
| [`SetVectorScale`](#generated.RAMeshColoring.SetVectorScale)(value)                                            | Set the value of "Vector Scale".                                           |
| [`SetVectorVisible`](#generated.RAMeshColoring.SetVectorVisible)(value)                                        | Set the value of "Vector Visible".                                         |
| [`SetVisible`](#generated.RAMeshColoring.SetVisible)(value)                                                    | Set the value of "Visible".                                                |

<a id="generated.RAMeshColoring.GetAvailableGridFunctions"></a>

#### GetAvailableGridFunctions()

Get a list of all possible values for “GridFunctions”.

* **Returns:**
  The returned set contains the SemanticAssociation of the available Grid Functions.

<a id="generated.RAMeshColoring.GetAvailableGridFunctionsNames"></a>

#### GetAvailableGridFunctionsNames()

Get a list of all possible values for “GridFunctions” names.

* **Returns:**
  The returned set contains the names of the available Grid Functions.

<a id="generated.RAMeshColoring.GetAvailableVectorGridFunctions"></a>

#### GetAvailableVectorGridFunctions()

Get a list of all possible values for Vector “GridFunctions”.

* **Returns:**
  The returned set contains the SemanticAssociation of the available Vector Grid
  Functions.

<a id="generated.RAMeshColoring.GetAvailableVectorGridFunctionsNames"></a>

#### GetAvailableVectorGridFunctionsNames()

Get a list of all possible values for Vector “GridFunctions” names.

* **Returns:**
  The returned set contains the names of the available Vector Grid Functions.

<a id="generated.RAMeshColoring.GetEdgeColor"></a>

#### GetEdgeColor()

Get the value of “Edge Color”.

<a id="generated.RAMeshColoring.GetEdgeGridFunction"></a>

#### GetEdgeGridFunction()

Get the value of “Edge GridFunction”.

<a id="generated.RAMeshColoring.GetEdgeLineWidth"></a>

#### GetEdgeLineWidth()

Get the value of “Edge Line Width”.

<a id="generated.RAMeshColoring.GetEdgeVisible"></a>

#### GetEdgeVisible()

Get the value of “Edge Visible”.

<a id="generated.RAMeshColoring.GetFaceColor"></a>

#### GetFaceColor()

Get the value of “Face Color”.

<a id="generated.RAMeshColoring.GetFaceCustomStructuredPartitions"></a>

#### GetFaceCustomStructuredPartitions()

> Get the value of “Face Custom Structured Partitions”.
* **Returns:**
  The returned value will be a combination of [‘Top’, ‘Bottom’, ‘North’, ‘South’, ‘East’,
  ‘West’].

<a id="generated.RAMeshColoring.GetFaceGridFunction"></a>

#### GetFaceGridFunction()

Get the value of “Face GridFunction”.

<a id="generated.RAMeshColoring.GetFaceScope"></a>

#### GetFaceScope()

Get “Face Scope” as a string.

* **Returns:**
  The return will be one of the “GetValidFaceScopes” values.

<a id="generated.RAMeshColoring.GetFaceShowOnNode"></a>

#### GetFaceShowOnNode()

Get the value of “Show On Node”.

<a id="generated.RAMeshColoring.GetFaceStructuredPartitions"></a>

#### GetFaceStructuredPartitions()

Get “Face Structured Partitions” as a string.

* **Returns:**
  The returned value will be one of [‘All’, ‘Custom…’].

<a id="generated.RAMeshColoring.GetFaceVisible"></a>

#### GetFaceVisible()

Get the value of “Face Visible”.

<a id="generated.RAMeshColoring.GetLevelOfDetail"></a>

#### GetLevelOfDetail()

Get “Level of Detail” as a string.

* **Returns:**
  The returned value will be one of [‘Rich’, ‘Automatic’, ‘Simple’].

<a id="generated.RAMeshColoring.GetNodeColor"></a>

#### GetNodeColor()

Get the value of “Node Color”.

<a id="generated.RAMeshColoring.GetNodeGridFunction"></a>

#### GetNodeGridFunction()

Get the value of “Node GridFunction”.

<a id="generated.RAMeshColoring.GetNodePointSize"></a>

#### GetNodePointSize()

Get the value of “Node Point Size”.

<a id="generated.RAMeshColoring.GetNodeVisible"></a>

#### GetNodeVisible()

Get the value of “Node Visible”.

<a id="generated.RAMeshColoring.GetNormalizedVectorsEnabled"></a>

#### GetNormalizedVectorsEnabled()

Get the value of “Normalized Vector”.

<a id="generated.RAMeshColoring.GetStride"></a>

#### GetStride()

Get the value of “Stride”.

<a id="generated.RAMeshColoring.GetTransparency"></a>

#### GetTransparency()

Get the value of “Transparency”.

<a id="generated.RAMeshColoring.GetTransparencyEnabled"></a>

#### GetTransparencyEnabled()

Get the value of “Transparency”.

<a id="generated.RAMeshColoring.GetValidColoringModes"></a>

#### GetValidColoringModes()

Get a list with all possible coloring modes names.

* **Returns:**
  The returned values will be a combination of [‘Node’, ‘Edge’, ‘Face’, ‘Vector’]

<a id="generated.RAMeshColoring.GetValidFaceCustomStructuredPartitions"></a>

#### GetValidFaceCustomStructuredPartitions()

Get a list of all possible values for “Face Custom Structured Partitions”.

> * **return:**
>   The returned list is [‘Top’, ‘Bottom’, ‘North’, ‘South’, ‘East’, ‘West’].

<a id="generated.RAMeshColoring.GetValidFaceScopes"></a>

#### GetValidFaceScopes()

Get a list of all possible values for “Face Scope”.

* **Returns:**
  The returned list with the valid scope options.

<a id="generated.RAMeshColoring.GetValidFaceStructuredPartitionsValues"></a>

#### GetValidFaceStructuredPartitionsValues()

Get a list of all possible values for “Face Structured Partitions”.

* **Returns:**
  The returned list is [‘All’, ‘Custom…’].

<a id="generated.RAMeshColoring.GetValidLevelOfDetailValues"></a>

#### GetValidLevelOfDetailValues()

Get a list of all possible values for “Level of Detail”.

* **Returns:**
  The returned list is [‘Rich’, ‘Automatic’, ‘Simple’].

<a id="generated.RAMeshColoring.GetVectorGridFunction"></a>

#### GetVectorGridFunction()

Get the value of “Vector GridFunction”.

<a id="generated.RAMeshColoring.GetVectorScale"></a>

#### GetVectorScale()

Get the value of “Vector Scale”.

<a id="generated.RAMeshColoring.GetVectorVisible"></a>

#### GetVectorVisible()

Get the value of “Vector Visible”.

<a id="generated.RAMeshColoring.GetVisible"></a>

#### GetVisible()

Get the value of “Visible”.

<a id="generated.RAMeshColoring.SetEdgeColor"></a>

#### SetEdgeColor(values: tuple[float, float, float])

Set the values of “Edge Color”.

* **Parameters:**
  **values** – The values to set. The values must be a tuple of floats. Must have exactly 3 elements.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements or values is not a tuple.

<a id="generated.RAMeshColoring.SetEdgeGridFunction"></a>

#### SetEdgeGridFunction(value: SemanticAssociation | str | None)

Set the values of “Edge GridFunction”.

* **Parameters:**
  **value** – The value to set. The value can be heterogeneous, it can be a SemanticAssociation, a str
  of its name or None for solid colors.
* **Raises:**
  **RockyApiError** – If value is not a valid type or is not available for the current coloring.

<a id="generated.RAMeshColoring.SetEdgeLineWidth"></a>

#### SetEdgeLineWidth(value: float)

Set the value of “Edge Line Width”.

* **Parameters:**
  **value** – The value to set. This value must be a float type.

<a id="generated.RAMeshColoring.SetEdgeVisible"></a>

#### SetEdgeVisible(value: bool)

Set the value of “Edge Visible”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMeshColoring.SetFaceColor"></a>

#### SetFaceColor(values: tuple[float, float, float])

Set the values of “Face Color”.

* **Parameters:**
  **values** – The values to set. The values must be a tuple of floats. Must have exactly 3 elements.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements or values is not a tuple.

<a id="generated.RAMeshColoring.SetFaceCustomStructuredPartitions"></a>

#### SetFaceCustomStructuredPartitions(values: list[str])

Set the value of “Face Custom Structured Partitions”.

* **Parameters:**
  **values** – A list containing all the custom partitions.
* **Raises:**
  **RockyApiError** – If any of values is not a valid “Face Custom Structured Partitions” option.

<a id="generated.RAMeshColoring.SetFaceGridFunction"></a>

#### SetFaceGridFunction(value: SemanticAssociation | str | None)

Set the values of “Face GridFunction”.

* **Parameters:**
  **value** – The value to set. The value can be heterogeneous, it can be a SemanticAssociation, a str
  of its name or None for solid colors.
* **Raises:**
  **RockyApiError** – If value is not a valid type or is not available for the current coloring.

<a id="generated.RAMeshColoring.SetFaceScope"></a>

#### SetFaceScope(value: str)

Set the value of “Face Scope”.

* **Parameters:**
  **value** – The value to set.
* **Raises:**
  **RockyApiError** – If value is not a valid “Face Scope” option.

<a id="generated.RAMeshColoring.SetFaceShowOnNode"></a>

#### SetFaceShowOnNode(value: bool)

Set the value of “Show On Node”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMeshColoring.SetFaceStructuredPartitions"></a>

#### SetFaceStructuredPartitions(value: str)

Set the value of “Face Structured Partitions”.

* **Parameters:**
  **value** – The value to set.
* **Raises:**
  **RockyApiError** – If value is not a valid “Face Structured Partitions” option.

<a id="generated.RAMeshColoring.SetFaceVisible"></a>

#### SetFaceVisible(value: bool)

Set the value of “Face Visible”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMeshColoring.SetLevelOfDetail"></a>

#### SetLevelOfDetail(value: str)

Set the value of “Level of Detail”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘Rich’, ‘Automatic’, ‘Simple’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Level of Detail” option.

<a id="generated.RAMeshColoring.SetNodeColor"></a>

#### SetNodeColor(values: tuple[float, float, float])

Set the values of “Node Color”.

* **Parameters:**
  **values** – The values to set. The values must be a tuple of floats. Must have exactly 3 elements.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements or values is not a tuple.

<a id="generated.RAMeshColoring.SetNodeGridFunction"></a>

#### SetNodeGridFunction(value: SemanticAssociation | str | None)

Set the values of “Node GridFunction”.

* **Parameters:**
  **value** – The value to set. The value can be heterogeneous, it can be a SemanticAssociation, a str
  of its name or None for solid colors.
* **Raises:**
  **RockyApiError** – If value is not a valid type or is not available for the current coloring.

<a id="generated.RAMeshColoring.SetNodePointSize"></a>

#### SetNodePointSize(value: float)

Set the value of “Node Point Size”.

* **Parameters:**
  **value** – The value to set. This value must be a float type.

<a id="generated.RAMeshColoring.SetNodeVisible"></a>

#### SetNodeVisible(value: bool)

Set the value of “Node Visible”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMeshColoring.SetNormalizedVectorsEnabled"></a>

#### SetNormalizedVectorsEnabled(value: bool)

Set the value of “Normalized Vectors”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMeshColoring.SetStride"></a>

#### SetStride(value: int)

Set the value of “Stride”.

* **Parameters:**
  **value** – The value to set. This value must be an int type.

<a id="generated.RAMeshColoring.SetTransparency"></a>

#### SetTransparency(value: float)

Set the value of “Transparency”.

* **Parameters:**
  **value** – The value to set. This value must be a float type between 0 and 100.

<a id="generated.RAMeshColoring.SetTransparencyEnabled"></a>

#### SetTransparencyEnabled(value: bool)

Set the value of “Transparency”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMeshColoring.SetVectorGridFunction"></a>

#### SetVectorGridFunction(value: SemanticAssociation | str | None)

Set the values of “Vector GridFunction”.

* **Parameters:**
  **value** – The value to set. The value can be heterogeneous, it can be a SemanticAssociation, a str
  of its name or None for solid colors.
* **Raises:**
  **RockyApiError** – If value is not a valid type or is not available for the current coloring.

<a id="generated.RAMeshColoring.SetVectorScale"></a>

#### SetVectorScale(value: float)

Set the value of “Vector Scale”.

* **Parameters:**
  **value** – The value to set. This value must be a float type.

<a id="generated.RAMeshColoring.SetVectorVisible"></a>

#### SetVectorVisible(value: bool)

Set the value of “Vector Visible”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMeshColoring.SetVisible"></a>

#### SetVisible(value: bool)

Set the value of “Visible”.

* **Parameters:**
  **value** – The value to set.
