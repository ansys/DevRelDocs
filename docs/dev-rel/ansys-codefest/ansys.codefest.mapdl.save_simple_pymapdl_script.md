
# <kbd>function</kbd> `save_simple_pymapdl_script`

```python
save_simple_pymapdl_script(
    save_path: pathlib.Path = WindowsPath('pymapdl_simple.py')
) → None
```

Save a super-simple PyMAPDL example bridge script to file. 

This package comes with a pre-built example PyMAPDL script that can be used to streamline testing using pure PyMAPDL and bypassing the codefest library entirely. This function lets you access it. This version is a simpler pymapdl script. 

This example has been tailored to be as simple as possible whilst still running and does not require additional input to work. 

Defaults to your local directory. 



**Args:**
 
 - <b>`save_path`</b>:  path to be saved to. Must end in a `.py` file 



**Returns:**
 None 
