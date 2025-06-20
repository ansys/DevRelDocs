# PropertySet

<a id="compolyx.PropertySet"></a>

### *class* compolyx.PropertySet(gil_wrapper, parent_=None, name_='')

Python PropertySet class.

This class wraps GIL-functionality and adds Python-UI utilities to all material PropertySets (Engineering Constants, Stress Limits, etc.).

* **Examples:**
  ```pycon
  >>> model = db.active_model
  >>> Eglas = model.material_data.materials['E-Glas']
  >>> Eglas_strain_limits = Eglas['strain_limits']
  >>> print Eglas_strain_limits.property_names
  ```

  [‘eXt’, ‘eXc’, ‘eYt’, ‘eYc’, ‘eZt’, ‘eZc’, ‘eSxy’, ‘eSxz’, ‘eSyz’, ‘effective_strain’]
  ```pycon
  >>> Eglas.update()
  >>> Eglas_Xt = Eglas_strain_limits.query('eXt', {'UserVar1' : 0.3, 'Temperature' : 65.7})
  ```

### Attributes

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`PropertySet.independent_names`](compolyx.PropertySet.independent_names.md#compolyx.PropertySet.independent_names)   | List of the independent variable names.                          |
| [`PropertySet.is_constant`](compolyx.PropertySet.is_constant.md#compolyx.PropertySet.is_constant)                     | True if the Engineering Constants of this material are constant. |
| [`PropertySet.property_names`](compolyx.PropertySet.property_names.md#compolyx.PropertySet.property_names)            | Propety name list.                                               |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------|------------------------------------------|
| [`PropertySet.get`](compolyx.PropertySet.get.md#compolyx.PropertySet.get)([variables])                          | Get raw PropertySet data.                |
| [`PropertySet.query`](compolyx.PropertySet.query.md#compolyx.PropertySet.query)([variables, environment_point]) | Query PropertySet data.                  |
| [`PropertySet.set`](compolyx.PropertySet.set.md#compolyx.PropertySet.set)([props])                              | Set constant and variable material data. |
