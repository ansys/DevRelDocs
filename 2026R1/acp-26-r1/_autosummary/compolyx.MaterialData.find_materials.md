# find_materials

<a id="compolyx.MaterialData.find_materials"></a>

#### MaterialData.find_materials(\*\*properties)

Find materials with the given properties or property ranges.

### Parameters:
  - properties: Arbitrary material properties which must be matched.
    : Note that a single property value can be given as string,
      number, or min-max range.
### Returns:
  A list with materials which match the given properties. If nothing
  matches, then an empty list is returned.
### Examples:
  ```pycon
  >>> material_data = db.models['model.1'].material_data
  >>> materials = material_data.find_materials(E1=100000.0, nu12=0.3)
  >>> materials = material_data.find_materials( name='1')
  >>> materials = material_data.find_materials(E1=[200000.0, 220000.0], nu12=0.3, G12=[4500.0,5500.0])
  ```
