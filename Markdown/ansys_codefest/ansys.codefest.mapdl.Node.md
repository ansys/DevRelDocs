
# <kbd>class</kbd> `Node`
Point used to join beams together and specify BCs. 

### <kbd>method</kbd> `Node.__init__`

```python
__init__(
    number: int,
    position: ansys.codefest.mapdl.mechanics.core.Vector,
    _boundary_condition: ansys.codefest.mapdl.mechanics.core.NodalBoundaryCondition = None,
    type: ansys.codefest.mapdl.mechanics.core.TypeNode = <TypeNode.CONSTRUCTED: 3>
) → None
```






---

### <kbd>property</kbd> Node.boundary_condition

Getter & setter for the nodal boundary condition. 



**Returns:**
  The nodal boundary condition 



---

## <kbd>classmethod</kbd> `Node.constructed_node`

```python
constructed_node(coord: list[typing.Union[int, float]], num: int) → Node
```

Create a 'constructed' node. AKA a node from a design. 

Unlike start and end nodes which have fixed node numbers constructed nodes must have a node id_ specified. This can not be an id_ in-use elsewhere. 



**Args:**
 
 - <b>`coord`</b>:  x,y coordinate 
 - <b>`num`</b>:  node number 



**Returns:**
 The created node object 

---

## <kbd>classmethod</kbd> `Node.end_node`

```python
end_node(coord: list[typing.Union[int, float]]) → Node
```

Create an instance of an 'end' node at a given coordinate. 



**Args:**
 
 - <b>`coord`</b>:  x,y coordinate 



**Returns:**
 The created node object 

---

## <kbd>method</kbd> `Node.is_valid`

```python
is_valid() → tuple[bool, list[str]]
```

Returns (True, feedback) if this Node instance is valid for use. 

If not valid feedback will be a list of strings explaining why the Node is invalid. 



**Returns:**
  result and feedback. 

---

## <kbd>classmethod</kbd> `Node.rock_node`

```python
rock_node(coord: list[typing.Union[int, float]], num: int) → Node
```

Create an instance of a 'rock' node at a given coordinate. 

AKA a fixed point node. 

Unlike start and end nodes which have fixed node numbers the rock node must have a node id_ specified. This can not be a id_ in-use elsewhere. 



**Args:**
 
 - <b>`coord`</b>:  x,y coordinate 
 - <b>`num`</b>:  node number 



**Returns:**
 The created node object 

---

## <kbd>classmethod</kbd> `Node.start_node`

```python
start_node(coord: list[typing.Union[int, float]]) → Node
```

Create an instance of a 'start' node at a given coordinate. 



**Args:**
 
 - <b>`coord`</b>:  x,y coordinate 



**Returns:**
 The created node object 

