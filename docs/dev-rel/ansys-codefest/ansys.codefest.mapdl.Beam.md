
# <kbd>class</kbd> `Beam`
Dataclass for continuous material linking two nodes. 



**Args:**
 
 - <b>`start`</b>:  starting node of beam 
 - <b>`end`</b>:  ending node of beam 
 - <b>`section`</b>:  cross-section of beam 
 - <b>`material`</b>:  material of beam 
 - <b>`number`</b>:  beam number 
 - <b>`stress`</b>:  maximum stress experienced by beam. Initialises as 0. 

### <kbd>method</kbd> `Beam.__init__`

```python
__init__(
    start: ansys.codefest.mapdl.mechanics.core.Node,
    end: ansys.codefest.mapdl.mechanics.core.Node,
    section: ansys.codefest.mapdl.mechanics.core.CrossSection = CrossSection(shape=<BeamXn.CIRCLE: 2>, dimensions=[0.01]),
    material: ansys.codefest.mapdl.constants.Material = Material(name='Steel', density=7850.0, elastic_modulus=210000000000.0, poissons_ratio=0.29, yield_strength=330000000.0, price_per_kg=1.2, id=1),
    number: int = None,
    stress: float = 0.0
) → None
```






---

### <kbd>property</kbd> Beam.cost

Return Beam cost 



**Returns:**
  beam cost as a float, in dollarydoos 

---

### <kbd>property</kbd> Beam.cross_section_area

Return beam cross-section area. 



**Returns:**
  beam area as a float 

---

### <kbd>property</kbd> Beam.length

Return beam length 



**Returns:**
  beam length as float 

---

### <kbd>property</kbd> Beam.mass

Return Beam mass 



**Returns:**
  beam mass ass a float 



---

## <kbd>method</kbd> `Beam.has_been_broken`

```python
has_been_broken() → bool
```

Return True if the beam has experienced stress >= its yield. 



**Returns:**
  True if any of the bridge has exceeded the equivalent yield stress 

---

## <kbd>method</kbd> `Beam.is_beam_allowed`

```python
is_beam_allowed() → tuple[bool, list[str]]
```

Return True if beam is allowed by the environment. 

Difference between 'allowed' and 'valid'. All allowed beams are valid but not all valid beams are allowed. 



**Returns:**
  answer to function question as well as feedback 

---

## <kbd>method</kbd> `Beam.is_valid`

```python
is_valid() → tuple[bool, list[str]]
```

Return True if this instance of Beam is valid. 

list tuple will contain feedback on why False, or will be empty when True. 



**Returns:**
  answer to the question posed by the function name as well as  feedback 

