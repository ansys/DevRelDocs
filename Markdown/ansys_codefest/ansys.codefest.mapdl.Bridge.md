
# <kbd>class</kbd> `Bridge`
Bridge class returned after a simulation has been executed. 

Possesses a few simple post-processing methods for simulations. 

### <kbd>method</kbd> `Bridge.__init__`

```python
__init__(
    simulation: ansys.codefest.mapdl.mechanics.core.Simulation,
    design: ansys.codefest.mapdl.constants.Submission
) → None
```








---

## <kbd>method</kbd> `Bridge.assess_for_breaks`

```python
assess_for_breaks(
    display: bool = False
) → tuple[bool, str, list[ansys.codefest.mapdl.mechanics.core.Beam]]
```

Assess which beams have broken, if any, and return a report. 

Returns a bool to say if the bridge was successful or not, as well as the feedback as a string and a list of beam objects containing the stresses of each beam. 





**Args:**
 
 - <b>`display`</b>:  defaults to False 



**Returns:**
 tuple of the success, details by beam (as a string), and a list of Beam objects 

---

## <kbd>method</kbd> `Bridge.plot`

```python
plot() → tuple[matplotlib.figure.Figure, matplotlib.axes._axes.Axes, matplotlib.colorbar.Colorbar]
```

Plot the simulation's stresses and return the figure, axes, and colorbar objects. 



**Returns:**
  the figure, axes and colorbar of the plot, respectively 

