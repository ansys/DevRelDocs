# Material classes

<a id="materialdata"></a>

## `MaterialData`

<a id="compolyx.MaterialData"></a>

### *class* compolyx.MaterialData(graph, parent=None)

MaterialData manages all composite material data.

<a id="compolyx.MaterialData.copy"></a>

#### copy(source, on_duplicate_name='keep_both')

copy a list of material data source, keeps track of all dependencies

* **Parameters:**
  - source: a list of source of copy
  - on_duplicate_name: action to take if source.name is already contained in self.fabrics
    - keep_both: create a new instance with the same name (different id)
    - overwrite: replace first instance with equal name in self with source
    - keep_existing: ignore copy action, returns first existing instance in self with equal name

<a id="compolyx.MaterialData.copy_fabric"></a>

#### copy_fabric(source, on_duplicate_name='keep_both', memo=None)

Copy a fabric

* **Parameters:**
  - source: Source object to copy
  - on_duplicate_name: action to take if source.name is already contained in self.fabrics
    - keep_both: create a new instance with the same name (different id)
    - overwrite: replace first instance with equal name in self with source
    - keep_existing: ignore copy action, returns first existing instance in self with equal name
  - memo: a dict to collect copied items (for internal dependency tracking when copying stackups or sub-laminates)
* **Returns:**
  New Instance of Fabric

<a id="compolyx.MaterialData.copy_material"></a>

#### copy_material(source, on_duplicate_name='keep_both', memo=None)

Copy a material

* **Parameters:**
  - source: Source object to copy
  - on_duplicate_name: action to take if source.name is already contained in self.materials
    - keep_both: create a new instance with the same name (different id)
    - overwrite: replace first instance with equal name in self with source
    - keep_existing: ignore copy action, returns first existing instance in self with equal name
  - memo: a dict to collect copied items (for internal dependency tracking when copying stackups or sub-laminates)
* **Returns:**
  New instance of material

<a id="compolyx.MaterialData.copy_stackup"></a>

#### copy_stackup(source, on_duplicate_name='keep_both', memo=None)

Copy a stackup

* **Parameters:**
  - source: Source object to copy
  - on_duplicate_name: action to take if source.name is already contained in self.stackups
    - keep_both: create a new instance with the same name (different id)
    - overwrite: replace first instance with equal name in self with source
    - keep_existing: ignore copy action, returns first existing instance in self with equal name
  - memo: a dict to collect copied items
* **Returns:**
  New Instance of Fabric

<a id="compolyx.MaterialData.copy_sub_laminate"></a>

#### copy_sub_laminate(source, on_duplicate_name='keep_both', memo=None)

Copy a sub lamiante

* **Parameters:**
  - source: Source object to copy
  - on_duplicate_name: action to take if source.name is already contained in self.sub_laminates
    - keep_both: create a new instance with the same name (different id)
    - overwrite: replace first instance with equal name in self with source
    - keep_existing: ignore copy action, returns first existing instance in self with equal name
  - memo: a dict to collect copied items
* **Returns:**
  New Instance of sub laminate

<a id="compolyx.MaterialData.create_fabric"></a>

#### create_fabric(name, id=None, material=None, thickness=0.0, area_price=0.0, ignore_for_postprocessing=False, drop_off_material_handling='Global', cut_off_material_handling='Computed', drop_off_material=None, cut_off_material=None, draping_material_model='woven', draping_ud_coefficient=0.0)

Create a new fabric

* **Parameters:**
  - name: Name for the Fabric
  - material: Material of the Fabric
  - thickness: Thickness of the Fabric
  - area_price: Area Price of the Fabric
  - ignore_for_postprocessing: Flag if this material is post-processed
  - drop_off_material_handling: Type defining how drop-off material is used in drop-off areas of the fabric
  - cut_off_material_handling: Type defining how cut-off material is used in cut-off areas of the fabric
  - drop_off_material: Material to use for ‘Custom’ drop-off material handling
  - cut_off_material: Material to use for ‘Custom’ cut-off material handling
  - draping_material_model: Material model for draping, either ‘woven’ or ‘unidirectional’
  - draping_ud_coefficient: Coefficient for the unidirectional draping material model
* **Returns:**
  The created Fabric
* **Examples:**
  ```pycon
  >>> material_data = db.models['beam'].material_data
  >>> fabric_1 = material_data.create_fabric(name='Fabric.1', material=material_data.materials['Material.1'], thickness=0.2)
  ```

