# create_property_set

<a id="compolyx.Material.create_property_set"></a>

#### Material.create_property_set(property_name, \*\*kwargs)

Function to create a specific property set

* **Parameters:**
  - property_name: A string defining the PropertySet to be created.

Keyword arguments can be passed to define the constant properties of the newly created PropertySet. If the property already exists, then it will be overwritten with the new data.

* **Example:**
  ```pycon
  >>> m = db.active_model
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> mat.create_property_set('density', rho=2150.0)
  ```
