# Getting started

<a id="basic-scripting"></a>

## Basic scripting

ACP uses Python as its scripting language. Because the API is object‑oriented, having basic experience with object‑oriented programming is helpful. However, you can often start by copying and adapting commands from the History or Shell views.

The following example shows how to define or update the density of the material `Corecell_A450`:

```python
db.models['class40.1'].material_data.materials['Corecell_A450'].rho = 90.0
```

A simple way to begin scripting is to generate commands through the graphical user interface (GUI). Every action you perform in the ACP GUI is recorded in the history view. You can copy these commands into a text editor, save them as a \*.py file, and run the script using *File > Run Script…*. If a script fails, check the Shell view for error details.

This approach is useful for basic automation but limited for tasks such as querying solution results or retrieving detailed model information. For more advanced tasks, see the examples in [Advanced scripting](#advanced-python-code).

ACP also provides example scripts in the ACP installation directory. For instance, the update_materials.py script (in the Class40 example folder) defines stress limits and Puck and Tsai‑Wu constants for UD and core materials.

Below are several commonly used scripting patterns for retrieving or modifying data.

<a id="advanced-python-code"></a>

<a id="advanced-scripting"></a>

## Advanced scripting

These scripts illustrate more advanced operations using the example *Kiteboard* model. Each example shows how to query specific information from the active model.

### Maximum layup thickness

```python
# get active model
model = db.active_model
# get total thickness of all elements
thicknesses = list(model.mesh_query(name='thickness',position='centroid',selection='all'))
# get element labels
labels = model.mesh_query(name='labels',position='centroid',selection='all')
# get maximum thickness
max_thickness = max(thicknesses)
index_of_max = thicknesses.index(max_thickness)
# get element label with max thickness
element_label_with_max_thickness = labels[index_of_max]
```

### Maximum ply thickness

```python
# get active model
model = db.active_model
# create new selection of all elements attached to a specific ply
modeling_ply = model.modeling_ply_groups['Core'].plies['mp_4']
model.select_elements(selection='sel0',op='new',attached_to=[modeling_ply])
# get total thickness of the first entity of selection sel0
thicknesses = list(model.mesh_query(name='thickness',position='centroid',selection='sel0', entities=[modeling_ply])[0])
# get element labels
labels = model.mesh_query(name='labels',position='centroid',selection='sel0')
# get maximum thickness
max_thickness = max(thicknesses)
index_of_max = thicknesses.index(max_thickness)
# get element label with max thickness
element_label_with_max_thickness = labels[index_of_max]
```

### Maximum inverse reserve factor and failure mode

```python
# get active model
model = db.active_model
# get first solution
solution = model.solutions.values()[0]
# Returns the failure criterion definition
fc_definition = model.definitions['FailureCriteria.MaxStrain_Core']
# get element labels
labels = model.mesh_query(name='labels',position='centroid',selection='all')
# get inverse reserve factors of all elements
irfs = list(solution.query(definition=fc_definition,position='centroid',selection='all',component='irf'))
# get failure modes of all elements
failure_modes = solution.query(definition=fc_definition,position='centroid',selection='all',component='fm')
# Returns the maximum IRF value
max_irf = max(irfs)
# Returns the index of maximum IRF
index_of_max = irfs.index(max_irf)
# get failure mode corresponding to maximum IRF
critical_failure_mode = failure_modes[index_of_max]
# get element label where the maximum IRF occurs
element_label_of_max = labels[index_of_max]
```