<a id="compolyx.MaterialData.create_material"></a>

#### create_material(name, id=None, ply_type='undefined', E1=0.0, E2=0.0, E3=0.0, G12=0.0, G31=0.0, G23=0.0, nu12=0.0, nu13=0.0, nu23=0.0, rho=0.0, locked=False, ext_id='')

Create a constant Material

* **Parameters:**
  - name: Name of the new Material
  - ply_type: Type of the ply for the material. Allowed string values: regular, woven, orthotropic_homogeneous_core, isotropic_homogeneous_core, honeycomb_core, isotropic, adhesive, undefined.
  - E1 - rho: Material parameters
* **Returns:**
  New Instance of Material

<a id="compolyx.MaterialData.create_stackup"></a>

#### create_stackup(name, id=None, fabrics=None, area_price=0.0, symmetry='No Symmetry', layup_sequence='Top-Down', drop_off_material_handling='Global', cut_off_material_handling='Computed', drop_off_material=None, cut_off_material=None, draping_material_model='woven', draping_ud_coefficient=0.0)

Create a new Stackup

* **Parameters:**
  - name: Name for the Stackup
  - fabrics: Fabrics of the Stackup
  - area_price: Area Price of the Stackup
  - symmetry: Symmetry the Stackup can be ‘No Symmetry’, ‘Even Symmetry’ or ‘Odd Symmetry’
  - layup_sequence: Layup sequence of the Stackup can be ‘Top-Down’ or ‘Bottom-Up’
  - drop_off_material_handling: Type defining how drop-off material is used in drop-off areas of the stackup
  - cut_off_material_handling: Type defining how cut-off material is used in cut-off areas of the stackup
  - drop_off_material: Material to use for ‘Custom’ drop-off material handling
  - cut_off_material: Material to use for ‘Custom’ cut-off material handling
  - draping_material_model: Material model for draping, either ‘woven’ or ‘unidirectional’
  - draping_ud_coefficient: Coefficient for the unidirectional draping material model
* **Returns:**
  The created Stackup
* **Examples:**
  ```pycon
  >>> material_data = db.models['beam'].material_data
  >>> stackup_1 = material_data.create_stackup(name='Stackup.1', fabrics=(material_data.fabrics['Fabric.1'],), draping1=0.3, draping2=0.7)
  ```

<a id="compolyx.MaterialData.create_sub_laminate"></a>

#### create_sub_laminate(name, id=None, fabrics=None, symmetry='No Symmetry', layup_sequence='Top-Down')

Create a new SubLaminate

* **Parameters:**
  - name: Name for the Sub Laminate
  - fabrics: Fabrics of the Sub Laminate
  - symmetry: Symmetry the Sub Laminate can be ‘No Symmetry’, ‘Even Symmetry’ or ‘Odd Symmetry’
  - layup_sequence: Layup sequence of the Sub Laminate can be ‘Top-Down’ or ‘Bottom-Up’
* **Returns:**
  The created SubLaminate
* **Examples:**
  ```pycon
  >>> material_data = db.models['beam'].material_data
  >>> sublaminate_1 = material_data.create_sub_laminate(name='SubLaminate.1', fabrics=(material_data.fabrics['Fabric.1'],material_data.stackups['Stackup.1']))
  ```

<a id="compolyx.MaterialData.enabled"></a>

#### *property* enabled

Whether MaterialData is currently enabled or not.

<a id="compolyx.MaterialData.export_matml"></a>

#### export_matml(path, unit_system=None)

Export materials to ANSYS Engineering Data MatML format.

* **Parameters:**
  - path: Path to file to write.
  - unit_system: Convert all quantities into this unit system. The units
    will be stored in the file written. The default is the unit system of the model.

<a id="compolyx.MaterialData.fabrics"></a>

#### *property* fabrics

Dictionary with all fabrics defined.

<a id="compolyx.MaterialData.find_materials"></a>

#### find_materials(\*\*properties)

Find materials with the given properties or property ranges

* **Parameters:**
  - properties: Arbitrary material properties which must be matched.
: Note that a single property value can be given as string,
      number or min-max range
* **Returns:**
  A list with materials which match the given properties. If nothing
  matches an empty list is returned.
