
# <kbd>class</kbd> `NodalBoundaryCondition`
Dataclass storing the boundary conditions at a node. 

Warp freedom currently ignored. 

### <kbd>method</kbd> `NodalBoundaryCondition.__init__`

```python
__init__(
    force: ansys.codefest.mapdl.mechanics.core.Vector,
    translational_freedoms: ansys.codefest.mapdl.mechanics.core.BooleanVector = BooleanVector(x=True, y=True, z=True),
    rotational_freedoms: ansys.codefest.mapdl.mechanics.core.BooleanVector = BooleanVector(x=True, y=True, z=True)
) → None
```








---

## <kbd>method</kbd> `NodalBoundaryCondition.add_rotational_freedoms`

```python
add_rotational_freedoms() → None
```

Add all rotational degrees of freedom to the node 



**Returns:**
  None 

---

## <kbd>method</kbd> `NodalBoundaryCondition.add_translation_freedoms`

```python
add_translation_freedoms() → None
```

Add all translational degrees of freedom to the node 



**Returns:**
  None 

---

## <kbd>classmethod</kbd> `NodalBoundaryCondition.fixed_point`

```python
fixed_point(
    force: ansys.codefest.mapdl.mechanics.core.Vector = Vector(x=0.0, y=0.0, z=0.0)
) → NodalBoundaryCondition
```

Create a fixed point boundary condition with no degrees of freedom 

optionally, you can also supply a force to be applied to the node. 



**Args:**
 
 - <b>`force`</b>:  a vector of the force to be applied to the node 



**Returns:**
 The nodal boundary condition 

---

## <kbd>classmethod</kbd> `NodalBoundaryCondition.free_point`

```python
free_point(
    force: ansys.codefest.mapdl.mechanics.core.Vector = Vector(x=0.0, y=0.0, z=0.0)
) → NodalBoundaryCondition
```

Create a free point boundary condition with all degrees of freedom 

optionally, you can also supply a force to be applied to the node. 



**Args:**
 
 - <b>`force`</b>:  a vector of the force to be applied to the node 



**Returns:**
 The nodal boundary condition 

---

## <kbd>method</kbd> `NodalBoundaryCondition.has_applied_force`

```python
has_applied_force() → bool
```

If any force has been applied to the node, return True, else False. 



**Returns:**
  True if force has been applied, False if not. 

---

## <kbd>method</kbd> `NodalBoundaryCondition.remove_all_freedoms`

```python
remove_all_freedoms() → None
```

Remove all degrees of freedom from the node 



**Returns:**
  None 

---

## <kbd>method</kbd> `NodalBoundaryCondition.remove_rotational_freedoms`

```python
remove_rotational_freedoms() → None
```

Remove all rotational degrees of freedom from the node 



**Returns:**
  None 

---

## <kbd>method</kbd> `NodalBoundaryCondition.remove_translation_freedoms`

```python
remove_translation_freedoms() → None
```

Remove all translational degrees of freedom from the node 



**Returns:**
  None 

