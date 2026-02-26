# query

<a id="compolyx.PropertySet.query"></a>

#### PropertySet.query(variables=None, environment_point=None)

Query PropertySet data

The available property names on this PropertySet can be retrieved through property_names.

An empty query returns all properties at the default environment point in dictionary-form.
If the PropertySet is not up-to-date, zeros are returned and a warning is thrown.

### Parameters:
  - variables: String or list of strings that defines which properties to query for. If a list of properties is provided, the returned list of results retains the order of properties.
  - environment_point: Dictionary defining at which environment state the queried properties are requested. The dictionary takes the form {Var1 : value_1, …}. For unspecified environment variables, their default value is assumed. Unkown environment variables will be ignored.
### Examples:
  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> data = mat['engineering_constants'].query()
  ```

  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> data = mat['engineering_constants'].query(['E1', 'E3'], {'Temperature' : 25.73, 'Shear Angle' : 1.8})
  ```