* **Examples:**
  ```pycon
  >>> material_data = db.models['model.1'].material_data
  >>> materials = material_data.find_materials(E1=100000.0, nu12=0.3)
  >>> materials = material_data.find_materials( name='1')
  >>> materials = material_data.find_materials(E1=[200000.0, 220000.0], nu12=0.3, G12=[4500.0,5500.0])
  ```

<a id="compolyx.MaterialData.import_matml"></a>

#### import_matml(path, material_apdl_path='')

Import material data from MatML file as provided by Workbench
Engineering Data.

* **Parameters:**
  - path: File to read from.
  - material_apdl_path: Specify the APDL file containing the
    ANSYS Engineering Data material definitions.

<a id="compolyx.MaterialData.material_apdl_path"></a>

#### *property* material_apdl_path

Optional path to file with APDL material definitions to be used in the CDB export.

<a id="compolyx.MaterialData.materials"></a>

#### *property* materials

Dictionary with all materials defined.

<a id="compolyx.MaterialData.matml_path"></a>

#### *property* matml_path

Path to MatML file as provided by Workbench EngineeringData

<a id="compolyx.MaterialData.name"></a>

#### *property* name

Currently a name is needed for every object in the db tree.

<a id="compolyx.MaterialData.serialize"></a>

#### serialize()

Serialize to Python string

<a id="compolyx.MaterialData.stackups"></a>

#### *property* stackups

Dictionary with all stack ups defined.

<a id="compolyx.MaterialData.sub_laminates"></a>

#### *property* sub_laminates

Dictionary with all sub laminates defined.

<a id="compolyx.MaterialData.unit_system"></a>

#### *property* unit_system

Unit system of material data, propagated from model

<a id="material"></a>

## `Material`

<a id="compolyx.Material"></a>

### *class* compolyx.Material(graph, obj, parent=None)

ComPoLyX material class.

This class allows to retrieve all material properties defined within the loaded Finite Element model.

* **Access:**
  ```pycon
  >>> import compolyx
  >>> db = compolyx.DB()
  >>> model = db.models['class40.1']
  >>> materials = model.material_data.materials
  >>> mat_UD300 = materials['UD300_GLAS']
  >>> print mat_UD300.property_names
  ```

  [‘density’, ‘engineering_constants’, ‘larc_constants’, ‘puck_constants’, ‘strain_limits’, ‘stress_limits’,
  ‘thermal_expansion_coefficients’, ‘tsai_wu_constants’, ‘woven_characterization’, ‘woven_puck_constants_1’,
  ‘woven_puck_constants_2’, ‘woven_stress_limits_1’, ‘woven_stress_limits_2’]
  ```pycon
  >>> property_set_eng_const = mat_UD300['engineering_constants']
  ```

<a id="compolyx.Material.active_properties"></a>

#### *property* active_properties

List of the active properties for the underlying material.

<a id="compolyx.Material.create_property_set"></a>

#### create_property_set(property_name, \*\*kwargs)

Function to create a specific property set.

* **Parameters:**
  - property_name: A string defining the PropertySet to be created.

Key word arguments can be passed to define the constant properties of the newly created PropertySet. If the property already exists, it will be overwritten with the new data.

* **Example:**
  ```pycon
  >>> m = db.active_model
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> mat.create_property_set('density', rho=2150.0)
  ```

<a id="compolyx.Material.delete_property_set"></a>

#### delete_property_set(property_name)

Function to delete a specific property set.

* **Parameter:**
  - property_name: String defining the PropertySet to be deleted.

<a id="compolyx.Material.ext_id"></a>

#### *property* ext_id

Id of corresponding Material in external source.

<a id="compolyx.Material.is_constant"></a>

#### *property* is_constant

True if engineering constants are constant.

<a id="compolyx.Material.is_isotropic"></a>

#### *property* is_isotropic

True if ply_type is isotropic or isotropic_homogeneous_core.

<a id="compolyx.Material.link_path"></a>

#### *property* link_path

Root path of the current node in the tree for links to this object

<a id="compolyx.Material.locked"></a>

#### *property* locked

Material is generated from an external source and cannot be changed.

<a id="compolyx.Material.ply_type"></a>

#### *property* ply_type

Ply type. Allowed string values: regular, woven, orthotropic_homogeneous_core, isotropic_homogeneous_core, honeycomb_core, isotropic, adhesive, undefined

