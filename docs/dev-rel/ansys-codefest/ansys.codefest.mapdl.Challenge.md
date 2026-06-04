
# <kbd>class</kbd> `Challenge`
Instance of a challenge. 

Stores the geometry file path and the equivalent suggestion & story paths, IF they exist. A suggestion does not need to exist and can be None. If no story is given, 

### <kbd>method</kbd> `Challenge.__init__`

```python
__init__(
    _geometry_filename: Union[pathlib.Path, importlib.resources.abc.Traversable],
    _story_filename: Union[pathlib.Path, importlib.resources.abc.Traversable],
    _suggestion_filename: Union[pathlib.Path, importlib.resources.abc.Traversable] = None
) → None
```






---

### <kbd>property</kbd> Challenge.geometry_filename

The geometry file path. 



**Returns:**
 `           the location of the geometry file as a pathlib Path 

---

### <kbd>property</kbd> Challenge.has_suggestion

True if this challenge has an available suggestion. 



**Returns:**
  True/False depending on the presence of an available suggestion. 

---

### <kbd>property</kbd> Challenge.is_available

Does the geometry file path point to a file? 



**Returns:**
  If the geometry file path points to a file. 

---

### <kbd>property</kbd> Challenge.story_filename

The file path to the story file. 



**Returns:**
  the location of the story file as a pathlib Path 

---

### <kbd>property</kbd> Challenge.suggestion_filename

The suggestion file path. 



**Returns:**
  the location of the suggestion json file as a pathlib Path 



---

## <kbd>method</kbd> `Challenge.choose_story_type`

```python
choose_story_type(story_type)
```

Get the correct story file based on the chosen type. 



**Args:**
 
 - <b>`story_type`</b>:  enum of which story type you have chosen 



**Returns:**
 file path to the chosen story 

---

## <kbd>classmethod</kbd> `Challenge.create_challenge`

```python
create_challenge(
    path_to_level: pathlib.Path,
    path_to_suggestion: pathlib.Path = None,
    story_type: ansys.codefest.mapdl.constants.StoryType = <StoryType.CONCISE: 1>
)
```

Create a Challenge instance from scratch. 



**Args:**
 
 - <b>`path_to_level`</b>:  path to where the level file should go 
 - <b>`path_to_suggestion`</b>:  path to where the suggestion file should go 
 - <b>`story_type`</b>:  what sort of instructions should be added to the  challenge 



**Returns:**
 The new challenge instance 

---

## <kbd>classmethod</kbd> `Challenge.create_example`

```python
create_example(
    number: str,
    story_type: ansys.codefest.mapdl.constants.StoryType = <StoryType.CONCISE: 1>
)
```

Create a Challenge instance from a built-in an example. 



**Args:**
 
 - <b>`number`</b>:  aka ID. This will be something like `'8'` or `'1a'` 
 - <b>`story_type`</b>:  what sort of instructions should be added to the  challenge 



**Returns:**
 The new challenge instance 

---

## <kbd>method</kbd> `Challenge.get_available_example_ids`

```python
get_available_example_ids() → list[str]
```

Return all available example IDs as a list. 



**Returns:**
  list of IDs as strings. 

---

## <kbd>method</kbd> `Challenge.get_available_suggestion_ids`

```python
get_available_suggestion_ids()
```

Get available example IDs which also have associated suggestions. 



**Returns:**
  list of IDs as strings. 

---

## <kbd>method</kbd> `Challenge.get_fixed_nodes`

```python
get_fixed_nodes() → list[list[int]]
```

Get list of fixed nodes for this example 



**Returns:**
  list of fixed nodes as [number, x, y] 

---

## <kbd>method</kbd> `Challenge.get_suggestion`

```python
get_suggestion() → Submission
```

Get suggested design dictionary (if available) 



**Returns:**
  suggested design dictionary 

---

## <kbd>method</kbd> `Challenge.get_text`

```python
get_text() → str
```

Get contents of story file as a string without the problem. 



**Returns:**
  string of this challenge's story file 

