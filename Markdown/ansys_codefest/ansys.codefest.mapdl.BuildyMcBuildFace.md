
# <kbd>class</kbd> `BuildyMcBuildFace`
Instance of the bridge-building machine: BuildyMcBuildFace. 

You can submit attempts and look at the challenge input via this class. Instances of this class should NOT be created directly, but should be created by one of the `Start` methods. Hence, constructor args are all private parameters. 



**Args:**
 
 - <b>`_blueprint`</b>:  the blueprint to build designs from 
 - <b>`_challenge`</b>:  Challenge object representing what is being tackled 
 - <b>`_mapdl_loc`</b>:  path to alternative mapdl executable 
 - <b>`_server`</b>:  Optional Server object containing connection details. 

### <kbd>method</kbd> `BuildyMcBuildFace.__init__`

```python
__init__(
    _blueprint: ansys.codefest.mapdl.mechanics.core.Blueprint,
    _challenge: ansys.codefest.mapdl.tools.Challenge,
    _mapdl_loc: pathlib.Path = None,
    _server: ansys.codefest.mapdl.tools.Server = None
) → None
```






---

### <kbd>property</kbd> BuildyMcBuildFace.has_suggestion

Returns True if this challenge has a suggestion, otherwise, False. 



**Returns:**
  if the instance has a suggested design available 



---

## <kbd>method</kbd> `BuildyMcBuildFace.build_bridge`

```python
build_bridge(
    design: ansys.codefest.mapdl.constants.Submission,
    mapdl_version: int = None
) → Bridge
```

Construct bridge from a design. 

Depending on the design this step may take time. The method does three things in this order: 

 1. Validate the design can be used to create a simulation 

 2. Create a simulation blueprint from the design 

 3. Create a simulation from the blueprint and execute it 

 4. Create a Bridge object with the simulation and return it 

Steps 1 and 2 are typically very fast, but 3 can take significantly longer depending on the complexity of your design. 

If your submission does not pass the validation step, it does not count as an attempt. Include plot=True as an arg if you'd like matplotlib to plot the result as well. 

Materials can optionally be included in the design as a list of IDs (integers) that correspond to the list of beams. See all the materials available (and their IDs) by accessing the `acf.MATERIALS` dict. 



**Args:**
 
 - <b>`design`</b>:  the design you wish to build from 
 - <b>`mapdl_version`</b>:  mapdl version to use (when multiple available and not remote) 



**Returns:**
 instantiated Bridge object, which can be used to gather results 



**Examples:**
 

In the following examples we step through the whole simulation loop from start to finish. In Example 2 we connect to a server instead of a local connection. 

```python
    # Example 1
    import ansys.codefest.mapdl as acf
    example = acf.Start.builtin_challenge('1a')
    design = example.suggest_a_design()
    bridge = example.build_bridge(design, mapdl_version=231)
    success, feedback, beams = bridge.assess_for_breaks()
    print(feedback)  # should print feedback as a string if no success

    # Example 2
    import ansys.codefest.mapdl as acf
    example = acf.Start.builtin_challenge('1a',
                                           server=acf.Server())
    design = example.suggest_a_design()
    bridge = example.build_bridge(design)
    success, feedback, beams = bridge.assess_for_breaks()
``` 

---

## <kbd>method</kbd> `BuildyMcBuildFace.calculate_design_cost`

```python
calculate_design_cost(design: ansys.codefest.mapdl.constants.Submission) → float
```

Calculate how much the provided design would cost 

This does not perform a simulation and the result is returned as a float in dollars. 



**Args:**
 
 - <b>`design`</b>:  design dictionary to be used for the calculation 



**Returns:**
 the cost of the design in dollarydoos 

---

## <kbd>method</kbd> `BuildyMcBuildFace.display_problem`

```python
display_problem() → None
```

Print the summary text of the challenge. 



**Returns:**
  None 

---

## <kbd>method</kbd> `BuildyMcBuildFace.get_fixed_nodes`

```python
get_fixed_nodes() → list[list[int]]
```

Get a list of the fixed nodes (rocks + start + end). 

Returns a list of all rock nodes as well as the start and end nodes. A "node" in this list is a list of 3 integers: 

`[node_number, x_coord, y_coord]` 





**Notes:**

> Rock node numbers start at N + 1, where N is the id_ of nodes on the problem square. E.g. if your problem square is 23 x 23, then N = 23^2 N = 529, so the first rock node id_ will be 530, the second 531, and so on. 
>The Start and End nodes are ALWAYS numbered 1 and 2, respectively. 
>

**Returns:**
  A list of the fixed nodes ordered [number, x, y] 

---

## <kbd>method</kbd> `BuildyMcBuildFace.plot_design`

```python
plot_design(
    design: ansys.codefest.mapdl.constants.Submission
) → tuple[matplotlib.figure.Figure, matplotlib.axes._axes.Axes, matplotlib.colorbar.Colorbar]
```

Plot a bridge design using matplotlib, return fig, ax, and colorbar. 

Optionally you can include the list of beams with results to plot the stresses on each as well. 



**Args:**
 
 - <b>`design`</b>:  the design you wish to plot 
 - <b>`beams`</b>:  list of beam objects. Must be in same order (and quantity) as those in `design` 



**Returns:**
 the figure, axes and colorbar of the plot 

---

## <kbd>method</kbd> `BuildyMcBuildFace.suggest_a_design`

```python
suggest_a_design() → Submission
```

Return a working design that solves the problem if one is available. 

If a design is not available, then an empty dictionary is returned and a warning raised. 



**Notes:**

> This design will work, but it will not be optimal and may be extremely inefficient and/or costly. It is meant as an example and a starting point. 
>

**Returns:**
  the suggested design, if it is available 