<a id="compolyx.Material.property_names"></a>

#### *property* property_names

List with all available property keys.

<a id="compolyx.Material.serialize"></a>

#### serialize()

Serialize to Python string

<a id="propertyset"></a>

### `PropertySet`

<a id="compolyx.PropertySet"></a>

### *class* compolyx.PropertySet(gil_wrapper, parent_=None, name_='')

Python PropertySet class.

This class wraps GIL-functionality and adds Python-UI utilities to all material PropertySets (Engineering Constants, Stress Limits, …).

* **Examples:**
  ```pycon
  >>> model = db.active_model
  >>> Eglas = model.material_data.materials['E-Glas']
  >>> Eglas_strain_limits = Eglas['strain_limits']
  >>> print Eglas_strain_limits.property_names
  ```

  [‘eXt’, ‘eXc’, ‘eYt’, ‘eYc’, ‘eZt’, ‘eZc’, ‘eSxy’, ‘eSxz’, ‘eSyz’, ‘effective_strain’]
  ```pycon
  >>> Eglas.update()
  >>> Eglas_Xt = Eglas_strain_limits.query('eXt', {'UserVar1' : 0.3, 'Temperature' : 65.7})
  ```

<a id="compolyx.PropertySet.get"></a>

#### get(variables=None)

Get raw PropertySet data. For puck_constants and woven_characterization the Puck Material Classification can be retrieved.

* **Parameters:**
  - variables: Optional string of variable to be retrieved (property or envrionment variable). If this string is set to mat_type the Puck Material Classification is returned if available.
* **Returns:**
  - If no variable was specified, all PropertySet raw data will be returned in dictionary-form. If a variable was specified, then only this data will be returned.
* **Examples:**
  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> gil_data = mat['engineering_constants'].get()
  ```

  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> mat_type = mat['puck_constants'].get('mat_type')
  ```

  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> E1_data = mat['engineering_constants'].get('E1')
  ```

<a id="compolyx.PropertySet.independent_names"></a>

#### *property* independent_names

List of the independent variable names.

<a id="compolyx.PropertySet.is_constant"></a>

#### *property* is_constant

True if the Engineering Constants of this material are constant.

<a id="compolyx.PropertySet.property_names"></a>

#### *property* property_names

Propety name list.

<a id="compolyx.PropertySet.query"></a>

#### query(variables=None, environment_point=None)

Query PropertySet data.

The available property names on this PropertySet can be retrieved through property_names.

An empty query returns all properties at the default environment point in dictionary-form.
If the PropertySet is not up-to-date, zeros are returned and a warning is thrown.

* **Parameters:**
  - variables: String or list of strings that defines which properties to query for. If a list of properties is provided, the returned list of results retains the order of properties.
  - environment_point: Dictionary defining at which environment state the queried properties are requested. The dictionary takes the form {Var1 : value_1, …}. For unspecified environment variables, their default value is assumed. Unkown environment variables will be ignored.
* **Examples:**
  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> data = mat['engineering_constants'].query()
  ```

  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> data = mat['engineering_constants'].query(['E1', 'E3'], {'Temperature' : 25.73, 'Shear Angle' : 1.8})
  ```

<a id="compolyx.PropertySet.set"></a>

#### set(props=None, \*\*kwargs)

Set constant and variable material data.

Constant properties can be given as keyword arguments.

* **Parameters:**
  - props: A dictionary or tuple of two dictionaries defining the data
* **Examples:**
  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> data_dict = {'Xc' : 5.1, 'Sxy':0.3}
  >>> mat['stress_limits'].set(data_dict)
  ```

  ```pycon
  >>> mat['stress_limits'].set(Xc=5.1,Sxy=0.3)
  ```

  ```pycon
  >>> m = db._active_model()
  >>> mat = m.material_data.materials['Corecell_A450']
  >>> data_dict = ({'rho' : [1000.0, 1020.5, 1025.0]}, {'Temperature' : ([22., 50., 150.], 25.)})
  >>> mat['density'].set(data_dict)
  ```

<a id="fabric"></a>

## `Fabric`

<a id="compolyx.Fabric"></a>

### *class* compolyx.Fabric(graph, obj, parent=None)

Class to represent fabric

<a id="compolyx.Fabric.area_price"></a>

#### *property* area_price

Area price of fabric

