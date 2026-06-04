
# <kbd>function</kbd> `save_pymapdl_script`

```python
save_pymapdl_script(
    save_path: pathlib.Path = WindowsPath('pymapdl_bridge_simulator.py')
) → None
```

Save the PyMAPDL script version of the builder to file. 

This package comes with a pre-built example PyMAPDL script that can be used to streamline testing using pure PyMAPDL and bypassing the codefest library entirely. This function lets you access it. 

In order to get this script to work you will have to provide a design dictionary and set of fixed nodes yourself. 

Defaults to your local directory. 



**Args:**
 
 - <b>`save_path`</b>:  path to be saved to. Must end in a `.py` file 



**Returns:**
 None 
