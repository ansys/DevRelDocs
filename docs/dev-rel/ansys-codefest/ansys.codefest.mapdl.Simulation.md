
# <kbd>class</kbd> `Simulation`
Simulation class. Consumes 1 blueprint instance in order to perform. 

Most args are left as defaults and calculated during the building phase. 



**Args:**
 
 - <b>`blueprint`</b>:  a blueprint object 
 - <b>`nodes`</b>:  list of nodes to be simulated 
 - <b>`beams`</b>:  list of beams to be simulated 
 - <b>`mapdl`</b>:  base mapdl object (or existing session object) 
 - <b>`mapdl_version`</b>:  version number if specific one is needed 
 - <b>`mapdl_loc`</b>:  location on your harddrive of the mapdl executable if needed 
 - <b>`server`</b>:  server url if connection to remote server needed. 

### <kbd>method</kbd> `Simulation.__init__`

```python
__init__(
    blueprint: ansys.codefest.mapdl.mechanics.core.Blueprint,
    nodes: list[ansys.codefest.mapdl.mechanics.core.Node] = None,
    beams: list[ansys.codefest.mapdl.mechanics.core.Beam] = None,
    mapdl: ansys.mapdl.core.mapdl.MapdlBase = None,
    mapdl_version: int = None,
    mapdl_loc: pathlib.Path = None,
    server: ansys.codefest.mapdl.tools.Server = None
) → None
```








---

## <kbd>method</kbd> `Simulation.apply_force`

```python
apply_force(gravity: bool = True) → None
```

Apply forces to nodes as dictated by the blueprint 



**Returns:**
  None 

---

## <kbd>method</kbd> `Simulation.assess_for_breaks`

```python
assess_for_breaks() → tuple[bool, str]
```

Assess which beams have broken, if any, and return a report. 

The result will be printed to screen, but, the success and the description of what happened will be returned together as a tuple of a bool and a string. 



**Returns:**
  tuple[bool, str] 

---

## <kbd>method</kbd> `Simulation.constrain_dof`

```python
constrain_dof() → None
```

Constrain the simulation's nodes as dictated by the blueprint 



**Returns:**
  None 

---

## <kbd>method</kbd> `Simulation.construct_beams`

```python
construct_beams() → None
```

Construct the simulation's beams/elements as dictated by the blueprint 



**Returns:**
  None 

---

## <kbd>method</kbd> `Simulation.construct_nodes`

```python
construct_nodes() → None
```

Construct the simulation's nodes as dictated by the blueprint 



**Returns:**
  None 

---

## <kbd>method</kbd> `Simulation.execute`

```python
execute() → None
```

Run the entire Simulation script in order. 



**Returns:**
  None 

---

## <kbd>method</kbd> `Simulation.fetch_beam_stresses`

```python
fetch_beam_stresses() → list[tuple[int, float]]
```

Fetch the stresses on each beam, and include the beam id_. 

Returns a list of tuples containing the beam id_ and the stress that beam experienced. 



**Returns:**
  list of all beams, their numbers and their stresses 

---

## <kbd>method</kbd> `Simulation.plot_result`

```python
plot_result() → tuple[matplotlib.figure.Figure, matplotlib.axes._axes.Axes, matplotlib.colorbar.Colorbar]
```

Plot the simulation's stresses and return the fig, ax, cb objects 



**Returns:**
  plotting material 

---

## <kbd>method</kbd> `Simulation.post_process`

```python
post_process() → None
```

Process the results of the simulation. 

Extract and store the max equivalent stress on each beam. 



**Returns:**
  None 

---

## <kbd>method</kbd> `Simulation.set_cross_section`

```python
set_cross_section(
    section: ansys.codefest.mapdl.mechanics.core.CrossSection
) → None
```

Set the cross-section for all subsequent beams. 



**Args:**
 
 - <b>`section`</b>:  CrossSection object 



**Returns:**
 None 

---

## <kbd>method</kbd> `Simulation.set_materials`

```python
set_materials() → None
```

Set the materials as dictated by the blueprint 



**Returns:**
  None 

---

## <kbd>method</kbd> `Simulation.setup`

```python
setup() → MapdlBase
```

Run the standard MAPDL set up commands and return mapdl namespace. 



**Returns:**
  MapdlBase 

---

## <kbd>method</kbd> `Simulation.solve`

```python
solve() → None
```

Run the simulation 

Executes the APDL simulation. 



**Returns:**
  None 

