# create_element_set

<a id="compolyx.Model.create_element_set"></a>

#### Model.create_element_set(name, id=None, element_labels=None, element_sets=None, x=None, y=None, z=None, op='new', middle_offset=False, show=False)

Create a new element set.

### Parameters:
  - name: Name of the element set.
  - element_labels: Labels of elements to be assigned to the element set.
  - element_sets: Select elements of these sets.
  - x: X-range to select.
  - y: Y-range to select.
  - z: Z-range to select.
  - op: Select operation. Valid options: all, new (default), add, remove, intersect, inverse, and none.
  - middle_offset: Boolean to enforce that the laminate mid-plane is moved onto the reference surface.
### Returns:
  The created element set.

If element set already exists, it is updated depending on the operation given in op.
