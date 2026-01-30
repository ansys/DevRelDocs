# ContactElementTypeParams

<a id="ansys.meshing.prime.ContactElementTypeParams"></a>

### *class* ansys.meshing.prime.ContactElementTypeParams(model=None, tie_surf_to_surf=None, tie_node_to_surf=None, contact_pair_surf_to_surf=None, contact_pair_node_to_surf=None, json_data=None, \*\*kwargs)

Parameters to control element type choices for contact surfaces in TIEs and CONTACT PAIRs.

* **Parameters:**

  **model: Model**
  : Model to create a `ContactElementTypeParams` object with default parameters.

  **tie_surf_to_surf: int, optional**
  : Element type for TIE with Surface-to-Surface contact where the contact surface is of type ELEMENT. Default value is 174. The choices are 174 and 175.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **tie_node_to_surf: int, optional**
  : Element type for TIE with Node-to-Surface contact where the contact surface is of type ELEMENT. Default value is 175. The choices are 174 and 175.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **contact_pair_surf_to_surf: int, optional**
  : Element type for CONTACT PAIR with Surface-to-Surface contact where the contact surface is of type ELEMENT. Default value is 174. The choices are 174 and 175.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **contact_pair_node_to_surf: int, optional**
  : Element type for CONTACT PAIR with Node-to-Surface contact where the contact surface is of type ELEMENT. Default value is 174. The choices are 174 and 175.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ContactElementTypeParams` object with provided parameters.

### Examples

```pycon
>>> contact_element_type_params = prime.ContactElementTypeParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`ContactElementTypeParams.print_default`](ansys.meshing.prime.ContactElementTypeParams.print_default.md#ansys.meshing.prime.ContactElementTypeParams.print_default)()   | Print the default values of `ContactElementTypeParams` object.   |
| [`ContactElementTypeParams.set_default`](ansys.meshing.prime.ContactElementTypeParams.set_default.md#ansys.meshing.prime.ContactElementTypeParams.set_default)([...])    | Set the default values of the `ContactElementTypeParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [`ContactElementTypeParams.contact_pair_node_to_surf`](ansys.meshing.prime.ContactElementTypeParams.contact_pair_node_to_surf.md#ansys.meshing.prime.ContactElementTypeParams.contact_pair_node_to_surf)   | Element type for CONTACT PAIR with Node-to-Surface contact where the contact surface is of type ELEMENT.    |
| [`ContactElementTypeParams.contact_pair_surf_to_surf`](ansys.meshing.prime.ContactElementTypeParams.contact_pair_surf_to_surf.md#ansys.meshing.prime.ContactElementTypeParams.contact_pair_surf_to_surf)   | Element type for CONTACT PAIR with Surface-to-Surface contact where the contact surface is of type ELEMENT. |
| [`ContactElementTypeParams.tie_node_to_surf`](ansys.meshing.prime.ContactElementTypeParams.tie_node_to_surf.md#ansys.meshing.prime.ContactElementTypeParams.tie_node_to_surf)                              | Element type for TIE with Node-to-Surface contact where the contact surface is of type ELEMENT.             |
| [`ContactElementTypeParams.tie_surf_to_surf`](ansys.meshing.prime.ContactElementTypeParams.tie_surf_to_surf.md#ansys.meshing.prime.ContactElementTypeParams.tie_surf_to_surf)                              | Element type for TIE with Surface-to-Surface contact where the contact surface is of type ELEMENT.          |
<!-- vale on -->