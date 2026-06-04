# compute_equivalent_beam_properties

<a id="compolyx.SectionCut.compute_equivalent_beam_properties"></a>

#### SectionCut.compute_equivalent_beam_properties(check_status=True, solver_exe_path=None)

> Compute the equivalent beam properties of the section cut.

> The section is exported to Mechanical APDL and solved based on G.L.Ghiringhelli’s paper
> ‘LINEAR, STRAIGHT AND UNTWISTED ANISOTROPIC BEAM SECTION PROPERTIES
> FROM SOLID FINITE ELEMENTS’. For more details, see the ACP documentation.

> * **Parameters:**
>   - check_status: Set to ‘True’ to throw an exception if the computation failed. Otherwise, use SectionalAnalysisOutputs.status to check if the computation failed.
>   - solver_exe_path: The path to the Mechanical APDL solver executable. If not provided, the default solver is used.
> * **Returns:**
>   SectionalAnalysisOutputs. The equivalent beam properties are stored under properties.

> Usage:
> >>> result = section_cut.compute_equivalent_beam_properties(check_status=False)
> >>> if result.status == “completed”:
> >>>     print(result.properties)
> >>> else:
> >>>     print(f”MAPDL output:

{result.mapdl_out_file}”)
: ```pycon
  >>>     print(f"Result file:
  ```

{result.sectional_result_file}”)
