# Extending the Python environment

ACP is delivered with a frozen Python environment, so you cannot modify it using standard tools such as `pip`. However, you can still import and use Python modules that are not included with the ACP installation (for example, `matplotlib`). To do this, create a virtual Python environment (VENV) and add it to the ACP Python path.

## Create a virtual environment

Before creating the virtual environment, make sure you use the same Python version that ACP uses. To check the version, run `sys.version` in ACP’s Python shell.

There are several ways to create a new VENV:

* **Using the Ansys-delivered Python:**

  Navigate to the delivered Ansys Python that is in the 
subfolder of `<WB root dir>\commonfiles\CPython` and call the VENV module.

  ```pycon
  python.exe -m venv C:\my_ansys_python_env
  ```

  This creates a new environment in `C:\my_ansys_python_env`.
* **Using a standard Python installation:**

  After installing Python, run:

    ```pycon
    python.exe -m venv C:\my_new_python_env`
    ```

  This creates a new environment in `C:\my_new_python_env`.
* **Using another Python distribution:**

  Tools such as Anaconda also enable you to create virtual environments.

## Install a module in the virtual environment

Activate the virtual environment before installing additional modules.

For example, using the Windows Command Prompt:

```pycon
C:\my_new_python_env\scripts\activate
pip install matplotlib
```

## Use virtual-environment modules inside ACP

To make VENV-installed modules available in ACP, append the VENV paths to `sys.path` inside ACP.

1. In the virtual environment, run: 

    ```pycon
    import sys
    sys.path
    ```

    Copy the returned list of paths.
2. In ACP’s Python shell, extend the ACP path:

    ```pycon
    sys.path.extend([….])
    ```

Appending the VENV paths ensures that ACP uses its own Python first and then falls back to the VENV for additional modules.
ven if they were built with the same or compatible compilers.

**Note:** ACP uses the Python environment delivered with the Ansys Workbench application, located in `<installation dir>\commonfiles\CPython`. This Python build may differ from an official Python distribution (different compiler, different binary modules, or different bundled libraries). As a result, packages installed in your VENV may not be fully compatible with ACP’s Python, even if they share the same version number.

## Alternatives to extending ACP’s Python

For data exchange (for example, dictionaries, NumPy arrays, and other objects), you can write data to disk and load it in another environment. One option is Python’s built‑in [pickle module](https://docs.python.org/3/library/pickle.html#module-pickle).

**Example: Saving data with pickle**

```pycon
import pickle
import numpy as np
example_array = np.zeros((1000,2))
with open('test.pkl','wb') as f:
  pickle.dump(example_array, f)
```

**Example: Loading data in another environment**

```pycon
import pickle
with open('test.pkl','rb') as f:
  loaded_array = pickle.load(f)
```

NumPy provides similar functionality. For more information, see `numpy.save`, `numpy.savez`, and `numpy.load`.