# export_skin

<a id="compolyx.SolidModel.export_skin"></a>

## SolidModel.export_skin(path, midside_nodes=True)

Creates a geometry file (STP or IGES) of the solid model based on the tessellated FE mesh.

### Parameters
  - path: Out file path (supported formats are: stp, step, igs and iges)
  - midside_nodes: Whether to export create the tessellation based on the quadratic mesh or not,
