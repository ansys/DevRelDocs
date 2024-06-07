# Solution classes

<a id="solution"></a>

## `Solution`

<a id="compolyx.Solution"></a>

### *class* compolyx.Solution(obj, parent=None)

Class to compute postprocessings of a finite element solution.

Access:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
>>> model = db.models['class40.1']
>>> sol = db.models['class40.1'].add_solution(name='class40.1', path='class40.rst', format='ansys:rst')
```

<a id="compolyx.Solution.ID"></a>

#### *property* ID

Id to be displayed in Envelope solution

<a id="compolyx.Solution.active"></a>

#### *property* active

Activate or deactivate solution

<a id="compolyx.Solution.clear"></a>

#### clear()

Clear all result data

<a id="compolyx.Solution.clear_element_results"></a>

#### clear_element_results()

Resets the post-processing results for each layered element

<a id="compolyx.Solution.clear_failure_criteria_results"></a>

#### clear_failure_criteria_results()

Resets the failure criteria results for each layered element

<a id="compolyx.Solution.enabled"></a>

#### *property* enabled

Whether this object is currently enabled or not. Mainly defined through the current application mode pre or post.

<a id="compolyx.Solution.export_results_to_csv"></a>

#### export_results_to_csv(definition=None, entities=[], file_path=None, solution_set=-1, solids=False, spot='all')

Exports the shell results of the selected entities to a csv file.

* **Parameters:**
  - definitions: Selected definition - CombinedFailure Criteria object or as string ‘deformations’, ‘strains’ or ‘stresses’
  - entities: Defines the selection for the export. Can be a list of ElementSets, AnalysisPlies or SolidModels
  - file_path: File name
  - solution_set: Solution Set for which data is requested
  - solids: Boolean whether to take the results of the solid elements or not. Default is False (results of shells).
  - spots: Layer positions for which the results are exported. Allowed are ‘bot’, ‘mid’, ‘top’, ‘bot/top’, and ‘all’.

Export results of solid models: Select the element set which is selected in the extrusion settings.

* **Usage:**
  ```pycon
  >>> model = db.active_model
  >>> model.solutions['Solution.1'].export_results_to_csv( definition='stresses', entities=[model.element_sets['BULKHEAD_ALL']], file_path=r'C: mp\stresses.csv', solution_set=1, solids=False, spot='bot-top')
  ```

<a id="compolyx.Solution.ext_id"></a>

#### *property* ext_id

Id of corresponding Solution in external solution (ComponentID).

<a id="compolyx.Solution.format"></a>

#### *property* format

File format string. Choose one of ‘abaqus:inp’,’ansys:cdb’ or ‘nastran:f06’

<a id="compolyx.Solution.has_element_temperatures"></a>

#### *property* has_element_temperatures

Boolean flag if element nodal temperatures are read from the rst file.

<a id="compolyx.Solution.has_progressive_damage"></a>

#### *property* has_progressive_damage

Boolean flag if progressive_damage data are read from the rst file.

<a id="compolyx.Solution.load"></a>

#### load()

Load result data from file

<a id="compolyx.Solution.load_factor"></a>

#### *property* load_factor

Optional load factor within substep of non-linear solution where the nodal solution should be taken from. Only valid for ‘nastran:f06’ format.  Becomes (False,0) if not defined.

<a id="compolyx.Solution.path"></a>

#### *property* path

Path to the data file

<a id="compolyx.Solution.path2"></a>

#### *property* path2

Path to the data file

<a id="compolyx.Solution.plots"></a>

#### *property* plots

Container with PostProcessing Plots

<a id="compolyx.Solution.query"></a>

#### query(definition, options={'eval_ins': False}, position='centroid', selection='all', entity=None, entities=None, spot=None, component=None, rosette=None, simulate=False, solution_set=-1)

Query results from the solution

* **Parameters:**
  - definition: The postproc definition defines what results are evaluated. Can be given as
    CombinedFailureCriteria object or as string such as
    ‘strains’, ‘stresses’, ‘laminate_forces’, ‘deformations’, ‘temperatures’ or ‘progressive_damage’.
  - options: Dict with the additional options used to fully configure the definition.
    - stresses: options={“eval_ins”:True} to enable the interlaminar normal stress evaluation for shells
  - position: Position where data is queried:
    - nodal, centroid, element_nodal, integration_point or element_results
  - selection: The selection set determines the selected nodes and elements.
    Can be given as string ‘sel0’ - ‘sel5’ or ‘all’
    or can be given as ObjectSelection object such as model.selection or scene.active_set
  - entity:  Entity for which results are evaluated.
    Currently supported: Analysis ply or analysis ply vertex
  - entities: If a list of entities is given, the query will also compute and return a list of results, with one array for each entity.
  - spot: Used to identify bot, mid or top when querying layered shells
  - component: Components to query. Valid components for
    - DEFORMATION
      - x, y, z, usum, rotx, roty, rotz -> (nx1)
      - all -> (nx6), translations, rotations -> (nx3)
    - STRAIN
      - e1, e2, e3, e12, e23, e13, eI, eII, eII, von_mises -> (nx1)
      - all -> (nx6), principals -> (nx3)
    - STRESS
      - s1, s2, s3, s12, s23, s13, sI, sII, sII -> (nx1)
      - all -> (nx6), principals -> (nx3)
    - FAILURE CRITERIA
      - irf (Inverse reserve factor), rf (Reserve factor), mos (Margin of safety) -> (nx1)
      - fm (Failure mode) ->(n x string(size<=4))
      - li (Layer index)  ->(n x 1) (Only available for element queries where no entity is given.)
    - LAMINATE FORCES
      - all -> (nx8)
    - PROGRESSIVE DAMAGE
      - status (damage status), ft, fc (fiber tensile/compressive) ->(nx1)
      - mt, mc (matrix tensile/compressive), s (shear) ->(nx1)
      - sed (energy dissipated per unit volume), sedv (energy per unit volume due to viscous damping) ->(nx1)
  - rosette: If a rosette is given, the results are evaluated with respect to this coordinate system (not recommended for non-linear results)
  - simulate: Whether the query is only simulated to test if it will return data.
    If this flag is set the query(…) function will only return 0 or 1.
  - solution_set: Identifier of the queried solution. -1 identifies the last available Set.
* **Usage:**
  ```pycon
  >>> solution.query(definition='laminate_forces',position='centroid',selection='sel0',component='all',rosette=model.rosetttes['Rosette.1'],solution_set=-1)
  >>> solution.query(definition=model.defintions['FailureCriteria'], position='centroid', selection='sel0', component='irf',solution_set=-1)
  >>> solution.query(definition='stresses', position='element_results', selection='sel0', component='s3',solution_set=-1)
  ```

<a id="compolyx.Solution.read_stresses_strains"></a>

#### *property* read_stresses_strains

True if the stresses and strains are to be read from rst file. Only valid for ‘ansys:rst’ format.

<a id="compolyx.Solution.recompute_iss_of_solids"></a>

#### *property* recompute_iss_of_solids

Use laminate-based computation method to recalculate the interlaminar shear stress distribution.

<a id="compolyx.Solution.renumbering_mapping_paths"></a>

#### *property* renumbering_mapping_paths

Path of the assembly renumbering files.

<a id="compolyx.Solution.serialize"></a>

#### serialize()

Serialize to Python string

<a id="compolyx.Solution.set"></a>

#### *property* set

Result set to be read. Only valid for ‘ansys:rst’ format.

<a id="compolyx.Solution.solution_dict"></a>

#### *property* solution_dict

The time or frequency dictionary used in the solution plots GUI.

<a id="compolyx.Solution.subcase"></a>

#### *property* subcase

Optional subcase to read. Only valid for ‘nastran:f06’ format. Becomes (False,0) if not defined.

<a id="compolyx.Solution.time_or_frequency"></a>

#### *property* time_or_frequency

The time or frequency associated with the active set.

<a id="compolyx.Solution.use_felyx_to_compute_pp_results"></a>

#### *property* use_felyx_to_compute_pp_results

True if the stresses and strains are to be computed by felyx. If the stresses and strains are read from rst file, nothing is computed.

<a id="compolyx.Solution.use_solid_results"></a>

#### *property* use_solid_results

Allows to visualize the post-processing results of layered solid models on the ‘Layered Solid Reference Surface’.

<a id="envelopesolution"></a>

## `EnvelopeSolution`

<a id="compolyx.EnvelopeSolution"></a>

### *class* compolyx.EnvelopeSolution(graph, obj, parent=None)

<a id="compolyx.EnvelopeSolution.add_solution_set"></a>

#### add_solution_set(solution, sset=-1)

Add solution set to solution sets of Envelope Solution

* **Parameters:**
  - solution: Solution object
  - sset: Solution set (default: -1)

<a id="compolyx.EnvelopeSolution.clear_solution_sets"></a>

#### clear_solution_sets()

Clear Solution Sets of Envelope Solution

<a id="compolyx.EnvelopeSolution.enabled"></a>

#### *property* enabled

Whether this object is currently enabled or not. Mainly defined through the current application mode pre or post.

<a id="compolyx.EnvelopeSolution.remove_solution_set"></a>

#### remove_solution_set(solution, sset=-1)

Remove solution set from solution sets of Envelope Solution

* **Parameters:**
  - solution: Solution object
  - sset: Solution set (default: -1)