<a id="compolyx.Fabric.area_weight"></a>

#### *property* area_weight

Area weight of fabric

<a id="compolyx.Fabric.capture_analysis_plot"></a>

#### capture_analysis_plot(path=None, size=(800, 600))

Saves the 2D polar plot to a file.

Note that this function only works when executed from a GUI, or
in batch mode with a hidden GUI. It does not work in full batch
mode.

* **Parameters:**
  - path: Path of the produced image file.
  - size: Pixel size of the plot.

<a id="compolyx.Fabric.clt_query"></a>

#### clt_query(query='laminate_properties')

Returns the properties of the classical laminate theory:

* **Parameters:**
  - query: result type
* **Options:**
  - laminate_properties: Young’s, flexural and shear moduli of the laminate
  - polar_properties: E1, E2  and G12 depending on the laminate orientation
* **Example:**
  ```pycon
  >>> fab.clt_query(query='polar_properties')
  ```

<a id="compolyx.Fabric.create_plot"></a>

#### create_plot(query={'polar_properties': ['E1', 'G12']})

Generates 2D-plots with the results of interest

* **Parameters:**
  - query: query arguments
* **Options:**
  - layup:[‘pp’] Production plies
  - polar_properties:[‘E1’,’E2’,’G12’] polar plot of laminate stiffess
  - text_plot:[‘materials’, ‘angles’, ‘thicknesses’]
* **Examples:**
  ```pycon
  >>> query={'polar_properties':['E1', 'G12'], layup:['pp'], text_plot:['materials', 'angles', 'thicknesses']}
  ```

<a id="compolyx.Fabric.cut_off_material"></a>

#### *property* cut_off_material

Cut-off material used in cut-off areas of this fabric.

<a id="compolyx.Fabric.cut_off_material_handling"></a>

#### *property* cut_off_material_handling

Type defining how cut-off material is used in cut-off areas of this fabric. Types: [‘Computed’, ‘Global’, ‘Custom’]

<a id="compolyx.Fabric.draping_material_model"></a>

#### *property* draping_material_model

Draping material model.

<a id="compolyx.Fabric.draping_ud_coefficient"></a>

#### *property* draping_ud_coefficient

UD draping coefficient

<a id="compolyx.Fabric.drop_off_material"></a>

#### *property* drop_off_material

Drop-off material used in drop-off areas of this fabric.

<a id="compolyx.Fabric.drop_off_material_handling"></a>

#### *property* drop_off_material_handling

Type defining how drop-off material is used in drop-off areas of this fabric. Types: [‘Global’, ‘Custom’]

<a id="compolyx.Fabric.graph_plot"></a>

#### *property* graph_plot

Graph Plot object used to configure 2D plots.

<a id="compolyx.Fabric.ignore_for_postprocessing"></a>

#### *property* ignore_for_postprocessing

Flag if this material is NOT post-processed.

<a id="compolyx.Fabric.is_constant"></a>

#### is_constant()

Returns True if all engineering constants and strength limits of the assigned material are constant.

<a id="compolyx.Fabric.material"></a>

#### *property* material

Material of the fabric

<a id="compolyx.Fabric.serialize"></a>

#### serialize()

Serialize to Python string

<a id="compolyx.Fabric.thickness"></a>

#### *property* thickness

Thickness of fabric

<a id="compolyx.Fabric.update_plot"></a>

#### update_plot()

Updates the 2D plot

Note: The coupling effect is always neglected (which is anyway 0 for a single fabric)

<a id="stackup"></a>

## `Stackup`

<a id="compolyx.Stackup"></a>

### *class* compolyx.Stackup(graph, obj, parent=None)

Class to represent stack-up

<a id="compolyx.Stackup.add_fabric"></a>

#### add_fabric(fabric, angle=0.0)

Add fabric at end of fabrics of the Stackup

<a id="compolyx.Stackup.area_price"></a>

#### *property* area_price

Price per area of the Stackup

<a id="compolyx.Stackup.area_weight"></a>

#### *property* area_weight

Area weight of the Stackup

<a id="compolyx.Stackup.capture_analysis_plot"></a>

#### capture_analysis_plot(path=None, size=(800, 600))

Saves the 2D polar plot to a file.

Note that this function only works when executed from a GUI, or
in batch mode with a hidden GUI. It does not work in full batch
mode.

