
# <kbd>class</kbd> `Vector`
3D Float vector dataclass 

Simple 3D vector class for simple operations. Typically used for position, velocity, force, etc. The z-value can be assumed to be 0 because this framework deals only with 2D problems for now. 



**Examples:**
 ```python-repl
     >>> import ansys.codefest.mapdl as acf
     >>> v = acf.Vector(1., 2., 3.)
``` 

### <kbd>method</kbd> `Vector.__init__`

```python
__init__(x: float, y: float, z: float = 0.0) → None
```








---

## <kbd>method</kbd> `Vector.is_non_zero`

```python
is_non_zero() → bool
```

Return True if any component in the vector is non-zero. 



**Returns:**
  True if any value is non-zero, else False 

---

## <kbd>classmethod</kbd> `Vector.zero`

```python
zero() → Vector
```

Class method to generate a zero-vector 



**Returns:**
  all-zero Vector 

