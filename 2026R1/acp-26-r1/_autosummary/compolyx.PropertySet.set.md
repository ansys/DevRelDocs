# set

<a id="compolyx.PropertySet.set"></a>

#### PropertySet.set(props=None, \*\*kwargs)

Set constant and variable material data.

Constant properties can be given as keyword arguments.

### Parameters:
  - props: A dictionary or tuple of two dictionaries defining the data.
### Examples:
  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> data_dict = {'Xc' : 5.1, 'Sxy':0.3}
  >>> mat['stress_limits'].set(data_dict)
  ```

  ```pycon
  >>> mat['stress_limits'].set(Xc=5.1,Sxy=0.3)
  ```

  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> data_dict = ({'rho' : [1000.0, 1020.5, 1025.0]}, {'Temperature' : ([22., 50., 150.], 25.)})
  >>> mat['density'].set(data_dict)
  ```
