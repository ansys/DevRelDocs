# export_skin

<a id="compolyx.ImportedSolidModel.export_skin"></a>

#### ImportedSolidModel.export_skin(path, midside_nodes=True)

Creates a geometry file (STP or IGES) of the solid model based on the tessellated FE mesh.

* **Parameters:**
  - path: Out file path (supported formates are: stp, step, igs and iges)
  - midside_nodes: Whether to export create the tessellation based on the quadratic mesh or not,
