# set_default

<a id="ansys.meshing.prime.ContactElementTypeParams.set_default"></a>

#### *static* ContactElementTypeParams.set_default(tie_surf_to_surf=None, tie_node_to_surf=None, contact_pair_surf_to_surf=None, contact_pair_node_to_surf=None)

Set the default values of the `ContactElementTypeParams` object.

* **Parameters:**

  **tie_surf_to_surf: int, optional**
  : Element type for TIE with Surface-to-Surface contact where the contact surface is of type ELEMENT. Default value is 174. The choices are 174 and 175.

  **tie_node_to_surf: int, optional**
  : Element type for TIE with Node-to-Surface contact where the contact surface is of type ELEMENT. Default value is 175. The choices are 174 and 175.

  **contact_pair_surf_to_surf: int, optional**
  : Element type for CONTACT PAIR with Surface-to-Surface contact where the contact surface is of type ELEMENT. Default value is 174. The choices are 174 and 175.

  **contact_pair_node_to_surf: int, optional**
  : Element type for CONTACT PAIR with Node-to-Surface contact where the contact surface is of type ELEMENT. Default value is 174. The choices are 174 and 175.

<!-- !! processed by numpydoc !! -->
