# get

<a id="compolyx.PropertySet.get"></a>

#### PropertySet.get(variables=None)

Get raw PropertySet data. For puck_constants and woven_characterization the Puck Material Classification can be retrieved.

### Parameters:
  - variables: Optional string of variable to be retrieved (property or envrionment variable). If this string is set to mat_type, then the Puck Material Classification is returned if available.
### Returns:
  - If no variable was specified, all PropertySet raw data will be returned in dictionary-form. If a variable was specified, then only this data will be returned.
### Examples:
  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> gil_data = mat['engineering_constants'].get()
  ```

  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> mat_type = mat['puck_constants'].get('mat_type')
  ```

  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> E1_data = mat['engineering_constants'].get('E1')
  ```
