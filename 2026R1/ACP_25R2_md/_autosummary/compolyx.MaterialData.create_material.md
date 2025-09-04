# create_material

<a id="compolyx.MaterialData.create_material"></a>

#### MaterialData.create_material(name, id=None, ply_type='undefined', E1=0.0, E2=0.0, E3=0.0, G12=0.0, G31=0.0, G23=0.0, nu12=0.0, nu13=0.0, nu23=0.0, rho=0.0, locked=False, ext_id='')

Create a constant material.

* **Parameters:**
  - name: Name of the new material.
  - ply_type: Type of ply for the material. Available string values: `regular`, `woven`, `orthotropic_homogeneous_core`, `isotropic_homogeneous_core`, `honeycomb_core`, `isotropic`, `adhesive`, and `undefined`.
  - E1 - rho: Material parameters.
* **Returns:**
  New instance of material.