* **Parameters:**
  - path: Path of the produced image file.
  - size: Pixel size of the plot.

<a id="compolyx.Stackup.clear_fabrics"></a>

#### clear_fabrics()

Clear all fabrics

<a id="compolyx.Stackup.clt_query"></a>

#### clt_query(query='laminate_properties')

Returns the properties of the classical laminate theory

* **Parameters:**
  - query: query parameters
* **Options:**
  - layup: Return the layup
  - laminate_properties: Young’s, flexural and shear moduli of the laminate
  - polar_properties: E1, E2  and G12 depending on the laminate orientation
  - stiffness_matrix: Returns the laminate stiffness matrix (ABD)
  - compliance_matrix: Returns the lamiante compliance matrix (inverse of ABD)
* **Example:**
  ```pycon
  >>> stackup.clt_query(query='laminate_properties')
  ```

<a id="compolyx.Stackup.create_plot"></a>

#### create_plot(query={'layup': ['pp', 'ap'], 'polar_properties': ['E1', 'G12']}, core_scale_factor=None)

Generates 2D-plots with the results of interest

* **Parameters:**
  - query: Query parameters
  - core_scale_factor: Scale core thickness by this value.
* **Options:**
  - layup:[‘pp’, ‘ap’] Production Ply and Analysis Plies
  - polar_properties:[‘E1’,’E2’,’G12’] polar plot of laminate stiffesses
  - text_plot:[‘materials’,’angles’,’thicknesses’] property to show as label in the layup plot
* **Examples:**
  ```pycon
  >>> query={'polar_properties':['E1', 'G12'], layup:['pp'], text_plot:['materials']}
  ```

<a id="compolyx.Stackup.cut_off_material"></a>

#### *property* cut_off_material

Cut-off material used in cut-off areas of this Stackup.

<a id="compolyx.Stackup.cut_off_material_handling"></a>

#### *property* cut_off_material_handling

Type defining how cut-off material is used in cut-off areas of this stackup. Types: [‘Computed’, ‘Global’, ‘Custom’]

<a id="compolyx.Stackup.draping_material_model"></a>

#### *property* draping_material_model

Draping material model.

<a id="compolyx.Stackup.draping_ud_coefficient"></a>

#### *property* draping_ud_coefficient

UD Draping Coefficient

<a id="compolyx.Stackup.drop_off_material"></a>

#### *property* drop_off_material

Drop-off material used in drop-off areas of this Stackup.

<a id="compolyx.Stackup.drop_off_material_handling"></a>

#### *property* drop_off_material_handling

Type defining how drop-off material is used in drop-off areas of this stackup. Types: [‘Global’, ‘Custom’]

<a id="compolyx.Stackup.fabrics"></a>

#### *property* fabrics

Fabrics property of the Stackup

<a id="compolyx.Stackup.get_ordered_fabrics"></a>

#### get_ordered_fabrics()

Returns all fabrics and orientations including symmetry and layup sequence option.

<a id="compolyx.Stackup.graph_plot"></a>

#### *property* graph_plot

Graph Plot object used to configure 2D plots.

<a id="compolyx.Stackup.insert_fabric"></a>

#### insert_fabric(pos, fabric, angle)

Insert fabric at given position

<a id="compolyx.Stackup.is_constant"></a>

#### is_constant()

Returns True if all engineering constants and strength limits of the assigned fabrics are constant.

<a id="compolyx.Stackup.layup_sequence"></a>

#### *property* layup_sequence

Layup Sequence of the Stackup can be ‘Top-Down’ or ‘Bottom-Up’

<a id="compolyx.Stackup.remove_fabric"></a>

#### remove_fabric(pos)

Remove fabric from position

* **Parameters:**
  - pos: Position of the Fabric to remove

<a id="compolyx.Stackup.serialize"></a>

#### serialize()

Serialize to Python string

<a id="compolyx.Stackup.symmetry"></a>

#### *property* symmetry

Symmetry of the Stackup can be ‘No Symmetry’, ‘Even Symmetry’ or ‘Odd Symmetry’

<a id="compolyx.Stackup.thickness"></a>

#### *property* thickness

Thickness of the Stackup

<a id="compolyx.Stackup.update_plot"></a>

#### update_plot()

updates the data of the 2D plot

<a id="sublaminate"></a>

## `SubLaminate`

<a id="compolyx.SubLaminate"></a>

