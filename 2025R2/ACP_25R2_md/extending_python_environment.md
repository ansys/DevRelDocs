# Extending the Python environment

Because ACP is delivered with a frozen Python, the Python environment cannot be 
modified with standard modules such as pip. Nevertheless, it is possible to import 
and use Python modules within ACP which are not delivered with the installation 
(matplotlib, for example). You can do this by creating a virtual Python environment 
(VENV) and adding this environment to the ACP Python path.

## How to create a virtual environment

First, make sure you are using the same version of Python that ACP is using. To call 
up the version number, type `sys.version` in ACP’s Python shell.

There are several options for generating your own VENV.

* Using the installed Ansys Python, navigate to the delivered Ansys Python that is in the 
subfolder of `<WB root dir>\commonfiles\CPython` and call the venv module.

  ```pycon
  python.exe -m venv C:\my_ansys_python_env
  ```

  This command creates a new environment in the folder `C:\my_ansys_python_env`.
* After installing Python, call the venv module to create a new VENV, using standard Python:

  ```pycon
  python.exe -m venv C:\my_new_python_env`
  ```

  This command creates a new VENV in the folder `C:\my_new_python_env`.
* There are other Python distributions as well (Anaconda, for example) which enable you to 
create virtual environments.

## How to install a module in your virtual environment and use it within ACP

You must activate the virtual Python environment before additional modules can be installed. 
The example below shows how to install matplotlib into your virtual Python environment using 
the Windows Command Prompt:

```pycon
C:\my_new_python_env\scripts\activate
pip install matplotlib
```

You are now ready to add the virtual Python environment to ACP’s Python. Use the VENV Python 
packages in ACP’s Python by appending the directories of the VENV to the Python system path of 
ACP. The Python path of the VENV is available through

`import sys`

`sys.path`

Copy this list of paths and add them in the ACP Python shell.
 
```pycon
sys.path.extend([….])
```

Appending the VENV paths to the Python path of ACP is important because it ensures the lookup 
goes through the ACP Python first before going into the VENV.

**Note:** ACP uses Ansys’ Python which comes with the installation of Ansys Workbench. You can find 
it in `<installation dir>\commonfiles\CPython`. It is possible that the Ansys version was built 
with a different compiler than the one used for the official version of Python or the version 
you are running. Its delivered modules and libraries may also differ. This can cause runtime 
issues if your Python environment and its installed packages are not compatible with Ansys Python, 
even if they were built with the same or compatible compilers.

## Alternatives to extending ACP’s Python

With regard to dictionaries, DataFrames, or other data types, you can write to the disk using 
Python’s native [pickle module](https://docs.python.org/3/library/pickle.html#module-pickle) in 
order to use the data in another program or share it with others. 
To do so, use the following commands:

```pycon
import pickle
import numpy as np
example_array = np.zeros((1000,2))
with open('test.pkl','wb') as f:
  pickle.dump(example_array, f)
```

You can then load the stored data in a different environment using pickle again and then process the data:

```pycon
import pickle
with open('test.pkl','rb') as f:
  loaded_array = pickle.load(f)
```

Numpy offers similar functionality. See `numpy.save`, `numpy.savez`, and `numpy.load` for more details.