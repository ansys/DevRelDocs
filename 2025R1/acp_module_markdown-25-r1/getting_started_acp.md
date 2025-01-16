# Getting started

<a id="basic-scripting"></a>

## Basic scripting

The scripting language of ACP is Python which is an object oriented programming language. The user should have some
basics experience in object oriented programming for the optimal use, but a basic script can easily be written by modifying an existing one or
copy and paste from the History or Shell view.

An example of one command is given below. In this command, the density of the material Corecell_A450 is defined (or modified if already defined) as 90.

```python
db.models['class40.1'].material_data.materials['Corecell_A450'].rho = 90.0
```

The easiest way to use scripting is to generate a script with the Graphical User Interface. Every action performed via the GUI is written to the
History view. Use copy and paste to create your own scripts with a text editor. Save the scripts as \*.py file and use the Run Script…
functionality in the File Menu to run your script. In the case of an error, check the Shell view for more details.

The aforementioned approach may be limited when it comes to retrieving solution results or specific model information.
The section [Advanced scripting](#advanced-python-code) lists several examples of to how to access such information via a script.

Additionally, an example of a python script is given in the Class40 example folder in the ACP installation directory. The update_materials.py file defines
stress limits, Puck and Tsai-Wu constants for the UD and core materials. A list of common commands used to retrieve or modify data is shown below.

<a id="advanced-python-code"></a>

<a id="advanced-scripting"></a>

## Advanced scripting

These examples are provided as a guide to more involved commands in the shell view. They all refer to the example model Kiteboard.

**Maximum Layup Thickness**

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

**Maximum Ply Thickness**

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