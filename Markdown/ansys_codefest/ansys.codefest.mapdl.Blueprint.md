
# <kbd>class</kbd> `Blueprint`
The Plan/Blueprint for a simulation. Contains nodes, beams and BCs. 

### <kbd>method</kbd> `Blueprint.__init__`

```python
__init__(
    nodes: list[ansys.codefest.mapdl.mechanics.core.Node],
    beams: list[ansys.codefest.mapdl.mechanics.core.Beam]
) → None
```






---

### <kbd>property</kbd> Blueprint.cost

Return total cost of material in the blueprint. 



**Returns:**
  cost of the material in dollary doos 

---

### <kbd>property</kbd> Blueprint.grid_lims

Return the populated grid limits. 



**Returns:**
  the resulting grid limits 

---

### <kbd>property</kbd> Blueprint.mass

Return total mass of material in the blueprint. 



**Returns:**
  mass of material as a float 



---

## <kbd>method</kbd> `Blueprint.is_valid`

```python
is_valid() → tuple[bool, str]
```

Returns True if this Blueprint instance is ready to be converted to a sim. 

A blueprint must contain a list of nodes, a list of beams, a load path (going from node 1 to node 2 via nodes connected by beams), a beam cross-section value and the dimensions of that cross-section. 



**Returns:**
  answer to function question as well as feedback 

---

## <kbd>method</kbd> `Blueprint.save_as`

```python
save_as(file_path: pathlib.Path = WindowsPath('input.txt')) → None
```

save blueprint to specified file path. 

Defaults to "input.txt" in your current working directory. 



**Args:**
 
 - <b>`file_path`</b>:  path to where you wish to save the file 



**Returns:**
 None 

---

## <kbd>method</kbd> `Blueprint.with_challenge_attempt_geometry`

```python
with_challenge_attempt_geometry(
    attempt: ansys.codefest.mapdl.constants.Submission
) → None
```

Add challenge attempt geometry to blueprint. 



**Args:**
 
 - <b>`attempt`</b>:  design dictionary for this attempt 



**Returns:**
 None 