### *class* compolyx.SubLaminate(graph, obj, parent=None)

Class to represent sub-laminate

<a id="compolyx.SubLaminate.add_fabric"></a>

#### add_fabric(fabric, angle=0.0)

Add fabric at end of fabrics list

<a id="compolyx.SubLaminate.area_price"></a>

#### *property* area_price

Price per area of the Sub Laminate

<a id="compolyx.SubLaminate.area_weight"></a>

#### *property* area_weight

Area weight of the Sub Laminate

<a id="compolyx.SubLaminate.capture_analysis_plot"></a>

#### capture_analysis_plot(path=None, size=(800, 600))

Saves the 2D polar plot to a file.

Note that this function only works when executed from a GUI, or
in batch mode with a hidden GUI. It does not work in full batch
mode.

* **Parameters:**
  - path: Path of the produced image file.
  - size: Pixel size of the plot.

<a id="compolyx.SubLaminate.clear_fabrics"></a>

#### clear_fabrics()

Clear all fabrics

<a id="compolyx.SubLaminate.clt_query"></a>

#### clt_query(query='laminate_properties')

Returns the properties of the classical laminate theory

* **Parameters:**
  - query: result type
* **Options:**
  - layup: Return the layup of the laminate
  - laminate_properties: Young’s, flexural and shear moduli of the laminate
  - polar_properties: E1, E2  and G12 depending on the laminate orientation
  - stiffness_matrix: Returns the laminate stiffness matrix (ABD)
  - compliance_matrix: Returns the lamiante compliance matrix (inverse of ABD)
* **Example:**
  ```pycon
  >>> sub.clt_query(query='layup')
  ```

<a id="compolyx.SubLaminate.create_plot"></a>

#### create_plot(query={'layup': ['mp', 'pp', 'ap'], 'polar_properties': ['E1', 'G12']}, core_scale_factor=None)

Generates 2D-plots with the results of interest

* **Parameters:**
  - query: query parameters
  - core_scale_factor: Scale core thickness by this value.
* **Options:**
  - layup:[‘mp’, ‘pp’, ‘ap’] Modeling Ply, Production Plies and Analysis Plies
  - polar_properties:[‘E1’,’E2’,’G12’] polar plot of laminate stiffesses
  - text_plot:[‘materials’,’thicknesses’,’angles’] text plot shown in the layup plot
* **Example:**
  ```pycon
  >>> query={'polar_properties':['E1', 'G12'], layup:['pp'], text_plot:['materials']}
  ```

<a id="compolyx.SubLaminate.fabrics"></a>

#### *property* fabrics

Fabrics property of the Sub Laminate

<a id="compolyx.SubLaminate.get_ordered_fabrics"></a>

#### get_ordered_fabrics()

Returns a list with all sub materials (fabrics and stackups) and orientations including symmetry and layup sequence option.

<a id="compolyx.SubLaminate.get_ordered_sub_materials"></a>

#### get_ordered_sub_materials()

Returns a list with all fabrics and orientations including symmetry and layup sequence option.

<a id="compolyx.SubLaminate.graph_plot"></a>

#### *property* graph_plot

Graph Plot object used to configure 2D plots.

<a id="compolyx.SubLaminate.insert_fabric"></a>

#### insert_fabric(pos, fabric, angle)

Insert fabric at given position

<a id="compolyx.SubLaminate.is_constant"></a>

#### is_constant()

Returns True if all engineering constants and strength limits of the assigned fabrics are constant.

<a id="compolyx.SubLaminate.layup_sequence"></a>

#### *property* layup_sequence

Layup Sequence of the Sub Laminate can be ‘Top-Down’ or ‘Bottom-Up’

<a id="compolyx.SubLaminate.remove_fabric"></a>

#### remove_fabric(pos)

Remove fabric from position

<a id="compolyx.SubLaminate.serialize"></a>

#### serialize()

Serialize to Python string

<a id="compolyx.SubLaminate.symmetry"></a>

#### *property* symmetry

Symmetry of the Sub Laminate can be ‘No Symmetry’, ‘Even Symmetry’ or ‘Odd Symmetry’

<a id="compolyx.SubLaminate.thickness"></a>

#### *property* thickness

Thickness of the Sub Laminate

<a id="compolyx.SubLaminate.update_plot"></a>

#### update_plot()

Updates the data of the 2D plot
