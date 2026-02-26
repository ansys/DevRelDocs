# find_materials

<a id="compolyx.Model.find_materials"></a>

#### Model.find_materials(\*\*properties)

Find materials with the given properties or property ranges.

### Parameters:
  - properties: Arbitrary material properties which must be matched. Note that a single property value can be given as string, number, or min-max range.
### Returns:
  A list with materials which match the given properties. If nothing matches, then an empty list is returned.

Examples:

```pycon
>>> materials = model.find_materials(E1=100000.0, nu12=0.3)
>>> materials = model.find_materials( name='1')
>>> materials = model.find_materials(E1=[200000.0, 220000.0], nu12=0.3, G12=[4500.0,5500.0])
```
