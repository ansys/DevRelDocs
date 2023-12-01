# Logging

Use the following helper method to log MI Scripting Toolkit operations to a folder. This folder will be created in one
of the following locations depending on platform:

* Windows: `%LOCALAPPDATA%\Granta Design\MIScriptingToolkit\Python`
* Linux: `~/.appdata/Granta Design/MIScriptingToolkit/Python`


```python
from GRANTA_MIScriptingToolkit import granta as mpy

# Sets the Foundation API logger to log to a file in 
# %LOCALAPPDATA%\Granta Design\MIScriptingToolkit\Python\MIScriptingToolkitForPython_YYYY.MM.DD.log
# or on Linux...
# ~/.appdata/Granta Design/MIScriptingToolkit/Python/MIScriptingToolkitForPython_YYYY.MM.DD.log
mpy.log_to_file_in_local_app_data(path='Granta Design\\MIScriptingToolkit\\Python')
```

Note: The MI Scripting Toolkit's underlying C libraries will still perform their own logging, which can be found in
`%LOCALAPPDATA%\Granta Design\MIScriptingToolkit` (or the Linux equivalent). This does not affect logging through
Python.
