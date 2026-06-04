
# <kbd>class</kbd> `Start`
Collection of codefest-starting methods. 

Loading built in challenges requires a level id_, but it is also possible to use custom challenges as well, provided they are in the correct format. 

Make sure you are tackling the correct challenge! 

You can easily check which ids are available by calling `acf.Challenge.get_available_example_ids()` to get them as a list of strings. 

or you can create your own challenge/load an external one. 



**Examples:**
 ```python-repl
     >>> import ansys.codefest.mapdl as acf
     >>> builder = acf.Start.builtin_challenge(id_='1a')
     >>> builder = acf.Start.load_challenge(your_geometry_filepath,
                                            suggestion_file=your_corresponding_suggestion_filepath)
``` 




---

## <kbd>method</kbd> `Start.builtin_challenge`

```python
builtin_challenge(
    id_: str,
    story_type: ansys.codefest.mapdl.constants.StoryType = <StoryType.CONCISE: 1>,
    mapdl_loc: pathlib.Path = None,
    server: ansys.codefest.mapdl.tools.Server = None
) → BuildyMcBuildFace
```

Begin a builtin challenge, using a given id. 

You can also specify the story type. The concise version is the default but a minimalist and verbose version are both available as well. 



**Args:**
 
 - <b>`id_`</b>:  ID of challenge to be loaded, e.g. '1' or '11a' etc. 
 - <b>`story_type`</b>:  enum, acf.StoryType 
 - <b>`mapdl_loc`</b>:  path to alternative mapdl executable 
 - <b>`server`</b>:  Optional Server object containing connection details.  If present a remote connection will be attempted. 



**Returns:**
 BuildyMcBuildFace 

---

## <kbd>method</kbd> `Start.load_challenge`

```python
load_challenge(
    geometry_file: pathlib.Path,
    story_type: ansys.codefest.mapdl.constants.StoryType = <StoryType.CONCISE: 1>,
    suggestion_file: pathlib.Path = None,
    mapdl_loc: pathlib.Path = None,
    server: ansys.codefest.mapdl.tools.Server = None
) → BuildyMcBuildFace
```

Load an external or custom challenge. 

If you have a corresponding suggestion dictionary it must be included here. 

You can also specify the story type. The concise version is the default but a minimalist and verbose version are both available as well. 



**Args:**
 
 - <b>`geometry_file`</b>:  path to the geometry json file 
 - <b>`story_type`</b>:  enum acf.StoryType 
 - <b>`suggestion_file`</b>:  path to suggestion json file 
 - <b>`mapdl_loc`</b>:  path to alternative mapdl executable 
 - <b>`server`</b>:  Optional Server object containing connection details.  If present a remote connection will be attempted. 



**Returns:**
 BuildyMcBuildFace 

