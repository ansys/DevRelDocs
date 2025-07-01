# add_solution

<a id="compolyx.Model.add_solution"></a>

#### Model.add_solution(name, id='', path=None, path2=None, format='ansys:rst', subcase=(False, 0), set=-1, load_factor=(False, 0.0), read_stresses_strains=True, use_felyx_to_compute_pp_results=True, use_solid_results=True, recompute_iss_of_solids=False, renumbering_mapping_paths=[], ext_id='', active=True)

Load a nodal solution from file(s) and add it to the model.

* **Parameters:**
  - name: Custom name of the solution.
  - path: Path to the data file.
  - path2: Optional path to second result file. Useful for ANSYS PRNSOL solution, where nodal deformations and nodal rotations can be exported to different files only.
  - format: File format string. Available options: `abaqus:fieldreport`, `ansys:prnsol`, `ansys:rst`, and `nastran:f06`.
  - subcase: Optional subcase to read. Only valid for `nastran:f06` format. (False,0) if not given in the F06 file.
  - load_factor: Optional load factor within substep of non-linear solution where the nodal solution should be taken from. Only valid for `nastran:f06` format. (False,0) if not given in the F06 file.
  - set: Result set for ANSYS RST files, None is last result set.
  - read_stresses_strains: Reads strain and stress results from the RST file (necessary to postprocess non-linear solutions).
  - ‘use_felyx_to_compute_pp_results’: Use ACP to compute strain and stress data.
  - use_solid_results: Maps solid element solution onto `Layered Solid Reference Surface`.
  - recompute_iss_of_solids: For solids the interlaminar shear stresses are recalculated considering the laminate stacking.
  - renumbering_mapping_paths: List of paths of the assembly renumbering files used to map the results of composite assemblies.
  - active: Active/inactive flag.
* **Returns:**
  The new Solution instance just added to the model.
