
# <kbd>class</kbd> `BooleanVector`
3D Boolean vector dataclass. 

Simple 3D vector class for simple boolean operations. Typically used for vectors where components are optional. 

The components are explicitly refewrred to as x, y and z. 



**Examples:**
 ```python-repl
     >>> import ansys.codefest.mapdl as acf
     >>> bv = acf.BooleanVector(True, False, True)
     >>> bv.y
     False
     >>> bv.z
     True
``` 

### <kbd>method</kbd> `BooleanVector.__init__`

```python
__init__(x: bool, y: bool, z: bool) → None
```






---

### <kbd>property</kbd> BooleanVector.false

If the vector is False in all components return True. 



**Returns:**
  True if all components are False, otherwise False 

---

### <kbd>property</kbd> BooleanVector.true

If the vector is True in all components return True. 



**Returns:**
  True if all components are True, otherwise False 



---

## <kbd>classmethod</kbd> `BooleanVector.all_false`

```python
all_false() → BooleanVector
```

Return an instance of BooleanVector which is False in all components 



**Returns:**
  a BooleanVector with all False properties 

---

## <kbd>classmethod</kbd> `BooleanVector.all_true`

```python
all_true() → BooleanVector
```

Return an instance of BooleanVector which is True in all components 



**Returns:**
  a BooleanVector with all True properties 

