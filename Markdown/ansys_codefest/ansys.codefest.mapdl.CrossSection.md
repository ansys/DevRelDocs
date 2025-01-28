
# <kbd>class</kbd> `CrossSection`
Beam cross-section details. 

There are 4 cross-sections available: RECT - BeamXn.RECTANGLE HREC - BeamXn.RECTANGLETUBE CSOLID - BeamXn.CIRCLE CTUBE - BeamXn.CYLINDER 

### <kbd>method</kbd> `CrossSection.__init__`

```python
__init__(
    shape: ansys.codefest.mapdl.constants.BeamXn,
    dimensions: list[float]
) → None
```






---

### <kbd>property</kbd> CrossSection.area

Return the cross-sectional area of the beam. 



**Returns:**
  Beam area as a float 



---

## <kbd>method</kbd> `CrossSection.is_valid`

```python
is_valid() → tuple[bool, list[str]]
```

Return True if this instance of CrossSection has valid param values. 

If it is not valid, feedback will be a list of strings explaining why the Node is invalid. 



**Returns:**
  answer to question posed by function name as well as feedback. 

